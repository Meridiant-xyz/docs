---
title: What we are building
description: A Canton-native isolated lending venue — working protocol now, invite-gated networks next, self-custodial mainnet after that.
---

# What we are building

Meridiant is a Morpho-style isolated lending venue, purpose-built for Canton. The protocol is real: supply, borrow, repay, liquidate, prices, and rates, against Canton-native tokens — not a slide deck of intended mechanics.

We are taking that protocol from internal networks to a venue other people can use.

## What exists today

A complete isolated market, end to end:

- Supply and withdraw
- Borrow against borrower-owned collateral
- Repay in part or in full
- Permissionless liquidation in one atomic close
- Fresh, signed prices
- Utilization-based interest
- Market pause / resume, with liquidation still able to run when prices are trusted
- Renewal so loans can outlast a single token lock

One market, done properly, is the unit. More markets are copies of that unit, not a rewrite.

## The path

| Stage | What it is for |
|---|---|
| **Internal networks** | Prove the protocol, the app, and operations against a real validator. |
| **Testnet** | Invite-gated access. Real token-standard assets. The same code paths mainnet will use. Not a demo with mock shortcuts. |
| **Mainnet** | Production venue. Users hold their own keys. Markets listed deliberately. |

Testnet is the last rehearsal. Anything that only works because it is a test environment is treated as a defect.

Access stays invite-gated until we are ready for open registration. [Getting started](./getting-started.md) is the honest current answer.

## What mainnet is aiming at

- **Self-custody at the key layer.** Your wallet signs; we still settle through our validator. The lending rules do not change — only who holds the key.
- **More than one market.** Independent books, listed as the asset set and the risk parameters justify them.
- **Institutional use as the default, not a costume.** Privacy, atomic settlement, and counterparties who already sit on Canton.

## What we are not rushing

- Public, open signup on day one of a test network.
- A protocol fee switch or incentive program as the growth engine. Rewards on Canton, if and when they accrue to the venue, are a byproduct of real lending activity — not a farm we optimize the product around.
- Term loans, leverage vaults, and multi-collateral in a single market. Those are later phases.
- Governance theatre. Market listing and parameters are operator decisions until there is a reason for them not to be.

## Honest framing

We cannot out-shout the rest of Canton. We can run a venue whose core action is genuine, high-value settlement — and whose privacy makes that venue usable by people who will not use the public-chain equivalent.

If you want the design in more depth than these intro pages, start from [meridiant.xyz](https://meridiant.xyz). These docs stay at the level of what the product is, who is in it, and how to think about using it.
