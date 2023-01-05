
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Employees from './Employees';
import GroupedTeamMembers from './GroupedTeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';

function App() {

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB")

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{
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
    }]);

    /* 
      The useEffect will run only when the state of [employees] changes.
      When the state changes we are updating the employees array in the 
      local storage
     */
    useEffect(() => {
    
      localStorage.setItem('employeeList',JSON.stringify(employees))
      

    },[employees]);

    useEffect(() => {
    
      localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam))

    },[selectedTeam]);

    /**------------------------- */

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
        
          <Router>
              <Nav />

              <Header selectedTeam={selectedTeam}
                      teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
              />

              <Routes>
                <Route path = "/"
                    element={
                      <Employees employees={employees}
                                 selectedTeam={selectedTeam}
                                 handleEmployeeCardClick={handleEmployeeCardClick}
                                 handleTeamSelectionChange={handleTeamSelectionChange}/>
                    }>   

                </Route>
                <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers employees = {employees} 
                                                                               selectedTeam = {selectedTeam} 
                                                                               setTeam = {setTeam} />
                                                           }>
                </Route>
                <Route path="*" element={<NotFound/>}></Route>
              </Routes>
              
              <Footer />
          </Router>
         
      </header>
    </div>
  );
}

export default App;
