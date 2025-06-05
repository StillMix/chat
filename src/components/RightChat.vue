<template>
  <div class="RightChat__noactive" v-if="!selectedChatId">
    <p class="RightChat__noactive__title">Выберите чат чтобы отправить сообщение</p>
  </div>
  <transition name="chat-appear">
    <div class="RightChat" v-if="selectedChatId">
      <div class="RightChat-header">
        <div class="RightChat-header__img"></div>
        <div class="RightChat-header__name">{{ selectedChatName }}</div>
        <button class="RightChat-header__menu">
          <MenuIcon :width="3" :height="16" color="#1E1E1E" />
        </button>
      </div>
      <div class="RightChat-chat">
        <div class="RightChat-chat-day" v-for="day in messagesData" :key="day.date">
          <p class="RightChat-chat-day__time">{{ day.date }}</p>
          <div class="RightChat-chat-day-mess">
            <div
              v-for="(message, index) in day.messages"
              :key="message.id"
              :class="getMessageClass(message)"
              :style="getMessageStyle(message, day.messages, index)"
            >
              <!-- Текстовое сообщение чужое -->
              <template v-if="message.type === 'text' && !message.isMy">
                <p class="RightChat-chat-day-mess-your__text">{{ message.text }}</p>
                <p class="RightChat-chat-day-mess-your__time">{{ message.time }}</p>
              </template>

              <!-- Изображение чужое -->
              <template v-if="message.type === 'image' && !message.isMy">
                <img class="RightChat-chat-day-mess-yourimg__img" :src="message.image" />
                <p class="RightChat-chat-day-mess-yourimg__timeimg">{{ message.time }}</p>
              </template>

              <!-- Текстовое сообщение мое -->
              <template v-if="message.type === 'text' && message.isMy">
                <p class="RightChat-chat-day-mess-my__text">{{ message.text }}</p>
                <div class="RightChat-chat-day-mess-my-times">
                  <MessageSendIcon :width="9" :height="4" color="#3369F3" />
                  <p class="RightChat-chat-day-mess-my-times__time">{{ message.time }}</p>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="RightChat-footer" @click="handleFooterClick">
        <FIlePopup v-if="isFilePopupOpen" @close="closeFilePopup" />
        <button class="RightChat-footer__btn" @click.stop="toggleFilePopup">
          <MessFile width="32" height="32" :color="isFilePopupOpen ? '#3369F3' : '#999999'" />
        </button>
        <input placeholder="Сообщение" class="RightChat-footer__input" />
        <button class="RightChat-footer__btnsend">
          <BtnSend width="28" height="28" color="#3369F3" />
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BtnSend from '@/assets/Icons/BtnSend.vue'
import MenuIcon from '@/assets/Icons/MenuIcon.vue'
import MessageSendIcon from '@/assets/Icons/MessageSendIcon.vue'
import MessFile from '@/assets/Icons/MessFile.vue'
import { messagesData, type MessageItem } from '@/Utils/MessageArray'
import FIlePopup from './FIlePopup.vue'

interface Props {
  selectedChatId?: string | number | null
  selectedChatName?: string
}
defineProps<Props>()

const isFilePopupOpen = ref(false)

const toggleFilePopup = () => {
  isFilePopupOpen.value = !isFilePopupOpen.value
}

const closeFilePopup = () => {
  isFilePopupOpen.value = false
}

const handleFooterClick = () => {
  if (isFilePopupOpen.value) {
    closeFilePopup()
  }
}

const getMessageClass = (message: MessageItem) => {
  if (message.type === 'text' && !message.isMy) {
    return 'RightChat-chat-day-mess-your'
  }
  if (message.type === 'image' && !message.isMy) {
    return 'RightChat-chat-day-mess-yourimg'
  }
  if (message.type === 'text' && message.isMy) {
    return 'RightChat-chat-day-mess-my'
  }
  return ''
}

const getMessageStyle = (message: MessageItem, messages: MessageItem[], index: number) => {
  if (index === 0) {
    return { marginTop: '30px' }
  }

  const prevMessage = messages[index - 1]
  const isDifferentSender = message.isMy !== prevMessage.isMy

  return {
    marginTop: isDifferentSender ? '30px' : '10px',
  }
}
</script>

<style lang="scss" scoped>
.chat-appear-enter-active {
  transition: all 0.3s ease;
}

.chat-appear-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.chat-appear-enter-to {
  opacity: 1;
  transform: translateX(0);
}

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
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      margin-left: auto;
      margin-right: 0;
    }
  }
  &-chat {
    height: 100%;
    width: 929px;
    padding-bottom: 20px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
    scrollbar-width: none;
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
          width: fit-content;
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
            padding-right: 40px;
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
            width: 100%;
            height: 100%;
            object-fit: cover;
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
          width: fit-content;
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
            padding-right: 40px;
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
    position: relative;
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
