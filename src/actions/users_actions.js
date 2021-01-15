export const ChangeRemainingTime = (props) => {
    return async (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const database = firebase.database();
        //console.log(props)
        database.ref('users/'+props.username+'/'+props.testnumber+'/timeRemaining').set(props.time).then(() => {
            console.log('TIME CHANGED')
            dispatch({type: 'CHANGE_REMAINING_TIME', props});
        }).catch((error) => {
            dispatch({type:'CHANGE_REMAINING_TIME_ERROR', error});
        })
    }
};

