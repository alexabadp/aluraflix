import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, descripcion) {
  return { name, descripcion };
}

const rows = [
  createData(
    "Back End",
    "Todos los video que estoy usando para estudiar Back End"
  ),
  createData(
    "Mobile",
    "Contenido que vengo estudiando sobre React Native y Flutter"
  ),
  createData(
    "Infraestrutura",
    "Todo lo que estoy aprendiendo sobre Docker y mucho mas"
  ),
  createData("Data Science", "Cosas de React y Python que vengo aprendiendo"),
  createData(
    "Design & UX",
    "Herramientas y técnicas que estudio sobre UX y Design"
  ),
  createData("Marketing Digital", "La forma de vender y monetizar mis ideas"),
  createData(
    "Inovacion & Gestion",
    "Como mantener el equipo felíz y mucho mas"
  ),
];

const TablaCategoria = () => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ border: "2px solid blue", minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                border: "2px solid blue",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Nombre
            </TableCell>
            <TableCell
              sx={{
                border: "2px solid blue",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Descripcion
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" sx={{ fontSize: "18px" }}>
                {row.name}
              </TableCell>
              <TableCell sx={{ fontSize: "18px" }}>{row.descripcion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaCategoria;
