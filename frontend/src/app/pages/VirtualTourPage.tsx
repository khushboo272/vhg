// ──────────────────────────────────────────────────────────
// VirtualTourPage — Wraps VirtualTour in TourProgressProvider
// ──────────────────────────────────────────────────────────

import { TourProgressProvider } from '../../contexts/TourProgressContext';
import { VirtualTour } from '../components/slides/VirtualTour';

export function VirtualTourPage() {
  return (
    <TourProgressProvider>
      <VirtualTour />
    </TourProgressProvider>
  );
}
