import ServicePage from '../ServicePage';
import { servicesBySlug } from '../../data/services';

export default function FlatRoofPage() {
  return <ServicePage service={servicesBySlug['flat-roof']} />;
}
