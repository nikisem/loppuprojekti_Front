import React from 'react';
import './Login.css';
import {kirjauduSisaan} from "./rekisteroityminen";


export class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {
            usernameOrEmail: "",
            password: ""
        }
    }

//state sisältää username ja password
    kirjaudu = () => {
        kirjauduSisaan(this.state, function(lista) {
            this.setState({usernameOrEmail: "", password: ""});
        }.bind(this));

    }


    giveUsernameOrEmail(event){
        this.setState({
            usernameOrEmail: event.target.value
        });
    }


    givePassword(event){
        this.setState({
            password: event.target.value
        });
    }


    render(){
        return(
            <div className = "registerreuna">
                <input type="text" value={this.state.usernameOrEmail} onChange={(event) => this.giveUsernameOrEmail(event)} placeholder="username or email"/>
                <input type="password" value={this.state.password} onChange={(event) => this.givePassword(event)} placeholder="password"/>
                <button onClick={this.kirjaudu} className="btn btn-info" type="submit">
                    Login
                </button>
            </div>
        );
    }
}