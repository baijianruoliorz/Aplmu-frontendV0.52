// 这里封装一下request请求 原型是uni.request
const BASE_URL='https://aplmu.backend.117503445.top'
//暴露一个方法
export const myRequset=(options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			// 拿到请求方式,默认为GET
        method:options.method||'GET',
		data:options.data||{},
		success:(res)=>{
			if(res.statusCode!==200){
				return uni.showToast({
					title:'获取数据失败,说不定是后端的锅呢~(doge'
				})
			}
		resolve(res)
		},
		fail: (err)=>{
			uni.showToast({
				title:'请求接口失败,说不定是后端的锅呢~(doge'	
		})
		// 返回错误消息
		reject(err)
		}
	})
	})
}
// myRequset({
// 	// 写入你需要的地址
// 	url:'/',
// 	method:'POST',
// 	data:{
		
// 		}
// 	})
