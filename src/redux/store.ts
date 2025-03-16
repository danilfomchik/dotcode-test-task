import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import blocksSlice from './blocks/blocksSlice';
import {PreloadedState, SliceNames} from './types';

const combinedReducer = combineReducers({
    [SliceNames.blocksSlice]: blocksSlice.reducer,
});

export const setupStore = (preloadedState?: PreloadedState) => {
    return configureStore({
        reducer: combinedReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware(),
        preloadedState,
    });
};

const store = setupStore();

export type AppStoreState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof combinedReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
