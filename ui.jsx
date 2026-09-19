import React from 'react';
import {Map, Shield, Users, Landmark} from 'lucide-react';
import {CATEGORIES} from '../data/content';

export function EntityGlyph({entity}){
  const Icon = entity.type==='person'?Users:entity.type==='place'?Map:entity.type==='house'?Shield:Landmark;
  return <span className={`entity-glyph ${entity.type}`} aria-hidden="true"><Icon size={20}/></span>;
}
export function PageIntro({eyebrow,title,text}){return <header className="page-intro"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></header>}
export function InfoBlock({title,children}){return <section className="info-block"><span className="eyebrow">{title}</span><p>{children}</p></section>}
export {CATEGORIES};
