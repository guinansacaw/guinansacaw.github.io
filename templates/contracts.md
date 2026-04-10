# Contracts

> Este archivo define las estructuras que sí funcionan como contrato en este proyecto.
> La IA no debe inventar estructuras que no estén aquí.

---

## Contrato de traducciones

Cada clave usada en `data-translate` en el HTML debe existir en ambos archivos:

- `translations/en.json`
- `translations/es.json`

Si una clave no existe en uno de los idiomas, se considera inconsistencia del proyecto.

### Reglas

- Toda clave debe ser semántica y explícita
- No reutilizar claves viejas con otro significado
- No crear claves distintas para el mismo texto sin necesidad
- El HTML debe mantener contenido fallback legible

### Ejemplo

```html
<h2 data-translate="about_title">About me</h2>