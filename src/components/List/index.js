import React, {useReducer, useEffect} from 'react'
import Chart from './chart'
import Table from './table'
import ListContext from '../../store/context'
import { reducer, initState, getListData } from '../../store/reduce'
import { Route, Switch, Redirect } from 'react-router-dom'
import Tabbar from '../Tabbar'
import './index.css'
function useList () {
  const [state, dispatch] = useReducer(reducer, initState)
  const contextState = {
    state,
    dispatch
  }

  useEffect(()=>{
    if (state.isLoading) getListData(dispatch)
  },[state.isLoading])

  return (
    <div className="app-container">
      <ListContext.Provider value={contextState}>
        <div className="tabber-view">
          <Tabbar></Tabbar>
        </div>
        <div className="router-view">
          <Switch>
            <Route path="/" exact component={Table}></Route>
            <Route path="/chart" exact component={Chart}></Route>
            <Redirect to="/404"></Redirect>
          </Switch>
        </div>
      </ListContext.Provider>
    </div>)
}
export default React.memo(useList)