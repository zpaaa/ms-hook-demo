import { getLists } from '../api/list'
export const initState = {isLoading: true}

export function reducer(state, action) {
	switch(action.type) {
		case 'loadList':
				return {...state, isLoading: true};
		case 'getList': 
				return { isLoading: false, listData: action.payload };
		default:
				return state
	}
}

export function getList (data) {
	return { type: 'getList', payload: data }
}

export function LoadList (data) {
	return { type: 'loadList', payload: data }
}

export async function getListData (dispatch) {
	dispatch(LoadList())
	console.log('loading...')
	let getRes = await getLists()
	dispatch(getList(getRes.data))  
	console.log('finished')
}