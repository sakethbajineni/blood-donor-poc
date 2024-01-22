import { Bloodtype } from "@mui/icons-material";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
const MuiTable = ({searchParams}) => {

    const Column = [{ id: "id", name: "ID" }, { id: "name", name: "name" }, { id: "username", name: "username"}]


    console.log("table search",searchParams)
    const handleChangePage = (event,newpage) => {

        pageChange(newpage)
    }
    const handleOnRowPerPageChange = (event) => {
        rowperpageChange(parseInt(event.target.value,10))
        pageChange(0)
    }

    const [rows, rowsChange] = useState([])
    const [page, pageChange] = useState(0)
    const [rowperpage, rowperpageChange] = useState(5);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(resp => {
            return resp.json();
        }).then(resp => {
            rowsChange(resp)
        }).catch(e => {
            console.log(e.message)
        })
    }, [])
    return (
        <div style={{ textAlign: 'center', marginTop:"50px" }}>
           
            <Paper sx={{ width: '97%', marginLeft: "5%" ,borderRadius:"5px",position:"relative",right:"40px" }}>
                <TableContainer style={{borderRadius:"10px"}}>
                    <Table stickyHeader >
                        <TableHead >
                            <TableRow >
                                {Column.map((columns) => (
                                    <TableCell className="tablecell"   style={{ backgroundColor: '#f2f2f2', color:"black",fontWeight:"bold"}} key={columns.id}>{columns.name}</TableCell>


                                ))}
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows && rows
                                        .slice(page * rowperpage, page * rowperpage + rowperpage)
                                        .map((row, i) => {
                                            return (
                                                <TableRow key={i}>
                                                    {Column && Column.map((columns, i) => {
                                                        let value = row[columns.id];
                                                        return (
                                                            <TableCell key={value}>
                                                                {value}
                                                            </TableCell>
                                                        )
                                                    })}
                                                </TableRow>
                                            )
                                        })}

                                </TableBody>

                        
                        
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    page={page}
                    count={rows.length}
                    rowsPerPage={rowperpage}
                    component="div"
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleOnRowPerPageChange}
                    >

                </TablePagination>

            </Paper>



        </div>
    )
}
export default MuiTable

