import React from "react"
/* Components */
import Layout from '../components/Layout'

export default () => {

    return (
        <Layout className="wrapper--royal-blue">
            <section className="section-layout sponsors">
                <div className="container">

                    <h2>Home</h2>
                    <div className="description-block">
                        <p>
                            Thank you for the opportunity to create this app, I had a lot of fun! 3 hours was not enough time to do everything I wanted to do, however below I have listed what I would have done if I'd had a little more time:
                        </p>
                        <p className="contact-phrase">
                           Many things I would have like to finish... ^^
                        </p>
                    </div>
                    <div className="container heading-container">
                        <h3>Notes</h3>
                    </div>
                    <div>
                        <h3 className="my-4 font-bold text-xl text-yellow-100">Some things I wish I could have finished:</h3>
                        <ol className="my-4 text-blue-100">
                            <li>1. I did not have time to finish styling the blog properly. I definitely would have made the blog more dynamic, added pagination and individual post pages.</li>
                            <li>2. I would have spent much more time with the contact form, styling, validation, toastr message, etc.</li>
                            <li>3. Given enough time I would have duplicated the entire site, and believe me, it was not easy for me to stop coding. I like to finish what I start, however in fairness and honesty I did not want to take more than the alotted time.</li>
                            <li>4. Additionally given the chance to do it again, I would have focussed on the technical aspects first, then moved on to the pretty parts. I feel like I spent more time on the sponsors page and ran out of time to properly finish and test contact and posts.</li>
                            <li>5. I did not get a chance to validate the form, nor did I get a chance to ensure ith was working correctly.</li>
                        </ol>
                        <h3 className="my-4 font-bold text-xl text-yellow-100">Things I did for time's sake:</h3>
                        <ol className="my-4 text-blue-100">
                            <li>1. Posts are hard coded into an object. /src/data/posts.js</li>
                            <li>2. I didn't get to use Gatsby Image, for responsive images.</li>
                            <li>3. I imported some gatsby plugins and TailwindCSS, but rarely used Tailwind.</li>
                            <li>4. I only componentized a few necessary components because I was strapped for time.</li>
                        </ol>
                        <h3 className="my-4 font-bold text-xl text-yellow-100">What I take from this project:</h3>
                        <ol className="my-4 text-blue-100">
                            <li>1. Although this task was not easy, I could have made it easier on myself had I known the full scope of the project. I like to plan things out first, this was a great excersize for thinking on my toes!</li>
                            <li>2. I learned to move quickly, I setup most pages, nav and layouts first, then went in and started coding. </li>
                            <li>3. I could have spent less time on the sponsors page, and I did not have to do all of the sponsors, however in my opinion it was important for me to show you UI/UX and React experience.</li>
                            <li>4. I could have setup GraphQL and pulled in the data but I ran out of time. Next time I won't fail ^^</li>
                            <li>5. I usually commit more often, however in this case it was slowing me down a bit. So I pushed after very major edits, and toward the end, almost not at all. Shame on me. ^^</li>
                        </ol>

                        <h4 className="my-4 font-bold text-lg text-blue-100">Thank you a again for the opportunity! I hope to hear from you soon.</h4>

                            <a className="text-center w-full underline text-lg pt-4" href="mailto:morgansegura@gmail.com">Morgan Segura</a>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

