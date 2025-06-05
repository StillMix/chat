<template>
  <div class="profile">
    <div class="profile-container">
      <h1 class="profile__title">Профиль</h1>
      <div class="profile__content">
        <p>Страница профиля</p>
        <router-link to="/main" class="profile__back-btn"> Вернуться к чату </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Компонент профиля
</script>

<style lang="scss" scoped>
.profile {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fbfbfb;

  &-container {
    background: #fff;
    border-radius: 12px;
    width: 400px;
    padding: 40px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.14);
    text-align: center;
  }

  &__title {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    color: #1e1e1e;
    margin-bottom: 30px;
  }

  &__content {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 125%;
    color: #666;
  }

  &__back-btn {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background: #3369f3;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 13px;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
