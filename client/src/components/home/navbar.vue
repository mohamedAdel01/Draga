<template>
  <nav id="navbar" class="col-12 d-flex justify-content-center align-items-center">
    <div class="col-9 d-flex justify-content-between">
      <h1>logo</h1>
      <div class="col-7 d-none d-lg-block">
        <ul class="d-flex col-12 justify-content-between">
          <li>home</li>
          <li>contact us</li>
          <li>about me</li>
        </ul>
      </div>
      <div class="d-block d-lg-none">list</div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#navbar {
  background: #ddd;
  height: 70px;
  ul {
    li {
      list-style: none;
    }
  }
}
</style>