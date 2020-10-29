import React, {useState} from "react"
/* Import CSS */
import "../css/styles.css"
/* Components */
import Layout from '../components/Layout'
import Modal from '../components/Modal'
import IconBox from '../components/IconBox'

import aws from '../assets/images/icon-aws.png'
import bettercloud from '../assets/images/icon-bettercloud.png'
import beyondid from '../assets/images/icon-beyondid.png'
import box from '../assets/images/icon-box.png'
import dropbox from '../assets/images/icon-dropbox.png'
import intello from '../assets/images/icon-intello.png'
import printerlogic from '../assets/images/icon-printerlogic.png'
import onetrust from '../assets/images/icon-onetrust.png'
import onfido from '../assets/images/icon-onfido.png'
import ringcentral from '../assets/images/icon-ringcentral.png'
import sailpoint from '../assets/images/icon-sailpoint.png'
import slack from '../assets/images/icon-slack.png'
import titanium from '../assets/images/icon-titanium.png'
import zoom from '../assets/images/icon-zoom.png'
import zylo from '../assets/images/icon-zylo.png'
import proofpoint from '../assets/images/icon-proofpoint.png'

import akamai from '../assets/images/icon-akamai.png'
import aquera from '../assets/images/icon-aquera.png'
import beyondtrust from '../assets/images/icon-beyondtrust.png'
import cloudharmonics from '../assets/images/icon-cloud-harmonics.png'
import code42 from '../assets/images/icon-code42.png'
import datawize from '../assets/images/icon-datawize.png'
import exabeam from '../assets/images/icon-exabeam.png'
import hypr from '../assets/images/icon-hypr.png'
import idmworks from '../assets/images/icon-idmworks.png'
import jumio from '../assets/images/icon-jumio.png'
import optiv from '../assets/images/icon-optiv.png'
import pwc from '../assets/images/icon-pwc.png'
import radientlogic from '../assets/images/icon-radientlogic.png'
import remediant from '../assets/images/icon-remediant.png'
import secretdouble from '../assets/images/icon-secretdouble.png'
import secureitsource from '../assets/images/icon-secureitsource.png'
import privaci from '../assets/images/icon-privaci.png'
import askspoke from '../assets/images/icon-askspoke.png'
import stackoverflow from '../assets/images/icon-stackoverflow.png'
import surveymonkey from '../assets/images/icon-surveymonkey.png'
import yubico from '../assets/images/icon-yubico.png'


