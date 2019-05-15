<template lang="html">
  <v-navigation-drawer right v-model="showDrawer" fixed app width="250" class="pa-2 teal accent-4">
    <div class="py-4" style="text-align: center;">
      <v-avatar
        color="grey lighten-4"
        size=100
      >
        <!-- <img :src="this.$auth.user.avatar" alt="avatar"> -->
        <img src="/contact.png" alt="avatar">
      </v-avatar>
    </div>
    <p class="text-xs-center font-weight-bold white--text">
      ¡Hola {{this.$auth.user.name}}!
    </p>
    <v-list dense class="white--text">
      <v-list-tile @click="$router.push('/dashboard')">
        <v-list-tile-action>
          <v-icon medium dark>assignment_ind</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Información General</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-if="this.$auth.user.auth.username==='bryanxdz'" @click="$router.push('/dashboard/contact')">
        <v-list-tile-action>
          <v-icon medium dark>assignment_ind</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Casos de estudio</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="$router.push('/dashboard/diet')">
        <v-list-tile-action>
          <v-icon medium dark>fastfood</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Dieta Diaria</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="$router.push('/dashboard/rutine')">
        <v-list-tile-action>
          <v-icon medium dark>offline_bolt</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Rutina Diaria</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <!-- <v-list-tile @click="$router.push('/dashboard/recipes')">
        <v-list-tile-action>
          <v-icon medium dark>assignment</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Recetas Saludables</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile> -->
      <v-list-tile @click="$auth.logout()">
        <v-list-tile-action>
          <v-icon medium dark>exit_to_app</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Cerrar Sesión</v-list-tile-title>
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
