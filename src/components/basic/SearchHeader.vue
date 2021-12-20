<template>
  <div class="search-box">
    <input type="text" />
    <button class="search-button" @click="alert()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.search-box {
  padding: 5px;
  height: var(--spacer);

  border-radius: var(--space-md);
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: var(--spacer);
  padding: 10px 4px;
  &:hover {
    background: lighten($secondary, 20%);
    & > input {
      width: 240px;
      padding: 0 6px;
    }
    & > .search-button {
      background: lighten($primary, 20%);
      color: var(--secondary-color);

      & .icon {
        color: var(--text-color);
        opacity: 1;
      }
    }
  }

  & input {
    border-radius: 4rem;
    float: left;
    outline: none;
    border: none;
    padding: 0;
    font-size: var(-text-size);
    background: transparent;
    transition: 0.4s;
    line-height: 30px;
    width: 0px;
  }
}
.search-button {
  float: right;
  border-radius: var(--spacer);
  border: none;
  padding: 2px 4px;
  transition: all 0.4s;
  height: var(--space-md);
  width: var(--space-md);
  background: transparent;
  display: flex;
  justify-content: center;
}
</style>
