<template lang="html">
  <div class="text-md-center">
    <!-- <img src="icon.ico" alt=""> -->
    <v-card class="elevation-12">
      <v-card-text>
        <h1>BalanZ</h1>
        <v-form ref="form" v-model="valid">
          <v-text-field v-model="auth.username" @keyup.enter="login" prepend-icon="person" name="login" label="Usuario" type="username" required></v-text-field>
          <v-text-field v-model="auth.password" @keyup.enter="login" prepend-icon="lock" name="password" label="Contraseña" id="password" type="password" required></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions >
        <v-spacer></v-spacer>
        <v-btn dark :disabled="!valid" @click="login">Acceder</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
      <v-card-actions >
        <v-spacer></v-spacer>
        <v-btn dark @click="register">Registrarse</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    <v-dialog v-if="incorrect" v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Error</v-card-title>
        <v-card-text>El usuario y/o contraseña es incorrecto</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="black" flat @click.native="dialog = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'auth',
  data () {
    return {
      url: process.env.API_URL,
      valid: true,
      dialog: false,
      incorrect: false,
      auth: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      if (!this.$refs.form.validate()) return
      console.log('hola')
      await this.$auth.loginWith('local', { data: this.auth }).then().catch(this.isLogin)
      this.$router.push('/dashboard')
    },
    async register () {
      this.$router.push('/register')
    },
    isLogin () {
      this.dialog = true
      this.incorrect = true
    }
  }
}
</script>

<style lang="css">
</style>
