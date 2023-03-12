<template>
  <!-- Full width layout -->
  <div
    class="dark:bg-primary-800 m-auto bg-white py-10 ring-1 ring-gray-200 dark:ring-gray-700 sm:rounded sm:px-8"
  >
    <onDeactivated class="mx-auto max-w-2xl px-4 sm:px-8">
      <slot>
        <h1 class="text-2xl">Page not found</h1>
      </slot>
    </onDeactivated>
  </div>
</template>
