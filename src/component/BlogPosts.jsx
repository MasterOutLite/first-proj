import { useState } from "react";
import { Alert, Pagination } from "react-bootstrap";

function BlogPosts({ posts }) {
  // console.log(...posts);
  const [post, setPosts] = useState(...[posts]);
  const [sortedPosts, setSortedPosts] = useState(post);
  const [sortDirection, setSortDirection] = useState("DESC");

  const sortPosts = () => {
    const sorted = [...sortedPosts].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (sortDirection === "DESC") {
        return dateB - dateA;
      } else {
        return dateA - dateB;
      }
    });
    setSortedPosts(sorted);
  };

  const setPage = (number) => {
    const step = 5;
    const start = number <= 0 ? 0 : number * step;
    const arr = [];
    for (let i = start - step; i <= start && i < post.length; i++) {
      arr.push(post[i]);
    }

    setSortedPosts(arr);
  };

  let active = 1;
  let items = [];
  let activeElem;
  for (let number = 1; number <= 6; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        className=""
        onClick={(e) => {
          setPage(number);

          for (const key of e.target.parentElement.parentElement.children) {
            key.classList.remove("active");
          }
          e.target.parentElement.classList.add("active");
          active = number;

          // console.log(e.target.parentElement.parentElement.children);
          // console.log(e.target.parentElement.parentElement.childNodes[2]);
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
            sortPosts();
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
          {sortDirection === "DESC" ? "Дата ↑" : "Дата ↓"}
        </button>
      </div>
      <ul>
        {sortedPosts.map((postt) => (
          <Alert
            key={postt.id}
            variant={postt.variant ? postt.variant : "danger"}
          >
            <h3>{postt.title}</h3>
            <p>{JSON.stringify(new Date(postt.date))}</p>
            <p>{postt.content}</p>
          </Alert>
        ))}
      </ul>

      <Pagination>{items}</Pagination>
    </>
  );
}

export default BlogPosts;
