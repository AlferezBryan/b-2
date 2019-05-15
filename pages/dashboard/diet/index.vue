<template lang="html">
  <v-container grid-list-md pa-0>
    <h1 class="display-1 text-xs-center font-weight-bold py-3 teal--text">Dieta Diaria</h1>
    <v-layout row wrap p-0>
      <v-flex xs10 sm6 offset-xs1 offset-sm3>
        <v-card class="">
          <v-card-text>
            <h2 class="font-weight-bold teal--text text-xs-center">Hoy</h2>
          </v-card-text>
          <v-divider/>
          <v-card-text class="">
            <form>
              <v-layout row wrap>

                <v-flex xs3>
                  <h3>Bebida</h3>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                  label="Agua"
                  v-model="diet.b1"
                  outline
                  required
                  type="number"
                  ></v-text-field>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                  label="Té/Café"
                  v-model="diet.b2"
                  outline
                  required
                  type="number"
                  ></v-text-field>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                  label="Avena"
                  v-model="diet.b3"
                  outline
                  required
                  type="number"
                  ></v-text-field>
                </v-flex>
                <v-flex xs3>
                  <h3>Sandwich</h3>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                  label="Ligero"
                  v-model="diet.s1"
                  outline
                  required
                  type="number"
                  ></v-text-field>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                  label="Regular"
                  v-model="diet.s2"
                  outline
                  required
                  type="number"
                  ></v-text-field>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                  label="Pesado"
                  v-model="diet.s3"
                  outline
                  required
                  type="number"
                  ></v-text-field>
                </v-flex>
                <v-flex xs3>
                  <h3>Platos</h3>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                  label="Ligero"
                  v-model="diet.p1"
                  outline
                  required
                  type="number"
                  ></v-text-field>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                  label="Regular"
                  v-model="diet.p2"
                  outline
                  required
                  type="number"
                  ></v-text-field>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                  label="Pesado"
                  v-model="diet.p3"
                  outline
                  required
                  type="number"
                  ></v-text-field>
                </v-flex>
                <v-flex xs3/>
                <v-flex xs3>
                  <v-text-field
                  label="Sopa"
                  v-model="diet.p4"
                  outline
                  required
                  type="number"
                  ></v-text-field>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                  label="Ensalada"
                  v-model="diet.p5"
                  outline
                  required
                  type="number"
                  ></v-text-field>
                </v-flex>
                <v-flex xs3/>
                <v-flex xs3>
                  <h3>Extra</h3>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                  label="Fruta"
                  v-model="diet.e1"
                  outline
                  required
                  type="number"
                  ></v-text-field>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                  label="Comida rápida"
                  v-model="diet.e2"
                  outline
                  required
                  type="number"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </form>

          </v-card-text>
          <div style="text-align: center">
            <v-btn color="success" @click="calcular">calcular</v-btn>
          </div>
          <v-divider/>
          <v-card-text>
            <h3 class="font-weight-thin text-xs-center">KCal totales: {{ total }}</h3>
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
      diet: {
        b1: '',
        b2: '',
        b3: '',
        s1: '',
        s2: '',
        s3: '',
        p1: '',
        p2: '',
        p3: '',
        p4: '',
        p5: '',
        e1: '',
        e2: '',
      },
      total: ''
    }
  },
  methods: {
    async calcular() {
      this.total =  this.diet.b1*0
                  + this.diet.b2*300
                  + this.diet.b3*500
                  + this.diet.s1*100
                  + this.diet.s2*150
                  + this.diet.s3*200
                  + this.diet.p1*300
                  + this.diet.p2*400
                  + this.diet.p3*700
                  + this.diet.p4*100
                  + this.diet.p5*150
                  + this.diet.e1*50
                  + this.diet.e2*200
      await this.$axios.$put('/admin/staff/employees/updateDiet/'+this.$auth.user.id, {'diet':this.total}) 
    }
  }
}
</script>

<style lang="css">
</style>
