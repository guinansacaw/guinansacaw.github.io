# Conventions

Reglas de estilo, nombrado y patrones que se siguen en este proyecto.  
La IA debe respetar estas convenciones en todo el código que genere.

---

## Nombrado

| Elemento | Convención | Ejemplo |
|---------|-----------|---------|
| Variables y funciones JavaScript | camelCase | `loadTranslations` |
| Clases CSS | kebab-case | `tech-card` |
| IDs HTML | kebab-case | `tech-stack` |
| Archivos | kebab-case | `menu-header.js` |
| Claves de traducción | kebab-case o snake_case semántico, sin reciclar claves viejas | `home_subtitle`, `tech_nodejs_desc` |
| Constantes JavaScript | UPPER_SNAKE_CASE | `DEFAULT_LANGUAGE` |

---

## Estructura de funciones y módulos

- Un archivo = una responsabilidad clara  
- `translations.js` solo maneja traducciones  
- `menu-header.js` solo maneja comportamiento del menú  
- No mezclar lógica de UI con contenido estático  
- Máximo 30–40 líneas por función antes de extraer  

---

## Convenciones de traducciones

- Todas las claves deben ser semánticas y específicas
- No reutilizar claves existentes con otro significado
- No mantener claves antiguas sin uso
- Toda clave debe existir en ambos archivos (`en.json` y `es.json`)
- El HTML debe tener contenido fallback si la traducción falla

## Manejo de errores

```javascript
// Patrón simple para errores en este proyecto
console.error('Error loading translations:', error);