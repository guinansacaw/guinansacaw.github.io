# Directory Tree

> Estructura de carpetas del proyecto. Incluye una descripción de cada carpeta relevante.
> La IA no debe asumir que existe un archivo o carpeta que no aparezca aquí.

---

```
[nombre-proyecto]/
├── .env                        # Variables de entorno (no subir al repo)
├── .env.example                # Plantilla de variables de entorno
├── package.json
├── README.md
│
├── src/
│   ├── index.ts                # Punto de entrada principal
│   │
│   ├── config/                 # Configuración global (db, env, logger)
│   │   └── database.ts
│   │
│   ├── modules/                # Módulos de negocio (uno por entidad/dominio)
│   │   ├── auth/
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.routes.ts
│   │   │   └── auth.types.ts
│   │   │
│   │   └── [modulo]/
│   │       ├── [modulo].controller.ts
│   │       ├── [modulo].service.ts
│   │       ├── [modulo].routes.ts
│   │       └── [modulo].types.ts
│   │
│   ├── middlewares/            # Middlewares globales (auth, error handler, etc.)
│   │   ├── auth.middleware.ts
│   │   └── error.middleware.ts
│   │
│   ├── utils/                  # Funciones utilitarias reutilizables
│   │   └── [util].ts
│   │
│   └── types/                  # Tipos globales compartidos
│       └── index.ts
│
├── prisma/                     # Esquema y migraciones de base de datos
│   ├── schema.prisma
│   └── migrations/
│
└── tests/                      # Tests unitarios e integración
    └── [modulo].test.ts
```

---

## Notas sobre la estructura

- **`modules/`** — Cada módulo es autocontenido. El controlador recibe la request, el servicio tiene la lógica de negocio.
- **`middlewares/`** — Solo middlewares que aplican globalmente o a múltiples rutas.
- **`utils/`** — Funciones puras sin dependencias de negocio.
- **`types/`** — Interfaces y tipos compartidos entre módulos.

---

## Archivos importantes

| Archivo | Descripción |
|---------|-------------|
| `src/index.ts` | Entry point. Inicializa el servidor y registra rutas. |
| `prisma/schema.prisma` | Fuente de verdad del esquema de DB. |
| `.env.example` | Lista todas las variables requeridas sin valores. |
