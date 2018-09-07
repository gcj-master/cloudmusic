const mixin = {
    data(){
        return {

        }
    },
    methods:{
        pushToView(item){
            this.$router.push({name:item});
        },
        loadData(url,methods,obj){ 
            if(methods == 'get'){
                this.$axios.get(this.$axios.defaults.baseURL+url)
                .then((response) => {
                    this[obj] = response.data;
                    console.log(this[obj]);
                },(error)=>{
                    console.log('error66');
                })
            }
        }
    }
}

export default mixin;