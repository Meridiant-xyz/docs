---
title: Privacy and trust
description: Positions are private by default. The operator is bounded. Collateral stays borrower-owned. Mainnet is intended to be self-custodial at the key layer.
---

# Privacy and trust

Two questions matter more than any feature list: **who can see a position**, and **what a compromised or lazy operator can actually do**.

## Privacy

Canton only shows a contract to the parties who are on it. Meridiant uses that as the product, not as an accident.

- A **loan** is visible to the borrower and the protocol. It is not a public position.
- A **supply position** is visible to that supplier and the protocol.
- **Markets** are shared with users who need them, not broadcast as global state.
- **Other markets** do not see this market's books.

That is why liquidation is "anyone" in authority but not "everyone" in observation. A liquidator must be shown enough to act. The rest of the network does not get a mempool of health factors to hunt.

Where an auditor, regulator, or counterparty must see more, they can be shown more — selective disclosure, not a public chain with a privacy overlay.

## What the operator cannot do

The operator creates markets and runs automation. Several powers go through them, so the design spends a lot of effort bounding those powers.

The operator **does not own borrower collateral**. Locks stay in the borrower's name. A close returns collateral to the borrower, then moves only what is owed.

The operator **cannot rewrite a live loan's terms**. Risk parameters are pinned when the loan opens. Tightening a market later does not reach loans already on the books.

The operator **cannot spend one market's pool as if it were another**. Each market's liquidity sits with a dedicated custody role. Cross-market spending fails as an authorization error, not as a policy the app promises to follow.

The operator **cannot block liquidation by privilege**. Closing an unsafe loan does not require the operator's signature. (It does require that someone publish enough for a liquidator to see the loan — a liveness duty, not a veto.)

## What you still trust

Honesty is not free.

- **Market parameters at creation.** If a market is listed with reckless loan-to-value or a broken rate curve, the ledger will enforce those parameters faithfully. Parameter governance with delays is a later-product item.
- **The oracle's print.** Freshness and signatures stop a random party from feeding a price. They do not stop a corrupt oracle from publishing a wrong one. That is why degraded-price mode refuses to liquidate.
- **Operational liveness.** Locks expire. The operator (and the borrower) must renew them. Neglect ends a loan early; it does not let the operator take more than is owed.
- **Who holds keys, in early networks.** On current test environments, Meridiant hosts the user's Canton party so the product can be used without a wallet round-trip. That is custody of the *key*, not of the *collateral*. The ledger still refuses a healthy seizure. **Mainnet is intended to reverse this:** users hold their own keys, and Meridiant never submits as them.

## How to read "non-custodial"

Two different things get called custody:

| | On the ledger today | At the key layer |
|---|---|---|
| **Collateral** | Borrower-owned throughout. The protocol reserves it; it does not take title. | Unchanged. |
| **Your signing key** | Early networks: hosted by the app so UX can be one-click. | Mainnet target: your wallet signs. We host the party on our validator; we do not hold the key. |

The first is a protocol property and is already true. The second is a product path. [What we are building](./what-we-are-building.md) is explicit about where we are on that path.
