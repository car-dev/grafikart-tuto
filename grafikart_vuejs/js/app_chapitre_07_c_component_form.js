
let formUser = {
    props: {
        value: Object
    },
    data () {
        return {
            user: { ...this.value }
            // return JSON.parse(JSON.stringify(this.user))
        }
    },
    template: `
        <form @submit.prevent="save">
            <br/><slot name="header"></slot>
            <div class="form-group">
                <label for="firstname">Prénom</label>
                <input id="firstname" v-model="user.firstname" class="form-control" type="text" placeholder="Prénom">
            </div>
            <div class="form-group">
                <label for="lastname">Nom</label>
                <input id="lastname" v-model="user.lastname"  class="form-control" type="text" placeholder="Nom">
            </div>
            <button type="submit" class="ui btn btn-primary" >Envoyer</button>
            <br/><slot name="footer"></slot>
        </form>
    `,
    methods: {
        save() {
            this.$emit('input', this.user);
        }
    },
    mounted () {
        console.log(this.$slots);
    }
}

// Component principal (Parent)
let vm = new Vue({
    el: '#app',
    data: {
        message: "Salut les gens !",
        alert: false,
        user: {
            firstname: 'Jean',
            lastname: 'DeLaTour'
        }
    },
    filters: {
        
    },
    components: { 
        formUser,
    },
    methods: {
    }
})


let vmMenu = new Vue({
    el: '#menu',
    data: {
        chapter: "Chapitre 7 - Interagir avec un formulaire",
        url_tuto: "https://www.grafikart.fr/tutoriels/components-814",
        url_vue_link: "https://fr.vuejs.org/v2/guide/forms.html",
        url_vue_title: "Liaisons sur les champs de formulaire"
    }
})