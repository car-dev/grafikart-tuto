// Méthode 1 : Directive
// Vue.directive('salut', {
//     bind: function(el, binding, vnode){
//         console.log(el, binding);
//         el.value = binding.value;
//         console.log('bind');
//     },
//     update: function(el, binding, vnode, oldvnode) {
//         console.log('update');
//     }
// })

// Méthode 2 : Directive
// Vue.directive('salut',  function(el, binding, vnode) {
//     console.log(el, binding);
//     el.value = binding.value;
//     console.log('bind');
// })

// Méthode 3 : Directive
let salut =  function(el, binding, vnode) {
    console.log(el, binding);
    el.value = binding.value;
    console.log('bind');
}

let vm = new Vue({
    el: '#app',
    directives: {
        // salut: salut,
        salut
    },
    data: {
        message: "Salut les gens !",
        messagetrim: "Salut les gens !",
        messagenumber: "1234",
        success: true,
        firstname: 'Jean',
        lastname: 'Delatour',
        nomcomplet: '',
    },
    methods: {
        demo: function(e) {
            console.log('demo',e.preventDefault());
        },
        demoPreventDefault: function(e) {
            console.log('demoPreventDefault');
        },
        demoStop: function(e) {
            console.log('demoStop');
        },
        test: function() {
            console.log('test');
        }
    }
})

let vmMenu = new Vue({
    el: '#menu',
    data: {
        chapter: "Chapitre 5 - Directives",
        url_tuto: "https://www.grafikart.fr/tutoriels/directives-812",
        url_vue_link: "https://vuejs.org/v2/guide/custom-directive.html#ad",
        url_vue_title: "Directives personnalisées"
    }
})