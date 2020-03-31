/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'Fetchq CRON',
  tagline: 'Run smart cron jobs',
  url: 'https://cron.fetchq.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'marcopeg', // Usually your GitHub org/user name.
  projectName: 'fetchq-cron', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Fetchq CRON',
      //   logo: {
      //     alt: 'My Facebook Project Logo',
      //     src: 'img/logo.svg',
      //   },
      links: [
        // {
        //   to: 'docs/doc1',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // // Please keep GitHub link to the right for consistency.
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/doc1',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/marcopeg/fetchq-cron',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/thepeg',
            },
          ],
        },
      ],
      //   logo: {
      //     alt: 'Facebook Open Source Logo',
      //     src: 'img/oss_logo.png',
      //     href: 'https://opensource.facebook.com/',
      //   },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © 2020-rpresent Marco Pegoraro. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/marcopeg/fetchq-cron-docs/edit/master/src/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
