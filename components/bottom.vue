<template>
  <v-bottom-navigation fixed>
    <v-btn >
      <span>ホーム</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="/">
      <span>お店一覧</span>
      <v-icon>mdi-store</v-icon>
    </v-btn>

    <v-btn to="post">
      <span>投稿</span>
      <v-icon>mdi-post</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
