import GeoArticlePage from '../GeoArticlePage';
import { geoArticlesBySlug } from '../../data/geoArticles';

export default function DavieGuidePage() {
  return <GeoArticlePage article={geoArticlesBySlug['davie-fl-guide']} />;
}
