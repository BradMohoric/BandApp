import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditShow = () => {
//Same variables for useState as the create show page, but with the additional useParams for inheritance from the parent ShowList page
    const { showid } = useParams();
    const [id, idChange] = useState("");
    const [date, dateChange] = useState("");
    const [venue, venueChange] = useState("");
    const [city, cityChange] = useState("");
    const [promoter, promoterChange] = useState("");
    const [email, emailChange] = useState("");
    const navigate = useNavigate();

    //submit function with another shorthand variable for the object
    const handleSubmit = (e) => {
        e.preventDefault();
        const showData = { id, date, venue, city, promoter, email };

        //Fetch PUT call referencing the specific show ID. Automatically routes to the Shows page on successful PUT or throws and error to the console.
        fetch("https://643cab116afd66da6ae23674.mockapi.io/Show/" + showid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(showData)
        }).then((res) => {
            navigate("/shows");
        }).catch((err) => {
            console.log(err.message)
        })
    }
//Basic fetch call in a useEffect hook
    useEffect(() => {
        fetch("https://643cab116afd66da6ae23674.mockapi.io/Show" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            idChange(resp.id);
            dateChange(resp.date);
            venueChange(resp.venue);
            cityChange(resp.city);
            promoterChange(resp.promoter);
            emailChange(resp.email);
        }).catch((err) => {
            console.log(err.message);
        });
    }, [])

//Output is a form for all the parts of the object. Keeps the order in the table through the ID and allows you to edit that line/show.
//Each one uses an onChange event to update the object with the useState variables at the top
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{ "textAlign": "left" }} id="editForm">
                            <div className="card-title">
                                <h2 className="formHeader">Edit Show</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Date</label>
                                            <input onChange={e => dateChange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Venue</label>
                                            <input onChange={e => venueChange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>City</label>
                                            <input onChange={e => cityChange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Promoter</label>
                                            <input onChange={e => promoterChange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
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
    );
}



export default EditShow;