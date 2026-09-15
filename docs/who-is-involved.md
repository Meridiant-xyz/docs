---
title: Who's involved
sidebar_label: Participants
description: Suppliers, borrowers, and liquidators use the markets. An operator, an oracle, and Canton asset issuers make the venue run. Meridiant is a product of Catalyst Labs.
---

# Who's involved

Meridiant is a venue, not a single account. Different people show up with different jobs — and with different amounts of trust the protocol is willing to assume.

## People using the markets

| Role | What they do | Trust |
|---|---|---|
| **Supplier** | Deposits the loan asset, earns interest, withdraws unused liquidity. | Untrusted. Self-interested. |
| **Borrower** | Locks collateral, draws a loan, repays, or gets liquidated if unsafe. | Untrusted. Self-interested. |
| **Liquidator** | Closes an unsafe loan, provides the repayment, receives discounted collateral. | Untrusted. Anyone may do this. |

You can be more than one of these. A desk that supplies in one market and borrows in another is two roles, two positions, not a special account type.

Market makers and other programmatic users use the same markets. During early access they may authenticate with an API key instead of the web app; the lending itself does not change.

## People who run the venue

| Role | What they do | Trust |
|---|---|---|
| **Operator** | Creates markets, runs the application, keeps locks from expiring, publishes what liquidators need in order to act. | Semi-trusted — powerful, but structurally bounded. See [Privacy and trust](./privacy-and-trust.md). |
| **Oracle** | Publishes the prices a market uses to value collateral. | Trusted for the honesty of the print; gated on signature and freshness. |
| **Asset issuers** | Issue the tokens markets actually move — cBTC, Canton Coin, and others on the Canton token standard. | External infrastructure. Meridiant coordinates value; it does not mint it. |

The operator, oracle, and related automation may be run by the same organization in early deployments. On the ledger they are still distinct roles with distinct powers. Production can separate them.

## The network

Meridiant runs on **Canton**. Settlement, privacy, and the token standard are the network's. Super validators, application operators, and wallets in the Canton ecosystem are the broader counterparties the venue is built to sit among.

[Why Canton](./why-canton.md) covers what we take from that network.

## The organization

Meridiant is a trade name of **Catalyst Labs L.L.C-FZ**, Dubai. We operate the application, the markets, and (in current environments) a Canton validator so that lending activity settles through our node.

The long-term product is a venue where users hold their own keys. Early networks host parties for users so the protocol can be exercised end to end; mainnet is intended to be self-custodial at the key layer. Collateral ownership is already non-custodial on the ledger — the protocol never takes title. [Privacy and trust](./privacy-and-trust.md) draws that line more carefully.
