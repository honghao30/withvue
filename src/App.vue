<template>
  <v-app>
    <v-main>
      <IntroWeater/>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import IntroWeater from './components/IntroWeater.vue'

export default {
  name: 'App',

  components: {
    IntroWeater,
    HelloWorld,
  },

  data: () => ({
    //
  }),
}
</script>
