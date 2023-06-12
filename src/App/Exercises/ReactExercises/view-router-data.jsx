import { getParsedRouterDataList } from '../../router-data/parseRouterData';

// import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { ReactRouterEventsMetaData } from './ReactRouterEvents/router-data';

import { ReactMockup01MetaData } from './ReactMockup01/router-data';

export const blockRouterMetaData = [
  ReactMockup01MetaData,
  ReactRouterEventsMetaData,
  ReactRouterEventsMetaData,
  ReactRouterEventsMetaData,
  ReactRouterEventsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
