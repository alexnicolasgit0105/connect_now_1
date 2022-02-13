<template>
  <Header></Header>
  <router-view/>
</template>
<script>
import Header from './components/Header'
  export default {
     components:{
         'Header':Header
     }
  }
</script>
<style lang="scss">
    body {
    background-color: #081221;
    color: #c1d1e8;
    font-size: 12px;
    }

    a {
    padding: 20px;
    color: white;
    }

    .router-link-exact-active {
    text-shadow: -12px -6px rgba(63, 107, 169, 0.5);
    }

    .bg-black {
    background-color: black;
    }

    .bg-green {
    background-color: green;
    }

    .tiles {
    background-color: #0c1c31;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }

    .game {
    margin-bottom: 10px;
    padding: 0 !important;
    }

    .game p {
    text-overflow:ellipsis;
    overflow:hidden;
    // Addition lines for 2 line or multiline ellipsis
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    }

    input[type="text"],
    input[type="email"],
    input[type="number"],
    select option,
    textarea {
    background-color: #182c47;
    }

    textarea {
    background: transparent;
    border: none;
    outline: none;
    }
</style>
