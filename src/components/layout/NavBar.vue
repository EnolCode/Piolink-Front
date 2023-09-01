<script setup></script>

<template>
  <nav class="nav-bar">
    <img src="@/assets/images/logo-pk.png" class="nav-bar__logo" alt="" />
    <router-link to="/" class="nav-bar__link">
      <p>
        <img src="@/assets/images/icons/home-icon.svg" alt="icon home" class="icon" />Home
      </p>
    </router-link>

    <router-link to="/" class="nav-bar__link">
      <p>
        <img
          src="@/assets/images/icons/message-icon.svg"
          alt="icon message"
          class="icon"
        />Messages
      </p>
    </router-link>

    <router-link to="/" class="nav-bar__link">
      <p>
        <img
          src="@/assets/images/icons/notification-icon.svg"
          alt="icon notification"
          class="icon"
        />Notifications
      </p>
    </router-link>

    <router-link to="/" class="nav-bar__link">
      <p>
        <img
          src="@/assets/images/icons/contacts-icon.svg"
          alt="icon contact"
          class="icon"
        />Contacts
      </p>
    </router-link>

    <router-link to="/" class="nav-bar__link">
      <p>
        <img
          src="@/assets/images/icons/trending-icon.svg"
          alt="icon trending"
          class="icon"
        />Trending
      </p>
    </router-link>

    <router-link to="/" class="nav-bar__link">
      <p>
        <img
          src="@/assets/images/icons/profile-icon.svg"
          alt="icon profile"
          class="icon"
        />Profile
      </p>
    </router-link>
  </nav>
</template>

<style lang="scss">
@use "@/assets/scss/colors" as c;
@use "@/assets/scss/mixins" as m;
.nav-bar {
    @include m.flex(flex, column, auto, start, start);
  justify-self: end;
  width: 50%;
  @include m.font(500, 1.6em, map-get(c.$colors, "white"));
  gap: 1em;
  padding: 1em;
  background: black;
  
  &__logo {
    width: 3em;
  }
  
  p {
    display: flex;
    gap: 0.8em;
    padding: .4em 1em;

    &:hover {
      @include m.pointer-opacity();
      background: map-get(c.$colors, "light-grey");
      border-radius: 1em;
    }
  }

  @include m.mv(1300px) {
    width: 40%;
  }
  @include m.mv(900px) {
    width: 100%;
    position: sticky;
  }

  @include m.mv(600px) {
  }

  @include m.mv(500px) {
    width: 110%;
    margin: 0 auto;
  }
  &__link {
    text-decoration: none;
    font-size: 0.8em;
  }
}
.icon {
  width: 1.1em;
}
</style>
