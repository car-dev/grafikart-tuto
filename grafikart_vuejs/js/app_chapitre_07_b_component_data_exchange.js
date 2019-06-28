// Component Message (Enfant)
let monMessage = {
    props:{
        type: {
            type: String,
            default: 'alert-success',
        },
        detail: {
            type: String,
        },
        header: String,
    },
    template: `
        <div class="ui message alert" :class="type" >
            <!-- div close button -->
            <button type="button" class="close" aria-label="Close" 
                @click.prevent="close">
                <span aria-hidden="true">&times;</span>
            </button>
            <!-- div title -->
            <div class="header">
                {{ header }}
            </div>
            <!-- div content -->
            {{ detail }}
        </div>
    `,
    // render: '<div class="ui message alert" :class="type" >{{ detail }}</div>',
    methods: {
        close () {
            this.$emit('close')
        }
    }
}

// Component Général (Parent)
let vm = new Vue({
    el: '#app',
    data: {
        message: "Salut les gens !",
        alert: false
    },
    filters: {
        
    },
    components: { 
        monMessage,
    },
    methods: {
        showAlert: function() {
            this.alert = true;
        },
        hideAlert: function() {
            this.alert=false
        }
    }
})

// Composant Général
let vmMenu = new Vue({
    el: '#menu',
    data: {
        chapter: "Chapitre 7 - Echange de données",
        url_tuto: "https://www.grafikart.fr/tutoriels/components-814",
        url_vue_link: "https://fr.vuejs.org/v2/guide/components-custom-events.html",
        url_vue_title: "Évènements personnalisés"
    }
})