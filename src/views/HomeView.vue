<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container mx-5 lg:mx-0 lg:max-w-screen-xl lg:mx-auto mt-10">
    <header>
      <nav>
        <h2 class="font-semibold text-xl mb-2">Pages Route</h2>
        <div class="grid gap-1 text-green-600">
          <RouterLink to="/" class="home-link">Home</RouterLink>
          <RouterLink to="/about" class="home-link">About</RouterLink>
          <RouterLink to="/teamregistration" class="home-link">Team Registration</RouterLink>
          <RouterLink to="/teamownerprofile" class="home-link">G! TO Profile</RouterLink>
        </div>

      </nav>
    </header>
  </div>

</template>
