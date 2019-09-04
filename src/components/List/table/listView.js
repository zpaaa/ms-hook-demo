import React from 'react'
import { Table } from 'antd';
function listView(props) {
  const data = props.data.map(v => ({
    key: v.uid,
    firstName: v.profile.first_name, 
    lastName: v.profile.last_name, 
    npi: v.npi,
    language: v.profile.languages.reduce((prev,curr)=> ( prev + curr.name ), '')
  }))
  const columns = [
    {
      title: 'FirstName',
      dataIndex: 'firstName',
      key: 'firstName'
    },
    {
      title: 'LastName',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'PhoneNumber',
      dataIndex: 'npi',
      key: 'npi',
    },
    {
      title: 'Language',
      dataIndex: 'language',
      key: 'language',
    }
  ]

  return ( <Table rowKey={record=>record.key} columns={columns} dataSource={data} pagination={false}/> )
}
export default React.memo(listView)