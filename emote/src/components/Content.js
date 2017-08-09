import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import Results from './Results'

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
			// console.log(response.data.response.document_tone.tone_categories["0"].tones)

			// setState
			this.setState({ data: response.data.response.document_tone.tone_categories["0"].tones });
			// console.log(this.state.data)
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
			<div className='container'>
			<div className='space'>
			<form onSubmit={this.handleSubmit.bind(this)} id="usrform">
				<label className='content'>
				<input
				    type="text" name="content"
					value={this.state.contentValue}
					onChange={this.handleContentChange.bind(this)}/>
					</label>
					<input type="submit" value="submit" maxlength="20" />
			</form>
			
			<Results responseData={this.state.data} />
			</div>
			</div>
		)
	}
}
	
 export default Content;