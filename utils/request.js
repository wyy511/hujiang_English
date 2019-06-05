const { host } = require('../config/config.js')
export function request(params, callback) {
  const { url = '', data = {}, method = 'GET', dataType = 'json' } = params;
  let link = `${host}${url}`
  if (method === 'GET' && data) {
    link = `${link}?${stringify(data)}`
  }
  wx.request({
    url: link,
    data: data || {},
    method: method,
    dataType: dataType,
    header: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    success: data => {
      console.log(data.data.data)
      callback(data.data.data)
    },
    fail: err => {
      console.log(err)
    }
  })
}