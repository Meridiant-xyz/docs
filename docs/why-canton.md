---
title: Why Canton
description: Canton gives Meridiant privacy, atomic settlement, and institutional counterparties as protocol features — not as a marketing layer on top of a public chain.
---

# Why Canton

Canton is a public network with private applications. Data is replicated to the parties who need it, not to every node. Transactions can include several applications and several institutions and still settle as one — or not at all.

That is the settlement layer Meridiant is designed to inherit. Lending on a fully public chain publishes every position, every size, and every liquidation to the world. Lending on Canton does not have to.

## Credit rails, not a casino floor

Public-chain lending grew up as a transparent, composable money lego. That is useful for some users. It is a non-starter for others: a desk that cannot show inventory, a fund that cannot leak a strategy, a borrower who will not put collateral size on a block explorer.

Canton already settles tokenized assets and institutional flows among regulated participants. Meridiant is credit on that rail — isolated markets whose privacy and finality match the rest of the network.

## What we take from Canton

**Need-to-know privacy.** A position is not global state. Other suppliers in the same market do not see your loan. Participants in a different market do not even need to know this market exists.

**Atomic composition.** A liquidation that seizes collateral and repays the pool is one transaction. If any leg fails, none of it commits. The same property is what lets Canton applications settle with each other without building escrow machinery by hand.

**Sub-second finality.** Canton commits in well under a second. That is closer to how credit desks expect settlement to feel than to waiting through public-chain confirmation windows.

**Institutional participants.** Super validators and application operators on Canton include market-infrastructure firms, banks, and trading venues. Markets can be built for counterparties who already live on that network, rather than hoping they will one day migrate to a transparent chain.

## Why lending, specifically

Lending is a natural Canton application. A single action can involve a supplier's pool, a borrower, a collateral issuer, a loan-asset issuer, and a price source. Those parties need to settle together. They do not need to see each other's full books.

Isolation maps cleanly onto Canton's model: each market is its own contract stream. Markets do not contend with each other, and they do not inherit each other's risk.

Privacy is not a cosmetic setting on top of that. It is why an institution can borrow here at all.
