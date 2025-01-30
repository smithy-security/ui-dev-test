export interface Cre {
    ID: string;
    Name: string;
    Tags: {
        [key: string]: any;
    };
    Url: string;
    [key: string]: any;
}

export const CresMock: Cre[] = [
    {
        'ID': '8acd3975-3890-4ad1-8a22-cb62dab13332',
        'Name': 'golang-workflow-612347',
        'Tags': {
            'languages': '["Go", "Makefile"]',
            'reference': 'master',
            'repo': 'https://github.com/pkg/errors.git',
            'suggester': 'git',
            'target': 'https://github.com/pkg/errors.git',
        },
        'Url': 'https://github.com/pkg/errors.git',
    },
    {
        'ID': '82cd3975-3890-4ad1-8a22-cb62dab13332',
        'Name': 'test',
        'Tags': {
            'languages': '["Go", "Makefile"]',
            'reference': 'master',
            'repo': 'https://github.com/pkg/errors.git',
            'suggester': 'git',
            'target': 'https://github.com/pkg/errors.git',
        },
        'Url': 'https://github.com/pkg/errors.git',
    },
];
