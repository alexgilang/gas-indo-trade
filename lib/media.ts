import fs from "fs";
import path from "path";
const EXT = ["jpg", "jpeg", "png", "webp"];
const find = (dir: string, base: string, exts: string[]) => {
  for (const e of exts) if (fs.existsSync(path.join(process.cwd(), "public", dir, `${base}.${e}`))) return `/${dir}/${base}.${e}`;
  return null;
};
export const productPhotos = (slug: string) =>
  [find("images/products", slug, EXT), find("images/products", `${slug}-2`, EXT)].filter(Boolean) as string[];
export const productPhoto = (slug: string) => productPhotos(slug)[0] ?? null;
export const logo = () => find("images", "logo", ["svg", "png", "webp", "jpg", "jpeg"]);
