<template>
  <v-app>
    <TheNavigation :drawer.sync="drawer"/>
    <v-toolbar dark fixed app class="teal accent-4">
      <v-toolbar-title>[LOGO]</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <nuxt/>
      </v-container>
    </v-content>
    <!-- <v-footer app inset>
      <span>&copy; Powered by <a style="text-decoration: none" target="_blank" href="https://prodequa.com/"><span style="font-weight: bold">Prodequa</span></a></span>
    </v-footer> -->
  </v-app>
</template>

<script>
import TheNavigation from '~/components/TheNavigation'
export default {
  components: {
    TheNavigation
  },
  data () {
    return {
      drawer: null
    }
  }
}
</script>
<style>
</style>
