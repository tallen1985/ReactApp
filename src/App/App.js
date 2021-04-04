import React from 'react';
import NavBar from '../NavBar/NavBar';
import Jumbotron from '../Jumbotron/jumbotron'
import './App.css';
import github from '../images/github.png';
import linkedIn from '../images/LI-In-Bug.png'

class App extends React.Component {
  constructor(props){
    super(props);
    this.changePage = this.changePage.bind(this)
    this.state = {
      pages: ['main', 'about', 'contact', 'projects'],
      currentPage: 'main'
    };
  }

  changePage(currentPage){ 
    this.setState({currentPage: currentPage});
  }
  render(){
  return (
    <div className="App">
      <div className="App-header">
          <NavBar pages={this.state.pages} onClick={this.changePage} currentPage={this.state.currentPage}/>
        {/* <Jumbotron currentPage={this.state.currentPage} /> */}
        <div className="contentBox">
          <div className="contentInside">
            <Jumbotron currentPage={this.state.currentPage} />
          </div>
        </div>
      </div>
      
      <footer>
        <div className="copyright footer"><p>Copyright Jake Allen 2021. <em>designed and coded without the use of WYSIWYG</em></p>
        </div>
        <div className="weather footer">
          Insert Weather Here
        </div>
        <div className="signup footer">
          Insert Signup Here
        </div>
      </footer>
      <div className="links">
        <a href="https://github.com/tallen1985"><img className="about-logo" src={github}/></a>
			  <a  href="www.linkedin.com/in/troy-allen-595a40203"><img 	className="about-logo" src={linkedIn}/></a>
      </div>
    </div>
  )};
}

export default App;
