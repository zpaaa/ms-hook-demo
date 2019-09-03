import axios from 'axios'
// 创建axios实例

const baseURL = 'https://api.betterdoctor.com/2016-03-01/practices/1c966a62ce8e18707cf239389dc8e378/'
const service = axios.create({
  baseURL,  
  timeout: 5000 // 请求超时时间
})
export default service
