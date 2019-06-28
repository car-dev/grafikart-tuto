let vm = new Vue({
    el: '#app',
    data: {
        message: 'Salut les gens',
        link: 'http://grafikart.fr',
        cls: 'success',
        persons: ["Jonathan", "Marion", "Jean"],
        seconds: 0
    },
    methods: {
        addPerson: function() {
            this.persons.push("Carine")
        }
    },
    mounted: function() {
        // https://fr.vuejs.org/v2/guide/instance.html
        console.log(this.$el);
        this.$interval = setInterval(() =>{
            console.log('Time');
            this.seconds++
        }, 1000)
    },
    beforeDestroy: function() {
        console.log('\'el \#app\' va être détruit')
    },
    // vm.$destroy();
    destroyed:function() {
        clearInterval(this.$interval)
    },
})

let vmMenu = new Vue({
    el: '#menu',
    data: {
        chapter: "Chapitre 3 - L'instance de Vue",
        url_tuto: "https://www.grafikart.fr/tutoriels/instance-810",
        url_vue_link: "https://fr.vuejs.org/v2/guide/instance.html",
        url_vue_title: "Instance de Vue"
    }
})