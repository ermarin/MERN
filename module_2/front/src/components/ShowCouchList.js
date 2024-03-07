import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import CouchCard from './CouchCard';

function ShowCouchList() {
  const [couches, setCouches] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/couches')
      .then((res) => {
        setCouches(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowCouchList');
      });
  }, []);

  const couchList = couches.length === 0
    ? 'There is no couch record!'
    : couches.map((couch, k) => <CouchCard couch={couch} key={k} />);

  const csvData = [
    ['ID', 'Name', 'Last Name', 'Phone', 'Gym Medals'],
    ...couches?.map((couch, c) => [
      couch._id,
      couch.name,
      couch.last_name,
      couch.number_phone,
      couch.gym_medals,
    ]),
  ];

  return (
    <div className='ShowCouchList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Couches List</h2>
          </div>
          <div className='col-md-11'>
            <Link
              to='/create-couch'
              className='btn btn-outline-warning float-start'
            >
              + Add New Couch
            </Link>
            <CSVLink
              className='btn btn-outline-warning float-end'
              filename='file-coach.csv'
              data={csvData}
            >
              Export file CSV
            </CSVLink>
            <br />
            <br />
            <hr />
          </div>
        </div>
        <div className='list'>{couchList}</div>
      </div>
    </div>
  );
}

export default ShowCouchList;