<template lang="pug">
  section#title-bar( v-if="currentWindow" )
    p Electron 
    button( @click="currentWindow.minimize()" ) -
    button( @click="currentWindow.isMaximized() ? currentWindow.unmaximize() : currentWindow.maximize()" ) M
    button( @click="currentWindow.close()" ) X
</template>

<script>
  export default {
    data () {
      return { 
        currentWindow: null
      }
    },

    mounted () {
      const { remote } = window.electron

      this.currentWindow = remote.getCurrentWindow()
    },
  }
</script>

<style lang="sass" scoped>
  section#title-bar 
    width: 100vw
    height: 30px
    position: sticky
    top: 0
    left: 0
    background-color: #666666
    -webkit-app-region: drag
    display: flex
    align-items: center
    justify-content: flex-end

    *
      color: white
  
  p
    margin-right: auto
  
  button
    height: 100%
    width: 40px
    -webkit-app-region: no-drag
</style>
