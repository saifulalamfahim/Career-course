import React from 'react';
import './MainSec.css'

const MainSec = () => {
    return (

        <main style={{height:'500px'}} className="row d-flex align-items-center">
            <div className="col-md-8 offset-md-4">
                <h1 style={{color: 'white'}}>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button className="btn btn-warning">GET NOW</button>
            </div>
        </main>
    );
};

export default MainSec;