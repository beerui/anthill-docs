<template>
  <div style="border: 1px solid #ccc">
    <toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :default-config="toolbarConfig" />
    <editor
        v-model:content="valueHtml"
        :default-config="editorConfig"
        :style="{height: `${contentHeight}px`, overflowY: 'auto'}"
        @on-change="onChange"
        @on-blur="onChange"
        @on-created="handleCreated"
    />
  </div>
</template>

<script setup lang="ts">
import { shallowRef, ref, onBeforeUnmount, watch } from 'vue';
import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import { IEditorConfig, IToolbarConfig, DomEditor } from '@wangeditor/editor';

interface Props {
  value?: string;
  contentHeight?: number;
  uploadPath?: string;
  autoFocus?: boolean;
  placeholder?: string;
  customUpload?: any;
  excludeKeys?: any;
  base64LimitSize?: number;
  maxFileSize?: number;
  maxFileSizeImage?: number;
  maxFileSizeVideo?: number;
};
const editorRef = shallowRef();
// eslint-disable-next-line vue/require-prop-types
const props = withDefaults(defineProps<Props>(), {
  contentHeight: 300,
  autoFocus: false,
  placeholder: '请输入内容...',
  excludeKeys: [],
  base64LimitSize: 100,
  maxFileSize: 10
});
const emit = defineEmits(['updateValue', 'uploadFail', 'uploadSuccess']);
// 内容 HTML
const valueHtml = ref(props.value);

watch(
  () => props.value,
  () => {
    editorRef.value?.setHtml(props.value);
  },
  { deep: true },
);
const toolbarConfig: Partial<IToolbarConfig> = {};
toolbarConfig.excludeKeys = props.excludeKeys;
const editorConfig: Partial<IEditorConfig> = {
  placeholder: props.placeholder,
  autoFocus: props.autoFocus,
  MENU_CONF: {},
};
const uploadImageBase = {
  // 单个文件的最大体积限制，默认为 10M
  maxFileSize: (props.maxFileSizeImage || props.maxFileSize) * 1024 * 1024, // 5M
  // 小于该值就插入 base64 格式（而不上传），默认为 0
  base64LimitSize: (props.base64LimitSize || 0) * 1024  // 100kb
}
const uploadVideoBase = {
  // 单个文件的最大体积限制，默认为 10M
  maxFileSize: (props.maxFileSizeVideo || props.maxFileSize) * 1024 * 1024, // 5M
}
if (props.uploadPath && !props.customUpload) {
  (editorConfig.MENU_CONF as any).uploadVideo = {
    ...uploadVideoBase,
  // 自定义上传
    async customUpload(file: string | Blob, insertFn: (arg0: unknown, arg1: string) => void) {
      const formdata = new FormData();
      formdata.append('file', file);
      const url = await uploadRequest(formdata);
      insertFn(url, '');
    },
  };
  (editorConfig.MENU_CONF as any).uploadImage = {
    ...uploadImageBase,
    // 自定义插入图片
    async customUpload(file: string | Blob, insertFn: (arg0: unknown, arg1: string, arg2: string) => void) {
      const formdata = new FormData();
      formdata.append('file', file);
      const url = await uploadRequest(formdata);
      insertFn(url, '', '');
    },
  };
}
if (props.customUpload) {
  (editorConfig.MENU_CONF as any).uploadVideo = {
    ...uploadVideoBase,
  // 自定义上传
    async customUpload(file: any, insertFn: any) {
      props.customUpload(file, insertFn);
    },
  };
  (editorConfig.MENU_CONF as any).uploadImage = {
    ...uploadImageBase,
    // 自定义插入图片
    async customUpload(file: any, insertFn: any) {
      props.customUpload(file, insertFn);
    },
  };
}
const uploadRequest = (file: Document | XMLHttpRequestBodyInit | null | undefined) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if(xhr.status === 200){
          if (xhr.response.data) {
            resolve(xhr.response.data);
            emit('uploadSuccess', xhr.response.data);
          } else{
            emit('uploadFail', xhr.response.message);
            reject(xhr.response.message);
          }

        }else{
          emit('uploadFail', xhr.statusText);
          reject(xhr.statusText);
        }
      }
    }
    xhr.open('POST', props.uploadPath || '' , true);
    xhr.send(file);
  })
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor: any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};

const getToolConfig = () => {
  const toolbar = DomEditor.getToolbar(editorRef.value);
  return toolbar?.getConfig().toolbarKeys;
};
const onChange = () => {
  const text = editorRef.value.getHtml();
  emit('updateValue', text);
};
defineExpose({
  getToolConfig
});
</script>
<style scoped lang="less">
:global(.w-e-full-screen-container) {
  z-index: 9;
}
</style>
