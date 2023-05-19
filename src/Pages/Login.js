import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIfLogin } from '../Helpers/actions';
import "./Login.scss";

function Login({ setIfLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (username === '1' && password === '1') {
      localStorage.setItem("isLoggedIn", true);
      setIfLogin(true);
      navigate('/Collezione');
    } else {
      alert('Wrong username or password');
    }
  }

  function checkIfLoggedIn() {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIfLogin(true);
      navigate('/Collezione');
    }
  }

  return (
    <section className='login__section'>
      <form onSubmit={handleSubmit}>
        <div className='login'>
        <label className='gap'>
          Username
          <input className='inputasd' type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <br />
        <label className='gap'>
          Password
          <input className='inputasd' type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        </div>
        <br />
        <button className='buttonasd' type="submit">Login</button>
      </form>
    </section>
  );
}

export default connect(null, { setIfLogin })(Login);