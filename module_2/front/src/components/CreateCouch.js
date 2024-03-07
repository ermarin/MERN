import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateCouch = (props) => {
  const navigate = useNavigate();

  const [couch, setCouch] = useState({
    name: '',
    last_name: '',
    number_phone: '',
    gym_medals: '',
  });

  const onChange = (e) => {
    setCouch({ ...couch, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8082/api/couches', couch)
      .then((res) => {
        setCouch({
          name: '',
          last_name: '',
          number_phone: '',
          gym_medals: '',
        });
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateCouch');
      });
  };

  return (
    <div className='CreateCouch'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-start'>
              Show Couch List
            </Link>
          </div>
          <div className='col-md-10 m-auto'>
            <h1 className='display-4 text-center'>Add Couch</h1>
            <p className='lead text-center'>Create new Couch</p>
            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name of Couch'
                  name='name'
                  className='form-control'
                  value={couch.name}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Last name'
                  name='last_name'
                  className='form-control'
                  value={couch.last_name}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Number phone'
                  name='number_phone'
                  className='form-control'
                  value={couch.number_phone}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Gym medals'
                  name='gym_medals'
                  className='form-control'
                  value={couch.gym_medals}
                  onChange={onChange}
                />
              </div>
              <button
                type='submit'
                className='btn btn-outline-warning btn-block mt-4 mb-4 w-100'
              >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CreateCouch;