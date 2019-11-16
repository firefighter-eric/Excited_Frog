// Compiled by ClojureScript 1.10.312 {}
goog.provide('game.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
game.core.floor = (function game$core$floor(x){
return Math.floor(x);
});
game.core.translate = (function game$core$translate(start_pos,vel,time){
return game.core.floor.call(null,(start_pos + (time * vel)));
});
game.core.horiz_vel = -0.15;
game.core.gravity = 0.05;
game.core.jump_vel = (21);
game.core.start_y = (312);
game.core.bottom_y = (561);
game.core.flappy_x = (212);
game.core.flappy_width = (57);
game.core.flappy_height = (41);
game.core.pillar_spacing = (324);
game.core.pillar_gap = (158);
game.core.pillar_width = (86);
game.core.easy_init = (function game$core$easy_init(){
game.core.gravity = 0.05;

return (
game.core.pillar_gap = (300))
;
});
game.core.normal_init = (function game$core$normal_init(){
game.core.gravity = 0.05;

return (
game.core.pillar_gap = (180))
;
});
game.core.hard_init = (function game$core$hard_init(){
game.core.gravity = 0.08;

return (
game.core.pillar_gap = (160))
;
});
game.core.starting_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"timer-running","timer-running",1190718961),false,new cljs.core.Keyword(null,"jump-count","jump-count",-1095229696),(0),new cljs.core.Keyword(null,"initial-vel","initial-vel",428539882),(0),new cljs.core.Keyword(null,"start-time","start-time",814801386),(0),new cljs.core.Keyword(null,"flappy-start-time","flappy-start-time",275858209),(0),new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547),game.core.start_y,new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start-time","start-time",814801386),(0),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),(900),new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266),(900),new cljs.core.Keyword(null,"gap-top","gap-top",246258531),(200)], null)], null)], null);
game.core.reset_state = (function game$core$reset_state(_,cur_time){
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,game.core.starting_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743)], null),(function (pls){
return cljs.core.map.call(null,(function (p1__29174_SHARP_){
return cljs.core.assoc.call(null,p1__29174_SHARP_,new cljs.core.Keyword(null,"start-time","start-time",814801386),cur_time);
}),pls);
})),new cljs.core.Keyword(null,"start-time","start-time",814801386),cur_time,new cljs.core.Keyword(null,"flappy-start-time","flappy-start-time",275858209),cur_time,new cljs.core.Keyword(null,"timer-running","timer-running",1190718961),true);
});
if((typeof game !== 'undefined') && (typeof game.core !== 'undefined') && (typeof game.core.flap_state !== 'undefined')){
} else {
game.core.flap_state = cljs.core.atom.call(null,game.core.starting_state);
}
game.core.curr_pillar_pos = (function game$core$curr_pillar_pos(cur_time,p__29175){
var map__29176 = p__29175;
var map__29176__$1 = ((((!((map__29176 == null)))?(((((map__29176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29176):map__29176);
var pos_x = cljs.core.get.call(null,map__29176__$1,new cljs.core.Keyword(null,"pos-x","pos-x",398349422));
var start_time = cljs.core.get.call(null,map__29176__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
return game.core.translate.call(null,pos_x,game.core.horiz_vel,(cur_time - start_time));
});
game.core.in_pillar_QMARK_ = (function game$core$in_pillar_QMARK_(p__29178){
var map__29179 = p__29178;
var map__29179__$1 = ((((!((map__29179 == null)))?(((((map__29179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29179):map__29179);
var cur_x = cljs.core.get.call(null,map__29179__$1,new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266));
return ((((game.core.flappy_x + game.core.flappy_width) >= cur_x)) && ((game.core.flappy_x < (cur_x + game.core.pillar_width))));
});
game.core.in_pillar_gap_QMARK_ = (function game$core$in_pillar_gap_QMARK_(p__29181,p__29182){
var map__29183 = p__29181;
var map__29183__$1 = ((((!((map__29183 == null)))?(((((map__29183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29183):map__29183);
var flappy_y = cljs.core.get.call(null,map__29183__$1,new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547));
var map__29184 = p__29182;
var map__29184__$1 = ((((!((map__29184 == null)))?(((((map__29184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29184):map__29184);
var gap_top = cljs.core.get.call(null,map__29184__$1,new cljs.core.Keyword(null,"gap-top","gap-top",246258531));
return (((gap_top < flappy_y)) && (((gap_top + game.core.pillar_gap) > (flappy_y + game.core.flappy_height))));
});
game.core.bottom_collision_QMARK_ = (function game$core$bottom_collision_QMARK_(p__29187){
var map__29188 = p__29187;
var map__29188__$1 = ((((!((map__29188 == null)))?(((((map__29188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29188):map__29188);
var flappy_y = cljs.core.get.call(null,map__29188__$1,new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547));
return (flappy_y >= (game.core.bottom_y - game.core.flappy_height));
});
game.core.collision_QMARK_ = (function game$core$collision_QMARK_(p__29191){
var map__29192 = p__29191;
var map__29192__$1 = ((((!((map__29192 == null)))?(((((map__29192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29192):map__29192);
var st = map__29192__$1;
var pillar_list = cljs.core.get.call(null,map__29192__$1,new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743));
if(cljs.core.truth_(cljs.core.some.call(null,((function (map__29192,map__29192__$1,st,pillar_list){
return (function (p1__29190_SHARP_){
var or__3936__auto__ = (function (){var and__3925__auto__ = game.core.in_pillar_QMARK_.call(null,p1__29190_SHARP_);
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.not.call(null,game.core.in_pillar_gap_QMARK_.call(null,st,p1__29190_SHARP_));
} else {
return and__3925__auto__;
}
})();
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return game.core.bottom_collision_QMARK_.call(null,st);
}
});})(map__29192,map__29192__$1,st,pillar_list))
,pillar_list))){
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"timer-running","timer-running",1190718961),false);
} else {
return st;
}
});
game.core.new_pillar = (function game$core$new_pillar(cur_time,pos_x){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start-time","start-time",814801386),cur_time,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),pos_x,new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266),pos_x,new cljs.core.Keyword(null,"gap-top","gap-top",246258531),((60) + cljs.core.rand_int.call(null,((game.core.bottom_y - (120)) - game.core.pillar_gap)))], null);
});
game.core.update_pillars = (function game$core$update_pillars(p__29196){
var map__29197 = p__29196;
var map__29197__$1 = ((((!((map__29197 == null)))?(((((map__29197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29197):map__29197);
var st = map__29197__$1;
var pillar_list = cljs.core.get.call(null,map__29197__$1,new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743));
var cur_time = cljs.core.get.call(null,map__29197__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
var pillars_with_pos = cljs.core.map.call(null,((function (map__29197,map__29197__$1,st,pillar_list,cur_time){
return (function (p1__29194_SHARP_){
return cljs.core.assoc.call(null,p1__29194_SHARP_,new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266),game.core.curr_pillar_pos.call(null,cur_time,p1__29194_SHARP_));
});})(map__29197,map__29197__$1,st,pillar_list,cur_time))
,pillar_list);
var pillars_in_world = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266),cljs.core.filter.call(null,((function (pillars_with_pos,map__29197,map__29197__$1,st,pillar_list,cur_time){
return (function (p1__29195_SHARP_){
return (new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266).cljs$core$IFn$_invoke$arity$1(p1__29195_SHARP_) > (- game.core.pillar_width));
});})(pillars_with_pos,map__29197,map__29197__$1,st,pillar_list,cur_time))
,pillars_with_pos));
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743),(((cljs.core.count.call(null,pillars_in_world) < (3)))?cljs.core.conj.call(null,pillars_in_world,game.core.new_pillar.call(null,cur_time,(game.core.pillar_spacing + new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pillars_in_world))))):pillars_in_world));
});
game.core.sine_wave = (function game$core$sine_wave(st){
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547),(game.core.start_y + ((30) * Math.sin((new cljs.core.Keyword(null,"time-delta","time-delta",-1937570875).cljs$core$IFn$_invoke$arity$1(st) / (300))))));
});
game.core.update_flappy = (function game$core$update_flappy(p__29199){
var map__29200 = p__29199;
var map__29200__$1 = ((((!((map__29200 == null)))?(((((map__29200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29200):map__29200);
var st = map__29200__$1;
var time_delta = cljs.core.get.call(null,map__29200__$1,new cljs.core.Keyword(null,"time-delta","time-delta",-1937570875));
var initial_vel = cljs.core.get.call(null,map__29200__$1,new cljs.core.Keyword(null,"initial-vel","initial-vel",428539882));
var flappy_y = cljs.core.get.call(null,map__29200__$1,new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547));
var jump_count = cljs.core.get.call(null,map__29200__$1,new cljs.core.Keyword(null,"jump-count","jump-count",-1095229696));
if((jump_count > (0))){
var cur_vel = (initial_vel - (time_delta * game.core.gravity));
var new_y = (flappy_y - cur_vel);
var new_y__$1 = (((new_y > (game.core.bottom_y - game.core.flappy_height)))?(game.core.bottom_y - game.core.flappy_height):new_y);
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547),new_y__$1);
} else {
return game.core.sine_wave.call(null,st);
}
});
game.core.score = (function game$core$score(p__29202){
var map__29203 = p__29202;
var map__29203__$1 = ((((!((map__29203 == null)))?(((((map__29203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29203):map__29203);
var st = map__29203__$1;
var cur_time = cljs.core.get.call(null,map__29203__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
var start_time = cljs.core.get.call(null,map__29203__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
var score = (Math.abs(game.core.floor.call(null,((((cur_time - start_time) * game.core.horiz_vel) - (544)) / game.core.pillar_spacing))) - (4));
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"score","score",-1963588780),(((score < (0)))?(0):score));
});
game.core.time_update = (function game$core$time_update(timestamp,state){
return game.core.score.call(null,game.core.collision_QMARK_.call(null,game.core.update_pillars.call(null,game.core.update_flappy.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"cur-time","cur-time",518931125),timestamp,new cljs.core.Keyword(null,"time-delta","time-delta",-1937570875),(timestamp - new cljs.core.Keyword(null,"flappy-start-time","flappy-start-time",275858209).cljs$core$IFn$_invoke$arity$1(state)))))));
});
game.core.jump = (function game$core$jump(p__29205){
var map__29206 = p__29205;
var map__29206__$1 = ((((!((map__29206 == null)))?(((((map__29206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29206):map__29206);
var state = map__29206__$1;
var cur_time = cljs.core.get.call(null,map__29206__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
var jump_count = cljs.core.get.call(null,map__29206__$1,new cljs.core.Keyword(null,"jump-count","jump-count",-1095229696));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"jump-count","jump-count",-1095229696),(jump_count + (1)),new cljs.core.Keyword(null,"flappy-start-time","flappy-start-time",275858209),cur_time,new cljs.core.Keyword(null,"initial-vel","initial-vel",428539882),game.core.jump_vel);
});
game.core.border = (function game$core$border(p__29208){
var map__29209 = p__29208;
var map__29209__$1 = ((((!((map__29209 == null)))?(((((map__29209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29209):map__29209);
var state = map__29209__$1;
var cur_time = cljs.core.get.call(null,map__29209__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"border-pos","border-pos",-56607875),cljs.core.mod.call(null,game.core.translate.call(null,(0),game.core.horiz_vel,cur_time),(23)));
});
game.core.pillar_offset = (function game$core$pillar_offset(p__29211){
var map__29212 = p__29211;
var map__29212__$1 = ((((!((map__29212 == null)))?(((((map__29212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29212):map__29212);
var p = map__29212__$1;
var gap_top = cljs.core.get.call(null,map__29212__$1,new cljs.core.Keyword(null,"gap-top","gap-top",246258531));
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"upper-height","upper-height",1141538372),gap_top,new cljs.core.Keyword(null,"lower-height","lower-height",-846579583),((game.core.bottom_y - gap_top) - game.core.pillar_gap));
});
game.core.pillar_offsets = (function game$core$pillar_offsets(state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743)], null),(function (pillar_list){
return cljs.core.map.call(null,game.core.pillar_offset,pillar_list);
}));
});
game.core.world = (function game$core$world(state){
return game.core.pillar_offsets.call(null,game.core.border.call(null,state));
});
game.core.px = (function game$core$px(n){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"px"].join('');
});
game.core.pillar = (function game$core$pillar(p__29214){
var map__29215 = p__29214;
var map__29215__$1 = ((((!((map__29215 == null)))?(((((map__29215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29215):map__29215);
var cur_x = cljs.core.get.call(null,map__29215__$1,new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266));
var pos_x = cljs.core.get.call(null,map__29215__$1,new cljs.core.Keyword(null,"pos-x","pos-x",398349422));
var upper_height = cljs.core.get.call(null,map__29215__$1,new cljs.core.Keyword(null,"upper-height","upper-height",1141538372));
var lower_height = cljs.core.get.call(null,map__29215__$1,new cljs.core.Keyword(null,"lower-height","lower-height",-846579583));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillars","div.pillars",-1469617576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillar.pillar-upper","div.pillar.pillar-upper",596294660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),game.core.px.call(null,cur_x),new cljs.core.Keyword(null,"height","height",1025178622),upper_height], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillar.pillar-lower","div.pillar.pillar-lower",-1227306575),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),game.core.px.call(null,cur_x),new cljs.core.Keyword(null,"height","height",1025178622),lower_height], null)], null)], null)], null);
});
game.core.time_loop = (function game$core$time_loop(time){
var new_state = cljs.core.swap_BANG_.call(null,game.core.flap_state,cljs.core.partial.call(null,game.core.time_update,time));
if(cljs.core.truth_(new cljs.core.Keyword(null,"timer-running","timer-running",1190718961).cljs$core$IFn$_invoke$arity$1(new_state))){
var c__29115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29115__auto__,new_state){
return (function (){
var f__29116__auto__ = (function (){var switch__29092__auto__ = ((function (c__29115__auto__,new_state){
return (function (state_29222){
var state_val_29223 = (state_29222[(1)]);
if((state_val_29223 === (1))){
var inst_29217 = cljs.core.async.timeout.call(null,(30));
var state_29222__$1 = state_29222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29222__$1,(2),inst_29217);
} else {
if((state_val_29223 === (2))){
var inst_29219 = (state_29222[(2)]);
var inst_29220 = window.requestAnimationFrame(game.core.time_loop);
var state_29222__$1 = (function (){var statearr_29224 = state_29222;
(statearr_29224[(7)] = inst_29219);

return statearr_29224;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29222__$1,inst_29220);
} else {
return null;
}
}
});})(c__29115__auto__,new_state))
;
return ((function (switch__29092__auto__,c__29115__auto__,new_state){
return (function() {
var game$core$time_loop_$_state_machine__29093__auto__ = null;
var game$core$time_loop_$_state_machine__29093__auto____0 = (function (){
var statearr_29225 = [null,null,null,null,null,null,null,null];
(statearr_29225[(0)] = game$core$time_loop_$_state_machine__29093__auto__);

(statearr_29225[(1)] = (1));

return statearr_29225;
});
var game$core$time_loop_$_state_machine__29093__auto____1 = (function (state_29222){
while(true){
var ret_value__29094__auto__ = (function (){try{while(true){
var result__29095__auto__ = switch__29092__auto__.call(null,state_29222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29095__auto__;
}
break;
}
}catch (e29226){if((e29226 instanceof Object)){
var ex__29096__auto__ = e29226;
var statearr_29227_29229 = state_29222;
(statearr_29227_29229[(5)] = ex__29096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29230 = state_29222;
state_29222 = G__29230;
continue;
} else {
return ret_value__29094__auto__;
}
break;
}
});
game$core$time_loop_$_state_machine__29093__auto__ = function(state_29222){
switch(arguments.length){
case 0:
return game$core$time_loop_$_state_machine__29093__auto____0.call(this);
case 1:
return game$core$time_loop_$_state_machine__29093__auto____1.call(this,state_29222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
game$core$time_loop_$_state_machine__29093__auto__.cljs$core$IFn$_invoke$arity$0 = game$core$time_loop_$_state_machine__29093__auto____0;
game$core$time_loop_$_state_machine__29093__auto__.cljs$core$IFn$_invoke$arity$1 = game$core$time_loop_$_state_machine__29093__auto____1;
return game$core$time_loop_$_state_machine__29093__auto__;
})()
;})(switch__29092__auto__,c__29115__auto__,new_state))
})();
var state__29117__auto__ = (function (){var statearr_29228 = f__29116__auto__.call(null);
(statearr_29228[(6)] = c__29115__auto__);

return statearr_29228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29117__auto__);
});})(c__29115__auto__,new_state))
);

return c__29115__auto__;
} else {
return null;
}
});
game.core.start_game = (function game$core$start_game(level){
if(cljs.core._EQ_.call(null,level,(1))){
game.core.easy_init.call(null);
} else {
if(cljs.core._EQ_.call(null,level,(2))){
game.core.normal_init.call(null);
} else {
game.core.hard_init.call(null);
}
}

return window.requestAnimationFrame((function (time){
cljs.core.reset_BANG_.call(null,game.core.flap_state,game.core.reset_state.call(null,cljs.core.deref.call(null,game.core.flap_state),time));

return game.core.time_loop.call(null,time);
}));
});
game.core.main_template = (function game$core$main_template(p__29231){
var map__29232 = p__29231;
var map__29232__$1 = ((((!((map__29232 == null)))?(((((map__29232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29232):map__29232);
var score = cljs.core.get.call(null,map__29232__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var cur_time = cljs.core.get.call(null,map__29232__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
var jump_count = cljs.core.get.call(null,map__29232__$1,new cljs.core.Keyword(null,"jump-count","jump-count",-1095229696));
var timer_running = cljs.core.get.call(null,map__29232__$1,new cljs.core.Keyword(null,"timer-running","timer-running",1190718961));
var border_pos = cljs.core.get.call(null,map__29232__$1,new cljs.core.Keyword(null,"border-pos","border-pos",-56607875));
var flappy_y = cljs.core.get.call(null,map__29232__$1,new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547));
var pillar_list = cljs.core.get.call(null,map__29232__$1,new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743));
return React.createElement("div",({"onMouseDown": ((function (map__29232,map__29232__$1,score,cur_time,jump_count,timer_running,border_pos,flappy_y,pillar_list){
return (function (e){
cljs.core.swap_BANG_.call(null,game.core.flap_state,game.core.jump);

return e.preventDefault();
});})(map__29232,map__29232__$1,score,cur_time,jump_count,timer_running,border_pos,flappy_y,pillar_list))
, "className": "board"}),(function (){var attrs29234 = score;
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs29234))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["score"], null)], null),attrs29234)):({"className": "score"})),((cljs.core.map_QMARK_.call(null,attrs29234))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29234)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,timer_running))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.easy-button","a.easy-button",834047260),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__29232,map__29232__$1,score,cur_time,jump_count,timer_running,border_pos,flappy_y,pillar_list){
return (function (){
return game.core.start_game.call(null,(1));
});})(map__29232,map__29232__$1,score,cur_time,jump_count,timer_running,border_pos,flappy_y,pillar_list))
], null),"EASY"], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null))),sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,timer_running))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.normal-button","a.normal-button",1334374506),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__29232,map__29232__$1,score,cur_time,jump_count,timer_running,border_pos,flappy_y,pillar_list){
return (function (){
return game.core.start_game.call(null,(2));
});})(map__29232,map__29232__$1,score,cur_time,jump_count,timer_running,border_pos,flappy_y,pillar_list))
], null),"NORMAL"], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null))),sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,timer_running))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.hard-button","a.hard-button",-292250615),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__29232,map__29232__$1,score,cur_time,jump_count,timer_running,border_pos,flappy_y,pillar_list){
return (function (){
return game.core.start_game.call(null,(3));
});})(map__29232,map__29232__$1,score,cur_time,jump_count,timer_running,border_pos,flappy_y,pillar_list))
], null),"HARD"], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null))),(function (){var attrs29235 = cljs.core.map.call(null,game.core.pillar,pillar_list);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29235))?sablono.interpreter.attributes.call(null,attrs29235):null),((cljs.core.map_QMARK_.call(null,attrs29235))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29235)], null)));
})(),React.createElement("div",({"style": ({"top": game.core.px.call(null,flappy_y)}), "className": "flappy"})),React.createElement("div",({"style": ({"backgroundPositionX": game.core.px.call(null,border_pos)}), "className": "scrolling-border"})));
});
var node_29236 = document.getElementById("board-area");
game.core.renderer = ((function (node_29236){
return (function game$core$renderer(full_state){
return ReactDOM.render(game.core.main_template.call(null,full_state),node_29236);
});})(node_29236))
;
cljs.core.add_watch.call(null,game.core.flap_state,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (_,___$1,___$2,n){
return game.core.renderer.call(null,game.core.world.call(null,n));
}));
cljs.core.reset_BANG_.call(null,game.core.flap_state,cljs.core.deref.call(null,game.core.flap_state));

//# sourceMappingURL=core.js.map?rel=1573928520897
