import React from 'react'
import CardSummary from './card_summary'
import {Link} from 'react-router-dom'

const CardList = ({flaggedData, triggeredUsers}) => {
    return (
        <div className="cardlist">
            {/* {flaggedData && flaggedData.map(data => {
                return (
                    
                        <CardSummary data={data} key={data.id}/>
                )
            })} */}
            { triggeredUsers && triggeredUsers.map(data => {
                console.log(data.id)
                return (
                    <CardSummary data = {data} key={data.key}/>
                )
            })
            }
        </div>
    )
}

export default CardList;