import React,{useEffect,useRef,useState} from 'react';
import {ArrowLeft,ArrowRight,ChevronRight,Landmark,LocateFixed,Map,Shield,Users,X} from 'lucide-react';
import {ENTITIES,RELATIONSHIPS,getEntity,CATEGORIES} from '../data/content';
import {EntityGlyph,InfoBlock} from './ui';

function useDialogA11y(onClose){
 const ref=useRef(null);
 useEffect(()=>{
  const previous=document.activeElement;
  const root=ref.current; if(!root)return;
  const focusables=()=>Array.from(root.querySelectorAll('button,input,[tabindex]:not([tabindex="-1"])')).filter(el=>!el.disabled);
  (focusables()[0]||root).focus();
  const onKey=e=>{
   if(e.key==='Escape'){onClose();return;}
   if(e.key==='Tab'){
    const f=focusables(); if(!f.length)return;
    const first=f[0],last=f[f.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
   }
  };
  document.addEventListener('keydown',onKey);
  return()=>{document.removeEventListener('keydown',onKey);previous?.focus?.()};
 },[onClose]);
 return ref;
}

export function EntitySheet({entity,onClose,onEntity}){
 const [tab,setTab]=useState('essential'); const dialogRef=useDialogA11y(onClose);
 const related=RELATIONSHIPS.filter(r=>r.source===entity.id||r.target===entity.id).map(r=>({...r,other:getEntity(r.source===entity.id?r.target:r.source)}));
 return <div className="overlay" role="presentation" onMouseDown={e=>e.target===e.currentTarget&&onClose()}>
  <section ref={dialogRef} className="entity-sheet" role="dialog" aria-modal="true" aria-labelledby="entity-title" tabIndex={-1}>
   <div className="sheet-grab" aria-hidden="true"></div><header className="sheet-head"><div><span className="eyebrow">{CATEGORIES[entity.type]}</span><h2 id="entity-title">{entity.name}</h2></div><button className="icon-button" onClick={onClose} aria-label="Fechar"><X/></button></header>
   <div className="sheet-scroll"><p className="entity-summary">{entity.summary}</p>
    <div className="sheet-tabs" role="tablist"><button role="tab" aria-selected={tab==='essential'} className={tab==='essential'?'active':''} onClick={()=>setTab('essential')}>Essencial</button><button role="tab" aria-selected={tab==='connections'} className={tab==='connections'?'active':''} onClick={()=>setTab('connections')}>Conexões {related.length>0&&<span>{related.length}</span>}</button></div>
    {tab==='essential'&&<div className="content-stack"><InfoBlock title={entity.primaryLabel||'Em uma frase'}>{entity.essential}</InfoBlock>{entity.location&&<InfoBlock title="Onde fica">{entity.location}</InfoBlock>}{entity.region&&<InfoBlock title="Região"><button className="inline-link" onClick={()=>onEntity(entity.regionId)}>{entity.region}</button></InfoBlock>}{entity.affiliation&&<InfoBlock title="Casa / afiliação"><button className="inline-link" onClick={()=>onEntity(entity.affiliationId)}>{entity.affiliation}</button></InfoBlock>}{entity.function&&<InfoBlock title="Função / título">{entity.function}</InfoBlock>}{entity.symbol&&<div className="symbol-panel"><span className="symbol-mark" aria-hidden="true">{entity.symbol}</span><span><b>Símbolo</b><small>{entity.symbolMeaning}</small></span></div>}{entity.mapId&&<button className="context-action" onClick={()=>onEntity(entity.mapId)}><Map size={16}/> Ver contexto no mapa <ArrowRight size={15}/></button>}</div>}
    {tab==='connections'&&<div className="relation-stack">{related.length===0&&<div className="empty-inline">Nenhuma conexão contextual cadastrada.</div>}{related.map(r=><button className="relation-row" key={r.id} onClick={()=>onEntity(r.other.id)}><span className="relation-line"/><span><small>{r.label}</small><b>{r.other.name}</b><em>{r.explanation}</em></span><ChevronRight/></button>)}{related.length>0&&<RelationshipDiagram entity={entity} related={related} onEntity={onEntity}/>}</div>}
   </div>
  </section>
 </div>
}

export function RelationshipDiagram({entity,related,onEntity}){
 const [active,setActive]=useState(null);
 return <section className="diagram"><div className="diagram-head"><span className="eyebrow">MAPA DE RELAÇÕES</span><span>Toque em um nó</span></div><div className="diagram-canvas" role="group" aria-label={`Relações próximas de ${entity.name}`}>
  <button className="diagram-node center" onClick={()=>setActive(entity.id)}><EntityGlyph entity={entity}/><b>{entity.name}</b></button>
  {related.slice(0,6).map((r,i)=>{const angle=(i/Math.max(1,Math.min(6,related.length)))*Math.PI*2-Math.PI/2;const x=50+Math.cos(angle)*34,y=50+Math.sin(angle)*34;return <React.Fragment key={r.id}><span className="diagram-edge" style={{left:'50%',top:'50%',width:'34%',transform:`rotate(${angle}rad)`}} aria-hidden="true"/><button className={`diagram-node outer ${active===r.other.id?'active':''}`} style={{left:`${x}%`,top:`${y}%`}} onClick={()=>{setActive(r.other.id);onEntity(r.other.id)}} aria-label={`${r.label}: ${r.other.name}`}><EntityGlyph entity={r.other}/><b>{r.other.name}</b><small>{r.label}</small></button></React.Fragment>})}
 </div></section>
}

export function LostFlow({onClose,onEntity}){
 const [step,setStep]=useState('type'),[type,setType]=useState(null); const dialogRef=useDialogA11y(onClose);
 const choices=[['person','Uma pessoa'],['house','Uma Casa'],['place','Um lugar'],['concept','Um termo'],['map','Não sei onde fica']];
 const options=type?ENTITIES.filter(e=>type==='concept'?['concept','title','term'].includes(e.type):e.type===type):[];
 return <div className="overlay"><section ref={dialogRef} className="lost-modal" role="dialog" aria-modal="true" aria-labelledby="lost-title" tabIndex={-1}><header className="sheet-head"><div><span className="eyebrow">ORIENTAÇÃO RÁPIDA</span><h2 id="lost-title">O que você não entendeu?</h2></div><button className="icon-button" onClick={onClose} aria-label="Fechar"><X/></button></header>
  {step==='type'&&<div className="lost-options">{choices.map(([id,label])=><button key={id} onClick={()=>{if(id==='map'){onClose();onEntity('westeros')}else{setType(id);setStep('entity')}}}><span>{id==='person'?<Users/>:id==='house'?<Shield/>:id==='place'?<Map/>:id==='concept'?<Landmark/>:<LocateFixed/>}</span><b>{label}</b><ChevronRight/></button>)}</div>}
  {step==='entity'&&<div className="lost-entity-list"><button className="back-row" onClick={()=>{setStep('type');setType(null)}}><ArrowLeft size={16}/> Escolher outra categoria</button>{options.map(e=><button className="lost-entity" key={e.id} onClick={()=>onEntity(e.id)}><EntityGlyph entity={e}/><span><b>{e.name}</b><small>{e.summary}</small></span><ChevronRight/></button>)}</div>}
 </section></div>
}
