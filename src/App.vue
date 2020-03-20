<template lang="pug">
  section#app
    Titlebar
    router-view
</template>

<style lang="sass">
  *
    margin: 0
    padding: 0
    box-sizing: border-box
  
  button
    background-color: transparent
    border: none
    outline: none

    &:hover
      background-color: rgba(white, 0.1)
</style>

<script>
import Titlebar from "@/components/Titlebar.vue"

export default {
  components: {
    Titlebar,
  }
}
</script>
