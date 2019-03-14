import React from 'react';
import {AdvancedTable} from 'pivotal-ui/react/table';
import {Icon} from 'pivotal-ui/react/iconography';

export default class ChangeLog extends React.Component {
  render() {
    const columns = [
      {displayName: 'Started', attribute: 'started_at', sortable: true},
      {displayName: 'Finished', attribute: 'finished_at', sortable: true},
      {displayName: 'User', attribute: 'user_name', width: '9%'},
      {
        displayName: 'Result',
        className: 'installation-result',
        renderTdChildren: ({status}) => {
          const color = status === 'failed' ? 'red' : 'green';
          const icon = status === 'failed' ? 'error' : 'check_circle';
          return <div><Icon src={icon} style={{fill: color}}/>{status}</div>;
        }
      },
      {displayName: 'Added', attribute: 'additions', ellipsis: true},
      {displayName: 'Updated', attribute: 'updates', ellipsis: true},
      {displayName: 'Deleted', attribute: 'deletions', ellipsis: true},
      {displayName: 'Unchanged', attribute: 'unchanged', ellipsis: true},
      {displayName: 'Log', attribute: 'id'},
    ];

    const data = [
      {
        additions: "Ops Manager: Example Product service-broker 1.0-build.0",
        deletions: "Ops Manager: Example Product 2.5-committed.20181218.145035-stemcell.170.0",
        finished_at: "2019-01-09 19:07:12 UTC",
        started_at: "2019-01-09 19:00:41 UTC",
        status: "success",
        unchanged: "BOSH Director 2.5-build.75",
        updates: "",
        user_name: "admin"
      },
      {
        additions: "Ops Manager: Example Product vmtypes 1.0-build.0",
        deletions: "Ops Manager: Example Product service-broker 1.0-build.0",
        finished_at: "2019-01-09 18:57:29 UTC",
        started_at: "2019-01-09 18:35:55 UTC",
        status: "failed",
        unchanged: "BOSH Director 2.5-build.75",
        updates: "Ops Manager: Example Product 2.5-committed.20181218.145035-stemcell.170.0",
        user_name: "admin"
      }
    ];

    const rowDrawer = (i, rowDatum) => (
      <div className="table-drawer">
        <div className="table-drawer-content">
          <div className="table-drawer-container phxl">
            {rowDatum.additions}
          </div>
        </div>
      </div>
    );

    return (
      <AdvancedTable columns={columns} data={data} rowDrawer={rowDrawer}/>
    );
  }
}