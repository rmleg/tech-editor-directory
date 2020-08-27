// import posts from "./_posts.js";

import path from "path";
import fs from "fs";
import grayMatter from "gray-matter";
import marked from "marked";

const getPost = (fileName) =>
  fs.readFileSync(path.resolve("directory", `${fileName}.md`), "utf-8");

/* const lookup = new Map();
posts.forEach((post) => {
  lookup.set(post.slug, JSON.stringify(post));
}); */

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;

  // get the markdown text
  const post = getPost(slug);

  // parse the md to get front matter
  // and the content without escaping characters
  const { data, content } = grayMatter(post);

  const html = marked(content);

  const name = data.name;

  if (name) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify({ html, ...data }));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}
