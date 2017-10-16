<template>
  <div class="grid-container full">
    <div class="grid-x grid-margin-x align-center">
      <div class="cell medium-12">
        <div class="callout secondary border-none">
          <router-view name="header-top"></router-view>
        </div>
        <div class="grid-x grid-margin-x align-center">
          <div class="cell medium-7">
            <transition mode="out-in" name="slide">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./App.js"></script>
<style lang="scss" src="./App.scss"></style>
