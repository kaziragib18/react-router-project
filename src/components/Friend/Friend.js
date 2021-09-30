import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
      const { name, id, email, website, address} = props.friend;
      const friendStyle={
            border: '3px solid purple',
            borderRadius: '10px',
            padding: '10px',
            margin: '5px'
      }
      // const url = `/friend/${id}`;
      return (
            <div style={friendStyle}>
                  <h2>Name: {name}</h2>
                  <h2>Id: {id}</h2>
                  <h4>Email: {email}</h4>
                  <h5>Location: {address.city}</h5>
                  <h4>Website: {website}</h4>
                  <Link to={`/friend/${id}`}>Visit me</Link>
            </div>
      );
};

export default Friend;