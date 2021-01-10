import React, { Component, useState } from 'react';
import '../../../styles/proctor_page.css'
import CardList from './card_list.js';
import ESNavbar from '../../nav_bar';
import {connect} from 'react-redux'
import {firebaseConnect, firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { Redirect, withRouter} from "react-router-dom";
import { Pagination, Button } from 'react-bootstrap';
import {BsFillGrid3X2GapFill, BsList} from 'react-icons/bs'
class ProctorPage extends Component {
    state = {
        activeView: 1,
    }

    render() {
        //console.log(this.props);
        const {flaggedData, auth, triggeredUsers} = this.props;
        //console.log(triggeredUsers)
        if(!auth.uid) return <Redirect to='/signin'/>
        return (
            <div className="proctor">
                <ESNavbar/>
                <div className="container pagination">
                    <Button variant={this.state.activeView === 1 ? "outline-secondary":"secondary"} disabled={this.state.activeView === 1} className="viewChangeButton" onClick={() => {this.setState({activeView:1})}} > <BsFillGrid3X2GapFill/> Card View</Button>
                    <Button variant={this.state.activeView === 2 ? "outline-secondary":"secondary"} disabled={this.state.activeView === 2} className="viewChangeButton" onClick={() => {this.setState({activeView:2})}}><BsList/> List View</Button>
                </div>
                {/*console.log(triggeredUsers)*/}
                <div>                    
                    {/* { triggeredUsers && triggeredUsers.map(data => {
                        //console.log(data)
                        return (
                            <CardList triggeredUsers = {data} key={data.key}/>
                        )
                      })
                    }    */}
                    {/* <CardList flaggedData={flaggedData} triggeredUsers={triggeredUsers}/> */}
                </div>
                <div className="container">
                    {this.state.activeView === 1 ?
                        triggeredUsers && triggeredUsers.map(data => {
                            //console.log(data)
                            return (
                                <CardList triggeredUsers = {data} key={data.key}/>
                            )
                          })
                        : null
                    }
                    {this.state.activeView === 2 ?
                        <div>List View </div>
                        : null
                    }
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    //console.log(state);
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