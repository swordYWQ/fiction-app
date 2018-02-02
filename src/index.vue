<template>
  <div class="wrapper">
     <!-- <wxc-tab-bar :tab-titles="tabTitles"
               :tab-styles="tabStyles"
               title-type="iconFont"
               @wxcTabBarCurrentTabSelected="tabSelected">
    <div class="item-container" :style="contentStyle"><text>Home</text></div>

    <div class="item-container" :style="contentStyle"><text>Hot</text></div>

    <div class="item-container" :style="contentStyle"><text>Message</text></div>
  </wxc-tab-bar> -->
  <!-- <div class="tab-view" :style="contentStyle">
    <div class="tab-view-item" v-for="(item,index) in tabTitles" :key="index" :style="{left:index*100+'%'}">
      <text>{{item.title||''}}</text>
    </div>
  </div> -->
  <router-view class="tab-view" :style="contentStyle"></router-view>
  <tab-bar @onTabTo="onTabTo"></tab-bar>
  </div>
</template>

<script>
// import util from '@/utils/util.js'
// import { WxcTabBar, Utils } from 'weex-ui'
import tabBar from './components/tabBar.vue'
export default {
  components: {
    // WxcTabBar,
    'tab-bar': tabBar
  },
  data() {
    return {
      tabTitles: [
        { title: '首页', codePoint: '\ue67c' },
        { title: '书城', codePoint: '\ue61d' },
        { title: '我的', codePoint: '\ue611' }
      ],
      tabStyles: {
        bgColor: '#FFFFFF',
        titleColor: '#666666',
        activeTitleColor: '#3D3D3D',
        activeBgColor: '#FFFFFF',
        isActiveTitleBold: true,
        width: 160,
        height: 120,
        fontSize: 24,
        textPaddingLeft: 10,
        textPaddingRight: 10,
        iconFontSize: 50,
        iconFontColor: '#333333',
        activeIconFontColor: 'red'
        // iconFontUrl: '//at.alicdn.com/t/font_562191_fyhx8bsoirnyu8fr.ttf'
      }
    }
  },
  // beforeCreated(){
  //   var domModule = weex.requireModule('dom');
  //     //目前支持ttf、woff文件，不支持svg、eot类型,moreItem at http://www.iconfont.cn/
      
  //     domModule.addRule('fontFace', {
  //       'fontFamily': "iconfont1",
  //       'src': "url('http://at.alicdn.com/t/font_562191_fyhx8bsoirnyu8fr.ttf')"
  //     });
  // },
  created() {
    // util.initIconFont()
    // const tabPageHeight = Utils.env.getPageHeight()
    // If the page doesn't have a navigation bar
    const env = weex.config.env
    const tabPageHeight = env.deviceHeight / env.deviceWidth * 750
    // const { tabStyles } = this
    this.contentStyle = { height: tabPageHeight - 120 + 'px' }
  },
  methods: {
    onTabTo(_result) {
      let _key = _result.data.key || ''
      this.$router && this.$router.push('/' + _key)
    }
  }
}
</script>

<style scoped>
.wrapper {
  justify-content: center;
}
/* .tab-view{
  width: 750px;
  position: absolute;
} */
/* .tab-view-item{
  width: 750px;
  position: absolute;
  top: 0;
  justify-content: center;
} */
.item-container {
  width: 750px;
  background-color: #f2f3f4;
  align-items: center;
  justify-content: center;
}
</style>
