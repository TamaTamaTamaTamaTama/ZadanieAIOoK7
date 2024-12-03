import React from 'react';


export default function Student(props) {
  
  return (
    <>Name: {props.student.name}, Surname: {props.student.surname}, Date of birth: {props.student.dateOfBirth}, index: {props.student.index}</>
  );
}
