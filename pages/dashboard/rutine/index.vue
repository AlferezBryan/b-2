<template lang="html">
  <v-container grid-list-md pa-0>
    <h1 class="display-1 text-xs-center font-weight-bold py-3 teal--text">Recomendaciones</h1>
        <v-layout row wrap p-0 class="text-xs-center">
          <v-flex xs10 sm6 offset-xs1 offset-sm3>
            <v-card>
              <v-card-text>
                Información
              </v-card-text>
              <v-divider/>
              <v-card-text style="height: auto">
                <!-- [Imagen 3] -->
                <p>Condición actual: {{condition}}.</p>
              </v-card-text>
              <v-divider/>
              <v-card-text>
                <p>De  acuerdo al último registro de dieta diaria, usted <span v-html="message"/>.</p>
                Preferiblemente consumir:
                <ul>
                  <li v-for="(item, i) in comida" :key="i">
                    {{item}}
                  </li>
                </ul>
                <br>
                Ejercicios:
                <ul>
                  <li>Correr: {{ejercicios.correr}} min</li>
                  <li>Abdominales: {{ejercicios.abdominales}} veces</li>
                  <li>Planchas: {{ejercicios.planchas}} veces</li>
                </ul>
                <!-- <p class="mb-0">Cantidad: 10</p> -->
                <!-- <v-icon>check_circle_outline</v-icon> -->
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      data: '',
      condition: '',
      rest: '',
      message: '',
      ejercicios: {
        correr: '',
        abdominales: '',
        planchas: '',
      },
      alimentos: [
        { name: 'Carnes', type: 'subir'},
        { name: 'Frutas', type: 'bajar'},
        { name: 'Verduras', type: 'bajar'},
        { name: 'Menestras', type: 'subir'},
        { name: 'Jugos', type: 'bajar'},
        { name: 'Harinas', type: 'subir'},
        { name: 'Pescado', type: 'subir'},
        { name: 'Aderezo', type: 'subir'},
        { name: 'Extracto', type: 'bajar'},
      ],
      comida: [],
      randomNumber: [
        { n1:'1', n2:'1', n3:'1', n4:'0', n5:'0'},
        { n1:'1', n2:'1', n3:'0', n4:'1', n5:'0'},
        { n1:'1', n2:'1', n3:'0', n4:'0', n5:'1'},
        { n1:'1', n2:'0', n3:'1', n4:'1', n5:'0'},
        { n1:'1', n2:'0', n3:'1', n4:'0', n5:'1'},
        { n1:'1', n2:'0', n3:'0', n4:'1', n5:'1'},
        { n1:'0', n2:'1', n3:'1', n4:'1', n5:'0'},
        { n1:'0', n2:'1', n3:'1', n4:'0', n5:'1'},
        { n1:'0', n2:'1', n3:'0', n4:'1', n5:'1'},
        { n1:'0', n2:'0', n3:'1', n4:'1', n5:'1'}
      ]
    }
  },
  async mounted () {
    this.data = await this.$axios.get(process.env.API_URL + '/admin/staff/status/' + this.$auth.user.id)
    // console.log('18.5',this.data.data.imc,'24.9');
    if (this.data.data.imc < 18.5) {
      this.condition = 'Insuficiencia Ponderal'
    } else if (this.data.data.imc < 25) {
      this.condition = 'Normal'
    } else if (this.data.data.imc < 30) {
      this.condition = 'Sobrepeso'
    } else {
      this.condition = 'Obesidad'
    }
    this.rest = this.data.data.diet - this.data.data.tmb
    if (this.rest > 0) {
      this.message = 'tiene aproximadamente <b>' + this.rest + 'KCal</b> extra'
      this.ejercicios.correr = parseInt(this.rest/15)
      this.ejercicios.abdominales = parseInt(this.rest/6)
      this.ejercicios.planchas = parseInt(this.rest/13)
      let array = []
      let x = parseInt(Math.random(this.randomNumber.length)*10)
      if(x>9) x=9
      if(x<0) x=0
      for (var i = 0; i < this.alimentos.length; i++) {
        if (this.alimentos[i].type ==='bajar') {
          array[array.length] = this.alimentos[i].name
          this.comida = array
        }
      }
    } else {
      this.message = 'necesita aproximadamente <b>' + (-this.rest) + 'KCal</b> más'
      let array = []
      let x = parseInt(Math.random(this.randomNumber.length)*10)
      if(x>9) x=9
      if(x<0) x=0
      for (var i = 0; i < this.alimentos.length; i++) {
        if (this.alimentos[i].type ==='subir') {
          array[array.length] = this.alimentos[i].name
          this.comida = array
        }
      }
    }
  }
}
</script>

<style lang="css">
</style>
