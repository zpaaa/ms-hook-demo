import React, {useContext, useState} from 'react'
import ListContext from '../../../store/context'
import { Radio, Input, Pagination } from 'antd'
import ListView from './listView'
import CardView from './cardView'
import { getListData } from '../../../store/reduce'
import './index.css'
const { Search } = Input;
function useTable () {
  const value = useContext(ListContext)
  console.log(value)
  const [type, setType] = useState('card')
  const [keyWord, setKeyWord] = useState('')
  const { isLoading, listData, limit, skip } = value.state
  const currPage = skip/limit + 1
  const inputReg = new RegExp(`(.*)(${keyWord.split('').join(')(.*)(')})(.*)`, 'i')
  const  filterData= isLoading? [] : keyWord ? listData.data.filter(v => (v.profile.first_name.match(inputReg) || v.profile.last_name.match(inputReg))) : listData.data
  console.log(value)
  return (
    <div className="tabel">
      <div className="head">
          <p>医生名单</p>
          <Radio.Group onChange={(e)=>setType(e.target.value)} value={type}>
              <Radio value='card'>切换卡片</Radio>
              <Radio value='list'>切换列表</Radio>
          </Radio.Group>
          <Search
              placeholder="input search text"
              onSearch={value => setKeyWord(value)}
              style={{ width: 200 }}
          />
          {listData && <Pagination current={currPage} total={listData.meta.total} onChange={v => getListData(value.dispatch, (v-1)*limit, limit)}/>}
      </div>
      {
        isLoading ? 
          '加载中。。。' : type==='list' ?
              <ListView data={filterData}></ListView> : <CardView data={filterData}></CardView>
      }
    </div>)
}

export default React.memo(useTable)