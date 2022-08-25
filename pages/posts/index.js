import React from "react";
import AllPosts from "../../components/posts/all-posts";
const DUMMY_POSTS = [
    {
      title: "Tiger",
      image: "tiger.png",
      excerpt: "Next is the React Framework",
      date:"1997-10-11",
      slug: "getting-started-with-nextjs-1",
    },
    {
      title: "Tiger",
      image: "tiger.png",
      excerpt: "Next is the React Framework",
      date:"1997-10-11",
      slug: "getting-started-with-nextjs-2",
    },
    {
      title: "Tiger",
      image: "tiger.png",
      excerpt: "Next is the React Framework",
      date:"1997-10-11",
      slug: "getting-started-with-nextjs-3",
    },
  ];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS}/>;
};

export default AllPostsPage;
