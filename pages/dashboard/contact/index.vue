<template lang="html">
  <div class="">
    <h1 class="display-1 text-md-center mb-2">Formulario de Contacto</h1>
    <div class="my-4">
      <v-btn large to="/dashboard/contact/new">Nuevo Formulario</v-btn>
    </div>
    <v-data-table :headers="headers" :items="form" class="elevation-1">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.createdAt | formatDate}}</td>
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.email }}</td>
          <td>{{ props.item.phone }}</td>
          <v-btn small @click="remove(props.item._id)">Eliminar</v-btn>
        </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  async asyncData ({ app }) {
    let form
    try {
      form = await app.$axios.$get('/admin/contact/form')
    } catch (e) {
      form = []
    }
    return { form }
  },
  data () {
    return {
      loading: false,
      deleting: {},
      headers: [
        { text: 'Fecha de Registro', value: 'createdAt' },
        { text: 'Nombre', value: 'name' },
        { text: 'Correo Electronico', value: 'email' },
        { text: 'Telefono', value: 'phone' },
        { text: 'Acciones', value: '' }

      ]
    }
  },
  methods: {
    async load () {
      if (this.loading) return
      try {
        this.loading = true
        this.form = await this.$axios.$get('/admin/contact/form')
      } catch (e) {
        console.log(e.message)
      } finally {
        this.loading = false
      }
    },
    async remove (_id) {
      if (this.deleting[_id]) return
      if (!window.confirm('¿Seguro que desea eliminar esta empleado')) return
      try {
        this.deleting[_id] = true
        await this.$axios.$delete('/admin/contact/form/' + _id)
        this.form = this.form.filter(e => e._id !== _id)
      } catch (e) {
        console.log(e.message)
      } finally {
        this.deleting[_id] = false
      }
    }
  }
}
</script>

<style lang="css">
</style>
