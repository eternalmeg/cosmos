import {html, render} from "../lib.js";
const shipOperationTemplate = () => html `
    <div class="single mt-125">
        <div class="container">
            <div class="section-header">
               
                <h2>Ship Management</h2>
            </div>
            <div class="row">
                <div class="col-12">
                    <img  id="single-image" src="../../img/shipOperation.png" alt="Image">
                    <p>
                        The smooth running of each ship is overseen by the operations department responsible for liaising with Agents, Shippers and Receivers, communicating with vessels at sea, preparing and transmitting voyage instructions to the Master, cost planning and control, managing disbursement accounts, supplies, handling claims and disputes.

                        Operations department works closely with the Technical, Crewing and Chartering departments to ensure that the highest standards of vessel maintenance and safety as per Flag and Class requirements are achieved, accidents are avoided, and that necessary routine maintenance does not interfere with the commercial operation.

                        Here in the Operations departments rests also the responsibility for the ISM and ISPS compliance and regular auditing.
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
`;

export function shipOperationsView() {
    render(shipOperationTemplate());
}
