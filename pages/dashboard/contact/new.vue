<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 mx-auto>
        <v-card>
          <v-card-title class="black white--text">
            <v-flex text-sm-center>
              <h1>Nueva Formulario de Contacto</h1>
            </v-flex>
          </v-card-title>
          <v-card-text>
            <form @submit.prevent="register" lazy-validation>
              <v-text-field
                v-model="form.name"
                label="Nombre"
                :rules="nameRules"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.email"
                label="Email"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.phone"
                label="Telefono"
                :rules="numberRules"
                counter="16"
                required
              ></v-text-field>
              <v-btn type="submit" :disabled="loading">Registrar</v-btn>
            </form>
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
      loading: false,
      form: {
        name: '',
        mail: '',
        phone: ''
      },
      nameRules: [
        (v) => !!v || 'Campo requerido'
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      numberRules: [
        (v) => !!v || 'Campo requerido',
        (v) => v.length <= 16 || 'El Campo debe tener menos de 16 caracteres'
      ],
      documentTypeRules: [
        (v) => !!v || 'Campo requerido',
        (v) => v.length <= 13 || 'El Campo debe tener menos de 13 caracteres'
      ]
    }
  },
  methods: {
    async register () {
      if (this.loading) return
      try {
        this.loading = true
        await this.$axios.$post('/admin/contact/form', this.form)
        this.$router.push('/dashboard/contact')
      } catch (e) {
        window.alert(e.response.data.message)
      } finally {
        this.loading = false
      }
    }
    // pickFile () {
    //   this.$refs.image.click()
    // },
    // async onFilePicked (e) {
    //   const file = e.target.files[0]
    //   if (file) {
    //     this.viability.logo = await getBase64(file)
    //     this.tempFilename = file.name
    //     this.imageUrl = this.viability.logo
    //   } else {
    //     this.tempFilename = ''
    //     this.imageUrl = 'Selecciona una imagen'
    //   }
    // }
  }
}

// async function getBase64 (file) {
//   return new Promise((resolve, reject) => {
//     const reader = new window.FileReader()
//     reader.readAsDataURL(file)
//     reader.onload = () => resolve(reader.result)
//     reader.onerror = error => reject(error)
//   })
// }
</script>
