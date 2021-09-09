<template>
  <div class="shop">
    <img :src="item.imgUrl" class="shop_img">
    <div class="shop_content">
      <div class="shop_content_title">{{ item.name }}</div>
      <div class="shop_content_tags">
        <span class="shop_content_tag"> Sales:{{item.sales}} </span>
        <span class="shop_content_tag"> Minimum delivery items: {{item.expressLimit}} </span>
        <span class="shop_content_tag"> Free Delivery over: ${{item.expressPrice}} </span>
        <p class="shop_content_highlight">{{item.slogan}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['item'] // Receive data from the parent component, then can use 'item' in template
}
</script>

<style lang="scss" scoped>
@import 'src/style/variables.scss';
.shop{
  display: flex;
  padding-top: .12rem;
  &_img{
    margin: .16rem;
    width: .56rem;
    height: .56rem;
  }
  &_content {
    flex: 1;
    padding-bottom: .12rem;
    border-bottom: 1px solid $content-bgColor;

    &_title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }

    &_tags {
      margin: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
    }

    &_tag {
      margin-right: .16rem;
    }

    &_highlight {
      line-height: .18rem;
      font-size: .13rem;
      color: #e93b3b;
    }
  }
}
</style>
