import { AxiosPromise } from 'axios';
import { Axios } from 'src/services/Axios';

const urlPrefix = '/printer/contract';

interface ContractPrintersPayload {
  client?: string;
  limit: number;
  page: number;
}

export const getContractPrinters = (payload: ContractPrintersPayload): AxiosPromise => {
  return Axios.POST(`${urlPrefix}/getAllContractPrinterByClient`, payload);
};
