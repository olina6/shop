<template>
  <div class="wrapper">
    <static-part />
    <nearby />
  </div>
  <Docker />
</template>
<script>
import StaticPart from '@/views/home/StaticPart'
import Nearby from '@/views/home/Nearby'
import Docker from '@/views/home/Docker'
export default {
  name: 'Home',
  components: { StaticPart, Nearby, Docker }
}
</script>
<style lang="scss" scoped>
.wrapper{
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  right:0;
  bottom: .5rem;
  padding: 0 .18rem .1rem .18rem;
}
</style>
