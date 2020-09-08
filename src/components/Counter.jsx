import React, {Component} from "react";

export default class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        margin: 5
    };

    render() {
        return (
            <div>
                <span style={this.styles} className={this.getLabelClasses()}>{this.formatCount()}</span>
                <button style={this.styles} className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                </ul>
            </div>
        );
    }

    getLabelClasses() {
        let classes = "label label-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : this.state.count;
    }
}