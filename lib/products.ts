export type Product = { slug: string; name: string; tagline: string; bullets: string[]; specs: Record<string, string> };

const common = {
  "Shelf life": "12–24 months in cool, dry storage",
  "Shipping / Incoterms": "FOB, CFR or CIF, agreed per order",
  "Loading port": "Indonesian export ports, confirmed per order",
  "Export documents": "Commercial invoice, packing list, bill of lading, certificate of origin, phytosanitary certificate",
  "Lab analysis": "COA available on request",
};
const MOQ = "Typically 1 × 20ft container; trial orders on request";
const s = (o: Record<string, string>) => ({ ...o, ...common });

export const products: Product[] = [
  { slug: "dried-turmeric", name: "Dried Turmeric", tagline: "Sun-golden turmeric fingers with the deep colour buyers look for.",
    bullets: ["Sourced directly from Indonesian growing regions", "Carefully dried and sorted before packing", "Dried slices, with whole fingers and bulbs on request"],
    specs: s({ Origin: "Indonesia", Form: "Dried slices; whole fingers and bulbs on request", "Key quality": "Curcumin typically 3–5%", Moisture: "Max 12%", "Foreign matter": "Max 1%", "Total ash": "Max 8%", Colour: "Yellow to orange-brown", "Packaging options": "25 kg PP or jute bags, cartons", MOQ, "HS code": "0910.30" }) },
  { slug: "turmeric-powder", name: "Turmeric Powder", tagline: "Finely milled, vibrant powder ready for food, beverage and wellness applications.",
    bullets: ["Milled from selected Indonesian dried turmeric", "Consistent colour and mesh size batch to batch", "Suited to food manufacturing and repacking"],
    specs: s({ Origin: "Indonesia", Form: "Fine ground powder, 60–100 mesh", "Key quality": "Curcumin typically 3–5%", Moisture: "Max 10%", "Total ash": "Max 8%", "Acid-insoluble ash": "Max 1.5%", Microbiology: "Salmonella absent in 25 g; other limits per buyer standard", Colour: "Bright yellow-orange", "Packaging options": "20–25 kg kraft bags with PE liner, retail packs", MOQ, "HS code": "0910.30" }) },
  { slug: "dried-ginger", name: "Dried Ginger", tagline: "Aromatic dried ginger with the warm bite of fresh Indonesian rhizomes.",
    bullets: ["Dried rhizomes from Indonesian farms", "Cleaned, dried and sorted before packing", "Ideal for milling, extraction or repacking"],
    specs: s({ Origin: "Indonesia", Form: "Dried rhizome pieces, sliced or split", Moisture: "Max 12%", "Total ash": "Max 8%", "Acid-insoluble ash": "Max 2%", "Foreign matter": "Max 1%", Colour: "Light buff to pale brown", "Packaging options": "25 kg PP bags, cartons", MOQ, "HS code": "0910.11" }) },
  { slug: "ginger-powder", name: "Ginger Powder", tagline: "Free-flowing ginger powder with consistent pungency for production lines.",
    bullets: ["Ground from quality Indonesian dried ginger", "Uniform texture for food and beverage manufacturing", "Mesh size confirmed per order"],
    specs: s({ Origin: "Indonesia", Form: "Ground powder, 60–80 mesh", Moisture: "Max 10%", "Total ash": "Max 8%", "Acid-insoluble ash": "Max 2%", Microbiology: "Salmonella absent in 25 g; other limits per buyer standard", Colour: "Golden beige to light tan", "Packaging options": "20–25 kg kraft bags with PE liner, retail packs", MOQ, "HS code": "0910.12" }) },
  { slug: "coffee", name: "Coffee", tagline: "Indonesian coffee with the character global roasters seek.",
    bullets: ["Arabica and Robusta from Indonesian growing regions", "Green beans, with roasted or ground on request", "Variety, process and cup profile shared before you commit"],
    specs: s({ Origin: "Indonesia", Form: "Green beans (roasted / ground on request)", Varieties: "Arabica, Robusta", "Typical origins": "Gayo, Mandheling, Toraja, Java, Flores, Kintamani, Lampung (availability per order)", Process: "Wet-hulled, washed or natural", Moisture: "10–12.5%", Defects: "Grade 1 / Grade 2 by defect count per 300 g", "Screen size": "Typically 15–18 Arabica, 13–16 Robusta", "Packaging options": "60 kg jute bags with GrainPro liner; roasted in valve bags, cartons", MOQ: "Typically 1 × 20ft container; samples and small lots on request", "HS code": "0901.11 green, 0901.21 roasted" }) },
  { slug: "cloves", name: "Cloves", tagline: "Hand-picked whole cloves with the rich aroma Indonesia is known for.",
    bullets: ["Whole cloves from Indonesian islands", "Sun-dried and sorted for consistent quality", "Headless and stem content agreed per order"],
    specs: s({ Origin: "Indonesia", "Typical origins": "Sulawesi, Maluku, Java", Form: "Whole dried cloves", "Key quality": "Volatile oil typically 14–17%", Moisture: "Max 12%", "Headless cloves": "Max 2%", "Foreign matter": "Max 1%", Colour: "Reddish-brown to dark brown", "Packaging options": "25 kg PP or jute bags, cartons", MOQ, "HS code": "0907.10" }) },
  { slug: "clove-stems", name: "Clove Stems", tagline: "Aromatic clove stems, rich in natural eugenol, for oil distillation and spice grinding.",
    bullets: ["Dried clove stalks from Indonesian clove-growing regions", "Clean, dry and sorted before packing", "Suited to essential oil distillation and grinding"],
    specs: s({ Origin: "Indonesia", "Local name": "Gagang cengkeh", "Typical origins": "Sulawesi, Maluku, Java", Form: "Dried clove stems (stalks), short cut pieces", "Key quality": "Volatile oil typically 4–6%", Moisture: "Max 12%", "Foreign matter": "Max 2%", Colour: "Brown to dark brown", "Typical uses": "Essential oil distillation, grinding for spice and flavour industries", "Packaging options": "25–50 kg PP or jute bags", MOQ, "HS code": "0907.10" }) },
];

export const faqs = [
  ["What is your minimum order quantity (MOQ)?", "Typically one 20ft container per product. Smaller trial orders and samples can be discussed. MOQ is confirmed in writing for each order."],
  ["How do I place an order?", "Click “Order Now” on the product. Your email app opens with the order details ready to fill in, and we reply to confirm availability, specifications and pricing in writing."],
  ["What if the product I need isn’t on your list?", "Message us on WhatsApp. We will check the availability of that product, or similar ones, across our sourcing network."],
  ["What packaging options are available?", "Typically 25 kg PP or jute bags and cartons, 60 kg jute bags for green coffee, and retail packs for powders. Custom packaging on request."],
  ["How is shipping handled, and which Incoterms do you offer?", "We arrange export shipping from Indonesian ports to your destination. FOB, CFR or CIF terms are agreed per order."],
  ["What are your payment terms?", "Common export terms such as T/T or L/C. Terms are agreed directly with each buyer before an order is confirmed."],
  ["Can I get product samples before ordering?", "Yes. Contact us with the product and your destination and we will advise on availability and terms."],
  ["What export documentation do you provide?", "Commercial invoice, packing list, bill of lading, certificate of origin and phytosanitary certificate. A lab analysis (COA) is available on request."],
  ["What is the typical lead time?", "Typically 2–4 weeks from order confirmation, depending on product, quantity and season. You get a clear estimate with every order confirmation."],
];
