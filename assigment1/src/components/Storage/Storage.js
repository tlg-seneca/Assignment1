import React, { Component } from 'react';

import Table from '../Table/Table';

class Storage extends Component {
    render() {
        return (
            <div>
               {
                   /*
                    Data to be sent o Table.js - unable to...
                    Value from counter: {this.props.counterValue}
                    Value from form: {this.props.formValue}
                    */
                } { this.props.counterValue}
                    {this.props.formValue}

               {/* <Table value1={this.props.counterValue} value2={this.props.formValue}/> */}
            </div>
        );
    }
}

export default Storage;