import React from "react";

export default function Text({ el, text, className }) {
  return React.createElement(el, { className: className }, text);
}
