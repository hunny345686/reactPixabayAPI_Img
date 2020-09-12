import React, {Component} from 'react';
import axios from 'axios';
import ImageResults from "../imageResults/imageResults"

class Search extends Component{
	state={
		searchtext:'',
		apiUrl:'https://pixabay.com/api/',
		apikey:'17976563-7739392dac0afdb9556fe83ff',
		images:[]
	};

	onTextChange=e=>{
		const val=e.target.value;
		this.setState({[e.target.name]:val},()=>{

		   if(val ==="")	
		   {
		   	this.setState({images:[]});
		   }
		   else{
			axios
			.get(
                 `${this.state.apiUrl}/?key=${this.state.apikey}&q=${
					this.state.searchtext}
					&image_type=photo$safesearch=true`
				)
			.then(res=>this.setState({images:res.data.hits}))
			.catch(err=> console.log(err));
		}
		});
	}

	render(){
		console.log(this.state.images);
		return(
			   <div>

			   <h2 style={{marginLeft:600,marginBottom:-30}}>Sreach Images Form Pixabay</h2>
				<input type="text"style ={{
				backgroundColor:'white',
				color: 'black',
				marginLeft: 570,
				marginTop: 100,
				paddingTop: 20,
				paddingLeft: 70,
				fontSize: 30,
				borderTopStyle: "hidden",
				borderRightStyle: "hidden",
				borderLeftStyle: "hidden",
				outline: 'none',
				borderBottomStyle: "groove",}} 
				placeholder ="Search Images....."
		   name = "searchtext"
		   value ={this.state.searchtext}
		   onChange ={this.onTextChange}/>

		   <br/><br/><br/>

		   {this.state.images.length>0?(<ImageResults images={this.state.images}/>):null}

			   </div>
			  )
	}
}


export default Search;