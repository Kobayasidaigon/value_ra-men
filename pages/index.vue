<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col v-for="store in this.list" :key="store.id" cols="12" md="4">
          <v-item>
            <v-card class="d-flex align-center" dark height="300">
              <div class="list">
                <div id="image" :style="'background: url(' + store.image + '); background-position: center; background-repeat: no-repeat; background-size: cover;'" name="vue-img">
                  
                </div>
                 <div class="title">
                  <nuxt-link :to="'/info?storeId='+ store.id">{{store.name}}</nuxt-link>
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
    return {
      list: []
    };
  },
  created() {
    this.store = [];
    db.collection("ra-men").get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            var pushdata = doc.data()
          firebase.storage().ref().child(doc.data().image).getDownloadURL().then((url) => {
            pushdata.image = url
            this.store.push(pushdata)
          })
        });
      });
    this.list = this.store;
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
  padding-left: 20px;
}
#image{
  width:250px;
  height:200px;
  text-align: center;
  margin: 10px auto 0px auto;
}
</style>
