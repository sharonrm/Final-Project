import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';

class Content extends Component {
	constructor (props) {
		super(props);
			this.state = {
				contentValue: "",
				data: []
			}
		}


	handleSubmit(event) {
		// console.log("from handleSubmit", event.currentTarget.content.value)
		event.preventDefault();

		axios.post('http://localhost:8080/api', {
			contentValue: this.state.contentValue
		}).then((response)=> {
			console.log(response)

			// setState
			this.setState({ data: response });
		}).catch((error)=> {
			console.log('err while posting: ', error);
		})
	}

	handleContentChange(event) {
		// console.log(event.target)
		this.setState({contentValue: event.target.value});
		
		}

	// handleContentResponse(data) {
	// 	// console.log('got this data', data);
	// 	this.setState({ data: data.results })
	// }

	
	render() {
		return(
			<div>
			<form onSubmit={this.handleSubmit.bind(this)}>
				<label>
				<input
				    type="text" name="content"
					value={this.state.contentValue}
					onChange={this.handleContentChange.bind(this)}/>
					</label>
					<input type="submit" value="submit" />
			</form>
			</div>
		)
	}
}
	
 export default Content;