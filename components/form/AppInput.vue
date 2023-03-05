<script setup lang="ts">
import type { PropType } from 'vue'
import type { Field } from '~~/types/form'

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
      class="hover:cursor-pointer font-medium"
    >
      {{ field.label }} {{ labelSuffix }}
    </label>
    <!-- Text input or text area -->
    <input
      v-if="field.type !== 'textarea'"
      :id="field.name"
      v-model="data"
      :type="field.type"
      :name="field.name"
      :placeholder="field.placeholder"
      :required="field.required"
      :enabled="field.enabled"
    />
    <textarea
      v-else
      :id="field.name"
      v-model="data"
      :name="field.name"
      :placeholder="field.placeholder"
    />
  </div>
</template>
