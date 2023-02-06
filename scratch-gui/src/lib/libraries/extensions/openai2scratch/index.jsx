import React from 'react';
import {FormattedMessage} from 'react-intl';

import openai2scratchIconURL from './openai2scratch.png';
import openai2scratchInsetIconURL from './openai2scratch-small.png';

const translationMap = {
    'ja': {
        'gui.extension.openai2scratch.description': 'OpenAI APIを使い、送ったテキストに対する返答を得る。'
    },
    'ja-Hira': {
        'gui.extension.openai2scratch.description': 'OpenAI APIをつかい、おくったテキストにたいするへんとうをえる。'
    }
};

const entry = {
    name: 'OpenAI2Scratch',
    extensionId: 'openai2scratch',
    extensionURL: 'https://champierre.github.io/openai2scratch/openai2scratch.mjs',
    collaborator: 'champierre',
    iconURL: openai2scratchIconURL,
    insetIconURL: openai2scratchInsetIconURL,
    description: (
        <FormattedMessage
            defaultMessage="OpenAI2Scratch Blocks."
            description="Description for OpenAI2Scratch Blocks."
            id="gui.extension.openai2scratch.description"
        />
    ),
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: true,
    helpLink: 'https://github.com/champierre/openai2scratch/',
    translationMap: translationMap
};

export {entry}; // loadable-extension needs this line.
export default entry;
