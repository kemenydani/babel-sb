import * as React from "react";

export default function (props): JSX.Element {
    if (props.x) {
        return (<span>Foo</span>)
    }
    return (<div>Foo</div>)
}
