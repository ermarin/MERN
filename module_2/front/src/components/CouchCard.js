import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const CouchCard = ({couch}) => {

  return (
    <div className='card-container'>
      <div className='desc'>
        <h2>
          <Link to={`/show-couch/${couch._id}`}>{couch.name}</Link>
        </h2>
        <h3>{couch.last_name}</h3>
      </div>
    </div>
  );
};

export default CouchCard;