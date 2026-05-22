export interface NavItem {
  label: string;
  path: string;
}

export interface CardItem {
  title: string;
  text: string;
  badge?: string;
}

export interface ProblemDataCard {
  title: string;
  text: string;
  source?: string;
}

export interface ReferenceCard {
  organization: string;
  document: string;
  contribution: string;
  learning: string;
  source: string;
}

export interface JourneyMapStep {
  stage: string;
  action: string;
  feeling: string;
  pain: string;
  opportunity: string;
  emotionLevel?: number;
}

export interface ValueBlock {
  title: string;
  items: string[];
}

export interface FitCard {
  pain: string;
  response: string;
}

export interface ProductService {
  name: string;
  description: string;
  value: string;
}

export interface ServicePlan {
  name: string;
  audience: string;
  items: string[];
}

export interface BusinessCanvasBlock {
  title: string;
  items: string[];
}

export const navItems: NavItem[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Equipo', path: '/equipo' },
  { label: 'Empresa', path: '/sobre-la-empresa' },
  { label: 'Oportunidad', path: '/oportunidad' },
  { label: 'Soluciones', path: '/soluciones-existentes' },
  { label: 'Cliente', path: '/cliente-journey-map' },
  { label: 'Valor', path: '/propuesta-de-valor' },
  { label: 'Servicios', path: '/productos-servicios' },
  { label: 'Canvas', path: '/modelo-de-negocio' },
  { label: 'Impacto', path: '/impacto' },
  { label: 'Trazabilidad', path: '/trazabilidad' },
  { label: 'Prototipo', path: '/prototipo' },
  { label: 'Contacto', path: '/contacto' }
];

export const projectSummary = {
  name: 'SkillsMatch Medellín',
  tagline: 'Conectamos talento, formación y oportunidades laborales reales.',
  description:
    'SkillsMatch Medellín es una solución tecnológica de base académica y empresarial que busca reducir la brecha entre la formación de jóvenes, estudiantes y egresados, y las habilidades que realmente exige el mercado laboral en Medellín.',
  extendedDescription:
    'La plataforma propone perfilar habilidades, identificar brechas de formación, recomendar rutas de aprendizaje y conectar a los usuarios con oportunidades laborales acordes a su perfil.'
};

export const homePillars: CardItem[] = [
  {
    title: 'Diagnóstico de habilidades',
    text: 'Identificar qué sabe hacer el usuario y qué tan alineado está con los perfiles ocupacionales del mercado.',
    badge: '1'
  },
  {
    title: 'Rutas de formación',
    text: 'Recomendar cursos, microcredenciales o rutas de aprendizaje para cerrar brechas específicas.',
    badge: '2'
  },
  {
    title: 'Matching con oportunidades',
    text: 'Conectar al usuario con vacantes, prácticas o proyectos acordes con sus habilidades reales.',
    badge: '3'
  }
];

export const teamMembers: CardItem[] = [
  {
    title: 'Dirección de producto',
    text: 'Define el problema, prioriza funcionalidades y valida que la solución entregue valor a estudiantes, egresados e instituciones.',
    badge: 'Producto'
  },
  {
    title: 'Diseño e investigación',
    text: 'Construye entrevistas, mapas de experiencia y prototipos centrados en las necesidades reales del usuario.',
    badge: 'UX'
  },
  {
    title: 'Tecnología y datos',
    text: 'Estructura el perfilamiento de habilidades, el diagnóstico de brechas y la lógica de recomendación.',
    badge: 'Tech'
  },
  {
    title: 'Alianzas y mercado',
    text: 'Conecta instituciones educativas, empresas y programas de empleabilidad del ecosistema de Medellín.',
    badge: 'Negocio'
  }
];

export const companyPillars: CardItem[] = [
  {
    title: 'Propósito',
    text: 'Ayudar a que el talento joven tome decisiones de formación con señales reales del mercado laboral.',
    badge: 'Misión'
  },
  {
    title: 'Visión',
    text: 'Ser una plataforma de referencia para orientar trayectorias de aprendizaje y empleabilidad en Medellín.',
    badge: 'Futuro'
  },
  {
    title: 'Principios',
    text: 'Claridad, inclusión, protección de datos, aprendizaje continuo y colaboración con el ecosistema local.',
    badge: 'Valores'
  }
];

