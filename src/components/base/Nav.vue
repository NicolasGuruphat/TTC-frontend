<template>
  <nav class="navbar  navbar-expand-lg indigo">
    <div class="container-fluid">
      <router-link to="/home" class="navbar-brand">TTC</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-light navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/search"
              class="nav-link active"
              aria-current="page"
              >Trouve un Club !</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/apropos" class="nav-link">A propos</router-link>

          </li>


          

        </ul>
        <!-- <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Cherche un club"
            aria-label="Search"
          />
           <button class="btn btn-outline-light" type="submit">
            Cherche
          </button> 
        </form> -->
      </div>
    </div>
  </nav>
</template>

<style scoped>


.btn
{
  background-color: #0B162C;
  color: #26325E;
}

nav {
  background-color: #137C8B;
}

.navbar-brand {
  padding: 0;
  margin-right: 20px;
  padding-bottom: auto;
  font-weight: bold;
  font-size: 20px;

  color: #B8CBD0 !important;
}

a{
  font-weight: bold;
  
}

.nav-link
{
  color: #B8CBD0;
}
a:hover{
  color: white !important;
}

</style>
