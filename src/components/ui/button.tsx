import type { ButtonHTMLAttributes } from "react";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className, children, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={`text-white disabled:bg-purple-400/60 hover:bg-purple-600 disabled:border-b-slate-400 disabled:cursor-not-allowed disabled:active:translate-x-1 disabled:active:border-b-4 bg-purple-500 w-max px-4 py-1 rounded-md font-bold border-b-slate-700 border-b-4 shadow-md active:translate-y-1 active:border-b-[3px] active:bg-purple-600 ease-in-out duration-75 ${
        className ?? ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
