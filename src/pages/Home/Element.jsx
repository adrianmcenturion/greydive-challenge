import CheckboxInput from "../../components/Checkbox";
import DateInput from "../../components/DateInput";
import Input from "../../components/Input";
import SelectInput from "../../components/Select";
import SubmitButton from "../../components/SubmitButton";

const Element = ({type, label, name, required, options}) => {
  switch (type) {
    case "text":
      return (
        <Input
          label={label}
          name={name}
          required={required}
          type={type}
        />
      );

    case "email":
      return (
        <Input
          label={label}
          name={name}
          required={required}
          type={type}
        />
      );

    case "checkbox":
      return (
        <CheckboxInput
          label={label}
          name={name}
          required={required}
          type={type}
        />
      );

    case "date":
      return (
        <DateInput
          label={label}
          name={name}
          required={required}
          type={type}
        />
      );

    case "select":
      return (
        <SelectInput
          label={label}
          name={name}
          required={required}
          type={type}
          options={options}
        />
      );

    case "submit":
      return <SubmitButton label={label} type={type} />;

    default:
      return null;
  }
};
export default Element;
