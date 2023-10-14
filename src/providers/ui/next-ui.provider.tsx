"use client";
import { FC, ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";

interface IProps {
  children: ReactNode;
}

const NextUI: FC<IProps> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
export default NextUI;
