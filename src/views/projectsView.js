import { html, render } from "../lib.js";

const projects = [
    {
        id: 1,
        img: "../../img/test1.png",
        title: 'Construction of the Fishing Port "St. Nicholas" – Town of Chernomorets, Burgas Province',
        meta: 'Construction of fishing ports',
        date: '01-Aug-2015',
        description: ' Since 2013, Cosmos Shipping AD has been a member of the CENTRAL PROFESSIONAL REGISTER OF CONSTRUCTORS under the BULGARIAN CONSTRUCTION CHAMBER and carries out constructions in the FOURTH GROUP from the first to the fifth category, according to Art. 5, para. 4 of the PRVVCPS, Certificate No. IV - TV 009327, with a valid ticket until 30.09.2021.\n                                    The construction of the "St. Nicholas" port in the town of Chernomorets was made possible by the implementation of the project "Investments in an existing fishing port in the town of Chernomorets" of the municipality of Sozopol, financed by the Operational Programme "Development of the Fisheries Sector". The project value\n                                    The project value is EUR 5,222,000 excluding VAT, and its implementation was assigned to the Consortium "Chernomorets Engineering" DZZD - Varna, uniting the companies "Cosmos Shipping" AD, "Inflo-Danubis Agency" CP, Ukraine, and "Planex" Ltd.\n                                    The contract for the implementation of the project was signed in July 2013, with the actual construction of the fishing port beginning at the end of 2014, and the deadline for its completion was August 2015.\n                                    The renovated fishing port "St. Nicholas" features a new enclosed breakwater with a length of 285m, a pier for fishing boats with a length of 370m, a pier for fishing vessels with a length of 125m, floating piers for fishing boats of the "pontoon" and "breakwater" type, installation of floating navigation equipment, a lighthouse, a fish market building with an area of 528 sq.m., construction of all accompanying installations, landscaping of the adjacent area. The construction was put into operation by DNSK with a permit for use No. ST - 05-2506/23.12.2015. The fishing port in Chernomorets has sufficient capacity for the port facilities, as well as 110 berths for the fishing boats of the residents of the resort town.\n                                    Suitable conditions have been created for secure berths for mooring and technical maintenance of vessels, unloading of catches, provision of ice production, storage of catches, quality control, places for holding first-sale auctions, suitable sanitary areas, organization of transport, and more. The main activity of the port is the so-called first sale of fish, which is a guarantee of the quality of the caught fresh fish.\n                                    The processing and storage process fully complies with modern European requirements. This will provide new opportunities for about 700 fishermen from Chernomorets and Sozopol, who are actively engaged in commercial fishing and generate a catch of 362 tons of fresh fish per year, while the entire municipality generates 758 tons per year. With the commissioning of the fish market, 12 jobs have been created.',
    },
    {
        id: 2,
        img: "../../img/test2.png",
        title: 'Supply of Floating Pontoons and Electric Winches for the Fishing Port "Karantinata," Asparuhovo District, Varna',
        meta: 'Construction of fishing ports',
        date: 'Sep-2020',
        description: ' Project: Fishing Port "Karantinata"\n\nSubject of the Contract: PURCHASE OF EQUIPMENT in connection with the implementation of the project "Modernization and Reconstruction of the Fishing Port \'Karantinata\'," located in the area of "Karantinata," district "Asparuhovo," Varna Municipality, with three distinct positions, POSITION № 2: PURCHASE OF PONTOONS.\n\n                                    Delivery and installation of: 4 reinforced concrete floating pontoons, aluminum gangway, 16 power and water supply columns, 16 anchors – 2 tons, 31 electric winches.\n\n                                    Execution Period: January 27, 2020 – September 30, 2020.\n\n                                    Client: Varna Municipality\n\n                                    Contract Status: Contractor',
    },
    {
        id: 3,
        img: "../../img/test3.png",
        title: 'Dredging Works – River Danube – 2020 - 2023',
        meta: 'Dredging',
        date: 'June-2020',
        description: 'Project: River Danube Fairway from km 610 to km 374.100\n' +
            'Dredged Volumes: 250,000 m³\n' +
            'Execution Period: June 2020 – Present\n' +
            'Dredged Material: Silt and sand\n' +
            'Subject of the Contract: Performing routine dredging in the critical section to restore design depths along the fairway\n' +
            'Equipment Used: 2 self-propelled suction dredgers with hopper capacities of 3,000 m³ and 525 m³\n' +
            'Disposal Method: Direct disposal at the designated depot through hydraulic transport\n' +
            'Client: Ministry of Transport, Information Technology and Communications (MTITC) and National Agency for the Control of Public Works (IAPPD)\n' +
            'Contract Status: Contractor',
    },
    {
        id: 4,
        img: "../../img/test4.png",
        title: 'Dredging Works – River Danube – 2020 - 2023',
        meta: 'Dredging',
        date: 'June-2020',
        description: 'Project: River Danube Fairway from km 610 to km 374.100\n' +
            'Dredged Volumes: 250,000 m³\n' +
            'Execution Period: June 2020 – Present\n' +
            'Dredged Material: Silt and sand\n' +
            'Subject of the Contract: Performing routine dredging in the critical section to restore design depths along the fairway\n' +
            'Equipment Used: 2 self-propelled suction dredgers with hopper capacities of 3,000 m³ and 525 m³\n' +
            'Disposal Method: Direct disposal at the designated depot through hydraulic transport\n' +
            'Client: Ministry of Transport, Information Technology and Communications (MTITC) and National Agency for the Control of Public Works (IAPPD)\n' +
            'Contract Status: Contractor',
    }


];