export const opportunityDataCards: ProblemDataCard[] = [
  {
    title: 'Jóvenes sin competencias mínimas',
    text: 'Uno de cada tres estudiantes se gradúa sin alcanzar competencias mínimas en lectura.',
    source: 'Medellín Cómo Vamos'
  },
  {
    title: 'Vacantes sin candidatos idóneos',
    text: 'En 2024, de cerca de 2 millones de puestos ofertados en el Área Metropolitana, solo el 40% encontró candidatos idóneos.',
    source: 'Medellín Cómo Vamos'
  },
  {
    title: 'Retos en matrícula técnica y tecnológica',
    text: 'La matrícula en programas técnicos y tecnológicos enfrenta retos de permanencia, pertinencia y conexión con las demandas del mercado.'
  },
  {
    title: 'Empresas con dificultad para encontrar talento',
    text: 'Muchas empresas reportan dificultades para encontrar personas con habilidades específicas, especialmente digitales, técnicas y socioemocionales.'
  }
];

export const affectedActors: CardItem[] = [
  {
    title: 'Jóvenes y egresados',
    text: 'Enfrentan incertidumbre, baja retroalimentación y dificultad para demostrar sus capacidades.',
    badge: 'Talento'
  },
  {
    title: 'Empresas',
    text: 'Invierten tiempo en procesos de selección con bajo nivel de compatibilidad.',
    badge: 'Contratación'
  },
  {
    title: 'Instituciones educativas',
    text: 'Necesitan información más clara sobre las habilidades que demanda el mercado.',
    badge: 'Formación'
  },
  {
    title: 'Ciudad y ecosistema productivo',
    text: 'La desconexión entre talento y empleo afecta productividad, innovación e inclusión.',
    badge: 'Medellín'
  }
];

export const opportunityCauses: string[] = [
  'Falta de orientación laboral.',
  'Información dispersa sobre vacantes y habilidades.',
  'Formación desconectada de la demanda real.',
  'Poca retroalimentación al buscar empleo.',
  'Dificultad para identificar brechas de habilidades.',
  'Uso de plataformas de empleo que priorizan cargos y palabras clave, pero no habilidades reales.'
];

export const opportunityCards: CardItem[] = [
  {
    title: 'Brecha de habilidades',
    text: 'Muchos jóvenes no saben qué competencias concretas necesitan fortalecer para aplicar a vacantes de entrada.',
    badge: 'Dolor'
  },
  {
    title: 'Información fragmentada',
    text: 'Las rutas de formación, cursos y ofertas laborales suelen estar dispersas en múltiples plataformas.',
    badge: 'Fricción'
  },
  {
    title: 'Orientación limitada',
    text: 'Instituciones y estudiantes requieren herramientas que traduzcan datos de mercado en decisiones accionables.',
    badge: 'Necesidad'
  }
];

export const existingSolutions: ReferenceCard[] = [
  {
    organization: 'OIT / AUDA-NEPAD',
    document: 'Strengthening Skills Anticipation and Matching in African Union Member States: A Guidance Note',
    contribution: 'Marco para anticipar habilidades, fortalecer sistemas de información laboral y mejorar el emparejamiento entre formación y empleo.',
    learning: 'La plataforma debe apoyarse en datos, análisis de demanda y coordinación entre formación, empresas y gobierno.',
    source: 'https://doi.org/10.54394/CVZV5735'
  },
  {
    organization: 'Enabel Palestina',
    document: 'The Development of AI-Driven Job Matching Platform',
    contribution: 'Referente técnico de una plataforma de job matching con inteligencia artificial.',
    learning: 'Incluir perfilamiento de usuarios, análisis de hojas de vida, recomendación de vacantes, ranking de candidatos y analítica laboral.',
    source: 'Documento técnico de términos de referencia, referencia PSE21002-10064.'
  },
  {
    organization: 'PYEI Sudáfrica',
    document: 'Enhancing Youth Employment through Demand-Led Skilling in South Africa',
    contribution: 'Modelo de formación orientada por demanda para mejorar la transición de jóvenes hacia oportunidades reales.',
    learning: 'Recomendar rutas de formación según sectores y habilidades demandadas.',
    source: 'Presidential Youth Employment Intervention.'
  },
  {
    organization: 'Estudio sobre plataformas móviles de job matching en Malasia',
    document: 'Evaluating on Mismatches and Inaccurate Recommendations of Job Matching Platform',
    contribution: 'Identifica errores frecuentes en plataformas de empleo, como recomendaciones inexactas, sobrecarga de información y desajuste entre oferta y demanda.',
    learning: 'Evitar una bolsa de empleo tradicional y priorizar matching semántico, filtros inteligentes y recomendaciones pertinentes.',
    source: 'https://dx.doi.org/10.47772/IJRISS.2025.923MIC3ST250021'
  },
  {
    organization: 'YIEDIE Ghana',
    document: 'Barriers and Solutions to Youth Employment in the Ghanaian Construction Sector',
    contribution: 'Caso real de intervención con formación, mentoría, plataforma online/SMS de job matching y resultados medibles en empleabilidad juvenil.',
    learning: 'Combinar tecnología con acompañamiento, certificación, alianzas y seguimiento de resultados.',
    source: 'Global Communities / Youth Forward / Mastercard Foundation.'
  }
];

