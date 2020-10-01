import React from "react";
const ContactList = ({ items, onDelete }) => {
  return items.lenght > 0 && <ul>{items.map(({ name, id, number }) => {})}</ul>;
};
