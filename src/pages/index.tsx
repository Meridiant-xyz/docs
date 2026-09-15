import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const principles = [
  {
    num: '01',
    title: 'Position privacy',
    body: 'A loan is visible to the borrower and the protocol — not to the network, and not to other markets.',
  },
  {
    num: '02',
    title: 'Isolated markets',
    body: 'One collateral, one loan asset, one oracle, one risk profile. Trouble in one book cannot spend another book’s funds.',
  },
  {
    num: '03',
    title: 'Atomic settlement',
    body: 'Open, repay, or liquidate in a single Canton transaction. If any leg fails, none of it commits.',
  },
  {
    num: '04',
    title: 'Borrower-owned collateral',
    body: 'Collateral is reserved as security. The protocol never takes title, and never pools it into a shared honeypot.',
  },
];

const paths = [
  {
    href: '/docs/intro',
    kicker: 'Start here',
    title: 'What is Meridiant',
    body: 'Isolated-market lending on Canton — who it is for, and what you can do.',
  },
  {
    href: '/docs/how-it-works',
    kicker: 'The venue',
    title: 'How it works',
    body: 'Supply, borrow, repay, liquidate. Over-collateralized, market by market.',
  },
  {
    href: '/docs/who-is-involved',
    kicker: 'The people',
    title: "Who's involved",
    body: 'Suppliers, borrowers, liquidators, the operator, the oracle, and Canton.',
  },
  {
    href: '/docs/what-we-are-building',
    kicker: 'The path',
    title: 'What we are building',
    body: 'A working protocol now. Invite-gated networks next. Self-custodial mainnet after that.',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Documentation"
      description="High-level documentation for Meridiant — isolated-market lending on Canton Network.">
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>
            <span className={styles.dot} />
            docs.meridiant.xyz
          </p>
          <Heading as="h1" className={styles.headline}>
            Isolated-market lending, engineered for{' '}
            <em className={styles.accent}>Canton</em>.
          </Heading>
          <p className={styles.sub}>
            A high-level introduction to Meridiant: how the venue works, who is
            in it, and what we are building. Not a protocol spec.
          </p>
          <div className={styles.ctas}>
            <Link className={styles.primary} to="/docs/intro">
              Read the docs
            </Link>
            <Link className={styles.secondary} href="https://meridiant.xyz">
              meridiant.xyz
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <span>Principles</span>
              <span>What the venue is built on</span>
            </div>
            <div className={styles.principleGrid}>
              {principles.map((item) => (
                <article key={item.num} className={styles.principle}>
                  <span className={styles.num}>{item.num}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.pathsSection)}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <span>Read</span>
              <span>Four doors into the docs</span>
            </div>
            <div className={styles.pathGrid}>
              {paths.map((item) => (
                <Link key={item.href} className={styles.pathCard} to={item.href}>
                  <span className={styles.kicker}>{item.kicker}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
