<template lang="html">
  <v-container grid-list-md text-xs-center >
    <h1 class="display-1 text-md-center mb-2">¡Bienvenido {{this.$auth.user.name}}!</h1>
    <v-layout row wrap pa-5>
      <v-flex xs4 offset-xs1>
        <v-avatar
          :size="256"
          color="grey lighten-4"
        >
          <img :src="this.$auth.user.avatar" alt="avatar">
        </v-avatar>
      </v-flex>
      <v-flex xs6>
        {{this.$auth.user.name}}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
</script>

<style lang="css">
</style>
