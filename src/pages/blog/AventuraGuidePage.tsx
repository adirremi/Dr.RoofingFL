import GeoArticlePage from '../GeoArticlePage';
import { geoArticlesBySlug } from '../../data/geoArticles';

export default function AventuraGuidePage() {
  return <GeoArticlePage article={geoArticlesBySlug['aventura-fl-guide']} />;
}
