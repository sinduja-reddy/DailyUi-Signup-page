import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {grey500,cyan500} from 'material-ui/styles/colors';

const styles = {
  underlineFocusStyle: {
    borderColor: cyan500,
  },
  underlineStyle:{
  	borderColor: grey500
  },
  floatingLabelFocusStyle: {
    color: cyan500,
  },
};

class Signup extends Component {
	constructor(props){
		super(props);
		    this.state = { 	emailErrorText: '',
		    				usernameErrorText: '',
		    				passwordErrorText: '',
		    			 	email:'',
		    			 	password:'',
		    			 	username:'',
		    			 	errorText:''
		    			 }
		    this.handleSubmit=this.handleSubmit.bind(this);
}


	onChange(event) {
		const state=this.state;
		state.errorText=''
		state[event.target.name]= event.target.value 
      	this.setState(state);
      if(event.target.value===""){
      	state[event.target.name+'ErrorText']='Field required'
      	this.setState({state})
      }else{
      	 state[event.target.name+'ErrorText']=''

      }
	}
 	handleSubmit(e){
 		const state=this.state;
 		e.preventDefault();
		let email = this.state.email.trim();
		let username = this.state.username.trim();
		let password=this.state.password.trim();
		if (email===''|| username===""|| password==="") {
			state.errorText='Fill the form'
			this.setState({state})
		}else{
			alert('submited');
		}
// TODO: send request to the server
}
  	render() {
    	return (
      	<div className="App">
      		<div className="appItems">
     			<RaisedButton label="SIGN UP WITH FACEBOOK " primary={true} className="button"fullWidth={true} />
      			<span className='or'>or</span>
      			<h4>Sing up with your email address</h4>
      			<form onSubmit={this.handleSubmit}>
    				<TextField hintText="email" name= "email" type="email" value={this.state.email} floatingLabelText="Email" errorText= {this.state.emailErrorText}  onChange={this.onChange.bind(this)} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}  underlineStyle={styles.underlineStyle}/>
    	 			<TextField hintText="Password" name="password" value={this.state.password} type="password"  errorText= {this.state.passwordErrorText} floatingLabelText="Password" onChange={this.onChange.bind(this)}  underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}  underlineStyle={styles.underlineStyle}/>
					<TextField hintText="User name"  name="username" value={this.state.username} floatingLabelText="User name" onChange={this.onChange.bind(this)} errorText= {this.state.usernameErrorText} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}  underlineStyle={styles.underlineStyle}/>
					<RaisedButton label="Sign up" type="submit" secondary={true} className="signupButton"  fullWidth={true}/>
					<p>{this.state.errorText}</p>
	  			</form>
	  		</div>
      	</div>
    	);
	}
 }

export default muiThemeable()(Signup);