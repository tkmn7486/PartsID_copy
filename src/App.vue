<template>
<div class="title">
  <img alt="Vue logo" src="./assets/logo.png" class="logo">
  <h1>Parts ID Copy</h1>
  <p>copyを押すと管理番号をコピーできます。</p>
</div>
<div class="water_proof">
  <h3>防水テープ</h3>
  <table id="table" border="1">
    <thead>
      <tr>
        <th class="partsNumber">No.</th>
        <th class="partsName">Parts Name</th>
        <th class="ID">Parts ID</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="wp_part in WP_list" :key="wp_part.id">
        <th>{{wp_part.number}}</th>
        <th>{{wp_part.name}}</th>
        <th>{{wp_part.id}}</th>
        <td class="copyButton">
          <button @click="copyID(wp_part.id)" :key="button">COPY ID</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div class="glass_film">
  <h3>保護フィルム</h3>
  <table id="table" border="1">
    <thead>
      <tr>
        <th class="partsNumber">No.</th>
        <th class="partsName">Parts Name</th>
        <th class="ID">Parts ID</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="gf_part in GF_list" :key="gf_part.id">
        <th>{{gf_part.number}}</th>
        <th>{{gf_part.name}}</th>
        <th>{{gf_part.id}}</th>
        <td class="copyButton">
          <button @click="copyID(gf_part.id)" :key="button">COPY ID</button>
        </td>
      </tr>
    </tbody>
  </table>
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
      WP_list:[
        {number:'01' ,name: 'iPhone 11', id:'SSI-FT-000001'},
        {number:'02' ,name: 'iPhone X', id:'SSI-FT-000002'},
        {number:'03' ,name: 'iPhone XR', id:'SSI-FT-000003'},
        {number:'04' ,name: 'iPhone XS', id:'SSI-FT-000004'},
        {number:'05' ,name: 'iPhone XS Max', id:'SSI-FT-000005'},
        {number:'06' ,name: 'iPhone 7,8,SE2', id:'SSI-FT-000006'},
        {number:'07' ,name: 'iPhone 8 Plus', id:'SSI-FT-000007'},
      ],

      GF_list:[
        {number:'01' ,name: 'iPhone 11', id:'SSI-FT-000001'},
        {number:'02' ,name: 'iPhone X', id:'SSI-FT-000002'},
        {number:'03' ,name: 'iPhone XR', id:'SSI-FT-000003'},
        {number:'04' ,name: 'iPhone XS', id:'SSI-FT-000004'},
        {number:'05' ,name: 'iPhone XS Max', id:'SSI-FT-000005'},
        {number:'06' ,name: 'iPhone 7,8,SE2', id:'SSI-FT-000006'},
        {number:'07' ,name: 'iPhone 8 Plus', id:'SSI-FT-000007'},
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

img.logo{
  width:40px;
  height:40px;
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
