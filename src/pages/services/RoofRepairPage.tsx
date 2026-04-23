import ServicePage from '../ServicePage';
import { servicesBySlug } from '../../data/services';

export default function RoofRepairPage() {
  return <ServicePage service={servicesBySlug['roof-repair']} />;
}
