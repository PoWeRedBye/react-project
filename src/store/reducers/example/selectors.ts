import { AppState } from 'src/types/redux';

export const exampleSelector = (state: AppState) => state.example.value;
