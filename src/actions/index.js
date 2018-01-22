import { FETCH_FAILED, FETCH_SUCCESS, REQUEST_DATA, IS_FETCHING } from './types'

import fetchData from '../api'

export function requestData() {
  return dispatch => {
    dispatch(isFetching())
    fetchData().then(data => {
      if (data.response === 200) {
        dispatch({ type: REQUEST_DATA, payload: data })
        dispatch(fetchSuccess())
      }
      return dispatch(fetchFailed())
    })
  }
}

export function isFetching() {
  return { type: IS_FETCHING, payload: true }
}

export function fetchSuccess() {
  return { type: FETCH_SUCCESS, payload: 'SUCCESSFULLLY FETCH THE DATA' }
}

export function fetchFailed() {
  return { type: FETCH_FAILED, payload: 'FAILED-FETCH' }
}
