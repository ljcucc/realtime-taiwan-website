<script setup></script>

<template>
    <div class="main">
        <div class="title">
            <h1>{{ $t("message.data_attr") }}</h1>

            <div style="text-align: center">
                <p>
                    Contains map data © OpenStreetMap contributors,
                    <a href="https://www.openstreetmap.org/copyright"
                        >www.openstreetmap.org/copyright</a
                    >
                </p>
                <p>
                    Contains map data from
                    <a
                        href="https://developers.google.com/maps/documentation/tile"
                        >Goole maps</a
                    >
                </p>
                Dataset:
                <a href="https://data.gov.tw/en/datasets/29817">
                    https://data.gov.tw/dataset/29817
                </a>
            </div>

            <div class="sections">
                <a class="primary" href="#/">{{ $t("message.go_back") }}</a>
            </div>
        </div>
    </div>
</template>
