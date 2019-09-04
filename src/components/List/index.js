import React, {useReducer, useEffect} from 'react'
import Chart from './chart'
import Table from './table/index'
import ListContext from '../../store/context'
import { reducer, initState, getListData } from '../../store/reduce'
import { Route, Switch, Redirect } from 'react-router-dom'
import Tabbar from '../Tabbar'
import { Layout } from 'antd';
import './index.css'
const { Sider, Content } = Layout;
function useList () {
  const [state, dispatch] = useReducer(reducer, initState)
  const contextState = {
    state,
    dispatch
  }

  useEffect(()=>{
    if (state.isLoading) getListData(dispatch, state.skip, state.limit)
  },[state.isLoading, state.skip, state.limit])

  return (
    <div className="app-container">
      <ListContext.Provider value={contextState}>
        <Layout>
          <Sider>
            <Tabbar></Tabbar>
          </Sider>
          <Content style={{ padding: '24px 16px 0',minHeight: '100vh',boxSizing: "border-box" }}>
            <Switch>
              <Route path="/" exact component={Table}></Route>
              <Route path="/chart" exact component={Chart}></Route>
              <Redirect to="/404"></Redirect>
            </Switch>
          </Content>
        </Layout>
                
      </ListContext.Provider>
    </div>)
}
export default React.memo(useList)