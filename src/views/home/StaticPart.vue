<template>
  <div class="position">
    <span class="iconfont position_icon">&#xe61f;</span>
    <span class="position_text">2 Morcie Pl, Torbay, Auckland 0630;</span>
    <span class="iconfont position_notice">&#xe628;</span>
  </div>
  <div class="search">
    <span class="iconfont search_iconfont">&#xe76d;</span>
    Clearance
  </div>
  <div class="banner">
    <img
      class="banner_img"
      src="@/assets/banner.jpeg"
    />
  </div>
  <div class="icons">
    <div class="icons_item"
         v-for="item in iconsList"
         :key = item.desc>
      <img
        class="icons_item_img"
        :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`" alt=""/>
      <p class="icons_item_desc">{{ item.desc }}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>
<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [{
      imgName: '超市', desc: 'Market'
    }, {
      imgName: '超市', desc: 'Market'
    }, {
      imgName: '超市', desc: 'Market'
    }, {
      imgName: '超市', desc: 'Market'
    }, {
      imgName: '超市', desc: 'Market'
    }, {
      imgName: '超市', desc: 'Market'
    }, {
      imgName: '超市', desc: 'Market'
    }, {
      imgName: '超市', desc: 'Market'
    }, {
      imgName: '超市', desc: 'Market'
    }, {
      imgName: '超市', desc: 'Market'
    }]
    return { iconsList }
  }
}
</script>
<style lang="scss" scoped>
@import 'src/style/variables.scss';
@import 'src/style/mixins.scss';
.position{
  position: relative;
  padding: .16rem 0 .16rem;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  .position_icon{
    position: relative;
    font-size: .2rem;
  }
  .position_notice{
    position: absolute;
    right:0;
    top:.16rem;
    font-size: .2rem;
  }
  color: $content-fontcolor;
}

.search{
  padding: 0 .12rem 0 .16rem;
  margin-bottom: .12rem;
  line-height: .32rem;
  background-color: $search-bgColor;
  color: $search-fontColor;
  border-radius: .16rem;
  font-size: .14rem;
  .iconfont{
    position: relative;
    top: .04rem;
    display:inline-block;
    padding: 0 .12rem 0 .16rem;
    font-size: .2rem;
  }
}
.banner{
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%; // Reserve banner position，calculate the aspect ratio of the picture, width/length
  &_img{
    width: 100%;
  }
}
.icons{
  color: $content-fontcolor;
  display:flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &_item{
    width: 20%;
    &_img{
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &_desc{
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap{
  margin: 0 -.18rem;
  height: .1rem;
  background-color: $content-bgColor;
}
</style>
