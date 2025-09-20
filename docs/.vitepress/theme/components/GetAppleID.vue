<template>
  <div :key="route.fullPath">
    <div v-if="dataLoaded">
      <p>Message: {{ msg }}</p>
      <p>苹果账号: {{username}} <button @click="copyToClipboard(username)">点击复制</button></p>
      <p>苹果密码: xxxxxxx <button @click="copyToClipboard(password)">点击复制</button></p>
      <p>账号状态: {{ message }}</p>
      <p>上次检查: {{ lastCheck }}</p>
      <p>账号地区: {{ regionDisplay }}</p>
    </div>
    <div v-else>
      <p v-if="errorMsg">{{ errorMsg }}</p>
      <p v-else>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vitepress';

const route = useRoute();  // 从 useRoute 中获取 route 对象

// 定义响应式变量
const dataLoaded = ref(false);
const msg = ref('');
const status = ref(false);
const username = ref('');
const password = ref('');
const message = ref('');
const lastCheck = ref('');
const regionDisplay = ref('');
const errorMsg = ref('');  // 错误信息

// 数据获取函数
async function fetchData() {
  dataLoaded.value = false;  // 重置加载状态
  const apiUrl = '/api-getappleid';

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // 将数据赋值到响应式变量
    msg.value = data.msg;
    status.value = data.status;

    const account = data.accounts[0]; // 假设只获取第一个账户
    username.value = account.username;
    password.value = account.password;
    message.value = account.message;
    lastCheck.value = account.last_check;
    regionDisplay.value = account.region_display;

    dataLoaded.value = true;  // 标记数据已加载
  } catch (error) {
    console.error('Error fetching data:', error);
    errorMsg.value = '无法加载数据，请稍后再试。';
  }
}

// 复制到剪贴板功能
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('复制成功: ' + text);
  }).catch(err => {
    console.error('复制失败: ', err);
  });
}

// 页面初次加载时获取数据
onMounted(() => {
  fetchData();
});
</script>
