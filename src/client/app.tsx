import * as React from 'react';

export interface AppProps {
    readonly baseUrl: string;
}

export const app = (ComposedComponent: any) => {

    return class InnerClass extends React.Component {

        static async getInitialProps(context: any) {
            const props = {baseUrl: context.req ? `${context.req.protocol}://${context.req.get('Host')}` : ''};
            if (typeof ComposedComponent.getInitialProps === 'function') {
                return {...props, ...(await ComposedComponent.getInitialProps(context))};
            }
            return props;
        }

        render() {
            return (<ComposedComponent {...this.props}/>);
        }
    };

};
