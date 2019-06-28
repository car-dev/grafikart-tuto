new Vue({
    el: '#app',
    chapter: 'Chapitre 2',
    data: {
        message: 'Salut les gens',
        link: 'http://grafikart.fr',
        success: true,
        persons: ["Jonathan", "Marion", "Jean"],
        customstyle: {
            'font-size': '200%',
            'color': 'blue',
        },
    },
    methods: {
        close: function() {
            this.message = "vous avez fermé le message";
            this.success = false;
        },
        otherstyle: function() {
            if (this.success) {
                return {
                    'font-size': '300%'
                }
            } else {
                return {
                    'font-size': '50%'
                }
            }
        }
    }
    
})

let vmMenu = new Vue({
    el: '#menu',
    data: {
        chapter: "Chapitre 2 - Les bases d'interactions App <=> Html",
    }
})