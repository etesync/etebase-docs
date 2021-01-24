const fs = require("fs");
const path = require("path");
const glob = require("glob");

glob("**/*.ts", { cwd: "scripts/js/src" }, (_err, matches) => {
  matches.reverse().forEach((element) => {
    importFromFile(element, "scripts/js/src");
  });
});

function importFromFile(file, base) {
  const exportedContent = fs.readFileSync(path.join(base, file)).toString();
  const reg = /\/\/-start (\S*)(.*?)\/\/-end (\S*)/gms;

  const changes = [];

  let match;
  while ((match = reg.exec(exportedContent)) !== null) {
    const start = JSON.parse(match[1]);
    const code = match[2];
    const end = JSON.parse(match[3]);
    changes.push({ start, code, end });
  }

  const parsed = path.parse(file);
  let outputPath = `docs/${parsed.dir}.md`;
  if (!fs.existsSync(outputPath)) {
    outputPath += "x";
  }

  let oldContent = fs.readFileSync(outputPath).toString();
  const newContent = changes
    .sort((a, b) => a.start.offset - b.start.offset)
    .reduce(
      (content, change) =>
        content.slice(0, change.start.offset) +
        "```js" +
        change.code +
        "```" +
        content.slice(change.end.offset),
      oldContent
    );

  fs.writeFileSync(outputPath, newContent);
}
