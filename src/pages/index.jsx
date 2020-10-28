import React from "react"

/* Import CSS */
import "../css/styles.css"
/* Components */
import Layout from '../components/Layout'

// TODO: Make this dynamic
const sponsors = [
    {
        title: '',
        alt: '',
        id: '',
        src: ''
    }
]


const Home = () => (
  <Layout className="wrapper--royal-blue">
    <section className="section sponsors">
        <div className="container">
            <h1>Home Page</h1>
            <h2>Keynotes</h2>
            <p>1) Make sure to write base styles and only use Tailwind for forms and modal etc., so they can see your css</p>
            <div className="icons-wrapper">
                <div className="icon-box">
                    Aws
                </div>
            </div>
        </div>
    </section>
  </Layout>
)
export default Home
