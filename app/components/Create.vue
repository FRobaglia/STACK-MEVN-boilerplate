<template>
  <div>
    <form @submit.prevent="addProfile">
      <input type="text" v-model="profile.name">
    </form>
    <input type="submit">
  </div>
</template>

<script>

export default {
  data() {
    return {
      profile: {}
    };
  },
  methods: {
    addProfile() {
      let uri = 'http://localhost:4000/profiles/create';
      this.axios.post(uri, this.profile).then(() => {
        this.$router.push({
          name: 'profile'
        })
      });
    }
  }
};
</script>
