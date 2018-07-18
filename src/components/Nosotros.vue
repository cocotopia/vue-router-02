<template>
  <div class="hello">
    <h1>Nosotros</h1>
    <p>{{msg}}</p>
    <!-- Hello {{ $route.params.name }} -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Nosotros',
  data () {
    return {
      msg: 'Somos lo que somos'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
