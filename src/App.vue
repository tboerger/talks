<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Raleway);
  @import url(~vue-ionicons/ionicons.scss);

  #app {
    font-family: 'Raleway', Helvetica, Arial, sans-serif;
    cursor: default;
  }

  $sizes: (
    1,
    2,
    3,
    4,
    5,
    6,
    7
  );

  $positions: (
    "top",
    "left",
    "bottom",
    "right"
  );

  $bulmaSizes: (
    70px,
    60px,
    50px,
    40px,
    30px,
    20px,
    10px
  );

  $i: 1;
  @each $size in $sizes {
    $sizee: nth($bulmaSizes, $i);
    $i: $i+1;
    .has-margin-#{$size} {
      margin: $sizee;
    }
    .has-negative-margin-#{$size} {
      margin: -$sizee;
    }
    .has-padding-#{$size} {
      padding: $sizee;
    }
    @each $position in $positions {
      .has-margin-#{$position}-#{$size} {
        margin-#{$position}: $sizee;
      }
      .has-padding-#{$position}-#{$size} {
        padding-#{$position}: $sizee;
      }
      .has-negative-margin-#{$position}-#{$size} {
        margin-#{$position}: -$sizee;
      }
    }
  }
</style>
