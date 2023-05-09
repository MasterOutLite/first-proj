import React, { useEffect, useState, useContext } from "react";
import { Container, Button, Form, FloatingLabel, DropdownButton, Dropdown } from "react-bootstrap";
import { LanguageContext } from "../context/LanguageContext";
import BlogPosts from "../component/BlogPosts";
import { db } from "../firebase";
import { uid } from "uid";
import { getDatabase, onValue, ref, push, set, remove, update } from "firebase/database";

const Blog = () => {
  // {
  //   id: "",
  //   category: "",
  //   title: "",
  //   content: "",
  //   date: Date.now(),
  //   variant: "",
  //   rating: 0,
  //   comments: [{}],
  // }

  async function writeUserData(post) {
    const newPost = await set(ref(db, `post/${post.id}`), post);
    //console.log(newPost);
  }

  const readPost = async () => {
    const starCountRef = ref(db, "post");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const dataArray = Array.from(Object.keys(data).map((key) => data[key]));
      dataArray.forEach((value) => {
        if (value.comment) value.comment = Object.keys(value.comment).map((key) => value.comment[key]);
      });
      setPost(dataArray);
    });
  };

  const createPost = () => {
    const randVariant = Math.floor(Math.random() * variant.length) + 0;
    return {
      id: uid(),
      category: "",
      title: "",
      content: "",
      date: Date.now(),
      variant: variant[randVariant],
      rating: 0,
      comments: [{}],
    };
  };

  const sendPost = async () => {
    if (title.length === 0 || content.length === 0 || category.length === 0) {
      console.log("Post empty");
      return;
    }
    post.category = category;
    post.title = title;
    post.content = content;
    await writeUserData(post);
    setCategory("");
    setTitle("");
    setContent("");
    post = createPost();

    // readPost();
  };

  const updatePost = async (post) => {
    update(ref(db, `post/${post.id}`), post);
  };

  useEffect(() => {
    readPost();
  }, []);

  const [posts, setPost] = useState([]);
  const variant = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
  const context = useContext(LanguageContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  let post = createPost();

  return (
    <>
      <Container>
        <Button
          onClick={() => {
            readPost();
          }}
        >
          Read
        </Button>

        <div className=" p-4">
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            value={category}
          >
            <option>{context.language === "en" ? "Open this select menu" : "Відкрийте це меню вибору"}</option>
            <option value="Famile">{context.language === "en" ? "Famaly" : "Сім'я"}</option>
            <option value="Cook">{context.language === "en" ? "Cook" : "Готовка"}</option>
            <option value="IT">IT</option>
            <option value="Book">{context.language === "en" ? "Book" : "Книги"}</option>
          </Form.Select>

          <FloatingLabel
            className="mt-2"
            controlId="floatingTextarea2"
            label={context.language === "en" ? "Comments" : "Коментар"}
          >
            <Form.Control
              placeholder={context.language === "en" ? "Title" : "Заголовок"}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <Form.Control
              className="mt-2"
              as="textarea"
              placeholder={context.language === "en" ? "Leave a comment here" : "Залиште коментар тут"}
              style={{ height: "100px" }}
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </FloatingLabel>

          <Button className="mt-3" onClick={sendPost}>
            Додати
          </Button>
        </div>
        <BlogPosts posts={posts} updatePost={updatePost} />
      </Container>
    </>
  );
};

export default Blog;
