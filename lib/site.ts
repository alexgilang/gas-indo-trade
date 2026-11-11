export const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "gayatriabadisentosa@gmail.com";
export const WA = process.env.NEXT_PUBLIC_WHATSAPP ?? "6282233413190";
export const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const mail = (s: string, b: string) => `mailto:${EMAIL}?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(b)}`;
export const orderAll = mail("Order - PT Gayatri Abadi Sentosa", "Hello GAS Team,\n\nI would like to place an order.\n\nProduct(s): \nQuantity: \nDestination country / port: \nPreferred packaging: \nTarget delivery date: \n\nBuyer name: \nCompany: \n\nThank you.");
export const order = (n: string) => mail(`Order - ${n}`, `Hello GAS Team,\n\nI would like to order the product below.\n\nProduct: ${n}\nQuantity: \nDestination country / port: \nPreferred packaging: \nTarget delivery date: \n\nBuyer name: \nCompany: \n\nThank you.`);
export const wa = (t: string) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
