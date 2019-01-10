import React from 'react';
import {AdvancedTable} from 'pivotal-ui/react/table';

export default class ChangeLog extends React.Component {
  render() {
    const columns = [
      {displayName: 'Started', attribute: 'started_at', width: '10%', sortable: true},
      {displayName: 'Finished', attribute: 'finished_at', width: '10%', sortable: true},
      {displayName: 'User', attribute: 'user_name', width: '9%'},
      {
        displayName: 'Result',
        width: '10%',
        className: 'installation-result',
        renderTdChildren: ({status}) => {
          const backgroundColor = status === 'failed' ? 'red' : 'green';
          return <div style={{backgroundColor}}>{status}</div>;
        }
      },
      {displayName: 'Added', attribute: 'additions', width: '14%'},
      {displayName: 'Updated', attribute: 'updates', width: '14%'},
      {displayName: 'Deleted', attribute: 'deletions', width: '14%'},
      {displayName: 'Unchanged', attribute: 'unchanged', width: '14%'},
      {displayName: 'Log', attribute: 'id', width: '5%'},
    ];

    const data = JSON.parse('[{"started_at":"2019-01-09 19:00:41 UTC","finished_at":"2019-01-09 19:07:12 UTC","user_name":"admin","status":"success","additions":"Ops Manager: Example Product service-broker 1.0-build.0\\nOps Manager: Example Product 2.5-committed.20181218.145035-stemcell.170.0","updates":"","deletions":"","unchanged":"BOSH Director 2.5-build.75"},{"started_at":"2019-01-09 18:35:55 UTC","finished_at":"2019-01-09 18:57:29 UTC","user_name":"admin","status":"failed","additions":"BOSH Director 2.5-build.75\\nOps Manager: Example Product vmtypes 1.0-build.0\\nOps Manager: Example Product service-broker 1.0-build.0\\nOps Manager: Example Product 2.5-committed.20181218.145035-stemcell.170.0","updates":"","deletions":"","unchanged":""}]');

    console.log(data)
    return (
      <AdvancedTable columns={columns} data={data}/>
    );
  }
}