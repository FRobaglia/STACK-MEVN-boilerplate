<template>
  <div>
    <div class="profile" v-for="profile in profiles" :key="profile._id">
      <h1> {{ profile.name }} </h1>
    </div> 
  </div>
</template>

<script>

  export default {
    data() {
      return {
        profiles: [],
      }
    },
    mounted() {
      let uri = 'http://localhost:4000/profiles';
      this.axios.get(uri).then(response => {
        this.profiles = response.data;
      });
    }
  }

</script>
