import { FC } from "react";
import ChipProps from "./props";
import styles from "./Chip.module.scss";
import classNames from "classnames";

const Chip: FC<ChipProps> = ({
  children,
  disabled = false,
  selected = false,
  onClick,
}) => {
  const chipClassNames = classNames(styles.chip, {
    [styles["chip-disabled"]]: disabled,
    [styles["chip-selected"]]: selected,
  });

  return (
    <button className={chipClassNames} onClick={onClick}>
      <span className={styles["chip-addon"]}>+</span>
      <span>{children}</span>
    </button>
  );
};
export default Chip;
