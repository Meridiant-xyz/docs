---
title: Getting started
description: Meridiant is invite-gated. This page is how to think about joining as a supplier, borrower, or partner — not a public signup flow.
---

# Getting started

Meridiant is not an open app you sign up for from the internet today. Access is invite-gated. The operator issues access, you create an account, and a Canton identity is allocated for you.

If you have not been invited, there is nothing to configure. Start at [meridiant.xyz](https://meridiant.xyz) and talk to the team.

## If you have been invited

You will receive an access token out of band. Registration is email and password. After that, the app is a market list and your positions.

Expect, at a minimum:

- A clear label for which Canton environment you are on (devnet, testnet, or mainnet). Do not guess.
- Markets the operator has listed — typically Canton-native collateral such as cBTC or cETH, borrowed against Canton Coin.
- Every action that changes state producing a transaction you can look up.
- Positions that are yours. You should not be able to see anyone else's book, and they should not be able to see yours.

Password recovery, in this phase, goes through an operator. Losing both your password and the channel you use to reach us is losing access to that account. Treat the invite path as production hygiene, not as a consumer "forgot password" flow.

## If you want to supply

Pick a market whose loan asset you are willing to hold. Deposit. You earn as that market's borrowers pay interest. You can withdraw unused liquidity; you cannot pull funds that are currently lent out until someone repays or someone else supplies.

Read [Supplying](./supplying.md) and be clear-eyed about [what you are exposed to](./supplying.md#what-you-are-exposed-to) — this market, not the whole venue.

## If you want to borrow

Pick a market whose collateral you hold and whose loan asset you want. Lock collateral, borrow less than it is worth, and watch health against the liquidation line. Repay whenever you want. You cannot walk away with the collateral while the debt is live.

Read [Borrowing](./borrowing.md) and [Liquidation](./liquidation.md) before you post size.

## If you want to integrate

Programmatic users (market makers and similar) can use the same venue with an API key instead of the web session. That is still invite-gated, and it is still the same markets.

Self-custodial wallet signing — you hold the key, we still settle through our validator — is the mainnet direction, not the current onboarding path. See [What we are building](./what-we-are-building.md).

## Links

| | |
|---|---|
| Product | [meridiant.xyz](https://meridiant.xyz) |
| These docs | [docs.meridiant.xyz](https://docs.meridiant.xyz) |
| Canton | [canton.network](https://www.canton.network/) |

Meridiant is a trade name of Catalyst Labs L.L.C-FZ, Dubai.
