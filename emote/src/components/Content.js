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
	

	handleContentChange(event) {
		console.log(event.target)
		this.setState({contentValue: event.target.value});
		
		}

	handleContentResponse(data) {
		console.log('got this data', data);
		this.setState({ data: data.results })
	}

	handleSubmit(event){
	event.preventDefault();
	console.log(this.state.contentValue);

	// const data ={
	// 	username: '9f1e1a4f-404c-427a-b014-37136a90e21c',
	// 	password: '4yVnPfKQ1N3r'
	// }

	axios.post('https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19&sentences=false', {
		//headers: { 'Content-Type':'application/json', 'Authorization': 'Basic MzE3N2U3YzAtMDU2Yi00YzExLThiYjYtNzgxNGJiNzAwNmRkOldiNTNKRlFYV052Zg==' },
		auth: { username: 'efb6eaff-4a08-4e24-b5b1-9eb6e3da9fd8', password: 'oP5YW0t5iYcG' },
		data: { text: this.state.contentValue }
	})
	.then(response => console.log(response))
	.catch(err => console.error(err));


	// 	$.ajax({
	//     url:'https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19&sentences=false',
	//     data:{
	//         '9f1e1a4f-404c-427a-b014-37136a90e21c':'4yVnPfKQ1N3r'
	//     },
	//     contentType:'application/json',
	//     method:'POST',
	//     success:function(tone){
	//         console.log(tone);
	//     }
	// }).done((data) => {
	// 	this.handleContentResponse(data);
	// })

}
	
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