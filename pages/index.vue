<template>
  <div class="home">
    <div class="list">
      <li
        v-for="whisper in orderBy(whispers, 'date', -1)"
        :key="whisper.id"
        class="item"
      >
        <span>
          投稿内容:{{ whisper.content }} 投稿時間:{{
            whisper.timestamp
          }}ユーザーID:{{ whisper.uid }}
        </span>
        <!-- <div class="user-box">
          <div
            class="avatar"
            :style="'background-image:url(' + url + ')'"
          ></div>
          <p class="user-name">{{ whisper.uid }}</p>
        </div>
        <div class="content" v-html="whisper.content"></div> -->
      </li>
      <label for="content"> Whisperの内容 </label>
      <input
        type="text"
        id="content"
        placeholder="Whisperの内容"
        v-model="content"
      />
      <button @click="add">投稿追加</button>
    </div>
  </div>
</template>

<script>
import { db } from "~/plugins/firebase";
import firebase from "~/plugins/firebase";
import Vue2Filters from "vue2-filters";
export default {
  data() {
    return {
      content: "",
      uid: "",
      whispers: [],
    };
  },
  mixins: [Vue2Filters.mixin],
  methods: {
    async add() {
      await db
        .collection("whispers")
        .doc()
        .set({
          content: this.content,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid: this.uid,
        })
        .then((result) => {
          console.log("Document successfully written!", result);
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    },
  },
};
</script>
<style lang="stylus" scoped>
.item {
  list-style: none;
  border-top: 1px solid #eee;
  padding: 5px 15px;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: flex-start;
  position: relative;

  &:first-child {
    border: none;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.02);
  }

  .user-box {
    margin: 10px 10px 10px 0;

    .avatar {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      border: 1px solid #eee;
      background-size: cover;
    }

    .user-name {
      margin: 5px 0 0 0;
      text-align: center;
      font-size: 0.7rem;
      line-height: 0.7rem;
      width: 50px;
    }
  }

  .content {
    padding: 10px;
  }
}
