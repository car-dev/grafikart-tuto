<template>
  <div id="app">
    <div class="four-column grid">
      <div class="column" v-for="user in users" :key="user">
        <div class="card">
          <div class="header">
            <input type="text" v-model="user.name">
          </div>
          <div class="description">
            {{ user.address.street }} <br/>
            {{ user.address.zipcode }} {{ user.address.city}} <br/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      users: [ ]
    }
  },
  mounted () {
    this.$http.get('http://jsonplaceholder.typicode.com/users').then(
      (data) => {
        console.log(data.body)
        // this.users = data.body
        // check if json
        data.json().then(
          (data) => {
            this.users = data
          }
        )
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
</script>

<style>

</style>
