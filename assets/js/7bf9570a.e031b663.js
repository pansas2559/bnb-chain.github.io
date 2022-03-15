"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[6980],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return b}});var s=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,o=function(e,n){if(null==e)return{};var t,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=s.createContext({}),l=function(e){var n=s.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return s.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},p=s.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),b=o,u=p["".concat(c,".").concat(b)]||p[b]||m[b]||r;return t?s.createElement(u,a(a({ref:n},d),{},{components:t})):s.createElement(u,a({ref:n},d))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<r;l++)a[l]=t[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}p.displayName="MDXCreateElement"},66174:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var s=t(87462),o=t(63366),r=(t(67294),t(3905)),a=["components"],i={},c="WebSocket Connections",l={unversionedId:"beaconchain/develop/api-reference/dex-api/ws-connection",id:"beaconchain/develop/api-reference/dex-api/ws-connection",isDocsHomePage:!1,title:"WebSocket Connections",description:"The DEX exposes several data streams over standard WebSocket connections, which can be consumed by modern web browsers and server-side WebSocket libraries.",source:"@site/docs/beaconchain/develop/api-reference/dex-api/ws-connection.md",sourceDirName:"beaconchain/develop/api-reference/dex-api",slug:"/beaconchain/develop/api-reference/dex-api/ws-connection",permalink:"/docs/beaconchain/develop/api-reference/dex-api/ws-connection",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/docs/beaconchain/develop/api-reference/dex-api/ws-connection.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"HTTP API",permalink:"/docs/beaconchain/develop/api-reference/dex-api/paths-testnet"},next:{title:"WebSocket Streams",permalink:"/docs/beaconchain/develop/api-reference/dex-api/ws-streams"}},d=[{value:"Method 1: Connect with stream names in the URL",id:"method-1-connect-with-stream-names-in-the-url",children:[],level:3},{value:"Method 2: Subscribe to streams on demand",id:"method-2-subscribe-to-streams-on-demand",children:[],level:3}],m={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,s.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"websocket-connections"},"WebSocket Connections"),(0,r.kt)("p",null,"The DEX exposes several data streams over standard WebSocket connections, which can be consumed by modern web browsers and server-side WebSocket libraries."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The base endpoint for mainnet is: ",(0,r.kt)("strong",{parentName:"li"},"wss://dex.binance.org/api/"),"."),(0,r.kt)("li",{parentName:"ul"},"The base endpoint for testnet is: ",(0,r.kt)("strong",{parentName:"li"},"wss://testnet-dex.binance.org/api/"),"."),(0,r.kt)("li",{parentName:"ul"},"Each connection can consume a single stream or multiple streams may be multiplexed through one connection for more complex apps."),(0,r.kt)("li",{parentName:"ul"},"All symbols in stream names are lowercase.")),(0,r.kt)("p",null,"Stream names may be provided in the URL ",(0,r.kt)("strong",{parentName:"p"},"or")," there is a mechanism to ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," to consume streams on demand through one connection."),(0,r.kt)("p",null,"Note: Once the connection is established, the websocket server will send ping frame to the client every 30 seconds. The client should reply with pong frame in time (this has already been implemented by most modern browsers, but programmatical users need to be aware of whether your websocket library supports this), otherwise, the connection might be closed."),(0,r.kt)("p",null,"Examples of each of these methods are provided below in JavaScript:"),(0,r.kt)("h3",{id:"method-1-connect-with-stream-names-in-the-url"},"Method 1: Connect with stream names in the URL"),(0,r.kt)("p",null,"Using this method, stream names are specified in the URLs used to connect to the data streams:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Single streams ",(0,r.kt)("inlineCode",{parentName:"li"},"/ws/<streamName>")),(0,r.kt)("li",{parentName:"ul"},"Combined streams ",(0,r.kt)("inlineCode",{parentName:"li"},"/stream?streams=<streamName1>/<streamName2>/<streamName3>")," (etc.)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mainnet Example:")," Various methods of connecting to streams where stream names are provided in URLs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'  // for personal streams, ex: Account & Orders & Transfers\n  const accountAndOrdersFeeds = new WebSocket("wss://dex.binance.org/api/ws/<USER_ADDRESS>");\n\n  // for single streams\n  const tradesFeeds = new WebSocket("wss://dex.binance.org/api/ws/<symbol>@trades");\n  const marketFeeds = new WebSocket("wss://dex.binance.org/api/ws/<symbol>@marketDiff");\n  const deltaFeeds = new WebSocket("wss://dex.binance.org/api/ws/<symbol>@marketDepth");\n  ... etc\n\n  // for all symbols\n  const allTickers = new WebSocket("wss://dex.binance.org/api/ws/$all@allTickers");\n  const allMiniTickers = new WebSocket("wss://dex.binance.org/api/ws/$all@allMiniTickers");\n  const blockHeight = new WebSocket("wss://dex.binance.org/api/ws/$all@blockheight");\n\n  // for combined streams, can combined a mixed symbols and streams\n  const combinedFeeds = new WebSocket("wss://dex.binance.org/api/stream?streams=<symbol>@trades/<symbol>@marketDepth/<symbol>@marketDiff");\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Testnet Example:")," Various methods of connecting to streams where stream names are provided in URLs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'  // for personal streams, ex: Account & Orders & Transfers\n  const accountAndOrdersFeeds = new WebSocket("wss://testnet-dex.binance.org/api/ws/<USER_ADDRESS>");\n\n  // for single streams\n  const tradesFeeds = new WebSocket("wss://testnet-dex.binance.org/api/ws/<symbol>@trades");\n  const marketFeeds = new WebSocket("wss://testnet-dex.binance.org/api/ws/<symbol>@marketDiff");\n  const deltaFeeds = new WebSocket("wss://testnet-dex.binance.org/api/ws/<symbol>@marketDepth");\n  ... etc\n\n  // for all symbols\n  const allTickers = new WebSocket("wss://testnet-dex.binance.org/api/ws/$all@allTickers");\n  const allMiniTickers = new WebSocket("wss://testnet-dex.binance.org/api/ws/$all@allMiniTickers");\n  const blockHeight = new WebSocket("wss://testnet-dex.binance.org/api/ws/$all@blockheight");\n\n  // for combined streams, can combined a mixed symbols and streams\n  const combinedFeeds = new WebSocket("wss://testnet-dex.binance.org/api/stream?streams=<symbol>@trades/<symbol>@marketDepth/<symbol>@marketDiff");\n')),(0,r.kt)("h3",{id:"method-2-subscribe-to-streams-on-demand"},"Method 2: Subscribe to streams on demand"),(0,r.kt)("p",null,"Using this method, streams are be consumed via subscribe and unsubscribe commands, sent through a single WebSocket connection."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: one connection is only allowed to subscribe to one address.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    const conn = new WebSocket(\"wss://dex.binance.org/api/ws\");\n    conn.onopen = function(evt) {\n        // send Subscribe/Unsubscribe messages here (see below)\n    }\n    conn.onmessage = function(evt) {\n        console.info('received data', evt.data);\n    };\n    conn.onerror = function(evt) {\n        console.error('an error occurred', evt.data);\n    };\n")),(0,r.kt)("p",null,"After connecting successfully you can subscribe/unsubscribe to different topics."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," To subscribe to orders events and market depth updates, you should send a socket message with the ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," payload as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    const conn = new WebSocket("wss://dex.binance.org/api/ws/bnb17zw3mqjx64x4dxtwqjqz5tssql6qp2m0cgv06x");\n    conn.onopen = function(evt) {\n        // for personal topics such as accounts & orders & transfers, an `address` is required\n        // Note: one connection is only allowed to subscribe to one address.\n        // If you subscribe to a new address, regardless of whether the topic is new, the subscriptions for the previous addresses will be removed.\n        conn.send(JSON.stringify({ method: "subscribe", topic: "orders", address: "bnb17zw3mqjx64x4dxtwqjqz5tssql6qp2m0cgv06x" }));\n\n        // for data topics such as marketDepth, marketDelta, trades and ticker;\n        // a list of symbols is required. Same message can be used to append new topic and/or symbols\n        conn.send(JSON.stringify({ method: "subscribe", topic: "marketDepth", symbols: ["BNB_BTC","BNB_ETH"] }));\n    }\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," To unsubscribe from orders events, you should send a socket message with payloads as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    // unsubscribe from topic\n    conn.send(JSON.stringify({ method: "unsubscribe", topic: "orders" }));\n\n    // unsubscribe from individual symbols\n    conn.send(JSON.stringify({ method: "unsubscribe", topic: "marketDepth", symbols: ["BNB_BTC"] }));\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," To extend connection life, you should send a a message with a payload using the ",(0,r.kt)("inlineCode",{parentName:"p"},"keepAlive")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    // This will extend the connection time to another 30 minutes\n    // It\'s good to send this message every 30 minutes to maintain the connection life\n    conn.send(JSON.stringify({ method: "keepAlive" }));\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," To close a connection, you should send a socket message with a payload as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    // Connections will auto close after 30 - 60 minutes if no "keepAlive" messages received\n    // Connections with no subscriptions will be closed, regardless the keepAlive messages.\n    conn.send(JSON.stringify({ method: "close" }));\n')))}p.isMDXComponent=!0}}]);