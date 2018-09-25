<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 mx-auto>
        <v-card>
          <v-card-title class="black white--text" primary-title >
            <v-flex text-xs-center>
              <h1>Formulario de Contacto</h1>
            </v-flex>
          </v-card-title>
          <v-layout row wrap>
            <v-flex xs3>
              <v-subheader class=" text-sm-center">Nombre</v-subheader>
            </v-flex>
            <v-flex xs9>
              <v-text-field
                :value="form.name"
                disabled
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs3>
              <v-subheader class=" text-sm-center">Email</v-subheader>
            </v-flex>
            <v-flex xs9>
              <v-text-field
                :value="form.email"
                disabled
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs3>
              <v-subheader class=" text-sm-center">Telefono</v-subheader>
            </v-flex>
            <v-flex xs9>
              <v-text-field
                :value="form.phone"
                disabled
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-btn :to="`/dashboard/contact`">Atrás</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  async asyncData ({ app, params, error }) {
    let form
    try {
      form = await app.$axios.$get('admin/contact/form/' + params.id)
    } catch (e) {
      error({ statusCode: 404, message: 'Contacto not found' })
    }
    return { form }
  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style lang="css">
</style>
