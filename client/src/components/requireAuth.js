import { Component } from "react";
import { connect } from "react-redux";

export default (ChildComponent) => {
    class ComposedComponent extends Component {
    componentDidMount() {
        this.shouldNavigateAway();
    }

    componentDidUpdate() {
        this.shouldNavigateAway();
    }

    shouldNavigateAway() {
        if(!this.props.auth) {
            console.log('I NEED TO LEAVE')
        }
    }
        render() {
            return <ChildComponent {...this.props}/>
        }
    }

    function mapStateToProps(state) {
        return { auth: state.auth.authenticated }
    }

    return connect(mapStateToProps)(ComposedComponent);
}