import GeoArticlePage from '../GeoArticlePage';
import { geoArticlesBySlug } from '../../data/geoArticles';

export default function FortLauderdaleGuidePage() {
  return <GeoArticlePage article={geoArticlesBySlug['fort-lauderdale-fl-guide']} />;
}
