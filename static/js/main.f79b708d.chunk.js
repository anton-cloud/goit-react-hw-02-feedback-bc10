(this["webpackJsonpgoit-react-hw-02-feedback-bc10"]=this["webpackJsonpgoit-react-hw-02-feedback-bc10"]||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(5),o=n.n(s),i=(n(15),n(6)),r=n(7),d=n(8),b=n(10),l=n(9),u=n(4),j=n.n(u),p=n(2),O=n.n(p),k=n(0),h=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(k.jsx)("ul",{className:O.a.FeedbackOptionsList,children:t.map((function(e){return Object(k.jsx)("li",{className:O.a.FeedbackOptionsListItem,children:Object(k.jsx)("button",{className:O.a.FeedbackOptionsListBtn,name:e,type:"button",onClick:n,children:(t=e,t[0].toUpperCase()+t.slice(1))})},e);var t}))})};h.defaultProps={options:[]},Notification.propTypes={options:j.a.array,onLeaveFeedback:j.a.func};var f=h,v=function(e){var t=e.message;return Object(k.jsx)("p",{children:t})};v.defaultProps={message:"No feedback given"};var g=v,F=function(e){var t=e.title,n=e.children;return Object(k.jsxs)("section",{style:{paddingLeft:50},children:[Object(k.jsx)("h2",{children:t}),n]})};F.defaultProps={title:null};var x=F,m=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,s=e.positivePercentage;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("p",{children:["Good: ",t]}),Object(k.jsxs)("p",{children:["Neutral: ",n]}),Object(k.jsxs)("p",{children:["Bad: ",a]}),Object(k.jsxs)("p",{children:["Total: ",c()]}),Object(k.jsxs)("p",{children:["Positive feedback: ",s()," %"]})]})},L=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onHandleClick=function(t){return e.setState((function(e){return Object(i.a)({},t.target.name,e[t.target.name]+=1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(){var t=e.state.good;return Math.round(t/e.countTotalFeedback()*100)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(x,{title:"Please leave feedback",children:Object(k.jsx)(f,{options:Object.keys(this.state),onLeaveFeedback:this.onHandleClick})}),Object(k.jsx)(x,{title:"Please leave feedback",children:this.countTotalFeedback()?Object(k.jsx)(m,{good:t,neutral:n,bad:a,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage}):Object(k.jsx)(g,{message:"No feedback given"})})]})}}]),n}(a.Component),P=L;o.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(P,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={FeedbackOptionsList:"FeedbackOptions_FeedbackOptionsList__tUAro",FeedbackOptionsListItem:"FeedbackOptions_FeedbackOptionsListItem__28SpL",FeedbackOptionsListBtn:"FeedbackOptions_FeedbackOptionsListBtn__1TL72"}}},[[19,1,2]]]);
//# sourceMappingURL=main.f79b708d.chunk.js.map