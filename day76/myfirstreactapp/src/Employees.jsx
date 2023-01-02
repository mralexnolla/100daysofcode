import React, {useState} from 'react';
 import femaleProfile from './images/femaleProfile.jpg';
 import maleProfile from './images/maleProfile.jpg';

const Employees = () => {
    const [selectedTeam, setTeam] = useState("TeamB")

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
        fullName: "Alex #thankU4Ex16",
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

      const handleTeamSelectionChange = (event) => {
        setTeam(event.target.value)
      };

      const handleEmployeeCardClick = (event) => {
        const transformEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id) 
            ? (employee.teamName === selectedTeam) ? {...employee, teamName:''} : {...employee, teamName:selectedTeam} 
            : employee);

        setEmployees(transformEmployees);
      }
   
    return(
        <main className="container">

            {/** This is a dropdown list containing the teams, its hard coded here but should be retrieved from a db in an ideal case */}
            
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
                        <option selected>The Teams </option>
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
                </div>
            </div>
           
            {/* This row is the bofy with the different team members */}

             <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                        {
                            employees.map((employee) => (
                                <div id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{ cursor: "pointer"}} onClick={handleEmployeeCardClick}>
                                    {
                                      (employee.gender === 'male') ? <img alt="" src={maleProfile} className="card-img-top" /> : <img alt="" src={femaleProfile} className="card-img-top" /> 
                                    }
                                    
                                    
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