import {
  SET_CONS_NAME,
  SET_FIELD,
  SET_DATA,
  ADD_COUNT
} from './action-types';

const defaultState = {
  // loading: false, // 通过dispatch触发时候,页面组件判断时添加
  count:0,
  consName: '白羊座',
  type: 'today',
  field: 'today',
  detailObj: {

  }
}

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_COUNT:
      const newState = {...state};
      newState.count+=payload.count; 
      return {...newState}
    case SET_DATA:
      return { ...state, ...payload };
    case SET_CONS_NAME:
      return { ...state, ...payload };
    case SET_FIELD:
      return { ...state, ...payload };
    default:
      return state;
  }
}