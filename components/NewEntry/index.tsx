import React, { ChangeEvent, useState, useContext } from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { EntriesContext } from "../../context/entries/entriesContext";
import { UIContext } from "../../context/UI/UIContext";

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddNewEntry, setIsAddNewEntry } = useContext(UIContext);

  //const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const onInputChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;

    addNewEntry(inputValue);

    setIsAddNewEntry(false);
    setTouched(false);
    setInputValue("");
  };

  return (
    <Box sx={{ marginBottom: 2, padding: 1 }}>
      {isAddNewEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Nueva Tarea"
            autoFocus
            multiline
            error={inputValue.length <= 0 && touched}
            label="Nueva Tarea"
            helperText={
              inputValue.length <= 0 && touched && "Escribe tu nueva tarea"
            }
            value={inputValue}
            onChange={onInputChangeText}
            onBlur={() => setTouched(true)}
          />

          <Box display="flex" justifyContent="space-between">
            <Button variant="text" onClick={() => setIsAddNewEntry(false)}>
              Cancelar
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddBoxIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAddNewEntry(true)}
        >
          Agregar
        </Button>
      )}
    </Box>
  );
};
