// Vue.filter('capitalize', function(value) {
//     return value.toUpperCase();
// })


let vm = new Vue({
    el: '#app',
    data: {
        message: "Salut les gens !",
    },
    methods: {
        
    },
    filters: {
        capitalize: function(value) {
            return value.toUpperCase();
        },
        reverse: function(value) {
            return value.split('').reverse().join('');
        },
        append: function(value, prefix, suffix) {
            return prefix +' ' +value + suffix;
        }
    }
})


let vmMenu = new Vue({
    el: '#menu',
    data: {
        chapter: "Chapitre 6 - Filtres",
        url_tuto: "https://www.grafikart.fr/tutoriels/filters-813",
        url_vue_link: "https://vuejs.org/v2/guide/filters.html#ad",
        url_vue_title: "Filters"
    }
})