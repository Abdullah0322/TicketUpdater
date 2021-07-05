(this["webpackJsonpreact-sidebar-v1"]=this["webpackJsonpreact-sidebar-v1"]||[]).push([[0],{101:function(e,t,a){},128:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(24),s=a.n(r),o=(a(99),a(100),a(101),a(156)),i=a(43),l=a(11),d=a(53),j=a(66),u=a(8),b=a(167),p=a(84),h=a(157),m=a(82),g=a(16),O=a(12),x=a.n(O),f=a(26),v=a(10),E=a.n(v),y="TICKET_LIST_REQUEST",T="TICKET_LIST_SUCCESS",C="TICKET_LIST_FAIL",k="TICKET_CREATE_REQUEST",I="TICKET_CREATE_SUCCESS",S="TICKET_CREATE_FAIL",_="TICKET_CREATE_RESET",N="TICKET_DELETE_REQUEST",w="TICKET_DELETE_SUCCESS",D="TICKET_DELETE_FAIL",A="TICKET_CREATE_HEADING_REQUEST",L="TICKET_CREATE_HEADING_SUCCESS",R="TICKET_CREATE_HEADING_FAIL",U="TICKET_CREATE_HEADING_RESET",K="TICKET_DELETE_HEADING_REQUEST",H="TICKET_DELETE_HEADING_SUCCESS",G="TICKET_DELETE_HEADING_FAIL",F="TICKET_DELETE_HEADING_RESET",P="TICKET_UPDATE_REQUEST",B="TICKET_UPDATE_SUCCESS",Q="TICKET_UPDATE_FAIL",J="TICKET_UPDATE_RESET",Y="TICKET_CREATE_HEADING2_REQUEST",W="TICKET_CREATE_HEADING2_SUCCESS",M="TICKET_CREATE_HEADING2_FAIL",q="TICKET_CREATE_HEADING2_RESET",z="TICKET_DELETE_HEADING2_REQUEST",V="TICKET_DELETE_HEADING2_SUCCESS",X="TICKET_DELETE_HEADING2_FAIL",Z="TICKET_DELETE_HEADING2_RESET",$="TICKET_DUPLICATE_REQUEST",ee="TICKET_DUPLICATE_SUCCESS",te="TICKET_DUPLICATE_FAIL",ae=function(){return function(){var e=Object(f.a)(x.a.mark((function e(t){var a,n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:k}),e.next=4,E.a.post("/api/tickets",{});case 4:a=e.sent,n=a.data,t({type:I,payload:n}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),c=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:S,payload:c});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},ne=a(2),ce=function(){var e=Object(n.useState)({title:"",url:"",status:"",priority:""}),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(g.b)(),s=Object(g.c)((function(e){return e.ticketCreate})),i=(s.loading,s.error,s.success);Object(n.useEffect)((function(){i?(r({type:_}),window.location.reload()):c(a)}),[r,i]);var l=function(e){console.log(e.target.name),console.log(e.target.value),c(Object(j.a)(Object(j.a)({},a),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(ne.jsxs)(o.a,{children:[Object(ne.jsx)("h1",{children:"Create a Ticket"}),Object(ne.jsx)("br",{}),Object(ne.jsx)(h.a,{className:"justify-content-md-center",children:Object(ne.jsx)(m.a,{xs:12,md:6,children:Object(ne.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),r(ae())},children:[Object(ne.jsxs)(b.a.Group,{controlId:"name",children:[Object(ne.jsx)(b.a.Label,{children:"Ticket Title"}),Object(ne.jsx)(b.a.Control,{type:"title",placeholder:"Enter Title",name:"title",value:a.title,onChange:l})]}),Object(ne.jsxs)(b.a.Group,{controlId:"name",children:[Object(ne.jsx)(b.a.Label,{children:"Ticket URL"}),Object(ne.jsx)(b.a.Control,{type:"url",placeholder:"Enter URL",value:a.url,name:"url",onChange:l})]}),Object(ne.jsxs)(b.a.Group,{controlId:"name",children:[Object(ne.jsx)(b.a.Label,{children:"Status"}),Object(ne.jsx)(b.a.Control,{type:"name",placeholder:"Enter Status",name:"status",value:a.status,onChange:l})]}),Object(ne.jsxs)(b.a.Group,{controlId:"name",children:[Object(ne.jsx)(b.a.Label,{children:"Priority"}),Object(ne.jsx)(b.a.Control,{type:"name",placeholder:"Enter Priority",name:"priority",value:a.priority,onChange:l})]}),Object(ne.jsx)(p.a,{type:"submit",variant:"primary",children:"Create Ticket"})]})})})]})},re=(a(128),a(170)),se=function(e){var t=e.variant,a=e.children;return Object(ne.jsx)(re.a,{variant:t,children:a})};se.defaultProps={variant:"info"};var oe=se,ie=a(158),le=function(){return Object(ne.jsx)(ie.a,{animation:"border",role:"status",style:{width:"100px",height:"100px",margin:"auto",display:"block"},children:Object(ne.jsx)("span",{className:"sr-only",children:"Loading..."})})},de=a(38),je=a(159),ue=a(160),be=a(83),pe=(a(78),function(e){var t=e.ticket,a=Object(n.useState)(!1),c=Object(u.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)(!1),i=Object(u.a)(o,2),l=i[0],d=i[1],j=Object(n.useState)(!1),b=Object(u.a)(j,2),O=b[0],v=b[1],y=Object(n.useState)(!1),C=Object(u.a)(y,2),k=C[0],I=C[1],S=Object(n.useState)(!1),_=Object(u.a)(S,2),U=_[0],F=_[1],P=Object(n.useState)(!1),B=Object(u.a)(P,2),Q=B[0],J=B[1],q=Object(n.useState)(!1),Z=Object(u.a)(q,2),ae=Z[0],ce=Z[1],re=Object(n.useState)(!1),se=Object(u.a)(re,2),oe=(se[0],se[1],Object(n.useState)(!1)),ie=Object(u.a)(oe,2),le=ie[0],pe=ie[1],he=Object(n.useState)(t.heading),me=Object(u.a)(he,2),ge=me[0],Oe=(me[1],Object(n.useState)(t.body)),xe=Object(u.a)(Oe,2),fe=xe[0],ve=(xe[1],Object(n.useState)(t.body2)),Ee=Object(u.a)(ve,2),ye=Ee[0],Te=(Ee[1],Object(n.useState)(t.heading2)),Ce=Object(u.a)(Te,2),ke=Ce[0],Ie=(Ce[1],Object(n.useState)(t.heading)),Se=Object(u.a)(Ie,2),_e=(Se[0],Se[1],Object(g.b)()),Ne=function(e){var a;t.heading.pop(),t.body.pop(),_e((a=t._id,function(){var e=Object(f.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:K}),e.next=4,E.a.delete("/api/tickets/".concat(a,"/headings"),{});case 4:t({type:H}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:G,payload:n});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()))},we=function(e){var a;t.heading2.pop(),t.body2.pop(),_e((a=t._id,function(){var e=Object(f.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:z}),e.next=4,E.a.delete("/api/tickets/".concat(a,"/headings2"),{});case 4:t({type:V}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:X,payload:n});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()))},De=function(e){window.confirm("Are you sure")&&_e(function(e){return function(){var t=Object(f.a)(x.a.mark((function t(a){var n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:N}),t.next=4,E.a.delete("/api/tickets/".concat(e));case 4:a({type:w}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),n=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,a({type:D,payload:n});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(e))},Ae=function(e){var a,n="sample name";t.heading.push(n),t.body.push(n),_e((a=t._id,function(){var e=Object(f.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:A}),e.next=4,E.a.post("/api/tickets/".concat(a,"/headings"),{});case 4:t({type:L}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:R,payload:n});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()))},Le=function(e){var a,n="sample name";t.heading2.push(n),t.body2.push(n),_e((a=t._id,function(){var e=Object(f.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:Y}),e.next=4,E.a.post("/api/tickets/".concat(a,"/headings2"),{});case 4:t({type:W}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:M,payload:n});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()))},Re=function(e,a){e.persist(),console.log("-----------------",e.target.value,"ine",a),function(e,a){Object(de.a)(ge),console.log("Handle change => ",e.target.value,"index",a),t.heading[a]=e.target.value}(e,a)},Ue=function(e,a){Object(de.a)(fe);console.log("Handle change => ",e.target.value,"index",a),t.body[a]=e.target.value,console.log("ticket.body[i]: ",t.body)},Ke=function(e,a){Object(de.a)(ke);console.log("Handle change => ",e.target.value,"index",a),t.heading2[a]=e.target.value,console.log("ticket.body[i]: ",t.body)},He=function(e,a){Object(de.a)(ye);console.log("Handle change => ",e.target.value,"index",a),t.body2[a]=e.target.value,console.log("ticket.body[i]: ",t.body)},Ge=function(){var e;localStorage.getItem("response")?(console.log("index",e),console.log("update headingName",ge,"index",e),t.heading[e]=ge,E.a.post("/api/tickets/".concat(t._id,"/heading"),t.heading),console.log("ticket.heading: ",t.heading)):alert("You must be admin to update")},Fe=function(){var e;localStorage.getItem("response")?(t.body[e]=fe,E.a.post("/api/tickets/".concat(t._id,"/body"),t.body),console.log(t._id)):alert("You must be admin to update")},Pe=function(){var e;localStorage.getItem("response")?(t.heading2[e]=ke,E.a.post("/api/tickets/".concat(t._id,"/heading2"),t.heading2),console.log(t._id)):alert("You must be admin to update")},Be=function(){var e;localStorage.getItem("response")?(t.body2[e]=ye,E.a.post("/api/tickets/".concat(t._id,"/body2"),t.body2),console.log(t._id)):alert("You must be admin to update")};return Object(ne.jsxs)("div",{children:[Object(ne.jsx)("div",{className:"buttons",children:Object(ne.jsxs)(h.a,{children:[localStorage.getItem("response")?Object(ne.jsx)(p.a,{variant:"danger ",className:"btn-sm",onClick:function(){return De(t._id)},children:"Delete"}):"",localStorage.getItem("response")?Object(ne.jsx)(p.a,{variant:"danger",className:"btn-sm",onClick:function(){return Ne(t._id)},children:"Delete Column in Row 1"}):"",localStorage.getItem("response")?Object(ne.jsx)(p.a,{variant:"danger",className:"btn-sm",onClick:function(){return we(t._id)},children:"Delete Column in Row 2"}):"",Object(ne.jsxs)(m.a,{children:[localStorage.getItem("response")?Object(ne.jsx)(p.a,{variant:"primary",className:"btn-sm",onClick:function(){_e(function(e){return function(){var t=Object(f.a)(x.a.mark((function t(a){var n,c,r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:$}),delete e._id,t.next=5,E.a.post("/api/tickets/duplicate",e);case 5:n=t.sent,c=n.data,a({type:ee,payload:c}),a({type:T,payload:c}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),r=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,a({type:te,payload:r});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(t)),window.location.reload()},children:"Duplicate"}):"",localStorage.getItem("response")?Object(ne.jsx)(p.a,{variant:"primary",className:"btn-sm",onClick:function(){return Le(t._id)},children:"Add Column in Row 2"}):"",localStorage.getItem("response")?Object(ne.jsx)(p.a,{variant:"primary",className:"btn-sm",onClick:function(){return Ae(t._id)},children:"Add Column in Row 1"}):""]})]})}),Object(ne.jsx)(h.a,{children:Object(ne.jsxs)(je.a,{className:"table table-borderless",variant:"dark",children:[Object(ne.jsx)("thead",{children:Object(ne.jsxs)("tr",{children:[t&&t.heading.map((function(e,t){return Object(ne.jsxs)("th",{children:[" ",0==r?Object(ne.jsx)("h6",{className:"head",children:e}):Object(ne.jsx)(ue.a,{className:"mb-3",children:Object(ne.jsx)(be.a,{placeholder:e,name:e.headingName,value:e.headingName,onChange:function(e){return Re(e,t)}})})]},t)})),Object(ne.jsx)("th",{children:0==U&&localStorage.getItem("response")?Object(ne.jsx)(p.a,{variant:"primary",className:"btn-sm",onClick:function(){s(!0),F(!0)},children:Object(ne.jsx)("i",{className:"fas fa-edit"})}):Object(ne.jsx)(p.a,{variant:"primary",className:"btn-sm",onClick:function(){Ge(),F(!1),s(!1)},children:"Update"})})]})}),Object(ne.jsxs)("tbody",{children:[Object(ne.jsxs)("tr",{children:[t.body.map((function(e,t){return Object(ne.jsx)("td",{children:0==l?Object(ne.jsxs)("div",{className:"body",children:[" ",e]}):Object(ne.jsx)(ue.a,{className:"mb-3",children:Object(ne.jsx)(be.a,{placeholder:e,name:e.bodyName,value:e.bodyName,onChange:function(e){return function(e,t){e.persist(),console.log("-----------------",e.target.value,"ine",t),Ue(e,t)}(e,t)}})})},t)})),Object(ne.jsxs)("td",{children:[" ",0==Q&&localStorage.getItem("response")?Object(ne.jsx)(p.a,{variant:"primary",className:"btn-sm",onClick:function(){d(!0),J(!0)},children:Object(ne.jsx)("i",{className:"fas fa-edit"})}):Object(ne.jsx)(p.a,{variant:"primary",className:"btn-sm",onClick:function(){Fe(),J(!1),d(!1)},children:"Update"})]})]}),Object(ne.jsxs)("tr",{children:[t.heading2.map((function(e,t){return Object(ne.jsx)("td",{children:0==O?Object(ne.jsx)("h6",{className:"head",children:Object(ne.jsx)("b",{children:e})}):Object(ne.jsx)(ue.a,{className:"mb-3",children:Object(ne.jsx)(be.a,{placeholder:e,name:e.bodyName,value:e.bodyName,onChange:function(e){return function(e,t){e.persist(),console.log("-----------------",e.target.value,"ine",t),Ke(e,t)}(e,t)}})})},t)})),Object(ne.jsxs)("td",{children:[" ",0==ae&&localStorage.getItem("response")?Object(ne.jsx)(p.a,{variant:"primary",className:"btn-sm",onClick:function(){v(!0),ce(!0)},children:Object(ne.jsx)("i",{className:"fas fa-edit"})}):Object(ne.jsx)(p.a,{variant:"primary",className:"btn-sm",onClick:function(){Pe(),ce(!1),v(!1)},children:"Update"})]})]}),Object(ne.jsxs)("tr",{children:[t.body2.map((function(e,t){return Object(ne.jsx)("td",{children:0==k?Object(ne.jsx)("b",{children:e}):Object(ne.jsx)(ue.a,{className:"mb-3",children:Object(ne.jsx)(be.a,{placeholder:e,name:e.bodyName,value:e.bodyName,onChange:function(e){return function(e,t){e.persist(),console.log("-----------------",e.target.value,"ine",t),He(e,t)}(e,t)}})})},t)})),Object(ne.jsxs)("td",{children:[" ",0==le&&localStorage.getItem("response")?Object(ne.jsx)(p.a,{variant:"primary",className:"btn-sm",onClick:function(){I(!0),pe(!0)},children:Object(ne.jsx)("i",{className:"fas fa-edit"})}):Object(ne.jsx)(p.a,{variant:"primary",className:"btn-sm",onClick:function(){Be(),pe(!1),I(!1)},children:"Update"})]})]})]})]})})]})}),he=a(171),me=a(42),ge=function(e){var t=e.pages,a=e.page,n=e.isAdmin,c=void 0!==n&&n,r=e.keyword,s=void 0===r?"":r;return t>1&&Object(ne.jsx)(he.a,{children:Object(de.a)(Array(t).keys()).map((function(e){return Object(ne.jsx)(me.LinkContainer,{to:c?"/admin/productlist/".concat(e+1):s?"/search/".concat(s,"/page/").concat(e+1):"/page/".concat(e+1),children:Object(ne.jsx)(he.a.Item,{active:e+1===a,children:e+1})},e+1)}))})},Oe=a(172),xe=a(86),fe=function(e){var t=e.title,a=e.description,n=e.keywords;return Object(ne.jsxs)(xe.a,{children:[Object(ne.jsx)("title",{children:t}),Object(ne.jsx)("meta",{name:"description",content:a}),Object(ne.jsx)("meta",{name:"keyword",content:n})]})};fe.defaultProps={title:"Ticket Update",description:"Updating Tickets",keywords:"We can update Tickets on daily basis"};var ve=fe,Ee=function(e){var t=e.match,a=t.params.keyword,r=t.params.pageNumber||1,s=Object(g.b)(),i=Object(g.c)((function(e){return e.ticketList})),l=i.loading,d=i.error,j=i.tickets,b=i.page,O=i.pages,v=Object(g.c)((function(e){return e.ticketDelete})),k=(v.loading,v.error,v.success),I=Object(g.c)((function(e){return e.ticketCreate})),S=(I.loading,I.error,I.success),_=I.ticket,N=Object(g.c)((function(e){return e.ticketHeadingCreate})),w=(N.success,N.loading,N.error,Object(g.c)((function(e){return e.ticketUpdate}))),D=(w.loading,w.error,w.success),A=Object(g.c)((function(e){return e.ticketHeading2Create})),L=(A.success,A.loading,A.error,Object(g.c)((function(e){return e.ticketHeadingDelete}))),R=(L.success,L.loading,L.error,Object(g.c)((function(e){return e.ticketDuplicate}))),U=R.success,K=(R.loading,R.error,Object(g.c)((function(e){return e.ticketHeading2Delete}))),H=(K.success,K.loading,K.error,Object(n.useState)([])),G=Object(u.a)(H,2),F=G[0],P=G[1],B=JSON.parse(localStorage.getItem("response"));Object(n.useEffect)((function(){s(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var a=Object(f.a)(x.a.mark((function a(n){var c,r;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:y}),a.next=4,E.a.get("/api/tickets?keyword=".concat(e,"&pageNumber=").concat(t));case 4:c=a.sent,r=c.data,n({type:T,payload:r}),console.log(r),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),n({type:C,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()}(a,r))}),[s,a,r,S,k,_,U,R,D]),Object(n.useEffect)((function(){P(j)}),[j]);return Object(ne.jsxs)(c.a.Fragment,{children:[Object(ne.jsx)(ve,{}),l?Object(ne.jsx)(le,{}):d?Object(ne.jsx)(oe,{variant:"danger",children:d}):Object(ne.jsxs)(o.a,{fluid:!0,children:[localStorage.getItem("response")?Object(ne.jsxs)(h.a,{children:[Object(ne.jsx)(m.a,{lg:"3",sm:"6",children:Object(ne.jsxs)(Oe.a,{className:"card-stats",children:[Object(ne.jsx)(Oe.a.Body,{children:Object(ne.jsx)(h.a,{children:Object(ne.jsx)(m.a,{xs:"12",children:Object(ne.jsxs)("div",{className:"numbers",children:[Object(ne.jsx)("p",{className:"card-category",children:"Number of Tickets"}),Object(ne.jsx)(Oe.a.Title,{as:"h4",children:j.length})]})})})}),Object(ne.jsxs)(Oe.a.Footer,{children:[Object(ne.jsx)("hr",{}),Object(ne.jsx)("div",{className:"stats",children:"Total Amount of Tickets"})]})]})}),Object(ne.jsx)(m.a,{lg:"3",sm:"6",children:Object(ne.jsxs)(Oe.a,{className:"card-stats",children:[Object(ne.jsx)(Oe.a.Body,{children:Object(ne.jsx)(h.a,{children:Object(ne.jsx)(m.a,{md:"12",children:Object(ne.jsx)("div",{className:"numbers",children:localStorage.getItem("response")?Object(ne.jsxs)(p.a,{className:"my-3",onClick:function(){s(ae())},children:[Object(ne.jsx)("i",{className:"fas fa-plus"})," Create New Row"]}):Object(ne.jsx)("h6",{children:"You must be admin to create "})})})})}),Object(ne.jsxs)(Oe.a.Footer,{children:[Object(ne.jsx)("hr",{}),Object(ne.jsxs)("div",{className:"stats",children:[Object(ne.jsx)("i",{className:"far fa-calendar-alt mr-1"}),"Ticket Creation"]})]})]})}),Object(ne.jsx)(m.a,{lg:"3",sm:"6",children:Object(ne.jsxs)(Oe.a,{className:"card-stats",children:[Object(ne.jsx)(Oe.a.Body,{children:Object(ne.jsx)(h.a,{children:Object(ne.jsx)(m.a,{xs:"12",children:Object(ne.jsxs)("div",{className:"numbers",children:[Object(ne.jsx)("p",{className:"card-category",children:"User Details"}),Object(ne.jsx)(Oe.a.Title,{as:"h6",children:B?B.data.user.name:"Please Login"})]})})})}),Object(ne.jsxs)(Oe.a.Footer,{children:[Object(ne.jsx)("hr",{}),Object(ne.jsx)("div",{className:"stats",children:B?B.data.user.email:""})]})]})}),Object(ne.jsx)(m.a,{lg:"3",sm:"6",children:Object(ne.jsxs)(Oe.a,{className:"card-stats",children:[Object(ne.jsx)(Oe.a.Body,{children:Object(ne.jsx)(h.a,{children:Object(ne.jsx)(m.a,{xs:"8",children:Object(ne.jsxs)("div",{className:"numbers",children:[Object(ne.jsx)("p",{className:"card-category",children:"Delete All"}),Object(ne.jsxs)(Oe.a.Title,{as:"h4",children:[" ",localStorage.getItem("response")?Object(ne.jsx)(p.a,{variant:"danger",className:"btn-sm",onClick:function(){E.a.delete("api/tickets/"),window.location.reload(),console.log("tickets delete")},children:"Delete All Rows"}):Object(ne.jsx)("h6",{children:"You must be admin to Delete"})]})]})})})}),Object(ne.jsxs)(Oe.a.Footer,{children:[Object(ne.jsx)("hr",{}),Object(ne.jsx)("div",{className:"stats",children:Object(ne.jsx)("i",{className:"far fa-calendar-alt mr-1"})})]})]})})]}):"",Object(ne.jsx)("br",{}),Object(ne.jsx)("br",{}),Object(ne.jsx)(h.a,{children:F&&F.map((function(e){return Object(ne.jsx)(m.a,{md:12,children:Object(ne.jsx)(pe,{ticket:e})},e._id)}))}),Object(ne.jsx)(ge,{pages:O,page:b,keyword:a||""})]})]})},ye=a(168),Te=a(169),Ce=a(166),ke=function(){localStorage.removeItem("response"),window.location.reload()},Ie=JSON.parse(localStorage.getItem("response"));console.log(Ie);var Se=function(){return Object(ne.jsx)("header",{children:Object(ne.jsx)(ye.a,{bg:"primary",variant:"dark",expand:"lg",collapseOnSelect:!0,className:"header",children:Object(ne.jsxs)(o.a,{children:[Object(ne.jsx)(ye.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(ne.jsxs)(ye.a.Collapse,{id:"basic-navbar-nav",children:[Object(ne.jsx)(me.LinkContainer,{to:"/",children:Object(ne.jsx)(ye.a.Brand,{children:"Daily Ticket Update"})}),Object(ne.jsxs)(Te.a,{className:"ml-auto",children:[Object(ne.jsx)(Te.a.Item,{children:Object(ne.jsx)(me.LinkContainer,{to:"/sendmail",children:Object(ne.jsx)(Te.a.Link,{children:"Send Email"})})}),Object(ne.jsx)(Te.a.Item,{children:Ie?Object(ne.jsx)(Ce.a,{title:Ie.data.user.name,id:"username",children:Object(ne.jsx)(Ce.a.Item,{onClick:ke,children:"Logout"})}):Object(ne.jsx)(me.LinkContainer,{to:"/login",children:Object(ne.jsx)(Te.a.Link,{children:"Sign In"})})})]})]})]})})})},_e=a(90),Ne=a.n(_e),we=a(164),De=a(161),Ae=a(173),Le=a(174),Re=a(165),Ue=Object(De.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},root:{minWidth:275,minHeight:275},pos:{marginBottom:12}}})),Ke=function(e){var t=e.location,a=e.history,c=Ue(),r=Object(n.useState)(""),s=Object(u.a)(r,2),o=(s[0],s[1],t.search?t.search.split("=")[1]:"/");Object(n.useEffect)((function(){i()&&a.push(o)}),[a,o]);var i=function(){return!!localStorage.getItem("response")};return Object(ne.jsxs)(Ae.a,{component:"main",maxWidth:"xs",children:[Object(ne.jsx)(we.a,{}),Object(ne.jsx)("div",{className:c.paper,children:Object(ne.jsx)(Le.a,{className:c.root,variant:"outlined",children:Object(ne.jsx)(Re.a,{children:Object(ne.jsx)("div",{className:"google",children:Object(ne.jsx)(Ne.a,{clientId:"807669913381-iekknmo55r3uv11orerdfm3sbi8v3opo.apps.googleusercontent.com",buttonText:"Login with Google",onSuccess:function(e){console.log(e),console.log(e.profileObj.name),localStorage.setItem("email",JSON.stringify(e.profileObj.email));E()({method:"POST",url:"/api/googlelogin",data:{tokenId:e.tokenId},config:{headers:{"Content-Type":"application/json"}}}).then((function(e){console.log(e),localStorage.setItem("response",JSON.stringify(e)),window.location.reload()}))},onFailure:function(e){console.log(e)},cookiePolicy:"single_host_origin"})})})})})]})},He=a(69),Ge=(a(134),function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(u.a)(r,2),i=s[0],l=s[1],d=Object(n.useState)(""),j=Object(u.a)(d,2),g=j[0],O=j[1],x=localStorage.getItem("email");console.log("email: ",x);return Object(ne.jsxs)(o.a,{children:[Object(ne.jsx)("br",{}),Object(ne.jsx)(h.a,{className:"justify-content-md-center",children:Object(ne.jsxs)(m.a,{xs:12,md:6,children:[Object(ne.jsx)("h3",{children:"Send Template as Email"}),Object(ne.jsxs)(b.a,{onSubmit:function(e){e.preventDefault();var t={name:a,email:i,cc:g};E.a.post("/api/sendmail",t),console.log(t),console.log(a),console.log(i)},children:[Object(ne.jsxs)(b.a.Group,{controlId:"name",children:[Object(ne.jsx)(b.a.Label,{children:"Name"}),Object(ne.jsx)(b.a.Control,{type:"name",placeholder:"Enter Name",name:"name",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(ne.jsxs)(b.a.Group,{controlId:"name",children:[Object(ne.jsx)(b.a.Label,{children:"Email"}),Object(ne.jsx)(b.a.Control,{type:"email",placeholder:"Enter Email",value:i,name:"email",onChange:function(e){return l(e.target.value)}})]}),Object(ne.jsxs)(b.a.Group,{controlId:"name",children:[Object(ne.jsx)(b.a.Label,{children:"CC"}),Object(ne.jsx)(b.a.Control,{type:"cc",placeholder:"Enter CC",value:g,name:"cc",onChange:function(e){return O(e.target.value)}})]}),Object(ne.jsx)(p.a,{onClick:function(){return Object(He.b)("Email sent to ".concat(i))},type:"submit",variant:"primary",children:"Send Mail"}),Object(ne.jsx)(He.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})]})})]})});var Fe=function(){return Object(ne.jsxs)(i.BrowserRouter,{children:[Object(ne.jsx)(Se,{}),Object(ne.jsx)("main",{className:"py-3",children:Object(ne.jsxs)(o.a,{children:[Object(ne.jsx)(l.d,{path:"/",exact:!0,component:Ee}),Object(ne.jsx)(l.d,{path:"/create",component:ce}),Object(ne.jsx)(l.d,{path:"/login",component:Ke}),Object(ne.jsx)(l.d,{path:"/sendmail",component:Ge})]})})]})},Pe=a(50),Be=a(91),Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{loading:!0};case w:return{loading:!1,success:!0};case D:return{loading:!1,error:t.payload};default:return e}},Je=a(92),Ye=Object(Pe.combineReducers)({ticketList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tickets:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{loading:!0,tickets:[]};case T:return{loading:!1,tickets:t.payload.tickets,pages:t.payload.pages,page:t.payload.page};case C:return{loading:!1,error:t.payload};default:return e}},ticketCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return{loading:!0};case I:return{loading:!1,success:!0,ticket:t.payload};case S:return{loading:!1,error:t.payload};case _:return{};default:return e}},ticketDelete:Qe,ticketHeadingCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return{loading:!0};case L:return{loading:!1,success:!0};case R:return{loading:!1,error:t.payload};case U:return{};default:return e}},ticketUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{ticket:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return{loading:!0};case B:return{loading:!1,success:!0,ticket:t.payload};case Q:return{loading:!1,error:t.payload};case J:return{ticket:{}};default:return e}},ticketHeading2Create:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return{loading:!0};case W:return{loading:!1,success:!0};case M:return{loading:!1,error:t.payload};case q:return{};default:return e}},ticketHeadingDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return{loading:!0};case H:return{loading:!1,success:!0};case G:return{loading:!1,error:t.payload};case F:return{};default:return e}},ticketHeading2Delete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return{loading:!0};case V:return{loading:!1,success:!0};case X:return{loading:!1,error:t.payload};case Z:return{};default:return e}},ticketDuplicate:Qe}),We=[Be.a],Me=Object(Pe.createStore)(Ye,{},Object(Je.composeWithDevTools)(Pe.applyMiddleware.apply(void 0,We)));s.a.render(Object(ne.jsx)(g.a,{store:Me,children:Object(ne.jsx)(Fe,{})}),document.getElementById("root"))},78:function(e,t,a){},99:function(e,t,a){}},[[135,1,2]]]);
//# sourceMappingURL=main.5fab2263.chunk.js.map