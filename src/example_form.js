import React from 'react';
import {Form} from 'pivotal-ui/react/forms';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import {Checkbox} from 'pivotal-ui/react/checkbox';
import {ExpanderContent} from 'pivotal-ui/react/expander';
import {PrimaryButton} from 'pivotal-ui/react/buttons';

export default class ExampleForm extends React.Component {
  render() {
    return (
      <Form {...{
        onSubmit: ({state: {current}}) => {alert('you have submitted:', current)},
        fields: {
          instances: {
            initialValue: 3,
            label: 'Instance count',
            help: 'How many instances do you want?',
            validator: currentValue => currentValue > 10 ? 'Cannot allow more than 10 instances' : null
          },
          includeStemcell: {
            inline: true,
            labelPosition: 'after',
            label: 'Include stemcell',
            children: <Checkbox />
          },
          stemcell: {
            label: 'Stemcell',
            initialValue: 'xenial 170',
            children: (
              <select>`
                <option value="xenial 171">xenial 171</option>
                <option value="xenial 172">xenial 172</option>
              </select>
            )}
        }
      }}>
        {({fields, state}) => {
          return (
            <Grid>
              <FlexCol fixed>{fields.instances}</FlexCol>
              <FlexCol fixed>{fields.includeStemcell}</FlexCol>
              <ExpanderContent {...{expanded: state.current.includeStemcell, delay: 200}}>
                {fields.stemcell}
              </ExpanderContent>
              <PrimaryButton type="submit">Save</PrimaryButton>
            </Grid>
          );
        }}
      </Form>
    );
  }
}