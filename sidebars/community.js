// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    community: [
        'intro',
        'mission',
        'roadmap',
        {
            label: 'Development',
            type: 'category',
            items: [
                {
                    type: 'doc',
                    id: 'development/process/index',
                    label: 'Process',
                },
                {
                    label: 'Tracker',
                    type: 'category',
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'development/tracker',
                        },
                    ],
                },
                {
                    label: 'Meetings',
                    type: 'category',
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'development/meetings',
                        },
                    ],
                    link: {
                        type: 'doc',
                        id: 'development/meetings',
                    },
                },
            ],
        },
        {
            label: 'Policies',
            type: 'category',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'policies',
                },
            ],
        },
        'research',
    ],
};

module.exports = sidebars;
