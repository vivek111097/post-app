import React from "react";
import classes from "./post-item.module.css";
import Link from "next/link";
import Image from 'next/image'

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;
  const formatedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath=`/images/posts/${slug}/${image}`
  //const imagePath=`/images/posts/${image}`

  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} layout="responsive"/>
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formatedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
