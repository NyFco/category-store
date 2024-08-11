import { MouseEvent, ReactNode } from "react";

type ChipProps = {
  children?: ReactNode;
  disabled?: boolean;
  selected?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default ChipProps;
