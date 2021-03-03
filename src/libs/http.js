import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { JUHE_APPKEY } from '@/configs/keys.js'
import Loading from '../components/Loading'


const loadingprops = {
  show: true,
  url: require('../assets/img/loading.gif'),
  title: '页面加载中....'
}


/*请求合并只出现一次loading*/
let requestCount = 0

function showFullScreenLoading() {
  if (requestCount === 0) {
    var dom = document.createElement('div')
    dom.setAttribute('id', 'loading')
    document.body.appendChild(dom)
    ReactDOM.render(<Loading {...loadingprops} />, dom)
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
  }
  requestCount++
}

function tryHideFullScreenLoading() {
  requestCount--
  if (requestCount === 0) {
    document.body.removeChild(document.getElementById('loading'))
  }
  document.body.style.height = 'auto';
  document.body.style.overflow = 'auto';
}
axios.interceptors.request.use((config) => {
  const { showLoading } = config;
  if (showLoading) {
    showFullScreenLoading();
  }
  return config
}, (error) => {
  console.log('error1', error);
  if (error.config.showLoading !== false) {
    tryHideFullScreenLoading()
  }
  return Promise.reject(error);
})

function axiosGet(options) {

  axios(options.url + "&key=" + JUHE_APPKEY, { showLoading: true }).then((res) => {
    options.success(res.data)
  }).catch((err) => {
    options.error(err)
  })

}

/*请求响应拦截*/
axios.interceptors.response.use(response => {
  if (response.config.showLoading !== false) {
    tryHideFullScreenLoading()
  }
  return response;
},
  error => {
    console.log('error2', error);
    if (error.config.showLoading !== false) {
      tryHideFullScreenLoading()
    }
    return Promise.reject(error)
  }
)

export {
  axiosGet
}