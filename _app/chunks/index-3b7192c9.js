function N(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(B)}function G(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ot(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function J(t){return Object.keys(t).length===0}function L(t,...n){if(t==null)return N;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function st(t){let n;return L(t,e=>n=e)(),n}function at(t,n,e){t.$$.on_destroy.push(L(n,e))}function ft(t,n,e,i){if(t){const c=O(t,n,e,i);return t[0](c)}}function O(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function _t(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],u=Math.max(n.dirty.length,c.length);for(let l=0;l<u;l+=1)s[l]=n.dirty[l]|c[l];return s}return n.dirty|c}return n.dirty}function dt(t,n,e,i,c,s){if(c){const u=O(n,e,i,s);t.p(u,c)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let w=!1;function K(){w=!0}function Q(){w=!1}function R(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let o=0;o<n.length;o++){const f=n[o];f.claim_order!==void 0&&r.push(f)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const o=n[r].claim_order,f=(c>0&&n[e[c]].claim_order<=o?c+1:R(1,c,y=>n[e[y]].claim_order,o))-1;i[r]=e[f]+1;const a=f+1;e[a]=r,c=Math.max(a,c)}const s=[],u=[];let l=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);l>=r;l--)u.push(n[l]);l--}for(;l>=0;l--)u.push(n[l]);s.reverse(),u.sort((r,o)=>r.claim_order-o.claim_order);for(let r=0,o=0;r<u.length;r++){for(;o<s.length&&u[r].claim_order>=s[o].claim_order;)o++;const f=o<s.length?s[o]:null;t.insertBefore(u[r],f)}}function W(t,n){if(w){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function mt(t,n,e){w&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode.removeChild(t)}function pt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function yt(){return j(" ")}function gt(){return j("")}function xt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function bt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function $t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,c=!1){tt(t);const s=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const l=t[u];if(n(l)){const r=e(l);return r===void 0?t.splice(u,1):t[u]=r,c||(t.claim_info.last_index=u),l}}for(let u=t.claim_info.last_index-1;u>=0;u--){const l=t[u];if(n(l)){const r=e(l);return r===void 0?t.splice(u,1):t[u]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function D(t,n,e,i){return P(t,c=>c.nodeName===n,c=>{const s=[];for(let u=0;u<c.attributes.length;u++){const l=c.attributes[u];e[l.name]||s.push(l.name)}s.forEach(u=>c.removeAttribute(u))},()=>i(n))}function wt(t,n,e){return D(t,n,e,X)}function vt(t,n,e){return D(t,n,e,Y)}function nt(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function Et(t){return nt(t," ")}function kt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Nt(t,n){t.value=n==null?"":n}function jt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}let m;function h(t){m=t}function S(){if(!m)throw new Error("Function called outside component initialization");return m}function St(t){S().$$.on_mount.push(t)}function At(t){S().$$.after_update.push(t)}function Ct(t,n){S().$$.context.set(t,n)}const d=[],T=[],b=[],q=[],z=Promise.resolve();let E=!1;function F(){E||(E=!0,z.then(H))}function Mt(){return F(),z}function k(t){b.push(t)}const v=new Set;let x=0;function H(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),et(n.$$)}for(h(null),d.length=0,x=0;T.length;)T.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];v.has(e)||(v.add(e),e())}b.length=0}while(d.length);for(;q.length;)q.pop()();E=!1,v.clear(),h(t)}function et(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const $=new Set;let _;function Tt(){_={r:0,c:[],p:_}}function qt(){_.r||p(_.c),_=_.p}function it(t,n){t&&t.i&&($.delete(t),t.i(n))}function Bt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Lt(t,n){const e={},i={},c={$$scope:1};let s=t.length;for(;s--;){const u=t[s],l=n[s];if(l){for(const r in u)r in l||(i[r]=1);for(const r in l)c[r]||(e[r]=l[r],c[r]=1);t[s]=l}else for(const r in u)c[r]=1}for(const u in i)u in e||(e[u]=void 0);return e}function Ot(t){return typeof t=="object"&&t!==null?t:{}}function Pt(t){t&&t.c()}function Dt(t,n){t&&t.l(n)}function rt(t,n,e,i){const{fragment:c,on_mount:s,on_destroy:u,after_update:l}=t.$$;c&&c.m(n,e),i||k(()=>{const r=s.map(B).filter(G);u?u.push(...r):p(r),t.$$.on_mount=[]}),l.forEach(k)}function ct(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(d.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function zt(t,n,e,i,c,s,u,l=[-1]){const r=m;h(t);const o=t.$$={fragment:null,ctx:null,props:s,update:N,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:n.target||r.$$.root};u&&u(o.root);let f=!1;if(o.ctx=e?e(t,n.props||{},(a,y,...A)=>{const C=A.length?A[0]:y;return o.ctx&&c(o.ctx[a],o.ctx[a]=C)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](C),f&&ut(t,a)),y}):[],o.update(),f=!0,p(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){K();const a=Z(n.target);o.fragment&&o.fragment.l(a),a.forEach(V)}else o.fragment&&o.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),Q(),H()}h(r)}class Ft{$destroy(){ct(this,1),this.$destroy=N}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!J(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Ot as A,ct as B,I as C,Mt as D,N as E,Y as F,vt as G,W as H,ot as I,ft as J,dt as K,ht as L,_t as M,xt as N,Nt as O,bt as P,p as Q,pt as R,Ft as S,at as T,st as U,Z as a,$t as b,wt as c,V as d,X as e,jt as f,mt as g,nt as h,zt as i,kt as j,yt as k,gt as l,Et as m,Tt as n,Bt as o,qt as p,it as q,Ct as r,lt as s,j as t,At as u,St as v,Pt as w,Dt as x,rt as y,Lt as z};
