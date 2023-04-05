import React, { useState } from "react";
import { Container, Col, Row, Card, ListGroup, Alert } from "react-bootstrap";
import BlogPosts from "../component/BlogPosts";

const Blog = () => {
  const [posts] = useState([
    {
      id: 1,
      variant: "warning",
      title: "Post",
      date: "2023-04-04T14:44:07.053Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis at nibh sed rhoncus. Integer imperdiet ligula rutrum cursus vulputate. Phasellus maximus nunc ac est pulvinar, nec porttitor nibh rutrum. Sed at fringilla enim. Praesent iaculis eget nunc vitae commodo. Cras a venenatis elit. Nullam eu diam sem. Maecenas nisi magna, imperdiet at iaculis quis, luctus quis ante. Proin felis ex, gravida a purus sed, dignissim facilisis ligula. Phasellus et augue consequat, fermentum risus consequat, aliquet neque. Sed non congue metus. Integer laoreet et velit a imperdiet.      In efficitur lacus a venenatis aliquet. Cras lectus ipsum, fringilla et massa non, mattis cursus lorem. Donec hendrerit maximus luctus. Aenean egestas nec risus vitae tincidunt. Etiam auctor velit sed convallis aliquet. Duis pellentesque iaculis pulvinar. Curabitur vitae ligula rhoncus diam finibus blandit. Nulla malesuada sapien lorem, et dignissim nisl fermentum sit amet.",
    },
    {
      id: 2,
      variant: "info",
      title: "Post",
      date: "2023-03-04T14:44:07.053Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis at nibh sed rhoncus. Integer imperdiet ligula rutrum cursus vulputate. Phasellus maximus nunc ac est pulvinar, nec porttitor nibh rutrum. Sed at fringilla enim. Praesent iaculis eget nunc vitae commodo. Cras a venenatis elit. Nullam eu diam sem. Maecenas nisi magna, imperdiet at iaculis quis, luctus quis ante. Proin felis ex, gravida a purus sed, dignissim facilisis ligula. Phasellus et augue consequat, fermentum risus consequat, aliquet neque. Sed non congue metus. Integer laoreet et velit a imperdiet.      In efficitur lacus a venenatis aliquet. Cras lectus ipsum, fringilla et massa non, mattis cursus lorem. Donec hendrerit maximus luctus. Aenean egestas nec risus vitae tincidunt. Etiam auctor velit sed convallis aliquet. Duis pellentesque iaculis pulvinar. Curabitur vitae ligula rhoncus diam finibus blandit. Nulla malesuada sapien lorem, et dignissim nisl fermentum sit amet.",
    },
    {
      id: 3,
      variant: "dark",
      title: "Post",
      date:"2023-02-04T14:44:07.053Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis at nibh sed rhoncus. Integer imperdiet ligula rutrum cursus vulputate. Phasellus maximus nunc ac est pulvinar, nec porttitor nibh rutrum. Sed at fringilla enim. Praesent iaculis eget nunc vitae commodo. Cras a venenatis elit. Nullam eu diam sem. Maecenas nisi magna, imperdiet at iaculis quis, luctus quis ante. Proin felis ex, gravida a purus sed, dignissim facilisis ligula. Phasellus et augue consequat, fermentum risus consequat, aliquet neque. Sed non congue metus. Integer laoreet et velit a imperdiet.      In efficitur lacus a venenatis aliquet. Cras lectus ipsum, fringilla et massa non, mattis cursus lorem. Donec hendrerit maximus luctus. Aenean egestas nec risus vitae tincidunt. Etiam auctor velit sed convallis aliquet. Duis pellentesque iaculis pulvinar. Curabitur vitae ligula rhoncus diam finibus blandit. Nulla malesuada sapien lorem, et dignissim nisl fermentum sit amet.",
    },
    {
      id: 4,
      variant: "primary",
      title: "Post",
      date: "2023-01-04T14:44:07.053Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis at nibh sed rhoncus. Integer imperdiet ligula rutrum cursus vulputate. Phasellus maximus nunc ac est pulvinar, nec porttitor nibh rutrum. Sed at fringilla enim. Praesent iaculis eget nunc vitae commodo. Cras a venenatis elit. Nullam eu diam sem. Maecenas nisi magna, imperdiet at iaculis quis, luctus quis ante. Proin felis ex, gravida a purus sed, dignissim facilisis ligula. Phasellus et augue consequat, fermentum risus consequat, aliquet neque. Sed non congue metus. Integer laoreet et velit a imperdiet.      In efficitur lacus a venenatis aliquet. Cras lectus ipsum, fringilla et massa non, mattis cursus lorem. Donec hendrerit maximus luctus. Aenean egestas nec risus vitae tincidunt. Etiam auctor velit sed convallis aliquet. Duis pellentesque iaculis pulvinar. Curabitur vitae ligula rhoncus diam finibus blandit. Nulla malesuada sapien lorem, et dignissim nisl fermentum sit amet.",
    },
    {
      id: 5,
      variant: "dark",
      title: "Post",
      date:"2023-05-04T14:44:07.053Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis at nibh sed rhoncus. Integer imperdiet ligula rutrum cursus vulputate. Phasellus maximus nunc ac est pulvinar, nec porttitor nibh rutrum. Sed at fringilla enim. Praesent iaculis eget nunc vitae commodo. Cras a venenatis elit. Nullam eu diam sem. Maecenas nisi magna, imperdiet at iaculis quis, luctus quis ante. Proin felis ex, gravida a purus sed, dignissim facilisis ligula. Phasellus et augue consequat, fermentum risus consequat, aliquet neque. Sed non congue metus. Integer laoreet et velit a imperdiet.      In efficitur lacus a venenatis aliquet. Cras lectus ipsum, fringilla et massa non, mattis cursus lorem. Donec hendrerit maximus luctus. Aenean egestas nec risus vitae tincidunt. Etiam auctor velit sed convallis aliquet. Duis pellentesque iaculis pulvinar. Curabitur vitae ligula rhoncus diam finibus blandit. Nulla malesuada sapien lorem, et dignissim nisl fermentum sit amet.",
    },
    {
      id: 6,
      variant: "success",
      title: "Post",
      date: "2022-04-04T14:43:49.711Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis at nibh sed rhoncus. Integer imperdiet ligula rutrum cursus vulputate. Phasellus maximus nunc ac est pulvinar, nec porttitor nibh rutrum. Sed at fringilla enim. Praesent iaculis eget nunc vitae commodo. Cras a venenatis elit. Nullam eu diam sem. Maecenas nisi magna, imperdiet at iaculis quis, luctus quis ante. Proin felis ex, gravida a purus sed, dignissim facilisis ligula. Phasellus et augue consequat, fermentum risus consequat, aliquet neque. Sed non congue metus. Integer laoreet et velit a imperdiet.      In efficitur lacus a venenatis aliquet. Cras lectus ipsum, fringilla et massa non, mattis cursus lorem. Donec hendrerit maximus luctus. Aenean egestas nec risus vitae tincidunt. Etiam auctor velit sed convallis aliquet. Duis pellentesque iaculis pulvinar. Curabitur vitae ligula rhoncus diam finibus blandit. Nulla malesuada sapien lorem, et dignissim nisl fermentum sit amet.",
    },
    {
      id: 7,
      variant: "danger",
      title: "Post",
      date: "2026-06-04T14:44:07.053Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis at nibh sed rhoncus. Integer imperdiet ligula rutrum cursus vulputate. Phasellus maximus nunc ac est pulvinar, nec porttitor nibh rutrum. Sed at fringilla enim. Praesent iaculis eget nunc vitae commodo. Cras a venenatis elit. Nullam eu diam sem. Maecenas nisi magna, imperdiet at iaculis quis, luctus quis ante. Proin felis ex, gravida a purus sed, dignissim facilisis ligula. Phasellus et augue consequat, fermentum risus consequat, aliquet neque. Sed non congue metus. Integer laoreet et velit a imperdiet.      In efficitur lacus a venenatis aliquet. Cras lectus ipsum, fringilla et massa non, mattis cursus lorem. Donec hendrerit maximus luctus. Aenean egestas nec risus vitae tincidunt. Etiam auctor velit sed convallis aliquet. Duis pellentesque iaculis pulvinar. Curabitur vitae ligula rhoncus diam finibus blandit. Nulla malesuada sapien lorem, et dignissim nisl fermentum sit amet.",
    },
    {
      id: 8,
      variant: "danger",
      title: "Post",
      date: "2026-06-04T14:44:07.053Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis at nibh sed rhoncus. Integer imperdiet ligula rutrum cursus vulputate. Phasellus maximus nunc ac est pulvinar, nec porttitor nibh rutrum. Sed at fringilla enim. Praesent iaculis eget nunc vitae commodo. Cras a venenatis elit. Nullam eu diam sem. Maecenas nisi magna, imperdiet at iaculis quis, luctus quis ante. Proin felis ex, gravida a purus sed, dignissim facilisis ligula. Phasellus et augue consequat, fermentum risus consequat, aliquet neque. Sed non congue metus. Integer laoreet et velit a imperdiet.      In efficitur lacus a venenatis aliquet. Cras lectus ipsum, fringilla et massa non, mattis cursus lorem. Donec hendrerit maximus luctus. Aenean egestas nec risus vitae tincidunt. Etiam auctor velit sed convallis aliquet. Duis pellentesque iaculis pulvinar. Curabitur vitae ligula rhoncus diam finibus blandit. Nulla malesuada sapien lorem, et dignissim nisl fermentum sit amet.",
    },
    {
      id: 9,
      variant: "danger",
      title: "Post",
      date: "2026-06-04T14:44:07.053Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis at nibh sed rhoncus. Integer imperdiet ligula rutrum cursus vulputate. Phasellus maximus nunc ac est pulvinar, nec porttitor nibh rutrum. Sed at fringilla enim. Praesent iaculis eget nunc vitae commodo. Cras a venenatis elit. Nullam eu diam sem. Maecenas nisi magna, imperdiet at iaculis quis, luctus quis ante. Proin felis ex, gravida a purus sed, dignissim facilisis ligula. Phasellus et augue consequat, fermentum risus consequat, aliquet neque. Sed non congue metus. Integer laoreet et velit a imperdiet.      In efficitur lacus a venenatis aliquet. Cras lectus ipsum, fringilla et massa non, mattis cursus lorem. Donec hendrerit maximus luctus. Aenean egestas nec risus vitae tincidunt. Etiam auctor velit sed convallis aliquet. Duis pellentesque iaculis pulvinar. Curabitur vitae ligula rhoncus diam finibus blandit. Nulla malesuada sapien lorem, et dignissim nisl fermentum sit amet.",
    },
    {
      id: 10,
      variant: "danger",
      title: "Post",
      date: "2026-06-04T14:44:07.053Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis at nibh sed rhoncus. Integer imperdiet ligula rutrum cursus vulputate. Phasellus maximus nunc ac est pulvinar, nec porttitor nibh rutrum. Sed at fringilla enim. Praesent iaculis eget nunc vitae commodo. Cras a venenatis elit. Nullam eu diam sem. Maecenas nisi magna, imperdiet at iaculis quis, luctus quis ante. Proin felis ex, gravida a purus sed, dignissim facilisis ligula. Phasellus et augue consequat, fermentum risus consequat, aliquet neque. Sed non congue metus. Integer laoreet et velit a imperdiet.      In efficitur lacus a venenatis aliquet. Cras lectus ipsum, fringilla et massa non, mattis cursus lorem. Donec hendrerit maximus luctus. Aenean egestas nec risus vitae tincidunt. Etiam auctor velit sed convallis aliquet. Duis pellentesque iaculis pulvinar. Curabitur vitae ligula rhoncus diam finibus blandit. Nulla malesuada sapien lorem, et dignissim nisl fermentum sit amet.",
    },
    {
      id: 11,
      variant: "danger",
      title: "Post",
      date: "2026-06-04T14:44:07.053Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis at nibh sed rhoncus. Integer imperdiet ligula rutrum cursus vulputate. Phasellus maximus nunc ac est pulvinar, nec porttitor nibh rutrum. Sed at fringilla enim. Praesent iaculis eget nunc vitae commodo. Cras a venenatis elit. Nullam eu diam sem. Maecenas nisi magna, imperdiet at iaculis quis, luctus quis ante. Proin felis ex, gravida a purus sed, dignissim facilisis ligula. Phasellus et augue consequat, fermentum risus consequat, aliquet neque. Sed non congue metus. Integer laoreet et velit a imperdiet.      In efficitur lacus a venenatis aliquet. Cras lectus ipsum, fringilla et massa non, mattis cursus lorem. Donec hendrerit maximus luctus. Aenean egestas nec risus vitae tincidunt. Etiam auctor velit sed convallis aliquet. Duis pellentesque iaculis pulvinar. Curabitur vitae ligula rhoncus diam finibus blandit. Nulla malesuada sapien lorem, et dignissim nisl fermentum sit amet.",
    },
  ]);

  return (
    <>
      <Row>
        <Col md="9">
          <div className="d-flex align-items-center me-5">
            <div className="flex-shrink-0">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg"
                alt="photo"
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <h5>Blog post</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                venenatis at nibh sed rhoncus. Integer imperdiet ligula rutrum
                cursus vulputate. Phasellus maximus nunc ac est pulvinar, nec
                porttitor nibh rutrum.
              </p>
            </div>
          </div>

          <div className="d-flex align-items-center me-5">
            <div className="flex-shrink-0">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg"
                alt="photo"
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <h5>Blog post</h5>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                venenatis at nibh sed rhoncus. Integer imperdiet ligula rutrum
                cursus vulputate. Phasellus maximus nunc ac est pulvinar, nec
                porttitor nibh rutrum. Sed at fringilla enim. Praesent iaculis
                eget nunc vitae commodo. Cras a venenatis elit. Nullam eu diam
                sem. Maecenas nisi magna, imperdiet at iaculis quis, luctus quis
                ante. Proin felis ex, gravida a purus sed, dignissim facilisis
                ligula.
              </p>
            </div>
          </div>

          <div className="d-flex align-items-center me-5">
            <div className="flex-shrink-0">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg"
                alt="photo"
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <h5>Blog post</h5>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                venenatis at nibh sed rhoncus. Integer imperdiet ligula rutrum
                cursus vulputate. Phasellus maximus nunc ac est pulvinar, nec
                porttitor nibh rutrum. Sed at fringilla enim. Praesent iaculis
                eget nunc vitae commodo. Cras a venenatis elit. Nullam eu diam
                sem. Maecenas nisi magna, imperdiet at iaculis quis, luctus quis
                ante. Proin felis ex, gravida a purus sed, dignissim facilisis
                ligula.
              </p>
            </div>
          </div>
        </Col>
        <Col md="3">
          <h5 className="text-center mt-5">Категорії</h5>

          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>категорія 1</ListGroup.Item>
              <ListGroup.Item>категорія 2</ListGroup.Item>
              <ListGroup.Item>категорія 3</ListGroup.Item>
              <ListGroup.Item>категорія 4</ListGroup.Item>
              <ListGroup.Item>категорія 5</ListGroup.Item>
            </ListGroup>
          </Card>

          <Card className="mt-3 bg-light">
            <Card.Body>
              <Card.Title>Slide widget</Card.Title>
              <Card.Text>Lorem</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Container>
        {/* <div>
          <h1 className="p-3 primary">Blog</h1>
          {posts.map((post) => (
            <Alert
              key={post.id}
              variant={post.variant ? post.variant : "danger"}
            >
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </Alert>
          ))}
        </div> */}
        <BlogPosts posts={posts} />
      </Container>
    </>
  );
};

export default Blog;
