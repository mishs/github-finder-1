import React from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import { withStyles } from "@material-ui/core";

const style = {
  ResultsTable: {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: '400',
    lineHeight: '1.42857',
    textRendering: 'optimizeLegibility',
    width: '100%',
    height: '100%'
  }
}

const columns = [
  {
    name: "Avatar",
    cell: row => <img src={row.avatar_url} width="40" alt= ""/>,
    sortable: false
  },
  {
    name: "Login",
    selector: "login",
    sortable: true
  },
  {
    name: "Type",
    selector: "type",
    sortable: true,
    right: true
  }
];

const ResultsTable = (props) => {
  const { classes } = props
  return (
    <div className={classes.ResultsTable}>
      <Card>
        <DataTable
          title="Users"
          columns={columns}
          data={props.users}
          defaultSortField="title"
          sortIcon={<SortIcon />}
          pagination
        />
      </Card>
    </div>
  );
}

export default  withStyles(style)(ResultsTable);
