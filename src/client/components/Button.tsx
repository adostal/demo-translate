interface Props {
    readonly onClick: () => void;
    readonly disabled: boolean;
}

export const Button: React.SFC<Props> = ({children, onClick, disabled}) => {

    return (
        <button onClick={onClick} disabled={disabled}>{children}</button>
    );
};
