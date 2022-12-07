!<template>
  <div class="board__wrap">
    <h2>게시판 목록보기</h2>
    <div class="board__wrap--innerbox board-list">
      <div v-for="post in posts" :key="post.id"  class="post__list--wrap">
        <PostItem 
        :title="post.title" 
        :content="post.content" 
        :createAt="post.createAt"
        @click="goPage(post.id)"
        >
        </PostItem>
      </div>
    </div>
  </div>
</template>

<script setup>
  import PostItem from '@/components/posts/PostItems.vue'
  import { getPosts } from '@/api/posts';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const posts = ref([]);

  const fetchPosts = () => {
    posts.value = getPosts()
  }
  fetchPosts();
  const goPage = id => {
    router.push(`/posts/${id}`);
  }

</script>

<style lang="scss" scoped>

</style>