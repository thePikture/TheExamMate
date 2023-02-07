import * as React from 'react';
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ExamResult = () => {

    function createData(name, calories, fat, carbs, protein, result) {
        return { name, calories, fat, carbs, protein, result };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0, "fail"),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3, "pass"),
    ];

    return (
        <div>
            <Navbar />
            <div class="container student-dashboard">
                <h3>My Exam Result</h3>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell align="right">Exam No.</TableCell>
                                <TableCell align="right">No.of Question</TableCell>
                                <TableCell align="right">Correct Answer</TableCell>
                                <TableCell align="right">Wrong Answer</TableCell>
                                <TableCell align="right">Result</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                    <TableCell align="right">{row.result}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
            <Footer />
        </div>
    );
}

export default ExamResult;