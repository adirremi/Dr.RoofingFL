import ServicePage from '../ServicePage';
import { servicesBySlug } from '../../data/services';

export default function TileRoofPage() {
  return <ServicePage service={servicesBySlug['tile-roof']} />;
}
