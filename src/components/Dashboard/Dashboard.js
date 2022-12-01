import React from 'react'
import { Link } from 'react-router-dom';
import "./Dashboard.scss";
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
        </div>
    </div>
    </section>
  )
}

export default Dashboard