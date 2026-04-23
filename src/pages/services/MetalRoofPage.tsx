import ServicePage from '../ServicePage';
import { servicesBySlug } from '../../data/services';

export default function MetalRoofPage() {
  return <ServicePage service={servicesBySlug['metal-roof']} />;
}
