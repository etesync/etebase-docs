"use strict";(self.webpackChunketebase_docs=self.webpackChunketebase_docs||[]).push([[651],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,y=f["".concat(s,".").concat(d)]||f[d]||l[d]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2257:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={title:"Quickstart"},s=void 0,u={unversionedId:"quickstart",id:"quickstart",title:"Quickstart",description:"To start using Etebase you first need a server to connect to. The easiest way to do it is to signup for a developer account and get your developer server URL from the dashboard.",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/quickstart",editUrl:"https://github.com/etesync/etebase-docs/edit/master/docs/quickstart.md",tags:[],version:"current",frontMatter:{title:"Quickstart"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/overview"},next:{title:"Authentication",permalink:"/guides/basic_authentication"}},p={},l=[],f={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To start using Etebase you first need a server to connect to. The easiest way to do it is to ",(0,a.kt)("a",{parentName:"p",href:"https://www.etebase.com/signup"},"signup for a developer account")," and get your developer server URL from the dashboard."),(0,a.kt)("p",null,"You can then use the server URL in your app to ",(0,a.kt)("a",{parentName:"p",href:"./guides/basic_authentication#signup"},"create users")," using any of the client libraries. When users are created, the client libraries also derive an encryption key from the password and setup the encryption data. All of this is done on the client, and neither the password, nor the secret key ever leave the device."),(0,a.kt)("p",null,"Once you've created a user account, you can go on and start ",(0,a.kt)("a",{parentName:"p",href:"./guides/using_collections"},"encrypting and uploading data")," and using the rest of what Etebase has to offer."))}d.isMDXComponent=!0}}]);