import style from "./Square.module.css";
import { SQUARE_STATUS } from "../constants/index";

type SquareProps = {
  id: number;
  state: SQUARE_STATUS;
  turn: number | null;
  onClick: (id: number) => void;
};

const getClassNames = (status: SQUARE_STATUS) => {
  switch (status) {
    case SQUARE_STATUS.EMPTY:
      return `${style.square} ${style.empty}`;
    case SQUARE_STATUS.BLACK:
      return `${style.square} ${style.black}`;
    case SQUARE_STATUS.WHITE:
      return `${style.square} ${style.white}`;
    default:
      return `${style.square}`;
  }
};

export default function Square(props: SquareProps) {
  return (
    <div className={style.boardSquare}>
      <div
        className={getClassNames(props.state)}
        onClick={(e) =>
          props.state === SQUARE_STATUS.EMPTY
            ? props.onClick(props.id)
            : e.preventDefault()
        }
        data-testid="square"
      ></div>
    </div>
  );
}
