import { create } from "zustand";
import { Category } from "../services/Category.service";

type ICategoryStore = {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
};

const useCategoryStore = create<ICategoryStore>()((set) => ({
  categories: [],
  setCategories: (categories) => set(() => ({ categories })),
}));

export default useCategoryStore;
