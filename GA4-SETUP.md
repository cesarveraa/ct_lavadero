# Guía de Configuración: Google Analytics 4 (GA4)

Esta guía documenta la integración de GA4 realizada en el proyecto usando `@next/third-parties/google` (enfoque oficial).

## Instrucciones de Configuración en Producción (Vercel)

1. Ve al panel de Google Analytics y crea una propiedad GA4 (si aún no la tienes).
2. Obtén el **ID de Medición (Measurement ID)**. Debe tener el formato `G-XXXXXXXXXX`.
3. Ve a tu proyecto en **Vercel** > **Settings** > **Environment Variables**.
4. Agrega una nueva variable:
   - **Key**: `NEXT_PUBLIC_GA_ID`
   - **Value**: `G-XXXXXXXXXX`
5. Realiza un **Redeploy** de tu proyecto. El script de GA4 se inyectará automáticamente en toda la web gracias a la condición en `src/app/layout.tsx`.

## Estrategia de Eventos Implementados

La implementación se dividió en eventos estándar (recomendados por Google) y eventos custom. No requerimos enviar `page_view` al cambiar de ruta, ya que esto lo asume automáticamente *Enhanced Measurement* y Next.js.

### Eventos de Negocio (Clave / Conversiones)

Se usó el estándar **`generate_lead`**. Se recomienda ir a *Administrar > Eventos* en GA4 y **marcar `generate_lead` como Key Event (Conversión)**.

| Componente de Origen | Parámetros Enviados |
| :--- | :--- |
| **Hero** (Botón Principal) | `lead_type: 'whatsapp'`, `location: 'hero'` |
| **Hero** (Final CTA) | `lead_type: 'whatsapp'`, `location: 'final_cta'` |
| **WhatsAppButton** (Flotante) | `lead_type: 'whatsapp'`, `location: 'floating_button'` |
| **Contact** (Botón Textual) | `lead_type: 'whatsapp'`, `location: 'contact_section'` |
| **Services** (Cartas de Servicio) | `lead_type: 'whatsapp'`, `location: 'services_grid'`, `service_name: <nombre>` |
| **Services** (CTA Final Secc.) | `lead_type: 'whatsapp'`, `location: 'services_cta'` |

### Eventos de Contenido y Navegación

Usan el evento estándar **`select_content`**.

| Componente | Parámetros Enviados | Criterio de Disparo |
| :--- | :--- | :--- |
| **Hero** | `content_type: 'link'`, `item_id: 'ver_servicios'` | Clic al botón secundario |
| **Gallery** | `content_type: 'image'`, `item_id: <alt_text>` | Clic sobre una imagen (abre lightbox) |

### Eventos Secundarios (Custom)

Miden interacción o interés específico.

| Nombre | Parámetros Enviados | Criterio de Disparo |
| :--- | :--- | :--- |
| **`vista_galeria`** | `section: 'galeria'` | Al hacer scroll y hacer visible el **50% de la galería** (IntersectionObserver). Evita falsos positivos en render inicial. |
| **`clic_mapa`** | `location: 'contacto'` | Al hacer clic en el enlace "Abrir en Google Maps". |

## Lista de Comprobación (QA / Pruebas)

Puedes verificar tu instalación siguiendo estos pasos:

1. **Abre tu Web**: Entra a tu web con la extensión [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechjna) activa.
2. **Navega a GA4**: Ve a tu panel de GA4 > Administrar > **DebugView**.
3. **Prueba Eventos Automáticos**: Verifica que aparece el evento `page_view` y `session_start`.
4. **Prueba `vista_galeria`**: Haz scroll rápido hacia abajo hasta la galería. Deberías ver aparecer el evento `vista_galeria` en el panel de DebugView.
5. **Prueba `generate_lead`**: Haz clic en el botón de WhatsApp del Hero. Deberías ver `generate_lead` en el timeline con `location="hero"`.
6. En el panel lateral, comprueba que los parámetros (como `lead_type` y `location`) estén registrando la información correctamente desde cada botón (ej. desde *Servicios* debería llegar también el nombre del servicio).

## Próximos Pasos Recomendados (Segunda Fase)
1. **Eventos Formulario**: Si agregas un formulario de contacto directo (`<form>`), conecta su evento `onSubmit` a `generate_lead` con `lead_type: 'formulario'`.
2. **Definiciones Custom**: En GA4, registra las dimensiones personalizadas (Custom Dimensions) `location`, `lead_type`, y `service_name` para poder incluirlas en reportes más detallados que agrupen el éxito por origen.
