### Reducer folder scheme

- `index.ts` entry point to the reducer and it's API
- `reducer.ts` contains the reducer itself with it's initial state
- `types.ts` contains all reducer related types
- `action-types.ts` contains all reducer action types constants
- `actions.ts` contains all action creators related to the reducer
- `selectors.ts` _[optional]_ contains all selectors related to the reducer
- `constants.ts` _[optional]_ contains different constants related to the reducer
- `helpers.ts` _[optional]_ contains different helper functions related to the reducer
- `__tests__` folder with all required unit tests

```text
┗ reducers
  ┣ user
  ┣ orders
  ┣ ...other_reducers
  ┗ {your_reducer_name}
    ┣ __tests__
    ┃  ┣ actions.test.ts
    ┃  ┣ reducer.test.ts
    ┃  ┣ selectors.test.ts
    ┃  ┗ helpers.test.ts
    ┣ action-types.ts
    ┣ actions.ts
    ┣ index.ts
    ┣ reducer.ts
    ┣ selectors.ts
    ┣ types.ts
    ┣ constants.ts
    ┗ helpers.ts
```
