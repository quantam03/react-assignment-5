import React, { createContext, useState } from "react";

export const studentsContext= createContext();

export const StudentProvider = (props) => {

    let [students, setStudents] = useState([
        {
            id:'1',
            name:'Vaibhav',
            age:'26',
            course:'MERN',
            batch:'October',
          
        },
        {
            id:'2',
            name:'Raj',
            age:'27',
            course:'MEAN',
            batch:'November',
            
        },
        {
            id:'3',
            name:'Riya',
            age:'28',
            course:'MEAN',
            batch:'December',
            
        },
        {
            id:'4',
            name:'Hoody',
            age:'21',
            course:'MERN',
            batch:'January',
          
        },
        {
            id:'5',
            name:'Cook',
            age:'25',
            course:'MERN',
            batch:'September',
           
        },
        
    ]
);

    const addStudent = (data) =>{
        setStudents([...students,data])
    }


    return(
        <>
        <studentsContext.Provider value={[students, addStudent]}>
            {props.children}
        </studentsContext.Provider>
        </>
    )
}