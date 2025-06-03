<template>
  <div class="RightChat__noactive" v-if="0 > 1">
    <p class="RightChat__noactive__title">Выберите чат чтобы отправить сообщение</p>
  </div>
  <div class="RightChat">
    <div class="RightChat-header">
      <div class="RightChat-header__img"></div>
      <div class="RightChat-header__name">Здесь имя</div>
      <button class="RightChat-header__menu">
        <MenuIcon :width="3" :height="16" color="#1E1E1E" />
      </button>
    </div>
    <div class="RightChat-chat">
      <div class="RightChat-chat-day">
        <p class="RightChat-chat-day__time">19 июня 2025</p>
        <div class="RightChat-chat-day-mess">
          <div
            class="RightChat-chat-day-mess-your"
            style="margin-top: если сверху чужое сообщение то отступ 30px если свое то 15px"
          >
            <p class="RightChat-chat-day-mess-your__text">
              Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в
              какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну.
              Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все
              тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой
              забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но
              что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено
              25 штук, одну из них недавно продали на аукционе за 45000 евро.
            </p>
            <p class="RightChat-chat-day-mess-your__time">11:56</p>
          </div>
          <div
            class="RightChat-chat-day-mess-yourimg"
            style="margin-top: если сверху чужое сообщение то отступ 30px если свое то 15px"
          >
            <img class="RightChat-chat-day-mess-yourimg__img" src="../assets/imgforexample.png" />
            <p class="RightChat-chat-day-mess-yourimg__timeimg">11:56</p>
          </div>
          <div
            class="RightChat-chat-day-mess-my"
            style="margin-top: если сверху чужое сообщение то отступ 30px если свое то 15px"
          >
            <p class="RightChat-chat-day-mess-my__text">Круто!</p>
            <div class="RightChat-chat-day-mess-my-times">
              <MessageSendIcon :width="9" :height="4" color="#3369F3" />
              <p class="RightChat-chat-day-mess-my-times__time">11:56</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="RightChat-footer">
      <button class="RightChat-footer__btn">
        <MessFile width="32" height="32" color="#999999" />
      </button>
      <input placeholder="Сообщение" class="RightChat-footer__input" />
      <button class="RightChat-footer__btnsend">
        <BtnSend width="28" height="28" color="#3369F3" />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import BtnSend from '@/assets/Icons/BtnSend.vue'
import MenuIcon from '@/assets/Icons/MenuIcon.vue'
import MessageSendIcon from '@/assets/Icons/MessageSendIcon.vue'
import MessFile from '@/assets/Icons/MessFile.vue'
</script>
<style lang="scss" scoped>
.RightChat {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__noactive {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &__title {
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 12px;
      line-height: 100%;
      text-align: center;
      color: #999;
    }
  }
  &-header {
    flex-shrink: 0;
    height: 54px;
    width: 929px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
    &__img {
      border-radius: 100%;
      width: 34px;
      height: 34px;
      background-color: #efefef;
    }
    &__name {
      margin-left: 10px;
      font-family: var(--font-family);
      font-weight: 600;
      font-size: 13px;
      line-height: 100%;
      color: #1e1e1e;
    }
    &__menu {
      margin-left: auto;
      margin-right: 0;
    }
  }
  &-chat {
    height: 100%;
    width: 929px;
    &-day {
      width: 100%;
      margin-top: 50px;
      &__time {
        text-align: center;
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 12px;
        line-height: 100%;
        text-align: center;
        color: #999;
      }
      &-mess {
        &-your {
          max-width: 402px;
          padding: 11px;
          background: #f8f8f8;
          border-radius: 20px;
          position: relative;
          &__text {
            font-family: var(--font-family);
            font-weight: 500;
            font-size: 12px;
            line-height: 125%;
            color: #1e1e1e;
          }
          &__time {
            font-family: var(--font-family);
            font-weight: 500;
            font-size: 9px;
            line-height: 100%;
            text-align: right;
            color: #999;
            position: absolute;
            bottom: 11px;
            right: 11px;
          }
        }
        &-yourimg {
          border: 1px solid #eaeaea;
          border-radius: 12px;
          width: 316px;
          height: 211px;
          position: relative;
          overflow: hidden;
          &__img {
            object-fit: contain;
          }
          &__timeimg {
            position: absolute;
            border-radius: 30px;
            width: 37px;
            height: 13px;
            bottom: 11px;
            right: 11px;
            font-family: var(--font-family);
            font-weight: 500;
            font-size: 9px;
            line-height: 100%;
            text-align: right;
            color: #fff;
            background: rgba(82, 82, 82, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        &-my {
          max-width: 402px;
          padding: 11px;
          background: #e4edfd;
          border-radius: 20px;
          position: relative;
          margin-left: auto;
          margin-right: 0;
          &__text {
            font-family: var(--font-family);
            font-weight: 500;
            font-size: 12px;
            line-height: 125%;
            color: #1e1e1e;
          }
          &-times {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            position: absolute;
            bottom: 11px;
            right: 11px;
            &__time {
              font-family: var(--font-family);
              font-weight: 500;
              font-size: 9px;
              line-height: 100%;
              text-align: right;
              color: #3369f3;
            }
          }
        }
      }
    }
  }
  &-footer {
    flex-shrink: 0;
    height: 54px;
    width: 929px;
    display: flex;
    align-items: center;
    border-top: 1px solid #eaeaea;
    justify-content: space-between;
    &__input {
      border-radius: 30px;
      width: 849px;
      height: 32px;
      background: #efefef;
      padding-left: 20px;
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 12px;
      line-height: 125%;
      color: #1e1e1e;
    }
  }
}
</style>
