(() => {
// component goes here
const liveuser = {
    props: ['first_name', 'last_name', 'role'],
    template: '#activeuser',

    methods:{
        onChildMsg(){
            console.log("hello its me child");
        }
    },

    runParentFunc(){
        this.$emit('passfunccallup')
    },

    created: function(){
        console.log('child compo is live');
    }
};


const vm = new Vue({
    el: '#app',

    data: {
            message: "hello"
    },

created: function(){
    console.log('child is now live')
},

    methods: {
        logParent(message){
            console.log("from the parent", message);
        }
    ,

    logMainMessage(){
        console.log("call from inside a child, lives in the parent", message);
    }
    },

    components: {
        user: liveuser
    }

})
})();