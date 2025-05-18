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
import { DatePicker } from "./DatePicker";

const columns = [
  { id: "oi1", label: "OI(lots)", 
    minWidth: 100 
},
  {
    id: "call",
    label: "Call Price",
    // minWidth: 170,
    // align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "strike",
    label: "Strike Price",
    // minWidth: 170,
    // align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "put",
    label: "Put Price",
    // minWidth: 170,
    // align: "right",
    format: (value) => value.toFixed(2),
  },
  { id: "oi2",
     label: "OI(lots)",
    //  align: "right",
    //  minWidth: 170 
    },
];

function createData(oi1, call, strike, put, oi2) {
  // const density = population / size;
  return { oi1, call, strike, put, oi2 };
}

const rows = [
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
  createData("10000(+10%)", "+63(1.5%)", 10000, "+66(1.5%)", "1000(+10%)"),
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

export default function OptionChain() {
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
      <div className="text-white font-semibold text-3xl mb-3 mt-16">
        Nifty Option Chain
        
      <span className="ml-5">
      <DatePicker />
      </span>
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
              maxHeight: 600,
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
