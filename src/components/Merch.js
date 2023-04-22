import React from 'react';
import BRShort from '../Images/BRShort.jpg';
import BRLong from '../Images/BRLong.jpg';
import MerchCounters from './MerchCounters';

//Parent component for the merch page. Has 2 example cards of band merch and each holds a counter component.
const Merch = () => {

    return (
        <div><br></br>
            <h2 id="listHeading">Sales</h2>
            <div className="row justify-content-center">
                <div className="card" style={{ "width": "25rem" }}>
                    <img src={BRShort} className="card-img-top"></img>
                    <div className="card-body">
                        <h3 className="card-title">Brain Worms Short-sleeve</h3>
                        <br></br>
                        <MerchCounters />
                    </div>
                </div>
                <div className="card" style={{ "width": "25rem" }}>
                    <img src={BRLong} className="card-img-top"></img>
                    <div className="card-body">
                        <h3 className="card-title">Brain Worms Long-sleeve</h3>
                        <br></br>
                        <MerchCounters />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Merch;