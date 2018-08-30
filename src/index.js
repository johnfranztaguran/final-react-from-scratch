import React, { Compnent }from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';


const Root = () => {
	return(
			<div>
				<App />
			</div>
		);
}
// class Root extends React.Component {
// 	render(){
// 		return(
// 			<div>
// 				<App />

// 			</div>

// 		);
// 	}
// }



ReactDOM.render(<Root />,document.getElementById('app'));