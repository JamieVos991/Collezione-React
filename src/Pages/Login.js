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

  function handleSubmit(e) {
    e.preventDefault();
    if (username === '1' && password === '1') {
      localStorage.setItem("isLoggedIn", true);
      setIfLogin(true);
      navigate('/Homepage2');
    } else {
      alert('Invalid username or password');
    }
  }

  function checkIfLoggedIn() {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIfLogin(true);
      navigate('/Homepage2');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default connect(null, { setIfLogin })(Login);