// TODO: Make this dynamic
const sponsors = [
    {
        alt: 'Aws',
        id: 1,
        src: aws,
        modal: {
            level: 'Platinum Sponsor',
            title: 'AWS',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Better Cloud',
        id: 2,
        src: bettercloud,
        modal: {
            level: 'Platinum Sponsor',
            title: 'Better Cloud',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor BeyondID',
        id: 3,
        src: beyondid,
        modal: {
            level: 'Platinum Sponsor',
            title: 'Beyond ID',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Box',
        id: 4,
        src: box,
        modal: {
            level: 'Platinum Sponsor',
            title: 'Box',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor DropBox',
        id: 5,
        src: dropbox,
        modal: {
            level: 'Platinum Sponsor',
            title: 'Drop Box',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Intello',
        id: 6,
        src: intello,
        modal: {
            level: 'Platinum Sponsor',
            title: 'Intello',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor OneTrust',
        id: 7,
        src: onetrust,
        modal: {
            level: 'Platinum Sponsor',
            title: 'One Trust',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Onfido',
        id: 8,
        src: onfido,
        modal: {
            level: 'Platinum Sponsor',
            title: 'Onfido',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Printer Logic',
        id: 9,
        src: printerlogic,
        modal: {
            level: 'Platinum Sponsor',
            title: 'Printer Logic',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor ProofPoint',
        id: 10,
        src: proofpoint,
        modal: {
            level: 'Platinum Sponsor',
            title: 'Proof Point',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor RingCentral',
        id: 11,
        src: ringcentral,
        modal: {
            level: 'Platinum Sponsor',
            title: 'Ring Central',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor SailPoint',
        id: 12,
        src: sailpoint,
        modal: {
            level: 'Platinum Sponsor',
            title: 'Sail Point',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Slack',
        id: 13,
        src: slack,
        modal: {
            level: 'Platinum Sponsor',
            title: 'Slack',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Titanium',
        id: 14,
        src: titanium,
        modal: {
            level: 'Platinum Sponsor',
            title: 'Titanium',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Zoom',
        id: 15,
        src: zoom,
        modal: {
            level: 'Platinum Sponsor',
            title: 'Zoom',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Zylo',
        id: 16,
        src: zylo,
        modal: {
            level: 'Platinum Sponsor',
            title: 'Zylo',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    // Next 17
    {
        alt: 'Okta sponsor akamai',
        id: 17,
        src: akamai,
        modal: {
            level: 'Gold Sponsor',
            title: 'Akamai',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Aquera',
        id: 18,
        src: aquera,
        modal: {
            level: 'Gold Sponsor',
            title: 'Aquera',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor BeyondTrust',
        id: 19,
        src: beyondtrust,
        modal: {
            level: 'Gold Sponsor',
            title: 'Beyond Trust',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor CloudHarmonics',
        id: 20,
        src: cloudharmonics,
        modal: {
            level: 'Gold Sponsor',
            title: 'Cloud Harmonics',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Code42',
        id: 21,
        src: code42,
        modal: {
            level: 'Gold Sponsor',
            title: 'Code 42',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor DataWiza',
        id: 22,
        src: datawize,
        modal: {
            level: 'Gold Sponsor',
            title: 'Data Wiza',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Exabeam',
        id: 23,
        src: exabeam,
        modal: {
            level: 'Gold Sponsor',
            title: 'ExaBeam',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Hypr',
        id: 24,
        src: hypr,
        modal: {
            level: 'Gold Sponsor',
            title: 'Hypr',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor IDMWorks',
        id: 25,
        src: idmworks,
        modal: {
            level: 'Gold Sponsor',
            title: 'IDM Works',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Jumio',
        id: 26,
        src: jumio,
        modal: {
            level: 'Gold Sponsor',
            title: 'Jumio',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Optiv',
        id: 27,
        src: optiv,
        modal: {
            level: 'Gold Sponsor',
            title: 'Optive',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor PWC',
        id: 28,
        src: pwc,
        modal: {
            level: 'Gold Sponsor',
            title: 'PWC',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor RadientLogic',
        id: 29,
        src: radientlogic,
        modal: {
            level: 'Gold Sponsor',
            title: 'Radient Logic',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Remediant',
        id: 30,
        src: remediant,
        modal: {
            level: 'Gold Sponsor',
            title: 'Remediant',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Secret Double Octopus',
        id: 31,
        src: secretdouble,
        modal: {
            level: 'Gold Sponsor',
            title: 'Secret Double Octopus',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Secure IT Source',
        id: 32,
        src: secureitsource,
        modal: {
            level: 'Gold Sponsor',
            title: 'Secure IT Source',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Privaci',
        id: 33,
        src: privaci,
        modal: {
            level: 'Gold Sponsor',
            title: 'Privaci',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Ask Spoke',
        id: 34,
        src: askspoke,
        modal: {
            level: 'Gold Sponsor',
            title: 'Ask Spoke',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Stack Overflow',
        id: 35,
        src: stackoverflow,
        modal: {
            level: 'Gold Sponsor',
            title: 'Stack Overflow',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Survey Monkey',
        id: 36,
        src: surveymonkey,
        modal: {
            level: 'Gold Sponsor',
            title: 'Survey Monkey',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },
    {
        alt: 'Okta sponsor Yubico',
        id: 37,
        src: yubico,
        modal: {
            level: 'Gold Sponsor',
            title: 'Yubico',
            body: 'America online bucket hats marky mark ok simpson. The phantom menace cutoff jeans the matrix trucks. Mood rings chandler bing pulp fiction game boy color backstreet boys, troll dolls street fighter ii I don’t want no scrubs cory matthews puff daddy bike caps. Kicks pizza bagels steve urkel madonna, seattle supersonics bleached hair gettin’ jiggy wit it portable cd players accent braids.',
        }
    },

]

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

