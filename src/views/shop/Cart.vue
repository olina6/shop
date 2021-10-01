<template>
  <div class="mask" v-if="showCart" />
  <div class="cart">
    <div class="product" v-if="showCart">
      <div class="product_header">
        <div
          class="product_header_all"
          @click="()=>setCartItemsAllSelected(shopId)"
        >
          <span
            class="product_header_icon iconfont"
            v-html="allSelected?'&#xe652;':'&#xe66c;'"
          >
          </span>
          Select All
        </div>
        <div
          class="product_header_clear"
          @click="() => clearCartItems(shopId)"
        >Clear All</div>
      </div>
      <template
        v-for="item in productList"
        :key="item._id"
      >
        <div class="product_item" v-if="item.count >0">
          <div
            class="product_item_checked iconfont"
            v-html="item.check?'&#xe652;':'&#xe66c;'"
            @click="() => { changeCartItemChecked(shopId, item._id)}">
          </div>
          <img class="product_item_img" :src="item.imgUrl" alt=""/>
          <div class="product_item_detail">
            <h4 class="product_item_title">{{item.name}}</h4>
            <p class="product_item_price">
              <span class="product_item_dollar">&#36;</span>
              {{ item.price }}
              <span class="product_item_origin">&#36;{{ item.oldPrice }}</span>
            </p>
          </div>
          <div class="product_number">
          <span
            class="product_number_minus"
            @click="() => { changeCartItemInfo(shopId,item._id,item, -1) }"
          >-</span>
            {{cartList?.[shopId]?.[item._id]?.count || 0}}
            <span
              class="product_number_plus"
              @click="() => { changeCartItemInfo(shopId,item._id,item,1) }"
            >+</span>
          </div>
        </div>
      </template>
    </div>
    <div class="check">
      <div class="check_icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check_icon_img"
          @click="handleCartShow"
        />
        <div class="check_icon_tag">{{total}}</div>
      </div>
      <div class="check_info">
        Total: <span class="check_info_price">&#36;{{ price }}</span>
      </div>
      <div class="check_btn">Checkout</div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '@/views/shop/commonCartEffect'

// get cart information
const useCartEffect = (shopId) => {
  const { changeCartItemInfo } = useCommonCartEffect()
  const store = useStore()
  const cartList = store.state.cartList

  const total = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i] // get current product
        count += product.count
      }
    }
    return count
  })

  const price = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        if (product.check) {
          count += (product.count * product.price)
        }
      }
    }
    return count.toFixed(2)
  })

  const allSelected = computed(() => {
    const productList = cartList[shopId]
    let result = true
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        if (product.count > 0 && !product.check) {
          result = false
        }
      }
    }
    return result
  })

  const productList = computed(() => {
    const productList = cartList[shopId] || []
    return productList
  })

  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', { shopId, productId })
  }

  const clearCartItems = (shopId) => {
    store.commit('clearCartItems', { shopId })
  }

  const setCartItemsAllSelected = (shopId) => {
    store.commit('setCartItemsAllSelected', { shopId })
  }
  return { total, price, productList, changeCartItemInfo, changeCartItemChecked, clearCartItems, cartList, allSelected, setCartItemsAllSelected }
}

export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const showCart = ref(false)
    const handleCartShow = () => {
      showCart.value = !showCart.value
    }
    const { total, price, productList, changeCartItemInfo, changeCartItemChecked, clearCartItems, cartList, allSelected, setCartItemsAllSelected } = useCartEffect(shopId)
    return { total, price, productList, shopId, changeCartItemInfo, changeCartItemChecked, clearCartItems, cartList, allSelected, setCartItemsAllSelected, showCart, handleCartShow }
  }
}

</script>

<style lang="scss" scoped>
@import "src/style/variables.scss";
@import "src/style/mixins.scss";
.mask{
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  background: rgba(0,0,0,.5);
  z-index: 1;
}
.cart{
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  background: $bgColor;
}
.check{
  display: flex;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  line-height: .49rem;
  &_icon{
    position: relative;
    width: .84rem;
    &_img{
      display: block;
      margin: .12rem auto;
      width: .28rem;
      height: .26rem;
    }
    &_tag{
      position: absolute;
      left: .45rem;
      top:.04rem;
      width: .2rem;
      height: .2rem;
      line-height: .2rem;
      background-color: $highlight-fontColor;
      border-radius: 50%;
      font-size: .12rem;
      text-align: center;
      color: $bgColor;
      transform: scale(.80);
    }
  }
  &_info{
    margin: .05rem;
    flex:1;
    color: $content-fontcolor;
    font-size: .12rem;
    &_price{
      padding: .03rem;
      color: $highlight-fontColor;
    }
  }
  &_btn{
    width: .98rem;
    background-color: #4fb0f9;
    text-align: center;
    color:$bgColor;
    font-size: .14rem;
  }
}
.product {
  overflow-y: scroll;
  flex: 1;
  background: $bgColor;
  &_header{
    display: flex;
    height: .52rem;
    border-bottom: 1px solid $content-bgColor ;
    font-size: .14rem;
    color: $content-fontcolor;
    &_all{
      width: .64rem;
      margin-left: .18rem;
    }
    &_icon{
      display: inline-block;
      color: #0091ff;
      font-size: .2rem;
    }
    &_clear{
      flex: 1;
      margin-right: .16rem;
      text-align: right;
    }
  }
  &_item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;
    &_checked{
      line-height: .5rem;
      margin-right: .1rem;
      color: #0091ff;
      font-size: .2rem;
    }

    &_img {
      margin-right: .16rem;
      height: .46rem;
      width: .46rem;
    }

    &_detail {
      overflow: hidden;
    }

    &_title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &_dollar {
      font-size: .12rem;
    }

    &_price {
      margin: .06rem 0 0 0;
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

      &_minus, &_plus {
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
