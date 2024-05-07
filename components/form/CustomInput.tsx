import { Input } from "@nextui-org/react";
import { useField } from "formik";

interface CustomInputProps {
  label: string;
  type?: string;
  name: string;
  id?: string;
  placeholder?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type = "text",
  ...props
}) => {
  const [field, meta] = useField(props.name);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Input
        {...field}
        {...props}
        type={type}
        id={props.id || props.name}
        variant="underlined"
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
