import { getParsedRouterDataList } from '../../router-data/parseRouterData';
// import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactRouterEventsMetaData } from './ReactRouterEvents/router-data';
import { ReactMockup01MetaData } from './ReactMockup01/router-data';
import { Block9MetaData } from './Block9/router-data';
import { MaterialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';
import { Block21MetaData } from './Block 21/router-data';
import { LocalDevAndFetchMetaData } from './LocalDevAndFetch/router-data';
import { ToDoWithServerMetaData } from './ToDoWithServer/router-data';
import { ReactUseRefMetaData } from './ReactUseRef/router-data';
import { OrderFormMetaData } from './OrderForm/router-data';
import { ReduxTestMetaData } from './ReduxTest/router-data';
import { ReduxCounterRefMetaData } from './ReduxCounter/router-data';

export const blockRouterMetaData = [
  ReactMockup01MetaData,
  Block9MetaData,
  MaterialUIBasicElementsMetaData,
  ReactRouterEventsMetaData,
  ReactRouterEventsMetaData,
  ReactRouterEventsMetaData,
  ReactRouterEventsMetaData,
  Block21MetaData,
  LocalDevAndFetchMetaData,
  ToDoWithServerMetaData,
  ReactUseRefMetaData,
  OrderFormMetaData,
  ReduxTestMetaData,
  ReduxCounterRefMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
