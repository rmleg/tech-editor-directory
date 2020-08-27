// import posts from "./_posts.js";
import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllPosts = () =>
  fs.readdirSync("directory").map((fileName) => {
    const post = fs.readFileSync(path.resolve("directory", fileName), "utf-8");
    return grayMatter(post).data;
  });

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  const posts = getAllPosts();
  res.end(JSON.stringify(posts));
}

/* const contents = JSON.stringify(
  posts.map((post) => {
    return {
      title: post.title,
      slug: post.slug,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
} */
