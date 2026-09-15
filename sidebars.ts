import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: ['intro', 'why-canton'],
    },
    {
      type: 'category',
      label: 'How it works',
      collapsed: false,
      items: [
        'how-it-works',
        'markets',
        'supplying',
        'borrowing',
        'liquidation',
        'prices-and-rates',
      ],
    },
    {
      type: 'category',
      label: "Who's involved",
      collapsed: false,
      items: ['who-is-involved', 'privacy-and-trust'],
    },
    {
      type: 'category',
      label: 'The product',
      collapsed: false,
      items: ['what-we-are-building', 'getting-started', 'glossary'],
    },
  ],
};

export default sidebars;
