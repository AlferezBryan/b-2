<template lang="html">
  <div class="">
    <h1 class="display-1 text-md-center mb-2">Empleados</h1>
    <div class="my-4">
      <v-btn large to="/dashboard/employees/new">Nuevo Empleado</v-btn>
    </div>
    <v-data-table :headers="headers" :items="employees" class="elevation-1">
      <!-- <no-ssr> -->
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="">{{ props.item.auth.email }}</td>
          <v-btn small @click="remove(props.item._id)">Eliminar</v-btn>
        </template>
      <!-- </no-ssr> -->
    </v-data-table>
  </div>
</template>

<script>
export default {
  async asyncData ({ app }) {
    let employees
    try {
      employees = await app.$axios.$get('/admin/staff/employees')
    } catch (e) {
      employees = []
    }
    return { employees }
  },
  data () {
    return {
      loading: false,
      deleting: {},
      headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'Correo', value: 'auth.email' },
        { text: 'Acciones', value: '' }

      ]
    }
  },
  methods: {
    async load () {
      if (this.loading) return
      try {
        this.loading = true
        this.employees = await this.$axios.$get('admin/staff/employees')
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
        await this.$axios.$delete('/admin/staff/employees/' + _id)
        this.employees = this.employees.filter(e => e._id !== _id)
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
