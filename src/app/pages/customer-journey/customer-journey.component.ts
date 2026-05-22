import { Component } from '@angular/core';
import {
  journeySteps,
  JourneyMapStep,
  personaFrustrations,
  personaGoals,
  personaMotivations,
  personaNeeds,
  userPersona
} from '../../data/site-content';

interface PersonaCanvasGroup {
  label: string;
  items: string[];
}

interface PersonaCanvasBlock {
  icon: string;
  title: string;
  items?: string[];
  groups?: PersonaCanvasGroup[];
}

interface JourneyTemplateStep {
  phase: 'Antes' | 'Durante' | 'Después';
  phaseClass: 'antes' | 'durante' | 'despues';
  stage: string;
  doing: string;
  thinking: string;
  touchpoints: string;
  feeling: string;
  emotion: number;
}

@Component({
  selector: 'app-customer-journey',
  templateUrl: './customer-journey.component.html',
  styleUrls: ['./customer-journey.component.scss']
})
export class CustomerJourneyComponent {
  persona = userPersona;
  needs: string[] = personaNeeds;
  frustrations: string[] = personaFrustrations;
  motivations: string[] = personaMotivations;
  goals: string[] = personaGoals;
  steps: JourneyMapStep[] = journeySteps;

  personaCanvasBlocks: PersonaCanvasBlock[] = [
    {
      icon: '01',
      title: 'Datos demográficos',
      items: [
        'Edad: 23 años',
        'Género: Femenino',
        'Ubicación: Robledo, Medellín',
        'Nivel educativo: Tecnóloga recién egresada',
        'Estado familiar: vive con su mamá y su hermano menor',
        'Ingresos: bajo / en búsqueda de estabilidad laboral'
      ]
    },
    {
      icon: '02',
      title: 'Perfil profesional',
      items: [
        'Cargo aspiracional: Desarrolladora Frontend Junior',
        'Nivel: entrada / junior',
        'Industria: tecnología y servicios digitales',
        'Estado: recién egresada, buscando primer empleo formal',
        'Experiencia: proyectos académicos y prácticas básicas'
      ]
    },
    {
      icon: '03',
      title: 'Objetivos',
      groups: [
        {
          label: 'Profesionales',
          items: [
            'Conseguir su primer empleo formal.',
            'Mejorar su perfil técnico.',
            'Acceder a entrevistas laborales.',
            'Construir trayectoria en tecnología.'
          ]
        },
        {
          label: 'Personales',
          items: [
            'Mejorar sus ingresos.',
            'Apoyar económicamente en casa.',
            'Sentirse segura de sus capacidades.',
            'Tener claridad sobre su futuro laboral.'
          ]
        }
      ]
    },
    {
      icon: '04',
      title: 'Dolores y retos',
      items: [
        'No sabe qué habilidades le faltan.',
        'Aplica a muchas vacantes y no recibe respuesta.',
        'Las ofertas piden experiencia que no tiene.',
        'No sabe qué cursos priorizar.',
        'Encuentra información dispersa.',
        'No recibe retroalimentación clara.'
      ]
    },
    {
      icon: '05',
      title: 'Miedos',
      items: [
        'Quedarse desempleada.',
        'Haber estudiado algo que no le abra oportunidades.',
        'Invertir tiempo o dinero en cursos que no sirvan.',
        'No ser suficientemente buena para el mercado laboral.',
        'Ser descartada por falta de experiencia.'
      ]
    },
    {
      icon: '06',
      title: 'Canales e influencias',
      items: [
        'LinkedIn',
        'Computrabajo',
        'WhatsApp',
        'Correo electrónico',
        'Instagram',
        'Recomendaciones de docentes',
        'Amigos y compañeros egresados',
        'Cursos gratuitos y plataformas de formación'
      ]
    },
    {
      icon: '07',
      title: 'Comportamiento de decisión',
      items: [
        'Compara cursos antes de elegir.',
        'Prefiere opciones gratuitas o de bajo costo.',
        'Confía en recomendaciones de personas cercanas.',
        'Necesita ver utilidad práctica antes de pagar.',
        'Tomaría un plan Pro si ve resultados claros en empleabilidad.'
      ]
    }
  ];

