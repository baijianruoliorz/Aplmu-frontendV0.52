<template>
	<view>
	  <view>
	        <view class="page-body">
	            <view class="page-section">
	                <video id="myVideo" src="https://outin-f6a354529d8d11ea98ee00163e1c9256.oss-cn-shanghai.aliyuncs.com/sv/576fd6dd-172634dd003/576fd6dd-172634dd003.mp4?Expires=1594200051&OSSAccessKeyId=LTAIwkKSLcUfI2u4&Signature=3096Dhrhi9r1k%2FhR9u4HPMZpRoc%3D" @error="videoErrorCallback" :danmu-list="danmuList"
	                    enable-danmu danmu-btn controls></video>
	
	                <view class="uni-list">
	                    <view class="uni-list-cell">
	                        <view>
	                            <view class="uni-label">弹幕内容</view>
	                        </view>
	                        <view class="uni-list-cell-db">
	                            <input @blur="bindInputBlur" class="uni-input" type="text" placeholder="在此处输入弹幕内容" />
	                        </view>
	                    </view>
	                </view>
	                <view class="btn-area">
	                    <button @tap="bindSendDanmu" class="page-body-button" formType="submit">发送弹幕</button>
	                </view>
	            </view>
	        </view>
	    </view>	
	</view>
</template>

<script>
	export default {
	  data() {
	        return {
				videoUrl:'',
	            title: 'video',
	            src: '',
	            inputValue: '',
	            danmuList: [{
	                    text: '第 1s 出现的弹幕',
	                    color: '#ff0000',
	                    time: 1
	                },
	                {
	                    text: '第 3s 出现的弹幕',
	                    color: '#ff00ff',
	                    time: 3
	                }
	            ]
	        }
	    },
		onLoad() {
			this.videoUrl=getApp().globalData.justCourseId
		},
	    onReady: function (res) {
	        this.videoContext = uni.createVideoContext('myVideo')
			// 默认全屏显示
			this.videoContext.requestFullScreen();
	    },
		// onLoad(options) {
		// 	console.log(options)
		// 	this.id=options.id
			//this.getSwipers()
			// this.getDetailInfo()
			//this.getDetailContent()
		// },
		
	    methods: {
	        bindInputBlur: function (e) {
	            this.inputValue = e.target.value
	        },
	        bindButtonTap: function () {
	            var that = this
	            uni.chooseVideo({
	                sourceType: ['album', 'camera'],
	                maxDuration: 60,
	                camera: ['front', 'back'],
	                success: function (res) {
	                    this.src = res.tempFilePath
	                }
	            })
	        },
	        bindSendDanmu: function () {
	            this.videoContext.sendDanmu({
	                text: this.inputValue,
	                color: this.getRandomColor()
	            })
	        },
	        videoErrorCallback: function (e) {
	            console.log('视频错误信息:')
	            console.log(e.target.errMsg)
	        },
	        getRandomColor: function () {
	            const rgb = []
	            for (let i = 0; i < 3; ++i) {
	                let color = Math.floor(Math.random() * 256).toString(16)
	                color = color.length == 1 ? '0' + color : color
	                rgb.push(color)
	            }
	            return '#' + rgb.join('')
	        }
	    }
	}
</script>

<style>

</style>
