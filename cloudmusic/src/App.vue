<template>
  <div id="app">
    <top-nav></top-nav>
    <keep-alive>
    <router-view/>
    </keep-alive>
    <bottom-nav></bottom-nav>
    <play-view></play-view>
  </div>
</template>

<script>
import TopNav from '@/components/Common/TopNav'
import BottomNav from '@/components/Common/BottomNav'
import Play from '@/components/Play/Play'
export default {
  name: 'App',
  components:{
    'top-nav':TopNav,
    'bottom-nav':BottomNav,
    'play-view':Play
  },
}
</script>
<style lang="scss" scoped>

</style>
  

