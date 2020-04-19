<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

//
<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  components: {
    EventCard,
  },
  data() {
    return {
      events: [],
    }
  },
  created() {
    EventService.getEvents()
      .then(res => {
        console.log(res.data)
        this.events = res.data
      })
      .catch(err => console.log(err))
  },
}
</script>
