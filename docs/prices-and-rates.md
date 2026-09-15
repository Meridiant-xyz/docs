---
title: Prices and rates
description: Borrowing and liquidation use a fresh, signed price. Interest follows how much of the pool is borrowed, with a steeper curve once utilization passes a target.
---

# Prices and rates

Two clocks run in every market: **prices**, which decide whether a loan may open or must close, and **rates**, which decide what borrowers pay and suppliers earn.

## Prices

Each market names an oracle — a party that publishes a signed, timestamped price for that pair.

A price is only used if it is:

- **From the market's oracle**, co-signed so neither the oracle nor the operator can mint a feed alone.
- **For the right pair** — this collateral, this loan asset.
- **Fresh** — not older than the market allows (on the order of minutes, not hours).
- **Positive and sane** — a zero or inverted print is refused.

The price is an input to the transaction that acts on it. Opening a loan and liquidating a loan both check freshness at the moment they run. There is no "we looked at the price earlier, we will settle later."

If the feed cannot be trusted, the market can be marked degraded. New borrows stop. Liquidations wait. Repayment continues.

## Rates

Interest follows **utilization** — how much of the pool is currently borrowed.

The curve has two slopes:

- From empty to a target utilization (the **kink**), the borrow rate rises gently.
- Past the kink, it rises more steeply. Borrowing when the pool is almost empty of idle liquidity gets expensive, which is the market asking for more supply or less demand.

Suppliers earn the borrow rate scaled by utilization. If half the pool is lent, they earn half of what borrowers pay — because the other half is sitting idle.

The rate model is part of the market. It is not something a keeper can invent at the last minute. Anyone can move the rate clock forward from on-ledger state; the operator runs automation so that it happens often, but the book still accrues if that automation is quiet.

## What users see

| | |
|---|---|
| **Supply APY** | What you earn for depositing, given current utilization. |
| **Borrow APY** | What you pay for drawing from the pool. |
| **Health** | Collateral value versus debt, at the latest trusted price. |
| **Liquidation line** | The health level at which the loan can be closed by anyone. |

Those numbers are the product. The machinery underneath is there so they cannot be faked by a permissionless actor, and so a stale price cannot settle a loan.
