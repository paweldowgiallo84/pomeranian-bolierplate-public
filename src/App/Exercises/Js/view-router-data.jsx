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
import { blockRouterMetaData as MemoGame } from './MemoGame/router-data';
import { blockRouterMetaData as LocalStorageExercise } from './Exercise-js-local-storage/router-data';
import { blockRouterMetaData as AddUserLocalStorae } from './Add-User_local_storage/router-data';
import { blockRouterMetaData as TryCatchAndFinally } from './TryCatchAndFinally/router-data';
import { blockRouterMetaData as TryCatch } from './TryCatch/router-data';
import { blockRouterMetaData as Prototypes } from './Prototypes/router-data';
import { blockRouterMetaData as ThisKeyword } from './ThisKeyword/router-data';
import { blockRouterMetaData as TicTacToe } from './TicTacToe/router-data';
import { blockRouterMetaData as ExercisiesFetch } from './Js-exercisies-fetch/router-index';
import { blockRouterMetaData as PromisesMethodsTraining } from './PromiseMethodsTraining/router-data';
import { blockRouterMetaData as BasicCalculator } from './Calculator/router-data';
import { blockRouterMetaData as Testing } from './Testing/router-data';

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
  MemoGame,
  LocalStorageExercise,
  AddUserLocalStorae,
  TryCatchAndFinally,
  TryCatch,
  Prototypes,
  ThisKeyword,
  TicTacToe,
  ExercisiesFetch,
  PromisesMethodsTraining,
  BasicCalculator,
  Testing,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
