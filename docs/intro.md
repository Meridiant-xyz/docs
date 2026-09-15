---
sidebar_position: 1
title: What is Meridiant
description: Meridiant is isolated-market lending on Canton Network — private positions, atomic settlement, and risk that stays inside each market.
---

# What is Meridiant

Meridiant is a lending venue built for [Canton Network](https://www.canton.network/). Suppliers earn yield by providing an asset. Borrowers draw that asset against collateral they still own. Each market is its own book — one collateral, one loan asset, one price source, one risk profile.

It is over-collateralized credit, not a pooled money market in the Ethereum sense, and not a farm. The product exists because Canton can do three things public chains cannot do well at once: **keep positions private**, **settle several parties in one transaction**, and **isolate risk market by market**.

## In one sentence

Isolated-market lending, engineered for Canton — position privacy by default, atomic settlement, and no shared risk across markets.

## Who it is for

Meridiant is built for people and institutions who want to lend or borrow Canton-native assets without publishing their book to the world. Funds, desks, and market makers that will not put size on a transparent chain are the reason the design looks the way it does.

Retail users can use the same markets. The protocol does not treat them as a different class of participant.

## What you can do

| If you… | You… |
|---|---|
| **Supply** | Deposit the market's loan asset and earn interest as borrowers pay it. |
| **Borrow** | Lock collateral you still own, and draw the loan asset against it. |
| **Repay** | Return what you owe at any time and, once the loan is closed, take your collateral back. |
| **Liquidate** | Repay an unsafe loan and receive discounted collateral — anyone may do this. |

You never lend into a single shared pool that spans every asset. You pick a market. Trouble in one market stays in that market.

## What makes it different

**Collateral stays with the borrower.** The protocol reserves it as security. It does not take title, and it does not drop everyone's collateral into one honeypot.

**Positions are private.** A loan is visible to the borrower and the protocol — not to the rest of the network, and not to other markets.

**Settlement is atomic.** Opening a loan, repaying, or liquidating either completes in full or does not happen. There is no half-moved collateral and no half-paid debt.

**Markets do not share fate.** Each market has its own liquidity, its own oracle, and its own risk parameters. Adding a pair adds a new book; it does not change the ones already live.

## How to read these docs

These pages are a high-level introduction — what Meridiant is, how lending works here, who is involved, and what we are building. They are not a protocol specification.

- New here → keep reading [Why Canton](./why-canton.md), then [How it works](./how-it-works.md).
- Want the people and roles → [Who's involved](./who-is-involved.md).
- Want the product path → [What we are building](./what-we-are-building.md).
