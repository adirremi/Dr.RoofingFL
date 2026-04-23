import GeoArticlePage from '../GeoArticlePage';
import { geoArticlesBySlug } from '../../data/geoArticles';

export default function MiamiGuidePage() {
  return <GeoArticlePage article={geoArticlesBySlug['miami-fl-guide']} />;
}
