import React, {useContext} from 'react'
import ListContext from '../../store/context'
function useChart () {
    const value = useContext(ListContext)
    console.log(value)
    return (<div>chart</div>)
}

export default React.memo(useChart)