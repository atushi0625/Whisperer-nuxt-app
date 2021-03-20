<template>
  <li class="item">
    <div class="user-box">
      <div
        class="avatar"
        :style="'background-image: url(' + user.photoURL + ')'"
      ></div>
      <p class="user-name">{{ user.name }}</p>
    </div>
    <div class="content" v-html="whisper.content"></div>
  </li>
</template>
<script>
export default {
  props: ["id", "uid"],
};
</script>
