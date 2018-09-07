<template>
    <div id="focus">
        <swiper :options="swiperOption">
            <!-- 循环的图片 -->
            <swiper-slide v-for="(item,key) in focus" :key="key">
                <img :src=item.imageUrl alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
    components:{swiper,swiperSlide},
    props:['focus'],
    data(){
        return {
            swiperOption: {
                spaceBetween: 0,
                centeredSlides: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    #focus{
        position: absolute;;
        top:5px;
        left:6px;
        right:6px;
        height: 135px;
        overflow:hidden;
        border-radius:5px;
        z-index:2;
        .swiper-container{
            width:100%;
            height:100%;
        }
        img{
            width:100%;
            height:100%;
        }
    }
</style>

