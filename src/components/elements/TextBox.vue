<template>
  <div class="texts box">
      <div class="info bold">
        <h2>{{ title }}</h2>
      </div>
      <p>{{ text }}</p>
    </div>
</template>

<script>
export default {
    name:"TextBox",
    props: {
        title: String,
        text: String
    }
}
</script>

<style>

.texts p {
  margin: 0px;
  text-align: left;
  font-family: serif;
}
.texts {
  margin: 20px;
  margin-left: 30px;
}

.info {
  width: 300px;
  margin-bottom: 20px;
}

.box {
  box-shadow: rgba(50, 50, 93, 0.25) 1px 6px 12px 0px,
    rgba(0, 0, 0, 0.3) 1px 3px 7px 0px;
  border-radius: 0px;
  padding: 10px;
}
</style>