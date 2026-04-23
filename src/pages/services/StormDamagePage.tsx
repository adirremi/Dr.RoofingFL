import ServicePage from '../ServicePage';
import { servicesBySlug } from '../../data/services';

export default function StormDamagePage() {
  return <ServicePage service={servicesBySlug['storm-damage']} />;
}
