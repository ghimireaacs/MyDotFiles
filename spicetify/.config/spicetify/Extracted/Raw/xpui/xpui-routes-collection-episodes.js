"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6080],{5401:(e,t,r)=>{r.d(t,{G:()=>l});var n=r(92107),i=r(30337),a=r(86070);function l(e){var t=e.totalItems,r=e.containsTracks,l=e.containsEpisodes,o=e.containsAudiobooks;if(0===t)return null;var s,c=l&&!o&&!r,u=o&&!r&&!l;return s=r&&!l&&!o?n.Ru.get("tracklist-header.songs-counter",t):c?n.Ru.get("tracklist-header.episodes-counter",t):u?n.Ru.get("tracklist-header.audiobooks-counter",t):n.Ru.get("tracklist-header.items-counter",t),(0,a.jsx)(i.q,{children:s})}},72527:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(12341),i=r(30758),a=r(44286),l=r(81120),o=r(13534),s=r(11854),c=r(92107),u=r(99888);const d="hOOwEKqNuXrNvOCB1SgZ",A="csEdkIN9z2LjJIuZraqz";var p=r(86070),f=function(e){var t=e.uri,r=(0,u.A)(t),f=(0,n.A)(r,2),g=f[0],h=f[1],m=(0,a.Zp)(),y=(0,i.useCallback)((function(){h(!1),m("/",{replace:!0})}),[m,h]);return(0,p.jsxs)("div",{className:d,children:[(0,p.jsx)(l.b,{size:"xxlarge"}),(0,p.jsxs)("div",{className:A,children:[(0,p.jsx)(o.E,{as:"p",variant:"titleSmall",children:c.Ru.get("forbidden-page.title")}),(0,p.jsx)(o.E,{as:"p",variant:"bodySmall",children:c.Ru.get("forbidden-page.description")})]}),g&&(0,p.jsx)(s.$,{colorSet:"invertedLight",onClick:y,children:c.Ru.get("remove_from_your_library")})]})}},37089:(e,t,r)=>{r.d(t,{q:()=>c});var n=r(30758),i=r(97500),a=r.n(i),l=r(81699),o=r(91488),s=r(86070),c=n.memo(n.forwardRef((function(e,t){var r=e.html,i=e.onTimeStampClick,c=e.enableTimestamps,u=void 0!==c&&c,d=e.enableAutomaticLinkification,A=void 0!==d&&d,p=e.semanticColor,f=void 0===p?"textSubdued":p,g=e.className,h=e.asTextContent,m=void 0!==h&&h,y=(0,n.useMemo)((function(){return(0,l.v)(r,i,u,f,A,m)}),[u,A,r,i,f,m]);return(0,s.jsx)("div",{ref:t,className:a()(o.A.HTMLDescription,g),children:y})})))},81699:(e,t,r)=>{r.d(t,{v:()=>E});var n=r(52542),i=(r(7651),r(30456),r(26701),r(37417),r(11737),r(51691),r(702),r(5672),r(43379),r(19264),r(34192),r(88856),r(51565),r(18316),r(30758)),a=r(6936),l=r.n(a),o=r(13534),s=(r(34518),r(25550),r(2823),r(91281),r(4672),r(34072),r(15342),/(\((?:[0-9]{1,3}:){1,2}[0-9]{2}\))/g);r(83234),r(65594);var c=r(93051),u=r(86070),d=/((?:(?:https?:\/\/)|www\.)(?:(?:(?:[a-z\u00a1-\uffff0-9][-_]*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?:[/?#][^\s"]*)?)/gi,A=/^https?:\/\//;function p(e){return"string"==typeof e?(0,u.jsx)(u.Fragment,{children:e.split(d).map((function(e,t){return t%2?(0,u.jsx)(c.N,{to:"".concat(A.test(e)?"":"https://").concat(e),children:e},t):e}))}):e}var f=r(89687),g=r(91488);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,a=0,l={_:function(e,t,l){var o=void 0===t?e:l;return(0,u.jsx)(i.Fragment,{children:r&&!n?p(o):o},"fragment".concat(a++))}};return n?l:m(m({},l),{},{p:function(e){return(0,u.jsx)(o.E,{as:"p",variant:"bodyMedium",semanticColor:t,className:g.A.Paragraph,children:r?p(e.children):e.children})},a:function(t){var r;return null!==(r=t.href)&&void 0!==r&&r.startsWith("#t=")?(0,u.jsx)(f.D,{onClick:e,children:t.children}):t.href?(0,u.jsx)(c.N,{to:t.href,children:t.children}):(0,u.jsx)(u.Fragment,{children:t.children})},ul:function(e){return(0,u.jsx)("ul",{className:g.A.List,children:e.children})},ol:function(e){return(0,u.jsx)("ol",{className:g.A.List,children:e.children})},li:function(e){return(0,u.jsx)(o.E,{as:"li",variant:"bodyMedium",semanticColor:t,className:g.A.ListItem,children:r?p(e.children):e.children})},br:function(){return(0,u.jsx)("br",{})},h1:function(e){return(0,u.jsx)(o.E,{as:"h1",variant:"bodyMediumBold",semanticColor:t,className:g.A.Heading,children:e.children})},h2:function(e){return(0,u.jsx)(o.E,{as:"h2",variant:"bodyMediumBold",semanticColor:t,className:g.A.Heading,children:e.children})},h3:function(e){return(0,u.jsx)(o.E,{as:"h3",variant:"bodyMediumBold",semanticColor:t,className:g.A.Heading,children:e.children})},h4:function(e){return(0,u.jsx)(o.E,{as:"h4",variant:"bodyMediumBold",semanticColor:t,className:g.A.Heading,children:e.children})},h5:function(e){return(0,u.jsx)(o.E,{as:"h5",variant:"bodyMediumBold",semanticColor:t,className:g.A.Heading,children:e.children})},h6:function(e){return(0,u.jsx)(o.E,{as:"h6",variant:"bodyMediumBold",semanticColor:t,className:g.A.Heading,children:e.children})},time:function(t){return(0,u.jsx)(f.D,{onClick:e,children:t.children})}})},E=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"textSubdued",i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2]?e.split(s).map((function(e){if(e.match(s)){var t=e.replace("(","").replace(")","");return"(<time>".concat(t,"</time>)")}return e})).join(""):e;try{t=l()(o,{transform:y(r,n,i,a),dangerouslySetChildren:[]})}catch(r){t=e}return t}},47161:(e,t,r)=>{r.r(t),r.d(t,{default:()=>gr});var n,i=r(52542),a=(r(30456),r(43379),r(34192),r(88856),r(30758)),l=r(49190),o=r(93493),s=r(92107),c=r(65707),u=r(45625),d=r(61089),A=r(44206),p=r(51069),f=r(7308),g=(r(184),r(42486),r(65998)),h=(r(78551),r(82467),r(93195)),m=r(38266),y=r(3568),E=function(e){return e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER",e}({}),x={"show-alphabetical":E.SHOW_ALPHABETICAL,"book-alphabetical":E.BOOK_ALPHABETICAL,"episode-alphabetical":E.EPISODE_ALPHABETICAL,"playlist-alphabetical":E.PLAYLIST_ALPHABETICAL,"album-alphabetical":E.ALBUM_ALPHABETICAL,"recently-added":E.ADDED_AT,"creator-name":E.CREATOR_NAME,"creator-name-alphabetical":E.CREATOR_NAME_ALPHABETICAL,"album-creator-name":E.ALBUM_CREATOR_NAME,"recently-played":E.RECENTLY_PLAYED,"playlist-most-relevant":E.MOST_RELEVANT,"playlist-custom-order":E.CUSTOM_ORDER},v=(n={},(0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)(n,E.RECENTLY_PLAYED,{key:"recently-played",get value(){return s.Ru.get("collection.sort.recently-played")}}),E.ADDED_AT,{key:"recently-added",get value(){return s.Ru.get("collection.sort.recently-added")}}),E.SHOW_ALPHABETICAL,{key:"show-alphabetical",get value(){return s.Ru.get("collection.sort.alphabetical")}}),E.BOOK_ALPHABETICAL,{key:"book-alphabetical",get value(){return s.Ru.get("collection.sort.alphabetical")}}),E.EPISODE_ALPHABETICAL,{key:"episode-alphabetical",get value(){return s.Ru.get("collection.sort.alphabetical")}}),E.PLAYLIST_ALPHABETICAL,{key:"playlist-alphabetical",get value(){return s.Ru.get("collection.sort.alphabetical")}}),E.ALBUM_CREATOR_NAME,{key:"album-creator-name",get value(){return s.Ru.get("collection.sort.creator")}}),E.CREATOR_NAME,{key:"creator-name",get value(){return s.Ru.get("collection.sort.creator")}}),E.CREATOR_NAME_ALPHABETICAL,{key:"creator-name-alphabetical",get value(){return s.Ru.get("collection.sort.alphabetical")}}),E.ALBUM_ALPHABETICAL,{key:"album-alphabetical",get value(){return s.Ru.get("collection.sort.alphabetical")}}),(0,i.A)((0,i.A)(n,E.MOST_RELEVANT,{key:"playlist-most-relevant",get value(){return s.Ru.get("collection.sort.most-relevant")}}),E.CUSTOM_ORDER,{key:"playlist-custom-order",get value(){return s.Ru.get("collection.sort.custom-order")}}));E.ADDED_AT,E.ALBUM_ALPHABETICAL,E.CREATOR_NAME,(0,i.A)((0,i.A)((0,i.A)({},E.ADDED_AT,{field:m.uY.ADDED_AT,order:m.xB.DESC}),E.ALBUM_ALPHABETICAL,{field:m.uY.NAME,order:m.xB.ASC}),E.CREATOR_NAME,{field:m.uY.ARTIST_NAME,order:m.xB.ASC});E.ADDED_AT,E.CREATOR_NAME_ALPHABETICAL,(0,i.A)((0,i.A)({},E.ADDED_AT,{field:m.af.ADDED_AT,order:m.xB.DESC}),E.CREATOR_NAME_ALPHABETICAL,{field:m.af.NAME,order:m.xB.ASC});E.ADDED_AT,E.SHOW_ALPHABETICAL,(0,i.A)((0,i.A)({},E.ADDED_AT,{field:m.WW.ADDED_AT,order:m.xB.DESC}),E.SHOW_ALPHABETICAL,{field:m.WW.NAME,order:m.xB.ASC});E.ADDED_AT,E.BOOK_ALPHABETICAL,(0,i.A)((0,i.A)({},E.ADDED_AT,m.Ev.ADDED_AT),E.BOOK_ALPHABETICAL,m.Ev.NAME);E.MOST_RELEVANT,E.RECENTLY_PLAYED,E.ADDED_AT,E.PLAYLIST_ALPHABETICAL,E.CUSTOM_ORDER,(0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)({},E.ADDED_AT,{field:y.nw.ADDED_AT,order:y.xB.DESC}),E.RECENTLY_PLAYED,{field:y.nw.RECENTLY_PLAYED,order:y.xB.ASC}),E.PLAYLIST_ALPHABETICAL,{field:y.nw.NAME,order:y.xB.ASC}),E.MOST_RELEVANT,{field:y.nw.RELEVANCE,order:y.xB.DESC}),E.CUSTOM_ORDER,void 0);E.ADDED_AT,E.ADDED_AT,E.ADDED_AT,E.MOST_RELEVANT,E.ADDED_AT;var b=r(86070),P=function(e){return e===E.ADDED_AT?m.xB.DESC:m.xB.ASC},j={option:E.ADDED_AT,order:m.xB.DESC},C=(0,i.A)((0,i.A)({},m.xB.ASC,m.xB.DESC),m.xB.DESC,m.xB.ASC),O=(0,a.createContext)({setSortState:function(){throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:j}),L=a.memo((function(e){var t=e.uri,r=e.children,n=e.defaultSortOption,i={option:n,order:P(n)};return(0,b.jsx)(g.E,{uri:t,defaultState:i,sortContext:O,children:r})})),D=(r(47994),r(69045)),T=r(99217),S=r(51902),_=r(94823),R=r(25989),I=r(33517),k=(r(25550),r(15342),r(23593)),w=a.memo((function(e){var t,r=e.sortOptions,n=e.onSort,i=(0,a.useContext)(O),l=i.sortState,o=i.setSortState,s=(0,a.useCallback)((function(e){var t=x[e];null==n||n(t),o(function(e,t,r){return t!==e?{option:e,order:P(e)}:{option:e,order:C[r]}}(t,l.option,l.order))}),[n,o,l.option,l.order]),c=r.map((function(e){return v[e]})),u=v[l.option];return(0,b.jsx)(k.g,{options:c,onSelect:s,selected:u,sortOrder:(t=l.order,t===m.xB.ASC?h.H.ASC:h.H.DESC)})})),N=r(12574);const B="gWfUTJg52F5eTzM6M82w";var M=a.memo((function(e){var t=e.canSort,r=e.canFilter,n=e.filterPlaceholder,i=e.sortOptions,l=(0,N.r)(R.E,{}),o=l.spec,s=l.logger,c=(0,a.useCallback)((function(){s.logInteraction(o.filterFieldFactory().keyStrokeFilter())}),[s,o]),u=(0,a.useCallback)((function(){s.logInteraction(o.filterFieldFactory().hitClearFilter())}),[s,o]);return(0,b.jsxs)("div",{className:B,children:[r?(0,b.jsx)(a.Suspense,{fallback:null,children:(0,b.jsx)(I.S,{placeholder:n,onFilter:c,onClear:u})}):null,t?(0,b.jsx)(w,{sortOptions:i}):null]})})),U=r(96369),H=(r(83234),r(34518),(0,i.A)((0,i.A)((0,i.A)({},m.ci.NAME,p.lU.TITLE),m.ci.SHOW_NAME,p.lU.SHOW),m.ci.ADDED_AT,p.lU.ADDED_AT)),F=[E.ADDED_AT,E.CREATOR_NAME,E.EPISODE_ALPHABETICAL],Y=(0,i.A)((0,i.A)((0,i.A)({},E.ADDED_AT,m.ci.ADDED_AT),E.CREATOR_NAME,m.ci.SHOW_NAME),E.EPISODE_ALPHABETICAL,m.ci.NAME);var z=function(e,t){if(function(e){return F.includes(e)}(e))return{field:Y[e],order:t}},W=function(e,t){if(F.includes(e))return function(e){if(null!=e&&e.field){var t=H[e.field];if(t)return p.SL[t].map((function(t){return e.order?"".concat(t," ").concat(e.order):t})).join(",")}}(z(e,t))},V=r(54249),q=r(58114),G=r(85755),K=r(81382);const X="wmGcau34_eXQOX37kUTc",Q="Yxy9nPtcdgz7zbBsWVKg";var Z=function(e){var t=e.metadata,r=e.canSort,n=e.backgroundColor,i=e.isPlaying,a=e.isOnline,l=e.togglePlay,o=(0,G.f)(),c=t.uri,u=t.name,d=t.totalLength>0,A=(0,V.j)();return(0,b.jsx)(D.E,{backgroundColor:n,children:(0,b.jsxs)(T.S,{children:[d&&(0,b.jsx)(_.D,{onClick:function(){return l()},isPlaying:i,size:A,uri:c,disabled:!a,ariaPlayLabel:s.Ru.get("playlist.a11y.play",u),ariaPauseLabel:s.Ru.get("playlist.a11y.pause",u)}),r&&(0,b.jsx)("div",{className:Q,children:(0,b.jsx)(S.u,{property:q.ucV,renderNewExperience:function(){return(0,b.jsx)(U.d,{sortOptions:[K.nw.TITLE,K.nw.ADDED_AT,K.nw.PUBLISH_DATE,K.nw.SHOW_NAME],defaultSortField:K.nw.ADDED_AT,filterPlaceholder:s.Ru.get("playlist.search_in_playlist")})},renderOldExperience:function(){return(0,b.jsx)(M,{canSort:o.getCapabilities().canSort,canFilter:o.getCapabilities().canFilter,filterPlaceholder:s.Ru.get("playlist.search_in_playlist"),sortOptions:F})}})})]})})},J=r(85093),$=r(62822),ee=r(12341),te=r(93091),re=r.n(te),ne=(r(7651),r(26701),r(40122),r(76588),r(37417),r(11737),r(51691),r(702),r(5672),r(51565),r(18316),r(14551),r(83643)),ie=r(53163),ae=r(48106),le=r(88712),oe=r(64333),se=r(48233),ce=r(8016),ue=r(8574),de=r(10631),Ae=r(89923),pe=r(64348),fe=r(57186),ge=r(46198),he=r(53607),me=r(60455),ye=r(99888),Ee=r(79431),xe=r(33814),ve=r(16920),be=r(40454),Pe=r(97724);const je="sxxBMk7G1OGo4uYIgPdQ",Ce="wpP88qSwGpDQbc_ogyXW";var Oe={small:64,standard:300,large:640,xlarge:1024},Le=a.memo((function(e){var t,r,n,i,l,s,c,u,d,A,p=e.index,g=e.contextUri,h=e.episode,m=e.onRemove,y=e.usePlayContextItem,E=(0,a.useRef)(h.duration.milliseconds-h.playedState.timeLeft.milliseconds),x=h.uri,v=(0,a.useState)(h.playedState.state===be.M.Completed),P=(0,ee.A)(v,2),j=P[0],C=P[1],O=(0,a.useContext)(f.g).filter,L=(0,ce.P)(),D=L.draggable,T=L.onDragStart,S=(0,me.y)(),_=(0,ue.W)(),R=(0,ye.A)(x,!0),I=(0,ee.A)(R,1)[0],k=(0,de.g)(h.uri,{isPlayable:h.isPlayable}).isPlayable,w=(0,Ae.n)(),N=y({uri:x,index:p}),B=N.isPlaying,M=N.isActive,U=N.togglePlay,H=(0,xe.S)(1e4,(function(e){var t;return(null==e||null===(t=e.item)||void 0===t?void 0:t.uri)===x})),F=(0,ee.A)(H,1)[0];(0,a.useEffect)((function(){B&&(E.current=F)}),[B,F]);var Y=(0,Ee.P)({uri:x,pages:[{items:[{type:ve.c.EPISODE,uri:x,uid:null,provider:null}]}]},{featureIdentifier:"your_library",referrerIdentifier:"your_library"}),z=Y.isPlaying,W=Y.isActive,V=Y.togglePlay;(0,a.useEffect)((function(){I||m()}),[I,m]),(0,a.useEffect)((function(){B||h.duration.milliseconds<=E.current&&C(!0)}),[B,h.duration.milliseconds]);var G=(0,a.useCallback)((function(e){e||(E.current=0),C(e)}),[]),K=(0,a.useCallback)((function(e){var t;if(e.target===e.currentTarget){var r="".concat(h.name);null!==(t=h.show)&&void 0!==t&&t.name&&(r+=" • ".concat(h.show.name)),T(e,{itemUris:[x],dragLabelText:r,contextUri:g})}}),[g,h.name,null===(t=h.show)||void 0===t?void 0:t.name,x,T]),X=(0,a.useCallback)((function(){_({type:"click",targetUri:x,intent:"navigate"})}),[x,_]),Q=(0,a.useCallback)((function(){w?(_({type:"click",intent:B?"pause":"play"}),U()):(_({type:"click",intent:z?"pause":"play"}),V())}),[w,B,z,_,U,V]),Z=(0,a.useCallback)((function(e){return(0,b.jsx)(se.M,{searchWords:[O],textToHighlight:e})}),[O]),J=null!==(r=null===(n=h.podcastSubscription)||void 0===n?void 0:n.isPaywalled)&&void 0!==r&&r,$=null!==(i=null===(l=h.podcastSubscription)||void 0===l?void 0:l.isUserSubscribed)&&void 0!==i&&i,te=(0,Pe.b)({isExplicit:h.isExplicit,isMOGEFRestricted:h.is19PlusOnly,isPaywalled:J}).badges,re=!1;(M||!w&&W)&&(re=!0);var Ce=(0,o.NC)(q.cKd,{loadingValue:!1});return I?(0,b.jsxs)(he.pZ,{value:"row",index:p,children:[(0,b.jsx)("hr",{className:je,"aria-hidden":!0}),(0,b.jsx)(ne.h,{menu:(0,b.jsx)(ie.b,{uri:x,contextUri:g,showUri:null===(s=h.show)||void 0===s?void 0:s.uri,isPlayed:j,onMarkAsPlayed:G}),children:Ce?(0,b.jsx)(le.k,{requestId:h.requestId,index:p,uri:x,uid:x,size:S,images:h.images.map((function(e){return{url:e.url,width:e.width||(e.label?Oe[e.label]:null),height:e.height||(e.label?Oe[e.label]:null)}})),isPaywalled:J,isUserSubscribed:$,name:h.name,highlightText:Z,showName:null===(c=h.show)||void 0===c?void 0:c.name,showUri:null===(u=h.show)||void 0===u?void 0:u.uri,description:h.description,isPlayable:k,fullyPlayed:j,durationMs:h.duration.milliseconds,releaseDate:h.release.date||"",resumePositionMs:E.current,draggable:D,handleDragStart:K,handlePlaybackClick:Q,handleClick:X,isCurrentlyPlaying:re,isPlaying:w?B:z,position:re?F:void 0,episodeSharingInfo:null,onMarkAsPlayed:G,badges:(0,b.jsxs)(b.Fragment,{children:[te.explicit&&(0,b.jsx)(pe.U,{}),te.paid&&(0,b.jsx)(fe.y,{}),te.nineteen&&(0,b.jsx)(ge.q,{size:16})]}),playButtonWrapper:function(e){var t;return(0,b.jsx)(oe.f,{enabled:J&&!$,showUri:(null===(t=h.show)||void 0===t?void 0:t.uri)||void 0,children:e})}}):(0,b.jsx)(ae.R,{requestId:h.requestId,index:p,uri:x,uid:x,size:S,images:h.images.map((function(e){return{url:e.url,width:e.width||(e.label?Oe[e.label]:null),height:e.height||(e.label?Oe[e.label]:null)}})),isPaywalled:J,isUserSubscribed:$,name:h.name,highlightText:Z,showName:null===(d=h.show)||void 0===d?void 0:d.name,showUri:null===(A=h.show)||void 0===A?void 0:A.uri,description:h.description,isPlayable:k,fullyPlayed:j,durationMs:h.duration.milliseconds,releaseDate:h.release.date||"",resumePositionMs:E.current,handleDragStart:K,handlePlaybackClick:Q,handleClick:X,isCurrentlyPlaying:re,isPlaying:w?B:z,position:re?F:void 0,episodeSharingInfo:null,onMarkAsPlayed:G,badges:(0,b.jsxs)(b.Fragment,{children:[te.explicit&&(0,b.jsx)(pe.U,{}),te.paid&&(0,b.jsx)(fe.y,{}),te.nineteen&&(0,b.jsx)(ge.q,{size:16})]}),playButtonWrapper:function(e){var t;return(0,b.jsx)(oe.f,{enabled:J&&!$,showUri:(null===(t=h.show)||void 0===t?void 0:t.uri)||void 0,children:e})}})})]}):null})),De=r(38392),Te=r(47795),Se=r(53406);function _e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_e(Object(r),!0).forEach((function(t){(0,i.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_e(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ie=a.memo((function(e){var t=e.contextUri,r=e.usePlayContextItem,n=(0,G.f)(),l=(0,a.useContext)(O).sortState,o=(0,a.useState)({totalLength:0,unfilteredTotalLength:0,offset:0,items:[],limit:50}),s=(0,ee.A)(o,2),c=s[0],u=s[1],d=(0,a.useRef)(!1),A=(0,a.useRef)(0),p=(0,a.useRef)(0),g=(0,a.useContext)(f.g).filter,h=(0,a.useCallback)((function(){p.current++}),[]),m=(0,Se.x)((0,i.A)((0,i.A)({},Te.E.MEDIUM,0),Te.E.LARGE,600)),y=m.ref,E=m.breakpoint,x=(0,a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=function(){var e=(0,$.A)(re().mark((function e(t){var r;return re().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getEpisodes({offset:t-p.current,limit:50,sort:z(l.option,l.order),filter:g});case 2:return r=e.sent,p.current=0,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=A.current;null!==r&&(d.current||(d.current=!0,t(Number(r)).then((function(t){u((function(n){var i=Number(t.offset)+t.items.length,a=e?[]:(0,J.A)(n.items);return a.splice.apply(a,[Number(r),t.items.length].concat((0,J.A)(t.items))),A.current=i<t.totalLength?i:null,Re(Re({},t),{},{items:a})})),d.current=!1}))))}),[g,n,l]);return(0,a.useEffect)((function(){A.current=0,x(!0)}),[x]),(0,b.jsx)(me.o.Provider,{value:E,children:(0,b.jsx)(he.pZ,{value:"track-list",children:(0,b.jsx)("div",{ref:y,children:(0,b.jsx)(De._,{onReachBottom:x,triggerOnInitialLoad:!0,children:c.items.map((function(e,n){return(0,b.jsx)("div",{className:Ce,children:(0,b.jsx)(Le,{index:n,episode:e,contextUri:t,onRemove:h,usePlayContextItem:r},"".concat(e.uri,"/").concat(n))},"".concat(n).concat(e.uri))}))})})})})})),ke=r(13534),we=r(9754),Ne=r(26552),Be=r(33598),Me=r(17067),Ue=r(85925),He=r(2238),Fe=r(62400),Ye=r(5401),ze=r(10833),We=r(88420),Ve=r(65006),qe=r(18180),Ge=function(e){var t=e.metadata,r=e.backgroundColor,n=e.isPlaying,i=e.isOnline,l=e.togglePlay,o=t.uri,c=t.name,u=t.images,d=t.totalLength,A=t.owner,p=(0,a.useMemo)((function(){return{id:A.username,uri:A.uri,name:A.username,displayName:A.displayName||void 0,images:A.images||[]}}),[A]);return(0,b.jsxs)(we.z,{backgroundColor:r,children:[(0,b.jsxs)(Me.h,{children:[(0,b.jsx)(_.D,{size:"medium",onClick:function(){return l()},isPlaying:n,uri:o,disabled:!i,ariaPlayLabel:s.Ru.get("playlist.a11y.play",c),ariaPauseLabel:s.Ru.get("playlist.a11y.pause",c)}),(0,b.jsx)(Ue.X,{text:c})]}),(0,b.jsx)(Ne.K,{images:u,name:c,shape:qe.u.ROUNDED_CORNERS,renderImage:function(){return(0,b.jsx)(Ve.b,{})}}),(0,b.jsxs)(Be.Y,{children:[(0,b.jsx)(ke.E,{variant:"bodySmallBold",children:s.Ru.get("playlist")}),(0,b.jsx)(We.mm,{canEdit:!1,onClick:function(){},children:c}),(0,b.jsxs)(He.X,{children:[(0,b.jsx)(Fe.j,{creators:[p]}),(0,b.jsx)(ze.J,{}),(0,b.jsx)(Ye.G,{totalItems:d,containsEpisodes:!0})]})]})]})},Ke=r(88677),Xe=r(80366),Qe=r(70915),Ze=r(89255),Je=r(47293);function $e(e,t,r,n){var i={configurable:!0,enumerable:!0};return i[e]=n,Object.defineProperty(t,r,i)}var et=$e("get",$e("get",$e("get",{},K.YB.AVAILABLE_OFFLINE,(function(){return s.Ru.get("download.available-offline")})),K.YB.UNPLAYED,(function(){return s.Ru.get("shows.filter.unplayed")})),K.YB.IN_PROGRESS,(function(){return s.Ru.get("shows.filter.in-progress")})),tt=r(45017),rt=function(e){var t=e.filterPredicates,r=e.className,n=(0,tt.m)().getCapabilities().canFilter,i=(0,Je.jP)(),a=i.filterPredicate,l=i.setFilterPredicate;return n?a?(0,b.jsxs)("div",{className:r,children:[(0,b.jsx)(Qe.m,{onClick:function(){return l(null)},"aria-label":s.Ru.get("web-player.your-library-x.clear_filters")}),(0,b.jsx)(Ze.v,{onClick:function(){return l(null)},selected:!0,selectedColorSet:"invertedLight",children:et[a]},a)]}):(0,b.jsx)("div",{className:r,children:t.map((function(e){return(0,b.jsx)(Ze.v,{onClick:function(){return l(a?null:e)},selected:a===e,selectedColorSet:"invertedLight",children:et[e]},e)}))}):null},nt=r(39884),it=r(95320),at=r(13734),lt=r(97500),ot=r.n(lt),st=r(44286),ct=r(66475),ut=r(42672),dt=r(78988),At=r(48035),pt=r(79564),ft=r(79509),gt=r(80021),ht=r(64877),mt=r(21308),yt=r(77836),Et=r(87389),xt=r(85703),vt=r(59950),bt=r(83263),Pt=r(49757),jt=r(31247),Ct=r(75905),Ot=r(93051),Lt=r(77736),Dt=r(43023),Tt=r(54129),St=r(46366),_t=r(63749),Rt=r(48133),It=r(87700),kt=r(76026),wt=r(70566),Nt=r(24119),Bt=r(50028),Mt=["episode","contextUri","usePlayContextItem","index","sharingInfo","uid","showSeparator","highlightText"];function Ut(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ht(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ut(Object(r),!0).forEach((function(t){(0,i.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ut(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ft=(0,a.memo)((function(e){var t,r,n,l,o,c,u=e.episode,d=e.contextUri,A=e.usePlayContextItem,p=e.index,f=e.sharingInfo,g=e.uid,h=e.showSeparator,m=void 0!==h&&h,y=e.highlightText,E=void 0===y?function(e){return e}:y,x=(0,at.A)(e,Mt),v=u.name,P=u.description,j=u.isExplicit,C=u.show,O=u.type,L=u.uri,D=u.duration,T=u.is19PlusOnly,S=u.mediaType,_=u.release,R=u.images,I=(0,wt.s)(),k=(0,N.r)(ut.m,{data:{position:p,uri:L}}).spec,w=null==C?void 0:C.name,B=null==C?void 0:C.uri,M=null===(t=(0,Xe.o_)(B))||void 0===t?void 0:t.toURLPath(!0),U=null!==(r=null===(n=u.podcastSubscription)||void 0===n?void 0:n.isPaywalled)&&void 0!==r&&r,H=null!==(l=null===(o=u.podcastSubscription)||void 0===o?void 0:o.isUserSubscribed)&&void 0!==l&&l,F=U&&!H,Y=null!==(c=null==S?void 0:S.includes(be.C.Video))&&void 0!==c&&c,z=(0,st.Zp)(),W=(0,Xe.o_)(L).toURLPath(!0),V=(0,Ct.$)(),q=(0,ye.A)(L),G=(0,ee.A)(q,2),K=G[0],X=G[1],Q=(0,Rt.T)(L),Z=A({uri:L,index:p}),$=Z.isPlaying,te=Z.isActive,re=Z.togglePlay,ae=V===Ct.e.SMALL?"small":"medium",le=function(e,t){var r=e.uri,n=e.duration,i=e.playedState,l=(0,a.useRef)(n.milliseconds-i.timeLeft.milliseconds),o=(0,a.useState)(i.state===be.M.Completed),s=(0,ee.A)(o,2),c=s[0],u=s[1],d=(0,xe.S)(1e4,(function(e){var t;return(null==e||null===(t=e.item)||void 0===t?void 0:t.uri)===r})),A=(0,ee.A)(d,1)[0],p=(0,a.useCallback)((function(e){e||(l.current=0),u(e)}),[]);return(0,a.useEffect)((function(){t&&(l.current=A)}),[t,A]),{resumePositionMs:l.current,isFullyPlayed:c,onToggleMarkAsPlayed:p}}(u,$),se=le.resumePositionMs,ue=le.onToggleMarkAsPlayed,de=le.isFullyPlayed,Ae=[v].concat((0,J.A)(w?[w]:[])).join(" • "),pe=(0,ce.P)({itemUris:[L],dragLabelText:Ae}),fe=pe.draggable,ge=pe.onDragStart,he=(0,Tt.v)(L),me=(0,a.useCallback)((function(e){if(e.stopPropagation(),F)I.logInteraction(k.playButtonFactory().hitShowPaywall({paywalledItem:L}));else{var t=(0,St.$I)({isPlaying:$,isActive:te,spec:k.playButtonFactory(),logger:I,uri:L});re({loggingParams:t})}}),[te,$,I,k,re,F,L]),Ee=(0,b.jsx)(Pt.U,{children:E(v,jt.u.TITLE)}),ve=(0,b.jsx)(xt.k,{description:P,children:(0,b.jsx)(mt.X,{isExplicit:!!j,is19PlusOnly:T,isPaid:U,children:D.milliseconds&&(0,b.jsx)(Nt.j,{isPlaying:!1,fullyPlayed:de,durationMs:D.milliseconds,position:se,releaseDate:_.date})})}),Pe=(0,b.jsx)(ie.b,{uri:L,uid:g,contextUri:d,showUri:B,isPlayed:de,onMarkAsPlayed:ue}),je=(0,b.jsx)(dt.M,{className:ot()((0,i.A)({},Bt.A.visibleAction,K)),isAdded:K,onClick:function(){X(!K)},size:ae,isEpisode:!0,condensedAll:!0}),Ce=(0,b.jsx)(Dt.g,{size:ae,uri:L}),Oe=(0,b.jsxs)(b.Fragment,{children:[he?Ce:je,(0,b.jsx)(At.I,{className:ot()((0,i.A)({},Bt.A.visibleAction,(0,_t.X)(Q))),uri:L,size:ae,canDownload:!U||U&&H,onClick:function(e,t){t===It.NV.ADD&&I.logInteraction(k.downloadButtonFactory().hitDownload({itemToDownload:L}))},condensedAll:!0}),(0,b.jsx)(ft.w,{uri:L,sharingInfo:null!=f?f:null,interactionData:{intent:"share",type:"click"},size:ae,onClick:function(){var e;I.logInteraction(k.shareButtonFactory().hitShare({entityToBeShared:L,shareId:null!==(e=null==f?void 0:f.shareId)&&void 0!==e?e:""}))},condensedAll:!0}),(0,b.jsx)(gt.b,{menu:Pe,children:(0,b.jsx)(pt.e,{label:s.Ru.get("more.label.context",v),size:ae,onClick:function(){I.logInteraction(k.contextMenuButtonFactory().hitUiReveal())},condensedAll:!0})})]}),Le=(0,b.jsx)(vt.F,{actions:Oe,playButton:(0,b.jsx)(oe.f,{enabled:U&&!H,showUri:B||void 0,children:(0,b.jsx)(yt.q,{onClick:me,isPlaying:$,ariaPlayLabel:s.Ru.get("tracklist.a11y.play",v,w),ariaPauseLabel:s.Ru.get("tracklist.a11y.pause",v,w),locked:F})})}),De=(0,b.jsx)(bt.e,{images:R,name:v,type:O,breakpoint:V}),Te=(0,b.jsxs)(ct.j,{lineClamp:2,children:[Y&&(0,b.jsx)(Lt.T,{}),w&&M&&(0,b.jsx)(ne.h,{menu:(0,b.jsx)(ht.H,{uri:null!=B?B:""}),onShow:function(){I.logInteraction(k.podcastLinkFactory().secondaryHitUiReveal())},children:(0,b.jsx)(Ot.N,{to:M,onClick:function(){I.logInteraction(k.podcastLinkFactory().hitUiNavigate({destination:M}))},children:(0,b.jsx)(ke.E,{variant:"bodySmall",semanticColor:"textSubdued",children:E(w,jt.u.SUBTITLE)})})})]});return(0,b.jsx)(kt.r,{spec:k,children:(0,b.jsx)(ne.h,{menu:Pe,onShow:function(){I.logInteraction(k.secondaryHitUiReveal())},children:(0,b.jsx)(Et.k,Ht({draggable:fe,onDragStart:ge,breakpoint:V,id:"book-".concat(L),media:De,title:Ee,body:ve,subtitle:Te,footer:Le,isActive:te,onClick:function(){z(W)},showSeparator:m},x))})})})),Yt=r(16783),zt=r(37633),Wt=r(57719),Vt=r(71666),qt=r(496),Gt=r(59066),Kt=function(e){var t=e.renderItem,r=(0,qt.v7)(),n=(0,Wt.K_)(),i=n.getItem,l=n.nrValidItems,o=n.invalidateCache,s=(0,zt.gU)().playlist.metadata;(0,Gt.H)(s.uri,o);var c=(0,a.useCallback)((function(e){return(0,b.jsx)("div",{style:{height:e}})}),[]),u=(0,a.useCallback)((function(e,r){var n=i(e);return n?t(n,e):c("".concat(r,"px"))}),[i,t,c]),d="POP"===(0,st.wQ)()?0:10;return(0,b.jsx)(Yt.R,{firstInteractiveIsWrapper:!0,"aria-rowcount":l,"aria-colcount":6,children:(0,b.jsx)(Vt.M,{totalCount:l,estimatedHeight:200,renderItem:u,renderPlaceholder:c,scrollNodeRef:r,nrRowsOverscan:10,persistanceKey:s.uri,nrInitialInView:d})})},Xt=r(60097),Qt=function(e){var t=e.children,r=e.index;return(0,b.jsx)(Xt.W,{"aria-posinset":r,children:t})},Zt=r(62749),Jt=(0,a.memo)((function(e){var t=e.usePlayContextItem,r=e.contextUri,n=(0,nt.g)().contentsOptions.filter,i=(0,a.useCallback)((function(e,t){return"string"!=typeof n?e:t===jt.u.TITLE||t===jt.u.SUBTITLE?(0,b.jsx)(se.M,{searchWords:[n],textToHighlight:e}):e}),[n]),l=(0,a.useCallback)((function(e,n){return(0,Zt.xp)(e)?(0,b.jsx)(Qt,{index:n,children:(0,b.jsx)(Ft,{index:n,episode:e,contextUri:r,usePlayContextItem:t,showSeparator:0!==n,highlightText:i})},"".concat(e.uri,"/").concat(n)):null}),[r,i,t]);return(0,b.jsx)(Kt,{renderItem:l})}));function $t(e){return{url:e.url,width:e.width,height:e.height}}var er=r(95326),tr=r(14546),rr=r(65249),nr=r(53724),ir=r(60255);const ar="zX8QX7OLPnU9eLrJV3Cd",lr="hILz7Al7z5E0yyQdBo_K";function or(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function sr(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?or(Object(r),!0).forEach((function(t){(0,i.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):or(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var cr=function(){var e=(0,tr.z)("#006450"),t=(0,Ae.n)(),r=(0,Ke.d4)(rr.Ht).user,n=(0,tt.m)().getCapabilities(),i=n.canSort,o=n.canFilter,c=(0,nt.g)(),A=c.playlist.metadata,p=c.contentsOptions,f=(0,a.useMemo)((function(){var e=function(e){var t,r,n,i,a;return{type:ve.c.USER,uri:null!==(t=null==e?void 0:e.uri)&&void 0!==t?t:"",username:null!==(r=null==e?void 0:e.id)&&void 0!==r?r:"",displayName:null!==(n=null==e?void 0:e.display_name)&&void 0!==n?n:null,images:null!==(i=null==e||null===(a=e.images)||void 0===a?void 0:a.map($t))&&void 0!==i?i:[]}}(r);return sr(sr({},A),{},{owner:e,name:s.Ru.get("sidebar.your_episodes")})}),[A,r]),g=(0,Ee.P)((0,ir.A)(f.uri,p),{featureIdentifier:"your_library",referrerIdentifier:"your_library"},{shuffle:!1,repeat:nr.p.REPEAT_NONE}),h=g.isPlaying,m=g.togglePlay,y=g.usePlayContextItem,E=r?(0,Xe.fH)(r.id,"your-episodes").toURI():"";return(0,b.jsxs)("section",{className:ar,"data-testid":"your-episodes-page",children:[(0,b.jsx)(u.Q,{children:s.Ru.get("sidebar.your_episodes")}),(0,b.jsx)(Ge,{metadata:f,backgroundColor:e,isPlaying:h,isOnline:t,togglePlay:m}),(0,b.jsxs)("div",{children:[(0,b.jsx)(Z,{metadata:f,backgroundColor:e,isPlaying:h,isOnline:t,togglePlay:m,canSort:i||o}),(0,b.jsxs)("div",{className:"contentSpacing",children:[(0,b.jsx)(rt,{className:lr,filterPredicates:[K.YB.UNPLAYED,K.YB.AVAILABLE_OFFLINE,K.YB.IN_PROGRESS]}),f.totalLength>0?(0,b.jsx)(Jt,{usePlayContextItem:y,contextUri:E}):(0,b.jsx)(d.p,{message:s.Ru.get("collection.empty-page.episodes-subtitle"),title:s.Ru.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:s.Ru.get("collection.empty-page.shows-cta"),renderInline:!0,children:(0,b.jsx)(l.P,{"aria-hidden":"true"})})]})]})]})};const ur=(0,a.memo)((function(){return(0,b.jsx)(it.W,{uri:er.H,children:(0,b.jsx)(cr,{})})}));var dr=r(36948),Ar=r(51170),pr=function(e){var t=e.metadata,r=e.canSort,n=(0,tr.z)("#006450"),o=(0,Ae.n)(),A=(0,a.useContext)(O).sortState,g=(0,a.useContext)(f.g).filter,h=(0,Ee.P)({uri:t.uri,metadata:(0,i.A)((0,i.A)({},Ar.W.SORTING_CRITERIA,W(A.option,A.order)),Ar.W.FILTERING_PREDICATE,(0,p.ly)(g))},{featureIdentifier:"your_library",referrerIdentifier:"your_library"},{shuffle:!1,repeat:nr.p.REPEAT_NONE}),m=h.isPlaying,y=h.togglePlay,E=h.usePlayContextItem;return(0,b.jsxs)("section",{className:X,"data-testid":"your-episodes-page",children:[(0,b.jsx)(u.Q,{children:s.Ru.get("sidebar.your_episodes")}),(0,b.jsx)(Ge,{metadata:t,backgroundColor:n,isPlaying:m,isOnline:o,togglePlay:y}),(0,b.jsxs)("div",{children:[(0,b.jsx)(Z,{metadata:t,backgroundColor:n,isPlaying:m,isOnline:o,togglePlay:y,canSort:r}),(0,b.jsx)("div",{className:"contentSpacing",children:t.totalLength>0?(0,b.jsx)(Ie,{contextUri:t.uri,usePlayContextItem:E}):(0,b.jsx)(d.p,{message:s.Ru.get("collection.empty-page.episodes-subtitle"),title:s.Ru.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:s.Ru.get("collection.empty-page.shows-cta"),renderInline:!0,children:(0,b.jsx)(c.v,{href:"/genre/podcasts-web",children:(0,b.jsx)(l.P,{"aria-hidden":"true","aria-label":s.Ru.get("collection.empty-page.episodes-title")})})})})]})]})},fr=(0,a.memo)((function(){var e=(0,G.f)().getCapabilities(),t=(0,dr.u)();return t?(0,b.jsx)(L,{uri:t.uri,defaultSortOption:E.ADDED_AT,children:(0,b.jsx)(f.s,{uri:t.uri,children:(0,b.jsx)(pr,{metadata:t,canSort:e.canSortTracksAndEpisodes&&t.totalLength>0})})}):(0,b.jsx)(A.LoadingPage,{hasError:!1,errorMessage:s.Ru.get("error.not_found.title.page"),loadOffline:e.canModifyOffline})}));const gr=(0,a.memo)((function(){return(0,o.NC)(q.ucV)?(0,b.jsx)(ur,{}):(0,b.jsx)(fr,{})}))},60255:(e,t,r)=>{function n(e,t){return{uri:e,playlistQueryOptions:t}}r.d(t,{A:()=>n})},91488:(e,t,r)=>{r.d(t,{A:()=>n});const n={Heading:"playlist-playlist-heading",HTMLDescription:"playlist-playlist-playlistDescription",List:"playlist-playlist-list",ListItem:"playlist-playlist-listItem",Paragraph:"playlist-playlist-paragraph"}}}]);
//# sourceMappingURL=xpui-routes-collection-episodes.js.map