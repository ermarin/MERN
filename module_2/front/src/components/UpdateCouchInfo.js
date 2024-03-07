import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateCouchInfo(props) {
  const [couch, setCouch] = useState({
    name: '',
    last_name: '',
    number_phone: '',
    gym_medals: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/couches/${id}`)
      .then((res) => {
        setCouch({
          name: res.data.name,
          last_name: res.data.last_name,
          number_phone: res.data.number_phone,
          gym_medals: res.data.gym_medals,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateCouchInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setCouch({ ...couch, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: couch.name,
      last_name: couch.last_name,
      number_phone: couch.number_phone,
      gym_medals: couch.gym_medals,
    };

    axios
      .put(`http://localhost:8082/api/couches/${id}`, data)
      .then((res) => {
        navigate(`/show-couch/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateCouchInfo');
      });
  };

  return (
    <div className='UpdateCouchInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-start'>
              Show Couch List
            </Link>
          </div>
          <div className='cold-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Couch</h1>
            <p className='lead text-center'>Update Couch Info</p>
          </div>
        </div>
        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                placeholder='Name of the Couch'
                name='name'
                className='form-control'
                value={couch.name}
                onChange={onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='last_name'>Last Name</label>
              <input
                type='text'
                placeholder='Last Name of the Couch'
                name='last_name'
                className='form-control'
                value={couch.last_name}
                onChange={onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='number_phone'>Phone Number</label>
              <input
                type='text'
                placeholder='Phone Number of the Couch'
                name='number_phone'
                className='form-control'
                value={couch.number_phone}
                onChange={onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='gym_medals'>Gym Medals</label>
              <input
                type='text'
                placeholder='Gym Medals of the Couch'
                name='gym_medals'
                className='form-control'
                value={couch.gym_medals}
                onChange={onChange}
              />
            </div>
            <br />
            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Couch
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateCouchInfo;