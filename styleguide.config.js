const path = require('path');

module.exports = {
    title: 'BREW',
    require: [
        //path.join(__dirname, 'src/brew.css')
    ],
    sections: [{
        name: 'Introduction',
        content: 'docs/01-introduction.md',
        sections: [{
            name: 'Installation',
            content: 'docs/02-installation.md'
        }, {
            name: 'Configuration',
            content: 'docs/03-configuration.md'
        }]
    }, {
        name: 'Components',
        content: 'docs/04-components.md'
    }],
    showCode: true
};
