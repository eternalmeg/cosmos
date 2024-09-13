import {html, page, render} from "../lib.js";


const aboutTemplate = () => html `
    <div class="about mt-125">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-md-6">
                    <div class="section-header">
                       
                        <h2>30 Years Experience</h2>
                    </div>
                    <div class="about-text">
                        <p>
                            COSMOS SHIPPING was established in 1993 as a sole proprietorship offering ship brokerage and agency services. It has been growing ever since then to become now one of the most reputable private Bulgarian shipping companies active in the sphere of ship management, operation and chartering, incorporating professionals in the shipping business keen to prove their abilities and professional skills. Focus on modern technology and customer satisfaction is the major drive for the company development.
                        </p>
                        <a class="btn" href="/history">Learn More</a>
                    </div>
                </div>
             
                <div class="col-md-6">
                    <h1>Membership</h1>
                    <div class="about-membership">
                        <a href="https://www.bimco.org/" >
                            <img src="../../img/bimco.jpg" alt="Image">
                            Baltic and International Maritime Council
                        </a>
                        <a href="https://bcs.bg/en/">
                            <img src="../../img/BCM.png" alt="Image">
                            Bulgarian Chamber of Shipping
                        </a>
                        <a href="https://www.basba.eu/">
                            <img src="../../img/basba.jpg" alt="Image">
                            Bulgarian Association of Ship Brokers and Agents
                        </a>
                        <a href="https://bsa-bg.com/">
                            <img src="../../img/BSA.jpg" alt="Image">
                            Bulgarian Association of Shipowners
                        </a>
                    </div>
                </div>
                <div class="col-md-6">
                    <h1>Certificates</h1>
                    <div class="about-membership">
                        <a href="https://cosmosltd.com/css/images/cert_2021/CS_2021_BG121189EU_14k.pdf" >
                            <img src="../../img/2021_9001.png" alt="Image">
                            ISO 14001:2015
                            Ship management, operation, chartering and brokerage,
                            hydraulic engineering and dredging works.
                        </a>
                        <a href="https://cosmosltd.com/css/images/cert_2021/CS_2021_BG121189QU_9k.pdf">
                            <img src="../../img/2021_14001.png" alt="Image">
                            ISO 9001:2015
                            Ship management, operation, chartering and brokerage,
                            hydraulic engineering and dredging works.
                        </a>
                        <a href="https://cosmosltd.com/css/images/cert_2021/CS_2021_CZE180013_OHSAS.pdf">
                            <img src="../../img/2021_OHSAS.png" alt="Image">
                            OHSAS 18001:2007
                            Ship management, operation, chartering and brokerage,
                            hydraulic engineering and dredging works.
                        </a>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

export function aboutView() {
    render(aboutTemplate())
}