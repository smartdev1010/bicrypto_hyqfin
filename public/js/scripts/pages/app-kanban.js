$((function(){"use strict";var a,t=$(".kanban-wrapper"),e=$(".update-item-sidebar"),n=$("#due-date"),d=$(".select2"),o=$(".comment-editor"),i=$(".add-new-board"),s=$(".update-item-sidebar"),r=$(".add-new-board-input"),l="../../../app-assets/";if("laravel"===$("body").attr("data-framework")&&(l=$("body").attr("data-asset-path")),$.ajax({type:"GET",dataType:"json",async:!1,url:l+"data/kanban.json",success:function(t){a=t}}),r.toggle(),n.length&&n.flatpickr({monthSelectorType:"static",altInput:!0,altFormat:"j F, Y",dateFormat:"Y-m-d"}),d.length){function v(a){return a.id?"<div class='badge "+$(a.element).data("color")+" rounded-pill'> "+a.text+"</div>":a.text}d.each((function(){var a=$(this);a.wrap("<div class='position-relative'></div>").select2({placeholder:"Select Label",dropdownParent:a.parent(),templateResult:v,templateSelection:v,escapeMarkup:function(a){return a}})}))}function c(){return"<div class='dropdown'>"+feather.icons["more-vertical"].toSvg({class:"dropdown-toggle cursor-pointer font-medium-3 me-0",id:"board-dropdown","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"})+"<div class='dropdown-menu dropdown-menu-end' aria-labelledby='board-dropdown'><a class='dropdown-item delete-board' href='#'> "+feather.icons.trash.toSvg({class:"font-medium-1 align-middle"})+"<span class='align-middle ms-25'>Delete</span></a><a class='dropdown-item' href='#'>"+feather.icons.edit.toSvg({class:"font-medium-1 align-middle"})+"<span class='align-middle ms-25'>Rename</span></a><a class='dropdown-item' href='#'>"+feather.icons.archive.toSvg({class:"font-medium-1 align-middle"})+"<span class='align-middle ms-25'>Archive</span></a></div></div>"}function m(){return"<div class='dropdown item-dropdown px-1'>"+feather.icons["more-vertical"].toSvg({class:"dropdown-toggle cursor-pointer me-0 font-medium-1",id:"item-dropdown"," data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"})+"<div class='dropdown-menu dropdown-menu-end' aria-labelledby='item-dropdown'><a class='dropdown-item' href='#'>Copy task link</a><a class='dropdown-item' href='#'>Duplicate task</a><a class='dropdown-item delete-task' href='#'>Delete</a></div></div>"}function p(a,t){return"<div class='d-flex justify-content-between flex-wrap align-items-center mb-1'><div class='item-badges'> <div class='badge rounded-pill badge-light-"+a+"'> "+t+"</div></div>"+m()+"</div>"}function u(a,t,e,n,d){var o=t?" pull-up":"",i=void 0!==n?n.split(","):"";return void 0!==a?a.split(",").map((function(a,t,n){var s=void 0!==e&&t!==n.length-1?" me-"+e:"";return"<li class='avatar kanban-item-avatar "+o+" "+s+"'data-bs-toggle='tooltip' data-bs-placement='top'title='"+i[t]+"'><img src='"+l+"images/portrait/small/"+a+"' alt='Avatar' height='"+d+"'></li>"})).join(" "):""}function b(a,t,e,n){return"<div class='d-flex justify-content-between align-items-center flex-wrap mt-1'><div> <span class='align-middle me-50'>"+feather.icons.paperclip.toSvg({class:"font-medium-1 align-middle me-25"})+"<span class='attachments align-middle'>"+a+"</span></span> <span class='align-middle'>"+feather.icons["message-square"].toSvg({class:"font-medium-1 align-middle me-25"})+"<span>"+t+"</span></span></div><ul class='avatar-group mb-0'>"+u(e,!0,0,n,28)+"</ul></div>"}o.length&&new Quill(".comment-editor",{modules:{toolbar:".comment-toolbar"},placeholder:"Write a Comment... ",theme:"snow"});var f=new jKanban({element:".kanban-wrapper",gutter:"15px",widthBoard:"250px",dragItems:!0,boards:a,dragBoards:!0,addItemButton:!0,itemAddOptions:{enabled:!0,content:"+ Add New Item",class:"kanban-title-button btn btn-default btn-xs",footer:!1},click:function(a){a=$(a);var t=!1,o=a.attr("data-eid")?a.find(".kanban-text").text():a.text(),i=a.attr("data-due-date"),s=new Date,r=s.getFullYear(),l=i?i+", "+r:s.getDate()+" "+s.toLocaleString("en",{month:"long"})+", "+r,c=a.attr("data-badge-text"),m=a.attr("data-assigned");a.find(".kanban-item-avatar").length&&a.find(".kanban-item-avatar").on("click",(function(a){a.stopPropagation()})),$(document).on("click",".item-dropdown",(function(a){t=!0})),setTimeout((function(){!1===t&&e.modal("show")}),50),e.find(".update-item-form").on("submit",(function(a){a.preventDefault()})),e.find("#title").val(o),e.find(n).next(".form-control").val(l),e.find(d).val(c).trigger("change"),e.find(".assigned").empty(),e.find(".assigned").append(u(m,!1,"50",a.attr("data-members"),32)+"<li class='avatar avatar-add-member ms-50'><span class='avatar-content'>"+feather.icons.plus.toSvg({class:"avatar-icon"})+"</li>")},buttonClick:function(a,t){var e=document.createElement("form");e.setAttribute("class","new-item-form"),e.innerHTML='<div class="mb-1"><textarea class="form-control add-new-item" rows="2" placeholder="Add Content" required></textarea></div><div class="mb-2"><button type="submit" class="btn btn-primary btn-sm me-1">Add</button><button type="button" class="btn btn-outline-secondary btn-sm cancel-add-item">Cancel</button></div>',f.addForm(t,e),e.querySelector("textarea").focus(),e.addEventListener("submit",(function(a){a.preventDefault();var n=$(".kanban-board[data-id='"+t+"']");f.addElement(t,{title:"<span class='kanban-text'>"+a.target[0].value+"</span>",id:t+"-"+n.find(".kanban-item").length+1}),n.find(".kanban-item:last-child .kanban-text").before(m()),e.remove()})),$(document).on("click",".cancel-add-item",(function(){$(this).closest(e).toggle()}))},dragEl:function(a,t){$(a).find(".item-dropdown, .item-dropdown .dropdown-menu.show").removeClass("show")}});t.length&&new PerfectScrollbar(t[0]),$(".kanban-container").append(i),$.each($(".kanban-title-button"),(function(){$(this).removeClass().addClass("kanban-title-button btn btn-flat-secondary btn-sm ms-50"),Waves.init(),Waves.attach("[class*='btn-flat-']")})),$(document).on("mouseenter",".kanban-title-board",(function(){$(this).attr("contenteditable","true")})),$.each($(".kanban-board-header"),(function(){$(this).append(c())})),$(document).on("click",".delete-board",(function(){var a=$(this).closest(".kanban-board").data("id");f.removeBoard(a)})),$(document).on("click",".dropdown-item.delete-task",(function(){!0;var a=$(this).closest(".kanban-item").data("eid");f.removeElement(a)})),$(".add-new-btn, .cancel-add-new").on("click",(function(){r.toggle()})),i.on("submit",(function(a){a.preventDefault();var t=$(this).find(".form-control").val(),e=t.replace(/\s+/g,"-").toLowerCase();f.addBoards([{id:e,title:t}]),$(".kanban-board:last-child").find(".kanban-board-header").append(c()),r.val("").css("display","none"),$(".kanban-container").append(i),$.each($(".kanban-title-button"),(function(){$(this).removeClass().addClass("kanban-title-button btn btn-flat-secondary btn-sm ms-50"),Waves.init(),Waves.attach("[class*='btn-flat-']")}))})),e.on("hidden.bs.modal",(function(){e.find(".ql-editor")[0].innerHTML="",e.find(".nav-link-activity").removeClass("active"),e.find(".tab-pane-activity").removeClass("show active"),e.find(".nav-link-update").addClass("active"),e.find(".tab-pane-update").addClass("show active")})),e.on("shown.bs.modal",(function(){$('[data-bs-toggle="tooltip"]').tooltip()})),$(".update-item-form").on("submit",(function(a){a.preventDefault(),e.modal("hide")})),$.each($(".kanban-item"),(function(){var a=$(this),t="<span class='kanban-text'>"+a.text()+"</span>";void 0!==a.attr("data-badge")&&void 0!==a.attr("data-badge-text")&&a.html(p(a.attr("data-badge"),a.attr("data-badge-text"))+t),void 0===a.attr("data-comments")&&void 0===a.attr("data-due-date")&&void 0===a.attr("data-assigned")||a.append(b(a.attr("data-attachments"),a.attr("data-comments"),a.attr("data-assigned"),a.attr("data-members"))),void 0!==a.attr("data-image")&&a.html(p(a.attr("data-badge"),a.attr("data-badge-text"))+"<img class='img-fluid rounded mb-50' src='"+l+"images/slider/"+a.attr("data-image")+"' height='32'/>"+t+b(a.attr("data-due-date"),a.attr("data-comments"),a.attr("data-assigned"),a.attr("data-members"))),a.on("mouseenter",(function(){a.find(".item-dropdown, .item-dropdown .dropdown-menu.show").removeClass("show")}))})),s.length&&s.on("hidden.bs.modal",(function(){s.find(".file-attachments").val("")}))}));
