<template>
    <div id="search">
        <div class="topNav">
            <span class="cellLeft">
                <i @click="$router.go(-1)" class="fa fa-arrow-left fa-lg" aria-hidden="true"></i>
            </span>
            <span class="cellRight">
                <input type="text" placeholder="请输入歌曲名或歌手名">
                <i style class="fa fa-times fa-lg" aria-hidden="true"></i>
            </span>
              
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    computed:{
        
    }
}
</script>
<style lang="scss" scoped>
    i{
        font-size:26px;
    }
    #search{
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background:white;
        z-index:100;
        .topNav{
            position: fixed;
            top:0;
            left:0;
            right:0;
            height:44px;
            background:#d43c33;
            padding:20px 10px 10px 10px;
            display:flex;
            flex-direction:row;
            align-items:flex-end;
            .cellLeft{
                 width:10%;
                 height:100%;
                 display:flex;
                 flex-direction:column;
                 justify-content:center;
                 margin-right:10px;
                 i{
                    color:white; 
                }
            }
            .cellRight{
                width:86%;
                border-bottom:1px solid white;
                input{
                    height:32px;
                    width:90%;
                    border:none;
                    outline:none;
                    background:#d43c33;
                    color:white; 
                    font-size:18px;
                }
                i{
                    color:white;
                }
            }
        }
    }
</style>


