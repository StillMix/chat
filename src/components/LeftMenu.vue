<template>
  <div class="leftMenu">
    <div class="leftMenu-header">
      <button class="leftMenu-header__btn" type="button">
        Профиль <ProfileArrow :width="6" :height="10" color="#999" />
      </button>
      <label class="leftMenu-header-label">
        <SearchIcon
          class="leftMenu-header-label__icon"
          :class="{ active: isSearchActive }"
          :width="20"
          :height="20"
          color="#999"
        />
        <input
          class="leftMenu-header-label__input"
          :class="{ active: isSearchActive }"
          placeholder="Поиск"
          v-model="searchValue"
          @focus="handleFocus"
          @blur="handleBlur"
        />
      </label>
    </div>
    <div class="leftMenu-cards">
      <div
        class="leftMenu-cards-card"
        v-for="item in filteredChats"
        :key="item.id"
        :class="{ active: item.isActive }"
      >
        <div class="leftMenu-cards-card__img"></div>
        <div class="leftMenu-cards-card-mess">
          <p class="leftMenu-cards-card-mess__name">{{ item.name }}</p>
          <p class="leftMenu-cards-card-mess__text">
            <span v-if="item.isYourMessage">Вы: </span>{{ item.lastMessage }}
          </p>
        </div>
        <div class="leftMenu-cards-card-info">
          <p class="leftMenu-cards-card-info__time">{{ item.time }}</p>
          <p
            v-if="item.unreadCount && item.unreadCount > 0"
            class="leftMenu-cards-card-info__unreadCount"
          >
            {{ item.unreadCount }}
          </p>
        </div>
        <div class="underline"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProfileArrow from '@/assets/Icons/ProfileArrow.vue'
import SearchIcon from '@/assets/Icons/SearchIcon.vue'
import { chatList } from '@/Utils/ChatArray'

const searchValue = ref('')
const isFocused = ref(false)

const isSearchActive = computed(() => isFocused.value || searchValue.value.length > 0)

const filteredChats = computed(() => {
  if (!searchValue.value.trim()) {
    return chatList
  }
  return chatList.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchValue.value.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(searchValue.value.toLowerCase()),
  )
})

const handleFocus = () => {
  isFocused.value = true
}

const handleBlur = () => {
  isFocused.value = false
}
</script>

<style lang="scss" scoped>
.leftMenu {
  background: #fbfbfb;
  height: 100%;
  width: 310px;
  flex-shrink: 0;
  border-right: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-header {
    width: 290px;
    flex-shrink: 0;
    padding-bottom: 14px;
    border-bottom: 1px solid #eaeaea;

    &__btn {
      width: 66px;
      height: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 12px;
      line-height: 100%;
      text-align: right;
      color: #999;
      margin-left: auto;
      margin-right: 0;
      margin-top: 21px;
      cursor: pointer;
    }

    &-label {
      width: 100%;
      position: relative;
      margin-top: 23px;
      display: flex;
      justify-content: center;

      &__icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: calc(50% - 38px);
        z-index: 1;
        transition: all 0.2s ease;

        &.active {
          left: 8px;
        }
      }

      &__input {
        border-radius: 5px;
        width: 290px;
        height: 32px;
        background: #efefef;
        padding-left: 12px;
        padding-right: 12px;
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 12px;
        line-height: 100%;
        color: #1e1e1e;
        text-align: center;
        transition: all 0.2s ease;

        &.active {
          text-align: left;
          padding-left: 36px;
        }

        &::placeholder {
          font-family: var(--font-family);
          font-weight: 500;
          font-size: 12px;
          line-height: 100%;
          color: #999;
        }

        &.active::placeholder {
          opacity: 0;
        }
      }
    }
  }

  &-cards {
    width: 100%;
    overflow-y: auto;
    flex: 1;
    margin-top: 0px;

    /* Скрываем скроллбар для webkit браузеров */
    &::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }

    /* Скрываем скроллбар для Firefox */
    scrollbar-width: none;

    &-card {
      width: 100%;
      height: 71px;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: background-color 0.2s ease;
      padding: 0 10px;
      position: relative;

      &:hover {
        background-color: #f0f0f0;
      }

      &.active {
        background-color: #e4edfd;
        width: 100%;
        border: none;
      }

      &__img {
        width: 47px;
        height: 47px;
        border-radius: 100%;
        background: #efefef;
        flex-shrink: 0;
      }

      &-mess {
        flex: 1;
        min-width: 0;
        margin-right: 15px;
        margin-left: 10px;

        &__name {
          font-family: var(--font-family);
          font-weight: 600;
          font-size: 13px;
          line-height: 100%;
          color: #1e1e1e;
        }

        &__text {
          font-family: var(--font-family);
          font-weight: 500;
          font-size: 12px;
          line-height: 125%;
          color: #999;
          margin-top: 4px;
          max-height: 30px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;

          span {
            font-family: var(--font-family);
            font-weight: 500;
            font-size: 12px;
            line-height: 125%;
            color: #1e1e1e;
          }
        }
      }

      &-info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        margin-left: auto;
        margin-right: 0;
        flex-shrink: 0;
        height: 47px;
        width: auto;

        &__time {
          font-family: var(--font-family);
          font-weight: 500;
          font-size: 9px;
          line-height: 144%;
          text-align: right;
          color: #999;
        }

        &__unreadCount {
          background: #3369f3;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-family);
          font-weight: 500;
          font-size: 11px;
          line-height: 109%;
          text-align: center;
          color: #fff;
          border-radius: 100%;
        }
      }
    }
  }
}

.underline {
  width: 290px;
  height: 1px;
  background: #eaeaea;
  position: absolute;
  bottom: 0;
  flex-shrink: 0;
}
</style>
