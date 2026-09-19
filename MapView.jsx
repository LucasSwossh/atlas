import React,{useRef,useState} from 'react';
import {Crosshair,LocateFixed} from 'lucide-react';

export default function InteractiveMap({onEntity}){
 const [zoom,setZoom]=useState(1),[focus,setFocus]=useState(null),[pan,setPan]=useState({x:0,y:0});
 const drag=useRef(null);
 const regions=[
  {id:'the-north',x:180,y:90,w:260,h:155,label:'Norte',sub:'Westeros'},
  {id:'the-wall',x:165,y:48,w:300,h:22,label:'A Muralha',sub:'Fronteira ao norte'},
  {id:'kings-landing',x:350,y:300,w:120,h:70,label:'Porto Real',sub:'Costa leste'},
  {id:'riverlands',x:285,y:230,w:155,h:85,label:'Terras Fluviais',sub:'Westeros'},
  {id:'winterfell',x:235,y:135,w:82,h:52,label:'Winterfell',sub:'Sede Stark'},
  {id:'castle-black',x:285,y:55,w:86,h:40,label:'Castle Black',sub:'Patrulha da Noite'}
 ];
 const start=(e)=>{if(e.button!==0)return;drag.current={x:e.clientX,y:e.clientY,px:pan.x,py:pan.y};e.currentTarget.setPointerCapture?.(e.pointerId)};
 const move=(e)=>{if(!drag.current)return;setPan({x:drag.current.px+e.clientX-drag.current.x,y:drag.current.py+e.clientY-drag.current.y})};
 const end=()=>{drag.current=null};
 return <section className="map-shell" aria-label="Mapa interativo de contexto">
  <div className="map-toolbar"><div><span className="eyebrow">CARTOGRAFIA</span><b>Mapa de orientação</b></div><div className="map-controls"><button onClick={()=>setZoom(z=>Math.min(1.6,z+.1))} aria-label="Aumentar zoom">+</button><span>{Math.round(zoom*100)}%</span><button onClick={()=>setZoom(z=>Math.max(.8,z-.1))} aria-label="Diminuir zoom">−</button><button onClick={()=>{setZoom(1);setPan({x:0,y:0})}} aria-label="Redefinir mapa"><LocateFixed size={15}/></button></div></div>
  <div className="map-viewport" onPointerDown={start} onPointerMove={move} onPointerUp={end} onPointerCancel={end} style={{touchAction:'none'}}>
   <div className="map-canvas" style={{transform:`translate(calc(-50% + ${pan.x}px),calc(-50% + ${pan.y}px)) scale(${zoom})`}}>
    <div className="continent west" aria-label="Westeros" onClick={()=>{setFocus('westeros');onEntity('westeros')}}><span className="continent-label">WESTEROS</span>
     {regions.map(r=><button key={r.id} className={`map-region ${focus===r.id?'focused':''}`} style={{left:r.x,top:r.y,width:r.w,height:r.h}} onClick={e=>{e.stopPropagation();setFocus(r.id);onEntity(r.id)}}><b>{r.label}</b><small>{r.sub}</small></button>)}
    </div>
    <div className="continent east" aria-label="Essos" onClick={()=>{setFocus('essos');onEntity('essos')}}><span className="continent-label">ESSOS</span></div><div className="sea-label">MAR ESTREITO</div>
   </div>
  </div>
  <div className="map-footer"><span><Crosshair size={14}/> Toque ou arraste o mapa para explorar.</span><span>Use os controles para zoom</span></div>
 </section>
}
