import React from 'react';

function Feature(props) {
  return (
    <div className="about">
        <i className={props.i}></i>
        <p> {props.p} </p>
    </div>
  )
}

export default Feature