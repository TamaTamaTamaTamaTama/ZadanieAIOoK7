import React from 'react';
import './style.css';
import Student from './Student';


export default function Students() {

const students = [
    {
      name: 'Robert',
      surname: 'Kubica',
      dateOfBirth: '12-16-1775',
      index: '002233'
    },
    
    {
        name: 'Eugene',
        surname: 'Ryba',
        dateOfBirth: '12-16-1675',
        index: '101233'
      },

    {
      name: 'Krystian',
      surname: 'Ronaldo',
      dateOfBirth: '12-16-2000',
      index: '001103'
    } ];

  return (
    <div>
      <h1>Students:</h1>
      <ul>
        {students.map(el=><li><Student student={el}/></li>)}
      </ul>
    </div>
  );
}
