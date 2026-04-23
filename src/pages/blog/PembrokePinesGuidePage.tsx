import GeoArticlePage from '../GeoArticlePage';
import { geoArticlesBySlug } from '../../data/geoArticles';

export default function PembrokePinesGuidePage() {
  return <GeoArticlePage article={geoArticlesBySlug['pembroke-pines-fl-guide']} />;
}
