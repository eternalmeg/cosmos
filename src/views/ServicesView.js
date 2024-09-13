import {html, page, render} from "../lib.js";

const servicesTemplate = () => html `
    <div class="service mt-125">
        <div class="container">
            <div class="section-header">
              
                <h2>Our Services</h2>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <img src="../../img/icon-1.png" alt="Icon">
                        <h3>Ship Management</h3>
                        <p>
                           
                        </p>
                        <a href="/services/ShipManagement">Read More</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <img src="../../img/icon-2.png" alt="Icon">
                        <h3>Operations</h3>
                        <p>
                        </p>
                        <a href="/services/operations">Read More</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <img src="../../img/icon-3.png" alt="Icon">
                        <h3>Chartering</h3>
                        <p>
                        </p>
                        <a href="">Read More</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <img src="../../img/icon-4.png" alt="Icon">
                        <h3>Technical</h3>
                        <p>
                        </p>
                        <a href="">Read More</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div >
                        
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <img src="../../img/icon-5.png" alt="Icon">
                        <h3>Manning</h3>
                        <p>
                        </p>
                        <a href="">Read More</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <img src="../../img/icon-6.png" alt="Icon">
                        <h3>Agency</h3>
                        <p>
                        </p>
                        <a href="">Read More</a>
                    </div>
            </div>
        </div>
    </div>
`;

export function serviceView () {
    render(servicesTemplate());
}