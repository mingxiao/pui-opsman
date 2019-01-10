import React, {Component, Fragment} from 'react';
import './App.css';
import {Siteframe} from 'pivotal-ui/react/siteframe';
import {Icon} from 'pivotal-ui/react/iconography';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import {PrimaryButton, DefaultButton} from 'pivotal-ui/react/buttons';
import 'pivotal-ui/css/colors';
import ChangeLog from './changelog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Siteframe {...{
          headerProps: {
            logo: <div className="ptl pbl pll" style={{fontSize: '40px'}}><Icon src="pivotal_p"
                                                                                style={{fill: 'currentColor'}}/></div>,
            companyName: 'PCF',
            productName: 'Ops Manager'
          },
        }}>
          <Fragment>
            <Grid className="page">
              <FlexCol className="paxxl bg-neutral-8" fixed><PrimaryButton>Import a Product</PrimaryButton></FlexCol>
              <FlexCol>
                <Grid justifyContent="space-between">
                  <FlexCol fixed>
                    <div className="h2">Installation Dashboard</div>
                  </FlexCol>
                  <FlexCol fixed><DefaultButton flat icon={<Icon src="refresh"/>}>Revert</DefaultButton></FlexCol>
                </Grid>
              </FlexCol>
              <FlexCol fixed><PrimaryButton>Review Pending Changes</PrimaryButton></FlexCol>
            </Grid>
            <ChangeLog/>
          </Fragment>
        </Siteframe>
      </div>
    );
  }
}

export default App;
