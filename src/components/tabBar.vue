<template>
    <div :class="['wrapper']">
        <!--<div v-for="i in items">-->
            <!--<div class="bar-item" @click="tabTo(i.key)">-->
                <!--<text class="bar-ic iconfont">{{i.icon}}</text>-->
                <!--<text class="bar-txt">{{i.name}}</text>-->
            <!--</div>-->
        <!--</div>-->

        <div class="bar-item" @click="tabTo('home')">
            <text class="bar-ic title-icon" :class="[this.isActive('home')]">&#xe67c;</text>
            <text class="bar-txt" :class="[this.isActive('home')]">主页</text>
        </div>
        <div class="bar-item" @click="tabTo('topic')">
            <text class="bar-ic title-icon" :class="[this.pIndexKey == 'topic'?'bar-active':'']">&#xe61d;</text>
            <text class="bar-txt" :class="[this.pIndexKey == 'topic'?'bar-active':'']">专题</text>
            <text class="notice-dot"></text>
        </div>
        <div class="bar-item" @click="tabTo('class')">
            <text class="bar-ic title-icon" :class="[this.isActive('class')]">&#xe611;</text>
            <text class="bar-txt" :class="[this.isActive('class')]">我的</text>
        </div>
    </div>
</template>
<style scoped>
.title-icon {
  font-family: iconfont1;
}
.wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top-width: 1px;
  border-top-color: #d9d9d9;
  background-color: #fafafa;
}
/* .w-ipx {
  height: 140px;
} */
.bar-item {
  flex: 1;
}
.bar-txt,
.bar-ic {
  color: #666;
  text-align: center;
}
.bar-active {
  color: #b4282d;
}
.bar-ic {
  padding-top: 14px;
  font-size: 38px;
}
.bar-txt {
  font-size: 22px;
  padding-top: 2px;
}
.i-notice {
  position: absolute;
  top: 10px;
  right: 30px;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  font-size: 26px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  background-color: #f00;
}
.notice-dot {
  position: absolute;
  top: 15px;
  right: 40px;
  height: 15px;
  width: 15px;
  border-radius: 100%;
  background-color: #f00;
}
</style>
<script>
var modal = weex.requireModule('modal')
var he = require('he')
export default {
  computed: {},
  data() {
    return {
      pIndexKey: 'home'
    }
  },
   created(){
    var domModule = weex.requireModule('dom');
      //目前支持ttf、woff文件，不支持svg、eot类型,moreItem at http://www.iconfont.cn/
      
      domModule.addRule('fontFace', {
        'fontFamily': "iconfont1",
        'src': "url('http://at.alicdn.com/t/font_562191_fyhx8bsoirnyu8fr.ttf')"
      });
  },
  mounted() {},
  methods: {
    getFontName: function(fontName) {
      console.log(he.decode(fontName))
      return he.decode(fontName)
    },
    isActive: function(_c) {
      return this.pIndexKey === _c ? 'bar-active' : ''
    },
    tabTo(_key) {
      if (this.pIndexKey === _key) return
      this.pIndexKey = _key
      this.$emit('tabTo', {
        status: 'tabTo',
        data: {
          key: _key
        }
      })
    }
  }
}
</script>