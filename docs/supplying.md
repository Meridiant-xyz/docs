---
title: Supplying
description: Deposit a market's loan asset, earn interest as borrowers pay it, and withdraw unused liquidity. Each market is its own pool.
---

# Supplying

A supplier deposits the market's loan asset and earns interest as borrowers pay it. You are not depositing into a protocol-wide vault. You are funding one market.

## Deposit

You send the loan asset into that market's pool and receive a claim on it. As borrowers pay interest, the claim is worth more of the same asset.

The first suppliers seed the book. Later suppliers join the same pool at the current value, so they earn interest from the moment they arrive — not interest that accrued before they got there.

## Earn

Utilization is the share of the pool that is currently borrowed.

- When little is borrowed, rates are low and most of the pool is idle — easy to withdraw, less yield.
- When more of the pool is out on loan, borrowers pay more, and suppliers earn more.
- Past a target utilization, rates rise more steeply. That is how the market asks for more supply (or less borrowing) when liquidity is tight.

In the current product, **borrowers' interest goes to suppliers**. There is no protocol cut taken out of the rate.

## Withdraw

You redeem your claim for the loan asset. You can only take liquidity that is **not currently lent out**. If the book is fully utilized, you wait for a repayment or for someone else to supply.

A pause on the market can stop new deposits. It does not freeze a supplier's ability to withdraw unused funds. Those funds are not the protocol's to hold hostage.

## What you are exposed to

You are exposed to **this market**: its borrowers, its collateral, its oracle, and the possibility that a loan cannot be fully repaid. If a liquidation still leaves a shortfall, that shortfall is shared by suppliers in that market. Other markets are untouched.

You are not exposed to the protocol taking a fee from your deposit, and you are not mixed into a cross-market insurance fund. Those are later-product questions, not how v1 works.
