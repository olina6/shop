<template>
  <div class="wrapper">
    <div class="search">
      <div
        class="search_back iconfont"
        @click="handleBackClick"
      >
        &#xe71c;
      </div>
      <div class="search_content">
        <span class="search_content_icon iconfont">&#xe76d;</span>
        <input
          class="search_content_input"
          placeholder="Search by keyword, brand or product"
        />
      </div>
    </div>
    <ShopInfo :item="item" :hide-border="true" v-show="item.imgUrl" />
    <Content />
    <Cart />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '@/utils/request'
import ShopInfo from '@/components/Shopinfo'
import Content from './Content'
import Cart from './Cart'

// get current shop information
const useShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    console.log(result)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}

// logic of click back icon
const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}

export default {
  name: 'Shop',
  components: { ShopInfo, Content, Cart },
  setup () {
    const { item, getItemData } = useShopInfoEffect()
    getItemData()
    const { handleBackClick } = useBackRouterEffect()
    return { item, handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import "src/style/variables";
.wrapper {
  padding: 0 .18rem;
}
.search {
  display: flex;
  margin: .14rem 0 .04rem 0;
  line-height: .32rem;
  &_back {
    width: .3rem;
    font-size: .2rem;
    color: #b6b6b6;
  }
  &_content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: .16rem;
    &_icon {
      width: .44rem;
      text-align: center;
      color: $search-fontColor;
    }

    &_input {
      display: block;
      width: 100%;
      height: .32rem;
      padding-right: .2rem;
      border: 1rem;
      outline: black;
      background: none;
      font-size: .14rem;
      color: $content-fontcolor;
      &::placeholder{
        color: $content-fontcolor;
      }
    }
  }
}
</style>
