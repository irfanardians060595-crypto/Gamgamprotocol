'use client';
import { useState } from 'react';
import { ArrowDownUp, ArrowUpRight, Search, ArrowRightLeft, Clock3 } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import WalletProvider from '@/components/WalletProvider';

const chains = ['All Chains','Ethereum','Base','Arbitrum','Optimism','Polygon','BNB Chain','Avalanche'];
function TransactionsContent(){
 const [search,setSearch]=useState(''); const [from,setFrom]=useState('All Chains'); const [to,setTo]=useState('All Chains');
 return <main className="site-shell transactions-page">
  <header className="topbar"><Link className="brand" href="/"><img className="brand-logo" src="/gamgam-globe-logo.png" alt="" aria-hidden="true"/><span>gamgam<span className="brand-dot">.</span></span></Link><nav className="nav-links transaction-nav"><Link href="/#swap">Swap</Link><Link href="/#swap">Bridge</Link><Link href="/#networks">Networks</Link><Link className="nav-active" href="/transactions">Transactions</Link><Link href="/docs">Docs <ArrowUpRight size={13}/></Link><a className="header-social" href="https://x.com/gamgamprotocol" target="_blank" rel="noreferrer" aria-label="GAMGAM on X">𝕏</a></nav><div className="top-actions"><ConnectButton showBalance={false}/></div></header>
  <section className="transactions-content"><div className="transactions-title-row"><div><span className="eyebrow">GAMGAM ACTIVITY</span><h1>Transactions</h1><p>Explore transaction activity across supported networks.</p></div><span className="live-indicator"><i/> Relay routes</span></div>
   <div className="transaction-filters"><label className="transaction-search"><Search size={17}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Filter by wallet address or transaction hash" /></label><div className="route-filters"><span>Route</span><select value={from} onChange={e=>setFrom(e.target.value)} aria-label="From network">{chains.map(c=><option key={c}>{c}</option>)}</select><ArrowDownUp size={16}/><select value={to} onChange={e=>setTo(e.target.value)} aria-label="To network">{chains.map(c=><option key={c}>{c}</option>)}</select></div></div>
   <div className="transaction-table-wrap"><table className="transaction-table"><thead><tr><th>From</th><th>To</th><th>Transactions</th><th>Status</th><th>Fill Time</th></tr></thead><tbody><tr><td colSpan={5}><div className="transactions-empty"><span className="empty-icon"><ArrowRightLeft size={22}/></span><strong>{search ? 'No matching activity yet' : 'Your transaction activity will appear here'}</strong><p>This page does not fabricate sample transactions. Connect a wallet and use GAMGAM to start a route; transaction history/status integration can be added against Relay’s supported status endpoints.</p><span className="empty-meta"><Clock3 size={13}/> Waiting for transaction data</span></div></td></tr></tbody></table></div>
   <div className="transactions-footnote">Network filters: <strong>{from}</strong> <ArrowDownUp size={12}/> <strong>{to}</strong>{search&&<span> · Search: “{search}”</span>}</div>
  </section><footer className="footer"><Link className="brand footer-brand" href="/"><img className="brand-logo" src="/gamgam-globe-logo.png" alt="" aria-hidden="true"/><span>gamgam<span className="brand-dot">.</span></span></Link><span>Move value, freely. <span className="footer-muted">Independent interface powered by Relay infrastructure.</span></span><div className="footer-links"><Link href="/transactions">Transactions</Link><Link href="/docs">GAMGAM Docs <ArrowUpRight size={12}/></Link></div><span className="copyright">© 2026 GAMGAM</span></footer>
 </main>
}
export default function TransactionsPage(){return <WalletProvider><TransactionsContent/></WalletProvider>}
