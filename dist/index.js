"use strict";var p=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=p(function(B,y){
var f=require('@stdlib/math-base-special-abs/dist');function l(e,r,n,t,k){var s,o,c,u,q,v,a,i,x;if(e<=0)return 0;if(c=k,t===0)return e*(r+n[c]);for(s=0,o=0,u=0,x=0;x<e;x++)v=r+n[c],a=s+v,f(s)>=f(v)?i=s-a+v:i=v-a+s,s=a,a=u+i,f(u)>=f(i)?q=u-a+i:q=i-a+u,u=a,o+=q,c+=t;return s+u+o}y.exports=l
});var d=p(function(C,b){
var O=require('@stdlib/strided-base-stride2offset/dist'),R=m();function j(e,r,n,t){return R(e,r,n,t,O(e,t))}b.exports=j
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=d(),z=m();w(g,"ndarray",z);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
