# PROJECT_CASE_STUDY_GUIDELINES.md

## 1. Propósito

Este documento define el estándar para presentar proyectos dentro del portafolio.

Su objetivo es mantener consistencia entre proyectos reales y proyectos demostrables sin obligar a que todos tengan exactamente la misma extensión.

El case study debe demostrar capacidad para entender y resolver un problema de negocio, no solamente conocimiento de herramientas.

---

## 2. Principio principal

Cada case study debe seguir esta lógica:

**Problem → Solution → Workflow / Architecture → Implementation → Result → Demo**

La tecnología es evidencia de la solución, no el protagonista de la historia.

Evitar empezar un caso con una lista de herramientas sin explicar primero qué problema se estaba resolviendo.

---

## 3. Tres niveles de lectura

### Nivel 1 — Portfolio card

Tiempo esperado: **10 segundos**.

Debe contener:

- nombre del proyecto;
- una frase que explique el problema o resultado;
- stack principal;
- imagen clara;
- enlace al case study.

La card no debe intentar resumir toda la arquitectura.

---

### Nivel 2 — Case study

Tiempo esperado: **2 a 5 minutos** para comprender el proyecto.

Debe permitir responder:

- ¿qué problema existía?
- ¿para quién?
- ¿qué se construyó?
- ¿cómo funciona?
- ¿qué decisiones importantes se tomaron?
- ¿qué resultado produjo?
- ¿qué demuestra profesionalmente?

---

### Nivel 3 — Video demo

Duración recomendada: **1 a 3 minutos**.

Debe mostrar el funcionamiento, no repetir todo el texto del case study.

---

## 4. Estructura estándar

### 4.1 Project Header

Incluir:

- nombre;
- tipo de sistema;
- descripción de una o dos frases;
- stack principal;
- estado si es relevante.

Si es un proyecto demostrable, no presentarlo de forma que implique que fue realizado para un cliente real.

---

### 4.2 The Problem

Describir el proceso antes de la solución.

Explicar:

- qué estaba ocurriendo;
- qué era manual o ineficiente;
- qué información estaba fragmentada;
- qué riesgo, retraso o esfuerzo producía.

Preferir situaciones concretas.

Ejemplo de enfoque correcto:

> Leads were tracked across notes and spreadsheets, making follow-ups inconsistent and project handoff difficult.

Evitar:

> I wanted to practice Airtable and Make.

El aprendizaje puede haber sido una motivación personal, pero no es el problema de negocio del case study.

---

### 4.3 The Solution

Explicar el sistema construido en lenguaje comprensible.

Debe responder:

- qué centraliza;
- qué automatiza;
- qué usuarios o procesos conecta;
- qué ocurre automáticamente.

No entrar inmediatamente en tablas, funciones o endpoints.

---

### 4.4 Workflow / System Flow

Mostrar el recorrido principal.

Ejemplo:

```text
Lead Form
   ↓
Make
   ↓
Airtable CRM
   ↓
Qualification
   ↓
Follow-up Automation
```

Para sistemas más complejos puede utilizarse un diagrama de arquitectura.

El diagrama debe ayudar a entender, no decorar.

---

### 4.5 Data Model / Architecture

Incluir esta sección cuando aporte valor.

#### Airtable / business systems

Mostrar entidades y relaciones principales, por ejemplo:

- Leads
- Clients
- Projects
- Milestones
- Tasks

No es necesario documentar cada campo.

#### Backend / integration systems

Mostrar componentes y responsabilidades principales.

Ejemplo conceptual:

ERP → API → Azure Function → SQL → Processing → External API → Webhook

No exponer infraestructura sensible.

---

### 4.6 Key Automations / Engineering Decisions

Seleccionar únicamente decisiones que demuestren criterio.

Ejemplos low-code:

- deduplicación de leads;
- creación automática de proyecto;
- recordatorios según estado;
- sincronización entre aplicaciones;
- validaciones antes de ejecutar una acción.

Ejemplos backend:

- idempotencia;
- retries;
- webhook processing;
- asynchronous processing;
- multi-tenant separation;
- API authentication;
- data validation.

No convertir esta sección en una lista de todas las funcionalidades.

---

### 4.7 Before / After

Usar cuando pueda mostrar claramente el valor.

Ejemplo:

| Before | After |
|---|---|
| Leads in notes | Centralized CRM |
| Manual follow-ups | Automated reminders |
| Project setup repeated manually | Project created from approved lead |

No inventar métricas.

Si no existen datos reales sobre ahorro de tiempo o reducción de errores, describir el cambio cualitativamente.

---

### 4.8 Result

Explicar qué se consiguió.

Para proyectos demostrables, usar resultados verificables como:

- centralized workflow;
- automatic handoff;
- reduced manual steps;
- unified operational view;
- consistent process;
- real-time or scheduled synchronization.

