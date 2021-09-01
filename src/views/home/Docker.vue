<template>
  <div class="docker">
    <div v-for="(item,index) in dockerList"
         :class="{'docker_item':true, 'docker_item--active': index ===0 }"
         class="docker_item"
         :key="item.icon"
         >
      <div class="iconfont" v-html="item.icon" />
      <div class="docker_title">{{ item.text }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe642;', text: 'home' },
      { icon: '&#xe60c;', text: 'Shop' },
      { icon: '&#xe612;', text: 'Order' },
      { icon: '&#xe608;', text: 'My account' }
    ]
    return { dockerList }
  }
}
</script>
<style lang="scss" scoped>
@import 'src/style/variables.scss';
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0.04rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid $content-bgColor;
  &_item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }
    &--active{
      color:dodgerblue;
    }
  }
  &_title{
    font-size: .2rem;
    transform: scale(.5,.5);
    transform-origin: center top;
  }
  color: $content-fontcolor;
}
</style>
