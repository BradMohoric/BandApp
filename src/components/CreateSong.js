import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const CreateSong = () => {

    //variables for id, name, and length to track state. shorthand variable for react router below those.
    const [id, idChange] = useState("");
    const [name, nameChange] = useState("");
    const [length, lengthChange] = useState("");
    const navigate = useNavigate();

//submit function that triggers on submission of the form.
    const handleSubmit = (e) => {
        e.preventDefault();
        //Shorthand variable for the song object consisting of name and length
        const songData = { name, length };

        //fetch POST call to my mockAPI to create a new song object in the song resource. 
        //Automatically brings you back to the setlist page after POST is successful, otherwise throws an error to the console
        fetch('https://643cab116afd66da6ae23674.mockapi.io/Song', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(songData)
        }).then((res) => {
            navigate('/setlist');
        }).catch((err) => {
            console.log(err.message)
        })
    }
//Output is a form that uses the above functions to take data submitted from the form and create a new song object to the API.
//All form fields use onChange events to update the array object
    return (
        <div>
            <div>
                <div className="row">
                    <div className="offset-lg-3 col-lg-6">
                        <form className="container" onSubmit={handleSubmit}>
                            <div className="card" style={{ "textAlign": "left" }} id="editForm">
                                <div className="card-title">
                                    <h2 className="formHeader">Add Song</h2>
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
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input onChange={e => nameChange(e.target.value)} className="form-control"></input>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Length</label>
                                                <input onChange={e => lengthChange(e.target.value)} className="form-control"></input>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <button className="btn btn-success" type="submit">Save</button>
                                                <a href="/setlist" className="btn btn-warning">Back</a>
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

export default CreateSong;