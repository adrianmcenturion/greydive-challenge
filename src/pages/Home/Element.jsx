import CheckboxInput from "../../components/Checkbox";
import DateInput from "../../components/DateInput";
import Input from "../../components/Input";
import SelectInput from "../../components/Select";
import SubmitButton from "../../components/SubmitButton";

const Element = ({type, label, name, required, options, value}) => {
  switch (type) {
    case "text":
      return (
        <Input
          label={label}
          name={name}
          required={required}
          type={type}
          value={value}
        />
      );

    case "email":
      return (
        <Input
          label={label}
          name={name}
          required={required}
          type={type}
          value={value}
        />
      );

    case "checkbox":
      return (
        <CheckboxInput
          label={label}
          name={name}
          required={required}
          type={type}
          value={value}
        />
      );

    case "date":
      return (
        <DateInput
          label={label}
          name={name}
          required={required}
          type={type}
          value={value}
        />
      );

    case "select":
      return (
        <SelectInput
          label={label}
          name={name}
          required={required}
          type={type}
          value={value}
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
