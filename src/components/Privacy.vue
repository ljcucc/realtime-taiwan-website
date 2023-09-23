<script setup>
</script>

<template>
    <div class="main">
    <div class="title" style="text-align: center;display: flex; flex-direction: column; align-items: center;">

      <h1>Privacy Policy</h1>
        <p>Last Updated: September 24, 2023</p>
      <div style="text-align: justify;">
  <h2>1. Introduction</h2>
  <p>Welcome to Realtime Taiwan. We recognize the importance of protecting your personal data and are committed to processing it responsibly and in compliance with applicable data protection laws. This Privacy Policy is meant to help you understand what data we collect, why we collect it, and how we use it.</p>
  <h2>2. What information do we collect?</h2>
  <p>For the purpose of providing a better experience with our app, we may collect the following data:</p>
  <ul>
    <li>Location Data: We access your device’s location services to offer real-time information relevant to your position.</li>
  </ul>
  <h2>3. How do we use the information?</h2>
  <p>Location Data: We use your location solely to display relevant real-time information within the app. Your location is not used for any other purposes, nor is it shared with third parties or used for advertising purposes.</p>
  <h2>4. Data Storage and Security</h2>
  <p>We do not store your location data or any other personal information on our servers. The location data is processed locally on your device.</p>
  <p>We implement a variety of security measures to maintain the safety of any information you provide to us.</p>
  <h2>5. Changes to This Privacy Policy</h2>
  <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page, and users are encouraged to check this page periodically.</p>
  <h2>6. Contact Us</h2>
  <p>If you have any questions or concerns regarding this Privacy Policy, please contact us.</p>
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

    *{
      color: #003734;
      font-family: 'Inter','IBM Plex Sans JP', sans-serif;
    }

    h2{
      font-weight: 800;
    }
    </style>