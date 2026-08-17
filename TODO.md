# 📋 TODO — landing-aura (Backlog de mejoras)

> **Creado:** 2026-08-17
> **Repo:** [SteveMoya/landing-aura](https://github.com/SteveMoya/landing-aura)
> **Estado:** 2/4 completados — los bugs de la fase 1 ya están corregidos y verificados.

---

## ✅ 2. Navbar con fondo al scroll + encima de todo
**Estado: COMPLETADO (verificado por QA)**
- El header ya es `fixed` con `z-50` (por encima de todo el contenido).
- `[data-header].is-scrolled` aplica `background: rgb(253 246 255 / 0.7)` + `backdrop-filter: blur(20px)` + borde inferior — reglas fuera de `@layer` para no perder contra estilos scoped (lección de Nori).
- `initHeader()` añade/quita `.is-scrolled` al passar de 8px de scroll.
- **Verificado con Playwright**: `navbarScrolled: true`.

## ✅ 4. Línea del ritual centrada en los números
**Estado: COMPLETADO (verificado por QA)**
- Bug: la línea del timeline estaba en `top-14` (56px) pero el centro de los números (`h-14`, 56px) está en 28px → la línea quedaba debajo de los números.
- Fix: `top-14` → `top-7` en `src/components/sections/Ritual.astro` (commit `feat: fix línea ritual`).
- **Verificado con Playwright**: la línea pasa exactamente por el centro de los 3 números (offset 0.5px = grosor de la línea).

---

## 1. Espacios para imágenes de productos
**Estado: PENDIENTE**
- **Objetivo:** dejar huecos preparados para insertar fotos reales de los productos (serum, crema, limpiador, protector) sin romper el layout.
- **Propuesta:**
  - En `Products.astro`, el mock actual es un frasco genérico CSS (`div` con gradiente + círculo). Sustituirlo por un contenedor de imagen con proporción fija (aspect ratio + `object-fit: cover`) y un placeholder visible ("Imagen del producto").
  - En `Hero.astro`, el frasco de vidrio CSS pasaría a ser la foto real del Serum Glow con mantos de luz detrás (`<img>` + blur/glow).
  - Usar `astro:assets` con `src/assets/products/*.jpg` y optimización automática.
- **Prioridad:** media — mejora visual tras validar diseño.

## 3. Ritual como proceso de skincare con producto por paso
**Estado: PENDIENTE**
- **Objetivo:** que el Ritual muestre explícitamente qué producto entra en cada paso, siguiendo la lógica real de una rutina de skincare.
- **Propuesta:**
  - Añadir campo `product` a `RitualStep` en `src/data/ritual.ts`:
    - Paso 01 Limpieza → Limpiador de Espuma
    - Paso 02 Luz → Serum Glow
    - Paso 03 Sello → Cremosa Hidratante (+ Protector Solar Invisible, día)
  - Mostrar un chip/badge glass debajo del título de cada paso: "Con: Limpiador de Espuma" con enlace ancla a `#productos`.
  - Añadir en la cabecera de la sección una mini-línea de secuencia visual (icons de producto conectados: limpiador → serum → crema → protector).
- **Prioridad:** alta — da valor educativo a la marca.

---

## Notas técnicas
- **CSP estricta** sin `unsafe-eval` ni `unsafe-inline` — `vite.build.assetsInlineLimit: 0` para que los scripts siempre sean externos (bug transversal de la serie documentado en TODO global).
- **Vanilla JS** para interacciones (menú, header, newsletter).
- Registrar mejoras nuevas aquí a medida que Steve las solicite.