<template>
  <div class="relative my-6">
    <Icon
      name="uil:search"
      class="absolute left-2.5 top-2.5 h-5 w-5 stroke-2 text-muted-foreground"
    />

    <input
      type="search"
      placeholder="所有文章"
      v-model="q"
      class="pl-10 flex h-10 w-full rounded-md border border-input bg-background px-3 py-5 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    />

    <button
      v-if="q"
      @click="q = ''"
      class="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground hover:text-primary-foreground focus:text-primary-foreground"
    >
      <Icon name="uil:times" class="h-6 w-6 stroke-2" />
    </button>
  </div>
</template>
