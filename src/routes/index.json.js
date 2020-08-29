import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllPosts = () =>
  fs.readdirSync("directory").map((fileName) => {
    const editor = fs.readFileSync(path.resolve("directory", fileName), "utf-8");
    return grayMatter(editor).data;
  });

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  const editors = getAllPosts();
  res.end(JSON.stringify(editors));
}