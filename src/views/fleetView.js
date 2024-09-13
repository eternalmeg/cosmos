import { html, render } from "../lib.js";

const fleetTemplate = () => html`
    <div class="single mt-125">
        <div class="container">
            <div class="section-header">
                
                <h2>M/T GALAXY ECO</h2>
            </div>
            <div class="row">
                <div class="col-12">
                    <img class="top-image" src="../../img/galaxy_eco_event.jpg" alt="Image">
                    <p>
                        
                    </p>
                   
                    <p>
                        M/t GALAXY ECO is the new vessel of Cosmos Shipping AD - Varna. With this oil-chemical tanker the Company won a tender of the European Maritime Safety Agency ( EMSA ) for an Oil-spill responce vessel and upon request shall fight against oil spills in the Southern part of Black Sea.

                        In accordance with the signed Contract the Shipowner shall perform drills with the crew, vessel and spill recovery equipment on a quaterly basis (every 3 months) and shall participate in an international exercises at least once per year in open sea conditions. When the vessel is not engaged with tasks under the Contract, m/t GALAXY ECO shall act as a bunkering barge supplying vessels with fuel oil, diesel oil, etc. at the Bulgarian coast.

                        The vessel was built in 1993 and has been employed as a chemical carrier in the North Sea since then, meeting the high industry standards.

                        The oil-recovery equipment is provided by EMSA and the m/t GALAXY ECO is manned with well experienced and profecional Bulgarian crew.

                        During the ceremony for the rising of the Bulgarian and EMSA flags on 16 June 2017, the ship was named m/t GALAXY ECO. Following the tradition rituals a bottle of shampagne was broken onto ship's bow by vessel's godmother Mrs Bojana Prodanova and the vessel was blessed by a priest. The Owner, Capt. Plamen Prodanov handed ship's dociments to vessels Master wishing Godspeed to the vessel and the crew. The Ceremony proceeded with an exquisite cocktail on the Passengers Terminal at Varna East Port.
                    </p>
                    
                    <h2>General description of the vessel:</h2>
                    <h3>M/T GALAXY ECO</h3>
                    <ul class="ul-group">
                        <li>Built 1993 г., SEC Viareggio, Italy</li>
                        <li>Flag - Bulgaria</li>
                        <li>LOA 89.60 м</li>
                        <li>B 14.00 м</li>
                        <li>Sdraft 5.21 м</li>
                        <li>DWT 2698 t</li>
                        <li>NT 816 t</li>
                        <li>GRT 2349 t</li>
                        <li>Cargo tanks' volume (98 %): 2966 m3</li>
                        <li>Number of grades which could be carried simultaneously: 14</li>
                    </ul>
                    <h2>Gallery of the Event</h2>
                    <table id="gallery-table"  class="table table-bordered">
                        <tbody>
                        <tr>
                            <td><img class="gallery" src="../../img/event1.jpg" alt=""></td>
                            <td><img class="gallery" src="../../img/event2.jpg" alt=""></td>
                            <td><img class="gallery" src="../../img/event3.jpg" alt=""></td>
                        </tr>
                        <tr>
                            <td><img class="gallery" src="../../img/event4.jpg" alt=""></td>
                            <td><img class="gallery" src="../../img/event5.jpg" alt=""></td>
                            <td><img class="gallery" src="../../img/event6.jpg" alt=""></td>
                        </tr>
                        <tr>
                            <td><img class="gallery" src="../../img/event7.jpg" alt=""></td>
                            <td><img class="gallery" src="../../img/event8.jpg" alt=""></td>
                            <td><img class="gallery" src="../../img/event9.jpg" alt=""></td>
                        </tr>
                        <tr>
                            <td><img class="gallery" src="../../img/event10.jpg" alt=""></td>
                            <td><img class="gallery" src="../../img/event11.jpg" alt=""></td>
                            <td><img class="gallery" src="../../img/event12.jpg" alt=""></td>
                        </tr>
                        <tr>
                            <td><img class="gallery" src="../../img/event13.jpg" alt=""></td>
                            <td><img class="gallery" src="../../img/event14.jpg" alt=""></td>
                            <td><img class="gallery" src="../../img/event15.jpg" alt=""></td>
                        </tr>
                        <tr>
                            <td><img class="gallery" src="../../img/event16.jpg" alt=""></td>
                            <td><img class="gallery" src="../../img/event17.jpg" alt=""></td>
                            <td><img class="gallery" src="../../img/event18.jpg" alt=""></td>
                        </tr>
                        <tr>
                            <td><img class="gallery" src="../../img/event19.jpg" alt=""></td>
                            <td><img class="gallery" src="../../img/event20.jpg" alt=""></td>
                            <td><img class="gallery" src="../../img/galaxy_eco_event.jpg" alt=""></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="marine-container">
                <iframe class="traffic" src="https://www.marinetraffic.com/en/ais/embed/zoom:9/centery:43.0408/centerx:028.5754/maptype:4/shownames:false/mmsi:207228000/shipid:0/fleet:/fleet_id:/vtypes:/showmenu:/remember:false">
                </iframe>

            </div>
        </div>
    </div>

    <!-- Modal -->
    <div id="myModal" class="modal">
        <span id="close">&times;</span>
        <img class="modal-content" id="img01">
        <a id="prev">&#10094;</a>
        <a id="next">&#10095;</a>
    </div>
`;

export function fleetView() {
    render(fleetTemplate());
    setupGalleryModal();
}

function setupGalleryModal() {
    const galleryImages = document.querySelectorAll('.gallery');
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('img01');
    const closeBtn = document.querySelector('#close');
    const prevBtn = document.querySelector('#prev');
    const nextBtn = document.querySelector('#next');

    let currentIndex = 0;

    function showImage(index) {
        if (index >= 0 && index < galleryImages.length) {
            currentIndex = index;
            modal.style.display = 'block';
            modalImg.src = galleryImages[currentIndex].src;
        }
    }

    galleryImages.forEach((img, index) => {
        img.onclick = function () {
            showImage(index);
        }
    });

    closeBtn.onclick = function () {
        modal.style.display = 'none';
    };

    prevBtn.onclick = function () {
        showImage((currentIndex - 1 + galleryImages.length) % galleryImages.length);
    };

    nextBtn.onclick = function () {
        showImage((currentIndex + 1) % galleryImages.length);
    };
}
