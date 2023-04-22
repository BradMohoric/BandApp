import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


//Parent component for the Setlist page. useState variable for songData object shorthand and songDataChange function for the fetch call.
const SongList = () => {
    const [songData, songDataChange] = useState(null);
    const navigate = useNavigate();

    //function based on ID of object to load the edit page for it. Tied to the edit buttons
    const LoadEdit = (id) => {
        navigate("/song/edit/" + id)
    }

    //Delete function for each song object. Uses the ID as a key and a DELETE call to remove that object from the API.
    //Reloads the page triggering the fetch call and updating the table on successful DELETE, or throws an error
    const RemoveSong = (id) => {
        fetch('https://643cab116afd66da6ae23674.mockapi.io/Song/' + id, {
            method: "DELETE"
        }).then((res) => {
            window.location.reload();
            navigate('/setlist');
        }).catch((err) => {
            console.log(err.message)
        })
    }

    //Fetch call to load the data from the API.
    useEffect(() => {
        fetch('https://643cab116afd66da6ae23674.mockapi.io/Song').then((res) => {
            return res.json();
        }).then((resp) => {
            songDataChange(resp);
        }).catch((err) => {
            console.log(err.message);
        });
    }, [])

    //output is a table that holds each song object on a table row along with edit and delete buttons for each.
    return (
        <div> <br></br>
            <div className="container" id="List">
                <div className="card" id="List">
                    <div className="card-title">
                        <h2 id="listHeading">Setlist</h2>
                    </div>
                    <div className="card-body">
                        <div className="divbtn">
                            <a href="song/create" className="btn btn-success">Add New Song</a>
                        </div>
                        <table className="table table-dark table-bordered">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <td>Order</td>
                                    <td>Name</td>
                                    <td>Length</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {songData &&
                                    songData.map(item => (
                                        <tr key={item.id}>
                                            <td>
                                                {item.id}
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>
                                                {item.length}
                                            </td>
                                            <td>
                                                <a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                                <a onClick={() => { RemoveSong(item.id) }} className="btn btn-danger">Remove</a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default SongList;