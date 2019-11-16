// Compiled by ClojureScript 1.10.312 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3936__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3936__auto__){
return or__3936__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3936__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var or__3936__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3936__auto____$1)){
return or__3936__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27493_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27493_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27494 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27495 = null;
var count__27496 = (0);
var i__27497 = (0);
while(true){
if((i__27497 < count__27496)){
var n = cljs.core._nth.call(null,chunk__27495,i__27497);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27498 = seq__27494;
var G__27499 = chunk__27495;
var G__27500 = count__27496;
var G__27501 = (i__27497 + (1));
seq__27494 = G__27498;
chunk__27495 = G__27499;
count__27496 = G__27500;
i__27497 = G__27501;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27494);
if(temp__5457__auto__){
var seq__27494__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27494__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__27494__$1);
var G__27502 = cljs.core.chunk_rest.call(null,seq__27494__$1);
var G__27503 = c__4337__auto__;
var G__27504 = cljs.core.count.call(null,c__4337__auto__);
var G__27505 = (0);
seq__27494 = G__27502;
chunk__27495 = G__27503;
count__27496 = G__27504;
i__27497 = G__27505;
continue;
} else {
var n = cljs.core.first.call(null,seq__27494__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27506 = cljs.core.next.call(null,seq__27494__$1);
var G__27507 = null;
var G__27508 = (0);
var G__27509 = (0);
seq__27494 = G__27506;
chunk__27495 = G__27507;
count__27496 = G__27508;
i__27497 = G__27509;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__27510){
var vec__27511 = p__27510;
var _ = cljs.core.nth.call(null,vec__27511,(0),null);
var v = cljs.core.nth.call(null,vec__27511,(1),null);
var and__3925__auto__ = v;
if(cljs.core.truth_(and__3925__auto__)){
return v.call(null,dep);
} else {
return and__3925__auto__;
}
}),cljs.core.filter.call(null,(function (p__27514){
var vec__27515 = p__27514;
var k = cljs.core.nth.call(null,vec__27515,(0),null);
var v = cljs.core.nth.call(null,vec__27515,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27527_27535 = cljs.core.seq.call(null,deps);
var chunk__27528_27536 = null;
var count__27529_27537 = (0);
var i__27530_27538 = (0);
while(true){
if((i__27530_27538 < count__27529_27537)){
var dep_27539 = cljs.core._nth.call(null,chunk__27528_27536,i__27530_27538);
if(cljs.core.truth_((function (){var and__3925__auto__ = dep_27539;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27539));
} else {
return and__3925__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27539,(depth + (1)),state);
} else {
}


var G__27540 = seq__27527_27535;
var G__27541 = chunk__27528_27536;
var G__27542 = count__27529_27537;
var G__27543 = (i__27530_27538 + (1));
seq__27527_27535 = G__27540;
chunk__27528_27536 = G__27541;
count__27529_27537 = G__27542;
i__27530_27538 = G__27543;
continue;
} else {
var temp__5457__auto___27544 = cljs.core.seq.call(null,seq__27527_27535);
if(temp__5457__auto___27544){
var seq__27527_27545__$1 = temp__5457__auto___27544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27527_27545__$1)){
var c__4337__auto___27546 = cljs.core.chunk_first.call(null,seq__27527_27545__$1);
var G__27547 = cljs.core.chunk_rest.call(null,seq__27527_27545__$1);
var G__27548 = c__4337__auto___27546;
var G__27549 = cljs.core.count.call(null,c__4337__auto___27546);
var G__27550 = (0);
seq__27527_27535 = G__27547;
chunk__27528_27536 = G__27548;
count__27529_27537 = G__27549;
i__27530_27538 = G__27550;
continue;
} else {
var dep_27551 = cljs.core.first.call(null,seq__27527_27545__$1);
if(cljs.core.truth_((function (){var and__3925__auto__ = dep_27551;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27551));
} else {
return and__3925__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27551,(depth + (1)),state);
} else {
}


var G__27552 = cljs.core.next.call(null,seq__27527_27545__$1);
var G__27553 = null;
var G__27554 = (0);
var G__27555 = (0);
seq__27527_27535 = G__27552;
chunk__27528_27536 = G__27553;
count__27529_27537 = G__27554;
i__27530_27538 = G__27555;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27531){
var vec__27532 = p__27531;
var seq__27533 = cljs.core.seq.call(null,vec__27532);
var first__27534 = cljs.core.first.call(null,seq__27533);
var seq__27533__$1 = cljs.core.next.call(null,seq__27533);
var x = first__27534;
var xs = seq__27533__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27532,seq__27533,first__27534,seq__27533__$1,x,xs,get_deps__$1){
return (function (p1__27518_SHARP_){
return clojure.set.difference.call(null,p1__27518_SHARP_,x);
});})(vec__27532,seq__27533,first__27534,seq__27533__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27556 = cljs.core.seq.call(null,provides);
var chunk__27557 = null;
var count__27558 = (0);
var i__27559 = (0);
while(true){
if((i__27559 < count__27558)){
var prov = cljs.core._nth.call(null,chunk__27557,i__27559);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27560_27568 = cljs.core.seq.call(null,requires);
var chunk__27561_27569 = null;
var count__27562_27570 = (0);
var i__27563_27571 = (0);
while(true){
if((i__27563_27571 < count__27562_27570)){
var req_27572 = cljs.core._nth.call(null,chunk__27561_27569,i__27563_27571);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27572,prov);


var G__27573 = seq__27560_27568;
var G__27574 = chunk__27561_27569;
var G__27575 = count__27562_27570;
var G__27576 = (i__27563_27571 + (1));
seq__27560_27568 = G__27573;
chunk__27561_27569 = G__27574;
count__27562_27570 = G__27575;
i__27563_27571 = G__27576;
continue;
} else {
var temp__5457__auto___27577 = cljs.core.seq.call(null,seq__27560_27568);
if(temp__5457__auto___27577){
var seq__27560_27578__$1 = temp__5457__auto___27577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27560_27578__$1)){
var c__4337__auto___27579 = cljs.core.chunk_first.call(null,seq__27560_27578__$1);
var G__27580 = cljs.core.chunk_rest.call(null,seq__27560_27578__$1);
var G__27581 = c__4337__auto___27579;
var G__27582 = cljs.core.count.call(null,c__4337__auto___27579);
var G__27583 = (0);
seq__27560_27568 = G__27580;
chunk__27561_27569 = G__27581;
count__27562_27570 = G__27582;
i__27563_27571 = G__27583;
continue;
} else {
var req_27584 = cljs.core.first.call(null,seq__27560_27578__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27584,prov);


var G__27585 = cljs.core.next.call(null,seq__27560_27578__$1);
var G__27586 = null;
var G__27587 = (0);
var G__27588 = (0);
seq__27560_27568 = G__27585;
chunk__27561_27569 = G__27586;
count__27562_27570 = G__27587;
i__27563_27571 = G__27588;
continue;
}
} else {
}
}
break;
}


var G__27589 = seq__27556;
var G__27590 = chunk__27557;
var G__27591 = count__27558;
var G__27592 = (i__27559 + (1));
seq__27556 = G__27589;
chunk__27557 = G__27590;
count__27558 = G__27591;
i__27559 = G__27592;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27556);
if(temp__5457__auto__){
var seq__27556__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27556__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__27556__$1);
var G__27593 = cljs.core.chunk_rest.call(null,seq__27556__$1);
var G__27594 = c__4337__auto__;
var G__27595 = cljs.core.count.call(null,c__4337__auto__);
var G__27596 = (0);
seq__27556 = G__27593;
chunk__27557 = G__27594;
count__27558 = G__27595;
i__27559 = G__27596;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27556__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27564_27597 = cljs.core.seq.call(null,requires);
var chunk__27565_27598 = null;
var count__27566_27599 = (0);
var i__27567_27600 = (0);
while(true){
if((i__27567_27600 < count__27566_27599)){
var req_27601 = cljs.core._nth.call(null,chunk__27565_27598,i__27567_27600);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27601,prov);


var G__27602 = seq__27564_27597;
var G__27603 = chunk__27565_27598;
var G__27604 = count__27566_27599;
var G__27605 = (i__27567_27600 + (1));
seq__27564_27597 = G__27602;
chunk__27565_27598 = G__27603;
count__27566_27599 = G__27604;
i__27567_27600 = G__27605;
continue;
} else {
var temp__5457__auto___27606__$1 = cljs.core.seq.call(null,seq__27564_27597);
if(temp__5457__auto___27606__$1){
var seq__27564_27607__$1 = temp__5457__auto___27606__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27564_27607__$1)){
var c__4337__auto___27608 = cljs.core.chunk_first.call(null,seq__27564_27607__$1);
var G__27609 = cljs.core.chunk_rest.call(null,seq__27564_27607__$1);
var G__27610 = c__4337__auto___27608;
var G__27611 = cljs.core.count.call(null,c__4337__auto___27608);
var G__27612 = (0);
seq__27564_27597 = G__27609;
chunk__27565_27598 = G__27610;
count__27566_27599 = G__27611;
i__27567_27600 = G__27612;
continue;
} else {
var req_27613 = cljs.core.first.call(null,seq__27564_27607__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27613,prov);


var G__27614 = cljs.core.next.call(null,seq__27564_27607__$1);
var G__27615 = null;
var G__27616 = (0);
var G__27617 = (0);
seq__27564_27597 = G__27614;
chunk__27565_27598 = G__27615;
count__27566_27599 = G__27616;
i__27567_27600 = G__27617;
continue;
}
} else {
}
}
break;
}


var G__27618 = cljs.core.next.call(null,seq__27556__$1);
var G__27619 = null;
var G__27620 = (0);
var G__27621 = (0);
seq__27556 = G__27618;
chunk__27557 = G__27619;
count__27558 = G__27620;
i__27559 = G__27621;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27622_27626 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27623_27627 = null;
var count__27624_27628 = (0);
var i__27625_27629 = (0);
while(true){
if((i__27625_27629 < count__27624_27628)){
var ns_27630 = cljs.core._nth.call(null,chunk__27623_27627,i__27625_27629);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27630);


var G__27631 = seq__27622_27626;
var G__27632 = chunk__27623_27627;
var G__27633 = count__27624_27628;
var G__27634 = (i__27625_27629 + (1));
seq__27622_27626 = G__27631;
chunk__27623_27627 = G__27632;
count__27624_27628 = G__27633;
i__27625_27629 = G__27634;
continue;
} else {
var temp__5457__auto___27635 = cljs.core.seq.call(null,seq__27622_27626);
if(temp__5457__auto___27635){
var seq__27622_27636__$1 = temp__5457__auto___27635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27622_27636__$1)){
var c__4337__auto___27637 = cljs.core.chunk_first.call(null,seq__27622_27636__$1);
var G__27638 = cljs.core.chunk_rest.call(null,seq__27622_27636__$1);
var G__27639 = c__4337__auto___27637;
var G__27640 = cljs.core.count.call(null,c__4337__auto___27637);
var G__27641 = (0);
seq__27622_27626 = G__27638;
chunk__27623_27627 = G__27639;
count__27624_27628 = G__27640;
i__27625_27629 = G__27641;
continue;
} else {
var ns_27642 = cljs.core.first.call(null,seq__27622_27636__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27642);


var G__27643 = cljs.core.next.call(null,seq__27622_27636__$1);
var G__27644 = null;
var G__27645 = (0);
var G__27646 = (0);
seq__27622_27626 = G__27643;
chunk__27623_27627 = G__27644;
count__27624_27628 = G__27645;
i__27625_27629 = G__27646;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3936__auto__ = goog.require__;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27647__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27648__i = 0, G__27648__a = new Array(arguments.length -  0);
while (G__27648__i < G__27648__a.length) {G__27648__a[G__27648__i] = arguments[G__27648__i + 0]; ++G__27648__i;}
  args = new cljs.core.IndexedSeq(G__27648__a,0,null);
} 
return G__27647__delegate.call(this,args);};
G__27647.cljs$lang$maxFixedArity = 0;
G__27647.cljs$lang$applyTo = (function (arglist__27649){
var args = cljs.core.seq(arglist__27649);
return G__27647__delegate(args);
});
G__27647.cljs$core$IFn$_invoke$arity$variadic = G__27647__delegate;
return G__27647;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27650_SHARP_,p2__27651_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27650_SHARP_)].join('')),p2__27651_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27652_SHARP_,p2__27653_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27652_SHARP_)].join(''),p2__27653_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27654 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27654.addCallback(((function (G__27654){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27654))
);

G__27654.addErrback(((function (G__27654){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27654))
);

return G__27654;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27655){if((e27655 instanceof Error)){
var e = e27655;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27655;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27656){if((e27656 instanceof Error)){
var e = e27656;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27656;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27657 = cljs.core._EQ_;
var expr__27658 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27657.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27658))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27657.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27658))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27657.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27658))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27657,expr__27658){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27657,expr__27658))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27660,callback){
var map__27661 = p__27660;
var map__27661__$1 = ((((!((map__27661 == null)))?(((((map__27661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27661):map__27661);
var file_msg = map__27661__$1;
var request_url = cljs.core.get.call(null,map__27661__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3936__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27661,map__27661__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27661,map__27661__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto__){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto__){
return (function (state_27699){
var state_val_27700 = (state_27699[(1)]);
if((state_val_27700 === (7))){
var inst_27695 = (state_27699[(2)]);
var state_27699__$1 = state_27699;
var statearr_27701_27727 = state_27699__$1;
(statearr_27701_27727[(2)] = inst_27695);

(statearr_27701_27727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27700 === (1))){
var state_27699__$1 = state_27699;
var statearr_27702_27728 = state_27699__$1;
(statearr_27702_27728[(2)] = null);

(statearr_27702_27728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27700 === (4))){
var inst_27665 = (state_27699[(7)]);
var inst_27665__$1 = (state_27699[(2)]);
var state_27699__$1 = (function (){var statearr_27703 = state_27699;
(statearr_27703[(7)] = inst_27665__$1);

return statearr_27703;
})();
if(cljs.core.truth_(inst_27665__$1)){
var statearr_27704_27729 = state_27699__$1;
(statearr_27704_27729[(1)] = (5));

} else {
var statearr_27705_27730 = state_27699__$1;
(statearr_27705_27730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27700 === (15))){
var inst_27678 = (state_27699[(8)]);
var inst_27680 = (state_27699[(9)]);
var inst_27682 = inst_27680.call(null,inst_27678);
var state_27699__$1 = state_27699;
var statearr_27706_27731 = state_27699__$1;
(statearr_27706_27731[(2)] = inst_27682);

(statearr_27706_27731[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27700 === (13))){
var inst_27689 = (state_27699[(2)]);
var state_27699__$1 = state_27699;
var statearr_27707_27732 = state_27699__$1;
(statearr_27707_27732[(2)] = inst_27689);

(statearr_27707_27732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27700 === (6))){
var state_27699__$1 = state_27699;
var statearr_27708_27733 = state_27699__$1;
(statearr_27708_27733[(2)] = null);

(statearr_27708_27733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27700 === (17))){
var inst_27686 = (state_27699[(2)]);
var state_27699__$1 = state_27699;
var statearr_27709_27734 = state_27699__$1;
(statearr_27709_27734[(2)] = inst_27686);

(statearr_27709_27734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27700 === (3))){
var inst_27697 = (state_27699[(2)]);
var state_27699__$1 = state_27699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27699__$1,inst_27697);
} else {
if((state_val_27700 === (12))){
var state_27699__$1 = state_27699;
var statearr_27710_27735 = state_27699__$1;
(statearr_27710_27735[(2)] = null);

(statearr_27710_27735[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27700 === (2))){
var state_27699__$1 = state_27699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27699__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27700 === (11))){
var inst_27670 = (state_27699[(10)]);
var inst_27676 = figwheel.client.file_reloading.blocking_load.call(null,inst_27670);
var state_27699__$1 = state_27699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27699__$1,(14),inst_27676);
} else {
if((state_val_27700 === (9))){
var inst_27670 = (state_27699[(10)]);
var state_27699__$1 = state_27699;
if(cljs.core.truth_(inst_27670)){
var statearr_27711_27736 = state_27699__$1;
(statearr_27711_27736[(1)] = (11));

} else {
var statearr_27712_27737 = state_27699__$1;
(statearr_27712_27737[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27700 === (5))){
var inst_27665 = (state_27699[(7)]);
var inst_27671 = (state_27699[(11)]);
var inst_27670 = cljs.core.nth.call(null,inst_27665,(0),null);
var inst_27671__$1 = cljs.core.nth.call(null,inst_27665,(1),null);
var state_27699__$1 = (function (){var statearr_27713 = state_27699;
(statearr_27713[(10)] = inst_27670);

(statearr_27713[(11)] = inst_27671__$1);

return statearr_27713;
})();
if(cljs.core.truth_(inst_27671__$1)){
var statearr_27714_27738 = state_27699__$1;
(statearr_27714_27738[(1)] = (8));

} else {
var statearr_27715_27739 = state_27699__$1;
(statearr_27715_27739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27700 === (14))){
var inst_27670 = (state_27699[(10)]);
var inst_27680 = (state_27699[(9)]);
var inst_27678 = (state_27699[(2)]);
var inst_27679 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27680__$1 = cljs.core.get.call(null,inst_27679,inst_27670);
var state_27699__$1 = (function (){var statearr_27716 = state_27699;
(statearr_27716[(8)] = inst_27678);

(statearr_27716[(9)] = inst_27680__$1);

return statearr_27716;
})();
if(cljs.core.truth_(inst_27680__$1)){
var statearr_27717_27740 = state_27699__$1;
(statearr_27717_27740[(1)] = (15));

} else {
var statearr_27718_27741 = state_27699__$1;
(statearr_27718_27741[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27700 === (16))){
var inst_27678 = (state_27699[(8)]);
var inst_27684 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27678);
var state_27699__$1 = state_27699;
var statearr_27719_27742 = state_27699__$1;
(statearr_27719_27742[(2)] = inst_27684);

(statearr_27719_27742[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27700 === (10))){
var inst_27691 = (state_27699[(2)]);
var state_27699__$1 = (function (){var statearr_27720 = state_27699;
(statearr_27720[(12)] = inst_27691);

return statearr_27720;
})();
var statearr_27721_27743 = state_27699__$1;
(statearr_27721_27743[(2)] = null);

(statearr_27721_27743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27700 === (8))){
var inst_27671 = (state_27699[(11)]);
var inst_27673 = eval(inst_27671);
var state_27699__$1 = state_27699;
var statearr_27722_27744 = state_27699__$1;
(statearr_27722_27744[(2)] = inst_27673);

(statearr_27722_27744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23161__auto__))
;
return ((function (switch__23071__auto__,c__23161__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23072__auto__ = null;
var figwheel$client$file_reloading$state_machine__23072__auto____0 = (function (){
var statearr_27723 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27723[(0)] = figwheel$client$file_reloading$state_machine__23072__auto__);

(statearr_27723[(1)] = (1));

return statearr_27723;
});
var figwheel$client$file_reloading$state_machine__23072__auto____1 = (function (state_27699){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_27699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e27724){if((e27724 instanceof Object)){
var ex__23075__auto__ = e27724;
var statearr_27725_27745 = state_27699;
(statearr_27725_27745[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27746 = state_27699;
state_27699 = G__27746;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23072__auto__ = function(state_27699){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23072__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23072__auto____1.call(this,state_27699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23072__auto____0;
figwheel$client$file_reloading$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23072__auto____1;
return figwheel$client$file_reloading$state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto__))
})();
var state__23163__auto__ = (function (){var statearr_27726 = f__23162__auto__.call(null);
(statearr_27726[(6)] = c__23161__auto__);

return statearr_27726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto__))
);

return c__23161__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27748 = arguments.length;
switch (G__27748) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27750,callback){
var map__27751 = p__27750;
var map__27751__$1 = ((((!((map__27751 == null)))?(((((map__27751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27751):map__27751);
var file_msg = map__27751__$1;
var namespace = cljs.core.get.call(null,map__27751__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27751,map__27751__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27751,map__27751__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27753){
var map__27754 = p__27753;
var map__27754__$1 = ((((!((map__27754 == null)))?(((((map__27754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27754):map__27754);
var file_msg = map__27754__$1;
var namespace = cljs.core.get.call(null,map__27754__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27756){
var map__27757 = p__27756;
var map__27757__$1 = ((((!((map__27757 == null)))?(((((map__27757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27757):map__27757);
var file_msg = map__27757__$1;
var namespace = cljs.core.get.call(null,map__27757__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3925__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3925__auto__){
var or__3936__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var or__3936__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3936__auto____$1)){
return or__3936__auto____$1;
} else {
var or__3936__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3936__auto____$2)){
return or__3936__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3925__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27759,callback){
var map__27760 = p__27759;
var map__27760__$1 = ((((!((map__27760 == null)))?(((((map__27760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27760):map__27760);
var file_msg = map__27760__$1;
var request_url = cljs.core.get.call(null,map__27760__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27760__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23161__auto___27810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto___27810,out){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto___27810,out){
return (function (state_27795){
var state_val_27796 = (state_27795[(1)]);
if((state_val_27796 === (1))){
var inst_27769 = cljs.core.seq.call(null,files);
var inst_27770 = cljs.core.first.call(null,inst_27769);
var inst_27771 = cljs.core.next.call(null,inst_27769);
var inst_27772 = files;
var state_27795__$1 = (function (){var statearr_27797 = state_27795;
(statearr_27797[(7)] = inst_27770);

(statearr_27797[(8)] = inst_27771);

(statearr_27797[(9)] = inst_27772);

return statearr_27797;
})();
var statearr_27798_27811 = state_27795__$1;
(statearr_27798_27811[(2)] = null);

(statearr_27798_27811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (2))){
var inst_27778 = (state_27795[(10)]);
var inst_27772 = (state_27795[(9)]);
var inst_27777 = cljs.core.seq.call(null,inst_27772);
var inst_27778__$1 = cljs.core.first.call(null,inst_27777);
var inst_27779 = cljs.core.next.call(null,inst_27777);
var inst_27780 = (inst_27778__$1 == null);
var inst_27781 = cljs.core.not.call(null,inst_27780);
var state_27795__$1 = (function (){var statearr_27799 = state_27795;
(statearr_27799[(10)] = inst_27778__$1);

(statearr_27799[(11)] = inst_27779);

return statearr_27799;
})();
if(inst_27781){
var statearr_27800_27812 = state_27795__$1;
(statearr_27800_27812[(1)] = (4));

} else {
var statearr_27801_27813 = state_27795__$1;
(statearr_27801_27813[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (3))){
var inst_27793 = (state_27795[(2)]);
var state_27795__$1 = state_27795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27795__$1,inst_27793);
} else {
if((state_val_27796 === (4))){
var inst_27778 = (state_27795[(10)]);
var inst_27783 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27778);
var state_27795__$1 = state_27795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27795__$1,(7),inst_27783);
} else {
if((state_val_27796 === (5))){
var inst_27789 = cljs.core.async.close_BANG_.call(null,out);
var state_27795__$1 = state_27795;
var statearr_27802_27814 = state_27795__$1;
(statearr_27802_27814[(2)] = inst_27789);

(statearr_27802_27814[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (6))){
var inst_27791 = (state_27795[(2)]);
var state_27795__$1 = state_27795;
var statearr_27803_27815 = state_27795__$1;
(statearr_27803_27815[(2)] = inst_27791);

(statearr_27803_27815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (7))){
var inst_27779 = (state_27795[(11)]);
var inst_27785 = (state_27795[(2)]);
var inst_27786 = cljs.core.async.put_BANG_.call(null,out,inst_27785);
var inst_27772 = inst_27779;
var state_27795__$1 = (function (){var statearr_27804 = state_27795;
(statearr_27804[(12)] = inst_27786);

(statearr_27804[(9)] = inst_27772);

return statearr_27804;
})();
var statearr_27805_27816 = state_27795__$1;
(statearr_27805_27816[(2)] = null);

(statearr_27805_27816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23161__auto___27810,out))
;
return ((function (switch__23071__auto__,c__23161__auto___27810,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23072__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23072__auto____0 = (function (){
var statearr_27806 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27806[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23072__auto__);

(statearr_27806[(1)] = (1));

return statearr_27806;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23072__auto____1 = (function (state_27795){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_27795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e27807){if((e27807 instanceof Object)){
var ex__23075__auto__ = e27807;
var statearr_27808_27817 = state_27795;
(statearr_27808_27817[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27818 = state_27795;
state_27795 = G__27818;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23072__auto__ = function(state_27795){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23072__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23072__auto____1.call(this,state_27795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23072__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23072__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto___27810,out))
})();
var state__23163__auto__ = (function (){var statearr_27809 = f__23162__auto__.call(null);
(statearr_27809[(6)] = c__23161__auto___27810);

return statearr_27809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto___27810,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27819,opts){
var map__27820 = p__27819;
var map__27820__$1 = ((((!((map__27820 == null)))?(((((map__27820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27820):map__27820);
var eval_body = cljs.core.get.call(null,map__27820__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27820__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3925__auto__ = eval_body;
if(cljs.core.truth_(and__3925__auto__)){
return typeof eval_body === 'string';
} else {
return and__3925__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27822){var e = e27822;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27823_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27823_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27824){
var vec__27825 = p__27824;
var k = cljs.core.nth.call(null,vec__27825,(0),null);
var v = cljs.core.nth.call(null,vec__27825,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27828){
var vec__27829 = p__27828;
var k = cljs.core.nth.call(null,vec__27829,(0),null);
var v = cljs.core.nth.call(null,vec__27829,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27835,p__27836){
var map__27837 = p__27835;
var map__27837__$1 = ((((!((map__27837 == null)))?(((((map__27837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27837):map__27837);
var opts = map__27837__$1;
var before_jsload = cljs.core.get.call(null,map__27837__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27837__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27837__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27838 = p__27836;
var map__27838__$1 = ((((!((map__27838 == null)))?(((((map__27838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27838):map__27838);
var msg = map__27838__$1;
var files = cljs.core.get.call(null,map__27838__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27838__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27838__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto__,map__27837,map__27837__$1,opts,before_jsload,on_jsload,reload_dependents,map__27838,map__27838__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto__,map__27837,map__27837__$1,opts,before_jsload,on_jsload,reload_dependents,map__27838,map__27838__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27992){
var state_val_27993 = (state_27992[(1)]);
if((state_val_27993 === (7))){
var inst_27852 = (state_27992[(7)]);
var inst_27853 = (state_27992[(8)]);
var inst_27854 = (state_27992[(9)]);
var inst_27855 = (state_27992[(10)]);
var inst_27860 = cljs.core._nth.call(null,inst_27853,inst_27855);
var inst_27861 = figwheel.client.file_reloading.eval_body.call(null,inst_27860,opts);
var inst_27862 = (inst_27855 + (1));
var tmp27994 = inst_27852;
var tmp27995 = inst_27853;
var tmp27996 = inst_27854;
var inst_27852__$1 = tmp27994;
var inst_27853__$1 = tmp27995;
var inst_27854__$1 = tmp27996;
var inst_27855__$1 = inst_27862;
var state_27992__$1 = (function (){var statearr_27997 = state_27992;
(statearr_27997[(7)] = inst_27852__$1);

(statearr_27997[(8)] = inst_27853__$1);

(statearr_27997[(9)] = inst_27854__$1);

(statearr_27997[(10)] = inst_27855__$1);

(statearr_27997[(11)] = inst_27861);

return statearr_27997;
})();
var statearr_27998_28081 = state_27992__$1;
(statearr_27998_28081[(2)] = null);

(statearr_27998_28081[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (20))){
var inst_27895 = (state_27992[(12)]);
var inst_27903 = figwheel.client.file_reloading.sort_files.call(null,inst_27895);
var state_27992__$1 = state_27992;
var statearr_27999_28082 = state_27992__$1;
(statearr_27999_28082[(2)] = inst_27903);

(statearr_27999_28082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (27))){
var state_27992__$1 = state_27992;
var statearr_28000_28083 = state_27992__$1;
(statearr_28000_28083[(2)] = null);

(statearr_28000_28083[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (1))){
var inst_27844 = (state_27992[(13)]);
var inst_27841 = before_jsload.call(null,files);
var inst_27842 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27843 = (function (){return ((function (inst_27844,inst_27841,inst_27842,state_val_27993,c__23161__auto__,map__27837,map__27837__$1,opts,before_jsload,on_jsload,reload_dependents,map__27838,map__27838__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27832_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27832_SHARP_);
});
;})(inst_27844,inst_27841,inst_27842,state_val_27993,c__23161__auto__,map__27837,map__27837__$1,opts,before_jsload,on_jsload,reload_dependents,map__27838,map__27838__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27844__$1 = cljs.core.filter.call(null,inst_27843,files);
var inst_27845 = cljs.core.not_empty.call(null,inst_27844__$1);
var state_27992__$1 = (function (){var statearr_28001 = state_27992;
(statearr_28001[(14)] = inst_27841);

(statearr_28001[(13)] = inst_27844__$1);

(statearr_28001[(15)] = inst_27842);

return statearr_28001;
})();
if(cljs.core.truth_(inst_27845)){
var statearr_28002_28084 = state_27992__$1;
(statearr_28002_28084[(1)] = (2));

} else {
var statearr_28003_28085 = state_27992__$1;
(statearr_28003_28085[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (24))){
var state_27992__$1 = state_27992;
var statearr_28004_28086 = state_27992__$1;
(statearr_28004_28086[(2)] = null);

(statearr_28004_28086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (39))){
var inst_27945 = (state_27992[(16)]);
var state_27992__$1 = state_27992;
var statearr_28005_28087 = state_27992__$1;
(statearr_28005_28087[(2)] = inst_27945);

(statearr_28005_28087[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (46))){
var inst_27987 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
var statearr_28006_28088 = state_27992__$1;
(statearr_28006_28088[(2)] = inst_27987);

(statearr_28006_28088[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (4))){
var inst_27889 = (state_27992[(2)]);
var inst_27890 = cljs.core.List.EMPTY;
var inst_27891 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27890);
var inst_27892 = (function (){return ((function (inst_27889,inst_27890,inst_27891,state_val_27993,c__23161__auto__,map__27837,map__27837__$1,opts,before_jsload,on_jsload,reload_dependents,map__27838,map__27838__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27833_SHARP_){
var and__3925__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27833_SHARP_);
if(cljs.core.truth_(and__3925__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27833_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27833_SHARP_))));
} else {
return and__3925__auto__;
}
});
;})(inst_27889,inst_27890,inst_27891,state_val_27993,c__23161__auto__,map__27837,map__27837__$1,opts,before_jsload,on_jsload,reload_dependents,map__27838,map__27838__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27893 = cljs.core.filter.call(null,inst_27892,files);
var inst_27894 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27895 = cljs.core.concat.call(null,inst_27893,inst_27894);
var state_27992__$1 = (function (){var statearr_28007 = state_27992;
(statearr_28007[(12)] = inst_27895);

(statearr_28007[(17)] = inst_27889);

(statearr_28007[(18)] = inst_27891);

return statearr_28007;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28008_28089 = state_27992__$1;
(statearr_28008_28089[(1)] = (16));

} else {
var statearr_28009_28090 = state_27992__$1;
(statearr_28009_28090[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (15))){
var inst_27879 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
var statearr_28010_28091 = state_27992__$1;
(statearr_28010_28091[(2)] = inst_27879);

(statearr_28010_28091[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (21))){
var inst_27905 = (state_27992[(19)]);
var inst_27905__$1 = (state_27992[(2)]);
var inst_27906 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27905__$1);
var state_27992__$1 = (function (){var statearr_28011 = state_27992;
(statearr_28011[(19)] = inst_27905__$1);

return statearr_28011;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27992__$1,(22),inst_27906);
} else {
if((state_val_27993 === (31))){
var inst_27990 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27992__$1,inst_27990);
} else {
if((state_val_27993 === (32))){
var inst_27945 = (state_27992[(16)]);
var inst_27950 = inst_27945.cljs$lang$protocol_mask$partition0$;
var inst_27951 = (inst_27950 & (64));
var inst_27952 = inst_27945.cljs$core$ISeq$;
var inst_27953 = (cljs.core.PROTOCOL_SENTINEL === inst_27952);
var inst_27954 = ((inst_27951) || (inst_27953));
var state_27992__$1 = state_27992;
if(cljs.core.truth_(inst_27954)){
var statearr_28012_28092 = state_27992__$1;
(statearr_28012_28092[(1)] = (35));

} else {
var statearr_28013_28093 = state_27992__$1;
(statearr_28013_28093[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (40))){
var inst_27967 = (state_27992[(20)]);
var inst_27966 = (state_27992[(2)]);
var inst_27967__$1 = cljs.core.get.call(null,inst_27966,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27968 = cljs.core.get.call(null,inst_27966,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27969 = cljs.core.not_empty.call(null,inst_27967__$1);
var state_27992__$1 = (function (){var statearr_28014 = state_27992;
(statearr_28014[(21)] = inst_27968);

(statearr_28014[(20)] = inst_27967__$1);

return statearr_28014;
})();
if(cljs.core.truth_(inst_27969)){
var statearr_28015_28094 = state_27992__$1;
(statearr_28015_28094[(1)] = (41));

} else {
var statearr_28016_28095 = state_27992__$1;
(statearr_28016_28095[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (33))){
var state_27992__$1 = state_27992;
var statearr_28017_28096 = state_27992__$1;
(statearr_28017_28096[(2)] = false);

(statearr_28017_28096[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (13))){
var inst_27865 = (state_27992[(22)]);
var inst_27869 = cljs.core.chunk_first.call(null,inst_27865);
var inst_27870 = cljs.core.chunk_rest.call(null,inst_27865);
var inst_27871 = cljs.core.count.call(null,inst_27869);
var inst_27852 = inst_27870;
var inst_27853 = inst_27869;
var inst_27854 = inst_27871;
var inst_27855 = (0);
var state_27992__$1 = (function (){var statearr_28018 = state_27992;
(statearr_28018[(7)] = inst_27852);

(statearr_28018[(8)] = inst_27853);

(statearr_28018[(9)] = inst_27854);

(statearr_28018[(10)] = inst_27855);

return statearr_28018;
})();
var statearr_28019_28097 = state_27992__$1;
(statearr_28019_28097[(2)] = null);

(statearr_28019_28097[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (22))){
var inst_27908 = (state_27992[(23)]);
var inst_27905 = (state_27992[(19)]);
var inst_27909 = (state_27992[(24)]);
var inst_27913 = (state_27992[(25)]);
var inst_27908__$1 = (state_27992[(2)]);
var inst_27909__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27908__$1);
var inst_27910 = (function (){var all_files = inst_27905;
var res_SINGLEQUOTE_ = inst_27908__$1;
var res = inst_27909__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27908,inst_27905,inst_27909,inst_27913,inst_27908__$1,inst_27909__$1,state_val_27993,c__23161__auto__,map__27837,map__27837__$1,opts,before_jsload,on_jsload,reload_dependents,map__27838,map__27838__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27834_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27834_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27908,inst_27905,inst_27909,inst_27913,inst_27908__$1,inst_27909__$1,state_val_27993,c__23161__auto__,map__27837,map__27837__$1,opts,before_jsload,on_jsload,reload_dependents,map__27838,map__27838__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27911 = cljs.core.filter.call(null,inst_27910,inst_27908__$1);
var inst_27912 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27913__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27912);
var inst_27914 = cljs.core.not_empty.call(null,inst_27913__$1);
var state_27992__$1 = (function (){var statearr_28020 = state_27992;
(statearr_28020[(26)] = inst_27911);

(statearr_28020[(23)] = inst_27908__$1);

(statearr_28020[(24)] = inst_27909__$1);

(statearr_28020[(25)] = inst_27913__$1);

return statearr_28020;
})();
if(cljs.core.truth_(inst_27914)){
var statearr_28021_28098 = state_27992__$1;
(statearr_28021_28098[(1)] = (23));

} else {
var statearr_28022_28099 = state_27992__$1;
(statearr_28022_28099[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (36))){
var state_27992__$1 = state_27992;
var statearr_28023_28100 = state_27992__$1;
(statearr_28023_28100[(2)] = false);

(statearr_28023_28100[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (41))){
var inst_27967 = (state_27992[(20)]);
var inst_27971 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27972 = cljs.core.map.call(null,inst_27971,inst_27967);
var inst_27973 = cljs.core.pr_str.call(null,inst_27972);
var inst_27974 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27973)].join('');
var inst_27975 = figwheel.client.utils.log.call(null,inst_27974);
var state_27992__$1 = state_27992;
var statearr_28024_28101 = state_27992__$1;
(statearr_28024_28101[(2)] = inst_27975);

(statearr_28024_28101[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (43))){
var inst_27968 = (state_27992[(21)]);
var inst_27978 = (state_27992[(2)]);
var inst_27979 = cljs.core.not_empty.call(null,inst_27968);
var state_27992__$1 = (function (){var statearr_28025 = state_27992;
(statearr_28025[(27)] = inst_27978);

return statearr_28025;
})();
if(cljs.core.truth_(inst_27979)){
var statearr_28026_28102 = state_27992__$1;
(statearr_28026_28102[(1)] = (44));

} else {
var statearr_28027_28103 = state_27992__$1;
(statearr_28027_28103[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (29))){
var inst_27911 = (state_27992[(26)]);
var inst_27908 = (state_27992[(23)]);
var inst_27905 = (state_27992[(19)]);
var inst_27909 = (state_27992[(24)]);
var inst_27945 = (state_27992[(16)]);
var inst_27913 = (state_27992[(25)]);
var inst_27941 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27944 = (function (){var all_files = inst_27905;
var res_SINGLEQUOTE_ = inst_27908;
var res = inst_27909;
var files_not_loaded = inst_27911;
var dependencies_that_loaded = inst_27913;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27911,inst_27908,inst_27905,inst_27909,inst_27945,inst_27913,inst_27941,state_val_27993,c__23161__auto__,map__27837,map__27837__$1,opts,before_jsload,on_jsload,reload_dependents,map__27838,map__27838__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27943){
var map__28028 = p__27943;
var map__28028__$1 = ((((!((map__28028 == null)))?(((((map__28028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28028):map__28028);
var namespace = cljs.core.get.call(null,map__28028__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27911,inst_27908,inst_27905,inst_27909,inst_27945,inst_27913,inst_27941,state_val_27993,c__23161__auto__,map__27837,map__27837__$1,opts,before_jsload,on_jsload,reload_dependents,map__27838,map__27838__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27945__$1 = cljs.core.group_by.call(null,inst_27944,inst_27911);
var inst_27947 = (inst_27945__$1 == null);
var inst_27948 = cljs.core.not.call(null,inst_27947);
var state_27992__$1 = (function (){var statearr_28030 = state_27992;
(statearr_28030[(28)] = inst_27941);

(statearr_28030[(16)] = inst_27945__$1);

return statearr_28030;
})();
if(inst_27948){
var statearr_28031_28104 = state_27992__$1;
(statearr_28031_28104[(1)] = (32));

} else {
var statearr_28032_28105 = state_27992__$1;
(statearr_28032_28105[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (44))){
var inst_27968 = (state_27992[(21)]);
var inst_27981 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27968);
var inst_27982 = cljs.core.pr_str.call(null,inst_27981);
var inst_27983 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27982)].join('');
var inst_27984 = figwheel.client.utils.log.call(null,inst_27983);
var state_27992__$1 = state_27992;
var statearr_28033_28106 = state_27992__$1;
(statearr_28033_28106[(2)] = inst_27984);

(statearr_28033_28106[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (6))){
var inst_27886 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
var statearr_28034_28107 = state_27992__$1;
(statearr_28034_28107[(2)] = inst_27886);

(statearr_28034_28107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (28))){
var inst_27911 = (state_27992[(26)]);
var inst_27938 = (state_27992[(2)]);
var inst_27939 = cljs.core.not_empty.call(null,inst_27911);
var state_27992__$1 = (function (){var statearr_28035 = state_27992;
(statearr_28035[(29)] = inst_27938);

return statearr_28035;
})();
if(cljs.core.truth_(inst_27939)){
var statearr_28036_28108 = state_27992__$1;
(statearr_28036_28108[(1)] = (29));

} else {
var statearr_28037_28109 = state_27992__$1;
(statearr_28037_28109[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (25))){
var inst_27909 = (state_27992[(24)]);
var inst_27925 = (state_27992[(2)]);
var inst_27926 = cljs.core.not_empty.call(null,inst_27909);
var state_27992__$1 = (function (){var statearr_28038 = state_27992;
(statearr_28038[(30)] = inst_27925);

return statearr_28038;
})();
if(cljs.core.truth_(inst_27926)){
var statearr_28039_28110 = state_27992__$1;
(statearr_28039_28110[(1)] = (26));

} else {
var statearr_28040_28111 = state_27992__$1;
(statearr_28040_28111[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (34))){
var inst_27961 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
if(cljs.core.truth_(inst_27961)){
var statearr_28041_28112 = state_27992__$1;
(statearr_28041_28112[(1)] = (38));

} else {
var statearr_28042_28113 = state_27992__$1;
(statearr_28042_28113[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (17))){
var state_27992__$1 = state_27992;
var statearr_28043_28114 = state_27992__$1;
(statearr_28043_28114[(2)] = recompile_dependents);

(statearr_28043_28114[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (3))){
var state_27992__$1 = state_27992;
var statearr_28044_28115 = state_27992__$1;
(statearr_28044_28115[(2)] = null);

(statearr_28044_28115[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (12))){
var inst_27882 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
var statearr_28045_28116 = state_27992__$1;
(statearr_28045_28116[(2)] = inst_27882);

(statearr_28045_28116[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (2))){
var inst_27844 = (state_27992[(13)]);
var inst_27851 = cljs.core.seq.call(null,inst_27844);
var inst_27852 = inst_27851;
var inst_27853 = null;
var inst_27854 = (0);
var inst_27855 = (0);
var state_27992__$1 = (function (){var statearr_28046 = state_27992;
(statearr_28046[(7)] = inst_27852);

(statearr_28046[(8)] = inst_27853);

(statearr_28046[(9)] = inst_27854);

(statearr_28046[(10)] = inst_27855);

return statearr_28046;
})();
var statearr_28047_28117 = state_27992__$1;
(statearr_28047_28117[(2)] = null);

(statearr_28047_28117[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (23))){
var inst_27911 = (state_27992[(26)]);
var inst_27908 = (state_27992[(23)]);
var inst_27905 = (state_27992[(19)]);
var inst_27909 = (state_27992[(24)]);
var inst_27913 = (state_27992[(25)]);
var inst_27916 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27918 = (function (){var all_files = inst_27905;
var res_SINGLEQUOTE_ = inst_27908;
var res = inst_27909;
var files_not_loaded = inst_27911;
var dependencies_that_loaded = inst_27913;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27911,inst_27908,inst_27905,inst_27909,inst_27913,inst_27916,state_val_27993,c__23161__auto__,map__27837,map__27837__$1,opts,before_jsload,on_jsload,reload_dependents,map__27838,map__27838__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27917){
var map__28048 = p__27917;
var map__28048__$1 = ((((!((map__28048 == null)))?(((((map__28048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28048):map__28048);
var request_url = cljs.core.get.call(null,map__28048__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27911,inst_27908,inst_27905,inst_27909,inst_27913,inst_27916,state_val_27993,c__23161__auto__,map__27837,map__27837__$1,opts,before_jsload,on_jsload,reload_dependents,map__27838,map__27838__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27919 = cljs.core.reverse.call(null,inst_27913);
var inst_27920 = cljs.core.map.call(null,inst_27918,inst_27919);
var inst_27921 = cljs.core.pr_str.call(null,inst_27920);
var inst_27922 = figwheel.client.utils.log.call(null,inst_27921);
var state_27992__$1 = (function (){var statearr_28050 = state_27992;
(statearr_28050[(31)] = inst_27916);

return statearr_28050;
})();
var statearr_28051_28118 = state_27992__$1;
(statearr_28051_28118[(2)] = inst_27922);

(statearr_28051_28118[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (35))){
var state_27992__$1 = state_27992;
var statearr_28052_28119 = state_27992__$1;
(statearr_28052_28119[(2)] = true);

(statearr_28052_28119[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (19))){
var inst_27895 = (state_27992[(12)]);
var inst_27901 = figwheel.client.file_reloading.expand_files.call(null,inst_27895);
var state_27992__$1 = state_27992;
var statearr_28053_28120 = state_27992__$1;
(statearr_28053_28120[(2)] = inst_27901);

(statearr_28053_28120[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (11))){
var state_27992__$1 = state_27992;
var statearr_28054_28121 = state_27992__$1;
(statearr_28054_28121[(2)] = null);

(statearr_28054_28121[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (9))){
var inst_27884 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
var statearr_28055_28122 = state_27992__$1;
(statearr_28055_28122[(2)] = inst_27884);

(statearr_28055_28122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (5))){
var inst_27854 = (state_27992[(9)]);
var inst_27855 = (state_27992[(10)]);
var inst_27857 = (inst_27855 < inst_27854);
var inst_27858 = inst_27857;
var state_27992__$1 = state_27992;
if(cljs.core.truth_(inst_27858)){
var statearr_28056_28123 = state_27992__$1;
(statearr_28056_28123[(1)] = (7));

} else {
var statearr_28057_28124 = state_27992__$1;
(statearr_28057_28124[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (14))){
var inst_27865 = (state_27992[(22)]);
var inst_27874 = cljs.core.first.call(null,inst_27865);
var inst_27875 = figwheel.client.file_reloading.eval_body.call(null,inst_27874,opts);
var inst_27876 = cljs.core.next.call(null,inst_27865);
var inst_27852 = inst_27876;
var inst_27853 = null;
var inst_27854 = (0);
var inst_27855 = (0);
var state_27992__$1 = (function (){var statearr_28058 = state_27992;
(statearr_28058[(7)] = inst_27852);

(statearr_28058[(32)] = inst_27875);

(statearr_28058[(8)] = inst_27853);

(statearr_28058[(9)] = inst_27854);

(statearr_28058[(10)] = inst_27855);

return statearr_28058;
})();
var statearr_28059_28125 = state_27992__$1;
(statearr_28059_28125[(2)] = null);

(statearr_28059_28125[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (45))){
var state_27992__$1 = state_27992;
var statearr_28060_28126 = state_27992__$1;
(statearr_28060_28126[(2)] = null);

(statearr_28060_28126[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (26))){
var inst_27911 = (state_27992[(26)]);
var inst_27908 = (state_27992[(23)]);
var inst_27905 = (state_27992[(19)]);
var inst_27909 = (state_27992[(24)]);
var inst_27913 = (state_27992[(25)]);
var inst_27928 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27930 = (function (){var all_files = inst_27905;
var res_SINGLEQUOTE_ = inst_27908;
var res = inst_27909;
var files_not_loaded = inst_27911;
var dependencies_that_loaded = inst_27913;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27911,inst_27908,inst_27905,inst_27909,inst_27913,inst_27928,state_val_27993,c__23161__auto__,map__27837,map__27837__$1,opts,before_jsload,on_jsload,reload_dependents,map__27838,map__27838__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27929){
var map__28061 = p__27929;
var map__28061__$1 = ((((!((map__28061 == null)))?(((((map__28061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28061):map__28061);
var namespace = cljs.core.get.call(null,map__28061__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28061__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27911,inst_27908,inst_27905,inst_27909,inst_27913,inst_27928,state_val_27993,c__23161__auto__,map__27837,map__27837__$1,opts,before_jsload,on_jsload,reload_dependents,map__27838,map__27838__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27931 = cljs.core.map.call(null,inst_27930,inst_27909);
var inst_27932 = cljs.core.pr_str.call(null,inst_27931);
var inst_27933 = figwheel.client.utils.log.call(null,inst_27932);
var inst_27934 = (function (){var all_files = inst_27905;
var res_SINGLEQUOTE_ = inst_27908;
var res = inst_27909;
var files_not_loaded = inst_27911;
var dependencies_that_loaded = inst_27913;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27911,inst_27908,inst_27905,inst_27909,inst_27913,inst_27928,inst_27930,inst_27931,inst_27932,inst_27933,state_val_27993,c__23161__auto__,map__27837,map__27837__$1,opts,before_jsload,on_jsload,reload_dependents,map__27838,map__27838__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27911,inst_27908,inst_27905,inst_27909,inst_27913,inst_27928,inst_27930,inst_27931,inst_27932,inst_27933,state_val_27993,c__23161__auto__,map__27837,map__27837__$1,opts,before_jsload,on_jsload,reload_dependents,map__27838,map__27838__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27935 = setTimeout(inst_27934,(10));
var state_27992__$1 = (function (){var statearr_28063 = state_27992;
(statearr_28063[(33)] = inst_27928);

(statearr_28063[(34)] = inst_27933);

return statearr_28063;
})();
var statearr_28064_28127 = state_27992__$1;
(statearr_28064_28127[(2)] = inst_27935);

(statearr_28064_28127[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (16))){
var state_27992__$1 = state_27992;
var statearr_28065_28128 = state_27992__$1;
(statearr_28065_28128[(2)] = reload_dependents);

(statearr_28065_28128[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (38))){
var inst_27945 = (state_27992[(16)]);
var inst_27963 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27945);
var state_27992__$1 = state_27992;
var statearr_28066_28129 = state_27992__$1;
(statearr_28066_28129[(2)] = inst_27963);

(statearr_28066_28129[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (30))){
var state_27992__$1 = state_27992;
var statearr_28067_28130 = state_27992__$1;
(statearr_28067_28130[(2)] = null);

(statearr_28067_28130[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (10))){
var inst_27865 = (state_27992[(22)]);
var inst_27867 = cljs.core.chunked_seq_QMARK_.call(null,inst_27865);
var state_27992__$1 = state_27992;
if(inst_27867){
var statearr_28068_28131 = state_27992__$1;
(statearr_28068_28131[(1)] = (13));

} else {
var statearr_28069_28132 = state_27992__$1;
(statearr_28069_28132[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (18))){
var inst_27899 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
if(cljs.core.truth_(inst_27899)){
var statearr_28070_28133 = state_27992__$1;
(statearr_28070_28133[(1)] = (19));

} else {
var statearr_28071_28134 = state_27992__$1;
(statearr_28071_28134[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (42))){
var state_27992__$1 = state_27992;
var statearr_28072_28135 = state_27992__$1;
(statearr_28072_28135[(2)] = null);

(statearr_28072_28135[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (37))){
var inst_27958 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
var statearr_28073_28136 = state_27992__$1;
(statearr_28073_28136[(2)] = inst_27958);

(statearr_28073_28136[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (8))){
var inst_27852 = (state_27992[(7)]);
var inst_27865 = (state_27992[(22)]);
var inst_27865__$1 = cljs.core.seq.call(null,inst_27852);
var state_27992__$1 = (function (){var statearr_28074 = state_27992;
(statearr_28074[(22)] = inst_27865__$1);

return statearr_28074;
})();
if(inst_27865__$1){
var statearr_28075_28137 = state_27992__$1;
(statearr_28075_28137[(1)] = (10));

} else {
var statearr_28076_28138 = state_27992__$1;
(statearr_28076_28138[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23161__auto__,map__27837,map__27837__$1,opts,before_jsload,on_jsload,reload_dependents,map__27838,map__27838__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23071__auto__,c__23161__auto__,map__27837,map__27837__$1,opts,before_jsload,on_jsload,reload_dependents,map__27838,map__27838__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23072__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23072__auto____0 = (function (){
var statearr_28077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28077[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23072__auto__);

(statearr_28077[(1)] = (1));

return statearr_28077;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23072__auto____1 = (function (state_27992){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_27992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e28078){if((e28078 instanceof Object)){
var ex__23075__auto__ = e28078;
var statearr_28079_28139 = state_27992;
(statearr_28079_28139[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28140 = state_27992;
state_27992 = G__28140;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23072__auto__ = function(state_27992){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23072__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23072__auto____1.call(this,state_27992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23072__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23072__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto__,map__27837,map__27837__$1,opts,before_jsload,on_jsload,reload_dependents,map__27838,map__27838__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23163__auto__ = (function (){var statearr_28080 = f__23162__auto__.call(null);
(statearr_28080[(6)] = c__23161__auto__);

return statearr_28080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto__,map__27837,map__27837__$1,opts,before_jsload,on_jsload,reload_dependents,map__27838,map__27838__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23161__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28143,link){
var map__28144 = p__28143;
var map__28144__$1 = ((((!((map__28144 == null)))?(((((map__28144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28144):map__28144);
var file = cljs.core.get.call(null,map__28144__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__28144,map__28144__$1,file){
return (function (p1__28141_SHARP_,p2__28142_SHARP_){
if(cljs.core._EQ_.call(null,p1__28141_SHARP_,p2__28142_SHARP_)){
return p1__28141_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__28144,map__28144__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28147){
var map__28148 = p__28147;
var map__28148__$1 = ((((!((map__28148 == null)))?(((((map__28148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28148):map__28148);
var match_length = cljs.core.get.call(null,map__28148__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28148__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28146_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28146_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28150_SHARP_,p2__28151_SHARP_){
return cljs.core.assoc.call(null,p1__28150_SHARP_,cljs.core.get.call(null,p2__28151_SHARP_,key),p2__28151_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_28152 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28152);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28152);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28153,p__28154){
var map__28155 = p__28153;
var map__28155__$1 = ((((!((map__28155 == null)))?(((((map__28155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28155):map__28155);
var on_cssload = cljs.core.get.call(null,map__28155__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28156 = p__28154;
var map__28156__$1 = ((((!((map__28156 == null)))?(((((map__28156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28156):map__28156);
var files_msg = map__28156__$1;
var files = cljs.core.get.call(null,map__28156__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1573409130884
