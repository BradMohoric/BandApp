import React from 'react';



//Navigation component. Output is a bootstrap navbar that goes to each react router page in the app.
const Navigation = () => {




    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/setlist">Setlist</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/merch">Merch</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/shows">Shows</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;