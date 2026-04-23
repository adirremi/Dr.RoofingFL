import GeoArticlePage from '../GeoArticlePage';
import { geoArticlesBySlug } from '../../data/geoArticles';

export default function HollywoodGuidePage() {
  return <GeoArticlePage article={geoArticlesBySlug['hollywood-fl-guide']} />;
}
