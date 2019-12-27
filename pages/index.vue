<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div id="upload_prev" class="upload"></div>

      <label class="upload-img-btn">
        画像を選択
        <input type="file" id="hoge" @change="photo" style="display:none;" />
      </label>
    </v-flex>

  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
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