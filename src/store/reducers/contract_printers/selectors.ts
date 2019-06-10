import find from 'lodash/find';
import { createSelector } from 'reselect';

import { AppState } from 'src/types/redux';
import { Printer } from 'src/types/models';

export const selectAllPrinters = (state: AppState): Printer[] => state.contractPrinters.list;

export const selectPrinterById = (_id: string | null) => {
  if (_id === null) {
    return () => null;
  }

  return createSelector(
    selectAllPrinters,
    (printers: Printer[]) => find(printers, { _id }) || null,
  );
};
