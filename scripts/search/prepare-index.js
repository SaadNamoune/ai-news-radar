import { promises as fs } from "fs";
import { globby } from "globby";
import grayMatter from "gray-matter";
import { join } from "path";

(async function () {
  const cwd = process.cwd().replace(/\\/g, "/");

  // Use forward slashes for glob patterns (required by fast-glob on all platforms)
  const blogPattern = `${cwd}/src/content/blog/*.{md,mdx}`;

  const indexFile = join(process.cwd(), "public", "search-index.json");

  const contentFilePaths = await globby([blogPattern]);

  if (!contentFilePaths.length) {
    console.warn("[search-index] No content files found — skipping index generation");
    return;
  }

  const index = [];
  for (const filePath of contentFilePaths) {
    const raw = await fs.readFile(filePath, "utf8");
    const { data: { title, description, tags }, content } = grayMatter(raw);

    // Skip placeholder posts from the index
    const slug = filePath.split("/").pop().replace(/\.(md|mdx)$/, "");
    if (slug === "placeholder") continue;

    index.push({
      slug,
      category: "blog",
      title: title ?? "",
      description: description ?? "",
      tags: Array.isArray(tags) ? tags : [],
      body: content,
    });
  }

  await fs.writeFile(indexFile, JSON.stringify(index));
  console.log(`[search-index] Indexed ${index.length} document(s) → ${indexFile}`);
})();
