import React, {Component} from 'react';
const ViewContext = React.createContext(); 

class ViewProvider extends Component{
	constructor(props){
		super(props);

		this.updateDimensions = this.updateDimensions.bind(this);
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions);
	}

	componentWillUnmount() {
    	window.removeEventListener("resize", this.updateDimensions);
  	}


	updateDimensions() {
	    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
	    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

	    this.setState({ windowWidth, windowHeight });
  	}

	render(){
		return (
			<ViewContext.Provider>
				{this.props.children}
			</ViewContext.Provider>
		)
	}
}

export default ViewProvider;