function CustomInput({ field, value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(field, event.target.value)}
    />
  );
}

export default CustomInput;
