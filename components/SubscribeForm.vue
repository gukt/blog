<script setup lang="ts">
const email = ref('')
</script>
<template>
  <form class="flex-1 max-w-xs">
    <label for="email" class="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">最新文章订阅</label>
    <div class="relative mt-3 max-w-sm flex items-center gap-2">
      <input
        required
        type="text"
        id="email"
        name="email"
        v-model="email"
        autocomplete="off"
        autocapitalize="off"
        placeholder="你的邮箱"
        class="flex h-10 w-full rounded-md border-2 border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      />
      <button
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
      >
        订阅
      </button>
    </div>

    <!-- <div>
      <div>
        <div class="flex content-center items-center justify-between text-base">
          <label for="subscribe-email" class="block font-semibold">最新文章订阅</label>
        </div>
      </div>
      <div class="relative mt-3">
        <div class="relative max-w-sm">
          <input
            required
            id="subscribe-email"
            name="email"
            value=""
            type="email"
            autocomplete="off"
            placeholder="你的邮箱"
            class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-base px-3.5 py-2.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 pe-12"
          />
          <span class="absolute inset-y-0 end-0 flex items-center px-3.5">
            <button
              type="submit"
              class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
            >
              订阅
            </button>
          </span>
        </div>
      </div>
    </div> -->
  </form>
</template>
