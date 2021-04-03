import React from 'react';
import NavBar from '../NavBar/NavBar';
import Jumbotron from '../Jumbotron/jumbotron'
import './App.css';

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
        <p>Copyright Jake Allen 2021. <em>designed and coded without the use of WYSIWYG</em></p>
      </footer>
    </div>
  )};
}

export default App;
