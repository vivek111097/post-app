import React from 'react'
import classes from './post-content.module.css'
import PostHeader from './post-header'
//import ReactMarkdown from 'react-markdown'
const DUMMY_POSTS =
{
    title: "Tiger",
    image: "tiger.png",
    date: "1997-10-11",
    slug: "getting-started-with-nextjs-1",
    content: '# This is a first post'
}


const PostContent = () => {
    const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POSTS.image} image={imagePath} />

            {/* <ReactMarkdown>{
                DUMMY_POSTS.content
            }</ReactMarkdown> */}
        </article>
    )
}

export default PostContent