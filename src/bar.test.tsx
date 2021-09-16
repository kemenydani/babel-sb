import {expect} from 'chai';
import {mount} from "enzyme";
import * as React from "react";
import Foo from './components/Foo'

// @ts-ignore
describe('bar testcase', () => {
    // @ts-ignore
    it('should run', () => {
        const foo: number = 1;
        expect(foo).to.equal(1);
    });

    it('should render foo', () => {
        const wrapper = mount(<Foo />)
        expect(wrapper.find(Foo).length).to.equal(1);
    });
});
