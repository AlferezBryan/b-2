<template lang="html">
  <div class="">
    <nuxt/>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'dashboard'
}
</script>

<style lang="css">
</style>
