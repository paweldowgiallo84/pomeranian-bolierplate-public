import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataNumberIf } from './NumberIf/router-data';
import { JsNumbersTrainingMetaData } from './JsNumbersTraining/router-data';
import { blockRouterMetaData as EmptyValuesAndComments } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as JsArrayBasics } from './JsArrayBasics/router-data';
import { blockRouterMetaData as TimeExercises } from './Time/router-data';
import { blockRouterMetaData as HitTheMOleGame } from './HitTheMoleGame/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataNumberIf,
  JsNumbersTrainingMetaData,
  EmptyValuesAndComments,
  JsArrayBasics,
  TimeExercises,
  HitTheMOleGame,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
