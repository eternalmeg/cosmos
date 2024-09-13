import {html, nothing, render} from "../lib.js";

let attachedListeners = []; // Ще съхранява всички слушатели

const contactTemplate = (isEmail) => html`
    <div class="single mt-125">
        <div class="container">
            <div class="section-header">
                
            </div>
            <div class="row">
                <div class="col-12">
                    <img class="top-image" src="../../img/contacts2.png" alt="Image">
                    <table id="gallery-table" class="table table-bordered">
                        <tbody id="contacts-table">
                            <tr>
                                <td>
                                    <h4 data-office="head" style="cursor: pointer;">Head Office</h4>
                                </td>
                                <td>
                                    <h4 data-office="chartering" style="cursor: pointer;">Chartering</h4>
                                </td>
                                <td>
                                    <h4 data-office="operations" style="cursor: pointer;">Operations</h4>
                                </td>
                                <td>
                                    <h4 data-office="accounting" style="cursor: pointer;">Accounting & Legal</h4>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4 data-office="branch" style="cursor: pointer;">Branch Offices</h4>
                                </td>
                                <td>
                                    <h4 data-office="manning" style="cursor: pointer;">Manning</h4>
                                </td>
                                <td>
                                    <h4 data-office="agency" style="cursor: pointer;">Agency</h4>
                                </td>
                                <td>
                                    <h4 data-office="technical" style="cursor: pointer;">Technical</h4>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

   
    <div id="dynamicModal" class="modal">
        <div class="modal-content">
            <span class="close-btn" id="closeModal">&times;</span>
            <h2 id="modalTitle">Title</h2>
            <p id="modalName">Name</p>
            <p id="modalAddress">Address</p>
            <p id="modalEmail">Email</p>
            <p id="modalPhone">Phone</p>
            <p id="modalPhone1">Phone1</p>
            <p id="modalPhone2">Phone1</p>
            <p id="modalField">Field</p>
            <p id="modalField1">Field1</p>
            <p id="modalField2">Field2</p>
            <a id="modalEmailLink" href="#" class="btn btn-primary">Contact via Email</a>
        </div>
    </div>
`;

