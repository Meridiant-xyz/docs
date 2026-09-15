---
title: Liquidation
description: When a loan is unsafe, anyone can repay it and receive discounted collateral. The whole close happens in one transaction. Surplus stays with the borrower.
---

# Liquidation

When a loan's collateral is no longer enough, relative to the market's rules, the position is **unsafe**. Anyone who can see the fresh price may repay it and receive collateral at a discount. That discount is the reason liquidators show up. Solvency does not depend on a designated closer staying online.

## When a loan is unsafe

Each market has a liquidation threshold — a line tighter than the maximum you could borrow when you opened. If a fresh price says you are past that line, the loan can be liquidated.

The price used to judge the loan is the price used to settle it. There is no gap in which someone sees one price and settles at another.

## What happens in a close

The close is a single action:

1. The liquidator pays the debt in the loan asset, into the pool.
2. The borrower's lock is released — collateral was theirs the whole time.
3. The liquidator receives a discounted amount of that collateral.
4. Anything not needed to cover the debt **stays with the borrower**.

If the collateral cannot cover the debt even after the close, the remainder is a shortfall for **that market's suppliers**. Other markets are not charged.

## What pause does — and does not do

A paused market still allows liquidation. Pause stops new risk; it is not a reason to stop the mechanism that keeps the pool whole, as long as prices are still trusted.

If the protocol has marked prices as unreliable, liquidation does **not** run. Seizing collateral at a price we have already said we do not trust would turn a bad feed into a permanent loss for the borrower.

## Why this is permissionless

A privileged liquidation crew is a single point of failure and a single point of trust. Meridiant instead pays a bonus to whoever closes an unsafe loan. The operator may run a liquidator as infrastructure. They do not have to. Anyone with the loan asset and the disclosed price can do the same job.
