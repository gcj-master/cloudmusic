const mixin = {
    data(){
        return {

        }
    },
    methods:{
        pushToView(item,params){
            if(item instanceof String){
                this.$router.push({name:item});
            }
            if(item.path){
                this.$router.push({path:item.path})
            }
            if(item.name){
                this.$router.push({name:item.name,params:params});
            }
        },
        loadData(url,methods,obj){ 
            if(methods == 'get'){
                this.$axios.get(this.$axios.defaults.baseURL+url)
                .then((response) => {
                    this[obj] = response.data;
                    //console.log(this[obj]);
                },(error)=>{
                    console.log('error');
                })
            }
        },
    }
}

export default mixin;