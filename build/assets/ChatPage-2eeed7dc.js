import{_ as h,o as a,c,a as t,F as l,r as p,n as u,t as _,m}from"./_plugin-vue_export-helper-8676f0c8.js";const g={components:{},data(){return{ticket:[]}},methods:{goBack(){window.history.length>1?this.$router.go(-1):this.$router.push("/")},fetchData(){axios.post("/user/fetch/support/ticket/"+this.$route.params.id).then(o=>{this.ticket=o.data.ticket})},enterChat(o){var s=$(".message").val();if(/\S/.test(s)){var n='<div class="chat-content"><p>'+s+"</p></div>";$(".chat:last-child .chat-body").append(n),$(".message").val(""),$(".user-chats").scrollTop($(".user-chats > .chats").height())}}},created(){this.fetchData(),this.enterChat()},mounted(){},destroyed(){}},f={class:"chat-application"},v={class:"chat-app-window"},y={class:"active-chat"},k={class:"chat-avatar"},b={class:"avatar box-shadow-1 cursor-pointer"},x=["src"],C={class:"chat-body"},w={class:"chat-content"},S=["action"],B=m('<div class="input-group input-group-merge mr-1 form-send-message"><span class="speech-to-text input-group-text"><i data-feather="mic" class="cursor-pointer"></i></span><input type="text" class="form-control message" placeholder="Type your message or use speech to text"><span class="input-group-text"><label for="attach-doc" class="attachment-icon form-label mb-0"><i data-feather="image" class="cursor-pointer text-secondary"></i><input type="file" id="attach-doc" hidden></label></span></div>',1),D=t("i",{"data-feather":"send",class:"d-lg-none"},null,-1),P=t("span",{class:"d-none d-lg-block"},"Send",-1),T=[D,P];function F(o,s,n,N,i,r){return a(),c("div",f,[t("section",v,[t("div",y,[(a(),c("div",{class:"user-chats",key:i.ticket.unread},[(a(!0),c(l,null,p(i.ticket.messages,(e,d)=>(a(),c("div",{class:"chats",key:d},[t("div",{class:u(["chat",e.side==1?"chat-left":""])},[t("div",k,[t("span",b,[t("img",{src:e.user.icon?"/assets/images/profile/"+e.user.icon:"/market/notification.png",alt:"avatar",height:"36",width:"36"},null,8,x)])]),t("div",C,[t("div",w,[t("p",null,_(e.message),1)])])],2)]))),128))])),t("form",{class:"chat-app-form",method:"POST",action:"/user/support/ticket/reply/"+i.ticket.id},[B,t("button",{type:"submit",class:"btn btn-primary send",onClick:s[0]||(s[0]=e=>r.enterChat())},T)],8,S)])])])}const z=h(g,[["render",F]]);export{z as default};