export const existingSolutionsLearnings: string[] = [
  'El matching debe basarse en habilidades, no solo en cargos o palabras clave.',
  'La plataforma debe identificar brechas y recomendar formación.',
  'Es importante integrar empresas, instituciones educativas y actores públicos.',
  'La tecnología debe reducir la sobrecarga de información y entregar recomendaciones útiles.',
  'El acompañamiento y la trazabilidad aumentan la confianza del usuario y de las empresas.'
];

export const userPersona = {
  name: 'Camila Restrepo',
  age: '23 años',
  location: 'Robledo, Medellín',
  profile: 'Tecnóloga recién egresada en desarrollo de software',
  currentSituation: 'Busca su primer empleo formal en tecnología',
  devices: 'Celular Android y computador portátil básico',
  channels: 'LinkedIn, Computrabajo, WhatsApp, correo electrónico e Instagram',
  description:
    'Camila vive en Robledo con su mamá y su hermano menor. Se graduó como tecnóloga y quiere trabajar en el sector tecnológico, pero siente que muchas vacantes piden demasiados requisitos para alguien que apenas está empezando. Revisa ofertas en varias plataformas, aplica a vacantes y pocas veces recibe respuesta. Cuando la rechazan, no sabe si el problema fue su hoja de vida, su falta de experiencia, sus habilidades técnicas o una mala selección de ofertas.'
};

export const personaNeeds: string[] = [
  'Saber qué habilidades tiene realmente.',
  'Identificar qué habilidades le faltan.',
  'Encontrar ofertas laborales acordes con su perfil.',
  'Recibir recomendaciones de formación concretas.',
  'Mejorar su hoja de vida y perfil profesional.'
];

export const personaFrustrations: string[] = [
  'Aplica a muchas vacantes y no recibe respuesta.',
  'No sabe qué cursos priorizar.',
  'Las ofertas piden experiencia que no tiene.',
  'Encuentra demasiada información dispersa.',
  'Siente que estudió, pero no sabe cómo demostrar sus capacidades.'
];

export const personaMotivations: string[] = [
  'Conseguir su primer empleo formal.',
  'Mejorar sus ingresos.',
  'Crecer profesionalmente.',
  'Sentirse segura al aplicar a vacantes.',
  'Tener una ruta clara para avanzar.'
];

export const personaGoals: string[] = [
  'Identificar sus brechas de habilidades.',
  'Aplicar a oportunidades más compatibles.',
  'Fortalecer su perfil profesional.',
  'Acceder a entrevistas laborales.',
  'Construir una trayectoria laboral en tecnología.'
];

