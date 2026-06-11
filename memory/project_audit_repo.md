---
name: project-audit-repo
description: Audit tiene repos privados y no serán públicos — añadir campo demo en ProjectModal.tsx con la URL de la app cuando esté disponible
metadata:
  type: project
---

El proyecto `audit` no tendrá repositorio público. En su lugar se enlazará la URL de la aplicación desplegada.

**How to apply:** Cuando la app esté desplegada, añadir `demo: '<url-de-la-app>'` al proyecto `audit` en `ProjectModal.tsx`. El modal ya tiene soporte para el campo `demo` y mostrará el botón "Ver aplicación" / "View app" automáticamente.
