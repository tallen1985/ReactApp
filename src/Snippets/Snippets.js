
import './Snippets.css';
import fertilityharbor from "../images/Fertility-Harbor-Logo-Web.jpg";
import codecademylogo from "../images/codecademy-logo.jpg";
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
            <div className="entry-logo">
                <img src={fertilityharbor} alt="Fertility Harbor" width="150px" />
            </div>
            <div className="entry-text">
                <strong>Fertility Harbor</strong><br/>
                    <em>Local blog that I've done some maintenance work for. </em> <br/>
                    <button onClick={() => window.open("https://www.fertilityharbor.com")}>Specifically rebuilding Shop section</button>
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
                <button onClick={() => window.open("https://gitfront.io/r/user-5563997/79efa750c133706fd3cadb36bac7c09fc677b8a0/Codecademy/")}>
                Github Repository for Codecademy Projects</button>
            
            </div>
        </div>
        </div></fragment>
    }];
    


export default snippets;