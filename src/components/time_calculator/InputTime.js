import React from "react";

export default function InputTime(props) {
  return (
    <div className={`input-field col s4 ${props.className}`}>
      <input
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
        type="text"
        placeholder="HH:mm"
        id={props.id}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}