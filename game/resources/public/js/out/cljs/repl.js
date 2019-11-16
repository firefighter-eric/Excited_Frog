// Compiled by ClojureScript 1.10.312 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28967){
var map__28968 = p__28967;
var map__28968__$1 = ((((!((map__28968 == null)))?(((((map__28968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28968):map__28968);
var m = map__28968__$1;
var n = cljs.core.get.call(null,map__28968__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28968__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28970_28992 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28971_28993 = null;
var count__28972_28994 = (0);
var i__28973_28995 = (0);
while(true){
if((i__28973_28995 < count__28972_28994)){
var f_28996 = cljs.core._nth.call(null,chunk__28971_28993,i__28973_28995);
cljs.core.println.call(null,"  ",f_28996);


var G__28997 = seq__28970_28992;
var G__28998 = chunk__28971_28993;
var G__28999 = count__28972_28994;
var G__29000 = (i__28973_28995 + (1));
seq__28970_28992 = G__28997;
chunk__28971_28993 = G__28998;
count__28972_28994 = G__28999;
i__28973_28995 = G__29000;
continue;
} else {
var temp__5457__auto___29001 = cljs.core.seq.call(null,seq__28970_28992);
if(temp__5457__auto___29001){
var seq__28970_29002__$1 = temp__5457__auto___29001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28970_29002__$1)){
var c__4337__auto___29003 = cljs.core.chunk_first.call(null,seq__28970_29002__$1);
var G__29004 = cljs.core.chunk_rest.call(null,seq__28970_29002__$1);
var G__29005 = c__4337__auto___29003;
var G__29006 = cljs.core.count.call(null,c__4337__auto___29003);
var G__29007 = (0);
seq__28970_28992 = G__29004;
chunk__28971_28993 = G__29005;
count__28972_28994 = G__29006;
i__28973_28995 = G__29007;
continue;
} else {
var f_29008 = cljs.core.first.call(null,seq__28970_29002__$1);
cljs.core.println.call(null,"  ",f_29008);


var G__29009 = cljs.core.next.call(null,seq__28970_29002__$1);
var G__29010 = null;
var G__29011 = (0);
var G__29012 = (0);
seq__28970_28992 = G__29009;
chunk__28971_28993 = G__29010;
count__28972_28994 = G__29011;
i__28973_28995 = G__29012;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29013 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3936__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29013);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29013)))?cljs.core.second.call(null,arglists_29013):arglists_29013));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28974_29014 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28975_29015 = null;
var count__28976_29016 = (0);
var i__28977_29017 = (0);
while(true){
if((i__28977_29017 < count__28976_29016)){
var vec__28978_29018 = cljs.core._nth.call(null,chunk__28975_29015,i__28977_29017);
var name_29019 = cljs.core.nth.call(null,vec__28978_29018,(0),null);
var map__28981_29020 = cljs.core.nth.call(null,vec__28978_29018,(1),null);
var map__28981_29021__$1 = ((((!((map__28981_29020 == null)))?(((((map__28981_29020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28981_29020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28981_29020):map__28981_29020);
var doc_29022 = cljs.core.get.call(null,map__28981_29021__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29023 = cljs.core.get.call(null,map__28981_29021__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29019);

cljs.core.println.call(null," ",arglists_29023);

if(cljs.core.truth_(doc_29022)){
cljs.core.println.call(null," ",doc_29022);
} else {
}


var G__29024 = seq__28974_29014;
var G__29025 = chunk__28975_29015;
var G__29026 = count__28976_29016;
var G__29027 = (i__28977_29017 + (1));
seq__28974_29014 = G__29024;
chunk__28975_29015 = G__29025;
count__28976_29016 = G__29026;
i__28977_29017 = G__29027;
continue;
} else {
var temp__5457__auto___29028 = cljs.core.seq.call(null,seq__28974_29014);
if(temp__5457__auto___29028){
var seq__28974_29029__$1 = temp__5457__auto___29028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28974_29029__$1)){
var c__4337__auto___29030 = cljs.core.chunk_first.call(null,seq__28974_29029__$1);
var G__29031 = cljs.core.chunk_rest.call(null,seq__28974_29029__$1);
var G__29032 = c__4337__auto___29030;
var G__29033 = cljs.core.count.call(null,c__4337__auto___29030);
var G__29034 = (0);
seq__28974_29014 = G__29031;
chunk__28975_29015 = G__29032;
count__28976_29016 = G__29033;
i__28977_29017 = G__29034;
continue;
} else {
var vec__28983_29035 = cljs.core.first.call(null,seq__28974_29029__$1);
var name_29036 = cljs.core.nth.call(null,vec__28983_29035,(0),null);
var map__28986_29037 = cljs.core.nth.call(null,vec__28983_29035,(1),null);
var map__28986_29038__$1 = ((((!((map__28986_29037 == null)))?(((((map__28986_29037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28986_29037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28986_29037):map__28986_29037);
var doc_29039 = cljs.core.get.call(null,map__28986_29038__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29040 = cljs.core.get.call(null,map__28986_29038__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29036);

cljs.core.println.call(null," ",arglists_29040);

if(cljs.core.truth_(doc_29039)){
cljs.core.println.call(null," ",doc_29039);
} else {
}


var G__29041 = cljs.core.next.call(null,seq__28974_29029__$1);
var G__29042 = null;
var G__29043 = (0);
var G__29044 = (0);
seq__28974_29014 = G__29041;
chunk__28975_29015 = G__29042;
count__28976_29016 = G__29043;
i__28977_29017 = G__29044;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__28988 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28989 = null;
var count__28990 = (0);
var i__28991 = (0);
while(true){
if((i__28991 < count__28990)){
var role = cljs.core._nth.call(null,chunk__28989,i__28991);
var temp__5457__auto___29045__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29045__$1)){
var spec_29046 = temp__5457__auto___29045__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29046));
} else {
}


var G__29047 = seq__28988;
var G__29048 = chunk__28989;
var G__29049 = count__28990;
var G__29050 = (i__28991 + (1));
seq__28988 = G__29047;
chunk__28989 = G__29048;
count__28990 = G__29049;
i__28991 = G__29050;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__28988);
if(temp__5457__auto____$1){
var seq__28988__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28988__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__28988__$1);
var G__29051 = cljs.core.chunk_rest.call(null,seq__28988__$1);
var G__29052 = c__4337__auto__;
var G__29053 = cljs.core.count.call(null,c__4337__auto__);
var G__29054 = (0);
seq__28988 = G__29051;
chunk__28989 = G__29052;
count__28990 = G__29053;
i__28991 = G__29054;
continue;
} else {
var role = cljs.core.first.call(null,seq__28988__$1);
var temp__5457__auto___29055__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29055__$2)){
var spec_29056 = temp__5457__auto___29055__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29056));
} else {
}


var G__29057 = cljs.core.next.call(null,seq__28988__$1);
var G__29058 = null;
var G__29059 = (0);
var G__29060 = (0);
seq__28988 = G__29057;
chunk__28989 = G__29058;
count__28990 = G__29059;
i__28991 = G__29060;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1573409132319
