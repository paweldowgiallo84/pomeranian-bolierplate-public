import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { HTMLAndCSSMetaData } from './HTMLAndCSS/router-data';
import { SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';

export const blockRouterMetaData = [
  HTMLAndCSSMetaData,
  SelectorsAndCascadeMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
