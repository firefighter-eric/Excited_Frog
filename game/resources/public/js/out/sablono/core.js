// Compiled by ClojureScript 1.10.312 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__25678__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__25675 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__25676 = cljs.core.seq.call(null,vec__25675);
var first__25677 = cljs.core.first.call(null,seq__25676);
var seq__25676__$1 = cljs.core.next.call(null,seq__25676);
var tag = first__25677;
var body = seq__25676__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__25678 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25679__i = 0, G__25679__a = new Array(arguments.length -  0);
while (G__25679__i < G__25679__a.length) {G__25679__a[G__25679__i] = arguments[G__25679__i + 0]; ++G__25679__i;}
  args = new cljs.core.IndexedSeq(G__25679__a,0,null);
} 
return G__25678__delegate.call(this,args);};
G__25678.cljs$lang$maxFixedArity = 0;
G__25678.cljs$lang$applyTo = (function (arglist__25680){
var args = cljs.core.seq(arglist__25680);
return G__25678__delegate(args);
});
G__25678.cljs$core$IFn$_invoke$arity$variadic = G__25678__delegate;
return G__25678;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4310__auto__ = (function sablono$core$update_arglists_$_iter__25681(s__25682){
return (new cljs.core.LazySeq(null,(function (){
var s__25682__$1 = s__25682;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__25682__$1);
if(temp__5457__auto__){
var s__25682__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25682__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__25682__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__25684 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__25683 = (0);
while(true){
if((i__25683 < size__4309__auto__)){
var args = cljs.core._nth.call(null,c__4308__auto__,i__25683);
cljs.core.chunk_append.call(null,b__25684,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__25685 = (i__25683 + (1));
i__25683 = G__25685;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25684),sablono$core$update_arglists_$_iter__25681.call(null,cljs.core.chunk_rest.call(null,s__25682__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25684),null);
}
} else {
var args = cljs.core.first.call(null,s__25682__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__25681.call(null,cljs.core.rest.call(null,s__25682__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4310__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4520__auto__ = [];
var len__4517__auto___25691 = arguments.length;
var i__4518__auto___25692 = (0);
while(true){
if((i__4518__auto___25692 < len__4517__auto___25691)){
args__4520__auto__.push((arguments[i__4518__auto___25692]));

var G__25693 = (i__4518__auto___25692 + (1));
i__4518__auto___25692 = G__25693;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4310__auto__ = (function sablono$core$iter__25687(s__25688){
return (new cljs.core.LazySeq(null,(function (){
var s__25688__$1 = s__25688;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__25688__$1);
if(temp__5457__auto__){
var s__25688__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25688__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__25688__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__25690 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__25689 = (0);
while(true){
if((i__25689 < size__4309__auto__)){
var style = cljs.core._nth.call(null,c__4308__auto__,i__25689);
cljs.core.chunk_append.call(null,b__25690,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__25694 = (i__25689 + (1));
i__25689 = G__25694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25690),sablono$core$iter__25687.call(null,cljs.core.chunk_rest.call(null,s__25688__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25690),null);
}
} else {
var style = cljs.core.first.call(null,s__25688__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__25687.call(null,cljs.core.rest.call(null,s__25688__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4310__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq25686){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25686));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to25695 = (function sablono$core$link_to25695(var_args){
var args__4520__auto__ = [];
var len__4517__auto___25698 = arguments.length;
var i__4518__auto___25699 = (0);
while(true){
if((i__4518__auto___25699 < len__4517__auto___25698)){
args__4520__auto__.push((arguments[i__4518__auto___25699]));

var G__25700 = (i__4518__auto___25699 + (1));
i__4518__auto___25699 = G__25700;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to25695.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

sablono.core.link_to25695.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to25695.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to25695.cljs$lang$applyTo = (function (seq25696){
var G__25697 = cljs.core.first.call(null,seq25696);
var seq25696__$1 = cljs.core.next.call(null,seq25696);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25697,seq25696__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to25695);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to25701 = (function sablono$core$mail_to25701(var_args){
var args__4520__auto__ = [];
var len__4517__auto___25708 = arguments.length;
var i__4518__auto___25709 = (0);
while(true){
if((i__4518__auto___25709 < len__4517__auto___25708)){
args__4520__auto__.push((arguments[i__4518__auto___25709]));

var G__25710 = (i__4518__auto___25709 + (1));
i__4518__auto___25709 = G__25710;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to25701.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

sablono.core.mail_to25701.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__25704){
var vec__25705 = p__25704;
var content = cljs.core.nth.call(null,vec__25705,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3936__auto__ = content;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to25701.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to25701.cljs$lang$applyTo = (function (seq25702){
var G__25703 = cljs.core.first.call(null,seq25702);
var seq25702__$1 = cljs.core.next.call(null,seq25702);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25703,seq25702__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to25701);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list25711 = (function sablono$core$unordered_list25711(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4310__auto__ = (function sablono$core$unordered_list25711_$_iter__25712(s__25713){
return (new cljs.core.LazySeq(null,(function (){
var s__25713__$1 = s__25713;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__25713__$1);
if(temp__5457__auto__){
var s__25713__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25713__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__25713__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__25715 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__25714 = (0);
while(true){
if((i__25714 < size__4309__auto__)){
var x = cljs.core._nth.call(null,c__4308__auto__,i__25714);
cljs.core.chunk_append.call(null,b__25715,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25716 = (i__25714 + (1));
i__25714 = G__25716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25715),sablono$core$unordered_list25711_$_iter__25712.call(null,cljs.core.chunk_rest.call(null,s__25713__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25715),null);
}
} else {
var x = cljs.core.first.call(null,s__25713__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list25711_$_iter__25712.call(null,cljs.core.rest.call(null,s__25713__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4310__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list25711);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list25717 = (function sablono$core$ordered_list25717(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4310__auto__ = (function sablono$core$ordered_list25717_$_iter__25718(s__25719){
return (new cljs.core.LazySeq(null,(function (){
var s__25719__$1 = s__25719;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__25719__$1);
if(temp__5457__auto__){
var s__25719__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25719__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__25719__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__25721 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__25720 = (0);
while(true){
if((i__25720 < size__4309__auto__)){
var x = cljs.core._nth.call(null,c__4308__auto__,i__25720);
cljs.core.chunk_append.call(null,b__25721,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25722 = (i__25720 + (1));
i__25720 = G__25722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25721),sablono$core$ordered_list25717_$_iter__25718.call(null,cljs.core.chunk_rest.call(null,s__25719__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25721),null);
}
} else {
var x = cljs.core.first.call(null,s__25719__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list25717_$_iter__25718.call(null,cljs.core.rest.call(null,s__25719__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4310__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list25717);
/**
 * Create an image element.
 */
sablono.core.image25723 = (function sablono$core$image25723(var_args){
var G__25725 = arguments.length;
switch (G__25725) {
case 1:
return sablono.core.image25723.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image25723.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image25723.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image25723.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image25723.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image25723);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__25727_SHARP_,p2__25728_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25727_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__25728_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__25729_SHARP_,p2__25730_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25729_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__25730_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3936__auto__ = value;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field25731 = (function sablono$core$color_field25731(var_args){
var G__25733 = arguments.length;
switch (G__25733) {
case 1:
return sablono.core.color_field25731.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field25731.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field25731.cljs$core$IFn$_invoke$arity$1 = (function (name__25665__auto__){
return sablono.core.color_field25731.call(null,name__25665__auto__,null);
});

sablono.core.color_field25731.cljs$core$IFn$_invoke$arity$2 = (function (name__25665__auto__,value__25666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__25665__auto__,value__25666__auto__);
});

sablono.core.color_field25731.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field25731);

/**
 * Creates a date input field.
 */
sablono.core.date_field25734 = (function sablono$core$date_field25734(var_args){
var G__25736 = arguments.length;
switch (G__25736) {
case 1:
return sablono.core.date_field25734.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field25734.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field25734.cljs$core$IFn$_invoke$arity$1 = (function (name__25665__auto__){
return sablono.core.date_field25734.call(null,name__25665__auto__,null);
});

sablono.core.date_field25734.cljs$core$IFn$_invoke$arity$2 = (function (name__25665__auto__,value__25666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__25665__auto__,value__25666__auto__);
});

sablono.core.date_field25734.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field25734);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field25737 = (function sablono$core$datetime_field25737(var_args){
var G__25739 = arguments.length;
switch (G__25739) {
case 1:
return sablono.core.datetime_field25737.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field25737.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field25737.cljs$core$IFn$_invoke$arity$1 = (function (name__25665__auto__){
return sablono.core.datetime_field25737.call(null,name__25665__auto__,null);
});

sablono.core.datetime_field25737.cljs$core$IFn$_invoke$arity$2 = (function (name__25665__auto__,value__25666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__25665__auto__,value__25666__auto__);
});

sablono.core.datetime_field25737.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field25737);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field25740 = (function sablono$core$datetime_local_field25740(var_args){
var G__25742 = arguments.length;
switch (G__25742) {
case 1:
return sablono.core.datetime_local_field25740.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field25740.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field25740.cljs$core$IFn$_invoke$arity$1 = (function (name__25665__auto__){
return sablono.core.datetime_local_field25740.call(null,name__25665__auto__,null);
});

sablono.core.datetime_local_field25740.cljs$core$IFn$_invoke$arity$2 = (function (name__25665__auto__,value__25666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__25665__auto__,value__25666__auto__);
});

sablono.core.datetime_local_field25740.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field25740);

/**
 * Creates a email input field.
 */
sablono.core.email_field25743 = (function sablono$core$email_field25743(var_args){
var G__25745 = arguments.length;
switch (G__25745) {
case 1:
return sablono.core.email_field25743.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field25743.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field25743.cljs$core$IFn$_invoke$arity$1 = (function (name__25665__auto__){
return sablono.core.email_field25743.call(null,name__25665__auto__,null);
});

sablono.core.email_field25743.cljs$core$IFn$_invoke$arity$2 = (function (name__25665__auto__,value__25666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__25665__auto__,value__25666__auto__);
});

sablono.core.email_field25743.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field25743);

/**
 * Creates a file input field.
 */
sablono.core.file_field25746 = (function sablono$core$file_field25746(var_args){
var G__25748 = arguments.length;
switch (G__25748) {
case 1:
return sablono.core.file_field25746.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field25746.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field25746.cljs$core$IFn$_invoke$arity$1 = (function (name__25665__auto__){
return sablono.core.file_field25746.call(null,name__25665__auto__,null);
});

sablono.core.file_field25746.cljs$core$IFn$_invoke$arity$2 = (function (name__25665__auto__,value__25666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__25665__auto__,value__25666__auto__);
});

sablono.core.file_field25746.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field25746);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field25749 = (function sablono$core$hidden_field25749(var_args){
var G__25751 = arguments.length;
switch (G__25751) {
case 1:
return sablono.core.hidden_field25749.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field25749.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field25749.cljs$core$IFn$_invoke$arity$1 = (function (name__25665__auto__){
return sablono.core.hidden_field25749.call(null,name__25665__auto__,null);
});

sablono.core.hidden_field25749.cljs$core$IFn$_invoke$arity$2 = (function (name__25665__auto__,value__25666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__25665__auto__,value__25666__auto__);
});

sablono.core.hidden_field25749.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field25749);

/**
 * Creates a month input field.
 */
sablono.core.month_field25752 = (function sablono$core$month_field25752(var_args){
var G__25754 = arguments.length;
switch (G__25754) {
case 1:
return sablono.core.month_field25752.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field25752.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field25752.cljs$core$IFn$_invoke$arity$1 = (function (name__25665__auto__){
return sablono.core.month_field25752.call(null,name__25665__auto__,null);
});

sablono.core.month_field25752.cljs$core$IFn$_invoke$arity$2 = (function (name__25665__auto__,value__25666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__25665__auto__,value__25666__auto__);
});

sablono.core.month_field25752.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field25752);

/**
 * Creates a number input field.
 */
sablono.core.number_field25755 = (function sablono$core$number_field25755(var_args){
var G__25757 = arguments.length;
switch (G__25757) {
case 1:
return sablono.core.number_field25755.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field25755.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field25755.cljs$core$IFn$_invoke$arity$1 = (function (name__25665__auto__){
return sablono.core.number_field25755.call(null,name__25665__auto__,null);
});

sablono.core.number_field25755.cljs$core$IFn$_invoke$arity$2 = (function (name__25665__auto__,value__25666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__25665__auto__,value__25666__auto__);
});

sablono.core.number_field25755.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field25755);

/**
 * Creates a password input field.
 */
sablono.core.password_field25758 = (function sablono$core$password_field25758(var_args){
var G__25760 = arguments.length;
switch (G__25760) {
case 1:
return sablono.core.password_field25758.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field25758.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field25758.cljs$core$IFn$_invoke$arity$1 = (function (name__25665__auto__){
return sablono.core.password_field25758.call(null,name__25665__auto__,null);
});

sablono.core.password_field25758.cljs$core$IFn$_invoke$arity$2 = (function (name__25665__auto__,value__25666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__25665__auto__,value__25666__auto__);
});

sablono.core.password_field25758.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field25758);

/**
 * Creates a range input field.
 */
sablono.core.range_field25761 = (function sablono$core$range_field25761(var_args){
var G__25763 = arguments.length;
switch (G__25763) {
case 1:
return sablono.core.range_field25761.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field25761.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field25761.cljs$core$IFn$_invoke$arity$1 = (function (name__25665__auto__){
return sablono.core.range_field25761.call(null,name__25665__auto__,null);
});

sablono.core.range_field25761.cljs$core$IFn$_invoke$arity$2 = (function (name__25665__auto__,value__25666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__25665__auto__,value__25666__auto__);
});

sablono.core.range_field25761.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field25761);

/**
 * Creates a search input field.
 */
sablono.core.search_field25764 = (function sablono$core$search_field25764(var_args){
var G__25766 = arguments.length;
switch (G__25766) {
case 1:
return sablono.core.search_field25764.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field25764.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field25764.cljs$core$IFn$_invoke$arity$1 = (function (name__25665__auto__){
return sablono.core.search_field25764.call(null,name__25665__auto__,null);
});

sablono.core.search_field25764.cljs$core$IFn$_invoke$arity$2 = (function (name__25665__auto__,value__25666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__25665__auto__,value__25666__auto__);
});

sablono.core.search_field25764.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field25764);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field25767 = (function sablono$core$tel_field25767(var_args){
var G__25769 = arguments.length;
switch (G__25769) {
case 1:
return sablono.core.tel_field25767.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field25767.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field25767.cljs$core$IFn$_invoke$arity$1 = (function (name__25665__auto__){
return sablono.core.tel_field25767.call(null,name__25665__auto__,null);
});

sablono.core.tel_field25767.cljs$core$IFn$_invoke$arity$2 = (function (name__25665__auto__,value__25666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__25665__auto__,value__25666__auto__);
});

sablono.core.tel_field25767.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field25767);

/**
 * Creates a text input field.
 */
sablono.core.text_field25770 = (function sablono$core$text_field25770(var_args){
var G__25772 = arguments.length;
switch (G__25772) {
case 1:
return sablono.core.text_field25770.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field25770.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field25770.cljs$core$IFn$_invoke$arity$1 = (function (name__25665__auto__){
return sablono.core.text_field25770.call(null,name__25665__auto__,null);
});

sablono.core.text_field25770.cljs$core$IFn$_invoke$arity$2 = (function (name__25665__auto__,value__25666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__25665__auto__,value__25666__auto__);
});

sablono.core.text_field25770.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field25770);

/**
 * Creates a time input field.
 */
sablono.core.time_field25773 = (function sablono$core$time_field25773(var_args){
var G__25775 = arguments.length;
switch (G__25775) {
case 1:
return sablono.core.time_field25773.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field25773.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field25773.cljs$core$IFn$_invoke$arity$1 = (function (name__25665__auto__){
return sablono.core.time_field25773.call(null,name__25665__auto__,null);
});

sablono.core.time_field25773.cljs$core$IFn$_invoke$arity$2 = (function (name__25665__auto__,value__25666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__25665__auto__,value__25666__auto__);
});

sablono.core.time_field25773.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field25773);

/**
 * Creates a url input field.
 */
sablono.core.url_field25776 = (function sablono$core$url_field25776(var_args){
var G__25778 = arguments.length;
switch (G__25778) {
case 1:
return sablono.core.url_field25776.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field25776.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field25776.cljs$core$IFn$_invoke$arity$1 = (function (name__25665__auto__){
return sablono.core.url_field25776.call(null,name__25665__auto__,null);
});

sablono.core.url_field25776.cljs$core$IFn$_invoke$arity$2 = (function (name__25665__auto__,value__25666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__25665__auto__,value__25666__auto__);
});

sablono.core.url_field25776.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field25776);

/**
 * Creates a week input field.
 */
sablono.core.week_field25779 = (function sablono$core$week_field25779(var_args){
var G__25781 = arguments.length;
switch (G__25781) {
case 1:
return sablono.core.week_field25779.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field25779.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field25779.cljs$core$IFn$_invoke$arity$1 = (function (name__25665__auto__){
return sablono.core.week_field25779.call(null,name__25665__auto__,null);
});

sablono.core.week_field25779.cljs$core$IFn$_invoke$arity$2 = (function (name__25665__auto__,value__25666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__25665__auto__,value__25666__auto__);
});

sablono.core.week_field25779.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field25779);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box25799 = (function sablono$core$check_box25799(var_args){
var G__25801 = arguments.length;
switch (G__25801) {
case 1:
return sablono.core.check_box25799.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box25799.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box25799.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box25799.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box25799.call(null,name,null);
});

sablono.core.check_box25799.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box25799.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box25799.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3936__auto__ = value;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box25799.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box25799);
/**
 * Creates a radio button.
 */
sablono.core.radio_button25803 = (function sablono$core$radio_button25803(var_args){
var G__25805 = arguments.length;
switch (G__25805) {
case 1:
return sablono.core.radio_button25803.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button25803.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button25803.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button25803.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button25803.call(null,group,null);
});

sablono.core.radio_button25803.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button25803.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button25803.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3936__auto__ = value;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button25803.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button25803);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options25807 = (function sablono$core$select_options25807(coll){
var iter__4310__auto__ = (function sablono$core$select_options25807_$_iter__25808(s__25809){
return (new cljs.core.LazySeq(null,(function (){
var s__25809__$1 = s__25809;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__25809__$1);
if(temp__5457__auto__){
var s__25809__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25809__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__25809__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__25811 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__25810 = (0);
while(true){
if((i__25810 < size__4309__auto__)){
var x = cljs.core._nth.call(null,c__4308__auto__,i__25810);
cljs.core.chunk_append.call(null,b__25811,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25812 = x;
var text = cljs.core.nth.call(null,vec__25812,(0),null);
var val = cljs.core.nth.call(null,vec__25812,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25812,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options25807.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__25818 = (i__25810 + (1));
i__25810 = G__25818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25811),sablono$core$select_options25807_$_iter__25808.call(null,cljs.core.chunk_rest.call(null,s__25809__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25811),null);
}
} else {
var x = cljs.core.first.call(null,s__25809__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25815 = x;
var text = cljs.core.nth.call(null,vec__25815,(0),null);
var val = cljs.core.nth.call(null,vec__25815,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25815,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options25807.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options25807_$_iter__25808.call(null,cljs.core.rest.call(null,s__25809__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4310__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options25807);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down25819 = (function sablono$core$drop_down25819(var_args){
var G__25821 = arguments.length;
switch (G__25821) {
case 2:
return sablono.core.drop_down25819.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down25819.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down25819.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down25819.call(null,name,options,null);
});

sablono.core.drop_down25819.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down25819.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down25819);
/**
 * Creates a text area element.
 */
sablono.core.text_area25823 = (function sablono$core$text_area25823(var_args){
var G__25825 = arguments.length;
switch (G__25825) {
case 1:
return sablono.core.text_area25823.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area25823.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area25823.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area25823.call(null,name,null);
});

sablono.core.text_area25823.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3936__auto__ = value;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area25823.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area25823);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label25827 = (function sablono$core$label25827(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label25827);
/**
 * Creates a submit button.
 */
sablono.core.submit_button25828 = (function sablono$core$submit_button25828(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button25828);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button25829 = (function sablono$core$reset_button25829(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button25829);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to25830 = (function sablono$core$form_to25830(var_args){
var args__4520__auto__ = [];
var len__4517__auto___25837 = arguments.length;
var i__4518__auto___25838 = (0);
while(true){
if((i__4518__auto___25838 < len__4517__auto___25837)){
args__4520__auto__.push((arguments[i__4518__auto___25838]));

var G__25839 = (i__4518__auto___25838 + (1));
i__4518__auto___25838 = G__25839;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to25830.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

sablono.core.form_to25830.cljs$core$IFn$_invoke$arity$variadic = (function (p__25833,body){
var vec__25834 = p__25833;
var method = cljs.core.nth.call(null,vec__25834,(0),null);
var action = cljs.core.nth.call(null,vec__25834,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to25830.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to25830.cljs$lang$applyTo = (function (seq25831){
var G__25832 = cljs.core.first.call(null,seq25831);
var seq25831__$1 = cljs.core.next.call(null,seq25831);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25832,seq25831__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to25830);

//# sourceMappingURL=core.js.map?rel=1573409127691
