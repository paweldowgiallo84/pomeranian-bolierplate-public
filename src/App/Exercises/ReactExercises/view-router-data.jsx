import { getParsedRouterDataList } from '../../router-data/parseRouterData';

// import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { ReactRouterEventsMetaData } from './ReactRouterEvents/router-data';

import { ReactMockup01MetaData } from './ReactMockup01/router-data';

import { Block9MetaData } from './Block9/router-data';

import { MaterialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';

import { Block21MetaData } from './Block 21/router-data';

export const blockRouterMetaData = [
  ReactMockup01MetaData,
  Block9MetaData,
  MaterialUIBasicElementsMetaData,
  ReactRouterEventsMetaData,
  ReactRouterEventsMetaData,
  ReactRouterEventsMetaData,
  ReactRouterEventsMetaData,
  Block21MetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
