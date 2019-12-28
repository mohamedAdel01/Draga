<template>
  <div class="home">
    <div id="app">
      <div class="home">
        <section data-v-7e358560 id="navbar">
          <nav data-v-7e358560 class="navbar navbar-expand-lg navbar-light">
            <div data-v-7e358560 class="container">
              <a data-v-7e358560 href="#" class="navbar-brand">
                <span data-v-7e358560>Elite</span>
                <span data-v-7e358560>Corp</span>
              </a>
              <button
                data-v-7e358560
                type="button"
                data-toggle="collapse"
                data-target="#mainnav"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                class="navbar-toggler"
              >
                <span data-v-7e358560 class="navbar-toggler-icon"></span>
              </button>
              <div data-v-7e358560 id="mainnav" class="collapse navbar-collapse">
                <ul data-v-7e358560 class="navbar-nav ml-auto">
                  <li data-v-7e358560 class="nav-item">
                    <a data-v-7e358560 href="#" class="nav-link">Home</a>
                  </li>
                  <li data-v-7e358560 class="nav-item active">
                    <a data-v-7e358560 href="#" class="nav-link">
                      About
                      <span data-v-7e358560 class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li data-v-7e358560 class="nav-item">
                    <a data-v-7e358560 href="#" class="nav-link">Download</a>
                  </li>
                  <li data-v-7e358560 class="nav-item">
                    <a data-v-7e358560 href="#" class="nav-link">Register</a>
                  </li>
                  <li data-v-7e358560 class="nav-item">
                    <a data-v-7e358560 href="#" class="nav-link">Login</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
        <section data-v-6673dc9e id="slider">
          <div data-v-6673dc9e class="category">
            <div data-v-6673dc9e class="container">
              <div data-v-6673dc9e class="solid">
                <h1 data-v-6673dc9e class="solid-tit">Please be open for water</h1>
                <h3 data-v-6673dc9e class="solid-desc">your journey shall began now!</h3>
                <a data-v-6673dc9e href="#">
                  <button data-v-6673dc9e class="btn">Register</button>
                </a>
                <a data-v-6673dc9e href="#">
                  <button data-v-6673dc9e class="btn">Login</button>
                </a>
              </div>
              <div data-v-6673dc9e class="clearfix"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// local import for component
import slider from "../components/home/slider";
export default {
  components: {
    slider
  }
};
</script>
