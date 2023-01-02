
import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Employees from './Employees';

function App() {

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

  return (
    <div className="App">
      <header className="App-header">
        
          <Header selectedTeam={selectedTeam}
                  teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
          />
         <Employees employees={employees}
                    selectedTeam={selectedTeam}
                    handleEmployeeCardClick={handleEmployeeCardClick}
                    handleTeamSelectionChange={handleTeamSelectionChange}
         />
          <Footer />
          
         
      </header>
    </div>
  );
}

export default App;
