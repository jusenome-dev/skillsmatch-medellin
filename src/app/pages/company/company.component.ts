import { Component } from '@angular/core';

interface DetailCard {
  title: string;
  text: string;
}

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  pillars: DetailCard[] = [
    {
      title: 'Misión',
      text: 'Ayudar a jóvenes, estudiantes y egresados de Medellín a comprender sus habilidades, cerrar brechas de formación y conectarse con oportunidades laborales más pertinentes.'
    },
    {
      title: 'Visión',
      text: 'Ser una plataforma referente en Medellín para la conexión entre talento joven, formación pertinente y mercado laboral, aportando valor a personas, empresas, instituciones educativas y actores públicos.'
    },
    {
      title: 'Propósito',
      text: 'Convertir información dispersa sobre empleo, habilidades y formación en rutas claras para que los jóvenes tomen mejores decisiones y las empresas encuentren talento más compatible.'
    }
  ];

  principles: DetailCard[] = [
    {
      title: 'Centrado en el usuario',
      text: 'La plataforma parte del recorrido real de jóvenes como Camila, que necesitan orientación clara para entrar al mercado laboral.'
    },
    {
      title: 'Basado en habilidades',
      text: 'El matching se construye alrededor de competencias reales, no únicamente de cargos, títulos o palabras clave.'
    },
    {
      title: 'Orientado por datos',
      text: 'La solución busca usar información sobre vacantes, habilidades y formación para generar recomendaciones más pertinentes.'
    },
    {
      title: 'Con impacto social',
      text: 'El objetivo es mejorar la empleabilidad juvenil y aportar al desarrollo del capital humano de Medellín.'
    },
    {
      title: 'Escalable',
      text: 'El modelo puede iniciar como prototipo local y evolucionar hacia una plataforma con más instituciones, empresas y usuarios.'
    }
  ];

  allies: string[] = [
    'ITM',
    'SENA',
    'Instituciones de educación superior',
    'Empresas del sector productivo',
    'Ruta N',
    'Cámara de Comercio de Medellín para Antioquia',
    'Servicio Público de Empleo',
    'Alcaldía de Medellín',
    'Plataformas de formación en línea',
    'Agencias de cooperación'
  ];
}
