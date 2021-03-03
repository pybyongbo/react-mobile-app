import Container from '../components/Container';
// import month from '../pages/zunxiang-month/route';
// import distantmonth from '../pages/distant-mountains/route';
import  routes  from './route.js'

// 此种方式是用于多模块情况,每个模块配置自己的路由

// const routes = [
//   // month,
//   // distantmonth,
// ];

export const mount = {
  routes,
};

export default {
  ...mount,
  component: Container,
  path: '/',
};
