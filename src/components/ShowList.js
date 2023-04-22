import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


//Parent component for the shows page. useState variable for showData object shorthand and showDataChange function for the fetch call.
//useNavigate shorthand variable below
const ShowList = () => {
    const [showData, showDataChange] = useState(null);
    const navigate = useNavigate();

    //function based on ID of object to load the edit page for it. Tied to the edit buttons
    const LoadEdit = (id) => {
        navigate("/shows/edit/" + id)
    }

    //Delete function for each show object. Uses the ID as a key and uses a DELETE method to the API. Reloads the page on successful delete or throws an error.
    const RemoveShow = (id) => {
        fetch("https://643cab116afd66da6ae23674.mockapi.io/Show/" + id, {
            method: "DELETE"
        }).then((res) => {
            window.location.reload();
            navigate('/shows');
        }).catch((err) => {
            console.log(err.message)
        })
    }

    //Fetch call to load the data from the API 
    useEffect(() => {
        fetch('https://643cab116afd66da6ae23674.mockapi.io/Show').then((res) => {
            return res.json();
        }).then((resp) => {
            showDataChange(resp);
        }).catch((err) => {
            console.log(err.message);
        });
    }, [])


    //output is a table that holds each show object on a table row. Along with edit and remove buttons for each.
    return (
        <div><br></br>
            <div className="container" id="List">
                <div className="card" id="List">
                    <div className="card-title">
                        <h2 id="listHeading">Shows</h2>
                    </div>
                    <div className="card-body">
                        <div className="divbtn">
                            <a href="shows/create" className="btn btn-success">Add New Show</a>
                        </div>
                        <table className="table table-dark table-bordered">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <td>ID</td>
                                    <td>Date</td>
                                    <td>Venue</td>
                                    <td>City</td>
                                    <td>Promoter</td>
                                    <td>Email</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {showData &&
                                    showData.map(item => (
                                        <tr key={item.id}>
                                            <td>
                                                {item.id}
                                            </td>
                                            <td>
                                                {item.date}
                                            </td>
                                            <td>
                                                {item.venue}
                                            </td>
                                            <td>
                                                {item.city}
                                            </td>
                                            <td>
                                                {item.promoter}
                                            </td>
                                            <td>
                                                {item.email}
                                            </td>
                                            <td>
                                                <a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                                <a onClick={() => { RemoveShow(item.id) }} className="btn btn-danger">Remove</a>
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



export default ShowList;