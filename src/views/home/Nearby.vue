<template>
  <div class="nearby">
    <h3 class="nearby_title">Nearby Market</h3>
    <router-link
      v-for="item in nearbyList"
      :key="item._id"
      :to="`/shop/${item._id}`"
    >
      <ShopInfo :item="item"/>
    </router-link>
    <!-- :item="item" pass data to component of shopinfo -->
  </div>
</template>
<script>
import { ref } from 'vue'
import { get } from '@/utils/request'
import ShopInfo from '@/components/Shopinfo'

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
  components: { ShopInfo },
  setup () {
    const { nearbyList, getNearByList } = useNearByListEffect()
    getNearByList()
    return { nearbyList }
  }
}
</script>
<style lang="scss" scoped>
@import 'src/style/variables.scss';
//@import 'src/style/mixins.scss';
.nearby{
  &_title{
    margin: .16rem 0 .02em 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  a {
    text-decoration: none;
  }
}
</style>
