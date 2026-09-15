---
title: Borrowing
description: Lock collateral you still own, draw a smaller loan against a fresh price, and repay at any time. You cannot walk away with the collateral while the debt is live.
---

# Borrowing

A borrower locks collateral and draws the market's loan asset against it. The loan is smaller than the collateral is worth. The collateral stays **yours** — reserved as security, not transferred into a protocol wallet.

## Opening a loan

1. You choose a market and an amount to borrow.
2. You post collateral. The protocol locks it; you remain the owner.
3. A fresh price is checked. If the loan would be unhealthy at that price, it does not open.
4. The loan asset is paid out from the market's pool in the same action.

You cannot borrow if the market is paused, or if prices are marked as unreliable. Both of those are about **new** risk. They are not a way to trap an existing loan.

## While the loan is open

Interest accrues against the debt. Your health is the value of your collateral compared with what you owe. If prices move against you, health falls. If it crosses the market's liquidation line, the loan can be closed by anyone — see [Liquidation](./liquidation.md).

You can repay in part to improve health, or in full to close.

## Repaying

Repayment is always available. A paused market, or a market with bad prices, still lets you pay down debt. Stopping repayment would manufacture defaults: the clock would keep running and you would have no way to discharge it.

- **Partial repay** reduces what you owe and can take a position back above the safety line.
- **Full repay** closes the loan and releases the collateral back to you.

## Collateral you still own — and cannot simply take back

This is the trade. The lock is what makes the collateral usable as security. While the debt is live you cannot withdraw it at will.

Collateral returns in three ways:

1. **You repay in full** — the lock is released.
2. **The loan is liquidated** — the amount needed to cover the debt (plus a liquidator bonus) is taken; anything left stays with you.
3. **A lock is never renewed** — Canton token locks expire on a timer. Meridiant renews them so loans can last longer than a single lock. If a lock is allowed to lapse, the loan is closed in a defined way: the debt is covered, the surplus stays with the borrower, and nobody profits from the lapse.

In every case you keep what is not owed. What you cannot do is leave with the collateral and leave the debt behind.

## Adding or removing collateral

You can post more collateral to improve health. You can take collateral out only when the loan that remains would still be healthy — and only through the protocol, not by pulling the lock yourself.
