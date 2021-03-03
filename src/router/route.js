import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../components/Loading'

const loadingprops = {
  show: true,
  url: require('../assets/img/loading.gif'),
  title: 'loading'
}

export default [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('../views/Today'),
      loading: () => <Loading {...loadingprops} />,
      // delay: 100000, // 0.3 seconds
    }),
    title: 'Today',
  },
  {
    path: '/tomorrow',
    exact: true,
    component: Loadable({
      loader: () => import('../views/Tomorrow'),
      // loading:()=> <Loading {...loadingprops} />,
      loading() {
        return <Loading {...loadingprops} />
      }
    }),
    title: 'Tomorrow',
  },
  // {
  //   path: '/chuXing/result',
  //   exact: true,
  //   component: React.lazy(() => import('../page/result')),
  //   title: '免费领100万出行意外险',
  // },
  // {
  //   path: '/chuXing/detail',
  //   exact: true,
  //   component: React.lazy(() => import('../page/policyDetail')),
  //   title: '我的保单',
  // },
];
