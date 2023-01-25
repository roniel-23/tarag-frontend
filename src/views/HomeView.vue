<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container max-w-screen-xl mx-auto mt-10">
    <header>
      <nav>
        <h2 class="font-semibold text-xl mb-2">Pages Route</h2>
        <div class="grid gap-1 text-green-600">
          <RouterLink to="/" class="hover:text-green-500 transition">Home</RouterLink>
          <RouterLink to="/about" class="hover:text-green-500 transition">About</RouterLink>
          <RouterLink to="/teamregistration" class="hover:text-green-500 transition">Team Registration</RouterLink>
        </div>

      </nav>
    </header>
  </div>

</template>
