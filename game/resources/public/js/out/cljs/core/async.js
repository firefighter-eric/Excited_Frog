// Compiled by ClojureScript 1.10.312 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23221 = arguments.length;
switch (G__23221) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23222 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23222 = (function (f,blockable,meta23223){
this.f = f;
this.blockable = blockable;
this.meta23223 = meta23223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23224,meta23223__$1){
var self__ = this;
var _23224__$1 = this;
return (new cljs.core.async.t_cljs$core$async23222(self__.f,self__.blockable,meta23223__$1));
});

cljs.core.async.t_cljs$core$async23222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23224){
var self__ = this;
var _23224__$1 = this;
return self__.meta23223;
});

cljs.core.async.t_cljs$core$async23222.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23222.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23222.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23222.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23223","meta23223",-1171842754,null)], null);
});

cljs.core.async.t_cljs$core$async23222.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23222";

cljs.core.async.t_cljs$core$async23222.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async23222");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23222.
 */
cljs.core.async.__GT_t_cljs$core$async23222 = (function cljs$core$async$__GT_t_cljs$core$async23222(f__$1,blockable__$1,meta23223){
return (new cljs.core.async.t_cljs$core$async23222(f__$1,blockable__$1,meta23223));
});

}

return (new cljs.core.async.t_cljs$core$async23222(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23228 = arguments.length;
switch (G__23228) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23231 = arguments.length;
switch (G__23231) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23234 = arguments.length;
switch (G__23234) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23236 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23236);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23236,ret){
return (function (){
return fn1.call(null,val_23236);
});})(val_23236,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23238 = arguments.length;
switch (G__23238) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4394__auto___23240 = n;
var x_23241 = (0);
while(true){
if((x_23241 < n__4394__auto___23240)){
(a[x_23241] = (0));

var G__23242 = (x_23241 + (1));
x_23241 = G__23242;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23243 = (i + (1));
i = G__23243;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23244 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23244 = (function (flag,meta23245){
this.flag = flag;
this.meta23245 = meta23245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23246,meta23245__$1){
var self__ = this;
var _23246__$1 = this;
return (new cljs.core.async.t_cljs$core$async23244(self__.flag,meta23245__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23246){
var self__ = this;
var _23246__$1 = this;
return self__.meta23245;
});})(flag))
;

cljs.core.async.t_cljs$core$async23244.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23244.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23244.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23244.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23244.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23245","meta23245",-1224671812,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23244";

cljs.core.async.t_cljs$core$async23244.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async23244");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23244.
 */
cljs.core.async.__GT_t_cljs$core$async23244 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23244(flag__$1,meta23245){
return (new cljs.core.async.t_cljs$core$async23244(flag__$1,meta23245));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23244(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23247 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23247 = (function (flag,cb,meta23248){
this.flag = flag;
this.cb = cb;
this.meta23248 = meta23248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23249,meta23248__$1){
var self__ = this;
var _23249__$1 = this;
return (new cljs.core.async.t_cljs$core$async23247(self__.flag,self__.cb,meta23248__$1));
});

cljs.core.async.t_cljs$core$async23247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23249){
var self__ = this;
var _23249__$1 = this;
return self__.meta23248;
});

cljs.core.async.t_cljs$core$async23247.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23247.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23247.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23247.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23248","meta23248",-1485634992,null)], null);
});

cljs.core.async.t_cljs$core$async23247.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23247";

cljs.core.async.t_cljs$core$async23247.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async23247");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23247.
 */
cljs.core.async.__GT_t_cljs$core$async23247 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23247(flag__$1,cb__$1,meta23248){
return (new cljs.core.async.t_cljs$core$async23247(flag__$1,cb__$1,meta23248));
});

}

