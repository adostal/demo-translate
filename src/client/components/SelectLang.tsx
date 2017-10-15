import * as React from 'react';

interface Props {
    readonly title: string;
    readonly value: string;
    readonly onClickChange: (value: string) => void;
}

export const SelectLang: React.SFC<Props> = ({title, value, onClickChange}) => {

    const handleOnChange = (e: any) => {
        onClickChange(e.target.value);
    };

    return (
        <div>
            {title}
            <select value={value} onChange={handleOnChange}>
                <option value={'cs'}>Cestina</option>
                <option value={'en'}>Anglictina</option>
                <option value={'de'}>Nemcina</option>
            </select>
        </div>
    );
};
