import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { HTMLAndCSSMetaData } from './HTMLAndCSS/router-data';
import { SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';
import { TextFundamentsMetaData } from './TextFundaments/router-data';

export const blockRouterMetaData = [
  HTMLAndCSSMetaData,
  SelectorsAndCascadeMetaData,
  TextFundamentsMetaData,

];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
