import React, {useEffect, useMemo, useState} from "react";
import {createRoot} from "react-dom/client";
import {ArrowRight, ChevronDown, ChevronRight, Filter, HelpCircle, Info, Search, X} from "lucide-react";
import {ENTITIES, RELATIONSHIPS, CATEGORIES, getEntity} from "./data/content";
import {Header, MobileMenu, BottomNav} from "./components/Navigation";
import InteractiveMap from "./components/MapView";
import {EntityGlyph, PageIntro} from "./components/ui";
import {EntitySheet, LostFlow} from "./components/ModalFlows";
import "./styles/global.css";



function App(){
  const [section,setSection] = useState("home");
  const [selected,setSelected] = useState(null);
  const [lostOpen,setLostOpen] = useState(false);
  const [search,setSearch] = useState("");
  const [filter,setFilter] = useState("all");
  const [mobileMenu,setMobileMenu] = useState(false);

  useEffect(()=>{
    document.title = section === "home" ? "Atlas de Westeros — Guia sem spoilers" : `Atlas de Westeros — ${labelFor(section)}`;
  },[section]);

  const openEntity = (id)=>{ setSelected(getEntity(id)); };
  const navigate = (id)=>{ setSection(id); setMobileMenu(false); window.scrollTo({top:0,behavior:"smooth"}); };



  return <div className="app">
    <Header section={section} onNavigate={navigate} onSearch={()=>navigate("search")} onLost={()=>setLostOpen(true)} onMenu={()=>setMobileMenu(true)} />
    {mobileMenu && <MobileMenu section={section} onNavigate={navigate} onClose={()=>setMobileMenu(false)} onLost={()=>setLostOpen(true)} />}
    <main id="main-content">
      {section==="home" && <Home onStart={()=>navigate("world")} onLost={()=>setLostOpen(true)} onEntity={openEntity}/>}
      {section==="world" && <World onEntity={openEntity}/>}
      {section==="explore" && <Explore onEntity={openEntity} onNavigate={navigate}/>}
      {section==="search" && <SearchView query={search} setQuery={setSearch} filter={filter} setFilter={setFilter} onEntity={openEntity}/>}
    </main>
    <BottomNav section={section} onNavigate={navigate} onLost={()=>setLostOpen(true)} />
    {selected && <EntitySheet entity={selected} onClose={()=>setSelected(null)} onEntity={openEntity} />}
    {lostOpen && <LostFlow onClose={()=>setLostOpen(false)} onEntity={(id)=>{setLostOpen(false);openEntity(id)}} />}
    <footer className="site-footer">
      <span>Atlas de Westeros</span>
      <span>Guia de contexto • sem spoilers</span>
    </footer>
  </div>
}

function Home({onStart,onLost,onEntity}){
  return <div className="home">
    <section className="hero section-pad">
      <div className="hero-copy">
        <span className="eyebrow">UM ATLAS PARA QUEM ESTÁ COMEÇANDO</span>
        <h1>Entenda o mundo antes de tentar <em>entender tudo.</em></h1>
        <p className="hero-lede">Um mapa mental interativo para localizar lugares, reconhecer Casas, entender pessoas e decifrar os termos básicos — sem contar a história.</p>
        <div className="hero-actions">
          <button className="primary-button" onClick={onStart}>Começar a explorar <ArrowRight size={18}/></button>
          <button className="secondary-button" onClick={onLost}>Estou perdido <HelpCircle size={17}/></button>
        </div>
      </div>
    </section>
    <section className="section-pad orientation">
      <div className="section-heading"><span className="eyebrow">PRIMEIRO MAPA MENTAL</span><h2>Três perguntas para começar.</h2><p>O atlas organiza o universo em camadas. Você não precisa decorar nada de uma vez.</p></div>
      <div className="orientation-grid">
        <button className="orientation-item" onClick={()=>onEntity("westeros")}><span className="number">01</span><div><b>Onde estou?</b><p>Westeros, Essos e as regiões que formam o mapa.</p></div><ChevronRight/></button>
        <button className="orientation-item" onClick={()=>onEntity("stark")}><span className="number">02</span><div><b>Quem está aqui?</b><p>Casas, pessoas e os núcleos aos quais pertencem.</p></div><ChevronRight/></button>
        <button className="orientation-item" onClick={()=>onEntity("iron-throne")}><span className="number">03</span><div><b>O que significa?</b><p>Títulos, instituições e conceitos essenciais.</p></div><ChevronRight/></button>
      </div>
    </section>
  </div>
}

