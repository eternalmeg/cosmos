import {html, render} from "../lib.js";

export const page3Template = () => html`
    <div class="blog blog-page mt-125">
        <div class="container">
            <div class="section-header">
                <p>Cosmos Shipping AD was established as a company offering ship brokerage and agency services. Over the years, the company has developed to become one of the most reputable private Bulgarian companies in the field of maritime cargo transportation. The various activities developed by the company over the years include ship management, chartering and brokerage, crew provisioning, technical management and supply, agency services, bunkering, dredging activities, and hydraulic construction.</p>
                <h2>Some of our projects</h2>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="blog-item">
                        <div class="blog-img">
                            <img src="../../img/test1.png" alt="Blog">
                        </div>
                        <div class="blog-content">
                            <h2 class="blog-title">Construction of the Fishing Port "St. Nicholas" – Town of Chernomorets, Burgas Province</h2>
                            <div class="blog-meta">
                                <i class="fa fa-list-alt"></i>
                                <a href="">Construction of fishing ports</a>
                                <i class="fa fa-calendar-alt"></i>
                                <p>01-Aug-2015</p>
                            </div>
                            <div class="blog-text">
                                <p id="text-1">
                                    Since 2013, Cosmos Shipping AD has been a member of the CENTRAL PROFESSIONAL REGISTER OF CONSTRUCTORS under the BULGARIAN CONSTRUCTION CHAMBER and carries out constructions in the FOURTH GROUP from the first to the fifth category, according to Art. 5, para. 4 of the PRVVCPS, Certificate No. IV - TV 009327, with a valid ticket until 30.09.2021.
                                    The construction of the "St. Nicholas" port in the town of Chernomorets was made possible by the implementation of the project "Investments in an existing fishing port in the town of Chernomorets" of the municipality of Sozopol, financed by the Operational Programme "Development of the Fisheries Sector". The project value
                                    The project value is EUR 5,222,000 excluding VAT, and its implementation was assigned to the Consortium "Chernomorets Engineering" DZZD - Varna, uniting the companies "Cosmos Shipping" AD, "Inflo-Danubis Agency" CP, Ukraine, and "Planex" Ltd.
                                    The contract for the implementation of the project was signed in July 2013, with the actual construction of the fishing port beginning at the end of 2014, and the deadline for its completion was August 2015.
                                    The renovated fishing port "St. Nicholas" features a new enclosed breakwater with a length of 285m, a pier for fishing boats with a length of 370m, a pier for fishing vessels with a length of 125m, floating piers for fishing boats of the "pontoon" and "breakwater" type, installation of floating navigation equipment, a lighthouse, a fish market building with an area of 528 sq.m., construction of all accompanying installations, landscaping of the adjacent area. The construction was put into operation by DNSK with a permit for use No. ST - 05-2506/23.12.2015. The fishing port in Chernomorets has sufficient capacity for the port facilities, as well as 110 berths for the fishing boats of the residents of the resort town.
                                    Suitable conditions have been created for secure berths for mooring and technical maintenance of vessels, unloading of catches, provision of ice production, storage of catches, quality control, places for holding first-sale auctions, suitable sanitary areas, organization of transport, and more. The main activity of the port is the so-called first sale of fish, which is a guarantee of the quality of the caught fresh fish.
                                    The processing and storage process fully complies with modern European requirements. This will provide new opportunities for about 700 fishermen from Chernomorets and Sozopol, who are actively engaged in commercial fishing and generate a catch of 362 tons of fresh fish per year, while the entire municipality generates 758 tons per year. With the commissioning of the fish market, 12 jobs have been created.
                                </p>
                                <button class="btn read-more" data-text-id="text-1">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Other blog items... -->
                <div class="col-md-6">
                    <div class="blog-item">
                        <div class="blog-img">
                            <img src="../../img/test3.png" alt="Blog">
                        </div>
                        <div class="blog-content">
                            <h2 class="blog-title">Dredging Works – River Danube – 2020 - 2023</h2>
                            <div class="blog-meta">
                                <i class="fa fa-list-alt"></i>
                                <a href="">Dredging</a>
                                <i class="fa fa-calendar-alt"></i>
                                <p>June-2020 - on progress</p>
                            </div>
                            <div class="blog-text">
                                <p id="text-3">
                                    Project: River Danube Fairway from km 610 to km 374.100
                                    Dredged Volumes: 250,000 m³
                                    Execution Period: June 2020 – Present
                                    Dredged Material: Silt and sand
                                    Subject of the Contract: Performing routine dredging in the critical section to restore design depths along the fairway
                                    Equipment Used: 2 self-propelled suction dredgers with hopper capacities of 3,000 m³ and 525 m³
                                    Disposal Method: Direct disposal at the designated depot through hydraulic transport
                                    Client: Ministry of Transport, Information Technology and Communications (MTITC) and National Agency for the Control of Public Works (IAPPD)
                                    Contract Status: Contractor
                                </p>
                                <button class="btn read-more" data-text-id="text-3">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
             

            </div>
            <div class="row">
                <div class="col-12">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
`;


