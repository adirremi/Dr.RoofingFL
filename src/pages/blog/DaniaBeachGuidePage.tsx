import GeoArticlePage from '../GeoArticlePage';
import { geoArticlesBySlug } from '../../data/geoArticles';

export default function DaniaBeachGuidePage() {
  return <GeoArticlePage article={geoArticlesBySlug['dania-beach-fl-guide']} />;
}
