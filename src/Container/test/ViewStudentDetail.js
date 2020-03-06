import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from "axios"
import Grow from '@material-ui/core/Grow';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function createData(name, Branch, RollNumber, Email, HSS) {
    return { name, Branch, RollNumber, Email, HSS };
}

var CName
var Placed
var selectedList
var RowsExport = [];
const Export = () => {
      const arr =RowsExport;
      var data = [];
      console.log("duniya bar",rows)
      for (var k in arr) {
        data[k]=exportData(
        '\n'+arr[k].name,
        arr[k].Branch,
        arr[k].RollNumber,
        )
      }
      const element = document.createElement("a");
      const file = new Blob([data]);
      element.href = URL.createObjectURL(file);
      element.download = "myFile.csv";
      document.body.appendChild(element);
      element.click();
      RowsExport=[];
    }
      function exportData(Name,Branch,RollNo) {
        return [Name,Branch,RollNo];
      
      }

function SetValue(event) {
    if (event.target.name === 'CName')
        CName = event.target.value;
    if (event.target.name === 'Placed')
        Placed = event.target.value;
}

var Addtoplace = 0;

var Student = localStorage.getItem("studentDetail")
var arr = JSON.parse(Student)
const rows = [];

for (var k in arr) {
    console.log(arr[k].Name)
    rows[k] = createData(
        arr[k].Name,
        arr[k].Branch,
        arr[k].RollNo,
        arr[k].Email,
        arr[k].SSC,
        arr[k].HSC,
        arr[k].BTECHAGGREGATE
    );
    }
console.log("Name", rows)




function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}


function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'Branch', numeric: true, disablePadding: false, label: 'Branch' },
    { id: 'RollNumber', numeric: true, disablePadding: false, label: 'RollNumber' },
    { id: 'Email', numeric: true, disablePadding: false, label: 'Email' },
    { id: 'HSS', numeric: true, disablePadding: false, label: 'HSS' },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = props;

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>
                {headCells.map(headCell => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >

                        {headCell.label}


                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}));

const EnhancedTableToolbar = props => {
    const classes = useToolbarStyles();
    const { numSelected } = props;

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1">
                    {numSelected} selected
        </Typography>
            ) : (
                    <Typography className={classes.title} variant="h6" id="tableTitle">
                        Student Detail
        </Typography>
                )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    }
}));

export default function EnhancedTable(props) {
    var Student = localStorage.getItem("studentDetail")
var arr = JSON.parse(Student)
const rows = [];

for (var k in arr) {
    console.log(arr[k].Name)
    rows[k] = createData(
        arr[k].Name,
        arr[k].Branch,
        arr[k].RollNo,
        arr[k].Email,
        arr[k].SSC,
        arr[k].HSC,
        arr[k].BTECHAGGREGATE
    );
}
    
    


    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy] = React.useState('Branch');
    const[exp]=React.useState([])
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    function Submit() {
        if (CName === undefined || Placed === undefined)
            alert("Field Cant be Empty")
        else {
            var year = Placed.slice(0, 4)
            const data = {
                RollNo: selected,
                year: year,
                CName: CName

            }

         //   axios.post("http://localhost:3010/ViewStudentDetail", { CName, Placed, selectedList, year })
            axios.post("http://localhost:3010/PlacementDetails", data)
            axios.post("http://localhost:3010/AddToYear", data)
                // axios.post("http://localhost:3010/AddToPlaced",data)
                 .then(
                    alert("Added to place"),
                 props.history.push('/HomeAdmin')
                )
            console.log("submit", CName, Placed, selectedList, year)
        }

    }


    const handleSelectAllClick = event => {
        if (event.target.checked) {
            const newSelecteds = rows.map(n => n.RollNumber);
            setSelected(newSelecteds);
            RowsExport=rows
            return;
        }
        setSelected([]);
        RowsExport=[];
    };

    const handleClick = (event, row) => {
        RowsExport=RowsExport.concat(row)
        if (selectedIndex === -1) {
            RowsExport=RowsExport.concat(row)
        } else if (selectedIndex === 0)  {
            RowsExport=[]
        }
        console.log("first on click",row)
        let name=row.RollNumber
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        };
        setSelected(newSelected);
        };
    console.log("rows export",exp)
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = event => {
        setDense(event.target.checked);
    };

    const isSelected = name => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    selectedList = selected
    console.log("selected", selected)

    return (


        <div className={classes.root}>
            <Grow in timeout={2000}>
            <Paper className={classes.paper}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            //   order={order}
                            //    orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            //   onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.RollNumber);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            //   hover
                                            onClick={event => handleClick(event, row)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                           
                                            tabIndex={-1}
                                            key={row.RollNumber}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    checked={isItemSelected}
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </TableCell>
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.Branch}</TableCell>
                                            <TableCell align="right">{row.RollNumber}</TableCell>
                                            <TableCell align="right">{row.Email}</TableCell>
                                            <TableCell align="right">{row.HSS}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
           
            </Grow>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            />
            <Button style={{ padding: 12, width: 200, background: '#424242', color: "white" }} type="submit"
                onClick={() => {
                    Addtoplace = 1
                    setOrder()
                }}  >Add to Place Students</Button>
            {/* {setOrder()} */}
            &nbsp;&nbsp;
            <Button onClick={Export} style={{ padding: 12, width: 200, background: '#424242', color: "white" }} type="submit"   >Export the Selected Student</Button>
            {(selected.length !== 0 && Addtoplace === 1) ?

                <div>

                    <TextField style={{ marginLeft: 20, marginTop: 10 }} name="CName" onChange={SetValue} label="Company Name" variant="outlined" />
                    <TextField style={{ marginLeft: 10, marginTop: 10 }} name="Placed" onChange={SetValue} label="Placed On" type="date" variant="outlined" />
                    &nbsp;
                    <Button style={{ marginTop: 20, width: 100, background: '#424242', color: "white" }} onClick={Submit} type="submit">Submit</Button>
                </div> : null}

        </div>
    );
}
