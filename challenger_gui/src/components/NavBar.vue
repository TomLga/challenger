<template>
    <div>
        <nav class="wholeNav navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img class="logo" src="https://i.postimg.cc/sfLgCSsg/LT-logo.png" alt="logo">
                </a> 
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
            
                  <li class="nav-item">
                    <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/about" class="nav-link" aria-current="page">About</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/products" class="nav-link" aria-current="page">Products</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/contact" class="nav-link" aria-current="page">Contact</router-link>
                  </li>
                 
                  <li class="nav-item">
                    <router-link to="/usersView" class="nav-link" aria-current="page">Users</router-link>
                  </li>
                 
                
                </ul>
              </div>
            </div>
            <router-link to="/login" class="loginSignUp" aria-current="page">login/signup</router-link>
                  
          </nav>
        
    </div>
</template>

