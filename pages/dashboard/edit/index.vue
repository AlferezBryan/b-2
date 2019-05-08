<template lang="html">
  <v-container grid-list-md pa-0>
    <v-form>
      <h1 class="display-1 text-xs-center font-weight-bold py-3 teal--text">Edita tu información</h1>
      <v-layout row wrap p-0>
        <v-flex xs10 sm6 offset-xs1 offset-sm3>
          <v-card class="">
            <h2 class="pt-4 mb-0 font-weight-bold teal--text text-xs-center">Información básica</h2>
            <v-card-text class="">
              <v-text-field
                v-model="form.name"
                :counter="20"
                label="Nombre"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.age"
                label="Edad"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.height"
                label="Estatura"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.width"
                label="Peso"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.gender"
                label="Género"
                required
              ></v-text-field>
            </v-card-text>
          </v-card>
          <br>
          <v-card class="text-xs-center">
            <h2 class="pt-4 mb-0 font-weight-bold teal--text">Estilo de vida</h2>
            <v-card-text class="">
              <v-layout row wrap>
                <v-flex xs4 @click="form.style = '1'">
                  <v-card :class="form.style === '1' ? 'teal accent-4 white--text':''">
                    <v-card-text>
                      <p class="font-weight-bold mb-0">Normal</p>
                    </v-card-text>
                    <v-divider/>
                    <v-card-text>
                      <p>[Imagen caminando]</p>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4 @click="form.style = '2'">
                  <v-card :class="form.style === '2' ? 'teal accent-4 white--text':''">
                    <v-card-text>
                      <p class="font-weight-bold mb-0">Ejercitado</p>
                    </v-card-text>
                    <v-divider/>
                    <v-card-text>
                      <p>[Imagen corriendo]</p>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4 @click="form.style = '0'">
                  <v-card :class="form.style === '0' ? 'teal accent-4 white--text':''">
                    <v-card-text>
                      <p class="font-weight-bold mb-0">Sedentario</p>
                    </v-card-text>
                    <v-divider/>
                    <v-card-text>
                      <p>[Imagen sentado]</p>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
          <br>
          <v-card class="text-xs-center">
            <h2 class="pt-4 mb-0 font-weight-bold teal--text">Agentes patológicos</h2>
            <v-card-text class="">
              <v-layout row wrap>
                <v-flex xs6>
                  <v-checkbox
                    v-model="form.illness1"
                    class="ma-0"
                    label="Enfermedad 1"
                  ></v-checkbox>
                </v-flex>
                <v-flex xs6>
                  <v-checkbox
                    v-model="form.illness2"
                    class="ma-0"
                    label="Enfermedad 2"
                  ></v-checkbox>
                </v-flex>
                <v-flex xs6>
                  <v-checkbox
                    v-model="form.illness3"
                    class="ma-0"
                    label="Enfermedad 3"
                  ></v-checkbox>
                </v-flex>
                <v-flex xs6>
                  <v-checkbox
                    v-model="form.illness4"
                    class="ma-0"
                    label="Enfermedad 4"
                  ></v-checkbox>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <div class="text-xs-center pt-4">
        <v-btn round color="teal accent-4 white--text" @click="save">Guardar</v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      form: {
        name: '',
        age: '',
        gender: '',
        height: '',
        width: '',
        style: '',
        illness1: false,
        illness2: false,
        illness3: false,
        illness4: false,
        tmb: '',
        imc: ''
      }
    }
  },
  async mounted() {
    this.form.name = this.$auth.user.name
    this.form.gender = this.$auth.user.gender
    var estado = await this.$axios.get(process.env.API_URL + '/admin/staff/status/' + this.$auth.user.id)
    this.form.age = estado.data.age
    this.form.height = estado.data.height
    this.form.width = estado.data.width
    this.form.style = estado.data.style
    this.form.illness1 = estado.data.illness1
    this.form.illness2 = estado.data.illness2
    this.form.illness3 = estado.data.illness3
    this.form.illness4 = estado.data.illness4
    this.form.tmb = estado.data.tmb
    this.form.imc = estado.data.imc
  },
  methods: {
    async save() {
      if (this.loading) return
      try {
        this.loading = true
        if (this.form.gender === 'M') {
          this.form.tmb = 10*this.form.width+6.25*this.form.height-5*this.form.age+5
        } else {
          this.form.tmb = 10*this.form.width+6.25*this.form.height-5*this.form.age-161
        }
        if (this.form.style === '0') this.form.tmb = this.form.tmb*1.2
        if (this.form.style === '1') this.form.tmb = this.form.tmb*1.375
        if (this.form.style === '2') this.form.tmb = this.form.tmb*1.55
        this.form.imc = (this.form.width/(this.form.height*this.form.height/10000)).toFixed(2)
        await this.$axios.$put('/admin/staff/employees/'+this.$auth.user.id, this.form)
        this.$router.push('/dashboard')
        this.loading = false
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>

<style lang="css">
</style>
