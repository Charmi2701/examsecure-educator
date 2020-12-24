import React from 'react'
import StudentSummary from './student_summary'
import {Link} from 'react-router-dom'
import studentReducer from '../../reducers/studentReducer'

const StudentList = ({students, users}) => {
    //console.log(students)
    return (
        <div>
            {/* {students && students.map(data => {
                return (
                    
                        <StudentSummary data={data} key={data.id}/>
                )
            })} */}
            {users && users.map(data => {
                return (
                    
                        <StudentSummary data={data} key={data.key}/>
                )
            })}
        </div>
    )
}

export default StudentList;