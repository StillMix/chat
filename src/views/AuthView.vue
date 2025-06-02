<template>
  <div class="login">
    <div class="login-popup">
      <p class="login-popup__text">Вход</p>
      <form class="login-popup-form">
        <label class="login-popup-form-label">
          <span class="login-popup-form-label__title" :class="{ active: loginFocused || login }">
            Логин
          </span>
          <input
            class="login-popup-form-label__input"
            v-model="login"
            @focus="loginFocused = true"
            @blur="loginFocused = false"
          />
        </label>

        <label class="login-popup-form-label">
          <span
            class="login-popup-form-label__title"
            :class="{ active: passwordFocused || password }"
          >
            Пароль
          </span>
          <input
            class="login-popup-form-label__input"
            type="password"
            v-model="password"
            @focus="passwordFocused = true"
            @blur="passwordFocused = false"
          />
        </label>

        <label class="login-popup-form-label">
          <span class="login-popup-form-label__title" :class="{ active: serverFocused || server }">
            Сервер
          </span>
          <input
            class="login-popup-form-label__input"
            type="url"
            v-model="server"
            @focus="serverFocused = true"
            @blur="serverFocused = false"
          />
        </label>

        <button type="submit" class="login-popup-form__btn">Авторизоваться</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const login = ref('')
const password = ref('')
const server = ref('')

const loginFocused = ref(false)
const passwordFocused = ref(false)
const serverFocused = ref(false)
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  &-popup {
    border-radius: 12px;
    width: 340px;
    height: 450px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.14);
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__text {
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 20px;
      line-height: 100%;
      text-align: center;
      color: #1e1e1e;
      margin-top: 50px;
    }
    &-form {
      width: 280px;
      margin-top: 25px;
      &-label {
        display: block;
        width: 100%;
        margin-top: 16px;
        position: relative;
        &__title {
          font-family: var(--font-family);
          font-weight: 500;
          font-size: 13px;
          line-height: 100%;
          color: #999;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          transition: all 0.3s ease;
          pointer-events: none;

          &.active {
            font-size: 9px;
            top: -8px;
            transform: translateY(0);
            color: #3369f3;
          }
        }
        &__input {
          border-bottom: 1px solid #3369f3;
          width: 100%;
          padding-bottom: 7px;
          padding-top: 12px;
          font-family: var(--font-family);
          font-weight: 500;
          font-size: 13px;
          line-height: 100%;
          color: #1e1e1e;
          background: transparent;
          border: none;
          border-bottom: 1px solid #ddd;
          outline: none;

          &:focus {
            border-bottom-color: #3369f3;
          }
        }
      }
      &__btn {
        width: 100%;
        height: 37px;
        border-radius: 8px;
        background: #3369f3;
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 13px;
        line-height: 100%;
        text-align: center;
        color: #fff;
        margin-top: 132px;
        border: none;
        cursor: pointer;
      }
    }
  }
}
</style>
