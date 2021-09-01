<template>
  <div class="nearby">
    <h3 class="nearby_title">Nearby Market</h3>
    <div class="nearby_item"
         v-for="item in nearbyList"
         :key="item.id"
    >
      <img :src="item.imgUrl" class="nearby_item_img">
      <div class="nearby_content">
        <div class="nearby_content_title">{{ item.title }}</div>
        <div class="nearby_content_tags">
          <span
            class="nearby_content_tag"
            v-for="(innerItem,index) in item.tags"
            :key = "index">{{ innerItem }}</span>
        </div>
        <p class="nearby_content_highlight">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Nearby',
  setup () {
    const nearbyList = [{
      id: 1,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: 'CountDown',
      tags: ['Sales:10000+', 'Free shipping over $25', 'clearance'],
      desc: 'REE Shipping on qualifying orders over $25.'
    }, {
      id: 2,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: 'ParkSave',
      tags: ['Sales:9000+', 'Free shipping over $10', 'clearance'],
      desc: 'REE Shipping on qualifying orders over $10.'
    }, {
      id: 3,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: 'NZSale',
      tags: ['Sales:15000+', 'Free shipping over $50', 'clearance'],
      desc: 'REE Shipping on qualifying orders over $50.'
    }]
    return { nearbyList }
  }
}
</script>
<style lang="scss" scoped>
@import 'src/style/variables.scss';
@import 'src/style/mixins.scss';
.nearby{
  &_title{
    margin: .16rem 0 .02em 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &_item{
    display: flex;
    padding-top: .12rem;
    &_img{
      margin: .16rem;
      width: .56rem;
      height: .56rem;
    }
  }
  &_content{
    flex: 1;
    padding-bottom: .12rem;
    border-bottom: 1px solid $content-bgColor;
    &_title{
      line-height: .22rem;
      font-size: .16rem;
      color:$content-fontcolor;
    }
    &_tags{
      margin: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color:$content-fontcolor;
    }
    &_tag{
      margin-right: .16rem;
    }
    &_highlight{
      line-height: .18rem;
      font-size: .13rem;
      color: #e93b3b;
    }
  }
}
</style>
