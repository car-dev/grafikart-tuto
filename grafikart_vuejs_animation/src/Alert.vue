<style src="./style/Alert.css"></style>

<template>
    <div id="alert">
        <transition name="bounce" appear mode="out-in">
            <div class="ui message success" v-if="visible" key="visible">
                Exemple avec la transition name="bounce" visible
            </div>
            <div class="ui message success" v-else key="!visible">
                Exemple avec la transition name="bounce" !visible
            </div>
        </transition>
        <br/>
        <transition name="fade" appear>
            <div class="ui message success" v-if="visible">
                Exemple avec la transition name="fade"
            </div>
        </transition>
        <br/>
        <transition :css="false" @enter="enter" @leave="leave">
            <div class="ui message success" v-if="visible">
                Exemple avec la transition méthode : Slide (mixins)
            </div>
        </transition>
        <br/>
        <button @click="toggle">Toggle</button><br/>

                
        <br/>
        <transition-group name="bounce" tog="ul">
            <li v-for="item in items" :key="item">{{ item }} </li>
        </transition-group >
        <br/>
        <button @click="add">Add</button><br/>
        <button @click="shuffle">Mélanger</button><br/>
        
        <input v-model="query">
        <br/>
        <transition-group
            name="staggered-fade"
            tag="ul"
            v-bind:css="false"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
            >
            <li
            v-for="(item, index) in computedList"
            v-bind:key="item.msg"
            v-bind:data-index="index"
            >{{ item.msg }}</li>
        </transition-group>

    </div>
</template>

<script src="./js/Alert.js"></script>