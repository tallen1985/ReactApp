import React from 'react';
import './Weather.css';

class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            description: '',
            temp: '',
            icon: ''
        }
    }
    
    componentDidMount() {
        let apiKey = '9eb115b75f669676b72125c5e2e7859a';
        let zipCode = '03857';

        fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=imperial`)
        .then((response) => response.json())
        .then(jsonResponse => {
            this.setState({ description: jsonResponse.weather[0].main,
                 temp: Math.floor(jsonResponse.main.temp) });
        });
    }

    render(){
        return (
            <div className="weatherBox">
                <p>Current weather at Gato Headquarters</p><hr />
                <p>Description: {this.state.description} <br/>Temp: {this.state.temp} &deg;.</p>
            </div>
        )
    }
    
}

export default Weather;