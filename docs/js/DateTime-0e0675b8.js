import{d as p,h as f,j as h,o as y,b as x,e as s,t as e,u as t}from"./index-4cdfd756.js";import{t as _}from"./index-3ebd297e.js";import{d as g}from"./theme-05308a4b.js";import{_ as D}from"./plugin-vue_export-helper-893979e1.js";const B={class:"date_time_frame"},Y={class:"date"},k={class:"day_in_week"},C={class:"lunar"},T={class:"main"},I={class:"star"},w={class:"time"},E={class:"ampm"},F=p({setup(M){f(v=>({"53eef60e":t(g).font_color}));const a=h(_.get_lunar_calendar());return(v,V)=>{var n,o,l,r,i,c,d,m,u;return y(),x("div",B,[s("div",Y,[s("span",null,e(t(_).dynamic_date_formatted("YYYY.M.D").value),1),s("span",k,e(t(_).get_day_in_week()),1)]),s("div",C,[s("span",T,e((n=a.value)==null?void 0:n.gzYear)+"\u5E74"+e((o=a.value)==null?void 0:o.IMonthCn)+e((l=a.value)==null?void 0:l.IDayCn),1),s("span",I,e((r=a.value)==null?void 0:r.festival)+" "+e(((i=a.value)==null?void 0:i.festival)&&((c=a.value)==null?void 0:c.Term)?"\xB7":"")+" "+e(a.value.Term)+" "+e(((d=a.value)==null?void 0:d.lunarFestival)&&((m=a.value)==null?void 0:m.Term)?"\xB7":"")+" "+e((u=a.value)==null?void 0:u.lunarFestival),1)]),s("div",w,[s("span",null,e(t(_).dynamic_date_time_formatted("hh:mm:ss").value),1),s("span",E,e(t(_).get_ampm()),1)])])}}});var S=D(F,[["__scopeId","data-v-4e9c94f2"]]);export{S as D};
