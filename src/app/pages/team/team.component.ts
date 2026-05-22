import { Component } from '@angular/core';

interface DetailCard {
  title: string;
  text: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  responsibilities: string[] = [
    'Investigación del problema de ciudad.',
    'Análisis de la oportunidad.',
    'Revisión de soluciones existentes.',
    'Construcción del buyer persona.',
    'Diseño del journey map.',
    'Construcción de la propuesta de valor.',
    'Diseño del modelo de negocio.',
    'Desarrollo del sitio web y prototipo conceptual.'
  ];

  competencies: DetailCard[] = [
    {
      title: 'Desarrollo de software',
      text: 'Diseño y construcción de una aplicación web para presentar la propuesta tecnológica.'
    },
    {
      title: 'Análisis de datos y problemas',
      text: 'Lectura de cifras, documentos y referentes para entender la brecha entre formación y empleo.'
    },
    {
      title: 'Diseño de solución',
      text: 'Construcción de propuesta de valor, servicios, modelo de negocio y prototipo.'
    },
    {
      title: 'Visión emprendedora',
      text: 'Enfoque en sostenibilidad, impacto social y posible monetización del proyecto.'
    }
  ];

  links = [
    { label: 'LinkedIn profesional', url: '#' }
  ];

  photoMissing = false;
}
