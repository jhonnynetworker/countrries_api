function Select(props) {
  const handleChange = (event) => {
    props.setSelected(event.target.value);
    console.log(event.target.value);
  };
  return (
    <select onChange={handleChange}>
      <option value="">{props.title}</option>
      {props.optionsList.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
}

export default Select;
