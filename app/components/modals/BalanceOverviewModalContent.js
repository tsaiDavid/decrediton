export default () => (
  <Aux>
    <p className="balance-overview-info-ticket-purchase-text-column">
      <span className="balance-overview-info-highlight-green">Total</span> - This is the total balance controlled by this account currently.
      <br/>
      <br/>
      <span className="balance-overview-info-highlight-blue">Spendable Balance</span> - The spendable/accessible balance for the this account.
      <br/>
      <br/>
      <span className="balance-overview-info-highlight-blue">Locked By Tickets</span> - This is the balance that is currently locked by tickets for this account. Once the tickets are voted or revoked these funds will be unlocked.
      <br/>
      <br/>
      <span className="balance-overview-info-highlight-blue">Voting Authority</span> - This balance shows the total amount that this account has voting authority over.  For example, if you use a voting-only wallet this will show that total amount controlled.
      <br/>
      <br/>
      <span className="balance-overview-info-highlight-blue">Immature Rewards</span> - These are regular coinbase rewards that are currently maturing (from PoW mining reward for instance).
      <br/>
      <br/>
      <span className="balance-overview-info-highlight-blue">Immature Stake Generation </span>- This balance shows the current stake rewards and revocations that are awaiting maturity (256 blocks on mainnet).
      <br/>
      <br/>
    </p>
  </Aux>
);
