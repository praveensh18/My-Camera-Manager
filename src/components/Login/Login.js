import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'; 
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import './Login.css';
import { signIn } from '../../actions';

class Login extends Component {
  renderError(meta) {
    if(meta.touched && meta.error) {
        return (
            <div className="ui error message">
                <div className="header">{meta.error}</div>
            </div>
        )
    }
}
  
  renderInput = ({label, input, type, meta}) => {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input {...input} type={type}/>
        {this.renderError(meta)}
      </div>
    )
  }
  
  onSubmit = (formValues) => {
    this.props.signIn(formValues);
}
  
  render() {
    if(this.props.isSignedIn) {
      return <Redirect to={'/Profile'}></Redirect>
    }
    return (
      <form onSubmit = {this.props.handleSubmit(this.onSubmit)} className="login-form ui form error">
        <div className="form-inner">
        <h2>LOGIN</h2>
                <Field name="username" component={this.renderInput} label="Username" type="email"/>
                <Field name="password" component={this.renderInput} label="Password" type="password"/>
                <button className="submit-button">Submit</button>
                </div>
      </form>
    )
};
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}

const validate = (formValues) => {
  const errors = {};
  if(!formValues.username) {
      errors.username = "Please enter Username"
  }
  if(!formValues.password) {
      errors.password = "Please enter Password"
  }
  return errors;
}

const formWrapped = reduxForm({
  form: 'login',
  validate
})(Login)

export default connect(mapStateToProps, { signIn })(formWrapped);
