import React from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
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

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </div>
  );
};

export default HomePage;
