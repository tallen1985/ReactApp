
import './Snippets.css';
import handyListLogo from '../images/handy-list.png'
import codecademylogo from "../images/codecademy-logo.jpg";
import flamingoLogo from '../images/flamingo.png';
import github from '../images/github.png';
import linkedIn from '../images/LI-In-Bug.png'
import Weather from '../Weather/Weather'

let snippets = [
    {
        "name": "main",
        "content": <fragment>
            <h2>Welcome to Grey Gato Media</h2>
            <Weather />
        </fragment>
    },
    {
        "name": "about",
        "content": <fragment><h3>What's with the name?</h3>
        <p>In 2018, a whole bunch of things came into my life that happened to be cool... and grey.  My wife and I bought a house in the quaint little town of Newmarket NH, and it is a weathered grey cedar shake house.<br/><br/> Shortly before that we got a small cat and he developed the nickname 'Don Gato', he was also grey.<br/><br/>When we moved into our house, there is a semi-finished garage and I wanted to turn it into a pseudo pub/hangout room.  Searching for a cool old-school british-ey name... The Grey Gato was born.</p>
        <h3>What are you doing here?</h3>
        <p>Here I sit, in the throes of my 1/3<sub>rd</sub> life crisis, making moves and figuring out what I want to do when I grow up. <br/><br/>
        <strong>Grey Gato Media is a Full-Stack web development enclave nestled in an old house on an old street in an old town.  Run by an almost-middle-aged man.</strong></p>
        </fragment>
    },
    {
        "name": "contact",
        "content": <fragment><h4>Grey Gato Media</h4>
        <p>
        Newmarket NH, 03857</p>
        <a href="mailto:jake.allen@me.com">Jake.allen@me.com</a>
        <br></br>
        <div className="links">
        <img onClick={() => window.open("https://github.com/tallen1985")}className="about-logo" alt="github" src={github}/>
			  <img onClick={() => window.open("http://www.linkedin.com/in/troy-allen-595a40203")} className="about-logo" alt="linked in" src={linkedIn}/>
      </div>
      </fragment>
    },
    {
        "name": "projects",
        "content": <fragment><div id="main-box">
            <h3>Projects</h3>
        <div className="entry-box">
            <div className="entry-logo handyListLogo">
                
            </div>
            <div className="entry-text">
                <strong>Weather Forecast App</strong><br/>
                    <em>Weather Forecast App utlizing API's and JS </em> <br/>
                    <button onClick={() => window.open("https://tallen1985.github.io/Projects/weather/")}>Link to App</button>
            </div>
        </div>
        <div className="spacer"></div>
        <div className="entry-box">
            <div className="entry-logo handyListLogo">
                <img className="" src={handyListLogo} alt="HandyList" height="90px" />
            </div>
            <div className="entry-text">
                <strong>To-Do App</strong><br/>
                    <em>Simple To-Do list app utilizing Node.js, Express, Read/Write JSON. </em> <br/>
                    <button onClick={() => window.open("https://greygato-todo.herokuapp.com")}>Link to App</button>
                    <br/>
                    <em>Version 1.1, this time created using python, Flask, and SQLAlchemy.  I recreated it it on Pythonanywhere due to Heroku not having persistent Storage.</em><br/>
                    <button onClick={() => window.open('https//tallen1985.pythonanywhere.com')}>Link to App</button>
            </div>
        </div>
        <div className="spacer">
        </div>
        <div className="entry-box">
            <div className="entry-logo">
                <img className="flamingoLogo" src={flamingoLogo} alt="Purple Flamingo" width="150px" />
            </div>
            <div className="entry-text">
                <strong>Purple Flamingo Pottery</strong><br/>
                    <em>Local family-owned pottery studio </em> <br/>
                    <button onClick={() => window.open("https://tallen1985.github.io/Projects/PurpleFlamingo/index.html")}>Link to Site - Under Construction</button>
            </div>
        </div>
        <div className="spacer">
        </div>
        <div className="entry-box">
            <div className="entry-logo">
                <img src={codecademylogo} alt="Codecademy" width="150px" />
            </div>
            <div className="entry-text">
                <strong>Codecademy Full-Stack Developer</strong><br/>
            <em>January 2021 - Current</em> <br/>
                <button onClick={() => window.open("https://github.com/tallen1985")}>
                Github Repository for Various Projects</button>
            
            </div>
        </div>
        </div>
        </fragment>
    }];
    


export default snippets;