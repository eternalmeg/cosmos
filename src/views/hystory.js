import {html,page, render} from "../lib.js";

const historyTemplate = () =>html`
    <div class="single mt-125">
        <div class="container">
            <div class="section-header">
                <p></p>
                <h2>COMPANY HISTORY IN BRIEF</h2>
            </div>
            <div class="row">
                <div class="col-12">
                    <img class="top-image" src="../../img/flag.png" alt="Image">
                    <h3></h3>
                    <h4>The top management of COSMOS SHIPPING AD demonstrates its leadership and commitment to the
                        effectiveness of the IMS (Integrated Management System) by establishing and documenting the
                        current policy, which contains the company's main objectives, guidelines, and obligations.</h4>
                    <h5></h5>

                    <p>

                    </p>
                    <ul class="ul-group">
                        <li>1993 - Cosmos Shipping was established in Varna, Bulgaria as a private sole proprietorship
                        </li>
                        <li>1994 - Transformation into a limited company</li>
                        <li>1996 - First ship management contract</li>
                        <li>1996 - Start of Bunkering services</li>
                        <li>1996 - Start of Dredging projects</li>
                        <li>1997 - Cosmos Shipping became Member of BIMCO</li>
                        <li>1998 - Start of manning services</li>
                        <li>1998 - ISO certification of the Quality Management System</li>
                        <li>2000 - Member of International Bunker Industry Association</li>
                        <li>2000 - Acquiring the first own sea-going vessel</li>
                        <li>2002 - Registered as a joint stock company</li>
                        <li>2004 - Moving into newly built own office building</li>
                        <li>2006 - Separation of the river activities - establishment of Cosmos Energy Ltd.</li>
                        <li>2007 – Acquiring of two 25 000 dwt vessels on full management</li>
                        <li>2010 - Separation of manning and agency services - establishment of Cosmos Agency Ltd.</li>
                        <li>2011 - Start of Logistics company Cosmos Logistics Ltd.</li>
                        <li>2012 - Start of Cosmos Finance Ltd.</li>
                        <li>2013 - Start of a maritime training center Marstar Ltd.</li>
                        <li>2014 – 2015 – Dredging works on Channel 1 and Channel 2, Varna West port</li>
                        <li>2014 – 2015 – Building of a fishery port in Chernomorets, Sozopol municipality</li>
                        <li>2016 – Purchase of bunker vessel m/t Galaxy Eco and conclusion of stand-by service contract
                            with EMSA
                        </li>
                        <li>2017 – Pre-fitting works on board m/t Galaxy Eco to be classed as oil spill response
                            vessel
                        </li>
                        <li>2017 – Start of a ship supply and agency company Sea Land Group Ltd.</li>
                        <li>2018 – Establishing a construction and engineering company Morstroy Ltd., purchasing of a
                            100 t floating crane ANTEY and a self-propelled hopper barge SH-81
                        </li>
                        <li>2018 – Signing a six-year maintenance of the river Danube fairway with the Bulgarian
                            Ministry of Transport and APPD
                        </li>
                        <li>2019 – Increasing the capacity of m/t Galaxy Eco with a dispersant system</li>
                        <li>2020 – Increasing the monitoring capacity of m/t Galaxy Eco with done (RPAS service)</li>
                        <li>2020 – Delivery and installation of 4 concrete pontoons and 31 electric winches to Varna
                            Municipality for the fishery port Asparuhovo, Varna
                        </li>
                        <li>2020 – Repair of Sozopol fishery port – Terminal 1</li>
                    </ul>

                    <h4>The Cosmos Group of companies has 7 offices in Bulgaria and is working actively in the following
                        fields:</h4>

                    <ul class="ul-group">
                        <li>Ship Management, Operations and Chartering</li>
                        <li>Ship Agency and Ship supply</li>
                        <li>Technical Management and Ship Repair</li>
                        <li>Manning and crew management</li>
                        <li>Dredging and underwater construction</li>
                        <li>Bunkering Services</li>
                        <li>Fuel Storage</li>
                        <li>Logistics</li>
                        <li>Foreign Trade</li>
                        <li>Seafarers’ Training</li>
                        <li>Travel agency</li>
                        <li> Investments</li>
                    </ul>

                    <h4>Ship Management & Chartering</h4>
                    <p>
                        Moving on from pure ship brokerage the company started acting as manager, time charterer and
                        operator of coastal size vessels of 1 000-5 000 dwt trading mainly in the Black and
                        Mediterranean Sea, West Africa, Europe, Baltic and Far East. Later, two own vessels of this size
                        were purchased and successfully managed and operated.
                    </p>
                    <p>
                        Since 2003 the company started chartering in handy size bulk carriers in the range of
                        20,000-45,000 dwt trading on a worldwide basis. In 2007 Cosmos Shipping acquired two vessels of
                        25,000 dwt, providing full commercial management, crewing, ISM and technical management.
                        Currently the company is acting as ship manager of its own bunker vessel Galaxy Eco and is
                        focused on expanding its fleet in the dry bulk sector.
                    </p>
                    <p>
                        Full range of ship management services is provided, including commercial operation, ISM and
                        technical management, crewing.
                    </p>
                    <p>
                        The importance of an effective quality and safety management system is recognized and the
                        company is ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, MLC 2006, ISM and ISPS compliant.
                    </p>
                    <p>
                        The success of our company is due to the highly qualified staff of specialists with a
                        long-standing experience in the sphere of ship management.
                    </p>
                    <h4>Ship Agency </h4>
                    <p>
                        The company is acting as Agent on behalf of Ship owners and operators, providing full scope of
                        agency services 24/7. Range of vessel and cargo services includes:
                    </p>
                    <ul class="ul-group">
                        <li>Prompt vessel clearance</li>
                        <li>Customs formalities for cargo operations</li>
                        <li>Arranging independent cargo documents</li>
                        <li>Renewal of vessel’s certificates</li>
                        <li>Issuance of cargo documents</li>
                        <li>Bunker & fresh water supply</li>
                        <li>Medical attendance to crew members</li>
                        <li>Arranging repairs through reputable marine workshops</li>
                        <li>Protecting agency services, incl. legal assistance.</li>
                    </ul>
                    <p>
                        Guided by the general principles of Quality Management System of the company, the Agency
                        department works in full compliance with clients’ requirements.
                    </p>

                    <h4>Foreign Trade and Investments</h4>
                    <p>
                        Foreign trade activity dates from the establishment of the company in 1993 and has been focused
                        on dealing with raw materials, metals, wood, chemicals and energy products.
                    </p>
                    <p>
                        We are ready to offer all conveniences for our clients around the world, including
                        transportation and logistics arrangements, marketing assistance and information services.
                    </p>
                    <p>
                        Main directions of foreign trade: Ukraine, Russia, Georgia, Romania, Bulgaria, Turkey, Greece,
                        Egypt, Albania, Italy, Spain, Algeria, UAE, Israel.
                    </p>

                    <h4>Dredging and Construction Works</h4>
                    <p>
                        Cosmos Shipping is engaged in dredging works since 1996. The company is experienced in operating
                        trailing suction hopper dredgers, floating cranes and hopper barges and can provide on contract
                        terms different types of auxiliary equipment such as cutter suction dredgers, backhoes,
                        platforms and tugboats.
                    </p>
                    <p>
                        The company acted as contractor or sub-contractor in the following projects:
                    </p>
                    <ul class="ul-group">
                        <li>Sep 1996 – May 1997: Varna Dredging Project – of EC Phare Programme for maintenance dredging
                            of Channel 1 Varna port – dredged volumes 2,008,000 cub. m.
                        </li>
                        <li>Feb – Nov 2001: Maintenance Dredging of Channel 2, port Varn, buoys 223 – 235 area – dredged
                            volumes 1,150,000 cub. m.
                        </li>
                        <li>Jun – Aug 2001: Maintenance Dredging of Channel 2 – port Varna– dredged volumes 610,000 cub.
                            m.
                        </li>
                        <li>Apr – May 2001: Maintenance Dredging of port Balchik – dredged volumes 280,000 cub. m.</li>
                        <li>Jul 2002 – Feb 2004: Construction of New Hayovel port – Ashdod, Israel – dredging approach
                            channel and refilling new quay area – dredged volumes 1,300,000 cub. m.
                        </li>
                        <li>Aug – Oct 2004: Port of Bourgas Expansion Project – dredging detour access channel – dredged
                            volumes 530,000 cub. m.
                        </li>
                        <li>Dec 2014 – March 2015: Maintenance Dredging of Channel 1 and Channel 2, port Varna – dredged
                            volumes 200,000 cub. m.
                        </li>
                        <li>March – May 2015: Maintenance Dredging of Channel 1 and Channel 2, port Varna West – dredged
                            volumes 190,000 cub. m.
                        </li>
                        <li>Dec 2014 – Dec 2015 – Chernomorets fishery port, Sozopol region – construction of 230 m
                            breakwater, pier for mooring of fishing boats, floating breakwater, fish market.
                        </li>
                        <li>May – Aug 2018 – maintenance dredging of the Bulgarian fairway from 610 rkm till 374,100 rkm
                            on the river Danube – dredged volumes over 250,000 cub. m.
                        </li>
                        <li>July – Oct 2019 – maintenance dredging of the Bulgarian fairway from 610 rkm till 374,100
                            rkm on the river Danube– dredged volumes over 300,000 cub. m.
                        </li>
                        <li>May – Sept 2020 - maintenance dredging of the Bulgarian fairway from 610 rkm till 374,100
                            rkm on the river
                        </li>
                        <li>Danube– dredged volumes over 300,000 cub. m.</li>
                        <li>Sept 2020 - Delivery and installation of 4 concrete pontoons and 31 electric winches to
                            Varna Municipality for the fishery port Asparuhovo, Varna
                        </li>
                        <li>Dec 2020 – Repair of Sozopol fishery port – Terminal 1</li>
                        <li>Jan 2021 – Maintenance dredging works Key # 1 at MTG Dolphin Ltd., Varna</li>
                    </ul>
                    <p>
                        We also provide the following services:
                    </p>
                    <ul class="ul-group">
                        <li>Preparing documentation and verification with competent authorities – dredging plans and projects</li>
                        <li>Underwater rock blasting</li>
                        <li>Sea bottom profile measurements </li>
                        <li>Hydrographic surveys with own equipment, ecological and soil analysis</li>
                        <li>Projects for new depots for disposal of dredged materials</li>
                    </ul>

                    
                    <h4>GALAXY POWER LTD.</h4>
                    <p>
                        GALAXY POWER is experienced in Danube river transportation and carries out its main activities in ship bunkering, ship agency and management of river tanker fleet. The company is a successor of the bunker supply provided by COSMOS ENERGY and COSMOS SHIPPING.
                    </p>
                    
                    <h5>Inland Shipping</h5>
                    <p>The Technical department of the company is responsible for the safe and effective technical operation of owned and managed ships, ensuring that all vessels are in full compliance with the requirements of the Flag State Administrations, Classification Societies and major oil companies’ standards.</p>
                    <p>Highly educated experienced Superintendents are involved with the technical supervision, maintenance, attendance of intermediate and class repairs. </p>
                    <p>Other technical management ensures timely supply of spare parts and consumables required by the vessels and the effective control of costs.</p>
                    <h5>Bunkering Port Rousse</h5>
                    <p>GALAXY POWER is providing fuel supply to river vessels with gasoil (10ppm sulphur content) and lubricants in all  Bulgarian Danube ports.</p>
                    <p>Bunkering services had been developed by COSMOS SHIPPING starring in July 1996, at the port of SOMOVIT (km.608 Danube).</p>
                    <p>In July 2000 the company successfully commenced its bunkering activity in the port of ROUSSE (km. 494 Danube) and since June 2004 the company offers bunkering services at port VIDIN (km. 790 Danube) as well.</p>
                    <p>During the years the company has proved to be a reliable partner and gained its good reputation with more than 40 companies owning or operating Danube River fleets.</p>
                    <p>Presently the company provides bunker services with bunker vessel m/t “ARDA” and also operates its owned Tax warehouse in Rouse. </p>
                    <h5>Bunkering Port Enns</h5>
                    <p>The first foreign port in which the company developed its bunkering activity is the Austrian port of ENNS (km. 2112 Danube). The bunker operations there are performed by a subsidiary company GALAXY POWER GMBH.</p>
                    <p>The bunker station in port ENNS includes the following facilities: a bunker storage terminal and a bunker vessel m/t “ORION”. The bunker vessel “ORION” (DWT 200mt) performs bunker operations at the roads during the passage of vessels in the area between km.2101 – km.2118. Vessels’ supply with lubricants and other consumables is available upon request.</p>
                    <p>In 2015 the company opened a second bunkering spot in Austria  in port LINZ (km.2128 Danube). The bunker operations are performed by an owned bunker vessel “BETA” (DWT 144mt) which successfully meets the cleint’s requirement for bunker supply between km.2124 – km.2139 Danube.</p>
                    
                    <h4>Ship Agency</h4>
                    <p>
                        The company’s agency network had been created in 1993. Currently we have agency offices in all Bulgarian Danube River ports – SILISTRA, TOUTRAKAN, ROUSSE, SVISHTOV, SOMOVIT, KOZLODUY, ORYAHOVO, LOM and VIDIN.
                    </p>
                    <p>
                        The range of agency services includes:
                    </p>
                    <ul class="ul-group">
                        <li>prompt vessel clearance;</li>
                        <li>arranging customs formalities;</li>
                        <li>arranging independent cargo surveys;</li>
                        <li>renewal of vessel’s certificates;</li>
                        <li>issuance of cargo documents;</li>
                        <li>bunkers & fresh water supply through shore facilities;</li>
                        <li>medical attendance for crew members;</li>
                        <li>arranging repairs through reputable repair companies;</li>
                        <li>protecting agency services, incl. legal assistance;</li>
                        <li>other services required from Owner/Master.</li>
                    </ul>
                    <p>
                        The company also offers maneuvering and barge services in the port of ROUSSE (Bulgaria) and port of GIUGIU (Romania). Our maneuvering fleet consists of m/v “EUROPA” (800hp) and m/v “MADARA” (1850hp).
                    </p>
                    
                    <h4>COSMOS AGENCY LTD</h4>
                    <h5>Manning</h5>
                    <p>
                        Cosmos Agency was established in 2010 as a subsidiary of Cosmos Shipping whose Manning department has been providing recruitment services since 1998. We select and recruit competent and experienced Bulgarian seafarers as per STCW, ISM, ISPS Code and MLC 2006 requirements to man the various fleet vessels of our Principals and the company’s own fleet. As manning agent we ensure solutions in screening, training, selection, attendance of medical fitness, sign on and off formalities, obtaining visas and flying the crew. We maintain a database of over 10000 applicants, follow their rejoining availability, update their documents, experience and contacts aimed to process best our Principals' requests.
                    </p>
                    <p>
                        Cosmos Agency focuses on our Principals' vision to be among leading and competitive companies on the global shipping market. Our employees profile identifies with their company goals and values. We are proud to be a partner of ZIM Integrated Shipping Services Ltd., XT Management Ltd., Wilhelmsen Ship Management Inc, A-Rosa Cruises, Viking Cruises, River Advice, LUEFTNER Cruises, V. SHIPS Leisure SAM, LIGABUE Catering Services SA, LIVERAS Yachts, CMA CGM, Columbia Ship Management, Uniteam Marine, INTERORIEN, NORD Reederei, etc. As manning agent we recruit qualified officers, ratings and service personnel for their merchant and passenger fleets. The company policy is to implement strict business and ethical relations with employees and business partners.
                        Cosmos Agency quality management system has been certified for compliance with ISO 9001:2015 Standard by Bureau Veritas in 2011. The company was the first Bulgarian manning agency certified in accordance with MLC 2006 by BV in November 2011.
                    </p>
                    <p>
                        We truly believe in SELECTING THE RIGHT PEOPLE FOR THE RIGHT SHIP.
                    </p>
                    <h4>MARSTAR LTD</h4>
                    <h5>Maritime Training Center  </h5>
                    <ul class="ul-group">
                        <li>In 2013 Cosmos Agency Ltd. opened its own training center specialized in professional training and language courses for seafarers. </li>
                        <li>MARSTAR is one of the few maritime training centers in Bulgaria for professional training of seafarers for ocean going and river fleets.</li>
                        <li>MARSTAR training center is licensed under No 2013121040 by the National Agency for professional training and education and by the Bulgarian Maritime Administration.</li>
                        <li>MARSTAR has its own training facility at 26-28, Dunav str., Varna with all necessary equipment and highly qualified instructors trained to provide high standard IMO and BMA approved courses.</li>
                        <li>The training center provides training and conducting MARLINS Test and CES Test as well.</li>
                        <li>MARSTAR offers tailor made training based on Shipmanagers’ requirements upon their request.</li>
                        <li>The following STCW/78 training courses are provided by MARSTAR:</li>
                    </ul>
                    <ol class="ol-group">
                        <li>Ship security officer;</li>
                        <li>Specialized training for personnel on passenger ships;</li>
                        <li>Marine Environmental Awareness;</li>
                        <li>Oil tanker operations course; </li>
                        <li>Proficiency for Seafarers with designated Security duties;</li>
                        <li>Proficiency in Security Awareness;</li>
                        <li>Ship's Cook course;</li>
                        <li>HAZMAT course;</li>
                        <li>Master of a floating technical equipment;</li>
                    </ol>
                    <p></p>
                    <h4>COSMOS LOGISTICS LTD</h4>
                    <h5>Logistics</h5>
                    <p>Cosmos Logistics was found in 2011 as part of Cosmos Group. With its headquarters located in Varna and branch offices in Burgas and Sofia the company offers a full variety of logistic services supported by a team of professionals experienced in the field of forwarding and transport.</p>
                    <p>We create and develop networks of sub-contractors, long-term relations with our partners based on mutual confidence, and transparency. The main activity of our company is offering international road, FCL/LCL, ocean, air transport and freight forwarding, warehousing, customs and logistic services.</p>
                    <p>Our mission:</p>
                    <ul class="ul-group">
                        <li>To provide innovative, practical and high-quality logistics services tailored to our customers needs;</li>
                        <li>To lead our business in a professional manner, relying on honest and open communication;</li>
                        <li>To operate at maximum efficiency so that we can provide these services at a competitive level;</li>
                        <li>To improve the quality of our services in our everyday work.</li>
                    </ul>
                    <p>
                        Our goals are:
                    </p>
                    <ul class="ul-group">
                        <li>To supply our clients with individual, tailor-made transport solutions;</li>
                        <li>To provide transport service which adds value and creates optimal conditions for development of our partners’ business.</li>
                    </ul>
                    
                    <h4>COSMOS FINANCE LTD</h4>
                    <h5>Financial Services</h5>
                    <p>In 2012 the accounting department of Cosmos Shipping AD was separated in a newly established company named Cosmos Finance Ltd.</p>
                    <p>The new company continued to provide complex accounting, tax and financial advising to all companies in Cosmos Group and also started some new activities as VAT reclaim agency, transactions with financial instruments, investments in precious metals and market traded goods, accounting services and consultancy. Cosmos Finance has extensive experience in providing agency services for VAT refunding to foreign legal entities and individuals since 2011. Cosmos Finance Ltd is registered as a VAT reclaim agent for the tax refund on VAT to non-taxable natural persons residing outside the territory of the European Community.</p>
                    <p>Ordinance MF1048 dd 23.08.2010:</p>
                    <p>You have the right to reimburse the VAT charged and included in the invoices issued to your company as of 23.08.2010. Israel, Iceland, Canada, Republic of Korea, Moldova, Macedonia, Norway, Serbia, Ukraine, Switzerland and Croatia have been included in the list of countries which have the right to refund VAT, effectively paid in transactions with Bulgarian partners in Bulgaria.</p>
                    
                    <h4>COSMOS TRAVEL LTD</h4>
                    <h5>Travel Agency</h5>
                    <p>
                        Cosmos Travel is a licensed tour operator and travel agent with license № 05200. The company has offices in Varna and Sofia.
                    </p>
                    <p>
                        Cosmos Travel Ltd. offers full range of tourist services as follows: 
                    </p>
                    <ul class="ul-group">
                        <li>Airline tickets</li>
                        <li>Hotel reservations worldwide</li>
                        <li>Cruises</li>
                        <li>Tours - bus and air</li>
                        <li>Holidays</li>
                        <li>Car rentals</li>
                        <li> Insurance "Assistance when traveling abroad" and "cancellation"
                            Cosmos Travel is also developing its own products - group tours to the following destinations: Australia, New Zealand, Vietnam, Cambodia, Argentina, Brazil, Bali, China and Japan.
                        </li>
                    </ul>
                    <h4>SEA LAND GROUP LTD</h4>
                    <h5>Ship Chandler </h5>
                    <p>
                        The company supplies all kinds of cabin, deck and engine stores as well as wide range of fresh, frozen and dry provisions to cater to the diverse preferences and needs of our clients remaining fully compliant with the high standards of today’s food safety standards. The company major objective is to provide our customers with the fastest service possible, at the most competitive price available.Our focus is on QUALITY, SERVICE and INNOVATION.
                    </p>
                    <h5>Ship Agency</h5>
                    <p>
                        The company is acting as Agent on behalf of Ship owners and operators, providing full scope of agency services 24/7. The range of agency service provided includes:
                    </p>
                    <ul class="ul-group">
                        <li>Prompt vessel clearance </li>
                        <li>Customs formalities for cargo operations</li>
                        <li>Arranging independent cargo surveys</li>
                        <li>Renewal of vessel’s certificates </li>
                        <li>Issuance of cargo documents</li>
                        <li>Bunkers & fresh water supply</li>
                        <li>Medical attendance to crew members </li>
                        <li>Arranging repairs at reputable ship repair yards and workshops</li>
                        <li>Protecting agency services including legal assistance</li>
                    </ul>
                    <p>
                        Guided by the general principles of the Quality Management System of the company, Sea Land Group team works in full compliance with clients’ requirements.
                    </p>
                </div>
            </div>
        </div>
    </div>
`;

export function historyView() {
    render(historyTemplate())
}