import { useEffect, useState } from "react";

import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormNewCategoria = () => {
  const [showErrors, setShowErros] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    handleChange,
    values,
    errors,
    handleBlur,
    touched,
    validateForm,
    isValid,
    handleSubmit,
  } = useFormik({
    initialValues: {
      titulo: "",
      color: "#684b4b",
      descripcion: "",
      usuario: "",
    },
    validationSchema: Yup.object().shape({
      titulo: Yup.string().required("Debes ingresar un Título"),
      color: Yup.string().required("Debes ingresar un Color"),
      descripcion: Yup.string().required("Debes ingresar un Descripcion"),
      usuario: Yup.string().required("Debes ingresar un Usuario"),
    }),

    onSubmit: async (data) => {
      setIsSubmitting(true);
      console.log(data);

      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
    },
  });

  const handleInputSubmit = (event) => {
    event.preventDefault();
    setShowErros(true);

    validateForm().then(() => {
      if (isValid) {
        handleSubmit();
      }
    });
  };

  useEffect(() => {
    if (showErrors) {
      validateForm;
    }
  }, [showErrors, validateForm]);

  return (
    <div>
      <Typography component="h1" variant="h3" align="center" margin="24px">
        Nueva Categoria
      </Typography>
      <form onSubmit={handleInputSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Título"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(showErrors || touched.titulo) && Boolean(errors.titulo)}
          helperText={(showErrors || touched.titulo) && errors.titulo}
        />
        <TextField
          type="color"
          fullWidth
          margin="normal"
          label="Color"
          name="color"
          value={values.color}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(showErrors || touched.color) && Boolean(errors.color)}
          helperText={(showErrors || touched.color) && errors.color}
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          margin="normal"
          label="Descripcion"
          name="descripcion"
          value={values.descripcion}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            (showErrors || touched.descripcion) && Boolean(errors.descripcion)
          }
          helperText={(showErrors || touched.descripcion) && errors.descripcion}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Usuario"
          name="usuario"
          value={values.usuario}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(showErrors || touched.usuario) && Boolean(errors.usuario)}
          helperText={(showErrors || touched.usuario) && errors.usuario}
        />
        <Button variant="contained" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando" : "Guardar"}
        </Button>
        <Button>Limpiar</Button>
      </form>
    </div>
  );
};

export default FormNewCategoria;
