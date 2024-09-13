import {html,page, render} from "../lib.js";

const homeTemplate = () => html `
    <div class="carousel">
        <div class="container-fluid">
            <div class="owl-carousel">
                <div class="carousel-item">
                    <div class="carousel-img">
                        <img src="./img/galaxy.jpg" alt="Image">
                    </div>
                    <div class="carousel-text">
                        <h1>Fastest Way to Achieve Success</h1>
                        <p>
                            Your Partner for Safe and Sustainable Maritime Operations
                        </p>
                       
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="carousel-img">
                        <img src="./img/fantasy.jpg" alt="Image">
                    </div>
                    <div class="carousel-text">
                        <h1>Your Success Our Achievement</h1>
                        <p>
                            Strength in Service, Leadership in Sustainability
                        </p>
                     
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="carousel-img">
                        <img src="./img/oceanTown.jpg" alt="Image">
                    </div>
                    <div class="carousel-text">
                        <h1>Your Business Our Effort</h1>
                        <p>
                            Where Efficiency Meets Environmental Responsibility
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <!-- Carousel End -->
`;

export function homeView() {
    render(homeTemplate());
    initializeCarousel();
}

function initializeCarousel() {
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 1
        });
    });
}