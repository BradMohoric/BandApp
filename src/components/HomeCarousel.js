import Carousel from 'react-bootstrap/Carousel';
import SetPreview from '../Images/SetPreview.PNG';
import ShowsPreview from '../Images/ShowsPreview.PNG';
import MerchPreview from '../Images/MerchPreview.PNG';

//This is a react bootstrap carousel component. Shows on the home page and cycles through screenshots of all 
//the different pages in the app. Includes little explainations of each one.
const HomeCarousel = () => {


    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ShowsPreview}
                    alt="First slide"
                    id="SlideImage"
                />
                <Carousel.Caption>
                    <h3 id="CarouselText">Show tracker</h3>
                    <p id="CarouselText">Dynamically track your upcoming shows in the Shows tab</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={SetPreview}
                    alt="Second slide"
                    id="SlideImage"
                />

                <Carousel.Caption>
                    <h3 id="CarouselText">Setlist</h3>
                    <p id="CarouselText">Create and edit a dynamic list of songs in the Setlist tab</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={MerchPreview}
                    alt="Third slide"
                    id="SlideImage"
                />

                <Carousel.Caption>
                    <h3 id="CarouselText">Merch Tracker</h3>
                    <p id="CarouselText">
                        Keep track of your nightly merch sales in the Merch tab
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;