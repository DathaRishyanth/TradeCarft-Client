/* eslint-disable no-unused-vars */
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";


const columns = [
  { id: "name", label: "Stock Name", minWidth: 170 },
  { id: "last", label: "Last\u00a0Trade", minWidth: 100 },
  {
    id: "day",
    label: "Day Change",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "high",
    label: "High",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "low",
    label: "Low",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "open",
    label: "Open",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "prev",
    label: "Previous Traded",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, last, day, high, low, open, prev) {
  // const density = population / size;
  return { name, last, day, high, low, open, prev };
}

const rows = [
  createData("Nifty", 22500, "+63(1.5%)", 10000, 20000, 30000, 40000),
  createData("Nifty", 22500, "+63(1.5%)", 10000, 20000, 30000, 40000),
  createData("Nifty", 22500, "+63(1.5%)", 10000, 20000, 30000, 40000),
  createData("Nifty", 22500, "+63(1.5%)", 10000, 20000, 30000, 40000),
  createData("Nifty", 22500, "+63(1.5%)", 10000, 20000, 30000, 40000),
  createData("Nifty", 22500, "+63(1.5%)", 10000, 20000, 30000, 40000),
  createData("Nifty", 22500, "+63(1.5%)", 10000, 20000, 30000, 40000),
  createData("Nifty", 22500, "+63(1.5%)", 10000, 20000, 30000, 40000),
  createData("Nifty", 22500, "+63(1.5%)", 10000, 20000, 30000, 40000),
  createData("Nifty", 22500, "+63(1.5%)", 10000, 20000, 30000, 40000),
  createData("Nifty", 22500, "+63(1.5%)", 10000, 20000, 30000, 40000),
  createData("Nifty", 22500, "+63(1.5%)", 10000, 20000, 30000, 40000),
  createData("Nifty", 22500, "+63(1.5%)", 10000, 20000, 30000, 40000),
  createData("Nifty", 22500, "+63(1.5%)", 10000, 20000, 30000, 40000),
  createData("Nifty", 22500, "+63(1.5%)", 10000, 20000, 30000, 40000),
];

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0F172A",
      paper: "#0F172A",
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
  },
});

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      
      <div className="text-white font-semibold text-3xl mb-3 mt-3">
        Stocks List
      </div>
      <ThemeProvider theme={darkTheme}>
        <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
            backgroundColor: darkTheme.palette.background.paper,
          }}
        >
          <TableContainer
            sx={{
              maxHeight: 440,
              "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for WebKit browsers
              "-ms-overflow-style": "none", // Hide scrollbar for IE and Edge
              "scrollbar-width": "none", // Hide scrollbar for Firefox
            }}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        backgroundColor: darkTheme.palette.background.paper,
                        color: darkTheme.palette.text.primary,
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ color: darkTheme.palette.text.primary }}
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            style={{ color: darkTheme.palette.text.primary }}
          />
        </Paper>
      </ThemeProvider>
    </div>
  );
}
