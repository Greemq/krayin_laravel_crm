var V=Object.defineProperty,S=(t,e,a)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,C=(t,e,a)=>S(t,typeof e!="symbol"?e+"":e,a);/**
  * vue-cal v4.10.2
  * (c) 2025 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */const m=800;let d=null,c=null,v={id:null,date:null},f=!1,_=!0,u={el:null,cell:null,timeout:null};const r={_eid:null,fromVueCal:null,toVueCal:null},M=class{constructor(t){C(this,"_vuecal"),this._vuecal=t}_getEventStart(t){const{timeStep:e,timeCellHeight:a,timeFrom:i,utils:n}=this._vuecal;let{y:l}=n.cell.getPosition(t);return l-=t.dataTransfer.getData("cursor-grab-at")*1,Math.round(l*e/parseInt(a)+i)}_updateEventStartEnd(t,e,a,i){const n=a.duration*1||e.endTimeMinutes-e.startTimeMinutes;let l=Math.max(this._getEventStart(t),0);if(this._vuecal.snapToTime){const o=l+this._vuecal.snapToTime/2;l=o-o%this._vuecal.snapToTime}e.startTimeMinutes=l,e.start=new Date(new Date(i).setMinutes(l)),e.endTimeMinutes=Math.min(l+n,24*60),e.end=new Date(new Date(i).setMinutes(e.endTimeMinutes))}eventDragStart(t,e){if(t.target.nodeType===3)return t.preventDefault();t.dataTransfer.dropEffect="move",t.dataTransfer.setData("event",JSON.stringify(e)),t.dataTransfer.setData("cursor-grab-at",t.offsetY);const{clickHoldAnEvent:a}=this._vuecal.domEvents;setTimeout(()=>{a._eid=null,clearTimeout(a.timeoutId),e.deleting=!1},0),this._vuecal.domEvents.dragAnEvent._eid=e._eid,r._eid=e._eid,r.fromVueCal=this._vuecal._.uid,e.dragging=!0,setTimeout(()=>e.draggingStatic=!0,0),f=!1,v={id:this._vuecal.view.id,date:this._vuecal.view.startDate},_=!0}eventDragEnd(t){this._vuecal.domEvents.dragAnEvent._eid=null,r._eid=null,t.dragging=!1,t.draggingStatic=!1;const{fromVueCal:e,toVueCal:a}=r;a&&e!==a&&this._vuecal.utils.event.deleteAnEvent(t),r.fromVueCal=null,r.toVueCal=null,f&&_&&v.id&&this._vuecal.switchView(v.id,v.date,!0)}cellDragEnter(t,e,a){const i=t.currentTarget;if(!t.currentTarget.contains(t.relatedTarget)){if(i===u.el||!i.className.includes("vuecal__cell-content"))return!1;u.el&&(u.cell.highlighted=!1),u={el:i,cell:e,timeout:clearTimeout(u.timeout)},e.highlighted=!0,["years","year","month"].includes(this._vuecal.view.id)&&(u.timeout=setTimeout(()=>this._vuecal.switchToNarrowerView(a),2e3))}}cellDragOver(t,e,a,i){t.preventDefault(),e.highlighted=!0,(i||i===0)&&(e.highlightedSplit=i)}cellDragLeave(t,e){t.preventDefault(),!t.currentTarget.contains(t.relatedTarget)&&(e.highlightedSplit=!1,u.cell===e&&(clearTimeout(u.timeout),u={el:null,cell:null,timeout:null},e.highlighted=!1))}cellDragDrop(t,e,a,i){t.preventDefault(),clearTimeout(u.timeout),u={el:null,cell:null,timeout:null};const n=JSON.parse(t.dataTransfer.getData("event")||"{}");let l,o;if(r.fromVueCal!==this._vuecal._.uid){const{_eid:s,start:D,end:p,duration:h,...E}=n;l=this._vuecal.utils.event.createAnEvent(a,h,{...E,split:i})}else if(l=this._vuecal.view.events.find(s=>s._eid===r._eid),l||(l=this._vuecal.mutableEvents.find(s=>s._eid===r._eid),o=!!l),!l){const s=n.endTimeMinutes-n.startTimeMinutes,{start:D,end:p,...h}=n;l=this._vuecal.utils.event.createAnEvent(a,s,{...h,split:i})}const{start:T,split:w}=l;this._updateEventStartEnd(t,l,n,a),o&&this._vuecal.addEventsToView([l]),l.dragging=!1,(i||i===0)&&(l.split=i),e.highlighted=!1,e.highlightedSplit=null,_=!1,r.toVueCal=this._vuecal._.uid;const g={event:this._vuecal.cleanupEvent(l),oldDate:T,newDate:l.start,...(i||i===0)&&{oldSplit:w,newSplit:i},originalEvent:this._vuecal.cleanupEvent(n),external:!r.fromVueCal};this._vuecal.$emit("event-drop",g),this._vuecal.$emit("event-change",{event:g.event,originalEvent:g.originalEvent}),setTimeout(()=>{r._eid&&this.eventDragEnd(l)},300)}viewSelectorDragEnter(t,e,a){t.currentTarget.contains(t.relatedTarget)||(a.highlightedControl=e,clearTimeout(d),d=setTimeout(()=>{if(["previous","next"].includes(e))this._vuecal[e](),clearInterval(c),c=setInterval(this._vuecal[e],m);else if(e==="today"){clearInterval(c);let i;this._vuecal.view.id.includes("year")&&(i=this._vuecal.enabledViews.filter(n=>!n.includes("year"))[0]),this._vuecal.switchView(i||this._vuecal.view.id,new Date(new Date().setHours(0,0,0,0)),!0)}else this._vuecal.switchView(e,null,!0);f=!0},m))}viewSelectorDragLeave(t,e,a){t.currentTarget.contains(t.relatedTarget)||a.highlightedControl===e&&(a.highlightedControl=null,d&&(d=clearTimeout(d)),c&&(c=clearInterval(c)))}};export{M as DragAndDrop};
