import React, { useState } from 'react';
import { connect } from 'react-redux';
import Loading from '../../components/Loading';
import './index.less';

import store from '../../redux/store';
import { addCount } from '@/redux/actions.js'
const loadingprops = {
  show: false,
  url: require('../../assets/img/loading.gif'),
  title: 'loading'
}

function Today(props) {
 
  const count = store.getState().count;
  const {history,dispatch} = props;
  const toTomorrow = () =>{
    history.push('/tomorrow')
  }

  const add = () =>{
    dispatch(addCount(5));
  }

  return (
    <div className="App">
          <h1>移动端项目基础架构初始化</h1>
          <Loading {...loadingprops} />
          <button onClick={toTomorrow}>路由跳转</button>
          <button onClick={()=>add()}>触发action</button>

          <p style={{textAlign:'center'}}>{count}</p>
    </div>
  )
}

// export default Today

const mapStateToProps = state => ({
  ...state,
  detailObj: state.detailObj
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Today);
