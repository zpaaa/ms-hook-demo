import React, {useContext} from 'react'
import ListContext from '../../store/context'
function useChart () {
    const value = useContext(ListContext)
    console.log(value)
    return (<div>chart 分页的接口做统计好像没有意义</div>)
}

export default React.memo(useChart)