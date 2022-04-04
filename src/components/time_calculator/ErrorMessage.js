import React from "react";

export default function ErrorMessage(props) {
  return (
    <div className="col red-text text-darken-4 center-align" style={{ marginTop: "16px" }}>
      <b>{props.message}</b>
    </div>
  );
}