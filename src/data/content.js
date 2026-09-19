export const CATEGORIES = {
  house:"Casa", person:"Pessoa", place:"Lugar", concept:"Conceito", title:"Título", term:"Glossário"
};

export const ENTITIES = [
  {
    id:"westeros",type:"place",name:"Westeros",summary:"Um dos principais continentes do mundo da série.",
    essential:"Westeros é um dos principais continentes do mundo conhecido da série. Grande parte do contexto político e geográfico apresentado no início está ligado a ele.",
    primaryLabel:"O que é?", location:"O continente está a oeste de Essos.", mapId:"the-north"
  },
  {
    id:"essos",type:"place",name:"Essos",summary:"Um continente localizado a leste de Westeros.",
    essential:"Essos é um grande continente localizado a leste de Westeros. Ele reúne diferentes povos, cidades e regiões.",
    primaryLabel:"O que é?"
  },
  {
    id:"the-north",type:"place",name:"O Norte",summary:"Uma grande região ao norte de Westeros.",
    essential:"O Norte é uma das principais regiões de Westeros e é associado à Casa Stark.",
    primaryLabel:"O que é?", location:"Norte de Westeros.", mapId:"the-north"
  },
  {
    id:"the-wall",type:"place",name:"A Muralha",summary:"Uma enorme estrutura que marca a fronteira ao norte.",
    essential:"A Muralha é uma enorme construção de gelo que se estende pela fronteira norte de Westeros.",
    primaryLabel:"O que é?", location:"Extremo norte de Westeros.", region:"O Norte", regionId:"the-north"
  },
  {
    id:"winterfell",type:"place",name:"Winterfell",summary:"Sede ancestral da Casa Stark no Norte.",
    essential:"Winterfell é o castelo associado à Casa Stark e um dos principais lugares do Norte.",
    primaryLabel:"O que é?", location:"No Norte de Westeros.", region:"O Norte", regionId:"the-north"
  },
  {
    id:"castle-black",type:"place",name:"Castle Black",summary:"Um dos principais castelos da Patrulha da Noite.",
    essential:"Castle Black é uma das principais fortalezas da Patrulha da Noite e fica junto à Muralha.",
    primaryLabel:"O que é?", location:"Junto à Muralha.", region:"O Norte", regionId:"the-north"
  },
  {
    id:"kings-landing",type:"place",name:"Porto Real",summary:"A capital dos Sete Reinos.",
    essential:"Porto Real é a capital dos Sete Reinos e fica na costa leste de Westeros.",
    primaryLabel:"O que é?", location:"Costa leste de Westeros."
  },
  {
    id:"riverlands",type:"place",name:"Terras Fluviais",summary:"Uma região de Westeros marcada por grandes rios.",
    essential:"As Terras Fluviais são uma região central de Westeros, conhecida por seus muitos rios.",
    primaryLabel:"O que é?", location:"Centro de Westeros."
  },
  {
    id:"stark",type:"house",name:"Casa Stark",summary:"Uma das grandes Casas nobres de Westeros, associada ao Norte.",
    essential:"A Casa Stark é uma grande Casa nobre associada ao Norte de Westeros. Sua sede é Winterfell.",
    primaryLabel:"Quem são?", location:"Winterfell, no Norte.", region:"O Norte", regionId:"the-north", symbol:"LOBO", symbolMeaning:"O lobo gigante é o símbolo associado à Casa Stark."
  },
  {
    id:"lannister",type:"house",name:"Casa Lannister",summary:"Uma das grandes Casas nobres de Westeros, associada às Terras Ocidentais.",
    essential:"A Casa Lannister é uma das grandes Casas nobres de Westeros. Sua principal sede é Rochedo Casterly, nas Terras Ocidentais.",
    primaryLabel:"Quem são?", location:"Terras Ocidentais.", symbol:"LEÃO", symbolMeaning:"O leão é o símbolo associado à Casa Lannister."
  },
  {
    id:"baratheon",type:"house",name:"Casa Baratheon",summary:"A Casa à qual pertence o rei Robert Baratheon.",
    essential:"A Casa Baratheon é uma grande Casa nobre. Robert Baratheon é o rei dos Sete Reinos no início da série.",
    primaryLabel:"Quem são?", location:"Porto Real e Terras da Tempestade.", symbol:"VEADO", symbolMeaning:"O veado coroado é o símbolo associado à Casa Baratheon."
  },
  {
    id:"targaryen",type:"house",name:"Casa Targaryen",summary:"Uma antiga Casa real atualmente representada por membros exilados.",
    essential:"A Casa Targaryen é uma antiga Casa real de Westeros. No início da série, Viserys e Daenerys Targaryen vivem exilados em Essos.",
    primaryLabel:"Quem são?", location:"Atualmente em Essos.", symbol:"DRAGÃO", symbolMeaning:"O dragão de três cabeças é o símbolo associado à Casa Targaryen."
  },
  {
    id:"ned-stark",type:"person",name:"Eddard Stark",summary:"Lorde de Winterfell e Guardião do Norte.",
    essential:"Eddard Stark, conhecido como Ned, é o lorde de Winterfell e o Guardião do Norte.",
    primaryLabel:"Quem é?", affiliation:"Casa Stark",affiliationId:"stark",location:"Winterfell",region:"O Norte",regionId:"the-north",function:"Lorde de Winterfell; Guardião do Norte."
  },
  {
    id:"catelyn-stark",type:"person",name:"Catelyn Stark",summary:"Lady de Winterfell e esposa de Eddard Stark.",
    essential:"Catelyn Stark é a esposa de Eddard Stark e Lady de Winterfell.",
    primaryLabel:"Quem é?", affiliation:"Casa Stark",affiliationId:"stark",location:"Winterfell",region:"O Norte",regionId:"the-north",function:"Lady de Winterfell."
  },
  {
    id:"robb-stark",type:"person",name:"Robb Stark",summary:"Filho mais velho de Eddard e Catelyn Stark.",
    essential:"Robb Stark é o filho mais velho de Eddard e Catelyn Stark.",
    primaryLabel:"Quem é?", affiliation:"Casa Stark",affiliationId:"stark",location:"Winterfell",region:"O Norte",regionId:"the-north"
  },
  {
    id:"sansa-stark",type:"person",name:"Sansa Stark",summary:"Filha mais velha de Eddard e Catelyn Stark.",
    essential:"Sansa Stark é a filha mais velha de Eddard e Catelyn Stark.",
    primaryLabel:"Quem é?", affiliation:"Casa Stark",affiliationId:"stark",location:"Winterfell",region:"O Norte",regionId:"the-north"
  },
  {
    id:"arya-stark",type:"person",name:"Arya Stark",summary:"Filha de Eddard e Catelyn Stark.",
    essential:"Arya Stark é uma das filhas de Eddard e Catelyn Stark.",
    primaryLabel:"Quem é?", affiliation:"Casa Stark",affiliationId:"stark",location:"Winterfell",region:"O Norte",regionId:"the-north"
  },
  {
    id:"bran-stark",type:"person",name:"Bran Stark",summary:"Um dos filhos de Eddard e Catelyn Stark.",
    essential:"Bran Stark é um dos filhos de Eddard e Catelyn Stark.",
    primaryLabel:"Quem é?", affiliation:"Casa Stark",affiliationId:"stark",location:"Winterfell",region:"O Norte",regionId:"the-north"
  },
  {
    id:"jon-snow",type:"person",name:"Jon Snow",summary:"Jovem associado à família Stark e à Patrulha da Noite.",
    essential:"Jon Snow é o filho bastardo de Eddard Stark e está ligado à Patrulha da Noite.",
    primaryLabel:"Quem é?", affiliation:"Casa Stark",affiliationId:"stark",location:"A Muralha",region:"O Norte",regionId:"the-north",function:"Membro da Patrulha da Noite."
  },
  {
    id:"robert-baratheon",type:"person",name:"Robert Baratheon",summary:"Rei dos Sete Reinos no início da série.",
    essential:"Robert Baratheon é o rei dos Sete Reinos no início da série.",
    primaryLabel:"Quem é?", affiliation:"Casa Baratheon",affiliationId:"baratheon",location:"Porto Real",function:"Rei dos Sete Reinos."
  },
  {
    id:"cersei-lannister",type:"person",name:"Cersei Lannister",summary:"Rainha e membro da Casa Lannister.",
    essential:"Cersei Lannister é membro da Casa Lannister e rainha, esposa do rei Robert Baratheon.",
    primaryLabel:"Quem é?", affiliation:"Casa Lannister",affiliationId:"lannister",location:"Porto Real",function:"Rainha."
  },
  {
    id:"jaime-lannister",type:"person",name:"Jaime Lannister",summary:"Membro da Casa Lannister e cavaleiro da Guarda Real.",
    essential:"Jaime Lannister é membro da Casa Lannister e faz parte da Guarda Real.",
    primaryLabel:"Quem é?", affiliation:"Casa Lannister",affiliationId:"lannister",location:"Porto Real",function:"Membro da Guarda Real."
  },
  {
    id:"tyrion-lannister",type:"person",name:"Tyrion Lannister",summary:"Membro da Casa Lannister conhecido por sua inteligência.",
    essential:"Tyrion Lannister é um membro da Casa Lannister e irmão de Cersei e Jaime.",
    primaryLabel:"Quem é?", affiliation:"Casa Lannister",affiliationId:"lannister",location:"Westeros"
  },
  {
    id:"daenerys-targaryen",type:"person",name:"Daenerys Targaryen",summary:"Uma jovem da Casa Targaryen vivendo em Essos.",
    essential:"Daenerys Targaryen é uma jovem da Casa Targaryen que vive exilada em Essos com seu irmão Viserys.",
    primaryLabel:"Quem é?", affiliation:"Casa Targaryen",affiliationId:"targaryen",location:"Essos"
  },
  {
    id:"night-watch",type:"concept",name:"Patrulha da Noite",summary:"Ordem que guarda a Muralha.",
    essential:"A Patrulha da Noite é uma ordem dedicada à guarda da Muralha, no extremo norte de Westeros.",
    primaryLabel:"O que é?", location:"A Muralha, no Norte.", region:"O Norte", regionId:"the-north"
  },
  {
    id:"iron-throne",type:"concept",name:"Trono de Ferro",summary:"Símbolo do poder real nos Sete Reinos.",
    essential:"O Trono de Ferro é o símbolo do poder real e do governo dos Sete Reinos.",
    primaryLabel:"O que significa?", location:"Porto Real."
  },
  {
    id:"seven-kingdoms",type:"concept",name:"Sete Reinos",summary:"Nome tradicional para o reino governado pelo rei a partir de Porto Real.",
    essential:"Os Sete Reinos é o nome tradicional usado para o reino governado pelo rei a partir de Porto Real.",
    primaryLabel:"O que significa?", location:"Westeros."
  },
  {
    id:"warden-of-the-north",type:"title",name:"Guardião do Norte",summary:"Título associado à autoridade sobre o Norte.",
    essential:"Guardião do Norte é um título associado à autoridade e representação da Coroa sobre a região do Norte.",
    primaryLabel:"O que significa?", region:"O Norte",regionId:"the-north"
  },
  {
    id:"great-houses",type:"concept",name:"Grandes Casas",summary:"Principais famílias nobres que exercem poder em Westeros.",
    essential:"As Grandes Casas são famílias nobres de grande importância política e territorial em Westeros.",
    primaryLabel:"O que significa?", location:"Westeros."
  }
];

