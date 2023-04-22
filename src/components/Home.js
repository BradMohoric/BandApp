import React from 'react';
import '../App.css'
import HomeCarousel from './HomeCarousel';
import HomeAlert from './HomeAlert';


//This is just a home page for the default "/" route. 
//Holds the home alert and Home carousel components.
const Home = () => {


    return (
        <div className="container"> <br></br>
        <br></br> <br></br>
            <div>
                <HomeAlert />
                <br></br><br></br>
                <HomeCarousel />
            </div>
        </div>
    );
}


export default Home;