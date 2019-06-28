<style lang="scss" src="./style/Counter.scss"></style>

<template>
    <div id="counter">
        <div class="counter">
            {{ count }}
        </div>
        <div class="counter__button">
            <button @click="increment">Increment</button>
        </div>
    </div>
</template>


<script src="./js/Counter.js"></script>

