import { useState, useMemo, useContext } from "react";
import { Pagination } from "react-bootstrap";

import { LanguageContext } from "../context/LanguageContext";
import Post from "./Post";

function BlogPosts({ posts, updatePost }) {
  const context = useContext(LanguageContext);

  const [page, setPages] = useState(1);
  const [category, setCategory] = useState("");
  const [post, setPost] = useState(...[posts]);
  const listnerPost = useMemo(() => {
    setPost([...posts]);
  }, [posts]);
  const [sortDirection, setSortDirection] = useState("DESC");

  const sortPosts = () => {
    let sorted = [...post].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (sortDirection === "DESC") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });

    if (category !== "") {
      sorted = sorted.filter((value) => value.category === category);
    }
    const step = 5;
    const end = page <= 0 ? 0 : page * step;
    return sorted.slice(end - step, end);
  };

  const sortedPost = useMemo(() => sortPosts(), [sortDirection, page, category, post]);

  let active = 1;
  let items = [];
  for (let number = 1; number <= 6; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        className=""
        onClick={(e) => {
          setPages(number);
          for (const key of e.target.parentElement.parentElement.children) {
            key.classList.remove("active");
          }
          e.target.parentElement.classList.add("active");
          active = number;
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <div>
        <button
          onClick={() => {
            setSortDirection(sortDirection === "DESC" ? "ASC" : "DESC");
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            textDecoration: "underline",
            cursor: "pointer",
            background: "#0d6efd",
            color: "#000",
            fontSize: 20,
            fontWeight: 700,
          }}
          className="btn m-4"
        >
          {sortDirection === "DESC"
            ? context.language === "uk"
              ? "Дата ↑"
              : "Date ↑"
            : context.language === "uk"
            ? "Дата ↓"
            : "Date ↓"}
        </button>
      </div>
      <ul>
        {sortedPost.map((post) => (
          <Post key={post.id} post={post} category={category} setCategory={setCategory} updatePost={updatePost} />
        ))}
      </ul>

      <Pagination>{items}</Pagination>
    </>
  );
}

export default BlogPosts;
