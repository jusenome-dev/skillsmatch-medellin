import { Component } from '@angular/core';

interface ImpactCard {
  title: string;
  text: string;
}

interface Indicator {
  name: string;
  description: string;
}

interface TimeImpact {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.scss']
})
export class ImpactComponent {
  youthImpact: ImpactCard[] = [
    {
      title: 'Mayor claridad sobre el perfil laboral',
      text: 'Los usuarios pueden entender qué habilidades tienen y cómo se relacionan con los perfiles que demanda el mercado.'
    },
    {
      title: 'Menos búsqueda desordenada',
      text: 'La plataforma reduce la cantidad de vacantes irrelevantes y ayuda a priorizar oportunidades compatibles.'
    },
    {
      title: 'Rutas de formación más pertinentes',
      text: 'Los jóvenes reciben recomendaciones concretas para cerrar brechas y mejorar su perfil.'
    },
    {
      title: 'Mayor confianza al postularse',
      text: 'El usuario aplica con más información, mejor preparación y mayor claridad sobre sus fortalezas.'
    },
    {
      title: 'Mejor acceso a entrevistas',
      text: 'Al aumentar la compatibilidad entre perfil y vacante, se incrementa la probabilidad de avanzar en procesos de selección.'
    }
  ];

  companyImpact: ImpactCard[] = [
    {
      title: 'Reducción del tiempo de búsqueda',
      text: 'Las empresas pueden filtrar candidatos por habilidades y nivel de compatibilidad.'
    },
    {
      title: 'Mejor calidad de preselección',
      text: 'Los candidatos llegan mejor perfilados y con brechas identificadas.'
    },
    {
      title: 'Menor rotación potencial',
      text: 'Al existir mayor alineación entre candidato y vacante, se reduce el riesgo de contrataciones poco ajustadas.'
    },
    {
      title: 'Acceso a talento joven',
      text: 'Las empresas pueden identificar perfiles en formación con potencial de crecimiento.'
    }
  ];

  educationImpact: ImpactCard[] = [
    {
      title: 'Información sobre brechas de habilidades',
      text: 'Las instituciones pueden observar qué competencias demandan las empresas y cuáles faltan en sus egresados.'
    },
    {
      title: 'Ajuste de rutas formativas',
      text: 'La analítica puede orientar cursos, diplomados, microcredenciales o ajustes curriculares.'
    },
    {
      title: 'Seguimiento de egresados',
      text: 'La plataforma puede ayudar a comprender mejor la transición entre formación y empleo.'
    },
    {
      title: 'Mayor pertinencia educativa',
      text: 'La información del mercado puede fortalecer la relación entre programas académicos y necesidades productivas.'
    }
  ];

  cityImpact: ImpactCard[] = [
    {
      title: 'Fortalecimiento del capital humano',
      text: 'Una mejor conexión entre formación y empleo mejora la competitividad de la ciudad.'
    },
    {
      title: 'Inclusión laboral juvenil',
      text: 'La plataforma puede facilitar rutas para jóvenes con poca experiencia o redes laborales débiles.'
    },
    {
      title: 'Información para política pública',
      text: 'Los datos agregados pueden apoyar decisiones sobre empleabilidad, formación y productividad.'
    },
    {
      title: 'Ecosistema más articulado',
      text: 'SkillsMatch puede conectar actores como jóvenes, empresas, universidades, SENA, ITM, Ruta N, Cámara de Comercio y entidades públicas.'
    }
  ];

  indicators: Indicator[] = [
    {
      name: 'Usuarios registrados',
      description: 'Cantidad de jóvenes que crean perfil en la plataforma.'
    },
    {
      name: 'Perfiles diagnosticados',
      description: 'Cantidad de usuarios que completan diagnóstico de habilidades.'
    },
    {
      name: 'Brechas identificadas',
      description: 'Habilidades faltantes más frecuentes frente a la demanda laboral.'
    },
    {
      name: 'Rutas de formación iniciadas',
      description: 'Cantidad de usuarios que siguen recomendaciones de aprendizaje.'
    },
    {
      name: 'Vacantes compatibles',
      description: 'Oportunidades sugeridas con base en nivel de match.'
    },
    {
      name: 'Empresas vinculadas',
      description: 'Organizaciones que publican vacantes o consultan perfiles.'
    },
    {
      name: 'Entrevistas conseguidas',
      description: 'Usuarios que avanzan a procesos de selección.'
    },
    {
      name: 'Tasa de mejora del perfil',
      description: 'Usuarios que aumentan su compatibilidad después de completar rutas de formación.'
    }
  ];

  timeImpact: TimeImpact[] = [
    {
      title: 'Corto plazo',
      items: [
        'Validar el prototipo con jóvenes.',
        'Identificar habilidades más demandadas.',
        'Medir interés de empresas e instituciones.',
        'Ajustar la experiencia de usuario.'
      ]
    },
    {
      title: 'Mediano plazo',
      items: [
        'Vincular empresas aliadas.',
        'Integrar rutas de formación reales.',
        'Mejorar el motor de recomendación.',
        'Desplegar pilotos con instituciones educativas.'
      ]
    },
    {
      title: 'Largo plazo',
      items: [
        'Convertirse en una plataforma de referencia local.',
        'Generar datos útiles para el ecosistema de empleo.',
        'Apoyar decisiones de formación y política pública.',
        'Escalar a otros municipios del Valle de Aburrá.'
      ]
    }
  ];
}
