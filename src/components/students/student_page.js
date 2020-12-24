import React, { Component } from 'react';
import '../../styles/student_page.css'
import ESNavbar from '../nav_bar';
import {connect} from 'react-redux'
import {firestoreConnect, firebaseConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { Redirect} from "react-router-dom";
import StudentList from './student_list'

class StudentPage extends Component {
    render() {
        //console.log(this.props);
        const {students, users, auth} = this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        return (
            <>
            <ESNavbar/>
            <div className="studentlist">
                <div>
                    <div>
                        <h1>Student Details Page</h1>
                    </div>
                    <div>
                        <StudentList students={students} users={users}/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        students: state.firestore.ordered.students,
        users: state.firebase.ordered.users,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'students'}
    ]),
    firebaseConnect([
        'users'
    ])
)(StudentPage);