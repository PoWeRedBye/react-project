import { createReduxSagaActionSubtypes as createSubtypes } from "src/utils";

export const ACTIONS_TYPES = {
  CONTRACT_PRINTER__GET_PRINTERS__SUBTYPES: createSubtypes('contractPrinters|getPrinters'),
};
