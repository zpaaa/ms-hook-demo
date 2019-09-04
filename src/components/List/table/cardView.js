import React from 'react'
import { Card } from 'antd';
function cardView(props) {
  const data = props.data.map(v => ({
    key: v.uid,
    firstName: v.profile.first_name, 
    lastName: v.profile.last_name, 
    avatar: v.profile.image_url,
    npi: v.npi,
    language: v.profile.languages.reduce((prev,curr)=> ( prev + curr.name ), '')
  }))

  return (
      <div className='card-view'>
        {
          data.map(v=>(
            <Card bordered={false} style={{ width: 300, marginBottom: '50px', textAlign: 'center'}} key={v.key}>
              <img src={v.avatar} alt="" className='avatar'/>
              <p>{v.firstName}</p>
              <p>{v.lastName}</p>
              <p>{v.language}</p>
            </Card>
          ))
        }
      </div>)
}
export default React.memo(cardView)