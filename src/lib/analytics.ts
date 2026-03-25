import { sendGAEvent } from '@next/third-parties/google';

export type GAEvent = 
  | { name: 'generate_lead'; params: { lead_type: 'whatsapp' | 'formulario' | 'llamada'; location: string; service_name?: string } }
  | { name: 'select_content'; params: { content_type: 'image' | 'button' | 'link'; item_id: string } }
  | { name: 'vista_galeria'; params: { section: string } }
  | { name: 'clic_mapa'; params: { location: string } };

export const trackEvent = (event: GAEvent) => {
  if (typeof window !== 'undefined') {
    sendGAEvent('event', event.name, event.params);
  }
};
