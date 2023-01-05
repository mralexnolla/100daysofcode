import React from 'react';

 import TeamMembers from './TeamMembers';
 import Teams from './Teams';

const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) => {
    
    return(
        <main className="container">

            {/** This is a dropdown list containing the teams, its hard coded here but should be retrieved from a db in an ideal case */}
            
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} />
                </div>
            </div>
           
            {/* This row is the bofy with the different team members */}

             <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                            <TeamMembers employees={employees} 
                                         handleEmployeeCardClick={handleEmployeeCardClick}
                                         selectedTeam={selectedTeam}/>
                        
                    </div>
                </div>
             </div>

        </main>
        
    )
}

export default Employees;