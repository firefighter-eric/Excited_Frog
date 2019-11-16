// Compiled by ClojureScript 1.10.312 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e29255){if((e29255 instanceof Error)){
var e = e29255;
return "Error: Unable to stringify";
} else {
throw e29255;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29258 = arguments.length;
switch (G__29258) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29256_SHARP_){
if(typeof p1__29256_SHARP_ === 'string'){
return p1__29256_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29256_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29261 = arguments.length;
var i__4518__auto___29262 = (0);
while(true){
if((i__4518__auto___29262 < len__4517__auto___29261)){
args__4520__auto__.push((arguments[i__4518__auto___29262]));

var G__29263 = (i__4518__auto___29262 + (1));
i__4518__auto___29262 = G__29263;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29260){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29260));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29265 = arguments.length;
var i__4518__auto___29266 = (0);
while(true){
if((i__4518__auto___29266 < len__4517__auto___29265)){
args__4520__auto__.push((arguments[i__4518__auto___29266]));

var G__29267 = (i__4518__auto___29266 + (1));
i__4518__auto___29266 = G__29267;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29264){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29264));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29268){
var map__29269 = p__29268;
var map__29269__$1 = ((((!((map__29269 == null)))?(((((map__29269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29269):map__29269);
var message = cljs.core.get.call(null,map__29269__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29269__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3936__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3925__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3925__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3925__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23161__auto___29348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto___29348,ch){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto___29348,ch){
return (function (state_29320){
var state_val_29321 = (state_29320[(1)]);
if((state_val_29321 === (7))){
var inst_29316 = (state_29320[(2)]);
var state_29320__$1 = state_29320;
var statearr_29322_29349 = state_29320__$1;
(statearr_29322_29349[(2)] = inst_29316);

(statearr_29322_29349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (1))){
var state_29320__$1 = state_29320;
var statearr_29323_29350 = state_29320__$1;
(statearr_29323_29350[(2)] = null);

(statearr_29323_29350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (4))){
var inst_29273 = (state_29320[(7)]);
var inst_29273__$1 = (state_29320[(2)]);
var state_29320__$1 = (function (){var statearr_29324 = state_29320;
(statearr_29324[(7)] = inst_29273__$1);

return statearr_29324;
})();
if(cljs.core.truth_(inst_29273__$1)){
var statearr_29325_29351 = state_29320__$1;
(statearr_29325_29351[(1)] = (5));

} else {
var statearr_29326_29352 = state_29320__$1;
(statearr_29326_29352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (15))){
var inst_29280 = (state_29320[(8)]);
var inst_29295 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29280);
var inst_29296 = cljs.core.first.call(null,inst_29295);
var inst_29297 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29296);
var inst_29298 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29297)].join('');
var inst_29299 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29298);
var state_29320__$1 = state_29320;
var statearr_29327_29353 = state_29320__$1;
(statearr_29327_29353[(2)] = inst_29299);

(statearr_29327_29353[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (13))){
var inst_29304 = (state_29320[(2)]);
var state_29320__$1 = state_29320;
var statearr_29328_29354 = state_29320__$1;
(statearr_29328_29354[(2)] = inst_29304);

(statearr_29328_29354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (6))){
var state_29320__$1 = state_29320;
var statearr_29329_29355 = state_29320__$1;
(statearr_29329_29355[(2)] = null);

(statearr_29329_29355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (17))){
var inst_29302 = (state_29320[(2)]);
var state_29320__$1 = state_29320;
var statearr_29330_29356 = state_29320__$1;
(statearr_29330_29356[(2)] = inst_29302);

(statearr_29330_29356[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (3))){
var inst_29318 = (state_29320[(2)]);
var state_29320__$1 = state_29320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29320__$1,inst_29318);
} else {
if((state_val_29321 === (12))){
var inst_29279 = (state_29320[(9)]);
var inst_29293 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29279,opts);
var state_29320__$1 = state_29320;
if(cljs.core.truth_(inst_29293)){
var statearr_29331_29357 = state_29320__$1;
(statearr_29331_29357[(1)] = (15));

} else {
var statearr_29332_29358 = state_29320__$1;
(statearr_29332_29358[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (2))){
var state_29320__$1 = state_29320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29320__$1,(4),ch);
} else {
if((state_val_29321 === (11))){
var inst_29280 = (state_29320[(8)]);
var inst_29285 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29286 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29280);
var inst_29287 = cljs.core.async.timeout.call(null,(1000));
var inst_29288 = [inst_29286,inst_29287];
var inst_29289 = (new cljs.core.PersistentVector(null,2,(5),inst_29285,inst_29288,null));
var state_29320__$1 = state_29320;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29320__$1,(14),inst_29289);
} else {
if((state_val_29321 === (9))){
var inst_29280 = (state_29320[(8)]);
var inst_29306 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29307 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29280);
var inst_29308 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29307);
var inst_29309 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29308)].join('');
var inst_29310 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29309);
var state_29320__$1 = (function (){var statearr_29333 = state_29320;
(statearr_29333[(10)] = inst_29306);

return statearr_29333;
})();
var statearr_29334_29359 = state_29320__$1;
(statearr_29334_29359[(2)] = inst_29310);

(statearr_29334_29359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (5))){
var inst_29273 = (state_29320[(7)]);
var inst_29275 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29276 = (new cljs.core.PersistentArrayMap(null,2,inst_29275,null));
var inst_29277 = (new cljs.core.PersistentHashSet(null,inst_29276,null));
var inst_29278 = figwheel.client.focus_msgs.call(null,inst_29277,inst_29273);
var inst_29279 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29278);
var inst_29280 = cljs.core.first.call(null,inst_29278);
var inst_29281 = figwheel.client.autoload_QMARK_.call(null);
var state_29320__$1 = (function (){var statearr_29335 = state_29320;
(statearr_29335[(9)] = inst_29279);

(statearr_29335[(8)] = inst_29280);

return statearr_29335;
})();
if(cljs.core.truth_(inst_29281)){
var statearr_29336_29360 = state_29320__$1;
(statearr_29336_29360[(1)] = (8));

} else {
var statearr_29337_29361 = state_29320__$1;
(statearr_29337_29361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (14))){
var inst_29291 = (state_29320[(2)]);
var state_29320__$1 = state_29320;
var statearr_29338_29362 = state_29320__$1;
(statearr_29338_29362[(2)] = inst_29291);

(statearr_29338_29362[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (16))){
var state_29320__$1 = state_29320;
var statearr_29339_29363 = state_29320__$1;
(statearr_29339_29363[(2)] = null);

(statearr_29339_29363[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (10))){
var inst_29312 = (state_29320[(2)]);
var state_29320__$1 = (function (){var statearr_29340 = state_29320;
(statearr_29340[(11)] = inst_29312);

return statearr_29340;
})();
var statearr_29341_29364 = state_29320__$1;
(statearr_29341_29364[(2)] = null);

(statearr_29341_29364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (8))){
var inst_29279 = (state_29320[(9)]);
var inst_29283 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29279,opts);
var state_29320__$1 = state_29320;
if(cljs.core.truth_(inst_29283)){
var statearr_29342_29365 = state_29320__$1;
(statearr_29342_29365[(1)] = (11));

} else {
var statearr_29343_29366 = state_29320__$1;
(statearr_29343_29366[(1)] = (12));

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
});})(c__23161__auto___29348,ch))
;
return ((function (switch__23071__auto__,c__23161__auto___29348,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23072__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23072__auto____0 = (function (){
var statearr_29344 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29344[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23072__auto__);

(statearr_29344[(1)] = (1));

return statearr_29344;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23072__auto____1 = (function (state_29320){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_29320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e29345){if((e29345 instanceof Object)){
var ex__23075__auto__ = e29345;
var statearr_29346_29367 = state_29320;
(statearr_29346_29367[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29368 = state_29320;
state_29320 = G__29368;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23072__auto__ = function(state_29320){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23072__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23072__auto____1.call(this,state_29320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23072__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23072__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto___29348,ch))
})();
var state__23163__auto__ = (function (){var statearr_29347 = f__23162__auto__.call(null);
(statearr_29347[(6)] = c__23161__auto___29348);

return statearr_29347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto___29348,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29369_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29369_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29373 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29373){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29371 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29372 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29371,_STAR_print_fn_STAR_29372,sb,base_path_29373){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_29371,_STAR_print_fn_STAR_29372,sb,base_path_29373))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29372;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29371;
}}catch (e29370){if((e29370 instanceof Error)){
var e = e29370;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29373], null));
} else {
var e = e29370;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29373))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29374){
var map__29375 = p__29374;
var map__29375__$1 = ((((!((map__29375 == null)))?(((((map__29375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29375):map__29375);
var opts = map__29375__$1;
var build_id = cljs.core.get.call(null,map__29375__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29375,map__29375__$1,opts,build_id){
return (function (p__29377){
var vec__29378 = p__29377;
var seq__29379 = cljs.core.seq.call(null,vec__29378);
var first__29380 = cljs.core.first.call(null,seq__29379);
var seq__29379__$1 = cljs.core.next.call(null,seq__29379);
var map__29381 = first__29380;
var map__29381__$1 = ((((!((map__29381 == null)))?(((((map__29381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29381):map__29381);
var msg = map__29381__$1;
var msg_name = cljs.core.get.call(null,map__29381__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29379__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29378,seq__29379,first__29380,seq__29379__$1,map__29381,map__29381__$1,msg,msg_name,_,map__29375,map__29375__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29378,seq__29379,first__29380,seq__29379__$1,map__29381,map__29381__$1,msg,msg_name,_,map__29375,map__29375__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29375,map__29375__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29383){
var vec__29384 = p__29383;
var seq__29385 = cljs.core.seq.call(null,vec__29384);
var first__29386 = cljs.core.first.call(null,seq__29385);
var seq__29385__$1 = cljs.core.next.call(null,seq__29385);
var map__29387 = first__29386;
var map__29387__$1 = ((((!((map__29387 == null)))?(((((map__29387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29387):map__29387);
var msg = map__29387__$1;
var msg_name = cljs.core.get.call(null,map__29387__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29385__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29389){
var map__29390 = p__29389;
var map__29390__$1 = ((((!((map__29390 == null)))?(((((map__29390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29390):map__29390);
var on_compile_warning = cljs.core.get.call(null,map__29390__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29390__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29390,map__29390__$1,on_compile_warning,on_compile_fail){
return (function (p__29392){
var vec__29393 = p__29392;
var seq__29394 = cljs.core.seq.call(null,vec__29393);
var first__29395 = cljs.core.first.call(null,seq__29394);
var seq__29394__$1 = cljs.core.next.call(null,seq__29394);
var map__29396 = first__29395;
var map__29396__$1 = ((((!((map__29396 == null)))?(((((map__29396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29396):map__29396);
var msg = map__29396__$1;
var msg_name = cljs.core.get.call(null,map__29396__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29394__$1;
var pred__29398 = cljs.core._EQ_;
var expr__29399 = msg_name;
if(cljs.core.truth_(pred__29398.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29399))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29398.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29399))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29390,map__29390__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto__,msg_hist,msg_names,msg){
return (function (state_29488){
var state_val_29489 = (state_29488[(1)]);
if((state_val_29489 === (7))){
var inst_29408 = (state_29488[(2)]);
var state_29488__$1 = state_29488;
if(cljs.core.truth_(inst_29408)){
var statearr_29490_29537 = state_29488__$1;
(statearr_29490_29537[(1)] = (8));

} else {
var statearr_29491_29538 = state_29488__$1;
(statearr_29491_29538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (20))){
var inst_29482 = (state_29488[(2)]);
var state_29488__$1 = state_29488;
var statearr_29492_29539 = state_29488__$1;
(statearr_29492_29539[(2)] = inst_29482);

(statearr_29492_29539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (27))){
var inst_29478 = (state_29488[(2)]);
var state_29488__$1 = state_29488;
var statearr_29493_29540 = state_29488__$1;
(statearr_29493_29540[(2)] = inst_29478);

(statearr_29493_29540[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (1))){
var inst_29401 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29488__$1 = state_29488;
if(cljs.core.truth_(inst_29401)){
var statearr_29494_29541 = state_29488__$1;
(statearr_29494_29541[(1)] = (2));

} else {
var statearr_29495_29542 = state_29488__$1;
(statearr_29495_29542[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (24))){
var inst_29480 = (state_29488[(2)]);
var state_29488__$1 = state_29488;
var statearr_29496_29543 = state_29488__$1;
(statearr_29496_29543[(2)] = inst_29480);

(statearr_29496_29543[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (4))){
var inst_29486 = (state_29488[(2)]);
var state_29488__$1 = state_29488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29488__$1,inst_29486);
} else {
if((state_val_29489 === (15))){
var inst_29484 = (state_29488[(2)]);
var state_29488__$1 = state_29488;
var statearr_29497_29544 = state_29488__$1;
(statearr_29497_29544[(2)] = inst_29484);

(statearr_29497_29544[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (21))){
var inst_29437 = (state_29488[(2)]);
var inst_29438 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29439 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29438);
var state_29488__$1 = (function (){var statearr_29498 = state_29488;
(statearr_29498[(7)] = inst_29437);

return statearr_29498;
})();
var statearr_29499_29545 = state_29488__$1;
(statearr_29499_29545[(2)] = inst_29439);

(statearr_29499_29545[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (31))){
var inst_29467 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29488__$1 = state_29488;
if(cljs.core.truth_(inst_29467)){
var statearr_29500_29546 = state_29488__$1;
(statearr_29500_29546[(1)] = (34));

} else {
var statearr_29501_29547 = state_29488__$1;
(statearr_29501_29547[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (32))){
var inst_29476 = (state_29488[(2)]);
var state_29488__$1 = state_29488;
var statearr_29502_29548 = state_29488__$1;
(statearr_29502_29548[(2)] = inst_29476);

(statearr_29502_29548[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (33))){
var inst_29463 = (state_29488[(2)]);
var inst_29464 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29465 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29464);
var state_29488__$1 = (function (){var statearr_29503 = state_29488;
(statearr_29503[(8)] = inst_29463);

return statearr_29503;
})();
var statearr_29504_29549 = state_29488__$1;
(statearr_29504_29549[(2)] = inst_29465);

(statearr_29504_29549[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (13))){
var inst_29422 = figwheel.client.heads_up.clear.call(null);
var state_29488__$1 = state_29488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29488__$1,(16),inst_29422);
} else {
if((state_val_29489 === (22))){
var inst_29443 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29444 = figwheel.client.heads_up.append_warning_message.call(null,inst_29443);
var state_29488__$1 = state_29488;
var statearr_29505_29550 = state_29488__$1;
(statearr_29505_29550[(2)] = inst_29444);

(statearr_29505_29550[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (36))){
var inst_29474 = (state_29488[(2)]);
var state_29488__$1 = state_29488;
var statearr_29506_29551 = state_29488__$1;
(statearr_29506_29551[(2)] = inst_29474);

(statearr_29506_29551[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (29))){
var inst_29454 = (state_29488[(2)]);
var inst_29455 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29456 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29455);
var state_29488__$1 = (function (){var statearr_29507 = state_29488;
(statearr_29507[(9)] = inst_29454);

return statearr_29507;
})();
var statearr_29508_29552 = state_29488__$1;
(statearr_29508_29552[(2)] = inst_29456);

(statearr_29508_29552[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (6))){
var inst_29403 = (state_29488[(10)]);
var state_29488__$1 = state_29488;
var statearr_29509_29553 = state_29488__$1;
(statearr_29509_29553[(2)] = inst_29403);

(statearr_29509_29553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (28))){
var inst_29450 = (state_29488[(2)]);
var inst_29451 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29452 = figwheel.client.heads_up.display_warning.call(null,inst_29451);
var state_29488__$1 = (function (){var statearr_29510 = state_29488;
(statearr_29510[(11)] = inst_29450);

return statearr_29510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29488__$1,(29),inst_29452);
} else {
if((state_val_29489 === (25))){
var inst_29448 = figwheel.client.heads_up.clear.call(null);
var state_29488__$1 = state_29488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29488__$1,(28),inst_29448);
} else {
if((state_val_29489 === (34))){
var inst_29469 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29488__$1 = state_29488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29488__$1,(37),inst_29469);
} else {
if((state_val_29489 === (17))){
var inst_29428 = (state_29488[(2)]);
var inst_29429 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29430 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29429);
var state_29488__$1 = (function (){var statearr_29511 = state_29488;
(statearr_29511[(12)] = inst_29428);

return statearr_29511;
})();
var statearr_29512_29554 = state_29488__$1;
(statearr_29512_29554[(2)] = inst_29430);

(statearr_29512_29554[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (3))){
var inst_29420 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29488__$1 = state_29488;
if(cljs.core.truth_(inst_29420)){
var statearr_29513_29555 = state_29488__$1;
(statearr_29513_29555[(1)] = (13));

} else {
var statearr_29514_29556 = state_29488__$1;
(statearr_29514_29556[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (12))){
var inst_29416 = (state_29488[(2)]);
var state_29488__$1 = state_29488;
var statearr_29515_29557 = state_29488__$1;
(statearr_29515_29557[(2)] = inst_29416);

(statearr_29515_29557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (2))){
var inst_29403 = (state_29488[(10)]);
var inst_29403__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29488__$1 = (function (){var statearr_29516 = state_29488;
(statearr_29516[(10)] = inst_29403__$1);

return statearr_29516;
})();
if(cljs.core.truth_(inst_29403__$1)){
var statearr_29517_29558 = state_29488__$1;
(statearr_29517_29558[(1)] = (5));

} else {
var statearr_29518_29559 = state_29488__$1;
(statearr_29518_29559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (23))){
var inst_29446 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29488__$1 = state_29488;
if(cljs.core.truth_(inst_29446)){
var statearr_29519_29560 = state_29488__$1;
(statearr_29519_29560[(1)] = (25));

} else {
var statearr_29520_29561 = state_29488__$1;
(statearr_29520_29561[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (35))){
var state_29488__$1 = state_29488;
var statearr_29521_29562 = state_29488__$1;
(statearr_29521_29562[(2)] = null);

(statearr_29521_29562[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (19))){
var inst_29441 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29488__$1 = state_29488;
if(cljs.core.truth_(inst_29441)){
var statearr_29522_29563 = state_29488__$1;
(statearr_29522_29563[(1)] = (22));

} else {
var statearr_29523_29564 = state_29488__$1;
(statearr_29523_29564[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (11))){
var inst_29412 = (state_29488[(2)]);
var state_29488__$1 = state_29488;
var statearr_29524_29565 = state_29488__$1;
(statearr_29524_29565[(2)] = inst_29412);

(statearr_29524_29565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (9))){
var inst_29414 = figwheel.client.heads_up.clear.call(null);
var state_29488__$1 = state_29488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29488__$1,(12),inst_29414);
} else {
if((state_val_29489 === (5))){
var inst_29405 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29488__$1 = state_29488;
var statearr_29525_29566 = state_29488__$1;
(statearr_29525_29566[(2)] = inst_29405);

(statearr_29525_29566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (14))){
var inst_29432 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29488__$1 = state_29488;
if(cljs.core.truth_(inst_29432)){
var statearr_29526_29567 = state_29488__$1;
(statearr_29526_29567[(1)] = (18));

} else {
var statearr_29527_29568 = state_29488__$1;
(statearr_29527_29568[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (26))){
var inst_29458 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29488__$1 = state_29488;
if(cljs.core.truth_(inst_29458)){
var statearr_29528_29569 = state_29488__$1;
(statearr_29528_29569[(1)] = (30));

} else {
var statearr_29529_29570 = state_29488__$1;
(statearr_29529_29570[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (16))){
var inst_29424 = (state_29488[(2)]);
var inst_29425 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29426 = figwheel.client.heads_up.display_exception.call(null,inst_29425);
var state_29488__$1 = (function (){var statearr_29530 = state_29488;
(statearr_29530[(13)] = inst_29424);

return statearr_29530;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29488__$1,(17),inst_29426);
} else {
if((state_val_29489 === (30))){
var inst_29460 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29461 = figwheel.client.heads_up.display_warning.call(null,inst_29460);
var state_29488__$1 = state_29488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29488__$1,(33),inst_29461);
} else {
if((state_val_29489 === (10))){
var inst_29418 = (state_29488[(2)]);
var state_29488__$1 = state_29488;
var statearr_29531_29571 = state_29488__$1;
(statearr_29531_29571[(2)] = inst_29418);

(statearr_29531_29571[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (18))){
var inst_29434 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29435 = figwheel.client.heads_up.display_exception.call(null,inst_29434);
var state_29488__$1 = state_29488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29488__$1,(21),inst_29435);
} else {
if((state_val_29489 === (37))){
var inst_29471 = (state_29488[(2)]);
var state_29488__$1 = state_29488;
var statearr_29532_29572 = state_29488__$1;
(statearr_29532_29572[(2)] = inst_29471);

(statearr_29532_29572[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (8))){
var inst_29410 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29488__$1 = state_29488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29488__$1,(11),inst_29410);
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
});})(c__23161__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23071__auto__,c__23161__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23072__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23072__auto____0 = (function (){
var statearr_29533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29533[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23072__auto__);

(statearr_29533[(1)] = (1));

return statearr_29533;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23072__auto____1 = (function (state_29488){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_29488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e29534){if((e29534 instanceof Object)){
var ex__23075__auto__ = e29534;
var statearr_29535_29573 = state_29488;
(statearr_29535_29573[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29574 = state_29488;
state_29488 = G__29574;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23072__auto__ = function(state_29488){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23072__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23072__auto____1.call(this,state_29488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23072__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23072__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto__,msg_hist,msg_names,msg))
})();
var state__23163__auto__ = (function (){var statearr_29536 = f__23162__auto__.call(null);
(statearr_29536[(6)] = c__23161__auto__);

return statearr_29536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto__,msg_hist,msg_names,msg))
);

return c__23161__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23161__auto___29603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto___29603,ch){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto___29603,ch){
return (function (state_29589){
var state_val_29590 = (state_29589[(1)]);
if((state_val_29590 === (1))){
var state_29589__$1 = state_29589;
var statearr_29591_29604 = state_29589__$1;
(statearr_29591_29604[(2)] = null);

(statearr_29591_29604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (2))){
var state_29589__$1 = state_29589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29589__$1,(4),ch);
} else {
if((state_val_29590 === (3))){
var inst_29587 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29589__$1,inst_29587);
} else {
if((state_val_29590 === (4))){
var inst_29577 = (state_29589[(7)]);
var inst_29577__$1 = (state_29589[(2)]);
var state_29589__$1 = (function (){var statearr_29592 = state_29589;
(statearr_29592[(7)] = inst_29577__$1);

return statearr_29592;
})();
if(cljs.core.truth_(inst_29577__$1)){
var statearr_29593_29605 = state_29589__$1;
(statearr_29593_29605[(1)] = (5));

} else {
var statearr_29594_29606 = state_29589__$1;
(statearr_29594_29606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (5))){
var inst_29577 = (state_29589[(7)]);
var inst_29579 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29577);
var state_29589__$1 = state_29589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29589__$1,(8),inst_29579);
} else {
if((state_val_29590 === (6))){
var state_29589__$1 = state_29589;
var statearr_29595_29607 = state_29589__$1;
(statearr_29595_29607[(2)] = null);

(statearr_29595_29607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (7))){
var inst_29585 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
var statearr_29596_29608 = state_29589__$1;
(statearr_29596_29608[(2)] = inst_29585);

(statearr_29596_29608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (8))){
var inst_29581 = (state_29589[(2)]);
var state_29589__$1 = (function (){var statearr_29597 = state_29589;
(statearr_29597[(8)] = inst_29581);

return statearr_29597;
})();
var statearr_29598_29609 = state_29589__$1;
(statearr_29598_29609[(2)] = null);

(statearr_29598_29609[(1)] = (2));


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
});})(c__23161__auto___29603,ch))
;
return ((function (switch__23071__auto__,c__23161__auto___29603,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23072__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23072__auto____0 = (function (){
var statearr_29599 = [null,null,null,null,null,null,null,null,null];
(statearr_29599[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23072__auto__);

(statearr_29599[(1)] = (1));

return statearr_29599;
});
var figwheel$client$heads_up_plugin_$_state_machine__23072__auto____1 = (function (state_29589){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_29589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e29600){if((e29600 instanceof Object)){
var ex__23075__auto__ = e29600;
var statearr_29601_29610 = state_29589;
(statearr_29601_29610[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29611 = state_29589;
state_29589 = G__29611;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23072__auto__ = function(state_29589){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23072__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23072__auto____1.call(this,state_29589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23072__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23072__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto___29603,ch))
})();
var state__23163__auto__ = (function (){var statearr_29602 = f__23162__auto__.call(null);
(statearr_29602[(6)] = c__23161__auto___29603);

return statearr_29602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto___29603,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto__){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto__){
return (function (state_29617){
var state_val_29618 = (state_29617[(1)]);
if((state_val_29618 === (1))){
var inst_29612 = cljs.core.async.timeout.call(null,(3000));
var state_29617__$1 = state_29617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29617__$1,(2),inst_29612);
} else {
if((state_val_29618 === (2))){
var inst_29614 = (state_29617[(2)]);
var inst_29615 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29617__$1 = (function (){var statearr_29619 = state_29617;
(statearr_29619[(7)] = inst_29614);

return statearr_29619;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29617__$1,inst_29615);
} else {
return null;
}
}
});})(c__23161__auto__))
;
return ((function (switch__23071__auto__,c__23161__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23072__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23072__auto____0 = (function (){
var statearr_29620 = [null,null,null,null,null,null,null,null];
(statearr_29620[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23072__auto__);

(statearr_29620[(1)] = (1));

return statearr_29620;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23072__auto____1 = (function (state_29617){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_29617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e29621){if((e29621 instanceof Object)){
var ex__23075__auto__ = e29621;
var statearr_29622_29624 = state_29617;
(statearr_29622_29624[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29625 = state_29617;
state_29617 = G__29625;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23072__auto__ = function(state_29617){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23072__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23072__auto____1.call(this,state_29617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23072__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23072__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto__))
})();
var state__23163__auto__ = (function (){var statearr_29623 = f__23162__auto__.call(null);
(statearr_29623[(6)] = c__23161__auto__);

return statearr_29623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto__))
);

return c__23161__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto__,figwheel_version,temp__5457__auto__){
return (function (state_29632){
var state_val_29633 = (state_29632[(1)]);
if((state_val_29633 === (1))){
var inst_29626 = cljs.core.async.timeout.call(null,(2000));
var state_29632__$1 = state_29632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29632__$1,(2),inst_29626);
} else {
if((state_val_29633 === (2))){
var inst_29628 = (state_29632[(2)]);
var inst_29629 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29630 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29629);
var state_29632__$1 = (function (){var statearr_29634 = state_29632;
(statearr_29634[(7)] = inst_29628);

return statearr_29634;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29632__$1,inst_29630);
} else {
return null;
}
}
});})(c__23161__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__23071__auto__,c__23161__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23072__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23072__auto____0 = (function (){
var statearr_29635 = [null,null,null,null,null,null,null,null];
(statearr_29635[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23072__auto__);

(statearr_29635[(1)] = (1));

return statearr_29635;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23072__auto____1 = (function (state_29632){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_29632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e29636){if((e29636 instanceof Object)){
var ex__23075__auto__ = e29636;
var statearr_29637_29639 = state_29632;
(statearr_29637_29639[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29640 = state_29632;
state_29632 = G__29640;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23072__auto__ = function(state_29632){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23072__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23072__auto____1.call(this,state_29632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23072__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23072__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto__,figwheel_version,temp__5457__auto__))
})();
var state__23163__auto__ = (function (){var statearr_29638 = f__23162__auto__.call(null);
(statearr_29638[(6)] = c__23161__auto__);

return statearr_29638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto__,figwheel_version,temp__5457__auto__))
);

return c__23161__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29641){
var map__29642 = p__29641;
var map__29642__$1 = ((((!((map__29642 == null)))?(((((map__29642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29642):map__29642);
var file = cljs.core.get.call(null,map__29642__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29642__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29642__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29644 = "";
var G__29644__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29644),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29644);
var G__29644__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29644__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29644__$1);
if(cljs.core.truth_((function (){var and__3925__auto__ = line;
if(cljs.core.truth_(and__3925__auto__)){
return column;
} else {
return and__3925__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29644__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29644__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29645){
var map__29646 = p__29645;
var map__29646__$1 = ((((!((map__29646 == null)))?(((((map__29646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29646):map__29646);
var ed = map__29646__$1;
var formatted_exception = cljs.core.get.call(null,map__29646__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29646__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29646__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29648_29652 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29649_29653 = null;
var count__29650_29654 = (0);
var i__29651_29655 = (0);
while(true){
if((i__29651_29655 < count__29650_29654)){
var msg_29656 = cljs.core._nth.call(null,chunk__29649_29653,i__29651_29655);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29656);


var G__29657 = seq__29648_29652;
var G__29658 = chunk__29649_29653;
var G__29659 = count__29650_29654;
var G__29660 = (i__29651_29655 + (1));
seq__29648_29652 = G__29657;
chunk__29649_29653 = G__29658;
count__29650_29654 = G__29659;
i__29651_29655 = G__29660;
continue;
} else {
var temp__5457__auto___29661 = cljs.core.seq.call(null,seq__29648_29652);
if(temp__5457__auto___29661){
var seq__29648_29662__$1 = temp__5457__auto___29661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29648_29662__$1)){
var c__4337__auto___29663 = cljs.core.chunk_first.call(null,seq__29648_29662__$1);
var G__29664 = cljs.core.chunk_rest.call(null,seq__29648_29662__$1);
var G__29665 = c__4337__auto___29663;
var G__29666 = cljs.core.count.call(null,c__4337__auto___29663);
var G__29667 = (0);
seq__29648_29652 = G__29664;
chunk__29649_29653 = G__29665;
count__29650_29654 = G__29666;
i__29651_29655 = G__29667;
continue;
} else {
var msg_29668 = cljs.core.first.call(null,seq__29648_29662__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29668);


var G__29669 = cljs.core.next.call(null,seq__29648_29662__$1);
var G__29670 = null;
var G__29671 = (0);
var G__29672 = (0);
seq__29648_29652 = G__29669;
chunk__29649_29653 = G__29670;
count__29650_29654 = G__29671;
i__29651_29655 = G__29672;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29673){
var map__29674 = p__29673;
var map__29674__$1 = ((((!((map__29674 == null)))?(((((map__29674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29674):map__29674);
var w = map__29674__$1;
var message = cljs.core.get.call(null,map__29674__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3925__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3925__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3925__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29676 = cljs.core.seq.call(null,plugins);
var chunk__29677 = null;
var count__29678 = (0);
var i__29679 = (0);
while(true){
if((i__29679 < count__29678)){
var vec__29680 = cljs.core._nth.call(null,chunk__29677,i__29679);
var k = cljs.core.nth.call(null,vec__29680,(0),null);
var plugin = cljs.core.nth.call(null,vec__29680,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29686 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29676,chunk__29677,count__29678,i__29679,pl_29686,vec__29680,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29686.call(null,msg_hist);
});})(seq__29676,chunk__29677,count__29678,i__29679,pl_29686,vec__29680,k,plugin))
);
} else {
}


var G__29687 = seq__29676;
var G__29688 = chunk__29677;
var G__29689 = count__29678;
var G__29690 = (i__29679 + (1));
seq__29676 = G__29687;
chunk__29677 = G__29688;
count__29678 = G__29689;
i__29679 = G__29690;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29676);
if(temp__5457__auto__){
var seq__29676__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29676__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__29676__$1);
var G__29691 = cljs.core.chunk_rest.call(null,seq__29676__$1);
var G__29692 = c__4337__auto__;
var G__29693 = cljs.core.count.call(null,c__4337__auto__);
var G__29694 = (0);
seq__29676 = G__29691;
chunk__29677 = G__29692;
count__29678 = G__29693;
i__29679 = G__29694;
continue;
} else {
var vec__29683 = cljs.core.first.call(null,seq__29676__$1);
var k = cljs.core.nth.call(null,vec__29683,(0),null);
var plugin = cljs.core.nth.call(null,vec__29683,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29695 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29676,chunk__29677,count__29678,i__29679,pl_29695,vec__29683,k,plugin,seq__29676__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29695.call(null,msg_hist);
});})(seq__29676,chunk__29677,count__29678,i__29679,pl_29695,vec__29683,k,plugin,seq__29676__$1,temp__5457__auto__))
);
} else {
}


var G__29696 = cljs.core.next.call(null,seq__29676__$1);
var G__29697 = null;
var G__29698 = (0);
var G__29699 = (0);
seq__29676 = G__29696;
chunk__29677 = G__29697;
count__29678 = G__29698;
i__29679 = G__29699;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__29701 = arguments.length;
switch (G__29701) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__29702_29707 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29703_29708 = null;
var count__29704_29709 = (0);
var i__29705_29710 = (0);
while(true){
if((i__29705_29710 < count__29704_29709)){
var msg_29711 = cljs.core._nth.call(null,chunk__29703_29708,i__29705_29710);
figwheel.client.socket.handle_incoming_message.call(null,msg_29711);


var G__29712 = seq__29702_29707;
var G__29713 = chunk__29703_29708;
var G__29714 = count__29704_29709;
var G__29715 = (i__29705_29710 + (1));
seq__29702_29707 = G__29712;
chunk__29703_29708 = G__29713;
count__29704_29709 = G__29714;
i__29705_29710 = G__29715;
continue;
} else {
var temp__5457__auto___29716 = cljs.core.seq.call(null,seq__29702_29707);
if(temp__5457__auto___29716){
var seq__29702_29717__$1 = temp__5457__auto___29716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29702_29717__$1)){
var c__4337__auto___29718 = cljs.core.chunk_first.call(null,seq__29702_29717__$1);
var G__29719 = cljs.core.chunk_rest.call(null,seq__29702_29717__$1);
var G__29720 = c__4337__auto___29718;
var G__29721 = cljs.core.count.call(null,c__4337__auto___29718);
var G__29722 = (0);
seq__29702_29707 = G__29719;
chunk__29703_29708 = G__29720;
count__29704_29709 = G__29721;
i__29705_29710 = G__29722;
continue;
} else {
var msg_29723 = cljs.core.first.call(null,seq__29702_29717__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29723);


var G__29724 = cljs.core.next.call(null,seq__29702_29717__$1);
var G__29725 = null;
var G__29726 = (0);
var G__29727 = (0);
seq__29702_29707 = G__29724;
chunk__29703_29708 = G__29725;
count__29704_29709 = G__29726;
i__29705_29710 = G__29727;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29732 = arguments.length;
var i__4518__auto___29733 = (0);
while(true){
if((i__4518__auto___29733 < len__4517__auto___29732)){
args__4520__auto__.push((arguments[i__4518__auto___29733]));

var G__29734 = (i__4518__auto___29733 + (1));
i__4518__auto___29733 = G__29734;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29729){
var map__29730 = p__29729;
var map__29730__$1 = ((((!((map__29730 == null)))?(((((map__29730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29730):map__29730);
var opts = map__29730__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29728){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29728));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29735){if((e29735 instanceof Error)){
var e = e29735;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29735;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__29736){
var map__29737 = p__29736;
var map__29737__$1 = ((((!((map__29737 == null)))?(((((map__29737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29737):map__29737);
var msg_name = cljs.core.get.call(null,map__29737__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1573409132839
