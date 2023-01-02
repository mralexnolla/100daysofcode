
 import femaleProfile from './images/femaleProfile.jpg';
 import maleProfile from './images/maleProfile.jpg';

const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) => {
    
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