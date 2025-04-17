import { css } from "../styled-system/css";

function Card({ title, children }) {
  return (
    <div
      className={css({
        p: "4",
        border: "1px solid",
        borderColor: "gray.200",
        borderRadius: "md",
        backgroundColor: "gray.50",
        boxShadow: "md",
        maxWidth: "80", // ≒ 320px
      })}
    >
      <h2
        className={css({
          fontSize: "xl",
          fontWeight: "semibold",
          mb: "2",
          color: "gray.900",
        })}
      >
        {title}
      </h2>
      <div
        className={css({
          color: "gray.500",
          lineHeight: "tall",
        })}
      >
        {children}
      </div>
    </div>
  );
}

export default Card;
