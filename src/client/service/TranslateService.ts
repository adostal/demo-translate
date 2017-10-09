import * as fetch from 'isomorphic-fetch';
import {TranslateRequestModel, TranslateResponseModel} from '../../shared/model';

export const TranslateService = {

    translate: async ({baseUrl, q, from, to}: TranslateRequestModel): Promise<TranslateResponseModel> => {
        return fetch(`${baseUrl}/translate`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({q, from, to}),
        }).then((res) => res.json());
    },
};
