(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),i=(n(15),n(1)),s=n(4),u=n(5),l=n(7),d=n(6),m=n(8),h=(n(16),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={counter:[]},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"addCounter",value:function(){var e=Object(i.a)(this.state.counter);e.push(0),this.setState({counter:e})}},{key:"increment",value:function(e){console.log("incrementing has occured");var t=Object(i.a)(this.state.counter);t[e]++,this.setState({counter:t})}},{key:"decrement",value:function(e){console.log("decrementing has occured");var t=Object(i.a)(this.state.counter);t[e]--,this.setState({counter:t})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"main"},c.a.createElement("button",{className:"add-counter",onClick:this.addCounter.bind(this)},"Add Counter"),this.state.counter.map(function(t,n){return c.a.createElement("div",{key:n,className:"choices"},c.a.createElement("h1",null,t),c.a.createElement("button",{className:"increase",onClick:e.increment.bind(e,n)},"Increment"),c.a.createElement("button",{className:"decrease",onClick:e.decrement.bind(e,n)},"Decrement"))}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.8b10e971.chunk.js.map