(() => {
// component goes here
const HomePageComponent = {
    template: "<h2>You're on the home page</h2>"
};

const UsersPageComponent = {
    template: "<h2>You're on the user page</h2>"
};
   

const routes = [
    {path: '/', name: 'home', component: HomePageComponent},
    {path: '/users', name:'users', component:UsersPageComponent}
];


const router = new VueRouter({
    routes
})
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
        'HomePageComponent': HomePageComponent,
        'PageComponent': HomePageComponent
    },

    router: router

})
})();