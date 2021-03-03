import {
  SET_CONS_NAME,
  SET_FIELD,
  ADD_COUNT
} from './action-types';

import { fetchConstellationGetAll } from '@/services';

export function addCount(num){
  return (dispatch) =>{
    dispatch({
      type: ADD_COUNT,
      payload: {
        count:num
      }
    });
  }
}

// 改变星座->导航点击切换
export function changeConsName(consName, type) {
  return async dispatch => {
    // 如果全局设置loading效果,则不用添加这个dispatch
    // dispatch({
    //   type: SET_CONS_NAME,
    //   payload: {
    //     loading: true
    //   }
    // });
    const response = await fetchConstellationGetAll(consName, type);
    dispatch({
      type: SET_CONS_NAME,
      payload: {
        consName: consName,
        detailObj: response,
        // loading: false
      }
    });
  }
}

// 周期切换->改变周期

export function changeFieldType(consName, ftype) {
  return async dispatch => {
    try {
      const response = await fetchConstellationGetAll(consName, ftype);
      dispatch({
        type: SET_FIELD,
        payload: {
          detailObj: response,
          field: ftype,
          type: ftype
        }
      });

    } catch (error) {
      console.log(error)
    }
  }
}