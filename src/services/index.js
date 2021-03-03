import { getData } from '@/services/request.js';

// 方法1: 返回一个Promise对象出去
// export function fetchConstellationGetAll(consName, type) {
//   const promise = new Promise((resolve, reject) => {
//     const doRequest = getData({ consName, type });
//     doRequest.then(
//       res => {
//         resolve(res);
//       },
//       err => {
//         reject(err);
//       }
//     );
//   });
//   return promise; // 返回一个Promise对象出去
// }

// 方法二: 使用async await
export async function fetchConstellationGetAll(consName, type) {
  const response = await getData({ consName, type });
  return response;
}