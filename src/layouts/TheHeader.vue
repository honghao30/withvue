<template>
  <header>
    <nav class="navbar__wrap">
      <h1><RouterLink class="navbar-brand" to="/">WITH VUE</RouterLink></h1>
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="nav__wrap">
        <ul class="nav__list">
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/">
              Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/about">
              With Vue
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/posts">
              게시판
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/nested">
              My Work
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/my">
              Play Ground
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="d-flex">
        <button class="btn btn-outline-light" type="button" @click="goPage">
          글쓰기
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goPage = () => {
  router.push('/posts/Create');
};
</script>

<style lang="scss" scoped></style>
