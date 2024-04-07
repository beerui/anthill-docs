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
        <t-textarea  :autosize="{ minRows: 8, maxRows: 10 }"  v-model="testJson"></t-textarea>
      </t-card>
    </t-col>
  </t-row>
</template>
<script setup lang="ts">
import {ref, defineProps ,watch } from "vue";
const baseSearchConfig = [
  {
    name: 'deptName',
    value: '',
    type: 'INPUT',
    label: '处理单位',
    attrs: {
      placeholder: '请输入处理单位',
    },
  },
  {
    name: 'times',
    value: [],
    default: [],
    type: 'DATE_RANGE_PICKER',
    label: '创建时间',
    attrs: {
      placeholder: '请输入',
      clearable: true,
      enableTimePicker: true,
      pickMonth: 3,
    },
  },
  {
    name: 'timeLimit',
    value: '',
    type: 'SELECT',
    label: '处理时限',
    attrs: {
      options: [
        { key: -1, label: '已逾期', value: -1 },
        { key: 0, label: '今天到期', value: 0 },
        { key: 3, label: '近3天到期', value: 3 },
        { key: 7, label: '近7天到期', value: 7 },
        { key: 15, label: '近15天到期', value: 15 },
      ],
      clearable: true,
    },
  },
];
const testJson = ref(JSON.stringify(baseSearchConfig, null, '\t'));
const searchConfig = ref(baseSearchConfig);
const types =ref([
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
watch(testJson, ()=>{
  try {
    searchConfig.value = JSON.parse(testJson.value);
  } catch (e) {
    console.log(e);
    testJson.value = JSON.stringify(searchConfig.value, null, '\t');
  }
});
const onReset = () => {
  console.log('测试reset')
};
const onSubmit = () => {
  const params = {};
  searchConfig.value.forEach(item=> {
    if(item.value) {
      params[item.name] = item.value
    }
  });
  console.log(params);
  console.log('测试submit');
};
</script>