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
      items: [
        {
          href: 'https://www.etebase.com',
          label: 'Website',
          position: 'left',
        },
        {
          href: 'https://www.etebase.com/community-chat/',
          label: 'Chat With Us',
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
              label: 'Introduction',
              to: '/',
            },
            {
              label: 'Getting started',
              to: 'installation',
            },
            {
              label: 'Overview',
              to: 'overview',
            },
            {
              label: 'Guides',
              to: 'guides/basic_authentication',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About',
              href: 'https://www.etebase.com/about',
            },
            {
              label: 'Blog',
              href: 'https://blog.etesync.com',
            },
            {
              label: 'Support',
              href: 'https://www.etebase.com/about#contact',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Code of Conduct',
              href: 'https://www.etebase.com/code-of-conduct',
            },
            {
              label: 'Github',
              href: 'https://www.etebase.com/#open-source',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/EteSyncHQ',
            },
            {
              label: 'Mastodon',
              href: 'https://mastodon.social/@EteSync',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/EteSync/',
            },
          ],
        },
      ],
      copyright: `Copyright © EteSync Ltd`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['groovy', 'rust', 'kotlin', 'toml'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
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
