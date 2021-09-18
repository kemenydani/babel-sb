import * as React from "react";

export default function (props) {
    if (props.x) {
        return (<span>Foo</span>)
    }
    return (<div>Foo</div>)
}
