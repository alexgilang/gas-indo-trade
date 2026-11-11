export type K = "bean" | "clove" | "finger" | "ginger" | "grain" | "stem";
export const themes: Record<string, { bg: string; fg: string; shape: string; det: string; kinds: K[]; n: number; sp: number }> = {
  "dried-turmeric": { bg: "#F2B01E", fg: "#1d140d", shape: "#A24F08", det: "#F2B01E", kinds: ["finger"], n: 30, sp: 48 },
  "turmeric-powder": { bg: "#E7860F", fg: "#1d140d", shape: "#FFD98A", det: "#E7860F", kinds: ["grain"], n: 170, sp: 22 },
  "dried-ginger": { bg: "#E6C48A", fg: "#1d140d", shape: "#9C6B34", det: "#E6C48A", kinds: ["ginger"], n: 30, sp: 48 },
  "ginger-powder": { bg: "#B98A52", fg: "#1d140d", shape: "#F3E1BD", det: "#B98A52", kinds: ["grain"], n: 170, sp: 22 },
  coffee: { bg: "#3A2417", fg: "#fff7ea", shape: "#9A6A48", det: "#3A2417", kinds: ["bean"], n: 32, sp: 47 },
  cloves: { bg: "#7A2417", fg: "#fff7ea", shape: "#E3A857", det: "#7A2417", kinds: ["clove"], n: 34, sp: 46 },
  "clove-stems": { bg: "#5B6B3A", fg: "#fff7ea", shape: "#D9B779", det: "#5B6B3A", kinds: ["stem"], n: 42, sp: 42 },
};
