
import store from './../store/NotificationsStore'

export default {
    name: 'counter',
    data() {
        return {
            state: store.state,
            
        }
    },
    computed: {
        count: function() {
            return this.state.count
        }
    },
    methods: {
        increment: function() {
            store.increment()
        }
    }
}