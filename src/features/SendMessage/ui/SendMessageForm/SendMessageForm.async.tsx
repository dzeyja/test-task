import { FC, lazy } from "react";
import { SendMessageFormProps } from "./SendMessageForm";

export const SendMessageFormAsync = lazy<FC<SendMessageFormProps>>(() => import('./SendMessageForm'))