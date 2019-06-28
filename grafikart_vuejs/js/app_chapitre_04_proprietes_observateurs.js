let vm = new Vue({
    el: '#app',
    data: {
        message: "Salut les gens !",
        success: true,
        firstname: 'Jean',
        lastname: 'Delatour',
        nomcomplet: '',
    },
    computed: {
        cls: function() {
            console.log(">>>>>>>>  cls called !")
            return this.success === true ? 'success' : 'error'
        },
        fullname: {
            get: function() {
                return this.firstname+ " "+ this.lastname
            },
            set: function(value) {
                let parts = value.split(' ');
                this.firstname=parts[0],
                this.lastname=parts[1],
                console.log(value)
            }
        }
    },
    watch: {
        nomcomplet: function(value) {
            console.log('>>>>>>>>>>> watch:', value)
        }
    }
})

let vmMenu = new Vue({
    el: '#menu',
    data: {
        chapter: "Chapitre 4 - Propriétés combinées (accesseur-mutateur) & Watchers",
        url_tuto: "https://www.grafikart.fr/tutoriels/computed-watch-811",
        url_vue_link: "https://fr.vuejs.org/v2/guide/computed.html",
        url_vue_title: "Propriétés calculées et observateurs"
    }
})