<template>
  <t-row :gutter="24">
    <t-col :span="12">
      <t-card>
        <BaseSearchBar :config="searchConfig" @reset="onReset" :btnSpan="2" @submit="onSubmit"></BaseSearchBar>
      </t-card>
    </t-col>
    <t-col :span="12" style="margin: 24px 0">
      <t-card>
        <h5>config</h5>
        <t-row :gutter="24">
          <t-col :span="3" v-for="(item, index) in searchConfig" :key="index">
            <div>
              <t-select v-model="item.type" placeholder="请选择云产品" >
                <t-option v-for="item in types" :key="item" :value="item" :label="item"></t-option>
              </t-select>
            </div>
          </t-col>
        </t-row>
      </t-card>
    </t-col>
  </t-row>
</template>
<script setup lang="ts">
import { defineProps,ref } from 'vue';
const props = defineProps({
  searchConfig: {
    type: Array,
    default: () => [],
  },
});
const types =ref([
  'SLOT',
  'INPUT',
  'SELECT',
  'DATE_PICKER',
  'DATE_RANGE_PICKER',
  'CASCADER',
  'ORGANIZE_TREE',
  'RADIO',
  'CHECKBOX',
  'TREE_SELECT',
  'DROPDOWN',
  'TYPE_SELECT',
  'TYPE_INPUT'
]);
</script>