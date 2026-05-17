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
    'Investigación del problema y análisis de oportunidad.',
    'Revisión de soluciones existentes y estado del arte.',
    'Diseño de la propuesta de valor.',
    'Construcción del modelo de negocio.',
    'Diseño del journey map y perfil del usuario.',
    'Desarrollo del prototipo web.',
    'Análisis del impacto esperado.'
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
    { label: 'LinkedIn', url: '#' },
    { label: 'Hoja de vida', url: '#' },
    { label: 'Correo electrónico', url: 'mailto:correo@ejemplo.com' },
    { label: 'GitHub o portafolio', url: '#' }
  ];
}
