/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import { saveArticle } from "../../services/service.articles";
import "react-toastify/dist/ReactToastify.css";

function Blog() {
  function formatDate(date: Date) {
    const dateNow = new Date(date);
    let month = `${dateNow.getMonth() + 1}`;
    let day = `${dateNow.getDate()}`;
    const year = dateNow.getFullYear();

    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0${day}`;

    return [year, month, day].join("-");
  }

  const [blogPost, setBlogPost] = useState({
    title: "",
    introduction: "",
    conclution: "",
    description: "",
  });

  const hanldeInputChange = (e: any) => {
    setBlogPost({ ...blogPost, [e.target.name]: e.target.value });
  };

  const showToastMessage = () => {
    toast.success("Post Created !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const { isLoading: isPostingTutorial, mutate: postTutorial } = useMutation<
    any,
    Error
  >(async () => {
    return saveArticle({ ...blogPost, publicated: formatDate(new Date()) });
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    postTutorial();
    setBlogPost({
      title: "",
      introduction: "",
      conclution: "",
      description: "",
    });
    showToastMessage();
  };

  return (
    <div className="bg-blue-dark h-full">
      <ToastContainer />
      <div className="text-white flex flex-col justify-center align-middle text-center ">
        <form
          onSubmit={handleSubmit}
          className="flex  flex-col justify-center p-10 border border-white h-screen"
        >
          <h1 className="mt-1 font-extrabold text-4xl ">
            Write a new blog post
          </h1>

          <br />
          <label htmlFor="article">Title</label>
          <br />
          <input
            type="text"
            name="title"
            id="tile"
            value={blogPost.title}
            onChange={hanldeInputChange}
            className="text-blue-dark  rounded-xl w-9/12 m-auto p-2"
          />
          <br />
          <label htmlFor="article">Introduction</label>
          <br />
          <textarea
            name="introduction"
            value={blogPost.introduction}
            onChange={hanldeInputChange}
            className="text-blue-dark p-1 w-9/12 rounded-xl h-28 m-auto"
          />
          <br />
          <label htmlFor="article">Description</label>
          <br />

          <textarea
            name="description"
            value={blogPost.description}
            onChange={hanldeInputChange}
            className="text-blue-dark p-1 w-9/12  h-28 rounded-xl m-auto"
          />
          <br />
          <label htmlFor="article">Conclution</label>
          <br />
          <textarea
            name="conclution"
            value={blogPost.conclution}
            onChange={hanldeInputChange}
            className="text-blue-dark p-1 w-9/12  h-28 rounded-xl  m-auto"
          />
          <br />
          <br />
          <button
            className="bg-blue-primary w-1/2 m-auto h-14 rounded-xl "
            type="submit"
          >
            Crete Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Blog;
