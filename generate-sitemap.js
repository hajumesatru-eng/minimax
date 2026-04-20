const fs = require("fs");
const data = require("./data.json");

const domain = "https://goseriesthai.pages.dev";

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// homepage
xml += `
<url>
  <loc>${domain}/</loc>
  <priority>1.0</priority>
</url>`;

// pages
data.forEach(item => {
  xml += `
<url>
  <loc>${item.url}</loc>
  <lastmod>${item.date}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.9</priority>
</url>`;
});

xml += `\n</urlset>`;

fs.writeFileSync("sitemap.xml", xml);
console.log("✅ Sitemap generated!");
