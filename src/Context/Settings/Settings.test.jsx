import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import SettingProvider from '.';
import SettingProvider, { SettingContext } from '.';

describe('Setting Context', () => {
  test('provide initial state', () => {
    render(<SettingProvider>
      <SettingContext.Consumer>
        {
          ({ incomplete }) => {
            return (
              <>
                <h1 >To Do List: {incomplete} items pending</h1>
              </>
            )
          }
        }
      </SettingContext.Consumer>
    </SettingProvider>
    );

    const h3 = screen.getByTestId('todo-h1');
    expect(h3).toHaveTextContent('To Do List: 1 items pending')

  }); 

});
