<template>
  <div class="nearby">
    <h3 class="nearby_title">Nearby Market</h3>
    <div class="nearby_item"
         v-for="item in nearbyList"
         :key="item._id"
    >
      <img :src="item.imgUrl" class="nearby_item_img">
      <div class="nearby_content">
        <div class="nearby_content_title">{{ item.name }}</div>
        <div class="nearby_content_tags">
          <span class="nearby_content_tag"> Sales:{{item.sales}} </span>
          <span class="nearby_content_tag"> Minimum delivery items: {{item.expressLimit}} </span>
          <span class="nearby_content_tag"> Free Delivery over: ${{item.expressPrice}} </span>
        <p class="nearby_content_highlight">{{item.slogan}}</p>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { get } from '@/utils/request'

const useNearByListEffect = () => {
  const nearbyList = ref([])
  const getNearByList = async () => {
    const result = await get('/api/shop/hot-list')
    console.log(result)
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return { nearbyList, getNearByList }
}
export default {
  name: 'Nearby',
  setup () {
    const { nearbyList, getNearByList } = useNearByListEffect()
    getNearByList()
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
