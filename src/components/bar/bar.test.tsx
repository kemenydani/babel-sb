import {expect} from 'chai';
import {mount} from "enzyme";
import * as React from "react";
import Bar from "./Bar";

// @ts-ignore
describe('bar testcase', () => {
    // @ts-ignore
    it('should run', () => {
        const bar: number = 1;
        expect(bar).to.equal(1);
    });

    it('should render bar', () => {
        const wrapper = mount(<Bar />)
        expect(wrapper.find(Bar).length).to.equal(1);
    });
});
