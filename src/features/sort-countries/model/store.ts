import { create } from 'zustand'

export type SortField = 'name' | 'population';
export type SortOrder = 'asc' | 'desc';

export interface SortState {
  field: SortField;
  order: SortOrder;
  // eslint-disable-next-line no-unused-vars
  setSort: (field: SortField, order: SortOrder) => void;
}

export const useSortStore = create<SortState>((set) => ({
  field: 'name',
  order: 'asc',

  setSort: (field, order) => set({ field, order }),
}))
