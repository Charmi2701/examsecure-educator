import React, { Component } from 'react';
import MediaList from './media_list.js';
import ESNavbar from '../../nav_bar';
import {connect} from 'react-redux'
import {firebaseConnect, firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { Redirect, withRouter} from "react-router-dom";

class ProctorPageList extends Component {
    render() {
        //console.log(this.props);
        const {flaggedData, auth, triggeredUsers} = this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        return (
            <div>
                <ESNavbar/>
                <div>
                    <MediaList flaggedData={flaggedData} triggeredUsers={triggeredUsers}/>
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
)(ProctorPageList));