export const RELATIONSHIPS = [
  {id:"r1",source:"ned-stark",target:"catelyn-stark",label:"casados",explanation:"Eddard e Catelyn são marido e mulher."},
  {id:"r2",source:"ned-stark",target:"robb-stark",label:"pai e filho",explanation:"Robb é filho de Eddard."},
  {id:"r3",source:"ned-stark",target:"sansa-stark",label:"pai e filha",explanation:"Sansa é filha de Eddard."},
  {id:"r4",source:"ned-stark",target:"arya-stark",label:"pai e filha",explanation:"Arya é filha de Eddard."},
  {id:"r5",source:"ned-stark",target:"bran-stark",label:"pai e filho",explanation:"Bran é filho de Eddard."},
  {id:"r6",source:"ned-stark",target:"jon-snow",label:"pai e filho",explanation:"Jon é filho bastardo de Eddard."},
  {id:"r7",source:"catelyn-stark",target:"robb-stark",label:"mãe e filho",explanation:"Robb é filho de Catelyn."},
  {id:"r8",source:"catelyn-stark",target:"sansa-stark",label:"mãe e filha",explanation:"Sansa é filha de Catelyn."},
  {id:"r9",source:"catelyn-stark",target:"arya-stark",label:"mãe e filha",explanation:"Arya é filha de Catelyn."},
  {id:"r10",source:"catelyn-stark",target:"bran-stark",label:"mãe e filho",explanation:"Bran é filho de Catelyn."},
  {id:"r11",source:"stark",target:"winterfell",label:"sede",explanation:"Winterfell é a sede da Casa Stark."},
  {id:"r12",source:"stark",target:"the-north",label:"associada a",explanation:"A Casa Stark está associada ao Norte."},
  {id:"r13",source:"lannister",target:"cersei-lannister",label:"membro",explanation:"Cersei pertence à Casa Lannister."},
  {id:"r14",source:"lannister",target:"jaime-lannister",label:"membro",explanation:"Jaime pertence à Casa Lannister."},
  {id:"r15",source:"lannister",target:"tyrion-lannister",label:"membro",explanation:"Tyrion pertence à Casa Lannister."},
  {id:"r16",source:"cersei-lannister",target:"robert-baratheon",label:"casados",explanation:"Cersei é esposa do rei Robert Baratheon."},
  {id:"r17",source:"cersei-lannister",target:"jaime-lannister",label:"irmãos",explanation:"Cersei e Jaime são irmãos."},
  {id:"r18",source:"cersei-lannister",target:"tyrion-lannister",label:"irmãos",explanation:"Cersei e Tyrion são irmãos."},
  {id:"r19",source:"robert-baratheon",target:"baratheon",label:"membro",explanation:"Robert pertence à Casa Baratheon."},
  {id:"r20",source:"jon-snow",target:"night-watch",label:"membro",explanation:"Jon está ligado à Patrulha da Noite."},
  {id:"r21",source:"night-watch",target:"the-wall",label:"guarda",explanation:"A Patrulha da Noite guarda a Muralha."},
  {id:"r22",source:"the-wall",target:"the-north",label:"localização",explanation:"A Muralha fica no extremo norte de Westeros."},
  {id:"r23",source:"robert-baratheon",target:"iron-throne",label:"ocupa",explanation:"Robert é o rei que ocupa o Trono de Ferro no início da série."},
  {id:"r24",source:"iron-throne",target:"kings-landing",label:"em",explanation:"O Trono de Ferro está em Porto Real."},
  {id:"r25",source:"daenerys-targaryen",target:"targaryen",label:"membro",explanation:"Daenerys pertence à Casa Targaryen."},
  {id:"r26",source:"targaryen",target:"essos",label:"atualmente em",explanation:"Os membros apresentados no início vivem exilados em Essos."},
  {id:"r27",source:"tyrion-lannister",target:"cersei-lannister",label:"irmãos",explanation:"Tyrion e Cersei são irmãos."},
  {id:"r28",source:"jaime-lannister",target:"tyrion-lannister",label:"irmãos",explanation:"Jaime e Tyrion são irmãos."}
];

export function getEntity(id){ return ENTITIES.find(e=>e.id===id) || null; }
