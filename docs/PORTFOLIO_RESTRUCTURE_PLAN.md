# PORTFOLIO_RESTRUCTURE_PLAN.md

## 1. Propósito

Este documento define los cambios necesarios para alinear el sitio web actual con la estrategia profesional y el portafolio objetivo.

El objetivo no es reconstruir el sitio desde cero.

La prioridad es hacer cambios pequeños, útiles y verificables sobre la arquitectura estática existente.

---

## 2. Estado actual del sitio

El portafolio actual es un sitio estático compuesto por:

- HTML5;
- CSS;
- JavaScript vanilla;
- traducciones EN/ES mediante JSON;
- páginas independientes para proyectos;
- hosting estático estilo GitHub Pages.

No existe:

- framework frontend;
- npm como dependencia del proyecto;
- build step;
- backend;
- test suite;
- sistema formal de componentes.

### Decisión

**No migrar actualmente a React, Next.js, Vue u otro framework.**

No existe una necesidad comercial o técnica suficiente que justifique una migración antes de reorganizar contenido, proyectos y posicionamiento.

---

## 3. Objetivo del cambio

El portafolio debe pasar de comunicar principalmente:

> Backend automation and integrations

hacia una propuesta más amplia:

> Business systems, process automation and integrations, using low-code tools or custom backend depending on the problem.

Esto debe mantenerse coherente con el perfil de Upwork:

**Backend & Business Systems Engineer | Process Automation & Integration**

---

## 4. Home page

### 4.1 Hero

La idea central actual de automatización e integración puede mantenerse.

El cambio debe ampliar la forma en que se describe la solución para que no parezca limitada exclusivamente a backend.

El hero debe comunicar tres conceptos:

- business systems;
- automation;
- integrations.

Debe quedar claro que las soluciones pueden construirse con low-code o backend personalizado según la necesidad.

No realizar cambios de copy definitivos hasta preparar la versión final del contenido.

---

### 4.2 Technology stack

El stack visual debe dejar de representar únicamente el lado backend.

### Stack principal a mostrar

**Business systems / automation**

- Airtable
- Make
- Softr

**Backend / integration**

- Node.js
- Azure Functions
- SQL / Azure SQL
- REST APIs
- Webhooks

### Tecnologías secundarias

- Power BI
- WhatsApp Business API

La jerarquía visual debe evitar transmitir que todos los servicios ofrecidos requieren desarrollo tradicional.

---

## 5. Portfolio section

### Estructura objetivo

La sección debe priorizar cuatro casos:

1. LoopyApp
2. Freelance CRM & Project Operations System
3. Sales CRM & Lead Automation
4. Inventory & Order Operations System

### Orden

LoopyApp debe permanecer primero como flagship project.

Los proyectos demostrables se incorporarán solamente cuando estén suficientemente terminados.

### Proyectos antiguos

No eliminar automáticamente los proyectos anteriores de BI y Data.

Antes de decidir su destino, clasificarlos como:

- mantener en la página principal;
- mover a una sección secundaria;
- mantener accesibles pero no destacados;
- retirar.

La decisión debe favorecer claridad de posicionamiento sobre cantidad de proyectos.

---

## 6. LoopyApp case study

La estructura actual del case study es aprovechable y debe servir como referencia para los nuevos proyectos.

Secciones conceptualmente útiles:

- Problem
- Solution
- Outcome
- System Flow
- Architecture
- Engineering Decisions
- Before / After
- Technical Implementation

### Cambios requeridos

#### 6.1 Verificar exactitud técnica

Todo código mostrado debe clasificarse explícitamente como:

- código real;
- fragmento simplificado;
- pseudocódigo ilustrativo.

No mostrar pseudocódigo como si representara literalmente la implementación actual.

LoopyApp debe ser especialmente riguroso porque es el principal proyecto técnico del portafolio.

#### 6.2 Mantener separación entre explicación comercial y técnica

La página debe poder ser entendida por una persona no técnica antes de entrar en arquitectura o detalles de implementación.

#### 6.3 Video

Incorporar una demo conceptual o funcional segura.

No mostrar:

- secretos;
- datos personales;
- información identificable de clientes;
- configuraciones internas sensibles.

El video puede explicar visualmente:

ERP → integración → reglas → envío → webhook → respuesta / datos.

---

## 7. Nuevos project pages

Cada nuevo proyecto tendrá una página propia siguiendo `PROJECT_CASE_STUDY_GUIDELINES.md`.

No copiar automáticamente toda la extensión de LoopyApp.

