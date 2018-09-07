<template>
    <div id="discovery">
        <ul class="nav">
            <li 
            v-for="(item,key) in navs" 
            :key="key" @click="pushTo(item.name,key)"
            :style="key==$store.state.MiddleNavIndex?{color:'white',fontWeight:'bolder',borderBottom:'3px solid white'}:{}"
            >   
                {{item.title}}
            </li>
        </ul>
        <transition name="focus">
            <router-view/>
        </transition>  
    </div>
</template>
<script>
export default {
    data(){
        return {
            navs:[
                {title:'推荐',name:'recommend'},
                {title:'朋友',name:'friends'},
                {title:'电台',name:'redioStation'}
            ]
        }
    },
    methods:{
        pushTo(name,index){
            this.pushToView(name);
            this.$store.commit('MIDDLENAVTOGGLE',{selectedIndex:index});
            localStorage.setItem('selectedIndex',index);
            //为了返回能够回到上一个停留位置因此要把最后点击的栏目路由名称保存下来
            this.$store.commit('DiscoveryColumnRouterName',{routerName:name});
        }
    },
    mounted(){
        var selectedIndex = localStorage.getItem('selectedIndex');
        this.$store.commit('MIDDLENAVTOGGLE',{selectedIndex,selectedIndex});
    }
}
</script>
<style lang="scss" scoped>
    .focus-enter-active, .focus-leave-active{
        transition: all .3s;
    }
    .foucs-enter, .focus-leave-to{
        transform: translateX(-300px);
        opacity:0;
    }
     #discovery{
        top:83px;
        bottom:0;
        left:0;
        right:0;
        .nav{
            position: fixed;
            top:83px;
            border:none;
            width:100%;
            height:40px;
            padding:10px;
            color:rgb(231, 225, 225);
            width:100%;
            background:#d43c33;
            display:flex;
            flex-direction: row;
            justify-content: space-around;
            box-sizing:border-box;
            z-index:99;
            li{
               height:20px;
               padding-bottom:3px;
            }
        }
    }
</style>


