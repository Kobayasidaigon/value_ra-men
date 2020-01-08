<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Bottom></Bottom>
  </v-app>
</template>

<script>
import firebase from "~/plugins/firebase";
import Bottom from "~/components/bottom.vue";

var db = firebase.firestore();

export default {
  data () {
    return {
      title: 'Vuetify.js'
    }
  },
  components:{
    Bottom
  }
}
</script>
