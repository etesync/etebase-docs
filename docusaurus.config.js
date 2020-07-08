module.exports = {
  title: 'Etebase',
  tagline: 'The Etebase documentation',
  url: 'https://docs.etebase.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'etesync',
  projectName: 'etebase',
  themeConfig: {
    navbar: {
      title: 'etebase',
      logo: {
        alt: 'etebase logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          href: 'https://www.etebase.com',
          label: 'Website',
          position: 'left',
        },
        {
          href: 'https://www.etebase.com/community-chat/',
          label: 'Chat',
          position: 'left',
        },
        {
          href: 'https://github.com/etesync/etebase-docs',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © EteSync Ltd`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/etesync/etebase-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
