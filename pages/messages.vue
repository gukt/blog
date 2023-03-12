<script setup lang="ts">
const { pending, error, data } = useLazyFetch(
  'http://localhost:1337/api/messages'
)
</script>

<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">
      {{ error }}
    </div>
    <div v-else>
      {{ data }}
    </div>

    <!-- <button class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">...</button> -->

    <button
      class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
    >
      ...
    </button>

    <!-- <ul>
                <li></li>
                <li>pending: {{ pending }}</li>
                <li>error: {{ error }}</li>
                <li>refresh: {{ refresh }}</li>
              </ul> -->
    <!-- {{ data }} -->
    <!-- <ul v-if="data">
                          <li v-for="msg in data">
                            {{ msg }}
                          </li>
                        </ul> -->
  </div>
</template>
