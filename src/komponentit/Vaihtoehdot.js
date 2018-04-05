import React from 'react';
import './Vaihtoehdot.css';


export class Vaihtoehdot extends React.Component {
    render(){
        return(
            <div className = "vaihtoehtoreuna">
                <button type="button" onClick={this.props.HS}>HS</button>
                <button type="button" onClick={this.props.IS}>IS</button>
                <button type="button" onClick={this.props.BBC}>BBC</button>
                <button type="button" onClick={this.props.haefunktio}>Hae</button>
                <button type="button" onClick={this.props.poistafunktio}>Poista</button>
            </div>
    );
    }

    tulosta=(c) => {
        c.preventDefault();

    }
}

