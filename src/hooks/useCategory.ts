import { useCallback, useMemo } from "react";
import { CategoryService } from "../services";
import { useCategoryStore } from "../stores";

export default function useCategory() {
  const categoriesService = useMemo(() => new CategoryService(), []);

  const { setCategories } = useCategoryStore();

  const getCategories = useCallback(() => {
    return new Promise((resolve, reject) => {
      categoriesService
        .list()
        .then((data) => {
          setCategories(data);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }, [categoriesService, setCategories]);

  return {
    getCategories,
  };
}
