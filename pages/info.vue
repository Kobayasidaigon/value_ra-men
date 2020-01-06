<template>
  <v-card class="mx-auto my-12" max-width="374">
    <v-img height="180" id="image" style="margin;0 auto;"></v-img>

    <v-card-title>{{this.store_name}}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating :value="this.value" color="amber" dense half-increments readonly size="14"></v-rating>

        <div class="grey--text ml-4">美味しさ</div>
      </v-row>

      <div>コメント</div>
      <div>{{this.store_comment}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>スープ</v-card-title>

    <v-card-text>
      <v-chip-group v-model="this.soup_selection" active-class="deep-purple accent-4 white--text" column>
        <v-chip v-for="soup in soup_janl" :key="soup" :value="soup">
          {{soup}}
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-title>麵の太さ</v-card-title>
    <v-card-text>
      <v-chip-group v-model="this.men_selection"  active-class="deep-purple accent-4 white--text" column>
       <v-chip v-for="men in men_hutosa" :key="men" :value="men">
         {{men}}
       </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>
<script>
import firebase from "~/plugins/firebase";

var db = firebase.firestore();
export default {
  data: () => {
    return {
      list: [],
      soup_janl: ["醤油", "豚骨", "味噌", "魚介", "鳥白湯", "まぜそば", "つけ麺"],
      men_hutosa: ["極細麵", "細めん", "中太麵", "ちぢれ麵", "太麺"],
      storeId: "",
      store_name:"",
      store_comment:"",
      men_selection:"",
      soup_selection:"",
      value:""
    };
  },
  methods: {
    get_store_info: function() {
      const self = this
      this.store = [];
      db.collection("ra-men")
        .get()
        .then(query => {
          db.collection("ra-men")
            .doc(this.storeId)
            .get()
            .then(list => {
              self.storeDetail = list.data()
              self.store_name = self.storeDetail.name,
              self.store_comment = self.storeDetail.comment,
              self.men_selection = self.storeDetail.men
              self.soup_selection = self.storeDetail.soup
              self.value = self.storeDetail.value
              firebase.storage().ref().child(list.data().image).getDownloadURL().then(url=>{
                document.getElementById("image").style.backgroundImage = "url("+url+")";
              })
            });
        });
    }
  },
  created() {
    this.get_store_info();
  },
  asyncData: context => ({
    storeId: context.query.storeId
  })
};
</script>
<style scoped>
#image{

}
</style>