import { User } from 'src/types/models';
export type UserReducerState = {
  data: User | null;
  isAuthorized?: boolean;
  accessToken: string | null;
  refreshToken: string | null;
};
