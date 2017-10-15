import * as React from 'react';

interface Props {
    readonly value: string;
    readonly onChange: (text: string) => void;
}

export const InputText: React.SFC<Props> = ({value, onChange}) => {

    const handleOnChange = (e: any) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <textarea cols={60} rows={4} value={value} onChange={handleOnChange}/>
        </div>
    );
};
