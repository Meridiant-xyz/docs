import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Meridiant Docs',
  tagline: 'Isolated-market lending, engineered for Canton.',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://docs.meridiant.xyz',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'Meridiant-xyz',
  projectName: 'docs',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Meridiant-xyz/docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    metadata: [
      {
        name: 'description',
        content:
          'High-level documentation for Meridiant — isolated-market lending on Canton Network.',
      },
    ],
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Meridiant',
      logo: {
        alt: 'Meridiant',
        src: 'img/logo-light.svg',
        srcDark: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/how-it-works',
          label: 'How it works',
          position: 'left',
        },
        {
          to: '/docs/who-is-involved',
          label: "Who's involved",
          position: 'left',
        },
        {
          href: 'https://meridiant.xyz',
          label: 'meridiant.xyz',
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
            {label: 'What is Meridiant', to: '/docs/intro'},
            {label: 'How it works', to: '/docs/how-it-works'},
            {label: "Who's involved", to: '/docs/who-is-involved'},
            {label: 'What we are building', to: '/docs/what-we-are-building'},
          ],
        },
        {
          title: 'Product',
          items: [
            {label: 'Website', href: 'https://meridiant.xyz'},
            {label: 'Getting started', to: '/docs/getting-started'},
            {label: 'Privacy and trust', to: '/docs/privacy-and-trust'},
          ],
        },
        {
          title: 'Network',
          items: [
            {label: 'Canton Network', href: 'https://www.canton.network/'},
            {label: 'Why Canton', to: '/docs/why-canton'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Catalyst Labs L.L.C-FZ.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
