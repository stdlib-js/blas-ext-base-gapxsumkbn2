"use strict";var k=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var d=k(function(I,p){
var m=require('@stdlib/math-base-special-abs/dist');function w(a,r,f,o,x){var i,b,s,t,q,e,v,u,c,n,g;if(i=f.data,b=f.accessors[0],q=x,o===0)return a*(r+b(i,q));for(s=0,t=0,e=0,g=0;g<a;g++)u=r+b(i,q),c=s+u,m(s)>=m(u)?n=s-c+u:n=u-c+s,s=c,c=e+n,m(e)>=m(n)?v=e-c+n:v=n-c+e,e=c,t+=v,q+=o;return s+e+t}p.exports=w
});var l=k(function(J,j){
var z=require('@stdlib/array-base-arraylike2object/dist'),y=require('@stdlib/math-base-special-abs/dist'),A=d();function B(a,r,f,o,x){var i,b,s,t,q,e,v,u,c,n;if(a<=0)return 0;if(c=z(f),c.accessorProtocol)return A(a,r,c,o,x);if(s=x,o===0)return a*(r+f[s]);for(i=0,b=0,t=0,n=0;n<a;n++)e=r+f[s],v=i+e,y(i)>=y(e)?u=i-v+e:u=e-v+i,i=v,v=t+u,y(t)>=y(u)?q=t-v+u:q=u-v+t,t=v,b+=q,s+=o;return i+t+b}j.exports=B
});var P=k(function(K,O){
var C=require('@stdlib/strided-base-stride2offset/dist'),D=l();function E(a,r,f,o){return D(a,r,f,o,C(a,o))}O.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=P(),G=l();F(R,"ndarray",G);module.exports=R;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
