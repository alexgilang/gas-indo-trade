import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { SITE } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE, priority: 1 },
    ...products.map((p) => ({
      url: `${SITE}/products/${p.slug}`,
      priority: 0.8,
    })),
  ];
}
