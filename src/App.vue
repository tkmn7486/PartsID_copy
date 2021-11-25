<template>
<div class="title">
  <img alt="Vue logo" src="./assets/gear.png">
  <h1>Parts ID Copy</h1>
  <p>copyを押すと管理番号をコピーできます。</p>
</div>
<div class="contents">
  <table id="table" border="1">
    <!-- テーブルヘッダー -->
    <thead>
      <tr>
        <th class="partsNumber">No.</th>
        <th class="partsName">Parts Name</th>
        <th class="ID">Parts ID</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="part in parts_name" :key="part.id">
        <th>{{part.number}}</th>
        <th>{{part.name}}</th>
        <th>{{part.id}}</th>
        <td class="copyButton">
          <button @click="copyID(part.id)" :key="button">COPY ID</button>
        </td>
      </tr>
      <!-- [1] ここに <tr> で ToDo の要素を1行づつ繰り返し表示したい -->
    </tbody>
  </table>

  <!-- <ul v-for="part in parts_name" :key="part.name">
    <li>{{part.name}}</li><p class="wall"> | </p><li>{{part.id}}</li><button v-on:click='copyID'>copy</button>
  </ul> -->
</div>
</template>

<script>

export default {
  name: 'App',
  setup(){
    // let text = "aaa"; 
    // function copyID() {
    //   console.log("文字列をコピーしました")
    // }

    function copyID(itemname){
      navigator.clipboard.writeText(itemname)
      console.log("文字列をコピーしました")
    }

    return{
      parts_name:[
        {number:'01' ,name: 'iPhone 11', id:'SSI-FT-000001'},
        {number:'02' ,name: 'iPhone X', id:'SSI-FT-000002'},
        {number:'03' ,name: 'iPhone XR', id:'SSI-FT-000003'},
      ],
      copyID,
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

table{
  margin-left: auto;
  margin-right: auto;
}

.title{
  padding-bottom:10px;
}

li{
  display:inline-block;
  padding-right:5px;
  padding-left:5px;
}

.wall{
  display: inline;
}
</style>
