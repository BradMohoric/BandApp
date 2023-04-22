import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const CreateShow = () => {
//variables for id, date, venue, city, promoter, and email to track state, shorthand for react router below those.
    const [id, idChange] = useState("");
    const [date, dateChange] = useState("");
    const [venue, venueChange] = useState("");
    const [city, cityChange] = useState("");
    const [promoter, promoterChange] = useState("");
    const [email, emailChange] = useState("");
    const navigate = useNavigate();

//submit button function. showData set up as shorthand for full object of data
    const handleSubmit = (e) => {
        e.preventDefault();
        const showData = { date, venue, city, promoter, email }
//fetch POST call to my mockAPI resource for shows.
//Automatically brings you back to the shows page after POST is successful, otherwise throws an error to the console
        fetch('https://643cab116afd66da6ae23674.mockapi.io/Show', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(showData)
        }).then((res) => {
            navigate('/shows');
        }).catch((err) => {
            console.log(err.message)
        })
    }

//Output is a form that uses the functions above to post a new show object to the API.
//All form fields use onChange events to update the array object
    return (
        <div>
            <div>
                <div className="row">
                    <div className="offset-lg-3 col-lg-6">
                        <form className="container" onSubmit={handleSubmit}>
                            <div className="card" style={{ "textAlign": "left" }} id="editForm">
                                <div className="card-title">
                                    <h2 className="formHeader">Add Show</h2>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>ID</label>
                                                <input value={id} disabled="disabled" placeholder="Automatic" onChange={e => idChange(e.target.value)} className="form-control"></input>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="from-group">
                                                <label>Date</label>
                                                <input onChange={e => dateChange(e.target.value)} className="form-control"></input>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="from-group">
                                                <label>Venue</label>
                                                <input onChange={e => venueChange(e.target.value)} className="form-control"></input>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="from-group">
                                                <label>City</label>
                                                <input onChange={e => cityChange(e.target.value)} className="form-control"></input>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="from-group">
                                                <label>Promoter</label>
                                                <input onChange={e => promoterChange(e.target.value)} className="form-control"></input>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="from-group">
                                                <label>Email</label>
                                                <input onChange={e => emailChange(e.target.value)} className="form-control"></input>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <button className="btn btn-success" type="submit">Save</button>
                                                <a href="/shows" className="btn btn-warning">Back</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default CreateShow;