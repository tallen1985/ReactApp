import React from 'react';
import './Weather.css';

class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            description: '',
            temp: '',
            icon: '',
            zipCode: '03857'
        }
    }
    
    async componentDidMount() {
        let apiKey = '9eb115b75f669676b72125c5e2e7859a';

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode}&appid=${apiKey}&units=imperial`)
        let jsonResponse = await response.json();
        const iconName = jsonResponse.weather[0].icon // this will hold the icon
        const iconApi = await fetch('https://openweathermap.org/img/w/' + iconName + '.png')
        
        this.setState({ description: jsonResponse.weather[0].main,
                 temp: Math.floor(jsonResponse.main.temp),
                icon: iconApi.url });
    }

    render(){
        return (
            <div className="weatherBox">
                <p>Current weather at Gato Headquarters</p>
                <div class="weatherInfo">
                    <div className="weather-icon">
                        <p ClassName="iconDesc" >{this.state.description}</p>
                        <img style={{width:'70px'}} src= {this.state.icon} alt="weather icon"/>
                        
                    </div>
                    <div className="weather-temp">
                        <p>Temp:</p><p className="temp">{this.state.temp}&deg;</p>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Weather;