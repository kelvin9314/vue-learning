<template>
  <div>
    <h1>Showing event {{ event.name }}</h1>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
  props: ['id'],
  data() {
    return {
      event: {},
    }
  },
  created() {
    EventService.getEvent(id)
      .then(res => {
        this.event = res.data
      })
      .catch(err => console.log(err.response))
  },
}
</script>
