<template>
  <div class="cart">
    <div class="check">
      <div class="icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check_icon_img"
        />
        <div class="check_icon_tag">1</div>
      </div>
      <div class="check_info">
        Total: <span class="check_info_price">&#36;127</span>
      </div>
      <div class="check_btn">
        Checkout
      </div>
    </div>
  </div>
</template>
<script>

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
      top:.07rem;
      width: .2rem;
      height: .2rem;
      line-height: .2rem;
      background-color: $highlight-fontColor;
      border-radius: 50%;
      font-size: .12rem;
      text-align: center;
      color: #fff;
      transform: scale(.5);
    }
  }
  &_info{
    flex:1;
    color: $content-fontcolor;
    font-size: .12rem;
    &_price{
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
