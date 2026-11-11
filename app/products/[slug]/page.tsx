import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import { themes } from "@/lib/themes";
import { details } from "@/lib/details";
import { productPhotos } from "@/lib/media";
import { SITE, order, wa } from "@/lib/site";
import { Header, Footer } from "@/components/Chrome";
import Scatter from "@/components/Shapes";

export const dynamicParams = false;
export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) return {};
  const title = `${p.name} from Indonesia | PT Gayatri Abadi Sentosa (GAS)`;
  const description = `${details[slug].desc} Order directly by email or ask on WhatsApp.`;
  const img = productPhotos(slug)[0];
  return { title, description, alternates: { canonical: `/products/${slug}` }, openGraph: { title, description, type: "website", images: img ? [img] : undefined } };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();
  const t = themes[slug], d = details[slug], photos = productPhotos(slug);
  const ld = { "@context": "https://schema.org", "@type": "Product", name: p.name, description: d.desc, url: `${SITE}/products/${slug}`, image: photos[0] ? `${SITE}${photos[0]}` : undefined, brand: { "@type": "Brand", name: "GAS" }, manufacturer: { "@type": "Organization", name: "PT Gayatri Abadi Sentosa" }, additionalProperty: Object.entries(p.specs).slice(0, 10).map(([name, value]) => ({ "@type": "PropertyValue", name, value })) };
  return (
    <>
      <Header />
      <main id="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <section className="pd" style={{ "--bg": t.bg, "--fg": t.fg } as React.CSSProperties}>
          <div>
            <nav className="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/#products">Products</a> / {p.name}</nav>
            <h1>{p.name}</h1>
            <p className="tag">{d.desc}</p>
            <ul className="checks">{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            <div className="actions">
              <a className="btn on" href={order(p.name)}>Order Now</a>
              <a className="btn ghost" href={wa(`Hello GAS, I have a question about ${p.name}.`)}>Ask on WhatsApp</a>
            </div>
          </div>
          {photos[0]
            ? <div className="photos"><img className="panel-photo" src={photos[0]} alt={p.name} />{photos[1] && <img className="photo2" src={photos[1]} alt={`${p.name} close-up`} />}</div>
            : <Scatter className="panel-art" label={`${p.name} illustration`} kinds={t.kinds} fill={t.shape} detail={t.det} count={t.n} spread={t.sp} />}
        </section>
        <section className="section specs">
          <div>
            <h2>Typical specifications</h2>
            <table className="tbl"><tbody>{Object.entries(p.specs).map(([k, v]) => <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>)}</tbody></table>
            <p className="note">Typical market specifications for reference. Final specifications are agreed in writing per order.</p>
          </div>
          <aside className="uses"><h3>Common uses</h3><ul>{d.uses.map((u) => <li key={u}>{u}</li>)}</ul></aside>
        </section>
        <section className="section">
          <h2>More from GAS</h2>
          <div className="rel">{products.filter((x) => x.slug !== slug).map((x) => <a key={x.slug} href={`/products/${x.slug}`} style={{ "--bg": themes[x.slug].bg, "--fg": themes[x.slug].fg } as React.CSSProperties}>{x.name}</a>)}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
