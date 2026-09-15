---
title: Isolated markets
description: Each Meridiant market is its own book — one collateral, one loan asset, one oracle, one risk profile. Trouble does not cascade.
---

# Isolated markets

A Meridiant market is a self-contained lending book. Four things define it:

| Piece | What it is |
|---|---|
| **Collateral** | The asset a borrower locks. It is never reused as collateral in another market. |
| **Loan asset** | The asset suppliers provide and borrowers draw. Yield is paid in this asset. |
| **Oracle** | The price source that values the collateral against the loan asset. |
| **Risk and rates** | How much you may borrow, when a loan is unsafe, the bonus a liquidator earns, and how interest moves with utilization. |

Everything else — liquidity, open loans, interest — lives inside that market. A problem in one book cannot spend another book's funds.

## Why isolation

**Risk does not cascade.** If collateral in one market is mispriced or a loan cannot be fully covered, suppliers in a different market are not automatically on the hook.

**Parameters can fit the pair.** A conservative loan-to-value for a volatile token does not have to be the same as the one for a quieter pair. Each market sets its own.

**Books run in parallel.** Adding a market adds a new stream of activity. It does not create a single hotspot that every user must queue through.

This is the Morpho-style idea — one collateral, one loan asset, one oracle, one risk profile — mapped onto Canton, where each market can also be private.

## What a market looks like in practice

Launch markets are Canton-native pairs: collateral such as **cBTC** or **cETH**, borrowed against **Canton Coin**. Additional pairs can be added without changing the ones already live.

Illustrative parameters (not a live quote):

| | |
|---|---|
| Collateral | cBTC |
| Loan asset | Canton Coin |
| Max loan-to-value | set per market |
| Liquidation threshold | a tighter line than the max LTV |
| Interest | a two-slope curve that steepens once utilization passes a target |

The operator creates markets. Users do not. Once a market is live, anyone with access to Meridiant can supply or borrow in it, subject to the market's own rules.

## Pause is not a kill switch for the whole book

A market can be restricted so that **new** supply and **new** borrowing stop. Repayment and liquidation continue. The point is to halt new risk without trapping people who already have a position, and without turning off the mechanism that keeps the pool solvent.

If prices themselves are not trusted, liquidation waits rather than seize collateral at a bad print. See [Prices and rates](./prices-and-rates.md).
