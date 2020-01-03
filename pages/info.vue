<template>
  <v-card class="mx-auto my-12" max-width="374">
    <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating :value="this.value" color="amber" dense half-increments readonly size="14"></v-rating>

        <div class="grey--text ml-4">美味しさ</div>
      </v-row>

      <div class="my-4 subtitle-1 black--text">$ • Italian, Cafe</div>

      <div>コメント</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>麵の太さ</v-card-title>

    <v-card-text>
      <v-chip-group v-model="soup_selection" active-class="deep-purple accent-4 white--text" column>
        <v-chip>醤油</v-chip>
        <v-chip>豚骨</v-chip>
        <v-chip>味噌</v-chip>
        <v-chip>魚介</v-chip>
        <v-chip>鳥白湯</v-chip>
        <v-chip>まぜそば</v-chip>
        <v-chip>つけ麺</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-title>スープ</v-card-title>
    <v-card-text>
      <v-chip-group v-model="men_selection" active-class="deep-purple accent-4 white--text" column>
        <v-chip>極細麵</v-chip>
        <v-chip>細めん</v-chip>
        <v-chip>中太麵</v-chip>
        <v-chip>ちぢれ麵</v-chip>
        <v-chip>太麺</v-chip>
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
      storeId: "",
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
              self.men_selection = self.storeDetail.men
              self.soup_selection = self.storeDetail.soup
              self.value = self.storeDetail.value
            });
        });
        console.log(this.soup_selection);
    }
  },
  mounted() {
    this.get_store_info();
  },
  asyncData: context => ({
    storeId: context.query.storeId
  })
};
</script>
