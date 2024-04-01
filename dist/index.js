"use strict";var l=function(i,u){return function(){return u||i((u={exports:{}}).exports,u),u.exports}};var y=l(function(B,p){
var q=require('@stdlib/math-base-special-abs/dist');function R(i,u,m,o){var n,a,f,v,s,t,e,r,c;if(i<=0)return 0;if(i===1||o===0)return u+m[0];for(o<0?f=(1-i)*o:f=0,n=0,a=0,v=0,c=0;c<i;c++)t=u+m[f],e=n+t,q(n)>=q(t)?r=n-e+t:r=t-e+n,n=e,e=v+r,q(v)>=q(r)?s=v-e+r:s=r-e+v,v=e,a+=s,f+=o;return n+v+a}p.exports=R
});var k=l(function(C,g){
var x=require('@stdlib/math-base-special-abs/dist');function j(i,u,m,o,n){var a,f,v,s,t,e,r,c,b;if(i<=0)return 0;if(i===1||o===0)return u+m[0];for(v=n,a=0,f=0,s=0,b=0;b<i;b++)e=u+m[v],r=a+e,x(a)>=x(e)?c=a-r+e:c=e-r+a,a=r,r=s+c,x(s)>=x(c)?t=s-r+c:t=c-r+s,s=r,f+=t,v+=o;return a+s+f}g.exports=j
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=y(),z=k();w(O,"ndarray",z);module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
