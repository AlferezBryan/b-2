<template lang="html">
  <div class="">
    <h1 class="display-1 text-md-center mb-2">Casos de estudio</h1>
    <!-- <div class="my-4">
      <v-btn large to="/dashboard/contact/new">Nuevo Formulario</v-btn>
    </div> -->
    <v-data-table :headers="headers" :items="form" class="elevation-1" >
        <template slot="items" slot-scope="props">
          <!-- <td>{{ props.item.createdAt | formatDate}}</td> -->
          <td>{{ props.item.userID }}</td>
          <td>{{ props.item.age }}</td>
          <td>{{ props.item.height }}</td>
          <td>{{ props.item.width }}</td>
          <td>{{ props.item.imc }}</td>
          <!-- <v-btn :to="`/dashboard/contact/${props.item._id}/show`" small>Detalles</v-btn> -->
        </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  async asyncData ({ app }) {
    let form
    try {
      form = await app.$axios.$get('/admin/staff/status')
    } catch (e) {
      form = []
    }
    return { form }
  },
  data () {
    return {
      loading: false,
      deleting: {},
      formsPag: [],
      pagination: {},
      headers: [
        { text: 'Usuario', value: 'userID' },
        { text: 'Edad', value: 'age' },
        { text: 'Altura', value: 'height' },
        { text: 'Peso', value: 'width' },
        { text: 'IMC', value: 'imc' },
        // { text: 'Acciones', value: '' }

      ]
    }
  },
  mounted() {
    console.log(this.form);
  },
  computed: {
    pages () {
      if (this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) return 0

      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  },
  watch: {
    pagination: {
      async handler () {
        this.formsPag = await this.$axios.$get('/admin/contact/form', { params: { page: this.pagination.page } })
      }
    }
  }
}
</script>

<style lang="css">
</style>
