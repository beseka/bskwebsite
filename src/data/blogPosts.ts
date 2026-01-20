    export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  body: Array<
    | { type: "p"; text: string }
    | { type: "h3"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "quote"; text: string }
  >;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "move-forward",
    title: "Moving Forward Title",
    excerpt:
      "Gürültü kısa vadede kazanır. Sakin ürünler uzun vadede ayakta kalır.",
    date: "2025-01-05",
    readTime: "4 dk",
    body: [
      { type: "p", text: "Bu yazı ürün tasarımında sakinliğin neden stratejik olduğunu anlatır." },
      { type: "h3", text: "Neden sakinlik?" },
      { type: "p", text: "Karmaşıklık ölçeklenmez. Netlik ölçeklenir." },
      { type: "quote", text: "Good products reduce decisions, not add them." },
    ],
  },
  {
    slug: "note-taking-2-0",
    title: "Not Almak 2.0",
    excerpt:
      "Feature’lar eskir, sistemler evrimleşir.",
    date: "2024-12-14",
    readTime: "5 dk",
    body: [
      { type: "p", text: "Bu yazı sistem düşüncesinin ürünlere etkisini ele alır." },
      { type: "h3", text: "Feature vs System" },
      { type: "p", text: "Bir feature eklemek kolaydır, bir sistem kurmak zordur." },
    ],
  },
  {
    slug: "insight",
    title: "Nedir Bu İnsight?",
    excerpt:
      "Feature’lar eskir, sistemler evrimleşir.",
    date: "2024-12-14",
    readTime: "5 dk",
    body: [
      { type: "p", text: "Bu yazı sistem düşüncesinin ürünlere etkisini ele alır." },
      { type: "h3", text: "Feature vs System" },
      { type: "p", text: "Bir feature eklemek kolaydır, bir sistem kurmak zordur." },
    ],
  },
];
