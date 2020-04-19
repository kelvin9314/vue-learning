<template>
  <router-link class="event-link" :to="{ name: 'event-show', params: { id: '1' } }">
    <div class="event-card -shadow">
      <span class="eyebrow">At {{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>
      <BaseIcon name="users" />
      <span>{{ event.attendess.length }} attending</span>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      event: {
        id: 1,
        title: 'Read a book',
        date: '2020-04-19',
        time: '18:00',
        attendess: [
          { id: 'abc132', name: 'kelvin' },
          { id: 'eee04', name: 'Queen' },
        ],
      },
    }
  },
}
</script>

// NOTE scope this specific style rule to this component
<style scopped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
