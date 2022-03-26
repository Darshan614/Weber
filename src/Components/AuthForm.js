import React from 'react';
import classes from './AuthForm.module.css';

function AuthForm() {
  const FormHeader = (props) => (
    <h2 className={classes.headerTitle}>{props.title}</h2>
  );

  const Form = (props) => (
    <div>
      <FormInput
        description="Username"
        placeholder="Enter your username"
        type="text"
      />
      <FormInput
        description="Password"
        placeholder="Enter your password"
        type="password"
      />
      <FormButton title="Log in" />
    </div>
  );

  const FormButton = (props) => (
    <div className={classes.button} className={classes.row}>
      <button>{props.title}</button>
    </div>
  );

  const FormInput = (props) => (
    <div className={classes.row}>
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );

  const OtherMethods = (props) => (
    <div className={classes.alternativeLogin}>
      <label>Or sign in with:</label>
      <div className={classes.iconGroup}>
        <Facebook />
        <Twitter />
        <Google />
      </div>
    </div>
  );

  const Facebook = (props) => (
    <a href="#" className={classes.facebookIcon}>
      f
    </a>
  );

  const Twitter = (props) => (
    <a href="#" className={classes.twitterIcon}>
      t
    </a>
  );

  const Google = (props) => (
    <a href="#" className={classes.googleIcon}>
      G
    </a>
  );
  return (
    <div className={classes.loginform}>
      <FormHeader title="Login" />
      <Form />
      <OtherMethods />
    </div>
  );
}

export default AuthForm;
