import { products, faqs } from "@/lib/products";
import Scatter from "@/components/Shapes";
import { productPhoto, productPhotos, logo } from "@/lib/media";
import { themes } from "@/lib/themes";
import WayCard from "@/components/WayCard";
import HeroShowcase from "@/components/HeroShowcase";
import MobileMenu from "@/components/MobileMenu";
import Collapse from "@/components/Collapse";
import ScrollFX from "@/components/ScrollFX";

const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "gayatriabadisentosa@gmail.com";
const WA = process.env.NEXT_PUBLIC_WHATSAPP ?? "6282233413190";
const mail = (s: string, b: string) => `mailto:${EMAIL}?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(b)}`;
const orderAll = mail("Order - PT Gayatri Abadi Sentosa", "Hello GAS Team,\n\nI would like to place an order.\n\nProduct(s): \nQuantity: \nDestination country / port: \nPreferred packaging: \nTarget delivery date: \n\nBuyer name: \nCompany: \n\nThank you.");
const order = (n: string) => mail(`Order - ${n}`, `Hello GAS Team,\n\nI would like to order the product below.\n\nProduct: ${n}\nQuantity: \nDestination country / port: \nPreferred packaging: \nTarget delivery date: \n\nBuyer name: \nCompany: \n\nThank you.`);
const wa = (t: string) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;

const steps = [
  ["Choose your product", "Pick from the list and click Order Now to email us your order. Not listed? Ask on WhatsApp."],
  ["Confirm specifications", "We reply with availability, grade, packaging and pricing, agreed in writing before you commit."],
  ["Review a sample", "Samples can be requested before you place a larger order."],
  ["We ship with documents", "Export shipping to your port, with documents such as certificate of origin and phytosanitary certificate on request."],
];

