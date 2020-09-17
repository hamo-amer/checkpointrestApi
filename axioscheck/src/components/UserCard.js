import React from "react";
import  './userCard.css';


const UserCard = ({ user }) => {
    const Name= user.name;

  return (
   <div className="profil">
       <h1>{Name[0]}</h1>
       <div>
       <h3>Name:{Name}</h3>
       <p>Company:{user.company.name}</p>
       </div>
   </div>
  );
};

export default UserCard;