function World({onEntity}){
  return <div className="page section-pad">
    <PageIntro eyebrow="MUNDO" title="Comece pelo espaço." text="Antes de memorizar nomes, saiba onde as coisas estão. O mapa é a base do seu contexto." />
    <div className="world-layout">
      <InteractiveMap onEntity={onEntity}/>
      <aside className="world-aside">
        <div className="panel-title"><span className="eyebrow">LEGENDA</span><h3>Dois continentes, muitos contextos.</h3></div>
        <button className="context-link" onClick={()=>onEntity("westeros")}><span className="legend-dot westeros-dot"></span><span><b>Westeros</b><small>Um dos principais continentes.</small></span><ChevronRight/></button>
        <button className="context-link" onClick={()=>onEntity("essos")}><span className="legend-dot essos-dot"></span><span><b>Essos</b><small>Continente a leste de Westeros.</small></span><ChevronRight/></button>
        <div className="small-note"><Info size={15}/> O mapa mostra apenas contexto seguro para um iniciante.</div>
      </aside>
    </div>
  </div>
}

function Explore({onEntity,onNavigate}){
  const [tab,setTab] = useState("houses");
  const [open,setOpen] = useState(null);
  const groups = {
    houses: ENTITIES.filter(e=>e.type==="house"),
    people: ENTITIES.filter(e=>e.type==="person"),
    concepts: ENTITIES.filter(e=>["concept","title","term"].includes(e.type))
  };
  const tabs = [
    ["houses","Casas"],["people","Pessoas"],["concepts","Conceitos"]
  ];
  return <div className="page section-pad">
    <PageIntro eyebrow="EXPLORAR" title="Construa o mapa mental por conexões." text="Comece pelo essencial. Abra detalhes somente quando quiser." />
    <div className="segmented" role="tablist" aria-label="Categorias">
      {tabs.map(([id,label])=><button key={id} role="tab" aria-selected={tab===id} className={tab===id?"active":""} onClick={()=>setTab(id)}>{label}</button>)}
    </div>
    <div className="entity-list">
      {groups[tab].map(entity=><article className="entity-row" key={entity.id}>
        <button className="entity-main" onClick={()=>onEntity(entity.id)}>
          <EntityGlyph entity={entity}/><span><b>{entity.name}</b><small>{entity.summary}</small></span>
        </button>
        <button className="row-expand" onClick={()=>setOpen(open===entity.id?null:entity.id)} aria-expanded={open===entity.id} aria-label={`Mais detalhes sobre ${entity.name}`}><ChevronDown className={open===entity.id?"rotated":""}/></button>
        {open===entity.id && <div className="inline-details"><p>{entity.essential}</p><button className="text-button" onClick={()=>onEntity(entity.id)}>Abrir contexto completo <ArrowRight size={15}/></button></div>}
      </article>)}
    </div>
  </div>
}

function SearchView({query,setQuery,filter,setFilter,onEntity}){
  const results = useMemo(()=>{
    const q=query.trim().toLowerCase();
    return ENTITIES.filter(e=>{
      const matchesFilter = filter==="all" || (filter==="people" && e.type==="person") || (filter==="houses" && e.type==="house") || (filter==="places" && e.type==="place") || (filter==="concepts" && ["concept","title","term"].includes(e.type));
      const hay=[e.name,e.summary,e.essential,e.region||"",e.type].join(" ").toLowerCase();
      return matchesFilter && (!q || hay.includes(q));
    });
  },[query,filter]);
  return <div className="page section-pad search-page">
    <PageIntro eyebrow="BUSCAR" title="Encontre o que está na sua cabeça." text="Pesquise uma pessoa, Casa, lugar ou termo. Os resultados sempre mostram a categoria." />
    <div className="search-box"><Search size={20}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Ex.: Stark, Muralha, Westeros..." aria-label="Pesquisar"/>{query&&<button onClick={()=>setQuery("")} aria-label="Limpar busca"><X size={17}/></button>}</div>
    <div className="filter-bar" role="group" aria-label="Filtros de busca">
      <Filter size={15}/>
      {[["all","Tudo"],["people","Pessoas"],["houses","Casas"],["places","Lugares"],["concepts","Conceitos"]].map(([id,label])=><button key={id} className={filter===id?"active":""} onClick={()=>setFilter(id)}>{label}</button>)}
    </div>
    <div className="search-results">
      <div className="result-count">{results.length} resultado{results.length===1?"":"s"}</div>
      {results.map(e=><button className="search-result" key={e.id} onClick={()=>onEntity(e.id)}><EntityGlyph entity={e}/><span><small>{CATEGORIES[e.type]}</small><b>{e.name}</b><em>{e.summary}</em></span><ChevronRight/></button>)}
      {results.length===0 && <div className="empty-state"><Search size={25}/><h3>Nada encontrado.</h3><p>Tente outro nome ou remova um filtro.</p></div>}
    </div>
  </div>
}

function labelFor(id){return {world:"Mundo",explore:"Explorar",search:"Buscar",home:"Início"}[id]||"Atlas"}

createRoot(document.getElementById("root")).render(<App/>);