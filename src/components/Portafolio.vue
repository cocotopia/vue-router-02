<template>
  <div class="hello">
    <h1>Portafolio</h1>
    <p>{{msg}}</p>
    <!-- Hello {{ $route.params.name }} -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Portafolio',
  data () {
    return {
      msg: 'Mi Portafolio'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
