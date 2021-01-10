import React from 'react'
import CardSummary from './card_summary'
import {Link} from 'react-router-dom'

const CardList = ({flaggedData, triggeredUsers}) => {
    //console.log(triggeredUsers)
    const newTriggeredUsers = []
    Object.keys(triggeredUsers.value).forEach(itKey => {
        newTriggeredUsers.push({testnumber:triggeredUsers.key, name:itKey, images:triggeredUsers.value[itKey]})
    })
    //console.log(newTriggeredUsers)
    return (
        <div className="cardlist">
            {/* {flaggedData && flaggedData.map(data => {
                return (
                    
                        <CardSummary data={data} key={data.id}/>
                )
            })} */}
            { newTriggeredUsers ? newTriggeredUsers.map(data => {
                return(
                    <CardSummary data={data.images} key={data.name} name={data.name} testnumber={data.testnumber}/>
                )
            }) : <div>Not found</div>
            }
            
        </div>
    )
}

export default CardList;