import React from "react"
/* Import CSS */
import "../css/styles.css"
/* Components */
import Layout from '../components/Layout'

const Home = ({children}) => (
  <Layout>
    <div className="container">
      <h1>Home Page</h1>
      <h2>Checklist</h2>
      <p>1) Make sure to write base styles and only use Tailwind for forms and modal etc., so they can see your css</p>p>
    </div>
  </Layout>
)
export default Home
