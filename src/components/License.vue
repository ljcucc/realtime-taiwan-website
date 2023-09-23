<script setup>
</script>

<template>
    <div class="main">
    <div class="title" style="text-align: center;display: flex; flex-direction: column; align-items: center;">

      <h1>{{ $t("message.os_license_title") }}</h1>
      <div>This app is under MIT License</div>

      <div style="text-align: justify;">
        <p>
Copyright (c) 2023 ljcucc
        </p>

        <p>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
        </p>

        <p>
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
        </p>

        <p>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</p>
      </div>

    </div>
      <div class="sections">
      <a class="primary" href="#/">{{  $t('message.go_back') }}</a>
      </div>
  </div>
</template>

<style scoped>
    .title > *{
      max-width: 50vmax;
    }
    </style>