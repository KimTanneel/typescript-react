import { RootState } from '../types'

export const getFilterSearchText = (state:RootState) => state.filter.keySearch;

export const getFilterStatus = (state:RootState) => state.filter.status;

export const getFilterPriorities =(state:RootState) => state.filter.priorities;

