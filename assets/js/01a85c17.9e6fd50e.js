"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[4013],{78665:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(67294),n=a(86010),s=a(81287),r=a(39960);const c="sidebar_q+wC",m="sidebarItemTitle_9G5K",i="sidebarItemList_6T4b",o="sidebarItem_cjdF",g="sidebarItemLink_zyXk",b="sidebarItemLinkActive_wcJs";var d=a(95999);function u(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(c,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:i},t.items.map((e=>l.createElement("li",{key:e.permalink,className:o},l.createElement(r.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:b},e.title))))))}const E=function(e){const{sidebar:t,toc:a,children:r,...c}=e,m=t&&t.items.length>0;return l.createElement(s.Z,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(u,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},r),a&&l.createElement("div",{className:"col col--2"},a))))}},40497:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var l=a(67294),n=a(78665),s=a(7774),r=a(32822);const c="tag_7kA+";function m(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(s.Z,e))))),l.createElement("hr",null))}const i=function(e){let{tags:t}=e;const a=(0,r.PZ)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(m,{key:e.letter,letterEntry:e}))))};const o=function(e){const{tags:t,sidebar:a}=e,s=(0,r.MA)();return l.createElement(n.Z,{title:s,wrapperClassName:r.kM.wrapper.blogPages,pageClassName:r.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:a},l.createElement("h1",null,s),l.createElement(i,{tags:Object.values(t)}))}},7774:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(86010),s=a(39960);const r="tag_WK-t",c="tagRegular_LXbV",m="tagWithCount_S5Zl";const i=function(e){const{permalink:t,name:a,count:i}=e;return l.createElement(s.Z,{href:t,className:(0,n.Z)(r,{[c]:!i,[m]:i})},a,i&&l.createElement("span",null,i))}}}]);