import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowCouchDetails() {
  const [couch, setCouch] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/couches/${id}`)
      .then((res) => {
        setCouch(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowCouchDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
    .delete(`http://localhost:8082/api/couches/${id}`)
    .then((res) => {
      navigate('/');
    })
    .catch((err) => {
      console.log('Error from ShowCouchDetails_deleteClick');
    });
  };

  const CouchItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{couch.name}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Last Name</td>
            <td>{couch.last_name}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Phone Number</td>
            <td>{couch.number_phone}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Gym Medals</td>
            <td>{couch.gym_medals}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowCouchDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-start'>
              Show Couch List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Couches Record</h1>
            <p className='lead text-center'>View Couches Info</p>
            <hr /><br />
          </div>
          <div className='col-md-10 m-auto'>{CouchItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(couch._id);
              }}
            >
              Delete Couch
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-couch/${couch._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Couch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCouchDetails;