<template>
    <div id="bottomNav">
        <div class="content">
            <div class="cellLeft" @click="pushToView({name:'play'})">
                <img src="" alt="">
                <div>
                    <span>歌曲名字</span>
                    <span>演唱者</span>
                </div>
            </div>
            <div class="cellRight">
                <span>
                    <i class="fa fa-play-circle-o fa-2x" aria-hidden="true"></i>
                    <!-- <i class="fa fa-pause-circle-o" aria-hidden="true"></i> -->
                </span>
                <span>
                    <i class="fa fa-list-ul fa-2x" aria-hidden="true"></i>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    #bottomNav{
        position:fixed;
        bottom:0;
        width:100%;
        height:50px;
        background:white;
        border-top:1px solid rgb(230, 227, 227);
        
        .content{
            width:96%;
            padding:2%;
            display: flex;
            flex-direction: row;
            justify-content:space-between;
            .cellLeft{
                width:70%;
                display: flex;
                flex-direction: row;
                img{
                    width:35px;
                    height:35px;
                    background:lightblue;
                    border-radius:4px;  
                }
                div{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-left:4px;
                    span:nth-child(1){
                        font-size:13px;
                        font-weight:500;
                        margin-bottom:3px;
                    }
                    span:nth-child(2){
                        font-size:12px;
                        color:rgb(139, 132, 132);
                    }
                }
            }
            .cellRight{
                width:25%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                color:rgb(114, 107, 107);
            }
        }
    }
</style>


