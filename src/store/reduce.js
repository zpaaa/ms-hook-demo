import { getLists } from '../api/list'
export const initState = {isLoading: true, skip: 0, limit: 20}

export function reducer(state, action) {
	switch(action.type) {
		case 'loadList':
				return {...state, isLoading: true, limit: action.limit, skip: action.skip};
		case 'getList': 
				return { isLoading: false, listData: action.payload, limit: action.limit, skip: action.skip };
		default:
				return state
	}
}

export function getList (data, skip, limit) {
	return { type: 'getList', payload: data, skip, limit }
}

export function LoadList (skip, limit) {
	return { type: 'loadList', skip, limit }
}

export async function getListData (dispatch, skip, limit) {
	dispatch(LoadList(skip, limit))
	console.log('loading...')
	let getRes = await getLists(skip, limit)
	dispatch(getList(getRes.data, skip, limit))
	console.log('finished')
}