  
import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import './userCard.css';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = () => {
    
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          setUsers(response.data);
          console.log(response.data)
        })
        .catch((err) => console.log(err));
    };
    fetchUsers();
  }, []);
  return (
    <div className="my-5">
    
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
   </div>
  );
};

export default UsersList;