Los proyectos demo deben tener case studies más cortos.

### Contenido mínimo

- Project summary
- Business problem
- Solution
- Workflow
- Data model / architecture cuando corresponda
- Key automations
- Result
- Technology stack
- Screenshots
- Video demo

---

## 8. Video demonstrations

### Ubicación

Cada case study debería tener una sección claramente visible de demo.

Puede ser:

- video embebido;
- thumbnail que abre el video;
- enlace destacado.

### Regla

El video complementa el case study. No lo reemplaza.

El visitante debe entender el proyecto aunque no reproduzca el video.

---

## 9. Mejoras técnicas del repositorio

Estas tareas son independientes del rediseño del contenido y pueden utilizarse como ejercicios pequeños para Codex.

### Prioridad alta

1. Crear un `README.md` real del repositorio.
2. Corregir el `</h2>` sobrante identificado en `index.html`.
3. Auditar enlaces vacíos, `#` y enlaces obsoletos.
4. Retirar bloques grandes de implementaciones antiguas comentadas si ya no tienen uso.
5. Revisar rutas absolutas con `/` para asegurar compatibilidad con el tipo de deployment deseado.

### Prioridad media

6. Eliminar imports duplicados de Google Fonts.
7. Mejorar UX del formulario reemplazando `alert()` cuando se decida intervenir esa sección.
8. Evitar mostrar errores técnicos serializados directamente al visitante.
9. Revisar dependencias CDN y consistencia entre páginas.
10. Revisar imágenes pesadas y assets innecesarios.

### Prioridad posterior

11. Evaluar validación automática de HTML.
12. Evaluar broken-link checking.
13. Evaluar linting básico.
14. Evaluar una estrategia para reducir duplicación de headers/footers si el mantenimiento lo justifica.

No incorporar una herramienta o framework solamente para solucionar duplicación si agrega más complejidad que valor.

---

## 10. Templates existentes

Los archivos dentro de `templates/` no deben utilizarse como documentación autoritativa del repositorio mientras describan arquitecturas o tecnologías que no existen en el proyecto actual.

Acciones posibles:

- corregirlos;
- reemplazarlos;
- eliminarlos si no son útiles.

Esto debe hacerse después de crear el nuevo README y la documentación principal.

---

## 11. Estrategia de cambios

No realizar una gran reconstrucción de una sola vez.

Trabajar mediante cambios pequeños y revisables.

### Fase 1 — Baseline técnico

- README real
- pequeños bugs HTML/CSS/links
- limpieza de código antiguo claramente innecesario

### Fase 2 — Posicionamiento

- hero
- descripción profesional
- technology stack
- navegación si hace falta

### Fase 3 — Portfolio structure

- LoopyApp actualizado
- sistema de cards preparado para nuevos proyectos
- reorganización de proyectos antiguos

### Fase 4 — Nuevos case studies

Añadir cada nuevo proyecto solamente cuando esté terminado.

### Fase 5 — Videos

Incorporar demostraciones y revisar que cada proyecto se pueda entender sin depender del video.

---

## 12. Uso con Codex

Antes de pedir un cambio a Codex:

1. indicar el objetivo;
2. indicar los archivos involucrados;
3. limitar el alcance;
4. pedir inspección antes de modificar;
5. evitar refactors fuera del objetivo;
6. revisar el diff antes de aceptar;
7. probar localmente con servidor HTTP;
8. comprobar EN/ES cuando el cambio afecte contenido traducido;
9. verificar navegación y enlaces;
10. hacer commit pequeño y descriptivo.

### Tipo de tareas ideales para aprendizaje inicial

- corregir un error HTML concreto;
- limpiar un bloque obsoleto;
- agregar o modificar una sección pequeña;
- corregir un enlace;
- actualizar una card de proyecto;
- crear README basado en el repo real.

Evitar inicialmente prompts como:

> Rediseña y moderniza completamente todo el portafolio.

El objetivo es aprender a controlar cambios producidos por agentes, no delegar todo el proyecto sin revisión.

---

## 13. Criterios de éxito

La reestructuración estará bien encaminada cuando:

- el home comunique business systems + automation + integrations;
- Airtable, Make y Softr sean visibles;
- LoopyApp siga demostrando profundidad técnica;
- los nuevos proyectos tengan una identidad clara;
- la página no parezca exclusivamente de backend;
- tampoco parezca exclusivamente low-code;
- cada caso explique un problema comercial reconocible;
- los proyectos puedan demostrarse visualmente;
- el sitio siga siendo sencillo de mantener.
