<template>
  <div class="cart">
    <div class="check">
      <div class="icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check_icon_img"
        />
        <div class="check_icon_tag">{{total}}</div>
      </div>
      <div class="check_info">
        Total: <span class="check_info_price">&#36;{{ price }}</span>
      </div>
      <div class="check_btn">
        Checkout
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

// get cart information
const useCartEffect = () => {
  const store = useStore()
  const route = useRoute()
  const shopId = route.params.id
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
        count += (product.count * product.price)
      }
    }
    return count.toFixed(2)
  })
  return { total, price }
}

export default {
  name: 'Cart',
  setup () {
    const { total, price } = useCartEffect()
    return { total, price }
  }
}

</script>

<style lang="scss" scoped>
@import "src/style/variables.scss";
.cart{
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
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
      left: .15rem;
      top:.04rem;
      width: .2rem;
      height: .2rem;
      line-height: .2rem;
      background-color: $highlight-fontColor;
      border-radius: 50%;
      font-size: .12rem;
      text-align: center;
      color: #fff;
      transform: scale(.65);
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
    color:#fff;
    font-size: .14rem;
  }
}
</style>
