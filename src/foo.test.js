import {expect} from 'chai';
import {mount} from "enzyme";
import Bar from "./components/Bar";
import * as React from "react";

describe('testcase', () => {
    it('should run', () => {
        expect(1).to.equal(1);
    });

    it('should render bar', () => {
        const wrapper = mount(<Bar />)
        expect(wrapper.find(Bar).length).to.equal(1);
    });
});
