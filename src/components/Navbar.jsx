import {useState} from "react";import {NavLink,Link} from "react-router-dom";
export default function Navbar(){const[open,setOpen]=useState(false);const nav=["Services","Pricing","Gallery","About","Contact"];return <header className="navbar"><div className="nav-inner">
<Link className="brand" to="/" onClick={()=>setOpen(false)}><span className="brand-mark">T</span><span>TENDIA<span>PRINTING</span></span></Link>
<nav className="desktop-nav">{nav.map(n=><NavLink key={n} to={"/"+n.toLowerCase()}>{n}</NavLink>)}</nav>
<Link className="nav-quote" to="/contact#quote">Get a Quote <b>↗</b></Link>
<button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?"×":"☰"}</button>
{open&&<div className="mobile-nav">{nav.map(n=><NavLink onClick={()=>setOpen(false)} key={n} to={"/"+n.toLowerCase()}>{n}</NavLink>)}<Link onClick={()=>setOpen(false)} to="/contact#quote">Get a Quote ↗</Link></div>}</div></header>}