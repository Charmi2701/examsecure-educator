import React from 'react'
import MediaSummary from './media_summary'
import {Link} from 'react-router-dom'

const MediaList = ({flaggedData, triggeredUsers}) => {
    return (
        <>
            {/* {flaggedData && flaggedData.map(data => {
                return (
                    
                        <CardSummary data={data} key={data.id}/>
                )
            })} */}
            { triggeredUsers && triggeredUsers.map(data => {
                console.log(data.id)
                return (
                    <ul className='list-unstyled'>
                        <MediaSummary data = {data} key={data.key}/>
                    </ul>
                )
            })
            }
        </>
    )
}

export default MediaList;