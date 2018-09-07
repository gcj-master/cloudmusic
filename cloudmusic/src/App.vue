<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view/>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import TopNav from '@/components/Common/TopNav'
import BottomNav from '@/components/Common/BottomNav'
export default {
  name: 'App',
  components:{
    'top-nav':TopNav,
    'bottom-nav':BottomNav
    }
}
</script>
<style lang="scss" scoped>
  
</style>
  

