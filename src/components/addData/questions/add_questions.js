import React, { Component } from 'react'
//import axios from 'axios';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {uploadQuestions} from '../../../actions/questions_actions'
import { uploadQuestionSet } from "../../../actions/question_set_actions";
import ESNavbar from '../../nav_bar'
import '../../../styles/add_questions.css'
import { Button, Form, Modal } from 'react-bootstrap'
import {compose} from 'redux'
import { firebaseConnect } from 'react-redux-firebase'

function AddQuestionSet(props) {
    //console.log(props);
    const [testName, setTestName] = React.useState('')
    const [testDuration, setTestDuration] = React.useState('0')
    const qSetID = props.questionSets ?
        String(Number(Object.keys(props.questionSets).slice(-1)[0])+1)
        : 0
    //console.log(qSetID)
    return (
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Question Set
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Enter question set name</h4>
          <input type="text" className="form-control" id="testname" rows="1" onChange={(e) => {setTestName(e.target.value)}} value={testName}/>
          <h4>Enter duration</h4>
          <input type="text" className="form-control" id="duration" rows="1" onChange={(e) => {setTestDuration(e.target.value)}} value={testDuration}/>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={() => {
                props.uploadQuestionSet({qSetID: qSetID, qSetName: testName,  duration: testDuration})
                setTestName('')
                setTestDuration('')
            }}>Submit</Button>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

class AddQuestions extends Component {
    state = {
        testname:'1',
        qID: '',
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        answer: '1',
        duration: '0',
        modalShow: false
    }
    handleChange = (e) => {
        //console.log(this.props)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleChangeNew = (e) => {
        //console.log(e.target.value[0])
        this.setState({
            [e.target.id]: e.target.value[0]
        })
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        const selectedTest = String(Number(this.state.testname)-1);
        const qID = this.props.questions ?
            this.props.questions[selectedTest] ?
                this.props.questions[selectedTest].value ?
                    String(Number(Object.keys(this.props.questions[selectedTest].value).slice(-1)[0]) + 1) 
                    : 0
                : 0
            : 0
        //console.log(qID)
        this.setState({
            qID: qID
        })
        //console.log(this.state);
        this.props.uploadQuestions({...this.state, qID: qID})
        this.setState({
            question: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            answer: '1',
        })
    }
    render() {
        const {auth, questionSets} = this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        //console.log(questionSets)
        return(
            <>
            <div className="container">
                <div className="sticky-top">
                <ESNavbar />
                </div>
                <div className="container w-75 h-75">
                    <div className="mx-auto py-5 px-5 border mt-5">
                        <h1 className="mb-3">Adding Questions</h1>
                        <Form onSubmit={this.onSubmit}>
                            <div className="form-group px-5">
                            <label htmlFor="exampleFormControlSelect1">Select Test Set</label>
                                <select className="form-control" id="testname" onChange={this.handleChangeNew.bind(this)}>
                                    {questionSets && questionSets.map(data => {
                                        return (
                                            <option key={data.key}>{data.value.qSetID} - {data.value.qSetName}</option>
                                        )
                                    })}
                                </select>
                                {/* <p className="mt-1"><a href="/">Create New Test? Click Here</a></p> */}
                                <Button variant="link" onClick={() => this.setState({modalShow:true})}>
                                    Create New Test? Click Here
                                </Button>
                            </div>
                            <div className="form-group px-5">
                                <label htmlFor="exampleFormControlTextarea1">Enter Question</label>
                                <textarea className="form-control" id="question" rows="3" onChange={this.handleChange} value={this.state.question}></textarea>
                            </div>
                            <div className="form-group px-5">
                                <label htmlFor="exampleFormControlTextarea1">Option 1</label>
                                <input type="text" className="form-control" id="option1" rows="1" onChange={this.handleChange} value={this.state.option1}></input>
                            </div>
                            <div className="form-group px-5">
                                <label htmlFor="exampleFormControlTextarea1">Option 2</label>
                                <input type="text" className="form-control" id="option2" rows="1" onChange={this.handleChange} value={this.state.option2}></input>
                            </div>
                            <div className="form-group px-5">
                                <label htmlFor="exampleFormControlTextarea1">Option 3</label>
                                <input type="text" className="form-control" id="option3" rows="1" onChange={this.handleChange} value={this.state.option3}></input>
                            </div>
                            <div className="form-group px-5">
                                <label htmlFor="exampleFormControlTextarea1">Option 4</label>
                                <input type="text" className="form-control" id="option4" rows="1" onChange={this.handleChange} value={this.state.option4}></input>
                            </div>
                            <div className="form-group px-5">
                            <label htmlFor="exampleFormControlSelect1">Select Correct Option</label>
                                <select className="form-control" id="answer" onChange={this.handleChange.bind(this)}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>

                                </select>
                            </div>
                            <button className="btn btn-primary mx-5 submit-button">Submit</button>
                        </Form>
                    </div>
                </div>
                
            </div>
            <AddQuestionSet
                questionSets={questionSets}
                show={this.state.modalShow}
                uploadQuestionSet={this.props.uploadQuestionSet}
                onHide={() => this.setState({modalShow:false})}
                
            />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        questionSets: state.firebase.ordered.questionSets,
        questions: state.firebase.ordered.questions,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        uploadQuestions: (uploadQuestion) => dispatch(uploadQuestions(uploadQuestion)),
        uploadQuestionSet: (uploadingQuestionSet) => dispatch(uploadQuestionSet(uploadingQuestionSet))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firebaseConnect([
        'questionSets',
        'questions',
    ])
)(AddQuestions);