export const journeySteps: JourneyMapStep[] = [
  {
    stage: 'Reconoce la necesidad',
    action: 'Termina sus estudios y decide buscar empleo.',
    feeling: 'Incertidumbre',
    pain: 'No sabe por dónde empezar.',
    opportunity: 'Diagnóstico inicial de perfil y habilidades.',
    emotionLevel: 24
  },
  {
    stage: 'Busca vacantes',
    action: 'Revisa LinkedIn, portales de empleo y grupos de WhatsApp.',
    feeling: 'Confusión',
    pain: 'Ofertas dispersas.',
    opportunity: 'Filtros por habilidades.',
    emotionLevel: 22
  },
  {
    stage: 'Aplica sin claridad',
    action: 'Envía hojas de vida a varias ofertas.',
    feeling: 'Ansiedad',
    pain: 'No sabe si cumple requisitos.',
    opportunity: 'Porcentaje de compatibilidad.',
    emotionLevel: 20
  },
  {
    stage: 'Recibe rechazo o silencio',
    action: 'Espera respuestas que no llegan.',
    feeling: 'Frustración',
    pain: 'No recibe retroalimentación.',
    opportunity: 'Explicación de brechas.',
    emotionLevel: 12
  },
  {
    stage: 'Busca formación',
    action: 'Explora cursos gratuitos y pagos.',
    feeling: 'Duda',
    pain: 'No sabe qué curso priorizar.',
    opportunity: 'Rutas recomendadas.',
    emotionLevel: 50
  },
  {
    stage: 'Usa SkillsMatch',
    action: 'Registra su perfil, habilidades e intereses.',
    feeling: 'Claridad',
    pain: 'Necesita una guía personalizada.',
    opportunity: 'Perfilamiento y matching.',
    emotionLevel: 82
  },
  {
    stage: 'Mejora su perfil',
    action: 'Toma cursos recomendados, ajusta su hoja de vida y aplica mejor.',
    feeling: 'Motivación',
    pain: 'Necesita seguimiento de su progreso.',
    opportunity: 'Dashboard de avance.',
    emotionLevel: 88
  },
  {
    stage: 'Accede a mejores oportunidades',
    action: 'Recibe vacantes más compatibles y logra entrevistas.',
    feeling: 'Confianza',
    pain: 'Necesita sostener su proceso.',
    opportunity: 'Conexión continua con empresas.',
    emotionLevel: 92
  }
];

export const customerProfileBlocks: ValueBlock[] = [
  {
    title: 'Tareas del cliente',
    items: [
      'Buscar su primer empleo formal.',
      'Entender qué habilidades exige el mercado laboral.',
      'Mejorar su hoja de vida.',
      'Encontrar cursos útiles y pertinentes.',
      'Aplicar a vacantes acordes con su perfil.',
      'Demostrar sus competencias aunque tenga poca experiencia.'
    ]
  },
  {
    title: 'Dolores',
    items: [
      'No sabe qué habilidades le faltan.',
      'Recibe muchas ofertas irrelevantes.',
      'Las vacantes piden experiencia que no tiene.',
      'No recibe retroalimentación al ser rechazada.',
      'Pierde tiempo aplicando a trabajos para los que no encaja.',
      'No sabe qué cursos priorizar.',
      'Siente frustración y desmotivación.'
    ]
  },
  {
    title: 'Ganancias esperadas',
    items: [
      'Tener claridad sobre su perfil laboral.',
      'Encontrar oportunidades más realistas.',
      'Recibir una ruta de formación concreta.',
      'Mejorar sus posibilidades de entrevista.',
      'Sentir avance y control sobre su proceso.',
      'Acceder a recomendaciones personalizadas.'
    ]
  }
];

export const valueMapBlocks: ValueBlock[] = [
  {
    title: 'Productos y servicios',
    items: [
      'Plataforma web de perfilamiento de habilidades.',
      'Motor de matching entre habilidades y vacantes.',
      'Diagnóstico de brechas de habilidades.',
      'Recomendador de rutas de formación.',
      'Constructor o mejorador de hoja de vida.',
      'Dashboard de progreso del usuario.',
      'Panel para empresas e instituciones.'
    ]
  },
  {
    title: 'Aliviadores de dolor',
    items: [
      'Reduce la búsqueda desordenada de empleo.',
      'Filtra vacantes según compatibilidad.',
      'Explica qué habilidades faltan.',
      'Evita aplicar a ofertas poco realistas.',
      'Recomienda formación según metas laborales.',
      'Mejora la preparación del usuario antes de postularse.'
    ]
  },
  {
    title: 'Generadores de ganancia',
    items: [
      'Mayor claridad sobre el camino laboral.',
      'Más confianza para aplicar.',
      'Mejor conexión con empresas.',
      'Formación más pertinente.',
      'Perfil profesional más visible.',
      'Progreso medible en habilidades.'
    ]
  }
];

export const valueFitCards: FitCard[] = [
  {
    pain: 'No sé qué me falta',
    response: 'Diagnóstico de brechas de habilidades'
  },
  {
    pain: 'Aplico y no recibo respuesta',
    response: 'Matching con vacantes compatibles y mejora del perfil'
  },
  {
    pain: 'No sé qué estudiar después',
    response: 'Rutas de formación según meta laboral'
  }
];

