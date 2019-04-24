<template lang="html">
  <v-container grid-list-md pa-0>
    <h1 class="display-1 text-xs-center font-weight-bold py-3 teal--text">¡Bienvenido {{this.$auth.user.name}}!</h1>
    <v-layout row wrap p-0>
      <v-flex xs10 s4 offset-xs1>
        <!-- <div :style="`background-image: url(${apimage(this.$auth.user.img)})`" style=""> -->
        <div class="text-xs-center text-s-right">
          <!-- <img :src="this.$auth.user.avatar" alt="avatar" width="201px" style="border-radius: 50%"> -->
          <img src="/contact.png" alt="avatar" width="201px" style="border-radius: 50%">
        </div>
      </v-flex>
      <v-flex xs10 s5 offset-xs1>
        <v-card class="">
          <v-card-title class="">
            <div class="">
              <p>Nombre: {{this.$auth.user.name}}</p>
              <p>Edad: {{this.$auth.user.age}}22 años</p>
              <p>Género: Masculino</p>
              <p>Estatura: 1.77 m</p>
              <p class="mb-0">Peso: 90 Kg</p>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <div class="text-xs-center pt-4">
      <v-btn round color="teal accent-4 white--text" @click="$router.push('/dashboard/edit')">Actualizar Información</v-btn>
    </div>
  </v-container>
</template>

<script>
</script>

<style lang="css">
</style>
