import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ConnectedComponent, { TodoList } from '../TodoList';
import { reduxHelper } from '../reduxHelper';
const initialState = { items: [] }

describe(<TodoList />, () => {

  describe('render', () => {
    let component;
    beforeEach( () => {
      const tree = reduxHelper(ConnectedComponent, initialState).component
      component = mount(tree);
    });

    it('matches snapshot', () => {
      expect(toJson(component)).toMatchSnapshot();
    })
  })

  describe('functionality', () => {
    let component;
    const expected = 'Hello World';
    beforeEach( () => {
      component = mount(<TodoList />)
      let input = component.find('input');
      input.simulate('focus');
      input.simulate('change',
        { target: { name: 'name', value: expected }}
      )
    });

    it('submits the form', () => {
      expect(component.state('items').length).toEqual(0)
      component.find('form').simulate('submit');
      expect(component.state('items').length).toEqual(1)
    })

    it('updates state on change', () => {
      const actual = component.state('name')
      expect(actual).toEqual(expected)
    })


  })

})
