import React, { Component } from 'react';
import { getCategories } from '../../api/data'

class Init extends Component {
    state = {

    }

    async componentDidMount() {
        const categories = await getCategories();
        
    }

    render() {

    }
}

export default Init;