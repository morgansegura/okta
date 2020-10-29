import React from "react"
/* Components */
import Layout from '../components/Layout'

export default () => {

    return (
        <Layout className="wrapper--royal-blue">
            <section className="section-layout sponsors">
                <div className="container">

                    <h2>Contact</h2>
                    <div className="description-block">
                        <p>
                            Pulp fiction charlotte hornets my heart will go on homie, tlc sitcoms dial-up britney spears pagers dolly the sheep. Deep blue blockbuster video light up sneakers joey tribbiani taco bell chihuahua babyface. Bandanas internet baseball jacket lunchables.
                        </p>
                        <p className="contact-phrase">
                            Additionally, you can contact us at sponsorships@okta.com
                        </p>
                    </div>
                    <div className="mt-4 w-full max-w-md mx-auto">
                        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto">
                            <input type="hidden" name="okta-contact" value="contact" />
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Full Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" id="name" type="text" required />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email" >
                                    Leave a message
                                </label>
                                <input name="email" type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Leave a message
                                </label>
                                <textarea  name="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Send Now
                                </button>
                            </div>
                        </form>
                        <p className="text-center text-gray-500 text-xs">
                            &copy;2020 Okta. All rights reserved.
                        </p>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

