<template lang="html">
  <div class="">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title primary-title>
            <div class="">
              <h3 class="headline mb-0">Registro</h3>
            </div>
          </v-card-title>
          <v-divider/>
          <v-card-text>
            <v-form @submit.prevent="register" lazy-validation>
              <v-text-field
                v-model="form.name"
                :rules="nameRules"
                label="Nombre completo"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.auth.username"
                label="Nombre de usuario"
                :counter="10"
                required
              ></v-text-field>
              <v-text-field
                class="passwordxD"
                v-model="form.auth.password"
                label="Contraseña"
                required
              ></v-text-field>
              <v-card-actions >
                <v-spacer></v-spacer>
                <v-btn type="submit" :disabled="loading">Registrar</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      form: {
        name: '',
        auth: {
          username: '',
          password: ''
        }
      },
      nameRules: [
        (v) => !!v || 'Campo requerido'
      ],
    }
  },
  mounted() {
    console.log(this.$route.hash);
  },
  methods: {
    async register () {
      if (this.loading) return
      try {
        this.loading = true
        console.log(this.username);
        await this.$axios.$post('/register/register', this.form)
        this.$router.push('/')
      } catch (e) {
        // window.alert('e.response.data.message')
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="css">
</style>
