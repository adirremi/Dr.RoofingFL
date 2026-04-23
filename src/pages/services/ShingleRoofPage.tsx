import ServicePage from '../ServicePage';
import { servicesBySlug } from '../../data/services';

export default function ShingleRoofPage() {
  return <ServicePage service={servicesBySlug['shingle-roof']} />;
}
