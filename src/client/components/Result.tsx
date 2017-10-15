import * as React from 'react';

interface Props {
    readonly waiting: boolean;
}

export const Result: React.SFC<Props> = ({children, waiting}) => {
    return (
        <div>
            <p>{waiting ? 'Cekejte prosim...' : children}</p>
        </div>

    );
};