No afirmar resultados financieros o porcentajes sin evidencia.

---

### 4.9 Technology Stack

Mostrar únicamente tecnologías realmente utilizadas en el proyecto.

Separarlas por función cuando ayude:

**Data**
- Airtable

**Automation**
- Make

**Portal**
- Softr

**Custom integration**
- Node.js / Azure Functions

Evitar agregar tecnologías solo para hacer el proyecto parecer más complejo.

---

### 4.10 Video Demo

Añadir una demostración corta cuando el proyecto pueda beneficiarse de mostrar interacción o automatizaciones.

Estructura recomendada:

1. problema en una frase;
2. punto inicial del flujo;
3. ejecución de las acciones principales;
4. automatización visible;
5. resultado final.

No dedicar la mayor parte del video a explicar código.

---

## 5. Reglas para screenshots

Las imágenes deben mostrar funcionamiento real.

Priorizar:

- interfaces;
- dashboards;
- tablas relevantes;
- automatizaciones;
- diagramas;
- resultados del flujo.

Evitar:

- capturas enormes ilegibles;
- demasiadas capturas similares;
- información sensible;
- secretos;
- datos personales reales;
- screenshots de código sin un propósito claro.

---

## 6. Reglas para código

No es obligatorio mostrar código en cada case study.

Mostrar código solamente cuando ayuda a demostrar una decisión técnica relevante.

Todo snippet debe ser identificable como uno de estos casos:

### Real code

Fragmento tomado de la implementación real, posiblemente reducido para contexto.

### Simplified code

Representa la lógica real pero elimina detalles no importantes.

Debe indicarse que está simplificado.

### Pseudocode

Explica conceptualmente un flujo y no debe presentarse como implementación literal.

Nunca inventar nombres de tablas, funciones, endpoints, campos o contratos y presentarlos como si fueran reales.

---

## 7. Proyectos reales vs demostrables

### Proyecto real

Puede describirse como experiencia profesional cuando exista evidencia de participación real.

Ejemplo: LoopyApp.

### Proyecto demostrable

Debe presentarse como una solución construida para demostrar una capacidad o resolver una necesidad propia.

No usar lenguaje que implique falsamente:

- cliente externo;
- producción real;
- usuarios reales;
- resultados comerciales reales.

Un proyecto demostrable bien terminado sigue siendo evidencia válida de capacidad técnica.

---

## 8. Extensión según proyecto

No todos los case studies deben tener la misma longitud.

### Flagship project

Ejemplo: LoopyApp.

Puede incluir:

- arquitectura;
- integración;
- decisiones de ingeniería;
- seguridad;
- procesamiento;
- problemas técnicos relevantes.

### Demo project

Debe ser más compacto.

Normalmente basta con:

- problem;
- solution;
- workflow;
- data model;
- 3–5 automations/features importantes;
- result;
- screenshots;
- video.

---

## 9. Checklist antes de publicar

### Exactitud

- [ ] El problema está descrito correctamente.
- [ ] No se atribuyen resultados que no pueden demostrarse.
- [ ] Todas las tecnologías listadas fueron realmente utilizadas.
- [ ] El código mostrado es real o está correctamente marcado como simplificado/pseudocódigo.
- [ ] No hay información sensible.

### Claridad

- [ ] Una persona puede entender el proyecto sin conocimientos técnicos profundos.
- [ ] El valor aparece antes de los detalles técnicos.
- [ ] El flujo principal puede explicarse en pocas frases.
- [ ] Los diagramas son legibles.

### Evidencia

- [ ] Hay capturas útiles.
- [ ] El flujo principal funciona.
- [ ] Existe demo de datos segura.
- [ ] Existe video cuando aporta valor.

### Portfolio

- [ ] La card tiene una descripción clara.
- [ ] El proyecto representa un servicio que se quiere vender.
- [ ] El case study refuerza el posicionamiento general.
- [ ] No duplica otro proyecto sin aportar una capacidad diferente.

---

## 10. Plantilla resumida

```markdown
# Project Name

Short description of the business problem and solution.

## The Problem

What process was manual, fragmented, slow or difficult?

## The Solution

What system was built and what does it automate?

## Workflow

Source → Automation → System → Action → Result

## Data Model / Architecture

Main entities or components and their relationships.

## Key Automations / Engineering Decisions

- Decision / automation 1
- Decision / automation 2
- Decision / automation 3

## Before / After

Clear qualitative comparison when relevant.

## Result

What changed after implementing the solution?

## Technology Stack

Only technologies actually used.

## Demo

Screenshots + 1–3 minute video.
```

---

## 11. Regla final

Un buen case study no intenta demostrar todo lo que el desarrollador sabe.

Debe demostrar que puede:

1. entender un proceso;
2. identificar el problema;
3. diseñar una solución apropiada;
4. implementarla correctamente;
5. explicar claramente el resultado.
