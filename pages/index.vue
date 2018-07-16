<template lang="html">
  <div class="text-md-center">
    <!-- <img src="icon.ico" alt=""> -->
    <v-card class="elevation-12">
      <v-card-text>
        <h1>Inicio de Sesión</h1>
        <v-form ref="form" v-model="valid">
          <v-text-field v-model="auth.email" @keyup.enter="login" prepend-icon="person" name="login" label="Login" type="email" required></v-text-field>
          <v-text-field v-model="auth.password" @keyup.enter="login" prepend-icon="lock" name="password" label="Password" id="password" type="password" required></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions >
        <v-spacer></v-spacer>
        <v-btn dark :disabled="!valid" @click="login">Login</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
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
      auth: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      if (!this.$refs.form.validate()) return
      await this.$auth.loginWith('local', { data: this.auth })
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style lang="css">
</style>
