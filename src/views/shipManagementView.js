
import {html, render} from "../lib.js";
const shipManagementTemplate = () => html `
    <div class="single mt-125">
        <div class="container">
            <div class="section-header">
               
                <h2>Ship Management</h2>
            </div>
            <div class="row">
                <div class="col-12">
                    <img  id="single-image" src="../../img/shipManagementAi.jpg" alt="Image">
                    <p>
                        Moving on from pure shipbroking the company started acting as managers, time charterer and operator of coastal size vessels of 1000-5000 dwt trading mainly in the Black and Mediterranean Seas, West Africa, Continent, Baltic and Far East. Later on two own vessels of this size were purchased and successfully managed and operated.
                        
                        Since 2003 the company started chartering in handy size bulkers in the range of 20,000-45,000 dwt trading on world wide basis. In the year 2007 Cosmos Shipping acquired two vessels of 25,000 dwt, providing full commercial management, crewing and technical management. Currently, the company is acting as ship manager of handy bulk carriers and is focused on expanding its fleet in the dry bulk sector.
                        
                        Full range of ship management services is provided, including commercial operation, technical management and crewing.
                        The importance of an effective quality and safety management system is recognized and the company is ISO and ISM compliant.
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
`;

export function shipManagementView() {
    render(shipManagementTemplate());
}