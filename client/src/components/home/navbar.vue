<template>
  
  <nav id="navbar" class="col-12 d-flex justify-content-center align-items-center">
    <div class="col-9 d-flex justify-content-between">
      <h1>logo</h1>
      <div id="navItems" :class="[{'d-none': hideNavItems} , 'col-lg-6 col-md-9 d-none d-md-flex align-items-center']">
        <ul class="d-flex text-center col-12 justify-content-between mb-0">
           <li>Home</li>
           <li>About</li>
           <li>Download</li>
           <li>Register</li>
           <li>Login</li>
        </ul>
      </div>
      <div class="burger-btn" @click="hideNavItems = !hideNavItems">
        <div class="d-flex d-md-none">
          <img src="../../assets/img/list.svg">
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
   data() {
    return {
      hideNavItems: false
    };
  },
  mounted() {
    if (window.innerWidth < 767) this.hideNavItems = true;
  }
};
</script>

<style lang="scss" scoped>
#navbar {
  .burger-btn {
    display: none;
  }
  background:  rgb(28, 42, 48);;
  height: 70px;
  h1{
      color: white;
  }
  ul {
    li {
      list-style: none;
       padding: 10px;
      cursor: pointer;
       color: white;
      a {
        text-decoration: none;
       
      }
      
    }
  }
  img{
    width: 50px;
    height: 30px;
  }


  
}

@media screen and (max-width: 767px) {
  #navbar {
    background:  rgb(28, 42, 48);
    .burger-btn {
      display: block;
      position: absolute;
      width: 30px;
      padding: 5px;
      top: 13px;
      right: 10px;
    }
    #navItems {
      position: absolute;
      background:  rgb(28, 42, 48);;
      z-index: 1;
      width: 100%;
      top: 60px;
      ul {
        li {
          &:hover {
            background: #222;
          }
        }
      }
    }
  }
}
</style>


