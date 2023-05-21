import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

// const options = [
//   {
//     value: "frontend",
//     label: "frontend",
//   },
//   { value: "backend", label: "backend" },
//   { value: "gestion", label: "Inovacion y gestión" },
// ];
const FormNewVideo = () => {
  const [showValidationErrors, setShowValidationErrors] = useState({});

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      titulo: "",
      linkVideo: "",
      linkImagen: "",
      categoria: "",
      descripcion: "",
      codigo: "",
    },
    validationSchema: Yup.object().shape({
      titulo: Yup.string()
        .min(3, "Debe tener mas de 3 caracteres")
        .required("Debes ingresar un Título"),
      linkVideo: Yup.string().required("Debes ingresa un link de video"),
      linkImagen: Yup.string().required("Debes ingresar una imagen"),
      categoria: Yup.string().required("Debes elegir una categoria"),
      descripcion: Yup.string().required("Debes ingresar una descripcion"),
      codigo: Yup.string()
        .min(3, "Debe tener mas de 3 caracteres")
        .required("Debes ingresar un código"),
    }),
    // validateOnBlur: true,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  const handleInputBlur = (event) => {
    const { name } = event.target;
    setShowValidationErrors((prev) => ({
      ...prev,
      [name]: true,
    }));
    handleChange(event);
  };

  return (
    <div>
      <Typography component="h1" variant="h3" align="center" margin="24px">
        Nuevo Video
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Titulo"
          fullWidth
          margin="normal"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
          onBlur={handleInputBlur}
          error={showValidationErrors.titulo && Boolean(errors.titulo)}
          helperText={showValidationErrors.titulo && errors.titulo}
        />

        <TextField
          type="text"
          label="Link del video"
          fullWidth
          margin="normal"
          name="linkVideo"
          value={values.linkVideo}
          onChange={handleChange}
          onBlur={handleInputBlur}
          error={showValidationErrors.linkVideo && Boolean(errors.linkVideo)}
          helperText={showValidationErrors.linkVideo && errors.linkVideo}
        />

        <TextField
          label="Link de la imagen del video"
          fullWidth
          margin="normal"
          name="linkImagen"
          value={values.linkImagen}
          onChange={handleChange}
          onBlur={handleInputBlur}
          error={showValidationErrors.linkImagen && Boolean(errors.linkImagen)}
          helperText={showValidationErrors.linkImagen && errors.linkImagen}
        />
        <TextField
          label="Escoja una categoria"
          fullWidth
          margin="normal"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          onBlur={handleInputBlur}
          error={showValidationErrors.categoria && Boolean(errors.categoria)}
          helperText={showValidationErrors.categoria && errors.categoria}
        />
        <TextField
          label="Descripcion"
          fullWidth
          margin="normal"
          name="descripcion"
          value={values.descripcion}
          onChange={handleChange}
          onBlur={handleInputBlur}
          error={
            showValidationErrors.descripcion && Boolean(errors.descripcion)
          }
          helperText={showValidationErrors.descripcion && errors.descripcion}
        />
        <TextField
          label="Codigo"
          fullWidth
          margin="normal"
          name="codigo"
          value={values.codigo}
          onChange={handleChange}
          onBlur={handleInputBlur}
          error={showValidationErrors.codigo && Boolean(errors.codigo)}
          helperText={showValidationErrors.codigo && errors.codigo}
        />

        {/* Aplicar grid a los botones */}
        <Button variant="contained" type="submit">
          Guardar
        </Button>
        <Button variant="contained">Limpiar</Button>
        <Button variant="contained">Nuevo Video</Button>
      </form>
    </div>
  );
};

export default FormNewVideo;