return (new cljs.core.async.t_cljs$core$async23247(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23250_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23250_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23251_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23251_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3936__auto__ = wport;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23252 = (i + (1));
i = G__23252;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3936__auto__ = ret;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3925__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3925__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___23258 = arguments.length;
var i__4518__auto___23259 = (0);
while(true){
if((i__4518__auto___23259 < len__4517__auto___23258)){
args__4520__auto__.push((arguments[i__4518__auto___23259]));

var G__23260 = (i__4518__auto___23259 + (1));
i__4518__auto___23259 = G__23260;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23255){
var map__23256 = p__23255;
var map__23256__$1 = ((((!((map__23256 == null)))?(((((map__23256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23256):map__23256);
var opts = map__23256__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23253){
var G__23254 = cljs.core.first.call(null,seq23253);
var seq23253__$1 = cljs.core.next.call(null,seq23253);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23254,seq23253__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23262 = arguments.length;
switch (G__23262) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23161__auto___23308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto___23308){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto___23308){
return (function (state_23286){
var state_val_23287 = (state_23286[(1)]);
if((state_val_23287 === (7))){
var inst_23282 = (state_23286[(2)]);
var state_23286__$1 = state_23286;
var statearr_23288_23309 = state_23286__$1;
(statearr_23288_23309[(2)] = inst_23282);

(statearr_23288_23309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23287 === (1))){
var state_23286__$1 = state_23286;
var statearr_23289_23310 = state_23286__$1;
(statearr_23289_23310[(2)] = null);

(statearr_23289_23310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23287 === (4))){
var inst_23265 = (state_23286[(7)]);
var inst_23265__$1 = (state_23286[(2)]);
var inst_23266 = (inst_23265__$1 == null);
var state_23286__$1 = (function (){var statearr_23290 = state_23286;
(statearr_23290[(7)] = inst_23265__$1);

return statearr_23290;
})();
if(cljs.core.truth_(inst_23266)){
var statearr_23291_23311 = state_23286__$1;
(statearr_23291_23311[(1)] = (5));

} else {
var statearr_23292_23312 = state_23286__$1;
(statearr_23292_23312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23287 === (13))){
var state_23286__$1 = state_23286;
var statearr_23293_23313 = state_23286__$1;
(statearr_23293_23313[(2)] = null);

(statearr_23293_23313[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23287 === (6))){
var inst_23265 = (state_23286[(7)]);
var state_23286__$1 = state_23286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23286__$1,(11),to,inst_23265);
} else {
if((state_val_23287 === (3))){
var inst_23284 = (state_23286[(2)]);
var state_23286__$1 = state_23286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23286__$1,inst_23284);
} else {
if((state_val_23287 === (12))){
var state_23286__$1 = state_23286;
var statearr_23294_23314 = state_23286__$1;
(statearr_23294_23314[(2)] = null);

(statearr_23294_23314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23287 === (2))){
var state_23286__$1 = state_23286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23286__$1,(4),from);
} else {
if((state_val_23287 === (11))){
var inst_23275 = (state_23286[(2)]);
var state_23286__$1 = state_23286;
if(cljs.core.truth_(inst_23275)){
var statearr_23295_23315 = state_23286__$1;
(statearr_23295_23315[(1)] = (12));

} else {
var statearr_23296_23316 = state_23286__$1;
(statearr_23296_23316[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23287 === (9))){
var state_23286__$1 = state_23286;
var statearr_23297_23317 = state_23286__$1;
(statearr_23297_23317[(2)] = null);

(statearr_23297_23317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23287 === (5))){
var state_23286__$1 = state_23286;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23298_23318 = state_23286__$1;
(statearr_23298_23318[(1)] = (8));

} else {
var statearr_23299_23319 = state_23286__$1;
(statearr_23299_23319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23287 === (14))){
var inst_23280 = (state_23286[(2)]);
var state_23286__$1 = state_23286;
var statearr_23300_23320 = state_23286__$1;
(statearr_23300_23320[(2)] = inst_23280);

(statearr_23300_23320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23287 === (10))){
var inst_23272 = (state_23286[(2)]);
var state_23286__$1 = state_23286;
var statearr_23301_23321 = state_23286__$1;
(statearr_23301_23321[(2)] = inst_23272);

(statearr_23301_23321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23287 === (8))){
var inst_23269 = cljs.core.async.close_BANG_.call(null,to);
var state_23286__$1 = state_23286;
var statearr_23302_23322 = state_23286__$1;
(statearr_23302_23322[(2)] = inst_23269);

(statearr_23302_23322[(1)] = (10));


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
});})(c__23161__auto___23308))
;
return ((function (switch__23071__auto__,c__23161__auto___23308){
return (function() {
var cljs$core$async$state_machine__23072__auto__ = null;
var cljs$core$async$state_machine__23072__auto____0 = (function (){
var statearr_23303 = [null,null,null,null,null,null,null,null];
(statearr_23303[(0)] = cljs$core$async$state_machine__23072__auto__);

(statearr_23303[(1)] = (1));

return statearr_23303;
});
var cljs$core$async$state_machine__23072__auto____1 = (function (state_23286){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_23286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e23304){if((e23304 instanceof Object)){
var ex__23075__auto__ = e23304;
var statearr_23305_23323 = state_23286;
(statearr_23305_23323[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23324 = state_23286;
state_23286 = G__23324;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$state_machine__23072__auto__ = function(state_23286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23072__auto____1.call(this,state_23286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23072__auto____0;
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23072__auto____1;
return cljs$core$async$state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto___23308))
})();
var state__23163__auto__ = (function (){var statearr_23306 = f__23162__auto__.call(null);
(statearr_23306[(6)] = c__23161__auto___23308);

return statearr_23306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto___23308))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23325){
var vec__23326 = p__23325;
var v = cljs.core.nth.call(null,vec__23326,(0),null);
var p = cljs.core.nth.call(null,vec__23326,(1),null);
var job = vec__23326;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23161__auto___23497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto___23497,res,vec__23326,v,p,job,jobs,results){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto___23497,res,vec__23326,v,p,job,jobs,results){
return (function (state_23333){
var state_val_23334 = (state_23333[(1)]);
if((state_val_23334 === (1))){
var state_23333__$1 = state_23333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23333__$1,(2),res,v);
} else {
if((state_val_23334 === (2))){
var inst_23330 = (state_23333[(2)]);
var inst_23331 = cljs.core.async.close_BANG_.call(null,res);
var state_23333__$1 = (function (){var statearr_23335 = state_23333;
(statearr_23335[(7)] = inst_23330);

return statearr_23335;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23333__$1,inst_23331);
} else {
return null;
}
}
});})(c__23161__auto___23497,res,vec__23326,v,p,job,jobs,results))
;
return ((function (switch__23071__auto__,c__23161__auto___23497,res,vec__23326,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____0 = (function (){
var statearr_23336 = [null,null,null,null,null,null,null,null];
(statearr_23336[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__);

(statearr_23336[(1)] = (1));

return statearr_23336;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____1 = (function (state_23333){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_23333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e23337){if((e23337 instanceof Object)){
var ex__23075__auto__ = e23337;
var statearr_23338_23498 = state_23333;
(statearr_23338_23498[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23499 = state_23333;
state_23333 = G__23499;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__ = function(state_23333){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____1.call(this,state_23333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto___23497,res,vec__23326,v,p,job,jobs,results))
})();
var state__23163__auto__ = (function (){var statearr_23339 = f__23162__auto__.call(null);
(statearr_23339[(6)] = c__23161__auto___23497);

return statearr_23339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto___23497,res,vec__23326,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23340){
var vec__23341 = p__23340;
var v = cljs.core.nth.call(null,vec__23341,(0),null);
var p = cljs.core.nth.call(null,vec__23341,(1),null);
var job = vec__23341;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4394__auto___23500 = n;
var __23501 = (0);
while(true){
if((__23501 < n__4394__auto___23500)){
var G__23344_23502 = type;
var G__23344_23503__$1 = (((G__23344_23502 instanceof cljs.core.Keyword))?G__23344_23502.fqn:null);
switch (G__23344_23503__$1) {
case "compute":
var c__23161__auto___23505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23501,c__23161__auto___23505,G__23344_23502,G__23344_23503__$1,n__4394__auto___23500,jobs,results,process,async){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (__23501,c__23161__auto___23505,G__23344_23502,G__23344_23503__$1,n__4394__auto___23500,jobs,results,process,async){
return (function (state_23357){
var state_val_23358 = (state_23357[(1)]);
if((state_val_23358 === (1))){
var state_23357__$1 = state_23357;
var statearr_23359_23506 = state_23357__$1;
(statearr_23359_23506[(2)] = null);

(statearr_23359_23506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23358 === (2))){
var state_23357__$1 = state_23357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23357__$1,(4),jobs);
} else {
if((state_val_23358 === (3))){
var inst_23355 = (state_23357[(2)]);
var state_23357__$1 = state_23357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23357__$1,inst_23355);
} else {
if((state_val_23358 === (4))){
var inst_23347 = (state_23357[(2)]);
var inst_23348 = process.call(null,inst_23347);
var state_23357__$1 = state_23357;
if(cljs.core.truth_(inst_23348)){
var statearr_23360_23507 = state_23357__$1;
(statearr_23360_23507[(1)] = (5));

} else {
var statearr_23361_23508 = state_23357__$1;
(statearr_23361_23508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23358 === (5))){
var state_23357__$1 = state_23357;
var statearr_23362_23509 = state_23357__$1;
(statearr_23362_23509[(2)] = null);

(statearr_23362_23509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23358 === (6))){
var state_23357__$1 = state_23357;
var statearr_23363_23510 = state_23357__$1;
(statearr_23363_23510[(2)] = null);

(statearr_23363_23510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23358 === (7))){
var inst_23353 = (state_23357[(2)]);
var state_23357__$1 = state_23357;
var statearr_23364_23511 = state_23357__$1;
(statearr_23364_23511[(2)] = inst_23353);

(statearr_23364_23511[(1)] = (3));


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
});})(__23501,c__23161__auto___23505,G__23344_23502,G__23344_23503__$1,n__4394__auto___23500,jobs,results,process,async))
;
return ((function (__23501,switch__23071__auto__,c__23161__auto___23505,G__23344_23502,G__23344_23503__$1,n__4394__auto___23500,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____0 = (function (){
var statearr_23365 = [null,null,null,null,null,null,null];
(statearr_23365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__);

(statearr_23365[(1)] = (1));

return statearr_23365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____1 = (function (state_23357){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_23357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e23366){if((e23366 instanceof Object)){
var ex__23075__auto__ = e23366;
var statearr_23367_23512 = state_23357;
(statearr_23367_23512[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23513 = state_23357;
state_23357 = G__23513;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__ = function(state_23357){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____1.call(this,state_23357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__;
})()
;})(__23501,switch__23071__auto__,c__23161__auto___23505,G__23344_23502,G__23344_23503__$1,n__4394__auto___23500,jobs,results,process,async))
})();
var state__23163__auto__ = (function (){var statearr_23368 = f__23162__auto__.call(null);
(statearr_23368[(6)] = c__23161__auto___23505);

return statearr_23368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(__23501,c__23161__auto___23505,G__23344_23502,G__23344_23503__$1,n__4394__auto___23500,jobs,results,process,async))
);


break;
case "async":
var c__23161__auto___23514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23501,c__23161__auto___23514,G__23344_23502,G__23344_23503__$1,n__4394__auto___23500,jobs,results,process,async){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (__23501,c__23161__auto___23514,G__23344_23502,G__23344_23503__$1,n__4394__auto___23500,jobs,results,process,async){
return (function (state_23381){
var state_val_23382 = (state_23381[(1)]);
if((state_val_23382 === (1))){
var state_23381__$1 = state_23381;
var statearr_23383_23515 = state_23381__$1;
(statearr_23383_23515[(2)] = null);

(statearr_23383_23515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (2))){
var state_23381__$1 = state_23381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23381__$1,(4),jobs);
} else {
if((state_val_23382 === (3))){
var inst_23379 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23381__$1,inst_23379);
} else {
if((state_val_23382 === (4))){
var inst_23371 = (state_23381[(2)]);
var inst_23372 = async.call(null,inst_23371);
var state_23381__$1 = state_23381;
if(cljs.core.truth_(inst_23372)){
var statearr_23384_23516 = state_23381__$1;
(statearr_23384_23516[(1)] = (5));

} else {
var statearr_23385_23517 = state_23381__$1;
(statearr_23385_23517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (5))){
var state_23381__$1 = state_23381;
var statearr_23386_23518 = state_23381__$1;
(statearr_23386_23518[(2)] = null);

(statearr_23386_23518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (6))){
var state_23381__$1 = state_23381;
var statearr_23387_23519 = state_23381__$1;
(statearr_23387_23519[(2)] = null);

(statearr_23387_23519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (7))){
var inst_23377 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
var statearr_23388_23520 = state_23381__$1;
(statearr_23388_23520[(2)] = inst_23377);

(statearr_23388_23520[(1)] = (3));


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
});})(__23501,c__23161__auto___23514,G__23344_23502,G__23344_23503__$1,n__4394__auto___23500,jobs,results,process,async))
;
return ((function (__23501,switch__23071__auto__,c__23161__auto___23514,G__23344_23502,G__23344_23503__$1,n__4394__auto___23500,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____0 = (function (){
var statearr_23389 = [null,null,null,null,null,null,null];
(statearr_23389[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__);

(statearr_23389[(1)] = (1));

return statearr_23389;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____1 = (function (state_23381){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_23381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e23390){if((e23390 instanceof Object)){
var ex__23075__auto__ = e23390;
var statearr_23391_23521 = state_23381;
(statearr_23391_23521[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23522 = state_23381;
state_23381 = G__23522;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__ = function(state_23381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____1.call(this,state_23381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__;
})()
;})(__23501,switch__23071__auto__,c__23161__auto___23514,G__23344_23502,G__23344_23503__$1,n__4394__auto___23500,jobs,results,process,async))
})();
var state__23163__auto__ = (function (){var statearr_23392 = f__23162__auto__.call(null);
(statearr_23392[(6)] = c__23161__auto___23514);

return statearr_23392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(__23501,c__23161__auto___23514,G__23344_23502,G__23344_23503__$1,n__4394__auto___23500,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23344_23503__$1)].join('')));

}

var G__23523 = (__23501 + (1));
__23501 = G__23523;
continue;
} else {
}
break;
}

var c__23161__auto___23524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto___23524,jobs,results,process,async){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto___23524,jobs,results,process,async){
return (function (state_23414){
var state_val_23415 = (state_23414[(1)]);
if((state_val_23415 === (1))){
var state_23414__$1 = state_23414;
var statearr_23416_23525 = state_23414__$1;
(statearr_23416_23525[(2)] = null);

(statearr_23416_23525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (2))){
var state_23414__$1 = state_23414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23414__$1,(4),from);
} else {
if((state_val_23415 === (3))){
var inst_23412 = (state_23414[(2)]);
var state_23414__$1 = state_23414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23414__$1,inst_23412);
} else {
if((state_val_23415 === (4))){
var inst_23395 = (state_23414[(7)]);
var inst_23395__$1 = (state_23414[(2)]);
var inst_23396 = (inst_23395__$1 == null);
var state_23414__$1 = (function (){var statearr_23417 = state_23414;
(statearr_23417[(7)] = inst_23395__$1);

return statearr_23417;
})();
if(cljs.core.truth_(inst_23396)){
var statearr_23418_23526 = state_23414__$1;
(statearr_23418_23526[(1)] = (5));

} else {
var statearr_23419_23527 = state_23414__$1;
(statearr_23419_23527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (5))){
var inst_23398 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23414__$1 = state_23414;
var statearr_23420_23528 = state_23414__$1;
(statearr_23420_23528[(2)] = inst_23398);

(statearr_23420_23528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (6))){
var inst_23400 = (state_23414[(8)]);
var inst_23395 = (state_23414[(7)]);
var inst_23400__$1 = cljs.core.async.chan.call(null,(1));
var inst_23401 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23402 = [inst_23395,inst_23400__$1];
var inst_23403 = (new cljs.core.PersistentVector(null,2,(5),inst_23401,inst_23402,null));
var state_23414__$1 = (function (){var statearr_23421 = state_23414;
(statearr_23421[(8)] = inst_23400__$1);

return statearr_23421;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23414__$1,(8),jobs,inst_23403);
} else {
if((state_val_23415 === (7))){
var inst_23410 = (state_23414[(2)]);
var state_23414__$1 = state_23414;
var statearr_23422_23529 = state_23414__$1;
(statearr_23422_23529[(2)] = inst_23410);

(statearr_23422_23529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (8))){
var inst_23400 = (state_23414[(8)]);
var inst_23405 = (state_23414[(2)]);
var state_23414__$1 = (function (){var statearr_23423 = state_23414;
(statearr_23423[(9)] = inst_23405);

return statearr_23423;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23414__$1,(9),results,inst_23400);
} else {
if((state_val_23415 === (9))){
var inst_23407 = (state_23414[(2)]);
var state_23414__$1 = (function (){var statearr_23424 = state_23414;
(statearr_23424[(10)] = inst_23407);

return statearr_23424;
})();
var statearr_23425_23530 = state_23414__$1;
(statearr_23425_23530[(2)] = null);

(statearr_23425_23530[(1)] = (2));


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
});})(c__23161__auto___23524,jobs,results,process,async))
;
return ((function (switch__23071__auto__,c__23161__auto___23524,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____0 = (function (){
var statearr_23426 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23426[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__);

(statearr_23426[(1)] = (1));

return statearr_23426;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____1 = (function (state_23414){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_23414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e23427){if((e23427 instanceof Object)){
var ex__23075__auto__ = e23427;
var statearr_23428_23531 = state_23414;
(statearr_23428_23531[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23532 = state_23414;
state_23414 = G__23532;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__ = function(state_23414){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____1.call(this,state_23414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto___23524,jobs,results,process,async))
})();
var state__23163__auto__ = (function (){var statearr_23429 = f__23162__auto__.call(null);
(statearr_23429[(6)] = c__23161__auto___23524);

return statearr_23429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto___23524,jobs,results,process,async))
);


var c__23161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto__,jobs,results,process,async){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto__,jobs,results,process,async){
return (function (state_23467){
var state_val_23468 = (state_23467[(1)]);
if((state_val_23468 === (7))){
var inst_23463 = (state_23467[(2)]);
var state_23467__$1 = state_23467;
var statearr_23469_23533 = state_23467__$1;
(statearr_23469_23533[(2)] = inst_23463);

(statearr_23469_23533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23468 === (20))){
var state_23467__$1 = state_23467;
var statearr_23470_23534 = state_23467__$1;
(statearr_23470_23534[(2)] = null);

(statearr_23470_23534[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23468 === (1))){
var state_23467__$1 = state_23467;
var statearr_23471_23535 = state_23467__$1;
(statearr_23471_23535[(2)] = null);

(statearr_23471_23535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23468 === (4))){
var inst_23432 = (state_23467[(7)]);
var inst_23432__$1 = (state_23467[(2)]);
var inst_23433 = (inst_23432__$1 == null);
var state_23467__$1 = (function (){var statearr_23472 = state_23467;
(statearr_23472[(7)] = inst_23432__$1);

return statearr_23472;
})();
if(cljs.core.truth_(inst_23433)){
var statearr_23473_23536 = state_23467__$1;
(statearr_23473_23536[(1)] = (5));

} else {
var statearr_23474_23537 = state_23467__$1;
(statearr_23474_23537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23468 === (15))){
var inst_23445 = (state_23467[(8)]);
var state_23467__$1 = state_23467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23467__$1,(18),to,inst_23445);
} else {
if((state_val_23468 === (21))){
var inst_23458 = (state_23467[(2)]);
var state_23467__$1 = state_23467;
var statearr_23475_23538 = state_23467__$1;
(statearr_23475_23538[(2)] = inst_23458);

(statearr_23475_23538[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23468 === (13))){
var inst_23460 = (state_23467[(2)]);
var state_23467__$1 = (function (){var statearr_23476 = state_23467;
(statearr_23476[(9)] = inst_23460);

return statearr_23476;
})();
var statearr_23477_23539 = state_23467__$1;
(statearr_23477_23539[(2)] = null);

(statearr_23477_23539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23468 === (6))){
var inst_23432 = (state_23467[(7)]);
var state_23467__$1 = state_23467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23467__$1,(11),inst_23432);
} else {
if((state_val_23468 === (17))){
var inst_23453 = (state_23467[(2)]);
var state_23467__$1 = state_23467;
if(cljs.core.truth_(inst_23453)){
var statearr_23478_23540 = state_23467__$1;
(statearr_23478_23540[(1)] = (19));

} else {
var statearr_23479_23541 = state_23467__$1;
(statearr_23479_23541[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23468 === (3))){
var inst_23465 = (state_23467[(2)]);
var state_23467__$1 = state_23467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23467__$1,inst_23465);
} else {
if((state_val_23468 === (12))){
var inst_23442 = (state_23467[(10)]);
var state_23467__$1 = state_23467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23467__$1,(14),inst_23442);
} else {
if((state_val_23468 === (2))){
var state_23467__$1 = state_23467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23467__$1,(4),results);
} else {
if((state_val_23468 === (19))){
var state_23467__$1 = state_23467;
var statearr_23480_23542 = state_23467__$1;
(statearr_23480_23542[(2)] = null);

(statearr_23480_23542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23468 === (11))){
var inst_23442 = (state_23467[(2)]);
var state_23467__$1 = (function (){var statearr_23481 = state_23467;
(statearr_23481[(10)] = inst_23442);

return statearr_23481;
})();
var statearr_23482_23543 = state_23467__$1;
(statearr_23482_23543[(2)] = null);

(statearr_23482_23543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23468 === (9))){
var state_23467__$1 = state_23467;
var statearr_23483_23544 = state_23467__$1;
(statearr_23483_23544[(2)] = null);

(statearr_23483_23544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23468 === (5))){
var state_23467__$1 = state_23467;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23484_23545 = state_23467__$1;
(statearr_23484_23545[(1)] = (8));

} else {
var statearr_23485_23546 = state_23467__$1;
(statearr_23485_23546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23468 === (14))){
var inst_23445 = (state_23467[(8)]);
var inst_23447 = (state_23467[(11)]);
var inst_23445__$1 = (state_23467[(2)]);
var inst_23446 = (inst_23445__$1 == null);
var inst_23447__$1 = cljs.core.not.call(null,inst_23446);
var state_23467__$1 = (function (){var statearr_23486 = state_23467;
(statearr_23486[(8)] = inst_23445__$1);

(statearr_23486[(11)] = inst_23447__$1);

return statearr_23486;
})();
if(inst_23447__$1){
var statearr_23487_23547 = state_23467__$1;
(statearr_23487_23547[(1)] = (15));

} else {
var statearr_23488_23548 = state_23467__$1;
(statearr_23488_23548[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23468 === (16))){
var inst_23447 = (state_23467[(11)]);
var state_23467__$1 = state_23467;
var statearr_23489_23549 = state_23467__$1;
(statearr_23489_23549[(2)] = inst_23447);

(statearr_23489_23549[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23468 === (10))){
var inst_23439 = (state_23467[(2)]);
var state_23467__$1 = state_23467;
var statearr_23490_23550 = state_23467__$1;
(statearr_23490_23550[(2)] = inst_23439);

(statearr_23490_23550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23468 === (18))){
var inst_23450 = (state_23467[(2)]);
var state_23467__$1 = state_23467;
var statearr_23491_23551 = state_23467__$1;
(statearr_23491_23551[(2)] = inst_23450);

(statearr_23491_23551[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23468 === (8))){
var inst_23436 = cljs.core.async.close_BANG_.call(null,to);
var state_23467__$1 = state_23467;
var statearr_23492_23552 = state_23467__$1;
(statearr_23492_23552[(2)] = inst_23436);

(statearr_23492_23552[(1)] = (10));


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
});})(c__23161__auto__,jobs,results,process,async))
;
return ((function (switch__23071__auto__,c__23161__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____0 = (function (){
var statearr_23493 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__);

(statearr_23493[(1)] = (1));

return statearr_23493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____1 = (function (state_23467){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_23467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e23494){if((e23494 instanceof Object)){
var ex__23075__auto__ = e23494;
var statearr_23495_23553 = state_23467;
(statearr_23495_23553[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23554 = state_23467;
state_23467 = G__23554;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__ = function(state_23467){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____1.call(this,state_23467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto__,jobs,results,process,async))
})();
var state__23163__auto__ = (function (){var statearr_23496 = f__23162__auto__.call(null);
(statearr_23496[(6)] = c__23161__auto__);

return statearr_23496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto__,jobs,results,process,async))
);

return c__23161__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23556 = arguments.length;
switch (G__23556) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23559 = arguments.length;
switch (G__23559) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23562 = arguments.length;
switch (G__23562) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23161__auto___23611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto___23611,tc,fc){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto___23611,tc,fc){
return (function (state_23588){
var state_val_23589 = (state_23588[(1)]);
if((state_val_23589 === (7))){
var inst_23584 = (state_23588[(2)]);
var state_23588__$1 = state_23588;
var statearr_23590_23612 = state_23588__$1;
(statearr_23590_23612[(2)] = inst_23584);

(statearr_23590_23612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (1))){
var state_23588__$1 = state_23588;
var statearr_23591_23613 = state_23588__$1;
(statearr_23591_23613[(2)] = null);

(statearr_23591_23613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (4))){
var inst_23565 = (state_23588[(7)]);
var inst_23565__$1 = (state_23588[(2)]);
var inst_23566 = (inst_23565__$1 == null);
var state_23588__$1 = (function (){var statearr_23592 = state_23588;
(statearr_23592[(7)] = inst_23565__$1);

return statearr_23592;
})();
if(cljs.core.truth_(inst_23566)){
var statearr_23593_23614 = state_23588__$1;
(statearr_23593_23614[(1)] = (5));

} else {
var statearr_23594_23615 = state_23588__$1;
(statearr_23594_23615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (13))){
var state_23588__$1 = state_23588;
var statearr_23595_23616 = state_23588__$1;
(statearr_23595_23616[(2)] = null);

(statearr_23595_23616[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (6))){
var inst_23565 = (state_23588[(7)]);
var inst_23571 = p.call(null,inst_23565);
var state_23588__$1 = state_23588;
if(cljs.core.truth_(inst_23571)){
var statearr_23596_23617 = state_23588__$1;
(statearr_23596_23617[(1)] = (9));

} else {
var statearr_23597_23618 = state_23588__$1;
(statearr_23597_23618[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (3))){
var inst_23586 = (state_23588[(2)]);
var state_23588__$1 = state_23588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23588__$1,inst_23586);
} else {
if((state_val_23589 === (12))){
var state_23588__$1 = state_23588;
var statearr_23598_23619 = state_23588__$1;
(statearr_23598_23619[(2)] = null);

(statearr_23598_23619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (2))){
var state_23588__$1 = state_23588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23588__$1,(4),ch);
} else {
if((state_val_23589 === (11))){
var inst_23565 = (state_23588[(7)]);
var inst_23575 = (state_23588[(2)]);
var state_23588__$1 = state_23588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23588__$1,(8),inst_23575,inst_23565);
} else {
if((state_val_23589 === (9))){
var state_23588__$1 = state_23588;
var statearr_23599_23620 = state_23588__$1;
(statearr_23599_23620[(2)] = tc);

(statearr_23599_23620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (5))){
var inst_23568 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23569 = cljs.core.async.close_BANG_.call(null,fc);
var state_23588__$1 = (function (){var statearr_23600 = state_23588;
(statearr_23600[(8)] = inst_23568);

return statearr_23600;
})();
var statearr_23601_23621 = state_23588__$1;
(statearr_23601_23621[(2)] = inst_23569);

(statearr_23601_23621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (14))){
var inst_23582 = (state_23588[(2)]);
var state_23588__$1 = state_23588;
var statearr_23602_23622 = state_23588__$1;
(statearr_23602_23622[(2)] = inst_23582);

(statearr_23602_23622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (10))){
var state_23588__$1 = state_23588;
var statearr_23603_23623 = state_23588__$1;
(statearr_23603_23623[(2)] = fc);

(statearr_23603_23623[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (8))){
var inst_23577 = (state_23588[(2)]);
var state_23588__$1 = state_23588;
if(cljs.core.truth_(inst_23577)){
var statearr_23604_23624 = state_23588__$1;
(statearr_23604_23624[(1)] = (12));

} else {
var statearr_23605_23625 = state_23588__$1;
(statearr_23605_23625[(1)] = (13));

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
});})(c__23161__auto___23611,tc,fc))
;
return ((function (switch__23071__auto__,c__23161__auto___23611,tc,fc){
return (function() {
var cljs$core$async$state_machine__23072__auto__ = null;
var cljs$core$async$state_machine__23072__auto____0 = (function (){
var statearr_23606 = [null,null,null,null,null,null,null,null,null];
(statearr_23606[(0)] = cljs$core$async$state_machine__23072__auto__);

(statearr_23606[(1)] = (1));

return statearr_23606;
});
var cljs$core$async$state_machine__23072__auto____1 = (function (state_23588){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_23588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e23607){if((e23607 instanceof Object)){
var ex__23075__auto__ = e23607;
var statearr_23608_23626 = state_23588;
(statearr_23608_23626[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23627 = state_23588;
state_23588 = G__23627;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$state_machine__23072__auto__ = function(state_23588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23072__auto____1.call(this,state_23588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23072__auto____0;
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23072__auto____1;
return cljs$core$async$state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto___23611,tc,fc))
})();
var state__23163__auto__ = (function (){var statearr_23609 = f__23162__auto__.call(null);
(statearr_23609[(6)] = c__23161__auto___23611);

return statearr_23609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto___23611,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto__){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto__){
return (function (state_23648){
var state_val_23649 = (state_23648[(1)]);
if((state_val_23649 === (7))){
var inst_23644 = (state_23648[(2)]);
var state_23648__$1 = state_23648;
var statearr_23650_23668 = state_23648__$1;
(statearr_23650_23668[(2)] = inst_23644);

(statearr_23650_23668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (1))){
var inst_23628 = init;
var state_23648__$1 = (function (){var statearr_23651 = state_23648;
(statearr_23651[(7)] = inst_23628);

return statearr_23651;
})();
var statearr_23652_23669 = state_23648__$1;
(statearr_23652_23669[(2)] = null);

(statearr_23652_23669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (4))){
var inst_23631 = (state_23648[(8)]);
var inst_23631__$1 = (state_23648[(2)]);
var inst_23632 = (inst_23631__$1 == null);
var state_23648__$1 = (function (){var statearr_23653 = state_23648;
(statearr_23653[(8)] = inst_23631__$1);

return statearr_23653;
})();
if(cljs.core.truth_(inst_23632)){
var statearr_23654_23670 = state_23648__$1;
(statearr_23654_23670[(1)] = (5));

} else {
var statearr_23655_23671 = state_23648__$1;
(statearr_23655_23671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (6))){
var inst_23628 = (state_23648[(7)]);
var inst_23631 = (state_23648[(8)]);
var inst_23635 = (state_23648[(9)]);
var inst_23635__$1 = f.call(null,inst_23628,inst_23631);
var inst_23636 = cljs.core.reduced_QMARK_.call(null,inst_23635__$1);
var state_23648__$1 = (function (){var statearr_23656 = state_23648;
(statearr_23656[(9)] = inst_23635__$1);

return statearr_23656;
})();
if(inst_23636){
var statearr_23657_23672 = state_23648__$1;
(statearr_23657_23672[(1)] = (8));

} else {
var statearr_23658_23673 = state_23648__$1;
(statearr_23658_23673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (3))){
var inst_23646 = (state_23648[(2)]);
var state_23648__$1 = state_23648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23648__$1,inst_23646);
} else {
if((state_val_23649 === (2))){
var state_23648__$1 = state_23648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23648__$1,(4),ch);
} else {
if((state_val_23649 === (9))){
var inst_23635 = (state_23648[(9)]);
var inst_23628 = inst_23635;
var state_23648__$1 = (function (){var statearr_23659 = state_23648;
(statearr_23659[(7)] = inst_23628);

return statearr_23659;
})();
var statearr_23660_23674 = state_23648__$1;
(statearr_23660_23674[(2)] = null);

(statearr_23660_23674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (5))){
var inst_23628 = (state_23648[(7)]);
var state_23648__$1 = state_23648;
var statearr_23661_23675 = state_23648__$1;
(statearr_23661_23675[(2)] = inst_23628);

(statearr_23661_23675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (10))){
var inst_23642 = (state_23648[(2)]);
var state_23648__$1 = state_23648;
var statearr_23662_23676 = state_23648__$1;
(statearr_23662_23676[(2)] = inst_23642);

(statearr_23662_23676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (8))){
var inst_23635 = (state_23648[(9)]);
var inst_23638 = cljs.core.deref.call(null,inst_23635);
var state_23648__$1 = state_23648;
var statearr_23663_23677 = state_23648__$1;
(statearr_23663_23677[(2)] = inst_23638);

(statearr_23663_23677[(1)] = (10));


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
});})(c__23161__auto__))
;
return ((function (switch__23071__auto__,c__23161__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23072__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23072__auto____0 = (function (){
var statearr_23664 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23664[(0)] = cljs$core$async$reduce_$_state_machine__23072__auto__);

(statearr_23664[(1)] = (1));

return statearr_23664;
});
var cljs$core$async$reduce_$_state_machine__23072__auto____1 = (function (state_23648){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_23648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e23665){if((e23665 instanceof Object)){
var ex__23075__auto__ = e23665;
var statearr_23666_23678 = state_23648;
(statearr_23666_23678[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23679 = state_23648;
state_23648 = G__23679;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23072__auto__ = function(state_23648){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23072__auto____1.call(this,state_23648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23072__auto____0;
cljs$core$async$reduce_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23072__auto____1;
return cljs$core$async$reduce_$_state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto__))
})();
var state__23163__auto__ = (function (){var statearr_23667 = f__23162__auto__.call(null);
(statearr_23667[(6)] = c__23161__auto__);

return statearr_23667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto__))
);

return c__23161__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto__,f__$1){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto__,f__$1){
return (function (state_23685){
var state_val_23686 = (state_23685[(1)]);
if((state_val_23686 === (1))){
var inst_23680 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23685__$1 = state_23685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23685__$1,(2),inst_23680);
} else {
if((state_val_23686 === (2))){
var inst_23682 = (state_23685[(2)]);
var inst_23683 = f__$1.call(null,inst_23682);
var state_23685__$1 = state_23685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23685__$1,inst_23683);
} else {
return null;
}
}
});})(c__23161__auto__,f__$1))
;
return ((function (switch__23071__auto__,c__23161__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23072__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23072__auto____0 = (function (){
var statearr_23687 = [null,null,null,null,null,null,null];
(statearr_23687[(0)] = cljs$core$async$transduce_$_state_machine__23072__auto__);

(statearr_23687[(1)] = (1));

return statearr_23687;
});
var cljs$core$async$transduce_$_state_machine__23072__auto____1 = (function (state_23685){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_23685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e23688){if((e23688 instanceof Object)){
var ex__23075__auto__ = e23688;
var statearr_23689_23691 = state_23685;
(statearr_23689_23691[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23692 = state_23685;
state_23685 = G__23692;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23072__auto__ = function(state_23685){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23072__auto____1.call(this,state_23685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23072__auto____0;
cljs$core$async$transduce_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23072__auto____1;
return cljs$core$async$transduce_$_state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto__,f__$1))
})();
var state__23163__auto__ = (function (){var statearr_23690 = f__23162__auto__.call(null);
(statearr_23690[(6)] = c__23161__auto__);

return statearr_23690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto__,f__$1))
);

return c__23161__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23694 = arguments.length;
switch (G__23694) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto__){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto__){
return (function (state_23719){
var state_val_23720 = (state_23719[(1)]);
if((state_val_23720 === (7))){
var inst_23701 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
var statearr_23721_23742 = state_23719__$1;
(statearr_23721_23742[(2)] = inst_23701);

(statearr_23721_23742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (1))){
var inst_23695 = cljs.core.seq.call(null,coll);
var inst_23696 = inst_23695;
var state_23719__$1 = (function (){var statearr_23722 = state_23719;
(statearr_23722[(7)] = inst_23696);

return statearr_23722;
})();
var statearr_23723_23743 = state_23719__$1;
(statearr_23723_23743[(2)] = null);

(statearr_23723_23743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (4))){
var inst_23696 = (state_23719[(7)]);
var inst_23699 = cljs.core.first.call(null,inst_23696);
var state_23719__$1 = state_23719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23719__$1,(7),ch,inst_23699);
} else {
if((state_val_23720 === (13))){
var inst_23713 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
var statearr_23724_23744 = state_23719__$1;
(statearr_23724_23744[(2)] = inst_23713);

(statearr_23724_23744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (6))){
var inst_23704 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
if(cljs.core.truth_(inst_23704)){
var statearr_23725_23745 = state_23719__$1;
(statearr_23725_23745[(1)] = (8));

} else {
var statearr_23726_23746 = state_23719__$1;
(statearr_23726_23746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (3))){
var inst_23717 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23719__$1,inst_23717);
} else {
if((state_val_23720 === (12))){
var state_23719__$1 = state_23719;
var statearr_23727_23747 = state_23719__$1;
(statearr_23727_23747[(2)] = null);

(statearr_23727_23747[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (2))){
var inst_23696 = (state_23719[(7)]);
var state_23719__$1 = state_23719;
if(cljs.core.truth_(inst_23696)){
var statearr_23728_23748 = state_23719__$1;
(statearr_23728_23748[(1)] = (4));

} else {
var statearr_23729_23749 = state_23719__$1;
(statearr_23729_23749[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (11))){
var inst_23710 = cljs.core.async.close_BANG_.call(null,ch);
var state_23719__$1 = state_23719;
var statearr_23730_23750 = state_23719__$1;
(statearr_23730_23750[(2)] = inst_23710);

(statearr_23730_23750[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (9))){
var state_23719__$1 = state_23719;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23731_23751 = state_23719__$1;
(statearr_23731_23751[(1)] = (11));

} else {
var statearr_23732_23752 = state_23719__$1;
(statearr_23732_23752[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (5))){
var inst_23696 = (state_23719[(7)]);
var state_23719__$1 = state_23719;
var statearr_23733_23753 = state_23719__$1;
(statearr_23733_23753[(2)] = inst_23696);

(statearr_23733_23753[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (10))){
var inst_23715 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
var statearr_23734_23754 = state_23719__$1;
(statearr_23734_23754[(2)] = inst_23715);

(statearr_23734_23754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (8))){
var inst_23696 = (state_23719[(7)]);
var inst_23706 = cljs.core.next.call(null,inst_23696);
var inst_23696__$1 = inst_23706;
var state_23719__$1 = (function (){var statearr_23735 = state_23719;
(statearr_23735[(7)] = inst_23696__$1);

return statearr_23735;
})();
var statearr_23736_23755 = state_23719__$1;
(statearr_23736_23755[(2)] = null);

(statearr_23736_23755[(1)] = (2));


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
});})(c__23161__auto__))
;
return ((function (switch__23071__auto__,c__23161__auto__){
return (function() {
var cljs$core$async$state_machine__23072__auto__ = null;
var cljs$core$async$state_machine__23072__auto____0 = (function (){
var statearr_23737 = [null,null,null,null,null,null,null,null];
(statearr_23737[(0)] = cljs$core$async$state_machine__23072__auto__);

(statearr_23737[(1)] = (1));

return statearr_23737;
});
var cljs$core$async$state_machine__23072__auto____1 = (function (state_23719){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_23719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e23738){if((e23738 instanceof Object)){
var ex__23075__auto__ = e23738;
var statearr_23739_23756 = state_23719;
(statearr_23739_23756[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23757 = state_23719;
state_23719 = G__23757;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$state_machine__23072__auto__ = function(state_23719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23072__auto____1.call(this,state_23719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23072__auto____0;
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23072__auto____1;
return cljs$core$async$state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto__))
})();
var state__23163__auto__ = (function (){var statearr_23740 = f__23162__auto__.call(null);
(statearr_23740[(6)] = c__23161__auto__);

return statearr_23740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto__))
);

return c__23161__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4229__auto__ = (((_ == null))?null:_);
var m__4230__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,_);
} else {
var m__4230__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4230__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m,ch);
} else {
var m__4230__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m);
} else {
var m__4230__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23758 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23758 = (function (ch,cs,meta23759){
this.ch = ch;
this.cs = cs;
this.meta23759 = meta23759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23760,meta23759__$1){
var self__ = this;
var _23760__$1 = this;
return (new cljs.core.async.t_cljs$core$async23758(self__.ch,self__.cs,meta23759__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23758.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23760){
var self__ = this;
var _23760__$1 = this;
return self__.meta23759;
});})(cs))
;

cljs.core.async.t_cljs$core$async23758.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23758.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23758.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23758.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23758.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23758.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23758.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23759","meta23759",-1939226345,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23758.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23758";

cljs.core.async.t_cljs$core$async23758.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async23758");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23758.
 */
cljs.core.async.__GT_t_cljs$core$async23758 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23758(ch__$1,cs__$1,meta23759){
return (new cljs.core.async.t_cljs$core$async23758(ch__$1,cs__$1,meta23759));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23758(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23161__auto___23980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto___23980,cs,m,dchan,dctr,done){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto___23980,cs,m,dchan,dctr,done){
return (function (state_23895){
var state_val_23896 = (state_23895[(1)]);
if((state_val_23896 === (7))){
var inst_23891 = (state_23895[(2)]);
var state_23895__$1 = state_23895;
var statearr_23897_23981 = state_23895__$1;
(statearr_23897_23981[(2)] = inst_23891);

(statearr_23897_23981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (20))){
var inst_23794 = (state_23895[(7)]);
var inst_23806 = cljs.core.first.call(null,inst_23794);
var inst_23807 = cljs.core.nth.call(null,inst_23806,(0),null);
var inst_23808 = cljs.core.nth.call(null,inst_23806,(1),null);
var state_23895__$1 = (function (){var statearr_23898 = state_23895;
(statearr_23898[(8)] = inst_23807);

return statearr_23898;
})();
if(cljs.core.truth_(inst_23808)){
var statearr_23899_23982 = state_23895__$1;
(statearr_23899_23982[(1)] = (22));

} else {
var statearr_23900_23983 = state_23895__$1;
(statearr_23900_23983[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (27))){
var inst_23763 = (state_23895[(9)]);
var inst_23838 = (state_23895[(10)]);
var inst_23836 = (state_23895[(11)]);
var inst_23843 = (state_23895[(12)]);
var inst_23843__$1 = cljs.core._nth.call(null,inst_23836,inst_23838);
var inst_23844 = cljs.core.async.put_BANG_.call(null,inst_23843__$1,inst_23763,done);
var state_23895__$1 = (function (){var statearr_23901 = state_23895;
(statearr_23901[(12)] = inst_23843__$1);

return statearr_23901;
})();
if(cljs.core.truth_(inst_23844)){
var statearr_23902_23984 = state_23895__$1;
(statearr_23902_23984[(1)] = (30));

} else {
var statearr_23903_23985 = state_23895__$1;
(statearr_23903_23985[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (1))){
var state_23895__$1 = state_23895;
var statearr_23904_23986 = state_23895__$1;
(statearr_23904_23986[(2)] = null);

(statearr_23904_23986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (24))){
var inst_23794 = (state_23895[(7)]);
var inst_23813 = (state_23895[(2)]);
var inst_23814 = cljs.core.next.call(null,inst_23794);
var inst_23772 = inst_23814;
var inst_23773 = null;
var inst_23774 = (0);
var inst_23775 = (0);
var state_23895__$1 = (function (){var statearr_23905 = state_23895;
(statearr_23905[(13)] = inst_23773);

(statearr_23905[(14)] = inst_23813);

(statearr_23905[(15)] = inst_23775);

(statearr_23905[(16)] = inst_23772);

(statearr_23905[(17)] = inst_23774);

return statearr_23905;
})();
var statearr_23906_23987 = state_23895__$1;
(statearr_23906_23987[(2)] = null);

(statearr_23906_23987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (39))){
var state_23895__$1 = state_23895;
var statearr_23910_23988 = state_23895__$1;
(statearr_23910_23988[(2)] = null);

(statearr_23910_23988[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (4))){
var inst_23763 = (state_23895[(9)]);
var inst_23763__$1 = (state_23895[(2)]);
var inst_23764 = (inst_23763__$1 == null);
var state_23895__$1 = (function (){var statearr_23911 = state_23895;
(statearr_23911[(9)] = inst_23763__$1);

return statearr_23911;
})();
if(cljs.core.truth_(inst_23764)){
var statearr_23912_23989 = state_23895__$1;
(statearr_23912_23989[(1)] = (5));

} else {
var statearr_23913_23990 = state_23895__$1;
(statearr_23913_23990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (15))){
var inst_23773 = (state_23895[(13)]);
var inst_23775 = (state_23895[(15)]);
var inst_23772 = (state_23895[(16)]);
var inst_23774 = (state_23895[(17)]);
var inst_23790 = (state_23895[(2)]);
var inst_23791 = (inst_23775 + (1));
var tmp23907 = inst_23773;
var tmp23908 = inst_23772;
var tmp23909 = inst_23774;
var inst_23772__$1 = tmp23908;
var inst_23773__$1 = tmp23907;
var inst_23774__$1 = tmp23909;
var inst_23775__$1 = inst_23791;
var state_23895__$1 = (function (){var statearr_23914 = state_23895;
(statearr_23914[(13)] = inst_23773__$1);

(statearr_23914[(15)] = inst_23775__$1);

(statearr_23914[(16)] = inst_23772__$1);

(statearr_23914[(18)] = inst_23790);

(statearr_23914[(17)] = inst_23774__$1);

return statearr_23914;
})();
var statearr_23915_23991 = state_23895__$1;
(statearr_23915_23991[(2)] = null);

(statearr_23915_23991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (21))){
var inst_23817 = (state_23895[(2)]);
var state_23895__$1 = state_23895;
var statearr_23919_23992 = state_23895__$1;
(statearr_23919_23992[(2)] = inst_23817);

(statearr_23919_23992[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (31))){
var inst_23843 = (state_23895[(12)]);
var inst_23847 = done.call(null,null);
var inst_23848 = cljs.core.async.untap_STAR_.call(null,m,inst_23843);
var state_23895__$1 = (function (){var statearr_23920 = state_23895;
(statearr_23920[(19)] = inst_23847);

return statearr_23920;
})();
var statearr_23921_23993 = state_23895__$1;
(statearr_23921_23993[(2)] = inst_23848);

(statearr_23921_23993[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (32))){
var inst_23838 = (state_23895[(10)]);
var inst_23836 = (state_23895[(11)]);
var inst_23837 = (state_23895[(20)]);
var inst_23835 = (state_23895[(21)]);
var inst_23850 = (state_23895[(2)]);
var inst_23851 = (inst_23838 + (1));
var tmp23916 = inst_23836;
var tmp23917 = inst_23837;
var tmp23918 = inst_23835;
var inst_23835__$1 = tmp23918;
var inst_23836__$1 = tmp23916;
var inst_23837__$1 = tmp23917;
var inst_23838__$1 = inst_23851;
var state_23895__$1 = (function (){var statearr_23922 = state_23895;
(statearr_23922[(10)] = inst_23838__$1);

(statearr_23922[(11)] = inst_23836__$1);

(statearr_23922[(20)] = inst_23837__$1);

(statearr_23922[(22)] = inst_23850);

(statearr_23922[(21)] = inst_23835__$1);

return statearr_23922;
})();
var statearr_23923_23994 = state_23895__$1;
(statearr_23923_23994[(2)] = null);

(statearr_23923_23994[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (40))){
var inst_23863 = (state_23895[(23)]);
var inst_23867 = done.call(null,null);
var inst_23868 = cljs.core.async.untap_STAR_.call(null,m,inst_23863);
var state_23895__$1 = (function (){var statearr_23924 = state_23895;
(statearr_23924[(24)] = inst_23867);

return statearr_23924;
})();
var statearr_23925_23995 = state_23895__$1;
(statearr_23925_23995[(2)] = inst_23868);

(statearr_23925_23995[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (33))){
var inst_23854 = (state_23895[(25)]);
var inst_23856 = cljs.core.chunked_seq_QMARK_.call(null,inst_23854);
var state_23895__$1 = state_23895;
if(inst_23856){
var statearr_23926_23996 = state_23895__$1;
(statearr_23926_23996[(1)] = (36));

} else {
var statearr_23927_23997 = state_23895__$1;
(statearr_23927_23997[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (13))){
var inst_23784 = (state_23895[(26)]);
var inst_23787 = cljs.core.async.close_BANG_.call(null,inst_23784);
var state_23895__$1 = state_23895;
var statearr_23928_23998 = state_23895__$1;
(statearr_23928_23998[(2)] = inst_23787);

(statearr_23928_23998[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (22))){
var inst_23807 = (state_23895[(8)]);
var inst_23810 = cljs.core.async.close_BANG_.call(null,inst_23807);
var state_23895__$1 = state_23895;
var statearr_23929_23999 = state_23895__$1;
(statearr_23929_23999[(2)] = inst_23810);

(statearr_23929_23999[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (36))){
var inst_23854 = (state_23895[(25)]);
var inst_23858 = cljs.core.chunk_first.call(null,inst_23854);
var inst_23859 = cljs.core.chunk_rest.call(null,inst_23854);
var inst_23860 = cljs.core.count.call(null,inst_23858);
var inst_23835 = inst_23859;
var inst_23836 = inst_23858;
var inst_23837 = inst_23860;
var inst_23838 = (0);
var state_23895__$1 = (function (){var statearr_23930 = state_23895;
(statearr_23930[(10)] = inst_23838);

(statearr_23930[(11)] = inst_23836);

(statearr_23930[(20)] = inst_23837);

(statearr_23930[(21)] = inst_23835);

return statearr_23930;
})();
var statearr_23931_24000 = state_23895__$1;
(statearr_23931_24000[(2)] = null);

(statearr_23931_24000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (41))){
var inst_23854 = (state_23895[(25)]);
var inst_23870 = (state_23895[(2)]);
var inst_23871 = cljs.core.next.call(null,inst_23854);
var inst_23835 = inst_23871;
var inst_23836 = null;
var inst_23837 = (0);
var inst_23838 = (0);
var state_23895__$1 = (function (){var statearr_23932 = state_23895;
(statearr_23932[(10)] = inst_23838);

(statearr_23932[(11)] = inst_23836);

(statearr_23932[(20)] = inst_23837);

(statearr_23932[(27)] = inst_23870);

(statearr_23932[(21)] = inst_23835);

return statearr_23932;
})();
var statearr_23933_24001 = state_23895__$1;
(statearr_23933_24001[(2)] = null);

(statearr_23933_24001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (43))){
var state_23895__$1 = state_23895;
var statearr_23934_24002 = state_23895__$1;
(statearr_23934_24002[(2)] = null);

(statearr_23934_24002[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (29))){
var inst_23879 = (state_23895[(2)]);
var state_23895__$1 = state_23895;
var statearr_23935_24003 = state_23895__$1;
(statearr_23935_24003[(2)] = inst_23879);

(statearr_23935_24003[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (44))){
var inst_23888 = (state_23895[(2)]);
var state_23895__$1 = (function (){var statearr_23936 = state_23895;
(statearr_23936[(28)] = inst_23888);

return statearr_23936;
})();
var statearr_23937_24004 = state_23895__$1;
(statearr_23937_24004[(2)] = null);

(statearr_23937_24004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (6))){
var inst_23827 = (state_23895[(29)]);
var inst_23826 = cljs.core.deref.call(null,cs);
var inst_23827__$1 = cljs.core.keys.call(null,inst_23826);
var inst_23828 = cljs.core.count.call(null,inst_23827__$1);
var inst_23829 = cljs.core.reset_BANG_.call(null,dctr,inst_23828);
var inst_23834 = cljs.core.seq.call(null,inst_23827__$1);
var inst_23835 = inst_23834;
var inst_23836 = null;
var inst_23837 = (0);
var inst_23838 = (0);
var state_23895__$1 = (function (){var statearr_23938 = state_23895;
(statearr_23938[(29)] = inst_23827__$1);

(statearr_23938[(10)] = inst_23838);

(statearr_23938[(11)] = inst_23836);

(statearr_23938[(30)] = inst_23829);

(statearr_23938[(20)] = inst_23837);

(statearr_23938[(21)] = inst_23835);

return statearr_23938;
})();
var statearr_23939_24005 = state_23895__$1;
(statearr_23939_24005[(2)] = null);

(statearr_23939_24005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (28))){
var inst_23854 = (state_23895[(25)]);
var inst_23835 = (state_23895[(21)]);
var inst_23854__$1 = cljs.core.seq.call(null,inst_23835);
var state_23895__$1 = (function (){var statearr_23940 = state_23895;
(statearr_23940[(25)] = inst_23854__$1);

return statearr_23940;
})();
if(inst_23854__$1){
var statearr_23941_24006 = state_23895__$1;
(statearr_23941_24006[(1)] = (33));

} else {
var statearr_23942_24007 = state_23895__$1;
(statearr_23942_24007[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (25))){
var inst_23838 = (state_23895[(10)]);
var inst_23837 = (state_23895[(20)]);
var inst_23840 = (inst_23838 < inst_23837);
var inst_23841 = inst_23840;
var state_23895__$1 = state_23895;
if(cljs.core.truth_(inst_23841)){
var statearr_23943_24008 = state_23895__$1;
(statearr_23943_24008[(1)] = (27));

} else {
var statearr_23944_24009 = state_23895__$1;
(statearr_23944_24009[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (34))){
var state_23895__$1 = state_23895;
var statearr_23945_24010 = state_23895__$1;
(statearr_23945_24010[(2)] = null);

(statearr_23945_24010[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (17))){
var state_23895__$1 = state_23895;
var statearr_23946_24011 = state_23895__$1;
(statearr_23946_24011[(2)] = null);

(statearr_23946_24011[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (3))){
var inst_23893 = (state_23895[(2)]);
var state_23895__$1 = state_23895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23895__$1,inst_23893);
} else {
if((state_val_23896 === (12))){
var inst_23822 = (state_23895[(2)]);
var state_23895__$1 = state_23895;
var statearr_23947_24012 = state_23895__$1;
(statearr_23947_24012[(2)] = inst_23822);

(statearr_23947_24012[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (2))){
var state_23895__$1 = state_23895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23895__$1,(4),ch);
} else {
if((state_val_23896 === (23))){
var state_23895__$1 = state_23895;
var statearr_23948_24013 = state_23895__$1;
(statearr_23948_24013[(2)] = null);

(statearr_23948_24013[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (35))){
var inst_23877 = (state_23895[(2)]);
var state_23895__$1 = state_23895;
var statearr_23949_24014 = state_23895__$1;
(statearr_23949_24014[(2)] = inst_23877);

(statearr_23949_24014[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (19))){
var inst_23794 = (state_23895[(7)]);
var inst_23798 = cljs.core.chunk_first.call(null,inst_23794);
var inst_23799 = cljs.core.chunk_rest.call(null,inst_23794);
var inst_23800 = cljs.core.count.call(null,inst_23798);
var inst_23772 = inst_23799;
var inst_23773 = inst_23798;
var inst_23774 = inst_23800;
var inst_23775 = (0);
var state_23895__$1 = (function (){var statearr_23950 = state_23895;
(statearr_23950[(13)] = inst_23773);

(statearr_23950[(15)] = inst_23775);

(statearr_23950[(16)] = inst_23772);

(statearr_23950[(17)] = inst_23774);

return statearr_23950;
})();
var statearr_23951_24015 = state_23895__$1;
(statearr_23951_24015[(2)] = null);

(statearr_23951_24015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (11))){
var inst_23772 = (state_23895[(16)]);
var inst_23794 = (state_23895[(7)]);
var inst_23794__$1 = cljs.core.seq.call(null,inst_23772);
var state_23895__$1 = (function (){var statearr_23952 = state_23895;
(statearr_23952[(7)] = inst_23794__$1);

return statearr_23952;
})();
if(inst_23794__$1){
var statearr_23953_24016 = state_23895__$1;
(statearr_23953_24016[(1)] = (16));

} else {
var statearr_23954_24017 = state_23895__$1;
(statearr_23954_24017[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (9))){
var inst_23824 = (state_23895[(2)]);
var state_23895__$1 = state_23895;
var statearr_23955_24018 = state_23895__$1;
(statearr_23955_24018[(2)] = inst_23824);

(statearr_23955_24018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (5))){
var inst_23770 = cljs.core.deref.call(null,cs);
var inst_23771 = cljs.core.seq.call(null,inst_23770);
var inst_23772 = inst_23771;
var inst_23773 = null;
var inst_23774 = (0);
var inst_23775 = (0);
var state_23895__$1 = (function (){var statearr_23956 = state_23895;
(statearr_23956[(13)] = inst_23773);

(statearr_23956[(15)] = inst_23775);

(statearr_23956[(16)] = inst_23772);

(statearr_23956[(17)] = inst_23774);

return statearr_23956;
})();
var statearr_23957_24019 = state_23895__$1;
(statearr_23957_24019[(2)] = null);

(statearr_23957_24019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (14))){
var state_23895__$1 = state_23895;
var statearr_23958_24020 = state_23895__$1;
(statearr_23958_24020[(2)] = null);

(statearr_23958_24020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (45))){
var inst_23885 = (state_23895[(2)]);
var state_23895__$1 = state_23895;
var statearr_23959_24021 = state_23895__$1;
(statearr_23959_24021[(2)] = inst_23885);

(statearr_23959_24021[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (26))){
var inst_23827 = (state_23895[(29)]);
var inst_23881 = (state_23895[(2)]);
var inst_23882 = cljs.core.seq.call(null,inst_23827);
var state_23895__$1 = (function (){var statearr_23960 = state_23895;
(statearr_23960[(31)] = inst_23881);

return statearr_23960;
})();
if(inst_23882){
var statearr_23961_24022 = state_23895__$1;
(statearr_23961_24022[(1)] = (42));

} else {
var statearr_23962_24023 = state_23895__$1;
(statearr_23962_24023[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (16))){
var inst_23794 = (state_23895[(7)]);
var inst_23796 = cljs.core.chunked_seq_QMARK_.call(null,inst_23794);
var state_23895__$1 = state_23895;
if(inst_23796){
var statearr_23963_24024 = state_23895__$1;
(statearr_23963_24024[(1)] = (19));

} else {
var statearr_23964_24025 = state_23895__$1;
(statearr_23964_24025[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (38))){
var inst_23874 = (state_23895[(2)]);
var state_23895__$1 = state_23895;
var statearr_23965_24026 = state_23895__$1;
(statearr_23965_24026[(2)] = inst_23874);

(statearr_23965_24026[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (30))){
var state_23895__$1 = state_23895;
var statearr_23966_24027 = state_23895__$1;
(statearr_23966_24027[(2)] = null);

(statearr_23966_24027[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (10))){
var inst_23773 = (state_23895[(13)]);
var inst_23775 = (state_23895[(15)]);
var inst_23783 = cljs.core._nth.call(null,inst_23773,inst_23775);
var inst_23784 = cljs.core.nth.call(null,inst_23783,(0),null);
var inst_23785 = cljs.core.nth.call(null,inst_23783,(1),null);
var state_23895__$1 = (function (){var statearr_23967 = state_23895;
(statearr_23967[(26)] = inst_23784);

return statearr_23967;
})();
if(cljs.core.truth_(inst_23785)){
var statearr_23968_24028 = state_23895__$1;
(statearr_23968_24028[(1)] = (13));

} else {
var statearr_23969_24029 = state_23895__$1;
(statearr_23969_24029[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (18))){
var inst_23820 = (state_23895[(2)]);
var state_23895__$1 = state_23895;
var statearr_23970_24030 = state_23895__$1;
(statearr_23970_24030[(2)] = inst_23820);

(statearr_23970_24030[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (42))){
var state_23895__$1 = state_23895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23895__$1,(45),dchan);
} else {
if((state_val_23896 === (37))){
var inst_23863 = (state_23895[(23)]);
var inst_23763 = (state_23895[(9)]);
var inst_23854 = (state_23895[(25)]);
var inst_23863__$1 = cljs.core.first.call(null,inst_23854);
var inst_23864 = cljs.core.async.put_BANG_.call(null,inst_23863__$1,inst_23763,done);
var state_23895__$1 = (function (){var statearr_23971 = state_23895;
(statearr_23971[(23)] = inst_23863__$1);

return statearr_23971;
})();
if(cljs.core.truth_(inst_23864)){
var statearr_23972_24031 = state_23895__$1;
(statearr_23972_24031[(1)] = (39));

} else {
var statearr_23973_24032 = state_23895__$1;
(statearr_23973_24032[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (8))){
var inst_23775 = (state_23895[(15)]);
var inst_23774 = (state_23895[(17)]);
var inst_23777 = (inst_23775 < inst_23774);
var inst_23778 = inst_23777;
var state_23895__$1 = state_23895;
if(cljs.core.truth_(inst_23778)){
var statearr_23974_24033 = state_23895__$1;
(statearr_23974_24033[(1)] = (10));

} else {
var statearr_23975_24034 = state_23895__$1;
(statearr_23975_24034[(1)] = (11));

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
});})(c__23161__auto___23980,cs,m,dchan,dctr,done))
;
return ((function (switch__23071__auto__,c__23161__auto___23980,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23072__auto__ = null;
var cljs$core$async$mult_$_state_machine__23072__auto____0 = (function (){
var statearr_23976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23976[(0)] = cljs$core$async$mult_$_state_machine__23072__auto__);

(statearr_23976[(1)] = (1));

return statearr_23976;
});
var cljs$core$async$mult_$_state_machine__23072__auto____1 = (function (state_23895){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_23895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e23977){if((e23977 instanceof Object)){
var ex__23075__auto__ = e23977;
var statearr_23978_24035 = state_23895;
(statearr_23978_24035[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24036 = state_23895;
state_23895 = G__24036;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23072__auto__ = function(state_23895){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23072__auto____1.call(this,state_23895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23072__auto____0;
cljs$core$async$mult_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23072__auto____1;
return cljs$core$async$mult_$_state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto___23980,cs,m,dchan,dctr,done))
})();
var state__23163__auto__ = (function (){var statearr_23979 = f__23162__auto__.call(null);
(statearr_23979[(6)] = c__23161__auto___23980);

return statearr_23979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto___23980,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24038 = arguments.length;
switch (G__24038) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m,ch);
} else {
var m__4230__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m,ch);
} else {
var m__4230__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m);
} else {
var m__4230__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m,state_map);
} else {
var m__4230__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m,mode);
} else {
var m__4230__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___24050 = arguments.length;
var i__4518__auto___24051 = (0);
while(true){
if((i__4518__auto___24051 < len__4517__auto___24050)){
args__4520__auto__.push((arguments[i__4518__auto___24051]));

var G__24052 = (i__4518__auto___24051 + (1));
i__4518__auto___24051 = G__24052;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((3) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4521__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24044){
var map__24045 = p__24044;
var map__24045__$1 = ((((!((map__24045 == null)))?(((((map__24045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24045):map__24045);
var opts = map__24045__$1;
var statearr_24047_24053 = state;
(statearr_24047_24053[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__24045,map__24045__$1,opts){
return (function (val){
var statearr_24048_24054 = state;
(statearr_24048_24054[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24045,map__24045__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_24049_24055 = state;
(statearr_24049_24055[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24040){
var G__24041 = cljs.core.first.call(null,seq24040);
var seq24040__$1 = cljs.core.next.call(null,seq24040);
var G__24042 = cljs.core.first.call(null,seq24040__$1);
var seq24040__$2 = cljs.core.next.call(null,seq24040__$1);
var G__24043 = cljs.core.first.call(null,seq24040__$2);
var seq24040__$3 = cljs.core.next.call(null,seq24040__$2);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24041,G__24042,G__24043,seq24040__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24056 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24056 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24057){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24057 = meta24057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24058,meta24057__$1){
var self__ = this;
var _24058__$1 = this;
return (new cljs.core.async.t_cljs$core$async24056(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24057__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24056.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24058){
var self__ = this;
var _24058__$1 = this;
return self__.meta24057;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24056.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24056.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24056.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24056.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24056.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24056.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24056.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24056.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24056.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta24057","meta24057",-622861268,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24056.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24056";

cljs.core.async.t_cljs$core$async24056.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async24056");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24056.
 */
cljs.core.async.__GT_t_cljs$core$async24056 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24056(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24057){
return (new cljs.core.async.t_cljs$core$async24056(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24057));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24056(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23161__auto___24220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto___24220,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto___24220,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24160){
var state_val_24161 = (state_24160[(1)]);
if((state_val_24161 === (7))){
var inst_24075 = (state_24160[(2)]);
var state_24160__$1 = state_24160;
var statearr_24162_24221 = state_24160__$1;
(statearr_24162_24221[(2)] = inst_24075);

(statearr_24162_24221[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (20))){
var inst_24087 = (state_24160[(7)]);
var state_24160__$1 = state_24160;
var statearr_24163_24222 = state_24160__$1;
(statearr_24163_24222[(2)] = inst_24087);

(statearr_24163_24222[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (27))){
var state_24160__$1 = state_24160;
var statearr_24164_24223 = state_24160__$1;
(statearr_24164_24223[(2)] = null);

(statearr_24164_24223[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (1))){
var inst_24062 = (state_24160[(8)]);
var inst_24062__$1 = calc_state.call(null);
var inst_24064 = (inst_24062__$1 == null);
var inst_24065 = cljs.core.not.call(null,inst_24064);
var state_24160__$1 = (function (){var statearr_24165 = state_24160;
(statearr_24165[(8)] = inst_24062__$1);

return statearr_24165;
})();
if(inst_24065){
var statearr_24166_24224 = state_24160__$1;
(statearr_24166_24224[(1)] = (2));

} else {
var statearr_24167_24225 = state_24160__$1;
(statearr_24167_24225[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (24))){
var inst_24120 = (state_24160[(9)]);
var inst_24111 = (state_24160[(10)]);
var inst_24134 = (state_24160[(11)]);
var inst_24134__$1 = inst_24111.call(null,inst_24120);
var state_24160__$1 = (function (){var statearr_24168 = state_24160;
(statearr_24168[(11)] = inst_24134__$1);

return statearr_24168;
})();
if(cljs.core.truth_(inst_24134__$1)){
var statearr_24169_24226 = state_24160__$1;
(statearr_24169_24226[(1)] = (29));

} else {
var statearr_24170_24227 = state_24160__$1;
(statearr_24170_24227[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (4))){
var inst_24078 = (state_24160[(2)]);
var state_24160__$1 = state_24160;
if(cljs.core.truth_(inst_24078)){
var statearr_24171_24228 = state_24160__$1;
(statearr_24171_24228[(1)] = (8));

} else {
var statearr_24172_24229 = state_24160__$1;
(statearr_24172_24229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (15))){
var inst_24105 = (state_24160[(2)]);
var state_24160__$1 = state_24160;
if(cljs.core.truth_(inst_24105)){
var statearr_24173_24230 = state_24160__$1;
(statearr_24173_24230[(1)] = (19));

} else {
var statearr_24174_24231 = state_24160__$1;
(statearr_24174_24231[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (21))){
var inst_24110 = (state_24160[(12)]);
var inst_24110__$1 = (state_24160[(2)]);
var inst_24111 = cljs.core.get.call(null,inst_24110__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24112 = cljs.core.get.call(null,inst_24110__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24113 = cljs.core.get.call(null,inst_24110__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24160__$1 = (function (){var statearr_24175 = state_24160;
(statearr_24175[(12)] = inst_24110__$1);

(statearr_24175[(10)] = inst_24111);

(statearr_24175[(13)] = inst_24112);

return statearr_24175;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24160__$1,(22),inst_24113);
} else {
if((state_val_24161 === (31))){
var inst_24142 = (state_24160[(2)]);
var state_24160__$1 = state_24160;
if(cljs.core.truth_(inst_24142)){
var statearr_24176_24232 = state_24160__$1;
(statearr_24176_24232[(1)] = (32));

} else {
var statearr_24177_24233 = state_24160__$1;
(statearr_24177_24233[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (32))){
var inst_24119 = (state_24160[(14)]);
var state_24160__$1 = state_24160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24160__$1,(35),out,inst_24119);
} else {
if((state_val_24161 === (33))){
var inst_24110 = (state_24160[(12)]);
var inst_24087 = inst_24110;
var state_24160__$1 = (function (){var statearr_24178 = state_24160;
(statearr_24178[(7)] = inst_24087);

return statearr_24178;
})();
var statearr_24179_24234 = state_24160__$1;
(statearr_24179_24234[(2)] = null);

(statearr_24179_24234[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (13))){
var inst_24087 = (state_24160[(7)]);
var inst_24094 = inst_24087.cljs$lang$protocol_mask$partition0$;
var inst_24095 = (inst_24094 & (64));
var inst_24096 = inst_24087.cljs$core$ISeq$;
var inst_24097 = (cljs.core.PROTOCOL_SENTINEL === inst_24096);
var inst_24098 = ((inst_24095) || (inst_24097));
var state_24160__$1 = state_24160;
if(cljs.core.truth_(inst_24098)){
var statearr_24180_24235 = state_24160__$1;
(statearr_24180_24235[(1)] = (16));

} else {
var statearr_24181_24236 = state_24160__$1;
(statearr_24181_24236[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (22))){
var inst_24120 = (state_24160[(9)]);
var inst_24119 = (state_24160[(14)]);
var inst_24118 = (state_24160[(2)]);
var inst_24119__$1 = cljs.core.nth.call(null,inst_24118,(0),null);
var inst_24120__$1 = cljs.core.nth.call(null,inst_24118,(1),null);
var inst_24121 = (inst_24119__$1 == null);
var inst_24122 = cljs.core._EQ_.call(null,inst_24120__$1,change);
var inst_24123 = ((inst_24121) || (inst_24122));
var state_24160__$1 = (function (){var statearr_24182 = state_24160;
(statearr_24182[(9)] = inst_24120__$1);

(statearr_24182[(14)] = inst_24119__$1);

return statearr_24182;
})();
if(cljs.core.truth_(inst_24123)){
var statearr_24183_24237 = state_24160__$1;
(statearr_24183_24237[(1)] = (23));

} else {
var statearr_24184_24238 = state_24160__$1;
(statearr_24184_24238[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (36))){
var inst_24110 = (state_24160[(12)]);
var inst_24087 = inst_24110;
var state_24160__$1 = (function (){var statearr_24185 = state_24160;
(statearr_24185[(7)] = inst_24087);

return statearr_24185;
})();
var statearr_24186_24239 = state_24160__$1;
(statearr_24186_24239[(2)] = null);

(statearr_24186_24239[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (29))){
var inst_24134 = (state_24160[(11)]);
var state_24160__$1 = state_24160;
var statearr_24187_24240 = state_24160__$1;
(statearr_24187_24240[(2)] = inst_24134);

(statearr_24187_24240[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (6))){
var state_24160__$1 = state_24160;
var statearr_24188_24241 = state_24160__$1;
(statearr_24188_24241[(2)] = false);

(statearr_24188_24241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (28))){
var inst_24130 = (state_24160[(2)]);
var inst_24131 = calc_state.call(null);
var inst_24087 = inst_24131;
var state_24160__$1 = (function (){var statearr_24189 = state_24160;
(statearr_24189[(7)] = inst_24087);

(statearr_24189[(15)] = inst_24130);

return statearr_24189;
})();
var statearr_24190_24242 = state_24160__$1;
(statearr_24190_24242[(2)] = null);

(statearr_24190_24242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (25))){
var inst_24156 = (state_24160[(2)]);
var state_24160__$1 = state_24160;
var statearr_24191_24243 = state_24160__$1;
(statearr_24191_24243[(2)] = inst_24156);

(statearr_24191_24243[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (34))){
var inst_24154 = (state_24160[(2)]);
var state_24160__$1 = state_24160;
var statearr_24192_24244 = state_24160__$1;
(statearr_24192_24244[(2)] = inst_24154);

(statearr_24192_24244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (17))){
var state_24160__$1 = state_24160;
var statearr_24193_24245 = state_24160__$1;
(statearr_24193_24245[(2)] = false);

(statearr_24193_24245[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (3))){
var state_24160__$1 = state_24160;
var statearr_24194_24246 = state_24160__$1;
(statearr_24194_24246[(2)] = false);

(statearr_24194_24246[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (12))){
var inst_24158 = (state_24160[(2)]);
var state_24160__$1 = state_24160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24160__$1,inst_24158);
} else {
if((state_val_24161 === (2))){
var inst_24062 = (state_24160[(8)]);
var inst_24067 = inst_24062.cljs$lang$protocol_mask$partition0$;
var inst_24068 = (inst_24067 & (64));
var inst_24069 = inst_24062.cljs$core$ISeq$;
var inst_24070 = (cljs.core.PROTOCOL_SENTINEL === inst_24069);
var inst_24071 = ((inst_24068) || (inst_24070));
var state_24160__$1 = state_24160;
if(cljs.core.truth_(inst_24071)){
var statearr_24195_24247 = state_24160__$1;
(statearr_24195_24247[(1)] = (5));

} else {
var statearr_24196_24248 = state_24160__$1;
(statearr_24196_24248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (23))){
var inst_24119 = (state_24160[(14)]);
var inst_24125 = (inst_24119 == null);
var state_24160__$1 = state_24160;
if(cljs.core.truth_(inst_24125)){
var statearr_24197_24249 = state_24160__$1;
(statearr_24197_24249[(1)] = (26));

} else {
var statearr_24198_24250 = state_24160__$1;
(statearr_24198_24250[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (35))){
var inst_24145 = (state_24160[(2)]);
var state_24160__$1 = state_24160;
if(cljs.core.truth_(inst_24145)){
var statearr_24199_24251 = state_24160__$1;
(statearr_24199_24251[(1)] = (36));

} else {
var statearr_24200_24252 = state_24160__$1;
(statearr_24200_24252[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (19))){
var inst_24087 = (state_24160[(7)]);
var inst_24107 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24087);
var state_24160__$1 = state_24160;
var statearr_24201_24253 = state_24160__$1;
(statearr_24201_24253[(2)] = inst_24107);

(statearr_24201_24253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (11))){
var inst_24087 = (state_24160[(7)]);
var inst_24091 = (inst_24087 == null);
var inst_24092 = cljs.core.not.call(null,inst_24091);
var state_24160__$1 = state_24160;
if(inst_24092){
var statearr_24202_24254 = state_24160__$1;
(statearr_24202_24254[(1)] = (13));

} else {
var statearr_24203_24255 = state_24160__$1;
(statearr_24203_24255[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (9))){
var inst_24062 = (state_24160[(8)]);
var state_24160__$1 = state_24160;
var statearr_24204_24256 = state_24160__$1;
(statearr_24204_24256[(2)] = inst_24062);

(statearr_24204_24256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (5))){
var state_24160__$1 = state_24160;
var statearr_24205_24257 = state_24160__$1;
(statearr_24205_24257[(2)] = true);

(statearr_24205_24257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (14))){
var state_24160__$1 = state_24160;
var statearr_24206_24258 = state_24160__$1;
(statearr_24206_24258[(2)] = false);

(statearr_24206_24258[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (26))){
var inst_24120 = (state_24160[(9)]);
var inst_24127 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24120);
var state_24160__$1 = state_24160;
var statearr_24207_24259 = state_24160__$1;
(statearr_24207_24259[(2)] = inst_24127);

(statearr_24207_24259[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (16))){
var state_24160__$1 = state_24160;
var statearr_24208_24260 = state_24160__$1;
(statearr_24208_24260[(2)] = true);

(statearr_24208_24260[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (38))){
var inst_24150 = (state_24160[(2)]);
var state_24160__$1 = state_24160;
var statearr_24209_24261 = state_24160__$1;
(statearr_24209_24261[(2)] = inst_24150);

(statearr_24209_24261[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (30))){
var inst_24120 = (state_24160[(9)]);
var inst_24111 = (state_24160[(10)]);
var inst_24112 = (state_24160[(13)]);
var inst_24137 = cljs.core.empty_QMARK_.call(null,inst_24111);
var inst_24138 = inst_24112.call(null,inst_24120);
var inst_24139 = cljs.core.not.call(null,inst_24138);
var inst_24140 = ((inst_24137) && (inst_24139));
var state_24160__$1 = state_24160;
var statearr_24210_24262 = state_24160__$1;
(statearr_24210_24262[(2)] = inst_24140);

(statearr_24210_24262[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (10))){
var inst_24062 = (state_24160[(8)]);
var inst_24083 = (state_24160[(2)]);
var inst_24084 = cljs.core.get.call(null,inst_24083,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24085 = cljs.core.get.call(null,inst_24083,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24086 = cljs.core.get.call(null,inst_24083,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24087 = inst_24062;
var state_24160__$1 = (function (){var statearr_24211 = state_24160;
(statearr_24211[(16)] = inst_24084);

(statearr_24211[(17)] = inst_24086);

(statearr_24211[(18)] = inst_24085);

(statearr_24211[(7)] = inst_24087);

return statearr_24211;
})();
var statearr_24212_24263 = state_24160__$1;
(statearr_24212_24263[(2)] = null);

(statearr_24212_24263[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (18))){
var inst_24102 = (state_24160[(2)]);
var state_24160__$1 = state_24160;
var statearr_24213_24264 = state_24160__$1;
(statearr_24213_24264[(2)] = inst_24102);

(statearr_24213_24264[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (37))){
var state_24160__$1 = state_24160;
var statearr_24214_24265 = state_24160__$1;
(statearr_24214_24265[(2)] = null);

(statearr_24214_24265[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (8))){
var inst_24062 = (state_24160[(8)]);
var inst_24080 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24062);
var state_24160__$1 = state_24160;
var statearr_24215_24266 = state_24160__$1;
(statearr_24215_24266[(2)] = inst_24080);

(statearr_24215_24266[(1)] = (10));


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
});})(c__23161__auto___24220,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23071__auto__,c__23161__auto___24220,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23072__auto__ = null;
var cljs$core$async$mix_$_state_machine__23072__auto____0 = (function (){
var statearr_24216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24216[(0)] = cljs$core$async$mix_$_state_machine__23072__auto__);

(statearr_24216[(1)] = (1));

return statearr_24216;
});
var cljs$core$async$mix_$_state_machine__23072__auto____1 = (function (state_24160){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_24160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e24217){if((e24217 instanceof Object)){
var ex__23075__auto__ = e24217;
var statearr_24218_24267 = state_24160;
(statearr_24218_24267[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24268 = state_24160;
state_24160 = G__24268;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23072__auto__ = function(state_24160){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23072__auto____1.call(this,state_24160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23072__auto____0;
cljs$core$async$mix_$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23072__auto____1;
return cljs$core$async$mix_$_state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto___24220,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23163__auto__ = (function (){var statearr_24219 = f__23162__auto__.call(null);
(statearr_24219[(6)] = c__23161__auto___24220);

return statearr_24219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto___24220,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4229__auto__ = (((p == null))?null:p);
var m__4230__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4230__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4229__auto__ = (((p == null))?null:p);
var m__4230__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,p,v,ch);
} else {
var m__4230__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24270 = arguments.length;
switch (G__24270) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4229__auto__ = (((p == null))?null:p);
var m__4230__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,p);
} else {
var m__4230__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4229__auto__ = (((p == null))?null:p);
var m__4230__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,p,v);
} else {
var m__4230__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24274 = arguments.length;
switch (G__24274) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3936__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3936__auto__,mults){
return (function (p1__24272_SHARP_){
if(cljs.core.truth_(p1__24272_SHARP_.call(null,topic))){
return p1__24272_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24272_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3936__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24275 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24276){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24276 = meta24276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24277,meta24276__$1){
var self__ = this;
var _24277__$1 = this;
return (new cljs.core.async.t_cljs$core$async24275(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24276__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24277){
var self__ = this;
var _24277__$1 = this;
return self__.meta24276;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24275.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24275.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24275.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24275.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24275.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24275.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24275.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24275.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24276","meta24276",-1957731293,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24275";

cljs.core.async.t_cljs$core$async24275.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async24275");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24275.
 */
cljs.core.async.__GT_t_cljs$core$async24275 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24275(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24276){
return (new cljs.core.async.t_cljs$core$async24275(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24276));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24275(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23161__auto___24395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto___24395,mults,ensure_mult,p){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto___24395,mults,ensure_mult,p){
return (function (state_24349){
var state_val_24350 = (state_24349[(1)]);
if((state_val_24350 === (7))){
var inst_24345 = (state_24349[(2)]);
var state_24349__$1 = state_24349;
var statearr_24351_24396 = state_24349__$1;
(statearr_24351_24396[(2)] = inst_24345);

(statearr_24351_24396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (20))){
var state_24349__$1 = state_24349;
var statearr_24352_24397 = state_24349__$1;
(statearr_24352_24397[(2)] = null);

(statearr_24352_24397[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (1))){
var state_24349__$1 = state_24349;
var statearr_24353_24398 = state_24349__$1;
(statearr_24353_24398[(2)] = null);

(statearr_24353_24398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (24))){
var inst_24328 = (state_24349[(7)]);
var inst_24337 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24328);
var state_24349__$1 = state_24349;
var statearr_24354_24399 = state_24349__$1;
(statearr_24354_24399[(2)] = inst_24337);

(statearr_24354_24399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (4))){
var inst_24280 = (state_24349[(8)]);
var inst_24280__$1 = (state_24349[(2)]);
var inst_24281 = (inst_24280__$1 == null);
var state_24349__$1 = (function (){var statearr_24355 = state_24349;
(statearr_24355[(8)] = inst_24280__$1);

return statearr_24355;
})();
if(cljs.core.truth_(inst_24281)){
var statearr_24356_24400 = state_24349__$1;
(statearr_24356_24400[(1)] = (5));

} else {
var statearr_24357_24401 = state_24349__$1;
(statearr_24357_24401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (15))){
var inst_24322 = (state_24349[(2)]);
var state_24349__$1 = state_24349;
var statearr_24358_24402 = state_24349__$1;
(statearr_24358_24402[(2)] = inst_24322);

(statearr_24358_24402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (21))){
var inst_24342 = (state_24349[(2)]);
var state_24349__$1 = (function (){var statearr_24359 = state_24349;
(statearr_24359[(9)] = inst_24342);

return statearr_24359;
})();
var statearr_24360_24403 = state_24349__$1;
(statearr_24360_24403[(2)] = null);

(statearr_24360_24403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (13))){
var inst_24304 = (state_24349[(10)]);
var inst_24306 = cljs.core.chunked_seq_QMARK_.call(null,inst_24304);
var state_24349__$1 = state_24349;
if(inst_24306){
var statearr_24361_24404 = state_24349__$1;
(statearr_24361_24404[(1)] = (16));

} else {
var statearr_24362_24405 = state_24349__$1;
(statearr_24362_24405[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (22))){
var inst_24334 = (state_24349[(2)]);
var state_24349__$1 = state_24349;
if(cljs.core.truth_(inst_24334)){
var statearr_24363_24406 = state_24349__$1;
(statearr_24363_24406[(1)] = (23));

} else {
var statearr_24364_24407 = state_24349__$1;
(statearr_24364_24407[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (6))){
var inst_24280 = (state_24349[(8)]);
var inst_24328 = (state_24349[(7)]);
var inst_24330 = (state_24349[(11)]);
var inst_24328__$1 = topic_fn.call(null,inst_24280);
var inst_24329 = cljs.core.deref.call(null,mults);
var inst_24330__$1 = cljs.core.get.call(null,inst_24329,inst_24328__$1);
var state_24349__$1 = (function (){var statearr_24365 = state_24349;
(statearr_24365[(7)] = inst_24328__$1);

(statearr_24365[(11)] = inst_24330__$1);

return statearr_24365;
})();
if(cljs.core.truth_(inst_24330__$1)){
var statearr_24366_24408 = state_24349__$1;
(statearr_24366_24408[(1)] = (19));

} else {
var statearr_24367_24409 = state_24349__$1;
(statearr_24367_24409[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (25))){
var inst_24339 = (state_24349[(2)]);
var state_24349__$1 = state_24349;
var statearr_24368_24410 = state_24349__$1;
(statearr_24368_24410[(2)] = inst_24339);

(statearr_24368_24410[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (17))){
var inst_24304 = (state_24349[(10)]);
var inst_24313 = cljs.core.first.call(null,inst_24304);
var inst_24314 = cljs.core.async.muxch_STAR_.call(null,inst_24313);
var inst_24315 = cljs.core.async.close_BANG_.call(null,inst_24314);
var inst_24316 = cljs.core.next.call(null,inst_24304);
var inst_24290 = inst_24316;
var inst_24291 = null;
var inst_24292 = (0);
var inst_24293 = (0);
var state_24349__$1 = (function (){var statearr_24369 = state_24349;
(statearr_24369[(12)] = inst_24290);

(statearr_24369[(13)] = inst_24293);

(statearr_24369[(14)] = inst_24315);

(statearr_24369[(15)] = inst_24292);

(statearr_24369[(16)] = inst_24291);

return statearr_24369;
})();
var statearr_24370_24411 = state_24349__$1;
(statearr_24370_24411[(2)] = null);

(statearr_24370_24411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (3))){
var inst_24347 = (state_24349[(2)]);
var state_24349__$1 = state_24349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24349__$1,inst_24347);
} else {
if((state_val_24350 === (12))){
var inst_24324 = (state_24349[(2)]);
var state_24349__$1 = state_24349;
var statearr_24371_24412 = state_24349__$1;
(statearr_24371_24412[(2)] = inst_24324);

(statearr_24371_24412[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (2))){
var state_24349__$1 = state_24349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24349__$1,(4),ch);
} else {
if((state_val_24350 === (23))){
var state_24349__$1 = state_24349;
var statearr_24372_24413 = state_24349__$1;
(statearr_24372_24413[(2)] = null);

(statearr_24372_24413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (19))){
var inst_24280 = (state_24349[(8)]);
var inst_24330 = (state_24349[(11)]);
var inst_24332 = cljs.core.async.muxch_STAR_.call(null,inst_24330);
var state_24349__$1 = state_24349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24349__$1,(22),inst_24332,inst_24280);
} else {
if((state_val_24350 === (11))){
var inst_24290 = (state_24349[(12)]);
var inst_24304 = (state_24349[(10)]);
var inst_24304__$1 = cljs.core.seq.call(null,inst_24290);
var state_24349__$1 = (function (){var statearr_24373 = state_24349;
(statearr_24373[(10)] = inst_24304__$1);

return statearr_24373;
})();
if(inst_24304__$1){
var statearr_24374_24414 = state_24349__$1;
(statearr_24374_24414[(1)] = (13));

} else {
var statearr_24375_24415 = state_24349__$1;
(statearr_24375_24415[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (9))){
var inst_24326 = (state_24349[(2)]);
var state_24349__$1 = state_24349;
var statearr_24376_24416 = state_24349__$1;
(statearr_24376_24416[(2)] = inst_24326);

(statearr_24376_24416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (5))){
var inst_24287 = cljs.core.deref.call(null,mults);
var inst_24288 = cljs.core.vals.call(null,inst_24287);
var inst_24289 = cljs.core.seq.call(null,inst_24288);
var inst_24290 = inst_24289;
var inst_24291 = null;
var inst_24292 = (0);
var inst_24293 = (0);
var state_24349__$1 = (function (){var statearr_24377 = state_24349;
(statearr_24377[(12)] = inst_24290);

(statearr_24377[(13)] = inst_24293);

(statearr_24377[(15)] = inst_24292);

(statearr_24377[(16)] = inst_24291);

return statearr_24377;
})();
var statearr_24378_24417 = state_24349__$1;
(statearr_24378_24417[(2)] = null);

(statearr_24378_24417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (14))){
var state_24349__$1 = state_24349;
var statearr_24382_24418 = state_24349__$1;
(statearr_24382_24418[(2)] = null);

(statearr_24382_24418[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (16))){
var inst_24304 = (state_24349[(10)]);
var inst_24308 = cljs.core.chunk_first.call(null,inst_24304);
var inst_24309 = cljs.core.chunk_rest.call(null,inst_24304);
var inst_24310 = cljs.core.count.call(null,inst_24308);
var inst_24290 = inst_24309;
var inst_24291 = inst_24308;
var inst_24292 = inst_24310;
var inst_24293 = (0);
var state_24349__$1 = (function (){var statearr_24383 = state_24349;
(statearr_24383[(12)] = inst_24290);

(statearr_24383[(13)] = inst_24293);

(statearr_24383[(15)] = inst_24292);

(statearr_24383[(16)] = inst_24291);

return statearr_24383;
})();
var statearr_24384_24419 = state_24349__$1;
(statearr_24384_24419[(2)] = null);

(statearr_24384_24419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (10))){
var inst_24290 = (state_24349[(12)]);
var inst_24293 = (state_24349[(13)]);
var inst_24292 = (state_24349[(15)]);
var inst_24291 = (state_24349[(16)]);
var inst_24298 = cljs.core._nth.call(null,inst_24291,inst_24293);
var inst_24299 = cljs.core.async.muxch_STAR_.call(null,inst_24298);
var inst_24300 = cljs.core.async.close_BANG_.call(null,inst_24299);
var inst_24301 = (inst_24293 + (1));
var tmp24379 = inst_24290;
var tmp24380 = inst_24292;
var tmp24381 = inst_24291;
var inst_24290__$1 = tmp24379;
var inst_24291__$1 = tmp24381;
var inst_24292__$1 = tmp24380;
var inst_24293__$1 = inst_24301;
var state_24349__$1 = (function (){var statearr_24385 = state_24349;
(statearr_24385[(12)] = inst_24290__$1);

(statearr_24385[(17)] = inst_24300);

(statearr_24385[(13)] = inst_24293__$1);

(statearr_24385[(15)] = inst_24292__$1);

(statearr_24385[(16)] = inst_24291__$1);

return statearr_24385;
})();
var statearr_24386_24420 = state_24349__$1;
(statearr_24386_24420[(2)] = null);

(statearr_24386_24420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (18))){
var inst_24319 = (state_24349[(2)]);
var state_24349__$1 = state_24349;
var statearr_24387_24421 = state_24349__$1;
(statearr_24387_24421[(2)] = inst_24319);

(statearr_24387_24421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (8))){
var inst_24293 = (state_24349[(13)]);
var inst_24292 = (state_24349[(15)]);
var inst_24295 = (inst_24293 < inst_24292);
var inst_24296 = inst_24295;
var state_24349__$1 = state_24349;
if(cljs.core.truth_(inst_24296)){
var statearr_24388_24422 = state_24349__$1;
(statearr_24388_24422[(1)] = (10));

} else {
var statearr_24389_24423 = state_24349__$1;
(statearr_24389_24423[(1)] = (11));

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
});})(c__23161__auto___24395,mults,ensure_mult,p))
;
return ((function (switch__23071__auto__,c__23161__auto___24395,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23072__auto__ = null;
var cljs$core$async$state_machine__23072__auto____0 = (function (){
var statearr_24390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24390[(0)] = cljs$core$async$state_machine__23072__auto__);

(statearr_24390[(1)] = (1));

return statearr_24390;
});
var cljs$core$async$state_machine__23072__auto____1 = (function (state_24349){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_24349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e24391){if((e24391 instanceof Object)){
var ex__23075__auto__ = e24391;
var statearr_24392_24424 = state_24349;
(statearr_24392_24424[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24425 = state_24349;
state_24349 = G__24425;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$state_machine__23072__auto__ = function(state_24349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23072__auto____1.call(this,state_24349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23072__auto____0;
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23072__auto____1;
return cljs$core$async$state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto___24395,mults,ensure_mult,p))
})();
var state__23163__auto__ = (function (){var statearr_24393 = f__23162__auto__.call(null);
(statearr_24393[(6)] = c__23161__auto___24395);

return statearr_24393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto___24395,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24427 = arguments.length;
switch (G__24427) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24430 = arguments.length;
switch (G__24430) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24433 = arguments.length;
switch (G__24433) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23161__auto___24500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto___24500,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto___24500,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24472){
var state_val_24473 = (state_24472[(1)]);
if((state_val_24473 === (7))){
var state_24472__$1 = state_24472;
var statearr_24474_24501 = state_24472__$1;
(statearr_24474_24501[(2)] = null);

(statearr_24474_24501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (1))){
var state_24472__$1 = state_24472;
var statearr_24475_24502 = state_24472__$1;
(statearr_24475_24502[(2)] = null);

(statearr_24475_24502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (4))){
var inst_24436 = (state_24472[(7)]);
var inst_24438 = (inst_24436 < cnt);
var state_24472__$1 = state_24472;
if(cljs.core.truth_(inst_24438)){
var statearr_24476_24503 = state_24472__$1;
(statearr_24476_24503[(1)] = (6));

} else {
var statearr_24477_24504 = state_24472__$1;
(statearr_24477_24504[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (15))){
var inst_24468 = (state_24472[(2)]);
var state_24472__$1 = state_24472;
var statearr_24478_24505 = state_24472__$1;
(statearr_24478_24505[(2)] = inst_24468);

(statearr_24478_24505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (13))){
var inst_24461 = cljs.core.async.close_BANG_.call(null,out);
var state_24472__$1 = state_24472;
var statearr_24479_24506 = state_24472__$1;
(statearr_24479_24506[(2)] = inst_24461);

(statearr_24479_24506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (6))){
var state_24472__$1 = state_24472;
var statearr_24480_24507 = state_24472__$1;
(statearr_24480_24507[(2)] = null);

(statearr_24480_24507[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (3))){
var inst_24470 = (state_24472[(2)]);
var state_24472__$1 = state_24472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24472__$1,inst_24470);
} else {
if((state_val_24473 === (12))){
var inst_24458 = (state_24472[(8)]);
var inst_24458__$1 = (state_24472[(2)]);
var inst_24459 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24458__$1);
var state_24472__$1 = (function (){var statearr_24481 = state_24472;
(statearr_24481[(8)] = inst_24458__$1);

return statearr_24481;
})();
if(cljs.core.truth_(inst_24459)){
var statearr_24482_24508 = state_24472__$1;
(statearr_24482_24508[(1)] = (13));

} else {
var statearr_24483_24509 = state_24472__$1;
(statearr_24483_24509[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (2))){
var inst_24435 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24436 = (0);
var state_24472__$1 = (function (){var statearr_24484 = state_24472;
(statearr_24484[(9)] = inst_24435);

(statearr_24484[(7)] = inst_24436);

return statearr_24484;
})();
var statearr_24485_24510 = state_24472__$1;
(statearr_24485_24510[(2)] = null);

(statearr_24485_24510[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (11))){
var inst_24436 = (state_24472[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24472,(10),Object,null,(9));
var inst_24445 = chs__$1.call(null,inst_24436);
var inst_24446 = done.call(null,inst_24436);
var inst_24447 = cljs.core.async.take_BANG_.call(null,inst_24445,inst_24446);
var state_24472__$1 = state_24472;
var statearr_24486_24511 = state_24472__$1;
(statearr_24486_24511[(2)] = inst_24447);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24472__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (9))){
var inst_24436 = (state_24472[(7)]);
var inst_24449 = (state_24472[(2)]);
var inst_24450 = (inst_24436 + (1));
var inst_24436__$1 = inst_24450;
var state_24472__$1 = (function (){var statearr_24487 = state_24472;
(statearr_24487[(10)] = inst_24449);

(statearr_24487[(7)] = inst_24436__$1);

return statearr_24487;
})();
var statearr_24488_24512 = state_24472__$1;
(statearr_24488_24512[(2)] = null);

(statearr_24488_24512[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (5))){
var inst_24456 = (state_24472[(2)]);
var state_24472__$1 = (function (){var statearr_24489 = state_24472;
(statearr_24489[(11)] = inst_24456);

return statearr_24489;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24472__$1,(12),dchan);
} else {
if((state_val_24473 === (14))){
var inst_24458 = (state_24472[(8)]);
var inst_24463 = cljs.core.apply.call(null,f,inst_24458);
var state_24472__$1 = state_24472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24472__$1,(16),out,inst_24463);
} else {
if((state_val_24473 === (16))){
var inst_24465 = (state_24472[(2)]);
var state_24472__$1 = (function (){var statearr_24490 = state_24472;
(statearr_24490[(12)] = inst_24465);

return statearr_24490;
})();
var statearr_24491_24513 = state_24472__$1;
(statearr_24491_24513[(2)] = null);

(statearr_24491_24513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (10))){
var inst_24440 = (state_24472[(2)]);
var inst_24441 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24472__$1 = (function (){var statearr_24492 = state_24472;
(statearr_24492[(13)] = inst_24440);

return statearr_24492;
})();
var statearr_24493_24514 = state_24472__$1;
(statearr_24493_24514[(2)] = inst_24441);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24472__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (8))){
var inst_24454 = (state_24472[(2)]);
var state_24472__$1 = state_24472;
var statearr_24494_24515 = state_24472__$1;
(statearr_24494_24515[(2)] = inst_24454);

(statearr_24494_24515[(1)] = (5));


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
});})(c__23161__auto___24500,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23071__auto__,c__23161__auto___24500,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23072__auto__ = null;
var cljs$core$async$state_machine__23072__auto____0 = (function (){
var statearr_24495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24495[(0)] = cljs$core$async$state_machine__23072__auto__);

(statearr_24495[(1)] = (1));

return statearr_24495;
});
var cljs$core$async$state_machine__23072__auto____1 = (function (state_24472){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_24472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e24496){if((e24496 instanceof Object)){
var ex__23075__auto__ = e24496;
var statearr_24497_24516 = state_24472;
(statearr_24497_24516[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24517 = state_24472;
state_24472 = G__24517;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$state_machine__23072__auto__ = function(state_24472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23072__auto____1.call(this,state_24472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23072__auto____0;
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23072__auto____1;
return cljs$core$async$state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto___24500,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23163__auto__ = (function (){var statearr_24498 = f__23162__auto__.call(null);
(statearr_24498[(6)] = c__23161__auto___24500);

return statearr_24498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto___24500,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24520 = arguments.length;
switch (G__24520) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23161__auto___24574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto___24574,out){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto___24574,out){
return (function (state_24552){
var state_val_24553 = (state_24552[(1)]);
if((state_val_24553 === (7))){
var inst_24531 = (state_24552[(7)]);
var inst_24532 = (state_24552[(8)]);
var inst_24531__$1 = (state_24552[(2)]);
var inst_24532__$1 = cljs.core.nth.call(null,inst_24531__$1,(0),null);
var inst_24533 = cljs.core.nth.call(null,inst_24531__$1,(1),null);
var inst_24534 = (inst_24532__$1 == null);
var state_24552__$1 = (function (){var statearr_24554 = state_24552;
(statearr_24554[(7)] = inst_24531__$1);

(statearr_24554[(8)] = inst_24532__$1);

(statearr_24554[(9)] = inst_24533);

return statearr_24554;
})();
if(cljs.core.truth_(inst_24534)){
var statearr_24555_24575 = state_24552__$1;
(statearr_24555_24575[(1)] = (8));

} else {
var statearr_24556_24576 = state_24552__$1;
(statearr_24556_24576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (1))){
var inst_24521 = cljs.core.vec.call(null,chs);
var inst_24522 = inst_24521;
var state_24552__$1 = (function (){var statearr_24557 = state_24552;
(statearr_24557[(10)] = inst_24522);

return statearr_24557;
})();
var statearr_24558_24577 = state_24552__$1;
(statearr_24558_24577[(2)] = null);

(statearr_24558_24577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (4))){
var inst_24522 = (state_24552[(10)]);
var state_24552__$1 = state_24552;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24552__$1,(7),inst_24522);
} else {
if((state_val_24553 === (6))){
var inst_24548 = (state_24552[(2)]);
var state_24552__$1 = state_24552;
var statearr_24559_24578 = state_24552__$1;
(statearr_24559_24578[(2)] = inst_24548);

(statearr_24559_24578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (3))){
var inst_24550 = (state_24552[(2)]);
var state_24552__$1 = state_24552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24552__$1,inst_24550);
} else {
if((state_val_24553 === (2))){
var inst_24522 = (state_24552[(10)]);
var inst_24524 = cljs.core.count.call(null,inst_24522);
var inst_24525 = (inst_24524 > (0));
var state_24552__$1 = state_24552;
if(cljs.core.truth_(inst_24525)){
var statearr_24561_24579 = state_24552__$1;
(statearr_24561_24579[(1)] = (4));

} else {
var statearr_24562_24580 = state_24552__$1;
(statearr_24562_24580[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (11))){
var inst_24522 = (state_24552[(10)]);
var inst_24541 = (state_24552[(2)]);
var tmp24560 = inst_24522;
var inst_24522__$1 = tmp24560;
var state_24552__$1 = (function (){var statearr_24563 = state_24552;
(statearr_24563[(10)] = inst_24522__$1);

(statearr_24563[(11)] = inst_24541);

return statearr_24563;
})();
var statearr_24564_24581 = state_24552__$1;
(statearr_24564_24581[(2)] = null);

(statearr_24564_24581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (9))){
var inst_24532 = (state_24552[(8)]);
var state_24552__$1 = state_24552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24552__$1,(11),out,inst_24532);
} else {
if((state_val_24553 === (5))){
var inst_24546 = cljs.core.async.close_BANG_.call(null,out);
var state_24552__$1 = state_24552;
var statearr_24565_24582 = state_24552__$1;
(statearr_24565_24582[(2)] = inst_24546);

(statearr_24565_24582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (10))){
var inst_24544 = (state_24552[(2)]);
var state_24552__$1 = state_24552;
var statearr_24566_24583 = state_24552__$1;
(statearr_24566_24583[(2)] = inst_24544);

(statearr_24566_24583[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (8))){
var inst_24522 = (state_24552[(10)]);
var inst_24531 = (state_24552[(7)]);
var inst_24532 = (state_24552[(8)]);
var inst_24533 = (state_24552[(9)]);
var inst_24536 = (function (){var cs = inst_24522;
var vec__24527 = inst_24531;
var v = inst_24532;
var c = inst_24533;
return ((function (cs,vec__24527,v,c,inst_24522,inst_24531,inst_24532,inst_24533,state_val_24553,c__23161__auto___24574,out){
return (function (p1__24518_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24518_SHARP_);
});
;})(cs,vec__24527,v,c,inst_24522,inst_24531,inst_24532,inst_24533,state_val_24553,c__23161__auto___24574,out))
})();
var inst_24537 = cljs.core.filterv.call(null,inst_24536,inst_24522);
var inst_24522__$1 = inst_24537;
var state_24552__$1 = (function (){var statearr_24567 = state_24552;
(statearr_24567[(10)] = inst_24522__$1);

return statearr_24567;
})();
var statearr_24568_24584 = state_24552__$1;
(statearr_24568_24584[(2)] = null);

(statearr_24568_24584[(1)] = (2));


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
});})(c__23161__auto___24574,out))
;
return ((function (switch__23071__auto__,c__23161__auto___24574,out){
return (function() {
var cljs$core$async$state_machine__23072__auto__ = null;
var cljs$core$async$state_machine__23072__auto____0 = (function (){
var statearr_24569 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24569[(0)] = cljs$core$async$state_machine__23072__auto__);

(statearr_24569[(1)] = (1));

return statearr_24569;
});
var cljs$core$async$state_machine__23072__auto____1 = (function (state_24552){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_24552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e24570){if((e24570 instanceof Object)){
var ex__23075__auto__ = e24570;
var statearr_24571_24585 = state_24552;
(statearr_24571_24585[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24586 = state_24552;
state_24552 = G__24586;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$state_machine__23072__auto__ = function(state_24552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23072__auto____1.call(this,state_24552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23072__auto____0;
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23072__auto____1;
return cljs$core$async$state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto___24574,out))
})();
var state__23163__auto__ = (function (){var statearr_24572 = f__23162__auto__.call(null);
(statearr_24572[(6)] = c__23161__auto___24574);

return statearr_24572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto___24574,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24588 = arguments.length;
switch (G__24588) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23161__auto___24633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto___24633,out){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto___24633,out){
return (function (state_24612){
var state_val_24613 = (state_24612[(1)]);
if((state_val_24613 === (7))){
var inst_24594 = (state_24612[(7)]);
var inst_24594__$1 = (state_24612[(2)]);
var inst_24595 = (inst_24594__$1 == null);
var inst_24596 = cljs.core.not.call(null,inst_24595);
var state_24612__$1 = (function (){var statearr_24614 = state_24612;
(statearr_24614[(7)] = inst_24594__$1);

return statearr_24614;
})();
if(inst_24596){
var statearr_24615_24634 = state_24612__$1;
(statearr_24615_24634[(1)] = (8));

} else {
var statearr_24616_24635 = state_24612__$1;
(statearr_24616_24635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (1))){
var inst_24589 = (0);
var state_24612__$1 = (function (){var statearr_24617 = state_24612;
(statearr_24617[(8)] = inst_24589);

return statearr_24617;
})();
var statearr_24618_24636 = state_24612__$1;
(statearr_24618_24636[(2)] = null);

(statearr_24618_24636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (4))){
var state_24612__$1 = state_24612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24612__$1,(7),ch);
} else {
if((state_val_24613 === (6))){
var inst_24607 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
var statearr_24619_24637 = state_24612__$1;
(statearr_24619_24637[(2)] = inst_24607);

(statearr_24619_24637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (3))){
var inst_24609 = (state_24612[(2)]);
var inst_24610 = cljs.core.async.close_BANG_.call(null,out);
var state_24612__$1 = (function (){var statearr_24620 = state_24612;
(statearr_24620[(9)] = inst_24609);

return statearr_24620;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24612__$1,inst_24610);
} else {
if((state_val_24613 === (2))){
var inst_24589 = (state_24612[(8)]);
var inst_24591 = (inst_24589 < n);
var state_24612__$1 = state_24612;
if(cljs.core.truth_(inst_24591)){
var statearr_24621_24638 = state_24612__$1;
(statearr_24621_24638[(1)] = (4));

} else {
var statearr_24622_24639 = state_24612__$1;
(statearr_24622_24639[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (11))){
var inst_24589 = (state_24612[(8)]);
var inst_24599 = (state_24612[(2)]);
var inst_24600 = (inst_24589 + (1));
var inst_24589__$1 = inst_24600;
var state_24612__$1 = (function (){var statearr_24623 = state_24612;
(statearr_24623[(8)] = inst_24589__$1);

(statearr_24623[(10)] = inst_24599);

return statearr_24623;
})();
var statearr_24624_24640 = state_24612__$1;
(statearr_24624_24640[(2)] = null);

(statearr_24624_24640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (9))){
var state_24612__$1 = state_24612;
var statearr_24625_24641 = state_24612__$1;
(statearr_24625_24641[(2)] = null);

(statearr_24625_24641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (5))){
var state_24612__$1 = state_24612;
var statearr_24626_24642 = state_24612__$1;
(statearr_24626_24642[(2)] = null);

(statearr_24626_24642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (10))){
var inst_24604 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
var statearr_24627_24643 = state_24612__$1;
(statearr_24627_24643[(2)] = inst_24604);

(statearr_24627_24643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (8))){
var inst_24594 = (state_24612[(7)]);
var state_24612__$1 = state_24612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24612__$1,(11),out,inst_24594);
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
});})(c__23161__auto___24633,out))
;
return ((function (switch__23071__auto__,c__23161__auto___24633,out){
return (function() {
var cljs$core$async$state_machine__23072__auto__ = null;
var cljs$core$async$state_machine__23072__auto____0 = (function (){
var statearr_24628 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24628[(0)] = cljs$core$async$state_machine__23072__auto__);

(statearr_24628[(1)] = (1));

return statearr_24628;
});
var cljs$core$async$state_machine__23072__auto____1 = (function (state_24612){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_24612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e24629){if((e24629 instanceof Object)){
var ex__23075__auto__ = e24629;
var statearr_24630_24644 = state_24612;
(statearr_24630_24644[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24645 = state_24612;
state_24612 = G__24645;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$state_machine__23072__auto__ = function(state_24612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23072__auto____1.call(this,state_24612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23072__auto____0;
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23072__auto____1;
return cljs$core$async$state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto___24633,out))
})();
var state__23163__auto__ = (function (){var statearr_24631 = f__23162__auto__.call(null);
(statearr_24631[(6)] = c__23161__auto___24633);

return statearr_24631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto___24633,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24647 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24647 = (function (f,ch,meta24648){
this.f = f;
this.ch = ch;
this.meta24648 = meta24648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24649,meta24648__$1){
var self__ = this;
var _24649__$1 = this;
return (new cljs.core.async.t_cljs$core$async24647(self__.f,self__.ch,meta24648__$1));
});

cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24649){
var self__ = this;
var _24649__$1 = this;
return self__.meta24648;
});

cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24650 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24650 = (function (f,ch,meta24648,_,fn1,meta24651){
this.f = f;
this.ch = ch;
this.meta24648 = meta24648;
this._ = _;
this.fn1 = fn1;
this.meta24651 = meta24651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24652,meta24651__$1){
var self__ = this;
var _24652__$1 = this;
return (new cljs.core.async.t_cljs$core$async24650(self__.f,self__.ch,self__.meta24648,self__._,self__.fn1,meta24651__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24650.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24652){
var self__ = this;
var _24652__$1 = this;
return self__.meta24651;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24650.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24650.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24650.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24650.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24646_SHARP_){
return f1.call(null,(((p1__24646_SHARP_ == null))?null:self__.f.call(null,p1__24646_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24650.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24648","meta24648",274516612,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24647","cljs.core.async/t_cljs$core$async24647",483250561,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24651","meta24651",665612143,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24650";

cljs.core.async.t_cljs$core$async24650.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async24650");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24650.
 */
cljs.core.async.__GT_t_cljs$core$async24650 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24650(f__$1,ch__$1,meta24648__$1,___$2,fn1__$1,meta24651){
return (new cljs.core.async.t_cljs$core$async24650(f__$1,ch__$1,meta24648__$1,___$2,fn1__$1,meta24651));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24650(self__.f,self__.ch,self__.meta24648,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3925__auto__ = ret;
if(cljs.core.truth_(and__3925__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3925__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24648","meta24648",274516612,null)], null);
});

cljs.core.async.t_cljs$core$async24647.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24647";

cljs.core.async.t_cljs$core$async24647.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async24647");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24647.
 */
cljs.core.async.__GT_t_cljs$core$async24647 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24647(f__$1,ch__$1,meta24648){
return (new cljs.core.async.t_cljs$core$async24647(f__$1,ch__$1,meta24648));
});

}

return (new cljs.core.async.t_cljs$core$async24647(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24653 = (function (f,ch,meta24654){
this.f = f;
this.ch = ch;
this.meta24654 = meta24654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24655,meta24654__$1){
var self__ = this;
var _24655__$1 = this;
return (new cljs.core.async.t_cljs$core$async24653(self__.f,self__.ch,meta24654__$1));
});

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24655){
var self__ = this;
var _24655__$1 = this;
return self__.meta24654;
});

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24654","meta24654",-1640547551,null)], null);
});

cljs.core.async.t_cljs$core$async24653.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24653";

cljs.core.async.t_cljs$core$async24653.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async24653");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24653.
 */
cljs.core.async.__GT_t_cljs$core$async24653 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24653(f__$1,ch__$1,meta24654){
return (new cljs.core.async.t_cljs$core$async24653(f__$1,ch__$1,meta24654));
});

}

return (new cljs.core.async.t_cljs$core$async24653(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24656 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24656 = (function (p,ch,meta24657){
this.p = p;
this.ch = ch;
this.meta24657 = meta24657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24658,meta24657__$1){
var self__ = this;
var _24658__$1 = this;
return (new cljs.core.async.t_cljs$core$async24656(self__.p,self__.ch,meta24657__$1));
});

cljs.core.async.t_cljs$core$async24656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24658){
var self__ = this;
var _24658__$1 = this;
return self__.meta24657;
});

cljs.core.async.t_cljs$core$async24656.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24656.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24656.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24656.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24656.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24656.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24656.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24657","meta24657",-337942219,null)], null);
});

cljs.core.async.t_cljs$core$async24656.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24656";

cljs.core.async.t_cljs$core$async24656.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async24656");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24656.
 */
cljs.core.async.__GT_t_cljs$core$async24656 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24656(p__$1,ch__$1,meta24657){
return (new cljs.core.async.t_cljs$core$async24656(p__$1,ch__$1,meta24657));
});

}

return (new cljs.core.async.t_cljs$core$async24656(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24660 = arguments.length;
switch (G__24660) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23161__auto___24700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto___24700,out){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto___24700,out){
return (function (state_24681){
var state_val_24682 = (state_24681[(1)]);
if((state_val_24682 === (7))){
var inst_24677 = (state_24681[(2)]);
var state_24681__$1 = state_24681;
var statearr_24683_24701 = state_24681__$1;
(statearr_24683_24701[(2)] = inst_24677);

(statearr_24683_24701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (1))){
var state_24681__$1 = state_24681;
var statearr_24684_24702 = state_24681__$1;
(statearr_24684_24702[(2)] = null);

(statearr_24684_24702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (4))){
var inst_24663 = (state_24681[(7)]);
var inst_24663__$1 = (state_24681[(2)]);
var inst_24664 = (inst_24663__$1 == null);
var state_24681__$1 = (function (){var statearr_24685 = state_24681;
(statearr_24685[(7)] = inst_24663__$1);

return statearr_24685;
})();
if(cljs.core.truth_(inst_24664)){
var statearr_24686_24703 = state_24681__$1;
(statearr_24686_24703[(1)] = (5));

} else {
var statearr_24687_24704 = state_24681__$1;
(statearr_24687_24704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (6))){
var inst_24663 = (state_24681[(7)]);
var inst_24668 = p.call(null,inst_24663);
var state_24681__$1 = state_24681;
if(cljs.core.truth_(inst_24668)){
var statearr_24688_24705 = state_24681__$1;
(statearr_24688_24705[(1)] = (8));

} else {
var statearr_24689_24706 = state_24681__$1;
(statearr_24689_24706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (3))){
var inst_24679 = (state_24681[(2)]);
var state_24681__$1 = state_24681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24681__$1,inst_24679);
} else {
if((state_val_24682 === (2))){
var state_24681__$1 = state_24681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24681__$1,(4),ch);
} else {
if((state_val_24682 === (11))){
var inst_24671 = (state_24681[(2)]);
var state_24681__$1 = state_24681;
var statearr_24690_24707 = state_24681__$1;
(statearr_24690_24707[(2)] = inst_24671);

(statearr_24690_24707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (9))){
var state_24681__$1 = state_24681;
var statearr_24691_24708 = state_24681__$1;
(statearr_24691_24708[(2)] = null);

(statearr_24691_24708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (5))){
var inst_24666 = cljs.core.async.close_BANG_.call(null,out);
var state_24681__$1 = state_24681;
var statearr_24692_24709 = state_24681__$1;
(statearr_24692_24709[(2)] = inst_24666);

(statearr_24692_24709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (10))){
var inst_24674 = (state_24681[(2)]);
var state_24681__$1 = (function (){var statearr_24693 = state_24681;
(statearr_24693[(8)] = inst_24674);

return statearr_24693;
})();
var statearr_24694_24710 = state_24681__$1;
(statearr_24694_24710[(2)] = null);

(statearr_24694_24710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (8))){
var inst_24663 = (state_24681[(7)]);
var state_24681__$1 = state_24681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24681__$1,(11),out,inst_24663);
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
});})(c__23161__auto___24700,out))
;
return ((function (switch__23071__auto__,c__23161__auto___24700,out){
return (function() {
var cljs$core$async$state_machine__23072__auto__ = null;
var cljs$core$async$state_machine__23072__auto____0 = (function (){
var statearr_24695 = [null,null,null,null,null,null,null,null,null];
(statearr_24695[(0)] = cljs$core$async$state_machine__23072__auto__);

(statearr_24695[(1)] = (1));

return statearr_24695;
});
var cljs$core$async$state_machine__23072__auto____1 = (function (state_24681){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_24681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e24696){if((e24696 instanceof Object)){
var ex__23075__auto__ = e24696;
var statearr_24697_24711 = state_24681;
(statearr_24697_24711[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24712 = state_24681;
state_24681 = G__24712;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$state_machine__23072__auto__ = function(state_24681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23072__auto____1.call(this,state_24681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23072__auto____0;
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23072__auto____1;
return cljs$core$async$state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto___24700,out))
})();
var state__23163__auto__ = (function (){var statearr_24698 = f__23162__auto__.call(null);
(statearr_24698[(6)] = c__23161__auto___24700);

return statearr_24698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto___24700,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24714 = arguments.length;
switch (G__24714) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto__){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto__){
return (function (state_24777){
var state_val_24778 = (state_24777[(1)]);
if((state_val_24778 === (7))){
var inst_24773 = (state_24777[(2)]);
var state_24777__$1 = state_24777;
var statearr_24779_24817 = state_24777__$1;
(statearr_24779_24817[(2)] = inst_24773);

(statearr_24779_24817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (20))){
var inst_24743 = (state_24777[(7)]);
var inst_24754 = (state_24777[(2)]);
var inst_24755 = cljs.core.next.call(null,inst_24743);
var inst_24729 = inst_24755;
var inst_24730 = null;
var inst_24731 = (0);
var inst_24732 = (0);
var state_24777__$1 = (function (){var statearr_24780 = state_24777;
(statearr_24780[(8)] = inst_24731);

(statearr_24780[(9)] = inst_24754);

(statearr_24780[(10)] = inst_24732);

(statearr_24780[(11)] = inst_24730);

(statearr_24780[(12)] = inst_24729);

return statearr_24780;
})();
var statearr_24781_24818 = state_24777__$1;
(statearr_24781_24818[(2)] = null);

(statearr_24781_24818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (1))){
var state_24777__$1 = state_24777;
var statearr_24782_24819 = state_24777__$1;
(statearr_24782_24819[(2)] = null);

(statearr_24782_24819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (4))){
var inst_24718 = (state_24777[(13)]);
var inst_24718__$1 = (state_24777[(2)]);
var inst_24719 = (inst_24718__$1 == null);
var state_24777__$1 = (function (){var statearr_24783 = state_24777;
(statearr_24783[(13)] = inst_24718__$1);

return statearr_24783;
})();
if(cljs.core.truth_(inst_24719)){
var statearr_24784_24820 = state_24777__$1;
(statearr_24784_24820[(1)] = (5));

} else {
var statearr_24785_24821 = state_24777__$1;
(statearr_24785_24821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (15))){
var state_24777__$1 = state_24777;
var statearr_24789_24822 = state_24777__$1;
(statearr_24789_24822[(2)] = null);

(statearr_24789_24822[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (21))){
var state_24777__$1 = state_24777;
var statearr_24790_24823 = state_24777__$1;
(statearr_24790_24823[(2)] = null);

(statearr_24790_24823[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (13))){
var inst_24731 = (state_24777[(8)]);
var inst_24732 = (state_24777[(10)]);
var inst_24730 = (state_24777[(11)]);
var inst_24729 = (state_24777[(12)]);
var inst_24739 = (state_24777[(2)]);
var inst_24740 = (inst_24732 + (1));
var tmp24786 = inst_24731;
var tmp24787 = inst_24730;
var tmp24788 = inst_24729;
var inst_24729__$1 = tmp24788;
var inst_24730__$1 = tmp24787;
var inst_24731__$1 = tmp24786;
var inst_24732__$1 = inst_24740;
var state_24777__$1 = (function (){var statearr_24791 = state_24777;
(statearr_24791[(8)] = inst_24731__$1);

(statearr_24791[(10)] = inst_24732__$1);

(statearr_24791[(14)] = inst_24739);

(statearr_24791[(11)] = inst_24730__$1);

(statearr_24791[(12)] = inst_24729__$1);

return statearr_24791;
})();
var statearr_24792_24824 = state_24777__$1;
(statearr_24792_24824[(2)] = null);

(statearr_24792_24824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (22))){
var state_24777__$1 = state_24777;
var statearr_24793_24825 = state_24777__$1;
(statearr_24793_24825[(2)] = null);

(statearr_24793_24825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (6))){
var inst_24718 = (state_24777[(13)]);
var inst_24727 = f.call(null,inst_24718);
var inst_24728 = cljs.core.seq.call(null,inst_24727);
var inst_24729 = inst_24728;
var inst_24730 = null;
var inst_24731 = (0);
var inst_24732 = (0);
var state_24777__$1 = (function (){var statearr_24794 = state_24777;
(statearr_24794[(8)] = inst_24731);

(statearr_24794[(10)] = inst_24732);

(statearr_24794[(11)] = inst_24730);

(statearr_24794[(12)] = inst_24729);

return statearr_24794;
})();
var statearr_24795_24826 = state_24777__$1;
(statearr_24795_24826[(2)] = null);

(statearr_24795_24826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (17))){
var inst_24743 = (state_24777[(7)]);
var inst_24747 = cljs.core.chunk_first.call(null,inst_24743);
var inst_24748 = cljs.core.chunk_rest.call(null,inst_24743);
var inst_24749 = cljs.core.count.call(null,inst_24747);
var inst_24729 = inst_24748;
var inst_24730 = inst_24747;
var inst_24731 = inst_24749;
var inst_24732 = (0);
var state_24777__$1 = (function (){var statearr_24796 = state_24777;
(statearr_24796[(8)] = inst_24731);

(statearr_24796[(10)] = inst_24732);

(statearr_24796[(11)] = inst_24730);

(statearr_24796[(12)] = inst_24729);

return statearr_24796;
})();
var statearr_24797_24827 = state_24777__$1;
(statearr_24797_24827[(2)] = null);

(statearr_24797_24827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (3))){
var inst_24775 = (state_24777[(2)]);
var state_24777__$1 = state_24777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24777__$1,inst_24775);
} else {
if((state_val_24778 === (12))){
var inst_24763 = (state_24777[(2)]);
var state_24777__$1 = state_24777;
var statearr_24798_24828 = state_24777__$1;
(statearr_24798_24828[(2)] = inst_24763);

(statearr_24798_24828[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (2))){
var state_24777__$1 = state_24777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24777__$1,(4),in$);
} else {
if((state_val_24778 === (23))){
var inst_24771 = (state_24777[(2)]);
var state_24777__$1 = state_24777;
var statearr_24799_24829 = state_24777__$1;
(statearr_24799_24829[(2)] = inst_24771);

(statearr_24799_24829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (19))){
var inst_24758 = (state_24777[(2)]);
var state_24777__$1 = state_24777;
var statearr_24800_24830 = state_24777__$1;
(statearr_24800_24830[(2)] = inst_24758);

(statearr_24800_24830[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (11))){
var inst_24743 = (state_24777[(7)]);
var inst_24729 = (state_24777[(12)]);
var inst_24743__$1 = cljs.core.seq.call(null,inst_24729);
var state_24777__$1 = (function (){var statearr_24801 = state_24777;
(statearr_24801[(7)] = inst_24743__$1);

return statearr_24801;
})();
if(inst_24743__$1){
var statearr_24802_24831 = state_24777__$1;
(statearr_24802_24831[(1)] = (14));

} else {
var statearr_24803_24832 = state_24777__$1;
(statearr_24803_24832[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (9))){
var inst_24765 = (state_24777[(2)]);
var inst_24766 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24777__$1 = (function (){var statearr_24804 = state_24777;
(statearr_24804[(15)] = inst_24765);

return statearr_24804;
})();
if(cljs.core.truth_(inst_24766)){
var statearr_24805_24833 = state_24777__$1;
(statearr_24805_24833[(1)] = (21));

} else {
var statearr_24806_24834 = state_24777__$1;
(statearr_24806_24834[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (5))){
var inst_24721 = cljs.core.async.close_BANG_.call(null,out);
var state_24777__$1 = state_24777;
var statearr_24807_24835 = state_24777__$1;
(statearr_24807_24835[(2)] = inst_24721);

(statearr_24807_24835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (14))){
var inst_24743 = (state_24777[(7)]);
var inst_24745 = cljs.core.chunked_seq_QMARK_.call(null,inst_24743);
var state_24777__$1 = state_24777;
if(inst_24745){
var statearr_24808_24836 = state_24777__$1;
(statearr_24808_24836[(1)] = (17));

} else {
var statearr_24809_24837 = state_24777__$1;
(statearr_24809_24837[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (16))){
var inst_24761 = (state_24777[(2)]);
var state_24777__$1 = state_24777;
var statearr_24810_24838 = state_24777__$1;
(statearr_24810_24838[(2)] = inst_24761);

(statearr_24810_24838[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (10))){
var inst_24732 = (state_24777[(10)]);
var inst_24730 = (state_24777[(11)]);
var inst_24737 = cljs.core._nth.call(null,inst_24730,inst_24732);
var state_24777__$1 = state_24777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24777__$1,(13),out,inst_24737);
} else {
if((state_val_24778 === (18))){
var inst_24743 = (state_24777[(7)]);
var inst_24752 = cljs.core.first.call(null,inst_24743);
var state_24777__$1 = state_24777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24777__$1,(20),out,inst_24752);
} else {
if((state_val_24778 === (8))){
var inst_24731 = (state_24777[(8)]);
var inst_24732 = (state_24777[(10)]);
var inst_24734 = (inst_24732 < inst_24731);
var inst_24735 = inst_24734;
var state_24777__$1 = state_24777;
if(cljs.core.truth_(inst_24735)){
var statearr_24811_24839 = state_24777__$1;
(statearr_24811_24839[(1)] = (10));

} else {
var statearr_24812_24840 = state_24777__$1;
(statearr_24812_24840[(1)] = (11));

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
});})(c__23161__auto__))
;
return ((function (switch__23071__auto__,c__23161__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23072__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23072__auto____0 = (function (){
var statearr_24813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24813[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23072__auto__);

(statearr_24813[(1)] = (1));

return statearr_24813;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23072__auto____1 = (function (state_24777){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_24777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e24814){if((e24814 instanceof Object)){
var ex__23075__auto__ = e24814;
var statearr_24815_24841 = state_24777;
(statearr_24815_24841[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24842 = state_24777;
state_24777 = G__24842;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23072__auto__ = function(state_24777){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23072__auto____1.call(this,state_24777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23072__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23072__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto__))
})();
var state__23163__auto__ = (function (){var statearr_24816 = f__23162__auto__.call(null);
(statearr_24816[(6)] = c__23161__auto__);

return statearr_24816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto__))
);

return c__23161__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24844 = arguments.length;
switch (G__24844) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__24847 = arguments.length;
switch (G__24847) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__24850 = arguments.length;
switch (G__24850) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23161__auto___24897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto___24897,out){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto___24897,out){
return (function (state_24874){
var state_val_24875 = (state_24874[(1)]);
if((state_val_24875 === (7))){
var inst_24869 = (state_24874[(2)]);
var state_24874__$1 = state_24874;
var statearr_24876_24898 = state_24874__$1;
(statearr_24876_24898[(2)] = inst_24869);

(statearr_24876_24898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24875 === (1))){
var inst_24851 = null;
var state_24874__$1 = (function (){var statearr_24877 = state_24874;
(statearr_24877[(7)] = inst_24851);

return statearr_24877;
})();
var statearr_24878_24899 = state_24874__$1;
(statearr_24878_24899[(2)] = null);

(statearr_24878_24899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24875 === (4))){
var inst_24854 = (state_24874[(8)]);
var inst_24854__$1 = (state_24874[(2)]);
var inst_24855 = (inst_24854__$1 == null);
var inst_24856 = cljs.core.not.call(null,inst_24855);
var state_24874__$1 = (function (){var statearr_24879 = state_24874;
(statearr_24879[(8)] = inst_24854__$1);

return statearr_24879;
})();
if(inst_24856){
var statearr_24880_24900 = state_24874__$1;
(statearr_24880_24900[(1)] = (5));

} else {
var statearr_24881_24901 = state_24874__$1;
(statearr_24881_24901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24875 === (6))){
var state_24874__$1 = state_24874;
var statearr_24882_24902 = state_24874__$1;
(statearr_24882_24902[(2)] = null);

(statearr_24882_24902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24875 === (3))){
var inst_24871 = (state_24874[(2)]);
var inst_24872 = cljs.core.async.close_BANG_.call(null,out);
var state_24874__$1 = (function (){var statearr_24883 = state_24874;
(statearr_24883[(9)] = inst_24871);

return statearr_24883;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24874__$1,inst_24872);
} else {
if((state_val_24875 === (2))){
var state_24874__$1 = state_24874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24874__$1,(4),ch);
} else {
if((state_val_24875 === (11))){
var inst_24854 = (state_24874[(8)]);
var inst_24863 = (state_24874[(2)]);
var inst_24851 = inst_24854;
var state_24874__$1 = (function (){var statearr_24884 = state_24874;
(statearr_24884[(7)] = inst_24851);

(statearr_24884[(10)] = inst_24863);

return statearr_24884;
})();
var statearr_24885_24903 = state_24874__$1;
(statearr_24885_24903[(2)] = null);

(statearr_24885_24903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24875 === (9))){
var inst_24854 = (state_24874[(8)]);
var state_24874__$1 = state_24874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24874__$1,(11),out,inst_24854);
} else {
if((state_val_24875 === (5))){
var inst_24851 = (state_24874[(7)]);
var inst_24854 = (state_24874[(8)]);
var inst_24858 = cljs.core._EQ_.call(null,inst_24854,inst_24851);
var state_24874__$1 = state_24874;
if(inst_24858){
var statearr_24887_24904 = state_24874__$1;
(statearr_24887_24904[(1)] = (8));

} else {
var statearr_24888_24905 = state_24874__$1;
(statearr_24888_24905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24875 === (10))){
var inst_24866 = (state_24874[(2)]);
var state_24874__$1 = state_24874;
var statearr_24889_24906 = state_24874__$1;
(statearr_24889_24906[(2)] = inst_24866);

(statearr_24889_24906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24875 === (8))){
var inst_24851 = (state_24874[(7)]);
var tmp24886 = inst_24851;
var inst_24851__$1 = tmp24886;
var state_24874__$1 = (function (){var statearr_24890 = state_24874;
(statearr_24890[(7)] = inst_24851__$1);

return statearr_24890;
})();
var statearr_24891_24907 = state_24874__$1;
(statearr_24891_24907[(2)] = null);

(statearr_24891_24907[(1)] = (2));


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
});})(c__23161__auto___24897,out))
;
return ((function (switch__23071__auto__,c__23161__auto___24897,out){
return (function() {
var cljs$core$async$state_machine__23072__auto__ = null;
var cljs$core$async$state_machine__23072__auto____0 = (function (){
var statearr_24892 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24892[(0)] = cljs$core$async$state_machine__23072__auto__);

(statearr_24892[(1)] = (1));

return statearr_24892;
});
var cljs$core$async$state_machine__23072__auto____1 = (function (state_24874){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_24874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e24893){if((e24893 instanceof Object)){
var ex__23075__auto__ = e24893;
var statearr_24894_24908 = state_24874;
(statearr_24894_24908[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24909 = state_24874;
state_24874 = G__24909;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$state_machine__23072__auto__ = function(state_24874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23072__auto____1.call(this,state_24874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23072__auto____0;
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23072__auto____1;
return cljs$core$async$state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto___24897,out))
})();
var state__23163__auto__ = (function (){var statearr_24895 = f__23162__auto__.call(null);
(statearr_24895[(6)] = c__23161__auto___24897);

return statearr_24895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto___24897,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24911 = arguments.length;
switch (G__24911) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23161__auto___24977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto___24977,out){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto___24977,out){
return (function (state_24949){
var state_val_24950 = (state_24949[(1)]);
if((state_val_24950 === (7))){
var inst_24945 = (state_24949[(2)]);
var state_24949__$1 = state_24949;
var statearr_24951_24978 = state_24949__$1;
(statearr_24951_24978[(2)] = inst_24945);

(statearr_24951_24978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24950 === (1))){
var inst_24912 = (new Array(n));
var inst_24913 = inst_24912;
var inst_24914 = (0);
var state_24949__$1 = (function (){var statearr_24952 = state_24949;
(statearr_24952[(7)] = inst_24914);

(statearr_24952[(8)] = inst_24913);

return statearr_24952;
})();
var statearr_24953_24979 = state_24949__$1;
(statearr_24953_24979[(2)] = null);

(statearr_24953_24979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24950 === (4))){
var inst_24917 = (state_24949[(9)]);
var inst_24917__$1 = (state_24949[(2)]);
var inst_24918 = (inst_24917__$1 == null);
var inst_24919 = cljs.core.not.call(null,inst_24918);
var state_24949__$1 = (function (){var statearr_24954 = state_24949;
(statearr_24954[(9)] = inst_24917__$1);

return statearr_24954;
})();
if(inst_24919){
var statearr_24955_24980 = state_24949__$1;
(statearr_24955_24980[(1)] = (5));

} else {
var statearr_24956_24981 = state_24949__$1;
(statearr_24956_24981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24950 === (15))){
var inst_24939 = (state_24949[(2)]);
var state_24949__$1 = state_24949;
var statearr_24957_24982 = state_24949__$1;
(statearr_24957_24982[(2)] = inst_24939);

(statearr_24957_24982[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24950 === (13))){
var state_24949__$1 = state_24949;
var statearr_24958_24983 = state_24949__$1;
(statearr_24958_24983[(2)] = null);

(statearr_24958_24983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24950 === (6))){
var inst_24914 = (state_24949[(7)]);
var inst_24935 = (inst_24914 > (0));
var state_24949__$1 = state_24949;
if(cljs.core.truth_(inst_24935)){
var statearr_24959_24984 = state_24949__$1;
(statearr_24959_24984[(1)] = (12));

} else {
var statearr_24960_24985 = state_24949__$1;
(statearr_24960_24985[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24950 === (3))){
var inst_24947 = (state_24949[(2)]);
var state_24949__$1 = state_24949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24949__$1,inst_24947);
} else {
if((state_val_24950 === (12))){
var inst_24913 = (state_24949[(8)]);
var inst_24937 = cljs.core.vec.call(null,inst_24913);
var state_24949__$1 = state_24949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24949__$1,(15),out,inst_24937);
} else {
if((state_val_24950 === (2))){
var state_24949__$1 = state_24949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24949__$1,(4),ch);
} else {
if((state_val_24950 === (11))){
var inst_24929 = (state_24949[(2)]);
var inst_24930 = (new Array(n));
var inst_24913 = inst_24930;
var inst_24914 = (0);
var state_24949__$1 = (function (){var statearr_24961 = state_24949;
(statearr_24961[(10)] = inst_24929);

(statearr_24961[(7)] = inst_24914);

(statearr_24961[(8)] = inst_24913);

return statearr_24961;
})();
var statearr_24962_24986 = state_24949__$1;
(statearr_24962_24986[(2)] = null);

(statearr_24962_24986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24950 === (9))){
var inst_24913 = (state_24949[(8)]);
var inst_24927 = cljs.core.vec.call(null,inst_24913);
var state_24949__$1 = state_24949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24949__$1,(11),out,inst_24927);
} else {
if((state_val_24950 === (5))){
var inst_24922 = (state_24949[(11)]);
var inst_24914 = (state_24949[(7)]);
var inst_24913 = (state_24949[(8)]);
var inst_24917 = (state_24949[(9)]);
var inst_24921 = (inst_24913[inst_24914] = inst_24917);
var inst_24922__$1 = (inst_24914 + (1));
var inst_24923 = (inst_24922__$1 < n);
var state_24949__$1 = (function (){var statearr_24963 = state_24949;
(statearr_24963[(11)] = inst_24922__$1);

(statearr_24963[(12)] = inst_24921);

return statearr_24963;
})();
if(cljs.core.truth_(inst_24923)){
var statearr_24964_24987 = state_24949__$1;
(statearr_24964_24987[(1)] = (8));

} else {
var statearr_24965_24988 = state_24949__$1;
(statearr_24965_24988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24950 === (14))){
var inst_24942 = (state_24949[(2)]);
var inst_24943 = cljs.core.async.close_BANG_.call(null,out);
var state_24949__$1 = (function (){var statearr_24967 = state_24949;
(statearr_24967[(13)] = inst_24942);

return statearr_24967;
})();
var statearr_24968_24989 = state_24949__$1;
(statearr_24968_24989[(2)] = inst_24943);

(statearr_24968_24989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24950 === (10))){
var inst_24933 = (state_24949[(2)]);
var state_24949__$1 = state_24949;
var statearr_24969_24990 = state_24949__$1;
(statearr_24969_24990[(2)] = inst_24933);

(statearr_24969_24990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24950 === (8))){
var inst_24922 = (state_24949[(11)]);
var inst_24913 = (state_24949[(8)]);
var tmp24966 = inst_24913;
var inst_24913__$1 = tmp24966;
var inst_24914 = inst_24922;
var state_24949__$1 = (function (){var statearr_24970 = state_24949;
(statearr_24970[(7)] = inst_24914);

(statearr_24970[(8)] = inst_24913__$1);

return statearr_24970;
})();
var statearr_24971_24991 = state_24949__$1;
(statearr_24971_24991[(2)] = null);

(statearr_24971_24991[(1)] = (2));


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
});})(c__23161__auto___24977,out))
;
return ((function (switch__23071__auto__,c__23161__auto___24977,out){
return (function() {
var cljs$core$async$state_machine__23072__auto__ = null;
var cljs$core$async$state_machine__23072__auto____0 = (function (){
var statearr_24972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24972[(0)] = cljs$core$async$state_machine__23072__auto__);

(statearr_24972[(1)] = (1));

return statearr_24972;
});
var cljs$core$async$state_machine__23072__auto____1 = (function (state_24949){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_24949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e24973){if((e24973 instanceof Object)){
var ex__23075__auto__ = e24973;
var statearr_24974_24992 = state_24949;
(statearr_24974_24992[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24993 = state_24949;
state_24949 = G__24993;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$state_machine__23072__auto__ = function(state_24949){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23072__auto____1.call(this,state_24949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23072__auto____0;
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23072__auto____1;
return cljs$core$async$state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto___24977,out))
})();
var state__23163__auto__ = (function (){var statearr_24975 = f__23162__auto__.call(null);
(statearr_24975[(6)] = c__23161__auto___24977);

return statearr_24975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto___24977,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24995 = arguments.length;
switch (G__24995) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23161__auto___25065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23161__auto___25065,out){
return (function (){
var f__23162__auto__ = (function (){var switch__23071__auto__ = ((function (c__23161__auto___25065,out){
return (function (state_25037){
var state_val_25038 = (state_25037[(1)]);
if((state_val_25038 === (7))){
var inst_25033 = (state_25037[(2)]);
var state_25037__$1 = state_25037;
var statearr_25039_25066 = state_25037__$1;
(statearr_25039_25066[(2)] = inst_25033);

(statearr_25039_25066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (1))){
var inst_24996 = [];
var inst_24997 = inst_24996;
var inst_24998 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25037__$1 = (function (){var statearr_25040 = state_25037;
(statearr_25040[(7)] = inst_24997);

(statearr_25040[(8)] = inst_24998);

return statearr_25040;
})();
var statearr_25041_25067 = state_25037__$1;
(statearr_25041_25067[(2)] = null);

(statearr_25041_25067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (4))){
var inst_25001 = (state_25037[(9)]);
var inst_25001__$1 = (state_25037[(2)]);
var inst_25002 = (inst_25001__$1 == null);
var inst_25003 = cljs.core.not.call(null,inst_25002);
var state_25037__$1 = (function (){var statearr_25042 = state_25037;
(statearr_25042[(9)] = inst_25001__$1);

return statearr_25042;
})();
if(inst_25003){
var statearr_25043_25068 = state_25037__$1;
(statearr_25043_25068[(1)] = (5));

} else {
var statearr_25044_25069 = state_25037__$1;
(statearr_25044_25069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (15))){
var inst_25027 = (state_25037[(2)]);
var state_25037__$1 = state_25037;
var statearr_25045_25070 = state_25037__$1;
(statearr_25045_25070[(2)] = inst_25027);

(statearr_25045_25070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (13))){
var state_25037__$1 = state_25037;
var statearr_25046_25071 = state_25037__$1;
(statearr_25046_25071[(2)] = null);

(statearr_25046_25071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (6))){
var inst_24997 = (state_25037[(7)]);
var inst_25022 = inst_24997.length;
var inst_25023 = (inst_25022 > (0));
var state_25037__$1 = state_25037;
if(cljs.core.truth_(inst_25023)){
var statearr_25047_25072 = state_25037__$1;
(statearr_25047_25072[(1)] = (12));

} else {
var statearr_25048_25073 = state_25037__$1;
(statearr_25048_25073[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (3))){
var inst_25035 = (state_25037[(2)]);
var state_25037__$1 = state_25037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25037__$1,inst_25035);
} else {
if((state_val_25038 === (12))){
var inst_24997 = (state_25037[(7)]);
var inst_25025 = cljs.core.vec.call(null,inst_24997);
var state_25037__$1 = state_25037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25037__$1,(15),out,inst_25025);
} else {
if((state_val_25038 === (2))){
var state_25037__$1 = state_25037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25037__$1,(4),ch);
} else {
if((state_val_25038 === (11))){
var inst_25001 = (state_25037[(9)]);
var inst_25005 = (state_25037[(10)]);
var inst_25015 = (state_25037[(2)]);
var inst_25016 = [];
var inst_25017 = inst_25016.push(inst_25001);
var inst_24997 = inst_25016;
var inst_24998 = inst_25005;
var state_25037__$1 = (function (){var statearr_25049 = state_25037;
(statearr_25049[(7)] = inst_24997);

(statearr_25049[(11)] = inst_25017);

(statearr_25049[(12)] = inst_25015);

(statearr_25049[(8)] = inst_24998);

return statearr_25049;
})();
var statearr_25050_25074 = state_25037__$1;
(statearr_25050_25074[(2)] = null);

(statearr_25050_25074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (9))){
var inst_24997 = (state_25037[(7)]);
var inst_25013 = cljs.core.vec.call(null,inst_24997);
var state_25037__$1 = state_25037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25037__$1,(11),out,inst_25013);
} else {
if((state_val_25038 === (5))){
var inst_25001 = (state_25037[(9)]);
var inst_24998 = (state_25037[(8)]);
var inst_25005 = (state_25037[(10)]);
var inst_25005__$1 = f.call(null,inst_25001);
var inst_25006 = cljs.core._EQ_.call(null,inst_25005__$1,inst_24998);
var inst_25007 = cljs.core.keyword_identical_QMARK_.call(null,inst_24998,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25008 = ((inst_25006) || (inst_25007));
var state_25037__$1 = (function (){var statearr_25051 = state_25037;
(statearr_25051[(10)] = inst_25005__$1);

return statearr_25051;
})();
if(cljs.core.truth_(inst_25008)){
var statearr_25052_25075 = state_25037__$1;
(statearr_25052_25075[(1)] = (8));

} else {
var statearr_25053_25076 = state_25037__$1;
(statearr_25053_25076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (14))){
var inst_25030 = (state_25037[(2)]);
var inst_25031 = cljs.core.async.close_BANG_.call(null,out);
var state_25037__$1 = (function (){var statearr_25055 = state_25037;
(statearr_25055[(13)] = inst_25030);

return statearr_25055;
})();
var statearr_25056_25077 = state_25037__$1;
(statearr_25056_25077[(2)] = inst_25031);

(statearr_25056_25077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (10))){
var inst_25020 = (state_25037[(2)]);
var state_25037__$1 = state_25037;
var statearr_25057_25078 = state_25037__$1;
(statearr_25057_25078[(2)] = inst_25020);

(statearr_25057_25078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (8))){
var inst_24997 = (state_25037[(7)]);
var inst_25001 = (state_25037[(9)]);
var inst_25005 = (state_25037[(10)]);
var inst_25010 = inst_24997.push(inst_25001);
var tmp25054 = inst_24997;
var inst_24997__$1 = tmp25054;
var inst_24998 = inst_25005;
var state_25037__$1 = (function (){var statearr_25058 = state_25037;
(statearr_25058[(7)] = inst_24997__$1);

(statearr_25058[(8)] = inst_24998);

(statearr_25058[(14)] = inst_25010);

return statearr_25058;
})();
var statearr_25059_25079 = state_25037__$1;
(statearr_25059_25079[(2)] = null);

(statearr_25059_25079[(1)] = (2));


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
});})(c__23161__auto___25065,out))
;
return ((function (switch__23071__auto__,c__23161__auto___25065,out){
return (function() {
var cljs$core$async$state_machine__23072__auto__ = null;
var cljs$core$async$state_machine__23072__auto____0 = (function (){
var statearr_25060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25060[(0)] = cljs$core$async$state_machine__23072__auto__);

(statearr_25060[(1)] = (1));

return statearr_25060;
});
var cljs$core$async$state_machine__23072__auto____1 = (function (state_25037){
while(true){
var ret_value__23073__auto__ = (function (){try{while(true){
var result__23074__auto__ = switch__23071__auto__.call(null,state_25037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23074__auto__;
}
break;
}
}catch (e25061){if((e25061 instanceof Object)){
var ex__23075__auto__ = e25061;
var statearr_25062_25080 = state_25037;
(statearr_25062_25080[(5)] = ex__23075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25081 = state_25037;
state_25037 = G__25081;
continue;
} else {
return ret_value__23073__auto__;
}
break;
}
});
cljs$core$async$state_machine__23072__auto__ = function(state_25037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23072__auto____1.call(this,state_25037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23072__auto____0;
cljs$core$async$state_machine__23072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23072__auto____1;
return cljs$core$async$state_machine__23072__auto__;
})()
;})(switch__23071__auto__,c__23161__auto___25065,out))
})();
var state__23163__auto__ = (function (){var statearr_25063 = f__23162__auto__.call(null);
(statearr_25063[(6)] = c__23161__auto___25065);

return statearr_25063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23163__auto__);
});})(c__23161__auto___25065,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1573409127019
