import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import './Main.css';


const CompareButton = (props) => {
    if (props.comparingPlayers.includes(props.player)) {
        return <Button className="cancelButton" variant="contained" startIcon={<img src={process.env.PUBLIC_URL + '/assets/compare.svg'}/>}} onClick={() => props.removePlayerFromComparison(props.player)}>Cancel</Button>
    } else {
        return <Button className="compareButton" variant="contained" startIcon={<img src={process.env.PUBLIC_URL + '/assets/compare.svg'}/>} onClick={() => props.addPlayerToComparison(props.player)}>Compare</Button>
    }
}

const PickComparisonsComponent = (props) => {
    return (
        <div className='subComponent'>
            <h1 className="titleText">Compare to current squad</h1>
            <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow className="tableTitles">
                            <TableCell><span className="tableTitles">Name</span></TableCell>
                            <TableCell><span className="tableTitles">Nationality</span></TableCell>
                            <TableCell><span className="tableTitles">Strengths</span></TableCell>
                            <TableCell><span className="tableTitles">Quality</span></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.playersToCompare && props.playersToCompare.map((player) => (
                            <TableRow
                                key={player.playerName}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }} // remove bottom border for last row
                            >
                                <TableCell component="th" scope="row">
                                    <img src={player.playerInfo.imageSrc} className='playerComparisonLogo' />
                                    <span className="tableValues">{player.playerInfo.fullName}</span>
                                </TableCell>
                                <TableCell><span className="tableValues"><img className="countryComparisonLogo" src={process.env.PUBLIC_URL + '/assets/german.png'} />{player.playerInfo.country}</span></TableCell>
                                <TableCell><span className="tableValues">{player.strengths[0] && player.strengths[0].name}</span></TableCell>
                                <TableCell><span className="tableValues">{player.playerInfo.shortenedPosition}</span></TableCell>
                                <TableCell>
                                    {<CompareButton player={player} comparingPlayers={props.comparingPlayers} removePlayerFromComparison={props.removePlayerFromComparison} addPlayerToComparison={props.addPlayerToComparison}/>}
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