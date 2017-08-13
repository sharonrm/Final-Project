import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

class Chart extends Component {
	render() {
	 	return(
	 		<div className="chart">
	 		<Pie
    			data={this.props.chartData}
   				    width={100}
    				height={50}
    				options={{
    					legend: {
    						disply:false,
        					fontSize: 25
	
    					},

    				}}
        		/>
</div>
	 			
	 		
	 	)

	 }
	
}

export default Chart;