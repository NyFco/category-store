import { FC } from "react";
import Chip from "../Chip";
import styles from "./ChipsList.module.scss";
import { useCategoryStore } from "../../stores";
import IChipList from "./props";

const ChipsList: FC<IChipList> = ({ selected }) => {
  const { categories, setCategories } = useCategoryStore();

  const toggleChipSelection = (id: number): void => {
    const newCategories = categories.map((category) => {
      if (category.id !== id) return category;
      return { ...category, selected: !category.selected };
    });

    setCategories(newCategories);
  };

  return (
    <div className={styles.container}>
      {categories.map((category) => {
        if (selected && !category.selected) return;
        return (
          <Chip
            key={category.id}
            onClick={() => toggleChipSelection(category.id)}
            selected={category.selected}
          >
            {category.name}
          </Chip>
        );
      })}
    </div>
  );
};
export default ChipsList;
