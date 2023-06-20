import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { HTMLAndCSSMetaData } from './HTMLAndCSS/router-data';
import { SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';
import { TextFundamentsMetaData } from './TextFundaments/router-data';
import { GoogleFontsMetaData } from './GoogleFonts/router-data';
import { Blok12BCMetaData } from './Blok12BC/router-data';
import { Block12ListsMetaData } from './Block12Lists/router-data';
import { BoxModelMetaData } from './BoxModel/router-data';
import { TablesMetaData } from './Tables/router-data';
import { Tables02RatingMetaData } from './Tables02Rating/router-data';

export const blockRouterMetaData = [
  HTMLAndCSSMetaData,
  SelectorsAndCascadeMetaData,
  TextFundamentsMetaData,
  GoogleFontsMetaData,
  Blok12BCMetaData,
  Block12ListsMetaData,
  BoxModelMetaData,
  TablesMetaData,
  Tables02RatingMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
