import React from 'react';
import './NavBar.css';

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        this.props.onClick(event.target.id)
    }

    createButtons(){
        const pages = this.props.pages.filter(page => page !== this.props.currentPage);
        let buttons = pages.map(page => {
            return <li key={page}><button key={page} id={page} onClick={this.handleClick}>{page}</button></li>
        })
        return buttons;
    }
    render(){
       return (
       <header>
	    <div id="logo-name">
		    <span className="fas fa-cat"></span>
		    <h1>Grey Gato Media</h1>
	    </div>
	    <nav>
			<div className="NavBar">
				<ul>
                {this.createButtons()}
				</ul> 
	         </div>
         </nav>
	    </header>
       ) 
    }
}

export default NavBar;