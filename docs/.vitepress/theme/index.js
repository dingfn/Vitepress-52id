import DefaultTheme from 'vitepress/theme';
import GetAppleID from "./components/GetAppleID.vue";

export default {
    ...DefaultTheme,
    enhanceApp({app}) { 
      // 注册全局组件
      app.component('GetAppleID' , GetAppleID)
    }
};