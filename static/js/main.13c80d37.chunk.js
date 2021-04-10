(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(8),l=a.n(n),r=(a(14),a(2)),c=a(3),u=a(5),o=a(4),m=a(6),d=a(1),h=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],p=["\u2665","\u2666","\u2663","\u2660"],f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.flatMap(function(e){return h.map(function(t){return new b(e,t)})});Object(r.a)(this,e),this.cards=t}return Object(c.a)(e,[{key:"pop",value:function(){return this.cards.shift()}},{key:"push",value:function(e){this.cards.push(e)}},{key:"shuffle",value:function(){for(var e=this.numberOfCards-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),a=this.cards[t];this.cards[t]=this.cards[e],this.cards[e]=a}}},{key:"numberOfCards",get:function(){return this.cards.length}}]),e}(),b=function(){function e(t,a){Object(r.a)(this,e),this.suit=t,this.value=a}return Object(c.a)(e,[{key:"getHTML",value:function(){var e=document.createElement("div");return e.innerText=this.value,e.classList.add("card",this.color),e.dataset.value="".concat(this.value," ").concat(this.suit),e}},{key:"color",get:function(){return"\u2660"===this.suit||"\u2663"===this.suit?"black":"red"}}]),e}();var v=f,E=function(e){var t=e.message,a=e.messageType,s=e.multiplier,n=e.prizes,l=e.winningHand;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"pay-table"},i.a.createElement("h2",{className:"table-title"},"Pay table"),i.a.createElement("div",{className:"tb tb-1 "+("royal-flush"===l?"active":"")},i.a.createElement("p",{className:"item-1"},"Royal flush"),i.a.createElement("span",{className:"multiplier"},n[0].value*s)),i.a.createElement("div",{className:"tb tb-2 "+("straight-flush"===l?"active":"")},i.a.createElement("p",{className:"item-2"},"Straight flush"),i.a.createElement("span",{className:"multiplier"},n[1].value*s)),i.a.createElement("div",{className:"tb tb-3 "+("four-of-a-kind"===l?"active":"")},i.a.createElement("p",{className:"item-3"},"4 of a kind"),i.a.createElement("span",{className:"multiplier"},n[2].value*s)),i.a.createElement("div",{className:"tb tb-4 "+("full-house"===l?"active":"")},i.a.createElement("p",{className:"item-4"},"Full House"),i.a.createElement("span",{className:"multiplier"},n[3].value*s)),i.a.createElement("div",{className:"tb tb-5 "+("flush"===l?"active":"")},i.a.createElement("p",{className:"item-5"},"Flush"),i.a.createElement("span",{className:"multiplier"},n[4].value*s)),i.a.createElement("div",{className:"tb tb-6 "+("straight"===l?"active":"")},i.a.createElement("p",{className:"item-6"},"Straight"),i.a.createElement("span",{className:"multiplier"},n[5].value*s)),i.a.createElement("div",{className:"tb tb-7 "+("three-of-a-kind"===l?"active":"")},i.a.createElement("p",{className:"item-7"},"3 of a kind"),i.a.createElement("span",{className:"multiplier"},n[6].value*s)),i.a.createElement("div",{className:"tb tb-8 "+("two-pair"===l?"active":"")},i.a.createElement("p",{className:"item-8"},"2 pairs"),i.a.createElement("span",{className:"multiplier"},n[7].value*s)),i.a.createElement("div",{className:"tb tb-9 "+("jacks-or-better"===l?"active":"")},i.a.createElement("p",{className:"item-9"},"Jacks or better"),i.a.createElement("span",{className:"multiplier"},n[8].value*s))),i.a.createElement("div",{className:"panel panel-message"},i.a.createElement("p",{className:"message "+a},t)))},g=function(e){var t=e.value,a=e.suit,s=e.click,n=e.id,l=e.disabled,r="";return"\u2665"===a||"\u2666"===a?r="red":"\u2663"!==a&&"\u2660"!==a||(r="black"),i.a.createElement("div",{onClick:s,"data-value":"".concat(t).concat(a),className:"card ".concat(r," ").concat(l?"disabled":""),id:n},t)},k=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],N=["\u2665","\u2666","\u2663","\u2660"],y=function(){function e(t){var a=this;Object(r.a)(this,e),this.faces=t.map(function(e){return k.indexOf(e.slice(0,-1))}),this.suits=t.map(function(e){return N.indexOf(e.slice(-1))}),this.groups=k.map(function(e,t){return a.faces.filter(function(e){return t===e}).length}).sort(function(e,t){return t-e}),this.groupsJOB=k.map(function(e,t){return a.faces.filter(function(e){return t===e&&t>8}).length}).sort(function(e,t){return t-e}),this.shifted=this.faces.map(function(e){return(e+1)%13}),this.distance=Math.min(Math.max.apply(Math,Object(d.a)(this.faces))-Math.min.apply(Math,Object(d.a)(this.faces)),Math.max.apply(Math,Object(d.a)(this.shifted))-Math.min.apply(Math,Object(d.a)(this.shifted))),this.flush=this.suits.every(function(e){return e===a.suits[0]}),this.straight=1===this.groups[0]&&this.distance<5}return Object(c.a)(e,[{key:"analyze",value:function(){return this.straight&&this.flush&&this.faces.includes(12)&&!this.faces.includes(0)?"royal-flush":this.straight&&this.flush?"straight-flush":4===this.groups[0]?"four-of-a-kind":3===this.groups[0]&&2===this.groups[1]?"full-house":this.straight?"straight":3===this.groups[0]?"three-of-a-kind":2===this.groups[0]&&2===this.groups[1]?"two-pair":2===this.groups[0]&&2===this.groupsJOB[0]?"jacks-or-better":"loss"}}]),e}(),C=function(e){function t(){var e,a;Object(r.a)(this,t);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={isDeal:!0,isDisabled:!0,credits:100,creditsWon:0,bet:1,btnInfo:"DEAL",message:"Press the button to play",messageType:"normal",held:[!1,!1,!1,!1,!1],winningHand:"",prizes:[{pokerHand:"royal-flush",message:"Jackpot!!! It's a Royal FLush!!! You win ",value:250},{pokerHand:"straight-flush",message:"Superb! It's a Straight FLush! You win ",value:50},{pokerHand:"four-of-a-kind",message:"Superb! Four of a kind! You win ",value:25},{pokerHand:"full-house",message:"Great, it's a full house! You win ",value:9},{pokerHand:"flush",message:"Great, it's a flush! You win ",value:6},{pokerHand:"straight",message:"Great, it's a straight. You win ",value:4},{pokerHand:"three-of-a-kind",message:"Three of a kind, you win ",value:3},{pokerHand:"two-pair",message:"Two pair, you win ",value:2},{pokerHand:"jacks-or-better",message:"Jacks or better, you win ",value:1}],dealtCards:[{id:0,value:"",suit:""},{id:1,value:"",suit:""},{id:2,value:"",suit:""},{id:3,value:"",suit:""},{id:4,value:"",suit:""}],nextCards:[{value:"",suit:""},{value:"",suit:""},{value:"",suit:""},{value:"",suit:""},{value:"",suit:""}]},a.handleClick=function(){if(!0===a.state.isDeal){var e=new v;e.shuffle();var t=e.cards.slice(0,5),s=e.cards.slice(5,10);a.setState({dealtCards:t,nextCards:s,isDeal:!1,isDisabled:!1,btnInfo:"DRAW",message:"Choose cards to hold",messageType:"normal",credits:a.state.credits-a.state.bet,held:[!1,!1,!1,!1,!1],winningHand:null})}else{for(var i=Object(d.a)(a.state.held),n=[],l=0;l<i.length;l++)!1===i[l]&&n.push(l);var r=Object(d.a)(a.state.nextCards),c=Object(d.a)(a.state.dealtCards);n.forEach(function(e){var t=c[e];t=r[e],c[e]=t});var u=c.map(function(e){return e.suit}),o=c.map(function(e){return e.value}).map(function(e,t){return e+u[t]}),m=new y(o).analyze(),h=null;if("loss"===m)a.setState({creditsWon:0,messageType:"lose",message:"You lose",winningHand:null});else{var p="",f="";a.state.prizes.forEach(function(e){m===e.pokerHand&&(h=e.value*a.state.bet,p=e.message,f=e.pokerHand)}),console.log(f),a.setState({creditsWon:h,messageType:"win",message:p+h+"!",winningHand:f})}a.setState({dealtCards:c,btnInfo:"DEAL",isDeal:!0,isDisabled:!0,credits:a.state.credits+h})}},a.handleCardClick=function(e){var t=e.target.id,s=Object(d.a)(a.state.held),i=s[t];i=!i,s[t]=i,a.setState({held:s})},a.handleMinusBtn=function(){a.setState({bet:a.state.bet-1})},a.handlePlusBtn=function(){a.setState({bet:a.state.bet+1})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("main",{className:"main"},i.a.createElement(E,{prizes:this.state.prizes,multiplier:this.state.bet,message:this.state.message,messageType:this.state.messageType,winningHand:this.state.winningHand}),i.a.createElement("div",{className:"board"},i.a.createElement("div",{className:"board-info"},i.a.createElement("p",{className:"a1 action-info"},this.state.held[0]?"HOLD":""),i.a.createElement("p",{className:"a2 action-info"},this.state.held[1]?"HOLD":""),i.a.createElement("p",{className:"a3 action-info"},this.state.held[2]?"HOLD":""),i.a.createElement("p",{className:"a4 action-info"},this.state.held[3]?"HOLD":""),i.a.createElement("p",{className:"a5 action-info"},this.state.held[4]?"HOLD":"")),i.a.createElement("div",{className:"board-cards"},i.a.createElement(g,{id:0,click:this.handleCardClick,value:this.state.dealtCards[0].value,suit:this.state.dealtCards[0].suit,disabled:this.state.isDisabled}),i.a.createElement(g,{id:1,click:this.handleCardClick,value:this.state.dealtCards[1].value,suit:this.state.dealtCards[1].suit,disabled:this.state.isDisabled}),i.a.createElement(g,{id:2,click:this.handleCardClick,value:this.state.dealtCards[2].value,suit:this.state.dealtCards[2].suit,disabled:this.state.isDisabled}),i.a.createElement(g,{id:3,click:this.handleCardClick,value:this.state.dealtCards[3].value,suit:this.state.dealtCards[3].suit,disabled:this.state.isDisabled}),i.a.createElement(g,{id:4,click:this.handleCardClick,value:this.state.dealtCards[4].value,suit:this.state.dealtCards[4].suit,disabled:this.state.isDisabled}))),i.a.createElement("div",{className:"panel panel-action"},i.a.createElement("div",{className:"cash"},i.a.createElement("p",{className:"name"},"Credits"),i.a.createElement("span",{className:"money"},this.state.credits)),i.a.createElement("div",{className:"bet"},i.a.createElement("p",{className:"name"},"Bet"),i.a.createElement("div",{className:"bet-wrap"},i.a.createElement("button",{disabled:this.state.bet<2,onClick:this.handleMinusBtn,className:"bet-btn"},"-"),i.a.createElement("span",{className:"money"}," ",this.state.bet," "),i.a.createElement("button",{disabled:this.state.bet>3,onClick:this.handlePlusBtn,className:"bet-btn"},"+"))),i.a.createElement("button",{onClick:this.handleClick,id:"start",className:"start-btn"},this.state.btnInfo)))}}]),t}(s.Component),w=(a(15),function(){return i.a.createElement("header",{className:"title-wrap"},i.a.createElement("h1",null," ",i.a.createElement("span",{className:"title"},"VIDEOPOKER")," ",i.a.createElement("br",null)," ",i.a.createElement("span",{className:"title__fancy"},"Jacks or Better")))}),O=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("small",{className:"copy"},"Created by ",i.a.createElement("a",{className:"copy-link",href:"https://github.com/brozinsky"},"brozinsky")," \xa9 2020"))},j=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"wrapper"},i.a.createElement(w,null),i.a.createElement(C,null),i.a.createElement(O,null)))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.13c80d37.chunk.js.map