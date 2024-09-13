import {page} from './lib.js';
import {homeView} from "./views/homeView.js";
import {aboutView} from "./views/aboutView.js";
import {projectsView} from "./views/projectsView.js";
import {serviceView} from "./views/ServicesView.js";
import {shipManagementView} from "./views/shipManagementView.js";
import {fleetView} from "./views/fleetView.js";
import {shipOperationsView} from "./views/operationsView.js";
import {policyView} from "./views/policy.js";
import {historyView} from "./views/hystory.js";
import {contactsView} from "./views/contacts.js";

page('/', homeView);
page('/about', aboutView);
page('/projects', projectsView);
page('/services', serviceView);
page('/services/ShipManagement', shipManagementView);
page('/services/operations', shipOperationsView);
page('/fleet', fleetView);
page('/policy', policyView);
page('/history', historyView);
page('/contacts', contactsView);

page.start();