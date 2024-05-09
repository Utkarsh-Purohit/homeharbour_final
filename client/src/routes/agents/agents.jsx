import React from 'react';
import './agents.scss';

// Import individual agent images
import noAvatarImage from '../../../public/noavatar.jpg';
// import broker2 from '../../../public/broker2.jpg';
import utkarsh1 from '../../../public/utkarsh1.jpg';
import parth from '../../../public/parth.jpg';
import darpan from '../../../public/darpan.jpg';

const agentsData = [
  {
    name: 'Utkarsh Purohit',
    phoneNumber: '9406666305',
    email: 'utkarsh@gmail.com',
    experience: '5 years',
    image: utkarsh1,
  },
  {
    name: 'Parth Kumar Singh',
    phoneNumber: '9313614293',
    email: 'parth@gmail.com',
    experience: '6 years',
    image: parth,
  },
  {
    name: 'Darpan Mehta',
    phoneNumber: '9426837032',
    email: 'darpan@gmail.com',
    experience: '5 years',
    image: darpan,
  },
  {  
    name: 'Samhit Mantrala',
    phoneNumber: '9346019767',
    email: 'samhit@gmail.com',
    experience: '4 years',
    image: noAvatarImage,
  },
//   {
//     name: 'Nikhil Chaudhary',
//     phoneNumber: '9426845672',
//     email: 'nikhil@gmail.com',
//     experience: '1 years',
//     image: broker1,
//   },
  {
    name: 'Mbappe Singh',
    phoneNumber: '12345',
    email: 'mpp@gmail.com',
    experience: '2 years',
    image: noAvatarImage,
  },

];

const Agents = () => {
  return (
    <div>
    <div className="main-container">
              <h1>Our Top Real-Estate Agents</h1>
      <p className="description">Meet our top-performing agents who are dedicated to helping you find your dream home.</p>
    </div>

    <div className="agents-container">
      {agentsData.map((agent, index) => (
        <div className="agent-card" key={index}>
          <img src={agent.image} alt={`Agent ${index + 1}`} className="agent-image" />
          <h2>{agent.name}</h2>
          <p>Phone:  {agent.phoneNumber}</p>
          <p>Email:  {agent.email}</p>
          <p>Experience:  {agent.experience}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Agents;
