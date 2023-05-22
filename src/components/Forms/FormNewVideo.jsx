// // Material UI
import { Button, MenuItem, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { MuiFileInput } from "mui-file-input";

// Firebase
import { uploadFile } from "../../firebase/config";

const options = [
  { value: "", label: "Seleccione una opción", disabled: true },
  {
    value: "frontend",
    label: "frontend",
  },
  { value: "backend", label: "backend" },
  { value: "gestion", label: "Inovacion y gestión" },
];
const FormNewVideo = () => {
  const [showErrors, setShowErrors] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    handleChange,
    values,
    setFieldValue,
    errors,
    handleBlur,
    touched,
    validateForm,
    isValid,
    handleSubmit,
  } = useFormik({
    initialValues: {
      titulo: "",
      linkVideo: "",
      imagen: null,
      linkImagen: "",
      categoria: "",
      descripcion: "",
      codigo: "",
    },
    validationSchema: Yup.object().shape({
      titulo: Yup.string()
        .min(3, "Debe tener mas de 3 caracteres")
        .required("Debes ingresar un Título"),
      linkVideo: Yup.string()
        .url("Ingrese una URL válida")
        .required("Debes ingresa un link de video"),
      imagen: Yup.string().nullable().required("Debes cargar una imagen"),
      categoria: Yup.string().required("Debes elegir una categoria"),
      descripcion: Yup.string().required("Debes ingresar una descripcion"),
      codigo: Yup.string()
        .min(3, "Debe tener mas de 3 caracteres")
        .required("Debes ingresar un código"),
    }),

    onSubmit: async (data) => {
      setIsSubmitting(true);
      await handleFile(values.imagen);
      await console.log(data);

      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
    },
  });

  const handleFile = async (event) => {
    const result = await uploadFile(event);

    values.linkImagen = result;
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    setShowErrors(true);

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
        Nuevo Video
      </Typography>
      <form onSubmit={handleInputSubmit}>
        <TextField
          label="Titulo"
          fullWidth
          margin="normal"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(showErrors || touched.titulo) && Boolean(errors.titulo)}
          helperText={(showErrors || touched.titulo) && errors.titulo}
        />

        <TextField
          label="Link del video"
          fullWidth
          margin="normal"
          name="linkVideo"
          value={values.linkVideo}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(showErrors || touched.linkVideo) && Boolean(errors.linkVideo)}
          helperText={(showErrors || touched.linkVideo) && errors.linkVideo}
        />

        <MuiFileInput
          label="Carga la imagen del video"
          placeholder="Carga una imagen"
          fullWidth
          margin="normal"
          name="imagen"
          value={values.imagen}
          onChange={(e) => setFieldValue("imagen", e)}
          onBlur={() => handleBlur("imagen")}
          error={(showErrors || touched.imagen) && Boolean(errors.imagen)}
          helperText={(showErrors || touched.imagen) && errors.imagen}
        />

        <TextField
          select
          label="Escoja una categoria"
          fullWidth
          margin="normal"
          name="categoria"
          defaultValue={values.categoria}
          value={values.categoria}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(showErrors || touched.categoria) && Boolean(errors.categoria)}
          helperText={(showErrors || touched.categoria) && errors.categoria}
        >
          {options.map((e) => (
            <MenuItem key={e.value} value={e.value}>
              {e.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Descripcion"
          multiline
          rows={4}
          fullWidth
          margin="normal"
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
          label="Codigo"
          fullWidth
          margin="normal"
          name="codigo"
          value={values.codigo}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(showErrors || touched.codigo) && Boolean(errors.codigo)}
          helperText={(showErrors || touched.codigo) && errors.codigo}
        />

        {/* Aplicar grid a los botones */}
        <Button variant="contained" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando" : "Guardar"}
        </Button>
        <Button variant="contained">Limpiar</Button>
        <Button variant="contained">Nuevo Video</Button>
      </form>
    </div>
  );
};

export default FormNewVideo;
