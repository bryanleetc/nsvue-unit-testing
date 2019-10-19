<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!"/>
    <GridLayout columns="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0"/>

      <Label v-if="isIOS" text="This text is only visible on iOS" />
    </GridLayout>
  </Page>
</template>

<script >
  import { isIOS } from 'tns-core-modules/platform';

  export default {
    data() {
      return {
        msg: 'Hello World!',
        isIOS,
      }
    }
  }
</script>

<style scoped>
  ActionBar {
    background-color: #53ba82;
    color: #ffffff;
  }

  .message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333333;
  }
</style>
