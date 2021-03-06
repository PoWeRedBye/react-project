import { AxiosPromise } from 'axios';
import { Axios } from 'src/services/Axios';

import * as Payload from './types';

const urlPrefix = '/printer/contract';

export const getContractPrinters = (payload: Payload.ContractPrinters): AxiosPromise => {
  return Axios.POST(`${urlPrefix}/getAllContractPrinterByClient`, payload);
};

export const addContractPrinterCounters = (payload: Payload.ContractPrintersCounter): AxiosPromise => {
  return Axios.POST(`${urlPrefix}/addNewCounterToContractPrinter`, payload);
};
