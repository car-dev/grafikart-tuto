// Vue.component('mon-message', {
//     props:{
//         type: {
//             type: [String, number],
//             default: 'alert-success',
//         },
//         detail: {
//             type: String,
//         }
//     },
//     template: '<div class="ui message alert" :class="type" >{{ detail }}</div>',
// })

let counter = {
    data: function() {
            return {
                count:0
            }
    },
    methods: {
        increment: function() {
            this.count++;
        }
    },
    template: `
        <div>
            <span>{{ count }}</span><br/>
            <button @click="increment">Incrémenter</button>
        </div>
    `
}

let counter2 = {
    props:{
        start: {
            type: Number,
            default: 0,
        }
    },
    data: function() {
            return {
                count:0
            }
    },
    methods: {
        increment: function() {
            this.count++;
        }
    },
    // template: `<button @click="increment">{{ count }}</button>`,
    // mounted: function() {
    //     this.count = this.start
    // },
    template: `<button @click="increment">{{ total }}</button>`,
    computed: {
        total: function() {
            return this.start + this.count
        }
    },
}

let vm = new Vue({
    el: '#app',
    data: {
        message: "Salut les gens !",
        count: 0,
    },
    filters: {
        
    },
    components: { 
        counter,
        counter2,
    },
    methods: {
    }
})


let vmMenu = new Vue({
    el: '#menu',
    data: {
        chapter: "Chapitre 7 - Composants",
        url_tuto: "https://www.grafikart.fr/tutoriels/components-814",
        url_vue_link: "https://fr.vuejs.org/v2/guide/components.html",
        url_vue_title: "Composants"
    }
})