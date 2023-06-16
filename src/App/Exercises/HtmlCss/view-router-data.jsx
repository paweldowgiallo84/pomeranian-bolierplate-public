import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { HTMLAndCSSMetaData } from './HTMLAndCSS/router-data';
import { SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';
import { TextFundamentsMetaData } from './TextFundaments/router-data';
import { GoogleFontsMetaData } from './GoogleFonts/router-data';
export const blockRouterMetaData = [
  HTMLAndCSSMetaData,
  SelectorsAndCascadeMetaData,
  TextFundamentsMetaData,
  GoogleFontsMetaData,

];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
