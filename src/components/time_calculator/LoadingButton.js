import React from "react";

export default function LoadingSubmitButton(props) {
  return (
    <button
      className={`btn waves-effect waves-light pink accent-2 ${props.isLoading ? "disabled" : ""}`}
      style={{ width: "100%" }}
      type="submit"
    >
      {props.isLoading && (
        <div className="progress cyan lighten-5" style={{ marginTop: "14px" }}>
          <div className="indeterminate cyan darken-1"></div>
        </div>
      )}
      {!props.isLoading && "Calcular horas"}
    </button>
  );
}