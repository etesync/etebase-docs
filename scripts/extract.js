const { createMdxAstCompiler } = require("@mdx-js/mdx");

const astCompiler = createMdxAstCompiler({ remarkPlugins: [] });

const fs = require("fs");
const glob = require("glob");
const util = require("util");
const { parse } = require("path");
const { execSync } = require("child_process");

main()

async function main() {
  const matches = await util.promisify(glob)("**/*.{md,mdx}", { cwd: "docs" });
  for (const file of matches) {
    const path = parse(file);
    const basePath = `scripts/js/src/${path.dir}/${path.name}`;
    fs.mkdirSync(basePath, {
      recursive: true,
    });

    const content = fs.readFileSync(`docs/${file}`);

    const root = astCompiler.parse(content);

    let index = 1;
    function writeFile(node, i, array) {
      if (writeCodeToFile(node, i, array, `${basePath}/${index}.ts`)) {
        index++;
      }
      if (node.children) {
        node.children.forEach((element, i, array) => {
          writeFile(element, i, array);
        });
      }
    }

    writeFile(root);
  }

  process.chdir("scripts/js");

  execSync("yarn init -y");
  execSync("yarn add etebase typescript");
  execSync("yarn tsc --init");

  try {
    execSync("yarn tsc --noEmit");
  } catch (e) {
    console.log(e.stdout.toString());
    console.error(e.stderr.toString());
    process.exit(1);
  }
}

function writeCodeToFile(node, i, array, file) {
  if (
    node.type === "jsx" &&
    node.value &&
    node.value.includes('<TabItem value="js">')
  ) {
    const codePieces = [];
    for (let j = i + 1; j < array.length; j++) {
      if (
        array[j].type === "jsx" &&
        array[j].value &&
        array[j].value.includes("</TabItem>")
      ) {
        break;
      }
      if (array[j].type === "code" && array[j].lang === "js") {
        codePieces.push({
          code: array[j].value,
          start: array[j].position.start,
          end: array[j].position.end,
        });
      }
    }
    const output = `
import * as Etebase from 'etebase';

async function main() {
${codePieces.map((piece) => `
//-start ${JSON.stringify(piece.start)}
${piece.code}
//-end ${JSON.stringify(piece.end)}
`
).join('')}
}`;
    fs.writeFileSync(file, output);
    return true;
  }
  return false;
}
