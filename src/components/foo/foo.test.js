import {expect} from 'chai';
import {mount} from "enzyme";
import * as React from "react";
import Foo from "./Foo";

describe('testcase', () => {
    it('should run', () => {
        expect(1).to.equal(1);
    });

    it('should render foo', () => {
        const wrapper = mount(<Foo />)
        expect(wrapper.find(Foo).length).to.equal(1);
    });
});
