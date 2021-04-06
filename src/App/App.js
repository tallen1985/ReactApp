import React from 'react';
import NavBar from '../NavBar/NavBar';
import Jumbotron from '../Jumbotron/jumbotron'
import './App.css';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
class App extends React.Component {
  constructor(props){
    super(props);
    this.changePage = this.changePage.bind(this)
    this.state = {
      pages: ['main', 'about', 'contact', 'projects'],
      currentPage: 'main',
      email: "",
      name: ""
    };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  changePage(currentPage){ 
    this.setState({currentPage: currentPage});
  }
  render(){
    const { email, name } = this.state;
  return (
    <div className="App">
      <div className="App-header">
          <NavBar pages={this.state.pages} onClick={this.changePage} currentPage={this.state.currentPage}/>
        <div className="contentBox">
          <div className="contentInside">
            <Jumbotron currentPage={this.state.currentPage} />
          </div>
        </div>
      </div>
      
      <footer>
        <div className="copyright footer"><p>Copyright Jake Allen 2021. <em>designed and coded without the use of WYSIWYG</em></p>
        </div>
        <div className="signup footer">

        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
          <p>
            <h3>Keep up to date with Grey Gato Media</h3>
            <label>Your Name: <input type="name" name="name" value={name} onChange={this.handleChange} /></label>
            </p>
            <p>
            <label>Your Email: <input type="email" name="email"  value={email}onChange={this.handleChange} /></label>
          </p>
          <p><input type="hidden" name="form-name" value="contact" />  
            <button type="submit">Send</button>
            
          </p>
        </form>



        </div>
      </footer>
    </div>
  )};
}

export default App;
