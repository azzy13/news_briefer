import React, { Fragment, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import firebase from 'firebase/app';
import { Redirect } from 'react-router-dom';
import UserContext from '../../config/UserContext';

const Register = () => {
  const context = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid });
      })
      .catch((error) => {
        console.log(error);
        toast(error.message, {
          type: 'error',
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  if (context.user?.uid) {
    return <Redirect to='/news_briefer' />;
  }
  return (
    <Fragment>
      <div className='section'></div>

      <h5 className='indigo-text'>Sign up for an account</h5>
      <div className='section'></div>

      <div className='container'>
        <div className='z-depth-1 grey lighten-4 row'>
          <form className='col s12' method='post' onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col s12'></div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='provide your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='your password here'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <br />
            <center>
              <div className='row'>
                <button
                  type='submit'
                  name='btn_login'
                  className='col s12 btn btn-large waves-effect indigo'
                >
                  Register Account
                </button>
              </div>
            </center>
          </form>
        </div>
      </div>
      <p>
        Have an account already? <a href='/news_briefer/login'>Login Here</a>{' '}
      </p>
    </Fragment>
  );
};

export default Register;
