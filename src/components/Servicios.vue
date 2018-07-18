<template>
  <div class="hello">
    <h1>Servicios</h1>
    <p>{{msg}}</p>
    <!-- Hello {{ $route.params.name }} -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Servicios',
  data () {
    return {
      msg: 'Mis Servicios'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
