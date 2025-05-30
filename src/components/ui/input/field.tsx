import { ComponentProps } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from ".";
import { FieldWrapper } from "../dialog/field-wrapper";

type InputFieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
  containerClassName?: string;
};

export const InputField = ({
  label,
  name,
  required,
  containerClassName,
  ...props
}: InputFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: required && "Field required" }}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label} className={containerClassName}>
          <Input {...props} {...field} />
          {fieldState.error && (
            <span className="text-red-500 text-sm mt-1">
              {fieldState.error.message}
            </span>
          )}
        </FieldWrapper>
      )}
    />
  );
};
