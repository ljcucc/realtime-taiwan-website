<script setup>
</script>

<template>
  <div class="main">
    <div class="title">
      <h1 class="app-title">{{$t('message.app_title')}}</h1>
      <div style="text-align: center;">{{ $t('message.app_description') }}</div>
      <div class="sections" style="margin-top:0;">
      <a class="primary" href="#">{{$t('message.app_store')}}</a>
      <a class="primary" href="https://play.google.com/store/apps/details?id=app.ljcucc.realtime_taiwan">{{$t('message.google_play')}}</a>
      </div>
    </div>
    <div class="screenshot">
      <div class="img"></div>
      <!-- <img src="./assets/screenshot.png" alt=""/> -->
      <!-- <span>map data by openstreetmap</span> -->
    </div>
    <div class="sections">
      <a href="https://github.com/ljcucc/realtime-taiwan">{{ $t('message.source_code') }}</a>
      <a href="#/data">{{ $t('message.data_attr') }}</a>
      <a href="#/license">{{ $t('message.license') }}</a>
    </div>
  </div> 
</template>