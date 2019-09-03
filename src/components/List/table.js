import React, {useContext} from 'react'
import ListContext from '../../store/context'
// import { Button } from 'antd'

function useTable () {
    const value = useContext(ListContext)
    console.log(value)
    return (<div>
        list
    </div>)
}

export default React.memo(useTable)