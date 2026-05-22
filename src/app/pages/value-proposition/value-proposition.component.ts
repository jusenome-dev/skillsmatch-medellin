import { Component } from '@angular/core';
import { customerProfileBlocks, valueFitCards, valueMapBlocks, FitCard, ValueBlock } from '../../data/site-content';

@Component({
  selector: 'app-value-proposition',
  templateUrl: './value-proposition.component.html',
  styleUrls: ['./value-proposition.component.scss']
})
export class ValuePropositionComponent {
  customerBlocks: ValueBlock[] = customerProfileBlocks;
  valueBlocks: ValueBlock[] = valueMapBlocks;
  fitCards: FitCard[] = valueFitCards;

  valueCanvasBlocks: ValueBlock[] = [
    {
      title: 'Productos y servicios',
      items: [
        'Perfilamiento de habilidades.',
        'Diagnóstico de brechas.',
        'Matching con vacantes.',
        'Rutas de formación.',
        'Dashboard de progreso.',
        'Panel para empresas.',
        'Analítica institucional.'
      ]
    },
    {
      title: 'Aliviadores de dolor',
      items: [
        'Explica qué habilidades le faltan.',
        'Filtra vacantes compatibles.',
        'Reduce la búsqueda desordenada.',
        'Recomienda cursos pertinentes.',
        'Mejora la preparación antes de aplicar.',
        'Disminuye la frustración por falta de retroalimentación.'
      ]
    },
    {
      title: 'Generadores de ganancia',
      items: [
        'Claridad sobre su perfil laboral.',
        'Ruta concreta de aprendizaje.',
        'Más confianza para postularse.',
        'Mayor compatibilidad con vacantes.',
        'Progreso medible.',
        'Mejor conexión con empresas.'
      ]
    }
  ];

  customerCanvasBlocks: ValueBlock[] = [
    {
      title: 'Tareas del cliente',
      items: [
        'Buscar su primer empleo formal.',
        'Entender qué exige el mercado.',
        'Mejorar su hoja de vida.',
        'Elegir formación útil.',
        'Aplicar a vacantes compatibles.',
        'Demostrar sus competencias.'
      ]
    },
    {
      title: 'Dolores',
      items: [
        'No sabe qué habilidades le faltan.',
        'Aplica sin recibir respuesta.',
        'Las vacantes piden experiencia.',
        'No sabe qué curso priorizar.',
        'Pierde tiempo en ofertas poco compatibles.',
        'Se siente desorientada.'
      ]
    },
    {
      title: 'Ganancias',
      items: [
        'Tener claridad.',
        'Encontrar oportunidades realistas.',
        'Recibir recomendaciones personalizadas.',
        'Acceder a entrevistas.',
        'Mejorar su perfil.',
        'Sentir avance y control.'
      ]
    }
  ];
}
