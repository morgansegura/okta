import React from "react"
/* Components */
import Layout from '../components/Layout'
/* Dummy Data TODO: pull this in from API using grphql */
import posts from '../data/posts'

export default () => {
    return (
        <Layout className="wrapper--royal-blue">
            <section className="section-layout posts">
                <div className="container">

                    <h2>Posts</h2>

                    <div className="posts-container">
                        {
                            posts.map(post => (
                                <div id={post.id} className="post-item">
                                    <header className="post-header">
                                        <h3 className="title">{post.title}</h3>
                                        <p className="author">Provided by: {post.author}</p>
                                    </header>
                                    <p className="body">{post.body}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </Layout>
    )
}
