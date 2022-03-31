import React, { useState } from 'react';
import classes from './AuthForm.module.css';
import { Twitter, Google, Facebook } from 'react-bootstrap-icons';

function AuthForm() {
  const [login, setlogin] = useState(true);

  const formsubmithandler = (e) => {
    e.preventDefault();
    console.log('Submit');
    //fetch request
  };

  const formtogglehandler = (e) => {
    e.preventDefault();
    setlogin((state) => !state);
    window.scrollTo(0, 0);
  };

  const FormHeader = (props) => (
    <h2 className={classes.headerTitle}>{props.title}</h2>
  );

  const Form = (props) => (
    <div>
      {!login && (
        <FormInput
          description="Email"
          placeholder="Enter your email"
          type="email"
        />
      )}
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
      {!login && (
        <FormInput
          description="Confirm Password"
          placeholder="Enter password again"
          type="password"
        />
      )}
      <FormButton
        onclickhandler={formsubmithandler}
        title={login ? 'Login' : 'SignUp'}
      />
    </div>
  );

  const FormButton = (props) => (
    <div className={classes.button} className={classes.row}>
      <button onClick={props.onclickhandler}>{props.title}</button>
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
        <Face />
        <Tweet />
        <Goog />
      </div>
    </div>
  );

  const Face = (props) => (
    <a href="#" className={classes.facebookIcon}>
      <Facebook />
    </a>
  );

  const Tweet = (props) => (
    <a href="#" className={classes.twitterIcon}>
      <Twitter />
    </a>
  );

  const Goog = (props) => (
    <a href="#" className={classes.googleIcon}>
      <Google />
    </a>
  );
  return (
    <div className={classes.loginform}>
      <FormHeader title={login ? 'Login' : 'SignUp'} />
      <Form />
      <OtherMethods />
      <div className={classes.alternativeLogin}>
        <label>{login ? 'New User?' : 'Existing user?'}</label>
      </div>
      <FormButton
        onclickhandler={formtogglehandler}
        title={!login ? 'Login' : 'SignUp'}
      />
    </div>
  );
}

export default AuthForm;
