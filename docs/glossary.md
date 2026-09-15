---
title: Glossary
description: Plain-language terms used across the Meridiant docs.
---

# Glossary

**Atomic.** All legs of an action commit together, or none of them do. A liquidation that cannot seize and repay in the same step does not settle halfway.

**Canton.** The network Meridiant runs on. Applications can keep data need-to-know, and several parties can settle in one transaction.

**Canton Coin (CC).** The network's native coin. A loan asset in Meridiant's early markets.

**cBTC / cETH.** Canton-native representations of bitcoin and ether, used as collateral in illustrative and launch markets.

**Collateral.** The asset a borrower locks so they can draw the loan asset. On Meridiant it stays in the borrower's ownership while it is reserved as security.

**Health.** How the value of collateral compares with what is owed, at a fresh price. Below the market's line, the loan is eligible for liquidation.

**Isolated market.** A lending book defined by one collateral, one loan asset, one oracle, and one risk profile. It does not share funds or risk with other markets.

**Kink.** The utilization level where the interest curve gets steeper. Below it, rates rise gently; above it, borrowing idle liquidity gets expensive.

**Liquidation.** Closing an unsafe loan: someone else repays the debt and receives discounted collateral. Permissionless — not limited to a designated closer.

**Loan asset.** The asset suppliers deposit and borrowers draw. Yield is paid in this asset.

**Loan-to-value (LTV).** How much you may borrow against collateral, as a fraction of collateral value. The liquidation threshold is a tighter line than the maximum LTV.

**Operator.** The organization that lists markets and runs the application — today, Catalyst Labs, the team behind Meridiant.

**Oracle.** The party that publishes the price a market uses. Trusted for honesty; gated on signature and freshness.

**Over-collateralized.** You always lock more value than you borrow. That buffer is what keeps the pool whole when prices move.

**Party.** A Canton identity. Your positions are owned by your party, not by an email address.

**Supplier.** Someone who deposits the loan asset into a market and earns interest.

**Utilization.** The share of a market's pool that is currently borrowed. It drives the interest rate.

**Validator.** A Canton node. Meridiant operates one so venue transactions can settle through it.
