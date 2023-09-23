import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import './style.css'
import App from './App.vue'

const messages = {
  en: {
    message: {
      title: "Realtime Taiwan",
      app_title: "See Taiwan\nRealtime",
      app_description: "Realtime public CCTV app for Taiwan, powered by taiwanese open data. Totally ads free and open source.",
      source_code: "Source code",
      data_attr: "Data Attribution",
      license: "License",
      os_license_title: "Open Source\nLicense",
      go_back: "Go back",
      google_play: "Google Play",
      app_store: "App Store",
      privacy: "Privacy Policy"
    }
  },
  zh: {
    message: {
      title: "即時台灣",
      app_title: "看見\n即時台灣",
      app_description: "基於台灣公路局 Open Data 的即時影像 App，開源、無廣告。",
      source_code: "原始碼",
      data_attr: "資料歸依",
      license: "軟體宣告",
      os_license_title: "開源\n軟體宣告",
      go_back: "返回",
      privacy: "隱私權條款"
    }
  },
  ja: {
    message: {
      title: "リアルタイム 台湾",
      app_title: "リアルタイムで\n台湾を見る",
      app_description: "台湾高速道路局のOpen Dataに基づくリアルタイム映像アプリ、オープンソース、広告なし。",
      source_code: "ソースコード",
      data_attr: "著作権帰属",
      license: "ライセンス",
      os_license_title: "ライセンス",
      go_back: "戻る",
      google_play: "Play ストア",
      privacy: "プライバシーポリシー",
    }
  }
};

const locale = navigator.language.split('-')[0];
document.title = messages[locale].message.title;

const app = createApp(App);
const i18n = createI18n({
  locale,
  fallbackLocale: 'en',
  messages
});

app.use(i18n)
app.mount('#app');