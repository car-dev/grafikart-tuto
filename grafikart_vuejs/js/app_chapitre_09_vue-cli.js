class NotificationsStore {
    constructor() {
        this.state = {
            count: 0
        }

    }
    increment() {
        this.state.count++
    }
    decrement() {
        this.state.count--
    }
}

let notifications_store = new NotificationsStore()

let Counter = {
    data: function () {
        return {
            state: notifications_store.state
        }
    },
    template: `
        <button @click="increment">
            {{ count }}
        </button>
    `,
    computed: {
        count: function() { return this.state.count }
    },
    methods: {
        increment: function() {
            notifications_store.increment()
        }
    }
}

let Notifications = {
    template: `
        <div>
            <counter></counter>
            <button @click="addNotification">Incrémenter</button>
        </div>
    `,
    methods: {
        addNotification: function () {
            notifications_store.increment()
        }
    },
    components: {
        Counter,
    }
}


let vm = new Vue({
    el: '#app',
    data: {    },
    components: {
        Notifications,
        Counter,
    },
    methods: {
        
    },
    filters: {
    }
})


let vmMenu = new Vue({
    el: '#menu',
    data: {
        chapter: "Chapitre 9 - VueCli (render)",
        url_tuto: "https://www.grafikart.fr/tutoriels/vue-cli-816",
        url_vue_link: "https://fr.vuejs.org/v2/guide/render-function.html",
        url_vue_title: "Fonctions de rendu et JSX"
    }
})