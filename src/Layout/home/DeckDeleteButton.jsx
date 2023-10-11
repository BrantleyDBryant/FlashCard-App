import React from "react";
import { deleteDeck } from "../../utils/api";
import { useHistory } from 'react-router-dom';
export default function DeckDeleteButton({ deck }) { 
  const history = useHistory();
  const handleDelete = () => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      deleteDeck(deck.id);
      history.go(0);
    }
  };

  return (
    <button type="button" className="btn btn-danger" onClick={handleDelete}>
      <a href="/" className="text-white">
        <span className="fa-solid fa-trash" /> 
        Delete
      </a>
    </button>
  );
}