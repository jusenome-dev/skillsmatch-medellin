import { Component } from '@angular/core';
import { BusinessCanvasBlock, CardItem } from '../../data/site-content';

@Component({
  selector: 'app-business-model',
  templateUrl: './business-model.component.html',
  styleUrls: ['./business-model.component.scss']
})
export class BusinessModelComponent {
  canvasBlocks: BusinessCanvasBlock[] = [
    {
      title: 'Socios clave',
      items: ['ITM.', 'SENA.', 'Instituciones educativas.', 'Empresas.', 'Ruta N.', 'Cámara de Comercio.', 'Servicio Público de Empleo.', 'Alcaldía de Medellín.', 'Plataformas de formación.']
    },
    {
      title: 'Actividades clave',
      items: ['Desarrollo de plataforma.', 'Actualización de habilidades.', 'Integración con fuentes de empleo.', 'Diseño de rutas de formación.', 'Validación con usuarios.', 'Gestión de alianzas.']
    },
    {
      title: 'Recursos clave',
      items: ['Plataforma tecnológica.', 'Motor de matching.', 'Base de habilidades.', 'Datos de vacantes.', 'Equipo técnico.', 'Aliados institucionales.']
    },
    {
      title: 'Propuesta de valor',
      items: ['Para jóvenes: claridad sobre habilidades, brechas y oportunidades.', 'Para empresas: candidatos mejor filtrados.', 'Para instituciones: analítica sobre brechas.', 'Para ciudad: mejor conexión entre talento y productividad.']
    },
    {
      title: 'Relación con clientes',
      items: ['Autoservicio digital.', 'Recomendaciones personalizadas.', 'Acompañamiento virtual.', 'Comunidad de usuarios.', 'Soporte para empresas.']
    },
    {
      title: 'Canales',
      items: ['Plataforma web.', 'Ferias de empleo.', 'Universidades.', 'Redes profesionales.', 'Convenios institucionales.', 'Programas públicos.']
    },
    {
      title: 'Segmentos de clientes',
      items: ['Usuarios: jóvenes estudiantes, egresados y personas buscando primer empleo.', 'Clientes: empresas, instituciones educativas, entidades públicas y aliados de formación.']
    },
    {
      title: 'Estructura de costos',
      items: ['Desarrollo de software.', 'Servicios en la nube.', 'APIs de IA.', 'Seguridad de datos.', 'Marketing.', 'Soporte.', 'Validación del prototipo.']
    },
    {
      title: 'Fuentes de ingreso',
      items: ['Suscripción para empresas.', 'Licenciamiento institucional.', 'Plan Pro para usuarios.', 'Analítica laboral.', 'Comisiones por formación.', 'Consultoría en brechas de habilidades.', 'Convocatorias o financiación pública.']
    }
  ];

  monetizationCards: CardItem[] = [
    { title: 'Empresas', text: 'Empresas pagan por publicar vacantes y acceder a candidatos compatibles.', badge: '1' },
    { title: 'Instituciones', text: 'Instituciones pagan por dashboards y analítica de brechas.', badge: '2' },
    { title: 'Usuarios Pro', text: 'Usuarios pueden pagar por servicios avanzados.', badge: '3' },
    { title: 'Aliados de formación', text: 'Aliados de formación pueden generar comisiones por cursos o microcredenciales.', badge: '4' },
    { title: 'Entidades públicas', text: 'Entidades públicas pueden contratar reportes o pilotos de empleabilidad.', badge: '5' }
  ];
}
