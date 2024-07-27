<template>
  <div class="m-auto flex flex-col min-h-screen w-3/5">
    <AppHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
