import React, { HTMLInputTypeAttribute } from "react";
import { type UseFormRegister, type RegisterOptions } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  id: string;
  value?: string | number;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  error: string | null;
  validationScheme: RegisterOptions;
  register: UseFormRegister<any>;
}
