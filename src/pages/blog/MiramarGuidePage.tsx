import GeoArticlePage from '../GeoArticlePage';
import { geoArticlesBySlug } from '../../data/geoArticles';

export default function MiramarGuidePage() {
  return <GeoArticlePage article={geoArticlesBySlug['miramar-fl-guide']} />;
}
