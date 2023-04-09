<script setup lang="ts">
import type { PropType } from 'vue'
import type { Field } from '~/types/global'

const props = defineProps({
  data: {
    type: String,
    default: undefined,
  },
  field: {
    type: Object as PropType<Field>,
    required: true,
  },
  labelDirection: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'vertical',
  },
  labelGap: {
    type: String,
    default: '2',
  },
  labelVisible: {
    type: Boolean,
    default: true,
  },
  labelSuffix: {
    type: String,
    default: ':',
  },
})

const classes = computed(() => {
  return {
    'flex flex-col gap-2 mb-6': true,
    'flex-row': props.labelDirection === 'horizontal',
    'flex-col': props.labelDirection === 'vertical',
  }
})
</script>

<template>
  <div :class="classes">
    <label
      v-if="field.label"
      :for="field.name"
      class="font-medium hover:cursor-pointer"
    >
      {{ field.label }} {{ labelSuffix }}
    </label>
    <!-- Text input or text area -->
    <input
      v-if="field.type !== 'textarea'"
      :id="field.name"
      :type="field.type"
      :name="field.name"
      :placeholder="field.placeholder"
      :required="field.required"
      :enabled="field.enabled"
      class="input"
    />
    <textarea
      v-else
      :id="field.name"
      :name="field.name"
      rows="6"
      :placeholder="field.placeholder"
      class="input"
    />
  </div>
</template>

<style scoped>
.input {
  @apply rounded-md border border-primary-200 bg-transparent px-4 py-2 outline-none focus:border-primary-500 dark:border-primary-700 dark:focus:border-primary-500;
}
</style>
