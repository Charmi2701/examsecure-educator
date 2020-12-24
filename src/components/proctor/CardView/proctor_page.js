import React, { Component } from 'react';
import '../../../styles/proctor_page.css'
import CardList from './card_list.js';
import ESNavbar from '../../nav_bar';
import {connect} from 'react-redux'
import {firebaseConnect, firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { Redirect, withRouter} from "react-router-dom";

class ProctorPage extends Component {
    render() {
        //console.log(this.props);
        const {flaggedData, auth, triggeredUsers} = this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        return (
            <div className="proctor">
                <ESNavbar/>
                <div>
                    <CardList flaggedData={flaggedData} triggeredUsers={triggeredUsers}/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        flaggedData: state.firestore.ordered.flaggedData,
        triggeredUsers: state.firebase.ordered.triggeredUsers,
        auth: state.firebase.auth
    }
}
export default withRouter(compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'flaggedData'}
    ]),
    firebaseConnect([
        'triggeredUsers'
    ])
)(ProctorPage));