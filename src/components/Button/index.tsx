import { ComponentProps } from "react";

export const Button = ({ ...otherProps }: ComponentProps<"button">) => (
    <button {...otherProps}/>
)