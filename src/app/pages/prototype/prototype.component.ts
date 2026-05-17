import { Component } from '@angular/core';

interface PrototypeStep {
  title: string;
  text: string;
}

interface SummaryMetric {
  label: string;
  value: string;
}

interface SkillGap {
  name: string;
  current: number;
  recommended: number;
}

interface CompatibleVacancy {
  role: string;
  company: string;
  match: number;
  matches: string[];
  gaps: string[];
}

interface TrainingRoute {
  name: string;
  priority: string;
  objective: string;
}

interface RankedCandidate {
  name: string;
  match: number;
}

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.scss']
})
export class PrototypeComponent {
  steps: PrototypeStep[] = [
    {
      title: 'Registro del usuario',
      text: 'Camila crea su perfil con datos básicos, formación, intereses y experiencia.'
    },
    {
      title: 'Perfil de habilidades',
      text: 'La plataforma identifica habilidades técnicas, digitales y socioemocionales.'
    },
    {
      title: 'Diagnóstico de brechas',
      text: 'El sistema compara el perfil de Camila con roles laborales objetivo.'
    },
    {
      title: 'Recomendaciones de formación',
      text: 'Se sugieren cursos o microcredenciales para cerrar brechas específicas.'
    },
    {
      title: 'Matching con oportunidades',
      text: 'La plataforma muestra vacantes compatibles con porcentaje de ajuste.'
    },
    {
      title: 'Dashboard de progreso',
      text: 'Camila puede ver su avance y priorizar acciones para mejorar su empleabilidad.'
    }
  ];

  user = {
    name: 'Camila Restrepo',
    age: '23 años',
    location: 'Robledo, Medellín',
    goal: 'Desarrolladora Frontend Junior',
    level: 'Egresada tecnóloga',
    status: 'Buscando primer empleo formal'
  };

  metrics: SummaryMetric[] = [
    { label: 'Compatibilidad promedio', value: '72%' },
    { label: 'Brechas críticas', value: '3' },
    { label: 'Habilidades fuertes', value: '5' },
    { label: 'Rutas recomendadas', value: '4' },
    { label: 'Vacantes compatibles', value: '6' }
  ];

  skills: string[] = [
    'HTML',
    'CSS',
    'JavaScript básico',
    'Git básico',
    'Trabajo en equipo',
    'Comunicación',
    'Aprendizaje autónomo'
  ];

  gaps: SkillGap[] = [
    { name: 'Angular', current: 45, recommended: 75 },
    { name: 'Consumo de APIs REST', current: 50, recommended: 80 },
    { name: 'Pruebas básicas de frontend', current: 30, recommended: 65 },
    { name: 'Inglés técnico', current: 55, recommended: 70 }
  ];

  vacancies: CompatibleVacancy[] = [
    {
      role: 'Desarrolladora Frontend Junior',
      company: 'Empresa tecnológica local',
      match: 82,
      matches: ['HTML', 'CSS', 'JavaScript', 'Git'],
      gaps: ['Angular', 'pruebas frontend']
    },
    {
      role: 'Practicante de desarrollo web',
      company: 'Startup de servicios digitales',
      match: 78,
      matches: ['HTML', 'CSS', 'comunicación', 'aprendizaje autónomo'],
      gaps: ['consumo de APIs', 'Angular']
    },
    {
      role: 'Auxiliar de soporte tecnológico',
      company: 'Institución educativa',
      match: 69,
      matches: ['comunicación', 'resolución de problemas', 'soporte básico'],
      gaps: ['documentación técnica', 'herramientas de tickets']
    },
    {
      role: 'Asistente de proyectos digitales',
      company: 'Agencia digital',
      match: 64,
      matches: ['trabajo en equipo', 'organización', 'herramientas web'],
      gaps: ['analítica básica', 'gestión ágil']
    }
  ];

  routes: TrainingRoute[] = [
    {
      name: 'Angular para aplicaciones web',
      priority: 'Alta',
      objective: 'Mejorar compatibilidad con vacantes frontend.'
    },
    {
      name: 'Consumo de APIs REST con JavaScript',
      priority: 'Alta',
      objective: 'Fortalecer integración con servicios backend.'
    },
    {
      name: 'Fundamentos de testing frontend',
      priority: 'Media',
      objective: 'Mejorar calidad del código y preparación laboral.'
    },
    {
      name: 'Inglés técnico para desarrollo de software',
      priority: 'Media',
      objective: 'Mejorar lectura de documentación y comunicación técnica.'
    }
  ];

  companyVacancySkills: string[] = ['HTML', 'CSS', 'JavaScript', 'Angular', 'Git', 'Consumo de APIs', 'Comunicación'];

  candidateRanking: RankedCandidate[] = [
    { name: 'Camila Restrepo', match: 82 },
    { name: 'Daniel Gómez', match: 76 },
    { name: 'Laura Pérez', match: 71 }
  ];

  camilaStrengths: string[] = [
    'Buenas bases web.',
    'Buena comunicación.',
    'Alta motivación para aprender.'
  ];

  camilaCompanyGaps: string[] = [
    'Fortalecer Angular.',
    'Mejorar consumo de APIs.',
    'Practicar pruebas frontend.'
  ];

  visualElements: string[] = [
    'Tarjetas de resumen.',
    'Barras de progreso.',
    'Badges de habilidades.',
    'Porcentajes de compatibilidad.',
    'Recomendaciones priorizadas.',
    'Diseño responsive.',
    'Navegación simple.',
    'Colores azul, morado, blanco y gris claro.'
  ];

  videoScript =
    'Camila, una joven recién egresada en Medellín, revisa varias plataformas de empleo desde su celular. Encuentra muchas vacantes, pero no sabe cuáles se ajustan realmente a su perfil. Aplica a varias ofertas y no recibe respuesta. Luego conoce SkillsMatch Medellín, registra sus habilidades, identifica sus brechas y recibe rutas de formación y vacantes compatibles. Al final, Camila aplica mejor preparada y logra acceder a entrevistas laborales.';

  videoPrompt =
    'Crear un video institucional de 70 segundos sobre una solución tecnológica llamada SkillsMatch Medellín. El video debe mostrar el problema de una joven recién egresada en Medellín que busca empleo, aplica a muchas vacantes y no recibe respuesta porque no sabe qué habilidades le faltan. Luego debe presentar una plataforma web que le permite crear su perfil, identificar brechas de habilidades, recibir rutas de formación y encontrar vacantes compatibles. Estilo visual moderno, profesional, urbano, con escenas de Medellín, jóvenes usando computador y celular, dashboard digital, gráficos de habilidades, vacantes compatibles y rutas de aprendizaje. Colores principales: azul, morado y blanco. Tono esperanzador, tecnológico y social. Formato horizontal 16:9, música inspiradora suave y voz en español latino.';
}
