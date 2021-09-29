import React from 'react';

const Friend = (props) => {
      const { name, email, website, address} = props.friend;
      const friendStyle={
            border: '3px solid purple',
            borderRadius: '10px',
            padding: '10px',
            margin: '5px'
      }
      return (
            <div style={friendStyle}>
                  <h2>Name: {name}</h2>
                  <h4>Email: {email}</h4>
                  <h5>Location: {address.city}</h5>
                  <h4>Website: {website}</h4>
            </div>
      );
};

export default Friend;