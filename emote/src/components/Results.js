import React, { Component } from 'react';

class Results extends Component {
	renderResults(responseData) {
	console.log(responseData)
	if (responseData) {
		return responseData.map((responseData, index) => {
			return <div
					 key={index}> {responseData.tone_name}  {(responseData.score)*100}, </div>
		})
	}
}
	render() {
		return(
				<div>
				<p>Results</p>
				<li>{this.renderResults(this.props.responseData)}</li>
				
				</div>
			)
	}
}
export default Results;