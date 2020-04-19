<template>
  <div>
    <h1>Create Event, {{ user.name }}</h1>
    <p>This event was created bt {{ user.id }}</p>
    <p>There are {{ catLength }} categories</p>
    <p>{{ getEventById(1) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState(['user', 'categories']),
    ...mapGetters(['catLength', 'getEventById']),
  },
}
</script>
