import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

const PickComparisonsComponent = (props) => {
    return (
        <div className='subComponent'>
            <h1 className="titleText">Compare to current squad</h1>
            <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Nationality</TableCell>
                            <TableCell>Strengths</TableCell>
                            <TableCell>Quality</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.comparingPlayers && props.comparingPlayers.map((player) => (
                            <TableRow
                                key={player.playerName}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }} // remove bottom border for last row
                            >
                                <TableCell component="th" scope="row">
                                    {player.playerInfo.fullName}
                                </TableCell>
                                <TableCell>{player.playerInfo.country}</TableCell>
                                <TableCell>{player.strengths[0] && player.strengths[0].name}</TableCell>
                                <TableCell>{player.playerInfo.shortenedPosition}</TableCell>
                                <TableCell>
                                    <Button variant="contained">Compare</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export { PickComparisonsComponent };