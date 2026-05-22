import { Component } from '@angular/core';

interface TraceStep {
  week: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-traceability',
  templateUrl: './traceability.component.html',
  styleUrls: ['./traceability.component.scss']
})
export class TraceabilityComponent {
  steps: TraceStep[] = [
    {
      week: 'Semana 10',
      title: 'Página web inicial y presentación del proyecto',
      description: 'Se inició la construcción del sitio web como maqueta de presentación del emprendimiento.'
    },
    {
      week: 'Semana 11',
      title: 'Mapa de empatía y comprensión del usuario',
      description: 'Se analizaron necesidades, dolores, motivaciones y contexto de la persona afectada por el problema.'
    },
    {
      week: 'Semana 12',
      title: 'Definición de oportunidad y rastreo documental',
      description: 'Se seleccionó el problema de ciudad y se revisaron soluciones existentes en el estado del arte.'
    },
    {
      week: 'Semana 13',
      title: 'Journey Mapping y modelo de negocio',
      description: 'Se construyó el recorrido del usuario y se empezó a estructurar el modelo de negocio.'
    },
    {
      week: 'Semana 14',
      title: 'Propuesta de valor y prototipo',
      description: 'Se conectaron los dolores del cliente con los servicios de la solución y se planteó un prototipo conceptual.'
    },
    {
      week: 'Semana 15',
      title: 'Entrega web',
      description:
        'Se consolida la información en una página web con problema, soluciones existentes, servicios, impacto y modelo de negocio.'
    }
  ];
}
