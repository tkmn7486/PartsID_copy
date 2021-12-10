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
        <th class="partsColor">Color</th>
        <th class="ID">Parts ID</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="wp_part in WP_list" :key="wp_part.id">
        <th>{{wp_part.number}}</th>
        <th>{{wp_part.name}}</th>
        <th>{{wp_part.color}}</th>
        <th>{{wp_part.id}}</th>
        <td class="copyButton">
          <button @click="copyID(wp_part)" :key="wp_part.id">COPY ID</button>
        </td>
      </tr>
    </tbody>
  </table>
  <img class="wp_qrcode" :src="getURL()" :alt="getURL()">
</div>

<div class="glass_film">
  <h3>iPhone 保護フィルム</h3>
  <table id="table" border="2">
    <thead>
      <tr>
        <th class="partsNumber">No.</th>
        <th class="partsName">Parts Name</th>
        <th class="partsColor">Color</th>
        <th class="ID">Parts ID</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="gf_part in GF_list" :key="gf_part.id">
        <th>{{gf_part.number}}</th>
        <th>{{gf_part.name}}</th>
        <th>{{gf_part.type}}</th>
        <th>{{gf_part.id}}</th>
        <td class="copyButton">
          <button @click="copyID(gf_part)" :key="gf_part.id">COPY ID</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup(){
    const WP_list = ref([
      {number:'1',name:'iPhone 11 Pro',id:'SSI-SM-000850',color:'-'},
      {number:'2',name:'iPhone 11 Pro Max',id:'SSI-SM-000849',color:'-'},
      {number:'3',name:'iPhone XS',id:'SSI-SM-000836',color:'-'},
      {number:'4',name:'iPhone XS Max',id:'SSI-SM-000811',color:'-'},
      {number:'5',name:'iPhone XR',id:'SSI-SM-000830',color:'-'},
      {number:'6',name:'iPhone X',id:'SSI-SM-000756',color:'-'},
      {number:'7',name:'iPhone 8 Plus',id:'SSI-SM-000726',color:'ホワイト'},
      {number:'8',name:'iPhone 8 Plus',id:'SSI-SM-000727',color:'ブラック'},
      {number:'9',name:'iPhone 7',id:'SSI-SM-000454',color:'ブラック'},
      {number:'10',name:'iPhone 7 Plus',id:'SSI-SM-000482',color:'ホワイト'},
      {number:'11',name:'iPhone 7 Plus',id:'SSI-SM-000481',color:'ブラック'},
      {number:'12',name:'iPhone 6s',id:'SSI-SM-000330',color:'ブラック'},
      {number:'13',name:'iPhone 6s Plus',id:'SSI-SM-000512',color:'ホワイト'},
      {number:'14',name:'iPhone 6s Plus',id:'SSI-SM-000125',color:'ブラック'},
    ])

    const GF_list = ref([
      {number:'1',name:'iPhone 12',type:'ガラス',id:'SSO-AC-000086'},
      {number:'2',name:'iPhone 12 mini',type:'ガラス',id:'SSO-AC-000088'},
      {number:'3',name:'iPhone 12 Pro Max',type:'ガラス',id:'SSO-AC-000087'},
      {number:'4',name:'iPhoneXS Max',id:'SSO-AC-000079'},
      {number:'5',name:'iPhone XR',type:'ガラス',id:'SSO-AC-000068'},
      {number:'6',name:'iPhone X',type:'ガラス',id:'SSO-AC-000069'},
      {number:'7',name:'iPhone 8',idtype:'ガラス',id:'SSO-AC-000080'},
      {number:'8',name:'iPhone 7',type:'非光沢',id:'SSO-AC-000005'},
      {number:'9',name:'iPhone 7',type:'光沢',id:'SSO-AC-000004'},
      {number:'10',name:'iPhone 7',type:'フルラウンド／ホワイト',id:'SSO-AC-000077'},
      {number:'11',name:'iPhone 7',type:'フルラウンド／ブラック',id:'SSO-AC-000078'},
      {number:'12',name:'iPhone 7',type:'ガラス',id:'SSO-AC-000006'},
      {number:'13',name:'iPhone 7',type:'3Dガラス/フレーム付き／ブラック',id:'SSO-AC-000060'},
      {number:'14',name:'iPhone 7 Plus',type:'非光沢',id:'SSO-AC-000002'},
      {number:'15',name:'iPhone 7 Plus',type:'光沢',id:'SSO-AC-000001'},
      {number:'16',name:'iPhone 7 Plus',type:'ガラス',id:'SSO-AC-000003'},
      {number:'17',name:'iPhone 7 Plus',type:'3Dガラス/フレーム付き／ホワイト',id:'SSO-AC-000065'},
      {number:'18',name:'iPhone 7 Plus',type:'3Dガラス/フレーム付き／ブラック',id:'SSO-AC-000064'},
      {number:'19',name:'iPhone 6s Plus',type:'フルラウンドガラス／ホワイト',id:'SSO-AC-000067'},
      {number:'20',name:'iPhone 6s Plus',type:'フルラウンドガラス／ブラック',id:'SSO-AC-000066'},
      {number:'21',name:'iPhone 6',type:'非光沢',id:'SSO-AC-000011'},
      {number:'22',name:'iPhone 6',type:'光沢',id:'SSO-AC-000010'},
      {number:'23',name:'iPhone 6',type:'フルラウンドガラス／ホワイト',id:'SSO-AC-000059'},
      {number:'24',name:'iPhone 6',type:'フルラウンドガラス／ブラック',id:'SSO-AC-000058'},
      {number:'25',name:'iPhone 6 Plus',type:'非光沢',id:'SSO-AC-000008'},
      {number:'26',name:'iPhone 6 Plus',type:'光沢',id:'SSO-AC-000007'},
      {number:'27',name:'iPhone 5',type:'衝撃吸収',id:'SSO-AC-000015'},
      {number:'28',name:'iPhone 5',type:'非光沢',id:'SSO-AC-000014'},
      {number:'29',name:'iPhone 5',type:'光沢',id:'SSO-AC-000013'},
      {number:'30',name:'iPhone 5',type:'ガラス',id:'SSO-AC-000082'},
      {number:'31',name:'iPhone 4',type:'非光沢',id:'SSO-AC-000017'},
      {number:'32',name:'iPhone 4',type:'光沢',id:'SSO-AC-000016'},
    ])

    let clickedID =  ref("1")

    const copyID = (itemdata) =>{
      navigator.clipboard.writeText(itemdata.id)
      console.log("文字列をコピーしました")
      clickedID.value=itemdata.number;
    }

    const getURL = () =>{
      return require('./qr_img/wp_' + clickedID.value + '.png');
    }

    return{
      WP_list,
      GF_list,
      clickedID,
      copyID,
      getURL,
    };
  }
})
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

.wp_qrcode{
    position: fixed;
    right: 20px;
    bottom: 10px;
}
</style>
