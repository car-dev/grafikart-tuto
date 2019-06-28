let slides = {
    methods: {
        enter: function(el, done) {
            $(el).hide().slideDown(1000, done)
        },
        leave: function(el, done) {
            $(el).show().slideUp(1000, done)
        }
    }
}

export default {
    mixins: [slides],
    name: "alert",
    data() {
        return {
            visible:true,
            items: [
                1, 2, 3, 4, 5
            ],
            query: '',
            list: [
              { msg: 'Bruce Lee' },
              { msg: 'Jackie Chan' },
              { msg: 'Chuck Norris' },
              { msg: 'Jet Li' },
              { msg: 'Kung Fury' }
            ]
        }
    },
    methods: {
        toggle: function() {
            this.visible = !this.visible
        },
        add: function() {
            this.items.push(Math.round(Math.random()*100))
        },
        shuffle: function() {
            this.items = [2, 3, 4, 5, 8]
        },
        beforeEnter: function (el) {
            el.style.opacity = 0
            el.style.height = 0
        },
        enter: function (el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function () {
            $.Velocity(
                el,
                { opacity: 1, height: '1.6em' },
                { complete: done }
            )
            }, delay)
        },
        leave: function (el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function () {
            $.Velocity(
                el,
                { opacity: 0, height: 0 },
                { complete: done }
            )
            }, delay)
        }
    },
    computed: {
      computedList: function () {
        var vm = this
        return this.list.filter(function (item) {
          return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
        })
      }
    },
}