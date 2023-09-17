import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import './style.css'
import App from './App.vue'

const messages = {
  en: {
    message: {
    app_title: "See Taiwan\nRealtime",
    app_description: "Realtime public CCTV app for Taiwan, powered by taiwanese open data. Totally ads free and open source.",
    source_code: "Source code",
    data_attr: "Data Attribution",
    license: "License",
    os_license_title: "Open Source\nLicense",
    go_back: "Go back",
    }
  },
  zh: {
    message: {
    app_title: "看見\n即時台灣",
    app_description: "基於台灣公路局 Open Data 的即時影像 App，開源、無廣告。",
    source_code: "原始碼",
    data_attr: "資料歸依",
    license: "軟體宣告",
    os_license_title: "開源\n軟體宣告",
    go_back: "返回",
    }
  }
};

const app = createApp(App);
const i18n = createI18n({
  locale: navigator.language.split('-')[0],
  fallbackLocale: 'en',
  messages
});

app.use(i18n)
app.mount('#app');