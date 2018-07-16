<template>
  <v-app>
    <TheNavigation :drawer.sync="drawer"/>
    <v-toolbar color="amber" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>RDM Admin</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer color="amber" app inset>
      <span class="white--text">&copy; Powered by <a style="text-decoration: none; color: white " target="_blank" href="https://prodequa.com/"><span style="font-weight: bold">Prodequa</span></a> </span>
    </v-footer>
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
