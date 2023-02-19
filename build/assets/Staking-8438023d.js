import{t as os}from"./toMoney-899207f6.js";import{t as rs}from"./toDate-7f2bc02f.js";import{F as cs,C as ds}from"./Col-495fd683.js";import{u as us,__tla as gs}from"./staking-4eb95367.js";import{u as ps,v as h,w as v,__tla as ks}from"./vue-qrcode.esm-9e0a6c12.js";import{K as bs,__tla as ms}from"./flowbite-vue-d44f90c4.js";import{_ as ys,o as i,c,a as t,t as s,g as u,w as o,j as w,i as m,F as C,r as fs,l as p,h as k,q as g,s as Ss}from"./_plugin-vue_export-helper-8676f0c8.js";import"./pinia-72e453fe.js";import"./axios-c0bebe37.js";import"./_commonjsHelpers-87174ba5.js";import"./browser-e552b3f6.js";import"./dijkstra-59d11638.js";let $,xs=Promise.all([(()=>{try{return gs}catch{}})(),(()=>{try{return ks}catch{}})(),(()=>{try{return ms}catch{}})()]).then(async()=>{const _={setup(){const e=ps(),l=us();return{userStore:e,stakingStore:l}},components:{toDate:rs,toMoney:os,Filter:cs,Col:ds,Modal:bs},data(){return{plat,filters:{symbol:{value:"",keys:["symbol"]}},currentPage:1,totalPages:0,amount:0,imageLoading:!0}},methods:{async fetchData(){this.stakingStore.coins.length==0&&await this.stakingStore.fetch()},async Stake(){await this.stakingStore.Stake(this.amount)},async CancelStake(){await this.stakingStore.CancelStake()},async ClaimStake(){await this.stakingStore.ClaimStake()}},created(){this.fetchData()},mounted(){},destroyed(){}},P={class:"card mb-5 bg-black",style:{"background-image":"url('/assets/images/staking/bg/banner.gif')"}},M={class:"card-body"},j={class:"grid gap-5 xs:grid-cols-1 md:grid-cols-3"},D={class:"col-span-2 xs:col-span-3 md:col-span-2"},A={class:"px-2 py-2 text-center text-gray-200 dark:text-gray-200",style:{"background-color":"#000000db !important"}},T={class:"dark:text-gray-20 tracking-widest text-gray-200 md:text-lg"},U={class:"col-span-1 sm:col-span-3 md:col-span-1"},z={class:"card shadow",style:{"border-top":"6px solid #2dbd96","background-color":"#000000db !important","border-bottom-right-radius":"10px","border-bottom-left-radius":"10px"}},V={class:"card-body"},F={class:"px-2 py-2 text-center text-gray-500 dark:text-gray-400"},K={class:"text-gray-200 dark:text-gray-200"},L={class:"flex justify-between"},E={class:"text-center text-gray-200 dark:text-gray-200"},N={class:"text-center text-gray-200 dark:text-gray-200"},R={class:"card-footer w-full text-center"},q=t("i",{class:"bi bi-chevron-right mr-2"},null,-1),B={class:"my-5"},I={class:"mb-4 flex items-center justify-between text-right"},Y={class:"font-medium"},G={class:"items-right flex items-center space-x-2"},H={class:"card relative overflow-x-auto"},J={class:"bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"},O={sortKey:"min_stake",scope:"col",class:"py-3 px-6"},Q=t("th",{scope:"col",class:"py-3 px-6"},null,-1),W={class:"py-3 px-6","data-label":"Coin"},X={class:"flex items-center"},Z={class:"mr-2 rounded-full",width:32},tt={class:"fw-bold mr-1"},st={class:"text-mute"},at={class:"py-3 px-6","data-label":"APR"},et={class:"text-success fw-bold"},lt={class:"py-3 px-6","data-label":"Duration (Days)"},nt={class:"text-warning fw-bold"},it={class:"py-3 px-6","data-label":"Minimum Stake Amount"},ot={class:""},rt={class:"py-3 px-6","data-label":"Action"},ct={key:0},dt=["onClick"],ut=["onClick"],gt=["onClick"],pt=["onClick"],kt=["onClick"],bt={key:1,scope:"row",class:"whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"},mt={colspan:"100%",class:"py-4 px-6"},yt={class:"sr-only"},ft=t("svg",{class:"h-5 w-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),St={class:"sr-only"},xt=t("svg",{class:"h-5 w-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),vt={class:"flex items-center text-lg"},wt={class:"mr-1"},ht={class:"flex justify-between"},Ct={for:"amount"},$t={key:0,class:"text-light"},_t={class:"input-group mb-1 w-auto"},Pt={class:"card bg-black pb-3"},Mt={class:"card-body"},jt={class:"mb-1 flex justify-between"},Dt={class:"text-success"},At={class:"mb-1 flex justify-between"},Tt={class:"text-success"},Ut={class:"mb-1 flex justify-between"},zt={class:"mb-1 flex justify-between"},Vt={class:"mb-1 flex justify-between"},Ft={class:"mb-1 flex justify-between"},Kt={class:"mb-1 flex justify-between"},Lt={class:"mb-1 flex justify-between"},Et={class:"flex justify-between"},Nt={class:"flex justify-end"},Rt={type:"submit",class:"btn btn-outline-primary mr-3"},qt={class:"flex items-center text-lg"},Bt={class:"mr-1"},It={class:"ml-1"},Yt={class:"fw-bold"},Gt={class:"flex justify-end"},Ht={type:"submit",class:"btn btn-outline-danger mr-3"},Jt={class:"flex items-center text-lg"},Ot={class:"mr-1"},Qt={class:"ml-1"},Wt={class:"fw-bold"},Xt={class:"flex justify-end"},Zt={type:"submit",class:"btn btn-outline-success mr-3"};function ts(e,l,vs,a,d,y){const ss=g("router-link"),as=g("Filter"),f=g("Col"),S=g("VTh"),es=g("toMoney"),ls=g("VTable"),ns=g("VTPagination"),x=g("Modal"),is=Ss("lazy");return i(),c("div",null,[t("div",P,[t("div",M,[t("div",j,[t("div",D,[t("div",A,[t("h1",null,s(e.$t("Staking")),1),t("p",T,s(e.$t("Earn stable profits with professional asset management")),1)])]),t("div",U,[t("div",z,[t("div",V,[t("div",F,[t("div",K,[t("div",null,s(e.$t("Assets"))+" (USDT)",1),(i(),c("div",{key:a.stakingStore.assets},s(a.stakingStore.assets),1))])]),t("div",L,[t("div",E,[t("div",null,s(e.$t("Yesterday Profit"))+" (USDT) ",1),(i(),c("div",{key:a.stakingStore.last_profit},s(a.stakingStore.last_profit),1))]),t("div",N,[t("div",null,s(e.$t("Total Profit"))+" (USDT) ",1),(i(),c("div",{key:a.stakingStore.total_profit},s(a.stakingStore.total_profit),1))])])]),t("div",R,[u(ss,{to:"/staking/logs"},{default:o(()=>[q,t("span",null,s(e.$t("View More")),1)]),_:1})])])])])])]),t("div",B,[t("div",I,[t("div",Y,s(e.$t("Running Contracts")),1),t("div",G,[u(as,null,{default:o(()=>[w(t("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=r=>d.filters.symbol.value=r),class:"filter-input",placeholder:"Symbol"},null,512),[[h,d.filters.symbol.value]])]),_:1})])]),t("div",H,[(i(),m(ls,{class:"w-full text-left text-sm text-gray-500 dark:text-gray-400",data:a.stakingStore.coins,key:a.stakingStore.coins.length,filters:d.filters,currentPage:d.currentPage,pageSize:10,hideSortIcons:!0,onTotalPagesChanged:l[1]||(l[1]=r=>d.totalPages=r)},{head:o(()=>[t("tr",J,[u(S,{sortKey:"symbol",scope:"col",class:"py-3 px-6"},{default:o(()=>[u(f,{text:"Coin"})]),_:1}),u(S,{sortKey:"profit",scope:"col",class:"py-3 px-6"},{default:o(()=>[u(f,{text:"Staking Profit"})]),_:1}),u(S,{sortKey:"duration",scope:"col",class:"py-3 px-6"},{default:o(()=>[u(f,{text:"Duration (Days)"})]),_:1}),t("th",O,s(e.$t("Minimum Stake Amount")),1),Q])]),body:o(({rows:r})=>[a.stakingStore.coins.length>0?(i(!0),c(C,{key:0},fs(r,n=>(i(),c("tr",{key:n.id,class:"border-b bg-white dark:border-gray-700 dark:bg-gray-800"},[t("td",W,[t("div",X,[w(t("img",Z,null,512),[[is,n.icon?"/assets/images/staking/"+n.icon:"/assets/images/cryptoCurrency/"+n.symbol+".png"]]),t("span",tt,s(n.symbol),1),t("span",st,"("+s(n.title)+")",1)])]),t("td",at,[t("span",et,s(n.profit)+"%",1)]),t("td",lt,[t("span",nt,s(n.period),1)]),t("td",it,[t("span",ot,[u(es,{num:n.min_stake,decimals:"4"},null,8,["num"]),p(" "+s(n.symbol),1)])]),t("td",rt,[a.stakingStore.coinlogs!=null?(i(),c("div",ct,[a.stakingStore.coinlogs[n.id]!=null?(i(),c("div",{class:"space-x-2 space-y-2",key:a.stakingStore.coinlogs[n.id].status},[a.stakingStore.coinlogs[n.id].status!=null?(i(),c(C,{key:0},[a.stakingStore.coinlogs[n.id].status!=2?(i(),c("button",{key:0,type:"button",class:"btn btn-warning btn-sm",onClick:b=>a.stakingStore.setCoin(n,"stake")},s(e.$t("Stake")),9,dt)):k("",!0),d.plat.staking.cancel_stake==1&&a.stakingStore.coinlogs[n.id].status==1?(i(),c("button",{key:1,type:"button",class:"btn btn-danger btn-sm",onClick:b=>a.stakingStore.setCoin(n,"cancel")},s(e.$t("Cancel")),9,ut)):a.stakingStore.coinlogs[n.id].status==2?(i(),c("button",{key:2,type:"button",class:"btn btn-success btn-sm",onClick:b=>a.stakingStore.setCoin(n,"claim")},s(e.$t("Claim Profit")),9,gt)):k("",!0)],64)):k("",!0)])):(i(),c("button",{key:1,type:"button",class:"btn btn-warning btn-sm",onClick:b=>a.stakingStore.setCoin(n,"stake")},s(e.$t("Stake")),9,pt))])):(i(),c("button",{key:1,type:"button",class:"btn btn-warning btn-sm",onClick:b=>a.stakingStore.setCoin(n,"stake")},s(e.$t("Stake")),9,kt))])]))),128)):(i(),c("tr",bt,[t("td",mt,s(e.$t("No results found!")),1)]))]),_:1},8,["data","filters","currentPage"]))]),u(ns,{class:"float-right flex items-center justify-between pt-4","aria-label":"Table navigation",currentPage:d.currentPage,"onUpdate:currentPage":l[2]||(l[2]=r=>d.currentPage=r),"total-pages":d.totalPages,"boundary-links":!0},{firstPage:o(()=>[p(s(e.$t("First")),1)]),lastPage:o(()=>[p(s(e.$t("Last")),1)]),next:o(()=>[t("span",yt,s(e.$t("Next")),1),ft]),previous:o(()=>[t("span",St,s(e.$t("Previous")),1),xt]),_:1},8,["currentPage","total-pages"])]),t("form",{onSubmit:l[6]||(l[6]=v(r=>y.Stake(),["prevent"]))},[a.stakingStore.isShowModal.stake?(i(),m(x,{size:"lg",onClose:l[5]||(l[5]=r=>a.stakingStore.closeModal("stake")),key:a.stakingStore.coin.length},{header:o(()=>[t("div",vt,[t("span",wt,s(e.$t("Staking")),1),t("span",null,s(a.stakingStore.coin.symbol),1)])]),body:o(()=>[t("div",ht,[t("label",Ct,s(e.$t("Stake Amount")),1),a.stakingStore.wallet!=null?(i(),c("span",$t,s(a.stakingStore.wallet.balance)+" USDT",1)):k("",!0)]),t("div",_t,[w(t("input",{type:"number",step:"0.00000001",required:"","onUpdate:modelValue":l[3]||(l[3]=r=>d.amount=r),min:"0",placeholder:"Amount"},null,512),[[h,d.amount]]),t("span",null,s(a.stakingStore.coin.symbol),1)]),t("div",Pt,[t("div",Mt,[t("div",jt,[t("span",null,s(e.$t("Price")),1),t("span",Dt,s(a.stakingStore.coin.price)+" USDT",1)]),t("div",At,[t("span",null,s(e.$t("Est. Annual Profit Rate")),1),t("span",Tt,s(a.stakingStore.coin.apr)+"%",1)]),t("div",Ut,[t("span",null,s(e.$t("Staked Amount")),1),t("span",null,s(a.stakingStore.coin.staked),1)]),t("div",zt,[t("span",null,s(e.$t("Max Available")),1),t("span",null,s(a.stakingStore.coin.max_stake),1)]),t("div",Vt,[t("span",null,s(e.$t("Staking period")),1),t("span",null,s(a.stakingStore.coin.period)+" "+s(e.$t("Days")),1)]),t("div",Ft,[t("span",null,s(e.$t("Staking Method")),1),t("span",null,s(a.stakingStore.coin.method),1)]),t("div",Kt,[t("span",null,s(e.$t("Coin Network")),1),t("span",null,s(a.stakingStore.coin.network),1)]),t("div",Lt,[t("span",null,s(e.$t("Profit Distribution")),1),t("span",null,s(a.stakingStore.coin.profit_unit),1)]),t("div",Et,[t("span",null,s(e.$t("Est. Daily Profits")),1),t("span",null,s(a.stakingStore.coin.daily_profit),1)])])])]),footer:o(()=>[t("div",Nt,[t("button",Rt,s(e.$t("Stake")),1),t("button",{onClick:l[4]||(l[4]=r=>a.stakingStore.closeModal("stake")),type:"button",class:"btn btn-outline-secondary"},s(e.$t("Close")),1)])]),_:1})):k("",!0)],32),t("form",{onSubmit:l[9]||(l[9]=v(r=>y.CancelStake(),["prevent"]))},[a.stakingStore.isShowModal.cancel?(i(),m(x,{size:"lg",onClose:l[8]||(l[8]=r=>a.stakingStore.closeModal("cancel")),key:a.stakingStore.coin.length},{header:o(()=>[t("div",qt,[t("span",Bt,s(e.$t("Cancel")),1),t("span",null,s(a.stakingStore.coin.symbol),1),t("span",It,s(e.$t("Staking")),1)])]),body:o(()=>[t("p",null,[p(s(e.$t("Are you sure to cancel"))+" ",1),t("span",Yt,s(a.stakingStore.coin.symbol),1),p(" "+s(e.$t("Stake"))+"? ",1)])]),footer:o(()=>[t("div",Gt,[t("button",Ht,s(e.$t("Cancel")),1),t("button",{onClick:l[7]||(l[7]=r=>a.stakingStore.closeModal("cancel")),type:"button",class:"btn btn-outline-secondary"},s(e.$t("Close")),1)])]),_:1})):k("",!0)],32),t("form",{onSubmit:l[12]||(l[12]=v(r=>y.ClaimStake(),["prevent"]))},[a.stakingStore.isShowModal.claim?(i(),m(x,{size:"lg",onClose:l[11]||(l[11]=r=>a.stakingStore.closeModal("claim")),key:a.stakingStore.coin.length},{header:o(()=>[t("div",Jt,[t("span",Ot,s(e.$t("Cancel")),1),t("span",null,s(a.stakingStore.coin.symbol),1),t("span",Qt,s(e.$t("Staking")),1)])]),body:o(()=>[t("p",null,[p(s(e.$t("Are you sure to claim"))+" ",1),t("span",Wt,s(a.stakingStore.coin.symbol),1),p(" "+s(e.$t("Stake"))+"? ",1)])]),footer:o(()=>[t("div",Xt,[t("button",Zt,s(e.$t("Claim")),1),t("button",{onClick:l[10]||(l[10]=r=>a.stakingStore.closeModal("claim")),type:"button",class:"btn btn-outline-secondary"},s(e.$t("Close")),1)])]),_:1})):k("",!0)],32)])}$=ys(_,[["render",ts]])});export{xs as __tla,$ as default};
