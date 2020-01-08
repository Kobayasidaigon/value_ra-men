<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div id="upload_prev" class="upload"></div>

      <label class="upload-img-btn">
        画像を選択
        <input type="file" id="hoge" @change="photo" style="display:none;" />
      </label>
    </v-flex>

    <v-col>
      <v-textarea rows="1" solo name="input-7-4" label="店名" v-model="name"></v-textarea>
    </v-col>
    <v-col class="d-flex" cols="12" sm="6" no-resize="false">
      <v-select :items="value" label="美味しさ" solo v-model="value"></v-select>
    </v-col>
    <v-col class="d-flex" cols="12" sm="6">
      <v-select :items="soup_janl" label="スープジャンル" solo v-model="soup"></v-select>
    </v-col>
    <v-col class="d-flex" cols="12" sm="6">
      <v-select :items="men_hutosa" label="麵の太さ" solo v-model="men"></v-select>
    </v-col>
    <v-col>
      <v-textarea rows="5" solo name="input-7-4" label="コメント" v-model="comment"></v-textarea>
    </v-col>
    <v-btn @click="send" :disabled="!disable_btn" style="margin-bottom:50px;">登録</v-btn>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import firebase from "~/plugins/firebase";
import uuid from "uuid";
var db = firebase.firestore();

export default {
  data: () => {
    return {
      name: "",
      soup: "",
      men: "",
      store_value: "",
      comment: "",
      file: "",
      soup_janl: [
        "醤油",
        "豚骨",
        "味噌",
        "魚介",
        "鳥白湯",
        "まぜそば",
        "つけ麺"
      ],
      men_hutosa: ["極細麵", "細めん", "中太麵", "ちぢれ麵", "太麺"],
      value: ["1", "2", "3", "4", "5"],
      isTestDisabled: false
    };
  },
  components: {
    Logo,
    VuetifyLogo
  },
  methods: {
    photo: function(element) {
      var element = document.getElementById("hoge");
      // 読み込むファイル
      this.file = element.files[0]; // 1つ目のファイル
      // FileReaderを作成
      var fileReader = new FileReader();
      // 読み込み完了時のイベント
      fileReader.onload = function(element) {
        const img = document.getElementById("upload_prev");
        img.style.backgroundImage = "url(" + element.target.result + ")";
      };
      // 読み込みを実行
      fileReader.readAsDataURL(this.file);
    },
    send: function() {
      const store = {
        name: this.name,
        men: this.men,
        comment: this.comment,
        soup: this.soup,
        value: this.value
      };
      const fileName = this.file.name;
      const id = uuid();
      const storageRef = firebase.storage().ref(id);
      storageRef.put(this.file).then(function(snapshot) {
        db.collection("ra-men")
          .add(store)
          .then(doc => {
            db.collection("ra-men")
              .doc(doc.id)
              .update({
                id: doc.id,
                image: snapshot.ref.fullPath
              });
          });
      });
    }
  },
  computed: {
    disable_btn: function() {
      return (
        this.un_disable_name &&
        this.un_disable_value &&
        this.un_disable_soup &&
        this.un_disable_men &&
        this.un_disable_comment
      );
    },
    un_disable_name: function() {
      return this.name != "";
    },
    un_disable_value: function() {
      return this.value != "";
    },
    un_disable_soup: function() {
      return this.soup != "";
    },
    un_disable_men: function() {
      return this.men != "";
    },
    un_disable_comment: function() {
      return this.comment != "";
    }
  }
};
</script>
<style scoped>
.upload {
  width: 330px;
  height: 265px;
  margin-top: 32px;
  border-radius: 8px;
  background: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  border: 2px dashed rgba(112, 112, 112, 0.6);
}
.upload > .upload-img-btn {
  display: block;
  max-width: 120px;
  margin: 45% auto;
  padding: 15px;
  text-align: center;
  color: #515151;
  border-radius: 4px;
}
</style>
