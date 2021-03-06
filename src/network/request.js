import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: '******',
    // baseURL: '******',
    timeout: 5000
  });

  // 请求拦截器    
  instance.interceptors.request.use(config => {
    //拦截后需要将拦截下来的请求数据返回发送
    return config;
  }, err => {
    console.log(err);
  })

  // 响应拦截器
  instance.interceptors.response.use(res => {
    // 拦截后需要将拦截下来处理成的结果返回
    return res.data
  }, err => {
    console.log(err)
  })
  // 发送真正的网络请求！
  return instance(config)
}