export default function Home() {
  const L = logo();
  const brand = L ? <img src={L} alt="GAS" className="logo-img" /> : <>GAS<i>.</i></>;
  return (
    <>
      <ScrollFX />
      <a href="#main" className="skip">Skip to main content</a>
      <div className="progress" aria-hidden="true" />
      <header className="nav">
        <a href="#home" className="logo">{brand}</a>
        <nav aria-label="Main"><a href="#products">Products</a><a href="#process">How it works</a><a href="#about">About</a><a href="#faq">FAQ</a></nav>
        <a className="btn gold sm" href={orderAll}>Order now</a>
        <MobileMenu links={[["#products", "Products"], ["#process", "How it works"], ["#about", "About"], ["#faq", "FAQ"], ["#contact", "Contact"]]} />
      </header>

      <main id="main">
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="kicker">PT Gayatri Abadi Sentosa · Indonesian export supply</p>
            <h1>Premium Indonesian spices &amp; coffee, sourced for global buyers.</h1>
            <p className="lead">We connect importers, distributors and food manufacturers with Indonesian turmeric, ginger, coffee, cloves and clove stems, sourced directly at origin and prepared for export.</p>
            <ul className="trust">
              <li><b>Direct sourcing</b>Straight from Indonesian growing regions.</li>
              <li><b>Specs in writing</b>Confirmed with you before you commit.</li>
              <li><b>Fast replies</b>Clear answers, honest terms.</li>
            </ul>
          </div>
          <HeroShowcase items={products.map((p) => ({ slug: p.slug, name: p.name, tag: p.tagline, ...themes[p.slug], photo: productPhoto(p.slug), order: order(p.name) }))} />
        </section>

        <nav className="band" aria-label="Commodities"><div className="track">{[...products, ...products].map((p, i) => <a key={i} href={`#${p.slug}`} tabIndex={i >= products.length ? -1 : undefined} aria-hidden={i >= products.length || undefined}>{p.name}</a>)}</div></nav>

        <section id="products" className="intro">
          <h2>The commodities of one reliable source.</h2>
          <p>Typical market specifications are shown for each product; final specifications are agreed in writing before every order. Found what you need? Click Order Now to order by email. Not listed? Ask us on WhatsApp.</p>
        </section>

        <div className="stack">
          {products.map((p) => {
            const t = themes[p.slug];
            const photos = productPhotos(p.slug);
            const photo = photos[0];
            return (
              <article key={p.slug} id={p.slug} className="panel" data-name={p.name} style={{ "--bg": t.bg, "--fg": t.fg } as React.CSSProperties}>
                <div className="panel-copy">
                  <h3><a href={`/products/${p.slug}`} className="h3link">{p.name}</a></h3>
                  <p className="tag">{p.tagline}</p>
                  <ul className="checks">{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                  <dl className="chips">
                    <div><dt>Form</dt><dd>{p.specs.Form}</dd></div>
                    <div><dt>Moisture</dt><dd>{p.specs.Moisture}</dd></div>
                    <div><dt>Packaging</dt><dd>{p.specs["Packaging options"]}</dd></div>
                  </dl>
                  <div className="actions">
                    <a className="btn on" href={order(p.name)}>Order Now</a>
                    <a className="btn ghost" href={`/products/${p.slug}`}>Product details</a>
                  </div>
                </div>
                {photo ? <div className="photos"><img className="panel-photo" src={photo} alt={p.name} />{photos[1] && <img className="photo2" src={photos[1]} alt={`${p.name} close-up`} />}</div> : <Scatter className="panel-art" label={`${p.name} illustration`} kinds={t.kinds} fill={t.shape} detail={t.det} count={t.n} spread={t.sp} />}
              </article>
            );
          })}
        </div>

        <section id="process" className="section">
          <h2>From first message to your port.</h2>
          <ol className="steps">
            {steps.map(([h, d], i) => <li key={h}><span>{i + 1}</span><h3>{h}</h3><p>{d}</p></li>)}
          </ol>
        </section>

        <section id="about" className="about">
          <div>
            <h2>A new company, built on old-fashioned reliability.</h2>
            <p>PT Gayatri Abadi Sentosa, or GAS, is a newly established Indonesian agricultural commodity company. Our purpose is simple: connect Indonesia’s farmers and their quality commodities with buyers around the world.</p>
            <p>We are honest about where we stand. We don’t claim decades of history or a wall of awards. What we offer is what matters at the start of a trade relationship, and every order matters to us.</p>
            <dl className="values">
              <dt>Quality</dt><dd>Products are checked and graded before packing, and specs are confirmed with you first.</dd>
              <dt>Reliability</dt><dd>We commit only to what we can deliver: quantities, timelines and terms you can plan around.</dd>
              <dt>Transparency</dt><dd>No inflated claims. Clear pricing, clear documentation, honest answers.</dd>
            </dl>
          </div>
          <aside className="facts">
            <h3>Company facts</h3>
            <dl>
              <dt>Legal name</dt><dd>PT Gayatri Abadi Sentosa</dd>
              <dt>Brand</dt><dd>GAS</dd>
              <dt>Country</dt><dd>Indonesia</dd>
              <dt>Export market focus</dt><dd>International B2B: importers, distributors, food manufacturers, wholesalers</dd>
              <dt>Email</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd>
            </dl>
          </aside>
        </section>

        <section id="faq" className="faq-wrap">
          <div><h2>Questions from export buyers</h2><p>Short, honest answers. Specifics are always confirmed with you before any order.</p></div>
          <div>{faqs.map(([q, a]) => <Collapse key={q} className="faq" label={q}><p>{a}</p></Collapse>)}</div>
        </section>

        <section id="contact" className="ways">
          <h2>Order or ask.</h2>
          <div className="ways-grid">
            <WayCard tone="mail" href={orderAll} eyebrow="Email" title="Order now" line="Found it? Send your order." cta="Open email" />
            <WayCard tone="wa" href={wa("Hello GAS, I'm looking for a product that isn't listed on your website. Could you check availability of similar products?")} eyebrow="WhatsApp" title="Not listed?" line="Ask about similar products." cta="Chat now" />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div><a href="#home" className="logo">{brand}</a><p>Premium Indonesian spices &amp; coffee for global buyers.<br />PT Gayatri Abadi Sentosa, Indonesia</p></div>
        <div><h4>Quick links</h4><a href="#products">Products</a><a href="#process">How it works</a><a href="#about">About</a><a href="#faq">FAQ</a></div>
        <div><h4>Contact</h4><a href={`mailto:${EMAIL}`}>{EMAIL}</a><a href={wa("Hello GAS")}>WhatsApp</a></div>
        <p className="copy">© {new Date().getFullYear()} PT Gayatri Abadi Sentosa. All rights reserved.</p>
      </footer>
      <div className="dock"><a className="btn gold sm" href={orderAll}>Order now</a><a className="btn line sm" href={wa("Hello GAS, I'd like to ask about product availability.")}>WhatsApp</a></div>
      <a className="float-wa" href={wa("Hello GAS, I'd like to ask about product availability.")} aria-label="Chat on WhatsApp">WhatsApp</a>
    </>
  );
}
