<script setup lang="ts">
const { data } = await useFetch('http://localhost:1337/api/messages')

// console.log('pending1', pending.value)
// console.log('data', data.value)
// console.log('error', error.value)

// watchEffect(() => {
//   console.log('pending', pending.value)
//   console.log('data', data.value)
//   console.log('error', error.value)
// })
</script>

<template>
  <div>
    data: {{ data }}
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
