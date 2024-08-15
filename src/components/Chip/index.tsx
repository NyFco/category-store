import { FC, MouseEvent } from "react";
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

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    if (disabled) return;
    if (onClick) onClick(e);
  };

  return (
    <button className={chipClassNames} onClick={handleClick}>
      <span className={styles["chip-addon"]}>+</span>
      <span>{children}</span>
    </button>
  );
};
export default Chip;