export function contactsView() {

    render(contactTemplate());


    clearEventListeners();


    const modal = document.getElementById('dynamicModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalName = document.getElementById('modalName')
    const modalAddress = document.getElementById('modalAddress');
    const modalEmail = document.getElementById('modalEmail');
    const modalPhone = document.getElementById('modalPhone');
    const modalPhone1 = document.getElementById('modalPhone1');
    const modalPhone2 = document.getElementById('modalPhone2');
    const modalField = document.getElementById('modalField');
    const modalField1 = document.getElementById('modalField1');
    const modalField2 = document.getElementById('modalField2');

    const modalEmailLink = document.getElementById('modalEmailLink');
    const closeModal = document.getElementById('closeModal');

    const officeData = {
        head: {
            title: "Head Office - Cosmos Shipping",
            name: "Capt. Plamen Prodanov - CEO",
            address: "Address: 3 Petko Karavelov Str., 9000 Varna, Bulgaria",
            email: null,
            phone: "",
            phone1: "",
            phone2: "",
            field: "",
            field1: "",
            field2:""
        },
        chartering: {
            title: "Chartering",
            name: "Denitza Prodanova, CO Chartering Dpt",
            address: "Address: 3 Petko Karavelov Str., 9000 Varna, Bulgaria",
            email: "charter@cltd.eu",
            phone: "Phone: +359 52 600-828",
            phone1: "Mobile: +359 888 453-254",
            phone2: "",
            field: "",
            field1: "",
            field2:""
        },
        operations: {
            title: "Operations Department",
            name: "Valeri Valchev – Head of Dept.",
            address: "",
            email: "cosmos@cosmosltd.com",
            phone: "Phone: +359 52 601419",
            phone1: "Fax: +359 52 603698",
            phone2: "Mobile: +359 888 245951",
            field: "",
            field1: "",
            field2:""
        },
        accounting: {
            title: "Accounting Department",
            name: "Radosveta Cvetkova - Head of Dept.",
            address: "",
            email: "account@cosmosltd.com",
            phone: "Phone: +359 52 616020",
            phone1: "Fax: +359 52 616040",
            phone2: "Mobile: +359 888 475660",
            field: "",
            field1: "",
            field2:""
        },
        branch: {
            title: "Branch Offices",
            name: "Sofia",
            address: "5, Krusha Planina str,\n" +
                "Sofia 1233,\n" +
                "Bulgaria",
            email: "account@cosmosltd.com",
            phone: "Phone: +359 2 931 8813",
            phone1: "Phone/Fax: +359 2 931 8238",
            phone2: "Bourgas",
            field: "13, Aleksandar Veliki str.,\n" +
                "Bourgas 8000\n" +
                "Bulgaria",
            field1: "Phone/Fax: +359 56 843272",
            field2:""
        },
        manning: {
            title: "Manning Department",
            name: "Margarita Yaneva - Head of Dept.",
            address: "Address: 3 Petko Karavelov Str., 9000 Varna, Bulgaria",
            email: "manning@cosmosltd.com",
            phone: "Phone: +359 52 655850",
            phone1: "Phone: +359 52 609935",
            phone2: "Fax: +359 52 622268",
            field: "",
            field1: "",
            field2:""
        },
        agency: {
            title: "Agency Services",
            name: "Nikolay Mihaylov",
            address: "Address: 3 Petko Karavelov Str., 9000 Varna, Bulgaria",
            email: "agent@cosmosltd.com",
            phone: "Phone: +359 52 654510",
            phone1: "Mobile: +359 888 925262",
            phone2: "Fax: +359 52 603698",
            field: "",
            field1: "",
            field2:""
        },
        technical: {
            title: "Technical Department",
            name: "Milen Mihnev",
            address: "Address: 3 Petko Karavelov Str., 9000 Varna, Bulgaria",
            email: "mihnev@cltd.eu",
            phone: "Phone: +359 52 601419",
            phone1: "Mobile: +359 887 997 191",
            phone2: "Fax: +359 52 603698",
            field: "",
            field1: "",
            field2:""
        }
    };

    function showModal(officeKey) {
        const data = officeData[officeKey];

        if (data) {
            modalTitle.textContent = data.title;
            modalName.textContent = data.name;
            modalAddress.textContent = `${data.address}`;
            modalPhone.textContent = `${data.phone}`;
            modalPhone1.textContent = `${data.phone1}`;
            modalPhone2.textContent = data.phone2;
            modalField.textContent = data.field;
            modalField1.textContent = data.field1;
            modalField2.textContent = data.field2;
            if(data.email) {
                modalEmail.textContent = '';
                modalEmailLink.href = `mailto:${data.email}?subject=Inquiry%20from%20Website&body=Hello,%20I%20would%20like%20to%20know%20more...`
                modalEmailLink.style.display = 'inline-block';
            } else {
                modalEmail.textContent = '';
                modalEmailLink.style.display = 'none'
            }
            modal.style.display = 'block';
        }
    }


    function hideModal() {
        modal.style.display = 'none';
    }


    attachListener('h4[data-office="head"]', 'click', () => showModal('head'));
    attachListener('h4[data-office="chartering"]', 'click', () => showModal('chartering'));
    attachListener('h4[data-office="operations"]', 'click', () => showModal('operations'));
    attachListener('h4[data-office="accounting"]', 'click', () => showModal('accounting'));
    attachListener('h4[data-office="branch"]', 'click', () => showModal('branch'));
    attachListener('h4[data-office="manning"]', 'click', () => showModal('manning'));
    attachListener('h4[data-office="agency"]', 'click', () => showModal('agency'));
    attachListener('h4[data-office="technical"]', 'click', () => showModal('technical'));

    attachListener(closeModal, 'click', hideModal);

    // Затваряне на модала при клик извън съдържанието
    attachListener(window, 'click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });
}


function attachListener(selector, event, handler) {
    const element = typeof selector === 'string' ? document.querySelector(selector) : selector;

    if (element) {
        element.addEventListener(event, handler);

        attachedListeners.push({ element, event, handler });
    }
}


function clearEventListeners() {
    attachedListeners.forEach(({ element, event, handler }) => {
        element.removeEventListener(event, handler);
    });
    attachedListeners = [];
}
