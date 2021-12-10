<template>
<div class="title">
  <img alt="Vue logo" src="./assets/logo.png" class="logo">
  <h1>Parts ID Copy</h1>
  <p>📝ボタンでIDコピー＆QR表示</p>
</div>
<div class="water_proof">
  <button class="changeButton" @click="prevPage">◀</button>
  <h3 class="tableTitle">{{tableData[pageCount].tableTitle}}</h3>
  <button class="changeButton" @click="nextPage">▶</button>
  <table id="table" border="2">
    <thead>
      <tr>
        <th class="partsNumber">{{tableData[pageCount].th1}}</th>
        <th class="partsName">{{tableData[pageCount].th2}}</th>
        <th class="partsColor">{{tableData[pageCount].th3}}</th>
        <th class="ID">{{tableData[pageCount].th4}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="part in tableData[pageCount].list " :key="part.id">
        <th>{{part.th1}}</th>
        <th>{{part.th2}}</th>
        <th>{{part.th3}}</th>
        <th>{{part.th4}}</th>
        <td class="copyButton">
          <button @click="copyID(part)" :key="part.id">📝</button>
        </td>
      </tr>
    </tbody>
  </table>
  <img class="qrcode" :src="getURL()" :alt="getURL()">
</div>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup(){
    const tableData = ref([
      {page:'1',tableTitle:'防水テープ',th1:'No.',th2:'Parts Name',th3:'Color',th4:'Parts ID',
      list:[
      {th1:'1',th2:'11 Pro',th3:'-',th4:'SSI-SM-000850'},
      {th1:'2',th2:'11 Pro Max',th3:'-',th4:'SSI-SM-000849'},
      {th1:'3',th2:'XS',th3:'-',th4:'SSI-SM-000836'},
      {th1:'4',th2:'XS Max',th3:'-',th4:'SSI-SM-000811'},
      {th1:'5',th2:'XR',th3:'-',th4:'SSI-SM-000830'},
      {th1:'6',th2:'X',th3:'-',th4:'SSI-SM-000756'},
      {th1:'7',th2:'8 Plus',th3:'ホワイト',th4:'SSI-SM-000726'},
      {th1:'8',th2:'8 Plus',th3:'ブラック',th4:'SSI-SM-000727'},
      {th1:'9',th2:'7',th3:'ブラック',th4:'SSI-SM-000454'},
      {th1:'10',th2:'7 Plus',th3:'ホワイト',th4:'SSI-SM-000482'},
      {th1:'11',th2:'7 Plus',th3:'ブラック',th4:'SSI-SM-000481'},
      {th1:'12',th2:'6s',th3:'ブラック',th4:'SSI-SM-000330'},
      {th1:'13',th2:'6s Plus',th3:'ホワイト',th4:'SSI-SM-000512'},
      {th1:'14',th2:'6s Plus',th3:'ブラック',th4:'SSI-SM-000125'},
      ]},

      {page:'2',tableTitle:'保護フィルム',th1:'No.',th2:'Parts Name',th3:'Type',th4:'Parts ID',
      list:[
      {th1:'1',th2:'12',th3:'ガラス',th4:'SSO-AC-000086'},
      {th1:'2',th2:'12 mini',th3:'ガラス',th4:'SSO-AC-000088'},
      {th1:'3',th2:'12 Pro Max',th3:'ガラス',th4:'SSO-AC-000087'},
      {th1:'4',th2:'iPhoneXS Max',th3:'',th4:'SSO-AC-000079'},
      {th1:'5',th2:'XR',th3:'ガラス',th4:'SSO-AC-000068'},
      {th1:'6',th2:'X',th3:'ガラス',th4:'SSO-AC-000069'},
      {th1:'7',th2:'8',th3:'ガラス',th4:'SSO-AC-000080'},
      {th1:'8',th2:'7',th3:'非光沢',th4:'SSO-AC-000005'},
      {th1:'9',th2:'7',th3:'光沢',th4:'SSO-AC-000004'},
      {th1:'10',th2:'7',th3:'フルラウンド／ホワイト',th4:'SSO-AC-000077'},
      {th1:'11',th2:'7',th3:'フルラウンド／ブラック',th4:'SSO-AC-000078'},
      {th1:'12',th2:'7',th3:'ガラス',th4:'SSO-AC-000006'},
      {th1:'13',th2:'7',th3:'3Dガラス/フレーム付き／ブラック',th4:'SSO-AC-000060'},
      {th1:'14',th2:'7 Plus',th3:'非光沢',th4:'SSO-AC-000002'},
      {th1:'15',th2:'7 Plus',th3:'光沢',th4:'SSO-AC-000001'},
      {th1:'16',th2:'7 Plus',th3:'ガラス',th4:'SSO-AC-000003'},
      {th1:'17',th2:'7 Plus',th3:'3Dガラス/フレーム付き／ホワイト',th4:'SSO-AC-000065'},
      {th1:'18',th2:'7 Plus',th3:'3Dガラス/フレーム付き／ブラック',th4:'SSO-AC-000064'},
      {th1:'19',th2:'6s Plus',th3:'フルラウンドガラス／ホワイト',th4:'SSO-AC-000067'},
      {th1:'20',th2:'6s Plus',th3:'フルラウンドガラス／ブラック',th4:'SSO-AC-000066'},
      {th1:'21',th2:'6',th3:'非光沢',th4:'SSO-AC-000011'},
      {th1:'22',th2:'6',th3:'光沢',th4:'SSO-AC-000010'},
      {th1:'23',th2:'6',th3:'フルラウンドガラス／ホワイト',th4:'SSO-AC-000059'},
      {th1:'24',th2:'6',th3:'フルラウンドガラス／ブラック',th4:'SSO-AC-000058'},
      {th1:'25',th2:'6 Plus',th3:'非光沢',th4:'SSO-AC-000008'},
      {th1:'26',th2:'6 Plus',th3:'光沢',th4:'SSO-AC-000007'},
      {th1:'27',th2:'5',th3:'衝撃吸収',th4:'SSO-AC-000015'},
      {th1:'28',th2:'5',th3:'非光沢',th4:'SSO-AC-000014'},
      {th1:'29',th2:'5',th3:'光沢',th4:'SSO-AC-000013'},
      {th1:'30',th2:'5',th3:'ガラス',th4:'SSO-AC-000082'},
      {th1:'31',th2:'4',th3:'非光沢',th4:'SSO-AC-000017'},
      {th1:'32',th2:'4',th3:'光沢',th4:'SSO-AC-000016'},
      ]}
    ])

    let clickedID =  ref("1")
    let pageCount = ref(0)

    const copyID = (itemdata) =>{
      navigator.clipboard.writeText(itemdata.th4)
      console.log("文字列をコピーしました")
      clickedID.value=itemdata.th1;
    }

    const nextPage =()=>{
      if(pageCount.value>=1){
        pageCount.value=0;
        console.log(pageCount)
      }else{
        pageCount.value=pageCount.value+1;
        console.log(pageCount)
      }
    }

    const prevPage =()=>{
      if(pageCount.value<=0){
        pageCount.value=1;
        console.log(pageCount)
      }else{
        pageCount.value=pageCount.value-1;
        console.log(pageCount)
      }
    }

    const getURL = () =>{
      return require('./qr_img/wp_' + clickedID.value + '.png');
    }

    return{
      clickedID,
      tableData,
      pageCount,
      copyID,
      getURL,
      nextPage,
      prevPage,
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
  margin-top: 10px;
}

img.logo{
  width:40px;
  height:40px;
}

table{
  margin-left: auto;
  margin-right: auto;
  margin-bottom:200px;
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

.qrcode{
    position: fixed;
    right: 20px;
    bottom: 10px;
}

.changeButton{
  display:inline;
  margin-left:10px;
  margin-right:10px;
  margin-bottom:10px;
}

.tableTitle{
  display:inline;
  margin-bottom:10px;
}

th{
  padding-left:5px;
  padding-right:5px;
}
</style>
