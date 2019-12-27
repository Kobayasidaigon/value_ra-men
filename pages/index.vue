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
      <v-textarea rows="1" solo name="input-7-4" label="店名"></v-textarea>
    </v-col>
    <v-col class="d-flex" cols="12" sm="6" no-resize="false">
      <v-select :items="value" label="美味しさ" solo></v-select>
    </v-col>
    <v-col class="d-flex" cols="12" sm="6">
      <v-select :items="soup_janl" label="スープジャンル" solo></v-select>
    </v-col>
    <v-col class="d-flex" cols="12" sm="6">
      <v-select :items="men_hutosa" label="麵の太さ" solo></v-select>
    </v-col>
    <v-col>
      <v-textarea rows="5" solo name="input-7-4" label="コメント"></v-textarea>
    </v-col>
    <v-btn>登録</v-btn>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  data: () => ({
    soup_janl: ["醤油", "豚骨", "味噌", "魚介", "鳥白湯", "まぜそば", "つけ麺"],
    men_hutosa: ["極細麵", "細めん", "中太麵", "ちぢれ麵", "太麺"],
    value: [1, 2, 3, 4, 5]
  }),
  components: {
    Logo,
    VuetifyLogo
  },
  methods: {
    photo: function(element) {
      var element = document.getElementById("hoge");
      // 読み込むファイル
      var file = element.files[0]; // 1つ目のファイル
      // FileReaderを作成
      var fileReader = new FileReader();
      // 読み込み完了時のイベント
      fileReader.onload = function(element) {
        const img = document.getElementById("upload_prev");
        img.style.backgroundImage = "url(" + element.target.result + ")";
      };
      // 読み込みを実行
      fileReader.readAsDataURL(file);
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