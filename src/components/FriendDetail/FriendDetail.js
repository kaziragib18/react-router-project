import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
      const {friendId} = useParams();
      // console.log(friendId);
      const [friend, setFriend] = useState({});
      const history = useHistory();

      useEffect(()=>{
            const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;

            fetch(url)
            .then(res =>res.json())
            .then(data => setFriend(data));
      }, []);

      const handleClicked = () =>{
            history.push('/friends');
      } 

      return (
            <div>
                  <h3>Detail:{friendId}</h3>
                  <h2>{friend.name}</h2>
                  <h4>{friend.email}</h4>
                  <h5>{friend.website}</h5>
                  <h4>Works at: {friend.company?.name}</h4>
                  <button onClick={handleClicked}>See all friends</button>
            </div>
      );
};

export default FriendDetail;