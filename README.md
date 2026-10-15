# GAMGAM — Cross-chain Swap & Bridge

GAMGAM is an independent interface for exploring swap and cross-chain bridge routes using Relay's public infrastructure. It is not the official Relay website and does not custody user funds.

## Stack

- Next.js App Router + React + TypeScript
- Custom responsive CSS interface
- RainbowKit + wagmi for wallet connection
- Server-side Next.js route handlers that proxy Relay chain, currency, and quote requests

## Run locally

Requirements: Node.js 20.9+ (recommended current LTS) and npm.

```bash
npm install
cp .env.example .env.local
# Set NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID in .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment

- `NEXT_PUBLIC_APP_URL`: public app URL; currently informational.
- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`: create a project in WalletConnect Cloud. The placeholder is not a valid project ID, so WalletConnect-powered connections will not work until configured.

No private key, seed phrase, or signing secret belongs in this project or in environment variables. Transactions are signed in the user's wallet.

## Relay API routes

- `GET /api/relay/chains` — chain directory proxy.
- `GET /api/relay/currencies?chainId=<id>` — token directory proxy with chain ID validation.
- `POST /api/relay/quote` — validates the request and proxies a quote request to `https://api.relay.link/quote`.

These server routes improve validation and centralize upstream access, but are not a substitute for production rate limiting, abuse monitoring, and provider-specific policy review.

## Important production checklist

This is a development starter, not a production-audited financial application. Do not use it with funds until all of the following are completed and tested:

1. Verify current Relay request/response schemas and integration requirements against [Relay Developer Docs](https://docs.relay.link/).
2. Replace any manual execution logic with the currently recommended Relay SDK execution flow. Relay routes can contain multiple steps, approvals, and cross-chain completion actions; a simplistic loop is not sufficient to safely cover every route type.
3. Implement transaction status polling using Relay's supported status API and show pending, completed, and failed states accurately.
4. Add balance-aware MAX, slippage/route preferences, quote expiry handling, token safety information, and robust chain switching.
5. Configure WalletConnect Project ID and test injected wallets and WalletConnect on mobile and desktop.
6. Add API rate limiting, structured server logs, error monitoring, analytics/privacy disclosures, terms, and a security review.
7. Test every supported chain and transaction path on a safe test plan before mainnet launch.
8. Review Relay's current terms, integrator requirements, branding guidance, and fee/revenue options.

Relay determines which chains, assets, routes, fees, and execution steps are available. GAMGAM does not guarantee a route or settlement time. Always inspect wallet prompts and transaction details before signing.
