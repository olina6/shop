<template>
  <div class="content">
    <div class="category">
      <ul
        :class="{'category_item':true, 'category_item--active': currentTab === item.name}"
        v-for="item in categories"
        :key="item.name"
        @click="() => handleCategoryClick(item.tab)"
      >
        <li>{{currentTab}}</li>
        <li>{{item.name}}</li>
      </ul>
    </div>
    <div class="product">
      <div
        class="product_item"
        v-for="item in contentList"
        :key="item._id"
      >
        <img class="product_item_img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt=""/>
        <div class="product_item_detail">
          <h4 class="product_item_title">{{item.name}}</h4>
          <p class="product_item_sales">sales:{{ item.sales }}</p>
          <p class="product_item_price">
            <span class="product_item_dollar">&#36;</span>
            {{ item.price }}
            <span class="product_item_origin">&#36;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product_number">
          <span class="product_number_minus">-</span>
          0
          <span class="product_number_plus">+</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { get } from '@/utils/request'
export default {
  name: 'Content',
  setup () {
    const categories = [{
      name: 'All Products',
      tab: 'all'
    }, {
      name: 'Clearance',
      tab: 'seckill'
    }, {
      name: 'Fruits',
      tab: 'fruit'
    }]
    const data = reactive({
      currentTab: categories[0].tab,
      contentList: []
    })
    const getContentData = async (tab) => {
      const result = await get('/api/shop/1/products', { tab })
      if (result?.errno === 0 && result?.data?.length) {
        data.contentList = result.data
      }
    }
    const handleCategoryClick = (tab) => {
      getContentData(tab)
      data.currentTab = tab
    }
    getContentData('all')
    const { contentList, currentTab } = toRefs(data)
    return { contentList, categories, currentTab, handleCategoryClick }
  }
}
</script>

<style lang="scss" scoped>
@import "src/style/variables.scss";
@import "src/style/mixins.scss";
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
}
.category {
  overflow-y: scroll;
  height: 100%;
  width: 30%;
  background: $search-bgColor;
  &_item {
    position: relative;
    top: 0;
    left: 0;
    list-style: none;
    line-height: .4rem;
    text-align: center;
    font-size: 14px;
    color: $content-fontcolor;
    &--active{
      background: $bgColor;
    }
  }
}
.product{
  overflow-y: scroll;
  flex: 1;
  &_item{
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;
    &_img{
      margin-right: .16rem;
      height: .68rem;
      width: .68rem;
    }
    &_detail{
      overflow: hidden;
    }
    &_title{
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &_sales {
      margin: 0;
      line-height: .16rem;
      font-size: .12rem;
      color: $content-fontcolor;
    }
    &_dollar{
      font-size: .12rem;
    }
    &_price {
      line-height: .2rem;
      font-size: .14rem;
      color: $highlight-fontColor;
    }
    &_origin {
      margin-left: 0.06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
    .product_number {
      position: absolute;
      right: 0;
      bottom: .12rem;
      &_minus, &_plus
      {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        line-height: .18rem;
        border-radius: 50%;
        font-size: .2rem;
        text-align: center;
      }
      &_minus {
        border: .01rem solid $medium-fontColor;
        color: $medium-fontColor;
        margin-right: .05rem;
      }
      &_plus {
        background-color: $btn-bgColor;
        color: $bgColor;
        margin-left: .05rem;
      }
    }
  }
}
</style>
