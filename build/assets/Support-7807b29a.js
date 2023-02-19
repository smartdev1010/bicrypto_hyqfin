import{t as J}from"./toDate-7f2bc02f.js";import{F as K,C as Q}from"./Col-495fd683.js";import{v as W,__tla as X}from"./vue-qrcode.esm-9e0a6c12.js";import{_ as Y,o,c as p,a as t,t as c,g as l,w as a,j as Z,i as tt,F as et,r as at,l as y,h as st,q as d}from"./_plugin-vue_export-helper-8676f0c8.js";import"./axios-c0bebe37.js";import"./_commonjsHelpers-87174ba5.js";import"./pinia-72e453fe.js";import"./browser-e552b3f6.js";import"./dijkstra-59d11638.js";let b,lt=Promise.all([(()=>{try{return X}catch{}})()]).then(async()=>{const k={components:{toDate:J,Filter:K,Col:Q},props:[],data(){return{tickets:[],filters:{ticket:{value:"",keys:["ticket"]}},currentPage:1,totalPages:0}},created(){this.fetchData()},mounted(){},unmounted(){},methods:{fetchData(){axios.post("/user/fetch/support").then(r=>{this.tickets=r.tickets})}}},f={class:"my-2 text-end"},m={href:"/user/support/ticket/new",class:"btn btn-outline-primary"},x={class:"mb-4 items-center justify-between xs:block xs:space-y-5 sm:flex sm:space-y-0"},h={class:"font-medium"},w={class:"card relative overflow-x-auto"},v={class:"bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"},P=t("th",{scope:"col"},"Action",-1),_={"data-label":"Subject",class:"py-4 px-6"},T={"data-label":"Status",class:"py-4 px-6"},C={key:0,class:"badge bg-success"},j={key:1,class:"badge bg-primary"},$={key:2,class:"badge bg-warning"},D={key:3,class:"badge bg-danger"},F={"data-label":"Last Reply",class:"py-4 px-6"},L={"data-label":"Action",class:"py-4 px-6"},S=["href"],V=t("i",{class:"bi bi-display",style:{"margin-right":"0 !important"}},null,-1),z=[V],A={key:1,scope:"row",class:"border-b bg-white dark:border-gray-700 dark:bg-gray-800"},N={colspan:"100%",class:"py-4 px-6"},R={class:"sr-only"},U=t("svg",{class:"h-5 w-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),B={class:"sr-only"},M=t("svg",{class:"h-5 w-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1);function q(r,n,rt,it,e,ot){const I=d("Filter"),u=d("Col"),g=d("VTh"),O=d("router-link"),E=d("toDate"),G=d("VTable"),H=d("VTPagination");return o(),p("div",null,[t("div",f,[t("a",m,c(r.$t("New Ticket")),1)]),t("div",x,[t("div",h,c(r.$t("Support Tickets")),1),l(I,null,{default:a(()=>[Z(t("input",{"onUpdate:modelValue":n[0]||(n[0]=i=>e.filters.ticket.value=i),type:"text",class:"filter-input",placeholder:"Ticket ID"},null,512),[[W,e.filters.ticket.value]])]),_:1})]),t("div",w,[(o(),tt(G,{key:e.tickets.length,"current-page":e.currentPage,"onUpdate:current-page":n[1]||(n[1]=i=>e.currentPage=i),class:"w-full text-left text-sm text-gray-500 dark:text-gray-400",data:e.tickets,filters:e.filters,"page-size":10,"hide-sort-icons":!0,onTotalPagesChanged:n[2]||(n[2]=i=>e.totalPages=i)},{head:a(()=>[t("tr",v,[l(g,{"sort-key":"subject",scope:"col",class:"py-3 px-6"},{default:a(()=>[l(u,{text:"Subject"})]),_:1}),l(g,{"sort-key":"status",scope:"col",class:"py-3 px-6"},{default:a(()=>[l(u,{text:"Status"})]),_:1}),l(g,{"sort-key":"last_reply",scope:"col",class:"py-3 px-6"},{default:a(()=>[l(u,{text:"Last Reply"})]),_:1}),P])]),body:a(({rows:i})=>[e.tickets.length>0?(o(!0),p(et,{key:0},at(i,s=>(o(),p("tr",{key:s.id,class:"border-b bg-white dark:border-gray-700 dark:bg-gray-800"},[t("td",_,[l(O,{to:"/support/ticket/"+s.ticket,class:"fw-bold"},{default:a(()=>[y("[Ticket#"+c(s.ticket)+"] "+c(s.subject),1)]),_:2},1032,["to"])]),t("td",T,[s.status==0?(o(),p("span",C,"Open")):s.status==1?(o(),p("span",j,"Answered")):s.status==2?(o(),p("span",$,"Customer Reply")):s.status==3?(o(),p("span",D,"Closed")):st("",!0)]),t("td",F,[l(E,{time:s.last_reply},null,8,["time"])]),t("td",L,[t("a",{class:"btn btn-primary btn-sm",href:"/user/support/ticket/view/"+s.ticket},z,8,S)])]))),128)):(o(),p("tr",A,[t("td",N,c(r.$t("No results found!")),1)]))]),_:1},8,["current-page","data","filters"]))]),l(H,{currentPage:e.currentPage,"onUpdate:currentPage":n[3]||(n[3]=i=>e.currentPage=i),class:"float-right flex items-center justify-between pt-4","aria-label":"Table navigation","total-pages":e.totalPages,"boundary-links":!0},{firstPage:a(()=>[y(c(r.$t("First")),1)]),lastPage:a(()=>[y(c(r.$t("Last")),1)]),next:a(()=>[t("span",R,c(r.$t("Next")),1),U]),previous:a(()=>[t("span",B,c(r.$t("Previous")),1),M]),_:1},8,["currentPage","total-pages"])])}b=Y(k,[["render",q]])});export{lt as __tla,b as default};
