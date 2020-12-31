<template>
  <div class="message" :class="{ 'from-user': owner }">

    <span class="sender" :class="{ 'from-user': owner }">{{owner.displayName || "Anonymous"}}</span>
    <br />
    {{ message.text }}

  </div>
</template>

<script>
export default {
    props: ['message', 'owner']
};
</script>
<style>
.message {
  background: #131c29;
  color: azure;
  margin-left: 10px;
  margin-right: auto;
  border-radius: 5px;
  padding: 5px;
  width: auto;
  word-break: break-word;
}
.from-user {
  margin-right: 10px;
  margin-left: auto;
}

.sender{
  font-size: 0.5rem;
  float: left;
}

.sender.from-user {
  float: right;
  margin: 0;
}


</style>