import { useState,  useContext, useEffect } from "react";
import { Alert, ListGroup, Button, Form, FloatingLabel } from "react-bootstrap";
import Numbering from "./Numbering";
import { LanguageContext } from "../context/LanguageContext";
import { uid } from "uid";

const Post = ({ post, category, setCategory, updatePost }) => {
  const context = useContext(LanguageContext);
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(post.rating ? post.rating : 0);
  const [comments, setComments] = useState(post.comments ? post.comments : []);

  useEffect(() => {
    post.comments = [...comments];
    //console.log(post.comments);
    updatePost(post);
  }, [comments]);

  useEffect(() => {
    post.rating = rating;

    if (rating !== 0) {
      updatePost(post);
      //console.log(post.rating);
    }
  }, [rating]);

  return (
    <div>
      <Alert variant={post.variant ? post.variant : "danger"}>
        <Numbering
          startRating={rating}
          set={(rating) => {
            setRating(rating);
          }}
        />
        <h3>{post.title}</h3>
        <a
          onClick={() => {
            if (post.category !== category) setCategory(post.category);
            else setCategory("");
          }}
        >
          {post.category}
        </a>
        <p>{new Date(post.date).toLocaleDateString().slice(1, -1)}</p>
        <p>{post.content}</p>
      </Alert>

      <FloatingLabel controlId="floatingTextarea2" label={context.language === "en" ? "Comments" : "Коментар"}>
        <Form.Control
          placeholder={context.language === "en" ? "Title" : "Заголовок"}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Form.Control
          as="textarea"
          placeholder={context.language === "en" ? "Leave a comment here" : "Залиште коментар тут"}
          style={{ height: "100px" }}
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            if (title.trim().length > 0 && comment.trim().length > 0) {
              if (post.comments) {
                setComments([
                  ...comments,
                  {
                    id: uid(),
                    title: title,
                    comment: comment,
                    date: Date.now(),
                  },
                ]);
              } else {
                setComments([
                  {
                    id: uid(),
                    title: title,
                    comment: comment,
                    date: Date.now(),
                  },
                ]);
              }

              setTitle("");
              setComment("");
            }
          }}
        >
          {context.language === "en" ? "Submit" : "Підтвердити"}
        </Button>
      </FloatingLabel>

      <ListGroup style={{ padding: "20px" }}>
        {!comments
          ? ""
          : comments.map((comment, index) => (
              <ListGroup.Item key={comment.id} style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h3>{context.languge === "en" ? `Commnts ${index + 1}` : `Коментарій ${index + 1}`}</h3>
                  <h5>{comment.title}</h5>
                  <p> {comment.comment}</p>
                  {post.date ? new Date(post.date).toLocaleDateString() : Date.now()}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <Button
                    onClick={() => {
                      setComments([...comments].filter((item) => item.id !== comment.id));
                    }}
                  >
                    {context.language === "en" ? "Delete" : "Видалити"}
                  </Button>
                  {/* <Button>{context === "en" ? "Edit" : "Змінити"}</Button> */}
                </div>
              </ListGroup.Item>
            ))}
      </ListGroup>
    </div>
  );
};

export default Post;
