<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col v-for="n in this.list" :key="n" cols="12" md="4">
          <v-item>
            <v-card class="d-flex align-center" dark height="300">
              <div class="list">
                <div class="title">
                  <p>{{n.name}}</p>
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
import { darkblue } from 'color-name';

var db = firebase.firestore();
export default {
  data: () => {
    list: [];
  },
  created() {
    this.store = []
    db.collection("ra-men").get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        this.store.push(doc.data());
        console.log(doc.data());
      })
    })
    this.list = this.store
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
  padding-left:20px; 
}
</style>
