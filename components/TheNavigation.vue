<template lang="html">
  <v-navigation-drawer v-model="showDrawer" fixed app width="250">
    <!-- <div style="text-align: center;">
      <img src="/icon.ico" width="200px" height="200px">
    </div> -->
    <v-list dense>
      <v-list-tile >
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Bienvenido al Dashboard</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="$router.push('/dashboard/contact')">
        <v-list-tile-action>
          <v-icon>folder</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Formulario</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="$router.push('/dashboard/employees')">
        <v-list-tile-action>
          <v-icon>folder</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Empleados</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="$auth.logout()">
        <v-list-tile-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ['drawer'],
  data () {
    return {
      showDrawer: null
    }
  },
  mounted () {
    this.showDrawer = this.drawer
  },
  watch: {
    drawer () {
      this.showDrawer = this.drawer
    },
    showDrawer () {
      this.$emit('update:drawer', this.showDrawer)
    }
  }
}
</script>

<style lang="css">
</style>