  journeyTemplate: JourneyTemplateStep[] = [
    {
      phase: 'Antes',
      phaseClass: 'antes',
      stage: 'Reconoce la necesidad',
      doing: 'Termina sus estudios y decide buscar empleo.',
      thinking: '“Ya me gradué, pero no sé por dónde empezar.”',
      touchpoints: 'Familia, docentes, compañeros.',
      feeling: 'Ilusión e incertidumbre.',
      emotion: 45
    },
    {
      phase: 'Antes',
      phaseClass: 'antes',
      stage: 'Busca vacantes',
      doing: 'Revisa LinkedIn, Computrabajo y grupos de WhatsApp.',
      thinking: '“Hay demasiadas ofertas, pero no sé cuáles son para mí.”',
      touchpoints: 'Portales de empleo, celular, redes.',
      feeling: 'Confusión.',
      emotion: 35
    },
    {
      phase: 'Antes',
      phaseClass: 'antes',
      stage: 'Aplica sin claridad',
      doing: 'Envía hojas de vida a muchas vacantes.',
      thinking: '“Creo que puedo aplicar, aunque no cumpla todo.”',
      touchpoints: 'Hoja de vida, correo, formularios.',
      feeling: 'Ansiedad.',
      emotion: 30
    },
    {
      phase: 'Durante',
      phaseClass: 'durante',
      stage: 'Recibe silencio o rechazo',
      doing: 'Espera respuestas que no llegan.',
      thinking: '“No sé qué hice mal.”',
      touchpoints: 'Correo, notificaciones, reclutadores.',
      feeling: 'Frustración.',
      emotion: 15
    },
    {
      phase: 'Durante',
      phaseClass: 'durante',
      stage: 'Busca formación',
      doing: 'Explora cursos gratuitos y pagos.',
      thinking: '“No sé si debería aprender Angular, inglés o bases de datos.”',
      touchpoints: 'Plataformas de cursos, YouTube, docentes.',
      feeling: 'Duda.',
      emotion: 40
    },
    {
      phase: 'Durante',
      phaseClass: 'durante',
      stage: 'Usa SkillsMatch',
      doing: 'Registra su perfil y habilidades.',
      thinking: '“Ahora entiendo mejor qué tengo y qué me falta.”',
      touchpoints: 'Plataforma SkillsMatch.',
      feeling: 'Claridad.',
      emotion: 70
    },
    {
      phase: 'Después',
      phaseClass: 'despues',
      stage: 'Mejora su perfil',
      doing: 'Sigue rutas de formación y ajusta su hoja de vida.',
      thinking: '“Ya tengo un camino más claro.”',
      touchpoints: 'Cursos, dashboard, recomendaciones.',
      feeling: 'Motivación.',
      emotion: 82
    },
    {
      phase: 'Después',
      phaseClass: 'despues',
      stage: 'Accede a oportunidades',
      doing: 'Aplica a vacantes más compatibles y logra entrevistas.',
      thinking: '“Ahora aplico con más confianza.”',
      touchpoints: 'Empresas, entrevistas, plataforma.',
      feeling: 'Confianza.',
      emotion: 90
    }
  ];

  empathyBlocks = [
    {
      title: '¿Qué piensa y siente?',
      items: [
        'Quiere conseguir empleo, pero duda de si está preparada.',
        'Siente frustración cuando no recibe respuesta.',
        'Quiere demostrar que sí tiene capacidades.'
      ]
    },
    {
      title: '¿Qué ve?',
      items: [
        'Muchas vacantes con requisitos altos.',
        'Cursos dispersos en diferentes plataformas.',
        'Compañeros que ya están trabajando.',
        'Empresas que piden experiencia.'
      ]
    },
    {
      title: '¿Qué oye?',
      items: [
        '“Te falta experiencia”.',
        '“Debes mejorar tu hoja de vida”.',
        '“Aprende inglés y tecnologías nuevas”.',
        '“Aplica a más ofertas”.'
      ]
    },
    {
      title: '¿Qué dice y hace?',
      items: [
        'Revisa portales de empleo.',
        'Envía hojas de vida.',
        'Pregunta por cursos.',
        'Busca recomendaciones en redes y grupos.'
      ]
    },
    {
      title: 'Dolores',
      items: [
        'No sabe qué habilidades le faltan.',
        'No recibe retroalimentación.',
        'Pierde tiempo aplicando a vacantes poco compatibles.',
        'Se siente desorientada.'
      ]
    },
    {
      title: 'Ganancias',
      items: [
        'Tener una ruta clara.',
        'Encontrar vacantes compatibles.',
        'Mejorar su perfil.',
        'Acceder a entrevistas.',
        'Sentirse más segura.'
      ]
    }
  ];
}
