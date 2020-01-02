<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col v-for="n in 3" :key="n" cols="12" md="4">
          <v-item>
            <v-card class="d-flex align-center" dark height="300">
              <div class="list">
                <div class="title">
                  <p>aiueo</p>
                </div>
              </div>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>
<script>
import firebase from "~/plugins/firebase";

var db = firebase.firestore();
export default {
  data: () => {
    list: [];
  },
  created() {
    let store_list = db.collection("ra-men").get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        this.list = doc.data()
      });
    });
  }
};
</script>
<style scoped>
.list {
  margin: 0 auto;
  position: relative;
  background-color: #fff;
  height: 280px;
  width: 380px;
}
.title {
  color: black;
  position: absolute;
  bottom: 0;
}
</style>
