import React from 'react';
import "./jumbotron.css";
import snippets from '../Snippets/Snippets'



class Jumbotron extends React.Component{
	displayPage() {
		let currentPage = snippets.find(page => page.name === this.props.currentPage);
		return currentPage.content;
	}
    render(){
        return (
        <div className="jumboContent">
			{this.displayPage()}
		</div>

        )}
}

export default Jumbotron;