import MobileMenu from "./MobileMenu";
import { logo } from "@/lib/media";
import { EMAIL, orderAll, wa } from "@/lib/site";

const links: [string, string][] = [["/#products", "Products"], ["/#process", "How it works"], ["/#about", "About"], ["/#faq", "FAQ"], ["/#contact", "Contact"]];

export function Header() {
  const L = logo();
  return (
    <header className="nav">
      <a href="/" className="logo">{L ? <img src={L} alt="PT Gayatri Abadi Sentosa" className="logo-img" /> : <>GAS<i>.</i></>}</a>
      <nav aria-label="Main">{links.slice(0, 4).map(([h, l]) => <a key={h} href={h}>{l}</a>)}</nav>
      <a className="btn gold sm" href={orderAll}>Order now</a>
      <MobileMenu links={links} />
    </header>
  );
}

export function Footer() {
  const L = logo();
  return (
    <>
      <footer className="footer">
        <div><a href="/" className="logo">{L ? <img src={L} alt="PT Gayatri Abadi Sentosa" className="logo-img" /> : <>GAS<i>.</i></>}</a><p>Premium Indonesian spices &amp; coffee for global buyers.<br />PT Gayatri Abadi Sentosa, Indonesia</p></div>
        <div><h4>Quick links</h4>{links.slice(0, 4).map(([h, l]) => <a key={h} href={h}>{l}</a>)}</div>
        <div><h4>Contact</h4><a href={`mailto:${EMAIL}`}>{EMAIL}</a><a href={wa("Hello GAS")}>WhatsApp</a></div>
        <p className="copy">© {new Date().getFullYear()} PT Gayatri Abadi Sentosa. All rights reserved.</p>
      </footer>
      <div className="dock"><a className="btn gold sm" href={orderAll}>Order now</a><a className="btn line sm" href={wa("Hello GAS, I'd like to ask about product availability.")}>WhatsApp</a></div>
      <a className="float-wa" href={wa("Hello GAS, I'd like to ask about product availability.")} aria-label="Chat on WhatsApp">WhatsApp</a>
    </>
  );
}