const projectItemTemplate = (project) => html`
    <div class="col-md-6">
        <div class="blog-item">
            <div class="blog-img">
                <img src="${project.img}" alt="Blog">
            </div>
            <div class="blog-content">
                <h2 class="blog-title">${project.title}</h2>
                <div class="blog-meta">
                    <i class="fa fa-list-alt"></i>
                    <a href="">${project.meta}</a>
                    <i class="fa fa-calendar-alt"></i>
                    <p>${project.date}</p>
                </div>
                <div class="blog-text">
                    <p id="text-${project.id}" class="collapsed">
                        ${project.description}
                    </p>
                    <button class="btn read-more" data-text-id="text-${project.id}">Read More</button>
                </div>
            </div>
        </div>
    </div>
`;


const renderProjectsForPage = (page) => {
    const projectsPerPage = 2;
    const start = (page - 1) * projectsPerPage;
    const end = start + projectsPerPage;

    const projectsToRender = projects.slice(start, end);
    return html`${projectsToRender.map(projectItemTemplate)}`;
};


const projectTemplate = (page, totalPages) => html`
    <div class="blog blog-page mt-125">
        <div class="container">
            <div class="section-header">
                <h2 id="project-h2">Some of our projects</h2>

                <p>Cosmos Shipping AD was established as a company offering ship brokerage and agency services. Over the years, the company has developed to become one of the most reputable private Bulgarian companies in the field of maritime cargo transportation. The various activities developed by the company over the years include ship management, chartering and brokerage, crew provisioning, technical management and supply, agency services, bunkering, dredging activities, and hydraulic construction.</p>
               
            </div>
            <!-- Проектите ще се рендират тук -->
            <div id="wrapper" class="row">
                ${renderProjectsForPage(page)}
            </div>
            <div class="row">
                <div class="col-12">
                    <ul class="pagination justify-content-center">
                        <li class="page-item ${page === 1 ? 'disabled' : ''}">
                            <a class="page-link previous-page" href="javascript:void(0)" data-page="${page - 1}">Previous</a>
                        </li>
                        <li class="page-item ${page === 1 ? 'active' : ''}">
                            <a class="page-link" href="javascript:void(0)" data-page="1">1</a>
                        </li>
                        <li class="page-item ${page === 2 ? 'active' : ''}">
                            <a class="page-link" href="javascript:void(0)" data-page="2">2</a>
                        </li>
                        <li class="page-item ${page === 3 ? 'active' : ''}">
                            <a class="page-link" href="javascript:void(0)" data-page="3">3</a>
                        </li>
                        <li class="page-item ${page === totalPages ? 'disabled' : ''}">
                            <a class="page-link next-page" href="javascript:void(0)" data-page="${page + 1}">Next</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
`;


function renderPage(page) {
    const totalPages = Math.ceil(projects.length / 2);
    render(projectTemplate(page, totalPages), document.body);


    setupPagination(totalPages);
    document.querySelectorAll('.read-more').forEach(button => {
        button.removeEventListener('click', handleReadMoreClick);
    });
    addReadMoreFunctionality();
}
function handleReadMoreClick() {
    const textId = this.getAttribute('data-text-id');  // Вземаме идентификатора на параграфа
    const textElement = document.getElementById(textId); // Селектираме параграфа по идентификатора

    if (textElement) {
        // Промяна на класа при клик
        if (textElement.classList.contains('expanded')) {
            textElement.classList.remove('expanded');
            textElement.classList.add('collapsed');
            this.textContent = 'Read More';
        } else {
            textElement.classList.remove('collapsed');
            textElement.classList.add('expanded');
            this.textContent = 'Read Less';
        }
    }
}

// Функционалност за "Read More" бутони
function addReadMoreFunctionality() {
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', handleReadMoreClick);
    });
}



// Настройка на навигацията (pagination)
function setupPagination(totalPages) {
    document.querySelectorAll('.page-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const page = parseInt(e.target.getAttribute('data-page'));
            if (!isNaN(page) && page > 0 && page <= totalPages) {
                renderPage(page);
            }
        });
    });
}

// Стартова функция за зареждане на страницата
export function projectsView() {
    renderPage(1);  // Първоначално зареждаме страница 1
}