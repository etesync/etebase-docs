"use strict";(self.webpackChunketebase_docs=self.webpackChunketebase_docs||[]).push([[372],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6777:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=["components"],s={title:"Overview"},l=void 0,c={unversionedId:"overview",id:"overview",title:"Overview",description:"Etebase makes building end-to-end encrypted applications easy by taking care of the encryption and its related challenges. That's why you would rarely if ever see any mention of encryption of the API. Everything is taken care of by Etebase.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/overview",editUrl:"https://github.com/etesync/etebase-docs/edit/master/docs/overview.md",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"someSidebar",previous:{title:"Installation",permalink:"/installation"},next:{title:"Quickstart",permalink:"/quickstart"}},d={},u=[{value:"Client and server responsibilities",id:"client-and-server-responsibilities",level:2},{value:"Items",id:"items",level:2},{value:"Metadata",id:"metadata",level:3},{value:"<code>type: string</code>",id:"type-string",level:4},{value:"<code>name: string</code>",id:"name-string",level:4},{value:"<code>mtime: number</code>",id:"mtime-number",level:4},{value:"<code>description: string</code>",id:"description-string",level:4},{value:"<code>color: string</code>",id:"color-string",level:4},{value:"Content",id:"content",level:3},{value:"Collections",id:"collections",level:2},{value:"Collection type",id:"collection-type",level:3},{value:"Metadata",id:"metadata-1",level:3},{value:"<code>name: string</code>",id:"name-string-1",level:4},{value:"Content",id:"content-1",level:3},{value:"Sync token (<code>stoken</code>)",id:"sync-token-stoken",level:3},{value:"Revisions",id:"revisions",level:2}],p={toc:u};function h(e){var t=e.components,s=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Etebase makes building end-to-end encrypted applications easy by taking care of the encryption and its related challenges. That's why you would rarely if ever see any mention of encryption of the API. Everything is taken care of by Etebase."),(0,a.kt)("p",null,"When working with Etebase you will mostly be working with ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection")," objects, ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," objects, and sometimes with ",(0,a.kt)("inlineCode",{parentName:"p"},"Revision")," items. These are the basic building blocks of every Etebase application."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Diagram of structure between items, collections and account",src:n(4440).Z,title:"Structure between items, collections and account",width:"1087",height:"486"})),(0,a.kt)("h2",{id:"client-and-server-responsibilities"},"Client and server responsibilities"),(0,a.kt)("p",null,"Etebase is end-to-end encrypted so the server has no access to user data. This means that most of the operations are done on the client, and the server is just there to store the data and assist the clients. Hence, the documentation focuses on client side APIs."),(0,a.kt)("p",null,"To ensure the safety of user data, all of the operations should be run on client devices and in client-side applications. This includes ",(0,a.kt)("inlineCode",{parentName:"p"},"signup")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," and every other operation."),(0,a.kt)("h2",{id:"items"},"Items"),(0,a.kt)("p",null,"Almost all of the data in Etebase is stored in items. Items, like the rest of Etebase, are encrypted and signed to make sure no one can read or tamper with the data. Items must reside inside collections and don't live on their own."),(0,a.kt)("p",null,"Items can represent and hold whatever kind of data and can be organised in whatever structure that suits your needs, including: key-value stores, files and directories (pointing to other items), and more. You can think of them as almost equivalent to ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inode"},"inodes"),"."),(0,a.kt)("p",null,"Items have two different areas where data is stored, one for metadata and one for the actual content."),(0,a.kt)("h3",{id:"metadata"},"Metadata"),(0,a.kt)("p",null,"The metadata of items consists of the following fields (all are optional). You can additionally extend the type to include whatever fields you would like."),(0,a.kt)("h4",{id:"type-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"type: string")),(0,a.kt)("p",null,"The type of the item. It's useful if you have multiple types of information inside the same collection. E.g. if you are building a note-taking app you may use ",(0,a.kt)("inlineCode",{parentName:"p"},"note")," for notes and ",(0,a.kt)("inlineCode",{parentName:"p"},"attachment")," for image attachments."),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"name: string")),(0,a.kt)("p",null,"An optional name for the item. If this item needs a user visible name, this is the place for it. This can be used, for example, for filenames."),(0,a.kt)("h4",{id:"mtime-number"},(0,a.kt)("inlineCode",{parentName:"h4"},"mtime: number")),(0,a.kt)("p",null,"When this item was last modified in milliseconds since epoch."),(0,a.kt)("h4",{id:"description-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"description: string")),(0,a.kt)("p",null,"A user visible description for this collection, to better explain to the user what this collection is for."),(0,a.kt)("h4",{id:"color-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"color: string")),(0,a.kt)("p",null,"A hash prefixed HTML-like color description that follows the following format: ",(0,a.kt)("inlineCode",{parentName:"p"},"#RRGGBBAA"),". For example: ",(0,a.kt)("inlineCode",{parentName:"p"},"#348294FF"),"."),(0,a.kt)("h3",{id:"content"},"Content"),(0,a.kt)("p",null,"The content of the item can be whatever you want. Internally, it's treated like a blob of data. In most cases you will just store your raw data here, but in some cases, such as when representing a hierarchical structure (such as directories), it's better to conform to the standard Etebase way of doing it."),(0,a.kt)("h2",{id:"collections"},"Collections"),(0,a.kt)("p",null,"Collections are a collection of items. Like items, they also have their own metadata and content, and are also encrypted and signed. Unlike items, they have an immutable type, and an associated sync token (",(0,a.kt)("inlineCode",{parentName:"p"},"stoken"),") which indicates whether the collection or its items have changed."),(0,a.kt)("p",null,"In addition to the above, collections can also be shared with other users and have associated access control. If you think of items as the equivalent of ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inode"},"inodes"),", then collections are the equivalent of filesystems."),(0,a.kt)("p",null,"Most applications will only use one collection type and only one or a potentially few collections."),(0,a.kt)("h3",{id:"collection-type"},"Collection type"),(0,a.kt)("p",null,"Collection types are immutable and are set when an item is created. They describe the type of data that's within the collection, and enable more efficient handling of different data types."),(0,a.kt)("p",null,"They are in lower case and use a dotted notation, prefixed with a unique developer prefix followed with the rest of the type name. For example, if your developer name is ",(0,a.kt)("em",{parentName:"p"},"Cyberdyne"),", example types could be: ",(0,a.kt)("inlineCode",{parentName:"p"},"cyberdyne.files"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"cyberdyne.calendar")," or really, whatever you want."),(0,a.kt)("p",null,"In addition to creating your own types, you can also use ",(0,a.kt)("a",{parentName:"p",href:"type-specs/introduction"},"existing types")," as long as you follow their specifications."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Not sure what you should use?")," Just use your developer name, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"cyberdyne"),"."),(0,a.kt)("h3",{id:"metadata-1"},"Metadata"),(0,a.kt)("p",null,"Collections can be used interchangeably with items so they use the same ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemMetadata")," type. This means that all of the fields here are ",(0,a.kt)("a",{parentName:"p",href:"#metadata"},"the same as for items"),", with the exception of ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," which unlike for items, should be set for collections."),(0,a.kt)("h4",{id:"name-string-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"name: string")),(0,a.kt)("p",null,"A user-visible name for this collection. In some cases this name will be shown to the user, for example if it represents a calendar, the name could be ",(0,a.kt)("q",null,"Holiday"),". Though a descriptive name is still useful even if it doesn't have a user-facing role."),(0,a.kt)("h3",{id:"content-1"},"Content"),(0,a.kt)("p",null,"The content of the collection can be whatever you want. Internally it's treated like a blob of data. In most cases you will just store your raw data here, but in some cases, such as when representing an hierarchical structure (such as directories), it's better to conform to the standard Etebase way of doing it."),(0,a.kt)("h3",{id:"sync-token-stoken"},"Sync token (",(0,a.kt)("inlineCode",{parentName:"h3"},"stoken"),")"),(0,a.kt)("p",null,"The collection also has an addition read-only field called ",(0,a.kt)("inlineCode",{parentName:"p"},"stoken"),". It changes every time a collection or its items have changed, and can be used to efficiently fetch only changed entries, or to enforce collection-wide integrity."),(0,a.kt)("h2",{id:"revisions"},"Revisions"),(0,a.kt)("p",null,"You won't often be interacting with revisions directly, but it's still good to know they are there. Essentially, every time you change a collection or an item, a new revision is created. Each revision is a snapshot of the collection or item at that point in time so you can easily view and rollback changes."),(0,a.kt)("p",null,"This is very useful if you would like to offer a change history to your users, or even if you just want to make sure your data is never lost, even if you make a mistake."))}h.isMDXComponent=!0},4440:function(e,t,n){t.Z=n.p+"assets/images/overview_diagram-9bbf6d83aa55fc8038b5bea9e96fe440.png"}}]);