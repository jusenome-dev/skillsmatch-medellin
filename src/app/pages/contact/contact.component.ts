import { Component } from '@angular/core';

interface ContactAudience {
  title: string;
  text: string;
}

interface ContactDetail {
  label: string;
  value: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  audiences: ContactAudience[] = [
    {
      title: 'Empresas',
      text: 'Organizaciones interesadas en encontrar talento joven con habilidades más alineadas a sus vacantes.'
    },
    {
      title: 'Instituciones educativas',
      text: 'Universidades, instituciones técnicas o tecnológicas interesadas en analizar brechas de habilidades y fortalecer rutas de formación.'
    },
    {
      title: 'Aliados del ecosistema',
      text: 'Entidades públicas, privadas o de cooperación que trabajen en empleabilidad juvenil, formación o transformación digital.'
    },
    {
      title: 'Jóvenes y egresados',
      text: 'Personas interesadas en validar el prototipo, compartir su experiencia o aportar al diseño de la solución.'
    }
  ];

  contactDetails: ContactDetail[] = [
    { label: 'Correo', value: 'correo@ejemplo.com' },
    { label: 'LinkedIn', value: 'enlace pendiente' },
    { label: 'Ubicación', value: 'Medellín, Colombia' },
    { label: 'Proyecto académico', value: 'Emprendimiento de Base Tecnológica' }
  ];
}
