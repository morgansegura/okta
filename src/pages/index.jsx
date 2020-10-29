import React from "react"
/* Import CSS */
import "../css/styles.css"
/* Components */
import Layout from '../components/Layout'
import IconBox from '../components/IconBox'
/* Import Static Data TODO: Make this dynamic */
import {sponsors} from '../data/sponsors'

export default () => {

    return (
        <Layout className="wrapper--royal-blue">
            <section className="section-layout sponsors">
                <div className="container">

                    <h2>Sponsors</h2>
                    <div className="description-block">
                        <p>Oktane20 is fueled by support of our sponsors. Generate business with a forward-thinking
                           group of IT professionals, and increase exposure for your solutions and services. Make sure
                           you are a part of more strategic IT discussions that center on building new and
                           differentiated experiences in an increasingly mobile and cloud-centric world.
                        </p>
                        <p className="contact-phrase">Contact us at sponsorships@okta.com if you are interested in
                                                      sponsoring.
                        </p>
                        <a className="view-sponsorship"
                           href="https://www.okta.com/sites/default/files/Oktane20Live_Sponsorship_Prospectus_v5_03062020.pdf?_ga=2.60528555.763383892.1603907499-562387895.1603907499"
                           title="View the sponsorship prospectus">
                            View the sponsorship prospectus
                        </a>
                    </div>
                    <div className="container heading-container">
                        <h3>Platinum Sponsors</h3>
                    </div>
                    <div className="icons-wrapper">
                        {
                            sponsors.map(sponsor => sponsor.id <= 16 && (
                                <IconBox
                                    key={sponsor.id}
                                    title={sponsor.modal.title}
                                    body={sponsor.modal.body}
                                    alt={sponsor.alt}
                                    src={sponsor.src}
                                />
                            ))
                        }
                    </div>
                    <div className="container heading-container">
                        <h3>Gold Sponsors</h3>
                    </div>
                    <div className="icons-wrapper ">
                        {
                            sponsors.map(sponsor => sponsor.id >= 17 && (
                                <IconBox
                                    key={sponsor.id}
                                    title={sponsor.modal.title}
                                    body={sponsor.modal.body}
                                    alt={sponsor.alt}
                                    src={sponsor.src}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>

        </Layout>
    )
}

