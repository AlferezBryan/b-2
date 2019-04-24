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
                v-model="$auth.user.name"
                :counter="20"
                label="Nombre"
                required
              ></v-text-field>
              <v-text-field
                label="Estatura"
                required
              ></v-text-field>
              <v-text-field
                label="Peso"
                required
              ></v-text-field>
            </v-card-text>
          </v-card>
          <br>
          <v-card class="text-xs-center">
            <h2 class="pt-4 mb-0 font-weight-bold teal--text">Estilo de vida</h2>
            <v-card-text class="">
              <v-layout row wrap>
                <v-flex xs4>
                  <v-card class="teal accent-4 white--text">
                    <v-card-text>
                      <p class="font-weight-bold mb-0">Normal</p>
                    </v-card-text>
                    <v-divider/>
                    <v-card-text>
                      <p>[Imagen caminando]</p>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4>
                  <v-card class="">
                    <v-card-text>
                      <p class="font-weight-bold mb-0">Ejercitado</p>
                    </v-card-text>
                    <v-divider/>
                    <v-card-text>
                      <p>[Imagen corriendo]</p>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4>
                  <v-card class="">
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
                    class="ma-0"
                    label="Enfermedad 1"
                  ></v-checkbox>
                </v-flex>
                <v-flex xs6>
                  <v-checkbox
                    class="ma-0"
                    label="Enfermedad 2"
                  ></v-checkbox>
                </v-flex>
                <v-flex xs6>
                  <v-checkbox
                    class="ma-0"
                    label="Enfermedad 3"
                  ></v-checkbox>
                </v-flex>
                <v-flex xs6>
                  <v-checkbox
                    class="ma-0"
                    label="Enfermedad 4"
                  ></v-checkbox>
                </v-flex>
                <v-flex xs6>
                  <v-checkbox
                    class="ma-0"
                    label="Enfermedad 5"
                  ></v-checkbox>
                </v-flex>
                <v-flex xs6>
                  <v-checkbox
                    class="ma-0"
                    label="Enfermedad 6"
                  ></v-checkbox>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <div class="text-xs-center pt-4">
        <v-btn round color="teal accent-4 white--text" @click="$router.push('/dashboard')">Guardar</v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
</script>

<style lang="css">
</style>
