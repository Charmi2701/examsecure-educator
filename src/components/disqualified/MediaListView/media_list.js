import React from 'react'
import MediaSummary from './media_summary'
import {Link} from 'react-router-dom'

const MediaList = ({flaggedData, triggeredUsers}) => {
    //console.log(triggeredUsers)
    const newTriggeredUsers = []
    Object.keys(triggeredUsers.value).forEach(itKey => {
        newTriggeredUsers.push({testnumber:triggeredUsers.key, name:itKey, images:triggeredUsers.value[itKey]})
    })
    return (
        <>
            {/* {flaggedData && flaggedData.map(data => {
                return (
                    
                        <CardSummary data={data} key={data.id}/>
                )
            })} */}
            {/* { triggeredUsers && triggeredUsers.map(data => {
                console.log(data.id)
                return (
                    <ul className='list-unstyled'>
                        <MediaSummary data = {data} key={data.key}/>
                    </ul>
                )
            })
            } */}
            { newTriggeredUsers ? newTriggeredUsers.map(data => {
                return(
                    <MediaSummary data={data.images} key={data.name} name={data.name} testnumber={data.testnumber}/>
                )
            }) : <div>Not found</div>
            }
        </>
    )
}

export default MediaList;