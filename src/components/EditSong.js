import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditSong = () => {
//Same variables for useState as the create song page, but with the additional useParams for inheritance from the parent SongList page.
    const { songid } = useParams();
    const [id, idChange] = useState("");
    const [name, nameChange] = useState("");
    const [length, lengthChange] = useState("");
    const navigate = useNavigate();

    //submit function with another shorthand variable for the object
    const handleSubmit = (e) => {
        e.preventDefault();
        const songData = { id, name, length };

        //Fetch PUT call referencing the specific show ID. Automatically routes back to the Setlist page on successful PUT, otherwise throws error.
        fetch("https://643cab116afd66da6ae23674.mockapi.io/Song/" + songid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(songData)
        }).then((res) => {
            navigate('/setlist');
        }).catch((err) => {
            console.log(err.message)
        })
    }

    //Basic fetch call in a useEffect hook 
    useEffect(() => {
        fetch("https://643cab116afd66da6ae23674.mockapi.io/Song" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            idChange(resp.id);
            nameChange(resp.name);
            lengthChange(resp.length);
        }).catch((err) => {
            console.log(err.message);
        });
    }, [])

    //Output is a form for all the parts of the object. Keeps the order in the table via the ID and lets you edit it.
    //Each one uses an onChange event to update the object with the useState variables at the top
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{ "textAlign": "left" }} id="editForm">
                            <div className="card-title">
                                <h2 className="formHeader">Edit Song</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
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
    );
}

export default EditSong;