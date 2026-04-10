🔴 Críticas (rompen sistema o posicionamiento)
Eliminar duplicación de lógica de traducciones (un solo archivo)
Corregir TODOS los data-translate vacíos o inconsistentes
Alinear contenido con posicionamiento (revisar página BI)
Separar responsabilidades en JS (menu / translations / email)


🟠 Importantes (degradan calidad)
Unificar idioma base (no mezclar hardcoded + JSON)
Añadir validaciones en JS antes de usar DOM
Implementar fallback de traducciones
Reducir acoplamiento de script.js


🟡 Mejoras estructurales
Reestructurar contenido LoopyApp para escaneo rápido
Crear sistema CSS más modular (no clases genéricas reutilizadas)
Revisar naming de claves de traducción (dominio consistente)
Limitar scripts globales por página


🟢 Secundarias
Mejorar manejo de errores en UI
Control de carga de scripts externos
Optimizar estructura de funciones (>30 líneas regla)



Plan en fases
Fase 1 — Auditoría y mapa de impacto

Objetivo: identificar exactamente qué hay que tocar antes de mover nada.

Qué se revisa

Duplicación de lógica de traducciones entre script.js y translations.js
Todos los data-translate del HTML principal y de páginas de proyecto
Claves existentes en en.json y es.json y sus inconsistencias
Código JS mezclado por responsabilidades en script.js
Página BI que contradice el posicionamiento definido en project_spec.md

Entregable

Lista cerrada de:
archivos afectados
claves faltantes
data-translate vacíos
textos hardcodeados
bloques JS que deben separarse
partes de BI que chocan con el posicionamiento
Fase 2 — Consolidación de traducciones

Objetivo: dejar una sola fuente de lógica de traducción.

Qué se hace

Elegir translations.js como único módulo de traducciones, porque encaja con la convención del proyecto: “translations.js solo maneja traducciones”
Eliminar de script.js toda la lógica duplicada de carga/aplicación de traducciones
Verificar que el HTML siga teniendo fallback legible, como exige contracts.md

Resultado esperado

Ya no existe lógica duplicada
El cambio de idioma depende de un solo archivo
Menos riesgo de comportamiento inconsistente
Fase 3 — Corrección de contratos de traducción

Objetivo: cerrar todas las inconsistencias de data-translate.

Qué se hace

Corregir todos los data-translate="" vacíos, por ejemplo en la página BI
Reemplazar textos hardcodeados que deberían venir desde JSON
Añadir en en.json y es.json toda clave nueva necesaria, con el mismo significado en ambos idiomas, como exige el contrato
Eliminar reutilizaciones incorrectas de claves si aparecen
Revisar que no queden claves huérfanas o semánticamente ambiguas

Resultado esperado

Todo data-translate usado en HTML existe en ambos JSON
No quedan claves vacías ni textos inconsistentes
El sistema de traducción deja de ser parcial
Fase 4 — Separación estricta de responsabilidades JS

Objetivo: dejar cada archivo con una responsabilidad clara.

Qué se hace

menu-header.js: solo menú y comportamiento de navegación
translations.js: solo traducciones
script.js: solo formulario/email si esa es su función final
No mezclar menú, email y traducciones en el mismo archivo, porque ahora sí está mezclado
Revisar inicialización para que cada módulo solo actúe si el DOM requerido existe

Resultado esperado

JS más predecible
Menor acoplamiento
Cumplimiento real de conventions.md
Fase 5 — Revisión de posicionamiento en la página BI

Objetivo: dejar de empujar una narrativa que contradice el proyecto.

Qué se hace

Revisar pipeline-bi-libaustral.html porque hoy comunica BI/OLAP/dashboard como foco principal
Reescribir solo el contenido necesario para que no compita con el foco principal del sitio
Mantener el proyecto, pero bajar su peso narrativo frente a backend automation / integrations / workflows, que es el posicionamiento definido
Corregir textos y traducciones asociadas si cambian mensajes

Resultado esperado

El proyecto BI no rompe el mensaje comercial del portfolio
LoopyApp sigue siendo el proyecto dominante
El portfolio deja de mandar señales contradictorias
Fase 6 — Validación final

Objetivo: comprobar que no se rompió nada.

Checklist

No queda lógica de traducción duplicada
No queda ningún data-translate vacío
Todas las claves existen en en.json y es.json
Cada archivo JS tiene una única responsabilidad
El contenido BI ya no contradice el posicionamiento
No se rompió la estructura HTML global
Se respetan contracts.md, conventions.md y project_spec.md