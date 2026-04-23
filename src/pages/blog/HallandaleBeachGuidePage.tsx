import GeoArticlePage from '../GeoArticlePage';
import { geoArticlesBySlug } from '../../data/geoArticles';

export default function HallandaleBeachGuidePage() {
  return <GeoArticlePage article={geoArticlesBySlug['hallandale-beach-fl-guide']} />;
}
