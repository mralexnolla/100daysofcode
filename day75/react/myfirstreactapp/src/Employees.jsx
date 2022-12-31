import React, {useState} from 'react';
 import femaleProfile from './images/femaleProfile.jpg';
// import maleProfile from './images/maleProfile.jpg';

const Employees = () => {

    const [employees, setEmployees] = useState([{
        id: 1,
        fullName: "Kwassi Adu Bediako",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
      },
      {
        id: 2,
        fullName: "Catherine Okang Boye",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 3,
        fullName: "Emmanuel Darkwa Ampadu",
        designation: "Java Developer",
        gender: "male",
        teamName: "TeamA"
      },
      {
        id: 4,
        fullName: "Faisal Salif",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 5,
        fullName: "Sampson Darko",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 6,
        fullName: "Sylvia Dugah",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
      },
      {
        id: 7,
        fullName: "Victoria Obeng",
        designation: "Angular Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 8,
        fullName: "Code Train",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 9,
        fullName: "Mary Jimoh",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 10,
        fullName: "Tony CodeTrain",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 11,
        fullName: "Alex Nolla",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
      }])
   
    return(
        <main clasName="container">
             <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                        {
                            employees.map((employee) => (
                                <div id={employee.id} className="card m-2">
                                    <img alt="" src={femaleProfile} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">Full Name: {employee.fullName}</h5>
                                        <p className="card-text">Designation: {employee.designation} </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
             </div>
        </main>
        
    )
}

export default Employees;