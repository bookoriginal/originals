<template>
  <div id="app">
    这是诗歌
  </div>
</template>

<script>

export default {

  methods: {
    initPoetry(){
      this.$axios.get(url)
      .then(()=>{
        
      })

    }
  },
  created() {
    this.initPoetry()
  },
}
</script>

<style>
</style>