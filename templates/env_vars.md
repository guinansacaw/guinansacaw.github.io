# Environment Variables

> ⚠️ Este archivo contiene SOLO nombres, tipos y descripciones. Nunca valores reales ni secrets.

---

## Variables del servidor / backend

| Variable | Tipo | Requerida | Descripción |
|----------|------|-----------|-------------|
| `NODE_ENV` | `string` | ✅ | Entorno de ejecución: `development`, `staging`, `production` |
| `PORT` | `number` | ✅ | Puerto en que corre el servidor |
| `DATABASE_URL` | `string` | ✅ | Connection string de la base de datos |
| `JWT_SECRET` | `string` | ✅ | Secreto para firmar tokens JWT |
| `JWT_EXPIRES_IN` | `string` | ✅ | Tiempo de expiración del token (ej. `7d`, `24h`) |
| `[VARIABLE]` | `[tipo]` | [✅/❌] | [Descripción] |

---

## Variables de servicios externos

| Variable | Tipo | Requerida | Servicio | Descripción |
|----------|------|-----------|---------|-------------|
| `SMTP_HOST` | `string` | ❌ | Correo | Host del servidor SMTP |
| `SMTP_PORT` | `number` | ❌ | Correo | Puerto SMTP |
| `SMTP_USER` | `string` | ❌ | Correo | Usuario SMTP |
| `SMTP_PASS` | `string` | ❌ | Correo | Contraseña SMTP |
| `[SERVICE]_API_KEY` | `string` | [✅/❌] | [Servicio] | [Descripción] |

---

## Variables del frontend

| Variable | Tipo | Requerida | Descripción |
|----------|------|-----------|-------------|
| `VITE_API_URL` | `string` | ✅ | URL base del backend |
| `VITE_APP_NAME` | `string` | ❌ | Nombre visible de la app |
| `[VARIABLE]` | `[tipo]` | [✅/❌] | [Descripción] |

---

## Notas

- El prefijo `VITE_` es requerido para exponer variables en el cliente con Vite
- Las variables marcadas ❌ tienen valor por defecto en el código
- Ver `.env.example` en la raíz del proyecto para el formato exacto