export const products: ProductService[] = [
  {
    name: 'Perfilamiento de habilidades',
    description:
      'El usuario registra su formación, experiencia, intereses y conocimientos. La plataforma genera un perfil inicial de habilidades técnicas, blandas y digitales.',
    value:
      'Permite que el joven entienda qué sabe hacer y cómo puede presentar mejor su perfil ante el mercado laboral.'
  },
  {
    name: 'Diagnóstico de brechas',
    description:
      'SkillsMatch compara el perfil del usuario con vacantes reales o perfiles ocupacionales del mercado y muestra qué habilidades tiene, cuáles le faltan y cuáles debe priorizar.',
    value: 'Convierte la incertidumbre en una ruta clara de mejora.'
  },
  {
    name: 'Matching con oportunidades',
    description:
      'La plataforma recomienda vacantes, prácticas, proyectos, convocatorias o empleos de entrada con base en la compatibilidad entre habilidades del usuario y requerimientos del mercado.',
    value: 'Reduce el tiempo perdido aplicando a ofertas poco compatibles.'
  },
  {
    name: 'Rutas de formación recomendadas',
    description:
      'El sistema sugiere cursos, microcredenciales o rutas de aprendizaje de acuerdo con la meta laboral del usuario.',
    value: 'Ayuda a priorizar formación pertinente y conectada con oportunidades reales.'
  },
  {
    name: 'Panel para empresas',
    description:
      'Las empresas pueden publicar oportunidades, buscar candidatos por habilidades y consultar perfiles con mayor compatibilidad.',
    value: 'Mejora la eficiencia de los procesos de selección y reduce la brecha entre vacante y candidato.'
  },
  {
    name: 'Analítica para instituciones',
    description:
      'Instituciones educativas o entidades públicas pueden acceder a reportes agregados sobre brechas de habilidades, demanda laboral y tendencias de formación.',
    value: 'Aporta información útil para ajustar programas formativos y decisiones institucionales.'
  }
];

export const servicePlans: ServicePlan[] = [
  {
    name: 'Plan gratuito para jóvenes',
    audience: 'Acceso base',
    items: [
      'Registro de perfil.',
      'Diagnóstico básico.',
      'Recomendaciones limitadas.',
      'Acceso a vacantes compatibles.'
    ]
  },
  {
    name: 'Plan Pro para usuarios',
    audience: 'Orientación avanzada',
    items: [
      'Diagnóstico avanzado.',
      'Revisión de hoja de vida.',
      'Rutas personalizadas.',
      'Simulación de entrevista.',
      'Alertas inteligentes.'
    ]
  },
  {
    name: 'Plan empresas',
    audience: 'Selección por habilidades',
    items: [
      'Publicación de vacantes.',
      'Filtro por habilidades.',
      'Ranking de candidatos.',
      'Reportes de compatibilidad.',
      'Acceso a perfiles preseleccionados.'
    ]
  },
  {
    name: 'Plan instituciones',
    audience: 'Analítica agregada',
    items: [
      'Dashboard de brechas.',
      'Reportes por programa o área.',
      'Integración con rutas de formación.',
      'Analítica agregada para toma de decisiones.'
    ]
  }
];

