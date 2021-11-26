<template>
<div class="title">
  <img alt="Vue logo" src="./assets/logo.png" class="logo">
  <h1>Parts ID Copy</h1>
  <p>copyを押すと管理番号をコピーできます。</p>
</div>
<div class="water_proof">
  <h3>防水テープ</h3>
  <table id="table" border="2">
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
  <h3>iPhone 保護フィルム</h3>
  <table id="table" border="2">
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

    function copyID(itemname){
      navigator.clipboard.writeText(itemname)
      console.log("文字列をコピーしました")
    }

    return{
      WP_list:[
        {number:'01' ,name: '11 Pro', id:'SSI-FT-000001'},
        {number:'02' ,name: 'X', id:'SSI-FT-000002'},
        {number:'03' ,name: 'XR', id:'SSI-FT-000003'},
        {number:'04' ,name: 'XS', id:'SSI-FT-000004'},
        {number:'05' ,name: 'XS Max', id:'SSI-FT-000005'},
        {number:'06' ,name: '7,8,SE2', id:'SSI-FT-000006'},
        {number:'07' ,name: '8 Plus', id:'SSI-FT-000007'},

      ],

      GF_list:[
        {number:'1',name:'(12)ガラス',id:'SSO-AC-000086'},
        {number:'2',name:'(12 mini)ガラス',id:'SSO-AC-000088'},
        {number:'3',name:'(12 Pro Max)ガラス',id:'SSO-AC-000087'},
        {number:'4',name:'(XS Max)ガラス',id:'SSO-AC-000079'},
        {number:'5',name:'(XR)ガラス',id:'SSO-AC-000068'},
        {number:'6',name:'(X)ガラス',id:'SSO-AC-000069'},
        {number:'7',name:'(8)ガラス',id:'SSO-AC-000080'},
        {number:'8',name:'(7)非光沢Anti-Glare',id:'SSO-AC-000005'},
        {number:'9',name:'(7)光沢Glare',id:'SSO-AC-000004'},
        {number:'10',name:'(7)フルラウンド／ホワイト',id:'SSO-AC-000077'},
        {number:'11',name:'(7)フルラウンド／ブラック',id:'SSO-AC-000078'},
        {number:'12',name:'(7)ガラス',id:'SSO-AC-000006'},
        {number:'13',name:'(7)3Dガラス/フレーム付き／ブラック',id:'SSO-AC-000060'},
        {number:'14',name:'(7 Plus)非光沢Anti-Glare',id:'SSO-AC-000002'},
        {number:'15',name:'(7 Plus)光沢Glare',id:'SSO-AC-000001'},
        {number:'16',name:'(7 Plus)ガラス',id:'SSO-AC-000003'},
        {number:'17',name:'(7 Plus)3Dガラス/フレーム付き／ホワイト',id:'SSO-AC-000065'},
        {number:'18',name:'(7 Plus)3Dガラス/フレーム付き／ブラック',id:'SSO-AC-000064'},
        {number:'19',name:'(6s Plus)フルラウンドガラス／ホワイト',id:'SSO-AC-000067'},
        {number:'20',name:'(6s Plus)フルラウンドガラス／ブラック',id:'SSO-AC-000066'},
        {number:'21',name:'(6)非光沢Anti-Glare',id:'SSO-AC-000011'},
        {number:'22',name:'(6)光沢Glare',id:'SSO-AC-000010'},
        {number:'23',name:'(6)フルラウンドガラス／ホワイト',id:'SSO-AC-000059'},
        {number:'24',name:'(6)フルラウンドガラス／ブラック',id:'SSO-AC-000058'},
        {number:'25',name:'(6 Plus)非光沢Anti-Glare',id:'SSO-AC-000008'},
        {number:'26',name:'(6 Plus)光沢Glare',id:'SSO-AC-000007'},
        {number:'27',name:'(5)衝撃吸収',id:'SSO-AC-000015'},
        {number:'28',name:'(5)非光沢Anti-Glare',id:'SSO-AC-000014'},
        {number:'29',name:'(5)光沢Glare',id:'SSO-AC-000013'},
        {number:'30',name:'(5)ガラス',id:'SSO-AC-000082'},
        {number:'31',name:'(4)非光沢Anti-Glare',id:'SSO-AC-000017'},
        {number:'32',name:'(4)光沢Glare',id:'SSO-AC-000016'},
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
