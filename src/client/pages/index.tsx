import * as React from 'react';
import {app, AppProps} from '../app';
import {TranslateService} from '../service/TranslateService';
import {Title} from '../components/Title';
import {SelectLang} from '../components/SelectLang';
import {InputText} from '../components/InputText';
import {Button} from '../components/Button';
import {Result} from '../components/Result';

interface Props extends AppProps {
}

interface State {
    readonly from: string;
    readonly to: string;
    readonly q: string;
    readonly resultText?: string;
    readonly waiting: boolean;
}

class Index extends React.Component<Props, State> {

    constructor(props: Props, context: any) {
        super(props, context);
        this.state = {
            from: 'cs',
            to: 'en',
            q: 'Ahoj svete',
            waiting: false,
        };
    }

    handleOnChangeFrom = (from: string): void => {
        this.setState({from});
    };

    handleOnChangeTo = (to: string): void => {
        this.setState({to});
    };

    handleOnChangeText = (q: string): void => {
        this.setState({q});
    };

    handleOnClickTranslate = () => {
        const {baseUrl} = this.props;
        const {q, from, to} = this.state;
        this.setState({waiting: true});
        setTimeout(() => {
            TranslateService.translate({baseUrl, q, from, to}).then((result) => {
                this.setState({resultText: result.text, waiting: false});
            }).catch((err) => {
                this.setState({resultText: undefined, waiting: false});
                alert(`Doslo k chybe: ${err.message}`);
            });
        }, 1000);
    };

    render() {
        const {from, to, q, resultText, waiting} = this.state;
        return (
            <div>
                <Title>DEMO translate</Title>

                <SelectLang title={'Z jazyka'} value={from} onClickChange={this.handleOnChangeFrom}/>

                <SelectLang title={'Do jazyka'} value={to} onClickChange={this.handleOnChangeTo}/>

                <InputText value={q} onChange={this.handleOnChangeText}/>

                <div>
                    <Button onClick={this.handleOnClickTranslate} disabled={!q || waiting}>
                        Preloz mi to
                    </Button>
                </div>

                <Result waiting={waiting}>{resultText}</Result>

                <div>
                    <h2>Co je ve state?</h2>
                    <pre>{JSON.stringify(this.state)}</pre>
                </div>

            </div>
        );
    }
}

export default app(Index);