export const businessModel: BusinessCanvasBlock[] = [
  {
    title: 'Segmentos de clientes',
    items: [
      'Jóvenes estudiantes y egresados.',
      'Personas en búsqueda de primer empleo.',
      'Instituciones de educación superior.',
      'Instituciones técnicas y tecnológicas.',
      'Empresas que buscan talento joven.',
      'Entidades públicas de empleo y formación.'
    ]
  },
  {
    title: 'Propuesta de valor',
    items: [
      'Para jóvenes: claridad sobre habilidades, brechas y oportunidades.',
      'Para empresas: candidatos mejor filtrados y con mayor compatibilidad.',
      'Para instituciones: información sobre brechas entre formación y mercado.',
      'Para ciudad: mejor conexión entre talento, formación y productividad.'
    ]
  },
  {
    title: 'Canales',
    items: [
      'Plataforma web.',
      'Aplicación móvil futura.',
      'LinkedIn.',
      'Ferias de empleo.',
      'Alianzas con universidades e instituciones técnicas.',
      'Convenios con empresas.',
      'Programas públicos de empleabilidad.'
    ]
  },
  {
    title: 'Relación con clientes',
    items: [
      'Autoservicio digital.',
      'Recomendaciones personalizadas.',
      'Acompañamiento virtual.',
      'Comunidad de usuarios.',
      'Soporte para empresas e instituciones.',
      'Seguimiento del progreso.'
    ]
  },
  {
    title: 'Fuentes de ingreso',
    items: [
      'Plan premium para usuarios.',
      'Suscripción mensual para empresas.',
      'Licenciamiento SaaS para instituciones educativas.',
      'Reportes de analítica laboral.',
      'Comisiones por formación o microcredenciales.',
      'Servicios de consultoría en brechas de habilidades.',
      'Convocatorias o financiación pública para empleabilidad.'
    ]
  },
  {
    title: 'Recursos clave',
    items: [
      'Plataforma tecnológica.',
      'Motor de matching.',
      'Base de datos de habilidades.',
      'Información de vacantes y perfiles ocupacionales.',
      'Equipo de desarrollo.',
      'Equipo de análisis de datos.',
      'Alianzas con empresas e instituciones.',
      'Marca y comunidad.'
    ]
  },
  {
    title: 'Actividades clave',
    items: [
      'Desarrollo y mantenimiento de la plataforma.',
      'Actualización de habilidades demandadas.',
      'Integración con fuentes de empleo y formación.',
      'Diseño de rutas de aprendizaje.',
      'Validación con usuarios.',
      'Gestión de alianzas.',
      'Análisis de datos.',
      'Soporte y acompañamiento.'
    ]
  },
  {
    title: 'Socios clave',
    items: [
      'ITM.',
      'SENA.',
      'Instituciones de educación superior.',
      'Empresas del sector tecnológico y productivo.',
      'Ruta N.',
      'Cámara de Comercio de Medellín para Antioquia.',
      'Servicio Público de Empleo.',
      'Alcaldía de Medellín.',
      'Plataformas de formación en línea.',
      'Agencias de cooperación interesadas en empleo juvenil.'
    ]
  },
  {
    title: 'Estructura de costos',
    items: [
      'Desarrollo de software.',
      'Servicios en la nube.',
      'APIs de inteligencia artificial.',
      'Seguridad y protección de datos.',
      'Marketing digital.',
      'Personal técnico y comercial.',
      'Soporte al usuario.',
      'Investigación de mercado.',
      'Validación del prototipo.'
    ]
  }
];

export const monetizationCards: CardItem[] = [
  {
    title: 'Suscripción para empresas',
    text: 'Empresas pagan por publicar vacantes, buscar talento y acceder a rankings de compatibilidad.',
    badge: 'B2B'
  },
  {
    title: 'Licenciamiento institucional',
    text: 'Instituciones educativas pagan por dashboards de brechas y analítica agregada.',
    badge: 'SaaS'
  },
  {
    title: 'Plan Pro para usuarios',
    text: 'Usuarios pueden pagar por servicios avanzados como revisión de CV, rutas personalizadas y simulación de entrevista.',
    badge: 'Freemium'
  },
  {
    title: 'Analítica laboral',
    text: 'Reportes agregados para entidades públicas, instituciones o aliados estratégicos.',
    badge: 'Datos'
  },
  {
    title: 'Alianzas con formación',
    text: 'Comisiones o convenios con proveedores de cursos y microcredenciales.',
    badge: 'Alianzas'
  },
  {
    title: 'Consultoría',
    text: 'Servicios de análisis de brechas de habilidades para instituciones o empresas.',
    badge: 'Servicios'
  }
];

export const impactCards: CardItem[] = [
  {
    title: 'Talento mejor orientado',
    text: 'Los usuarios entienden qué aprender, por qué aprenderlo y cómo usarlo para postularse.',
    badge: 'Personas'
  },
  {
    title: 'Formación más pertinente',
    text: 'Las instituciones pueden priorizar contenidos según brechas detectadas en su comunidad.',
    badge: 'Educación'
  },
  {
    title: 'Empleabilidad local',
    text: 'La plataforma busca aumentar la conexión entre talento emergente y oportunidades de Medellín.',
    badge: 'Ciudad'
  }
];
