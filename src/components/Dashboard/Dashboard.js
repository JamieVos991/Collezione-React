import React from 'react'
import { Link } from 'react-router-dom';
import "./Dashboard.scss";
import JSONDATA from '../../Data/DataShoes.json';
import { useState } from 'react';

function Dashboard() {
    const [searchTerm, setSearchTerm] = useState('')

  return (
    <section className="dashboard">
    <div className="container__dashboard">
        <div className="left__side">

        </div>
        <div className="right__side">
            <div className="container__upper">
            <Link to="/"><i class="icons__db fa-solid fa-right-left"></i></Link>
            </div>

            {JSONDATA.filter((val) => {
                    if(searchTerm == ""){
                        return val 
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                }).map((val, key) => {
                    return <div key={key} className="product__info" style={{backgroundImage: `url(${val.picture})`}} />
                })}
        </div>
    </div>
    </section>
  )
}

export default Dashboard