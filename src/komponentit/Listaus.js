import React from 'react';
import './Listaus.css';


export class Listaus extends React.Component {

    render() {
        var kaikki = this.props.lista.map(function (x, index) {
            return (
                <div className="listausreuna" key={index}>
                    <div>
                        <p class="aikaleima">{x.aikaleimaString}</p>
                        <p><a href={x.linkki}><img className="img-responsive img-thumbnail center-block" alt="" src={x.kuva}
                                                   width="30%" height="20%"/></a></p>
                        <p id="otsikkolinkki"><a class="linkki"  href={x.linkki}>{x.otsikko}</a></p>

                        <br/>
                        <br/>

                    </div>
                </div>)


        })

        return (
            <div className="listausreuna">
                {kaikki}
            </div>
        );
    }

}

export default Listaus;