import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PureComponent} from "react";

window.PureComponent = PureComponent;

window.React = require(`react`);
window.PropTypes = require(`prop-types`);
window.renderer = require(`react-test-renderer`);
window.shallow = Enzyme.shallow;

Enzyme.configure({adapter: new Adapter()});
