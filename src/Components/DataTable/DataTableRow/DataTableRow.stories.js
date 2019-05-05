import React from 'react';

import { DataTable, DataTableCell, DataTableRow } from '../../..';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  checkedOne: false,
  checkedTwo: false,
  checkedThree: false,
});

export default storiesOf('Components|Data Table/Row', module)
  .addParameters({ jest: ['DataTableRow'] })

  .add('Row', () => (
    <Container>
      <Header title={'DataTable Row'} />
      <DataTable>
        <DataTableRow>
          <DataTableCell text={'Desert'} type={'header'} borderRight flex={2} />
          <DataTableCell text={'Calories'} type={'header'} right />
          <DataTableCell text={'Fat (g)'} type={'header'} right />
          <DataTableCell text={'Carbs (g)'} type={'header'} right />
          <DataTableCell text={'Protein (g)'} type={'header'} right />
        </DataTableRow>
        <DataTableRow>
          <DataTableCell text={'Frozen yogurt'} borderRight flex={2} />
          <DataTableCell text={'159'} right />
          <DataTableCell text={'6.0'} right />
          <DataTableCell text={'24'} right />
          <DataTableCell text={'4'} right />
        </DataTableRow>
        <DataTableRow>
          <DataTableCell text={'Ice Cream Sandwich'} borderRight flex={2} />
          <DataTableCell text={'237'} right />
          <DataTableCell text={'9.0'} right />
          <DataTableCell text={'37'} right />
          <DataTableCell text={'4.3'} right />
        </DataTableRow>
        <DataTableRow>
          <DataTableCell text={'Eclair'} borderRight flex={2} />
          <DataTableCell text={'262'} right />
          <DataTableCell text={'16.0'} right />
          <DataTableCell text={'24'} right />
          <DataTableCell text={'6.0'} right />
        </DataTableRow>
      </DataTable>
    </Container>
  ))
  .add('with checkbox', () => (
    <Container>
      <Header title={'DataTable Row'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <DataTable>
            <DataTableRow>
              <DataTableCell
                text={'Desert'}
                type={'header'}
                borderRight
                flex={2}
              />
              <DataTableCell text={'Calories'} type={'header'} right />
              <DataTableCell text={'Fat (g)'} type={'header'} right />
              <DataTableCell text={'Carbs (g)'} type={'header'} right />
              <DataTableCell text={'Protein (g)'} type={'header'} right />
            </DataTableRow>
            <DataTableRow
              showcheckBox
              selected={state.checkedOne}
              onPressCheckBox={() =>
                store.set({ checkedOne: !state.checkedOne })
              }>
              <DataTableCell text={'Frozen yogurt'} borderRight flex={2} />
              <DataTableCell text={'159'} right />
              <DataTableCell text={'6.0'} right />
              <DataTableCell text={'24'} right />
              <DataTableCell text={'4'} right />
            </DataTableRow>
            <DataTableRow
              showcheckBox
              selected={state.checkedTwo}
              onPressCheckBox={() =>
                store.set({ checkedTwo: !state.checkedTwo })
              }>
              <DataTableCell text={'Ice Cream Sandwich'} borderRight flex={2} />
              <DataTableCell text={'237'} right />
              <DataTableCell text={'9.0'} right />
              <DataTableCell text={'37'} right />
              <DataTableCell text={'4.3'} right />
            </DataTableRow>
            <DataTableRow
              showcheckBox
              selected={state.checkedThree}
              onPressCheckBox={() =>
                store.set({ checkedThree: !state.checkedThree })
              }>
              <DataTableCell text={'Eclair'} borderRight flex={2} />
              <DataTableCell text={'262'} right />
              <DataTableCell text={'16.0'} right />
              <DataTableCell text={'24'} right />
              <DataTableCell text={'6.0'} right />
            </DataTableRow>
          </DataTable>
        )}
      </State>
    </Container>
  ))
  .add('selected', () => (
    <Container>
      <Header title={'DataTable Row'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <DataTable>
            <DataTableRow>
              <DataTableCell
                text={'Desert'}
                type={'header'}
                borderRight
                flex={2}
              />
              <DataTableCell text={'Calories'} type={'header'} right />
              <DataTableCell text={'Fat (g)'} type={'header'} right />
              <DataTableCell text={'Carbs (g)'} type={'header'} right />
              <DataTableCell text={'Protein (g)'} type={'header'} right />
            </DataTableRow>
            <DataTableRow
              selected={state.checkedOne}
              onPress={() => store.set({ checkedOne: !state.checkedOne })}>
              <DataTableCell text={'Frozen yogurt'} borderRight flex={2} />
              <DataTableCell text={'159'} right />
              <DataTableCell text={'6.0'} right />
              <DataTableCell text={'24'} right />
              <DataTableCell text={'4'} right />
            </DataTableRow>
            <DataTableRow
              selected={state.checkedTwo}
              onPress={() => store.set({ checkedTwo: !state.checkedTwo })}>
              <DataTableCell text={'Ice Cream Sandwich'} borderRight flex={2} />
              <DataTableCell text={'237'} right />
              <DataTableCell text={'9.0'} right />
              <DataTableCell text={'37'} right />
              <DataTableCell text={'4.3'} right />
            </DataTableRow>
            <DataTableRow
              selected={state.checkedThree}
              onPress={() => store.set({ checkedThree: !state.checkedThree })}>
              <DataTableCell text={'Eclair'} borderRight flex={2} />
              <DataTableCell text={'262'} right />
              <DataTableCell text={'16.0'} right />
              <DataTableCell text={'24'} right />
              <DataTableCell text={'6.0'} right />
            </DataTableRow>
          </DataTable>
        )}
      </State>
    </Container>
  ));
