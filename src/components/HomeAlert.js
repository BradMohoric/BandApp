import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

//Home alert function. Shows an alert whenever navigating to the Home page explaining the app tour.
//Can be closed out and leaves behind a button that says "Welcome"
//Welcome button can be toggled to bring back the alert

const HomeAlert = () => {

    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="dark" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>
                    Welcome to the Band Management App
                </Alert.Heading>
                <p>
                    Please enjoy a tour below
                </p>
            </Alert>
        );
    }
    return <Button variant="dark" onClick={() => setShow(true)}>Welcome</Button>;
}


export default HomeAlert;