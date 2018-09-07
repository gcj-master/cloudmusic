<template>
    <div id="friends">
        <div>
             <p>此栏目正在建设</p>
             <p>敬请期待</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    #friends{
        position: absolute;
        top:40px;
        bottom:0;
        left:0;
        right:0;
        div{
            height:300px;
            width:70%;
            display:flex;
            flex-direction: column;
            margin:100px auto;
            p{
                width:100%;
                height:150px;
                background:lightgreen;
                text-align: center;
                line-height: 150px;
                color:white;
                font-size: 20px;
                font-weight: bolder;
                
            }
        }
    }
</style>


