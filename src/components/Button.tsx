import clsx from "clsx";

type Props = {
  variant: "outlined" | "contained";
  color: "primary" | "secondary";
  label: string;
  onClick?: () => void;
  icon?: string;
  disabled?: boolean;
  classname?: string;
};

export const Button = ({
  variant,
  color,
  label,
  onClick,
  icon,
  disabled,
  classname,
}: Props) => {
  return (
    <button
      className={clsx(
        "flex items-center justify-center rounded-md focus:outline-none py-1 px-3 gap-2 cursor-pointer transition-all " +
          classname,
        {
          "bg-blue-500 text-white":
            color === "primary" && variant === "contained",
          "bg-gray-200":
            (color === "secondary" && variant === "contained") ||
            (disabled && variant === "contained"),
          "bg-transparent border-2 border-gray-200": variant === "outlined",
          "text-gray-500": disabled,
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && (
        <div
          className={clsx("transition-opacity", {
            "opacity-35": disabled,
          })}
        >
          <img src={icon} alt="icon" />
        </div>
      )}
      {label}
    </button>
  );
};
