// babel
require('@babel/register')({
    extensions: [
        '.ts',
        '.tsx',
        '.js',
        '.jsx'
    ],
    presets: [
        "@babel/preset-typescript",
        "@babel/preset-react",
        "@babel/preset-env"
    ],
    plugins: [
        "@babel/transform-runtime"
    ]
});

// dom
const enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

const {
    JSDOM
} = require('jsdom');
const jsdom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
    url: 'http://finanzen.check24.de/accounts/ga-daf/',
    features: {
        QuerySelector: true,
        QuerySelectorAll: true
    }
});

const {
    window
} = jsdom;

enzyme.configure({
    adapter: new EnzymeAdapter()
});

window.matchMedia = window.matchMedia ||
    function () {
        return {
            matches: false,
            addListener() {
            },
            removeListener() {
            }
        };
    };

function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === 'undefined')
        .reduce((result, prop) => ({
            ...result,
            [prop]: Object.getOwnPropertyDescriptor(src, prop)
        }), {});
    Object.defineProperties(target, props);
}

class ResizeObserver {
    constructor(callback) {
        this.callback = callback;
    }

    observe(element) {
        const entries = [
            {
                contentRect: {
                    height: element.offsetHeight
                }
            }
        ];
        this.callback(entries);
    }
}

// @ts-ignore
window.ResizeObserver = ResizeObserver;

global.window = window;
global.document = window.document;
global.dom = jsdom;
global.navigator = {
    userAgent: 'node.js'
};

window.scrollTo = options => options;

copyProps(window, global);

// axios
const axios = require('axios');
axios.defaults.adapter = require('axios/lib/adapters/http');
