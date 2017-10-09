import * as React from 'react';
import {app, AppProps} from '../app';

interface Props extends AppProps {
}

class Index extends React.Component<Props> {

    render() {
        return (
            <div>Hello world</div>
        );
    }
}

export default app(Index);
