import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Styles from './Table.module.css';
import Storage from '../Storage/Storage';

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createData: (props) => { },
    }
    props = props;
  }
}

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '50%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 350,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name) {
  id += 1;
  return { id, name};
}

const rows = [
  createData('', id),
  createData('', id),
  createData('', id),
  createData('', id),
  createData('', id),
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <div className={Styles.table}>
      <Paper className={classes.root}>
          
          <Table className={classes.table}>
              <TableHead>
                  <TableRow>
                      <CustomTableCell>Dessert (100g serving)</CustomTableCell>
                      <CustomTableCell align="right">Calories</CustomTableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
              {rows.map(row => (
                  <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell component="th" scope="row">
                      {row.name}
                  </CustomTableCell>
                  <CustomTableCell align="right">{row.calories}</CustomTableCell>
                  </TableRow>
              ))}
              </TableBody>
          </Table>
      </Paper> <Storage value={props.counterValue} />
    </div>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);