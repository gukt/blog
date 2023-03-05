<script setup lang="ts">
import type { PropType } from 'vue'
import type { Field } from '~~/types/form'
// const alpine = useAppConfig().alpine

// The useRuntimeConfig composable is used to expose config variables within your app.
// See also: https://nuxt.com/docs/api/composables/use-runtime-config#useruntimeconfig
const { FORMSPREE_URL } = useRuntimeConfig().public

if (!FORMSPREE_URL) {
  console.warn('No FORMSPREE_URL provided')
}

// Submit button status
const status = ref()

// Component props
const props = defineProps({
  submitButtonText: {
    type: String,
    default: 'Send message',
  },
  // Form fields
  fields: {
    // TODO Try to use this type
    // type1: Array<Field>(),
    type: Array as PropType<Field[]>,
    default: () => [
      {
        type: 'text',
        model: 'name',
        name: 'Name',
        placeholder: 'Your name',
        required: true,
        layout: 'default',
      },
      {
        type: 'email',
        model: 'email',
        name: 'Email',
        placeholder: 'Your email',
        required: true,
        layout: 'default',
      },
      {
        type: 'text',
        model: 'text',
        name: 'Subject',
        required: false,
        layout: 'default',
      },
      {
        type: 'textarea',
        model: 'message',
        name: 'Message',
        placeholder: 'Your message',
        required: true,
        layout: 'big',
      },
    ],
  },
})

// Form data, initialized from props, because the props are readonly.
const formData = reactive(props.fields.map((v) => ({ ...v, data: '' })))

// Form submit handler
const onSubmit = async (e: any) => {
  // TODO Try to use ref instead of e.target
  e.preventDefault()
  status.value = 'Sending...'
  fetch(e.target.action, {
    method: e.target.method,
    // TODO 看看这里的 FormData 是从哪里来的？
    body: new FormData(e.target),
    headers: { Accept: 'application/json' },
  })
    .then((response) => {
      if (response.ok) {
        status.value = 'Message sent!'
        e.target.reset()
      } else {
        // Handle errors from API
        response.json().then((data) => {
          if (Object.hasOwn(data, 'errors')) {
            status.value = data.errors[0].message
            console.error(
              data.errors.map((error: any) => error.message).join(', ')
            )
            setTimeout(() => {
              status.value = 'Send message'
            }, 2000)
          } else {
            console.error('There was a problem submitting your form')
          }
        })
      }
    })
    .catch(() => {
      // Catch all other errors
      console.error('There was a problem submitting your form')
    })
}
</script>

<template>
  <form
    class="contact-form"
    method="POST"
    :action="FORMSPREE_URL"
    @submit="onSubmit"
  >
    <!-- Form fields -->
    <AppInput
      v-for="(field, index) in formData"
      :key="index"
      v-model="field.data"
      :field="field"
    />
    <!-- Submit button -->
    <AppButton type="submit" :disabled="!FORMSPREE_URL">
      {{ status ? status : submitButtonText }}
    </AppButton>
  </form>
</template>

<style scoped lang="less">
.contact-form {
  label {
    color: red;
  }
}
</style>

<!-- <style scoped lang="ts">
css({
  '.contact-form': {
    '.inputs': {
      display: 'grid',
      gridAutoFlow: 'row',
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      gap: '{space.8}',
      marginBottom: '{space.8}',
      maxWidth: '{size.md}'
    }
  }
})
</style> -->
