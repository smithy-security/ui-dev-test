export interface Cre {
    ID: string;
    Name: string;
    Tags: {
        name: string;
        link: string;
    }[];
    Url: string;
    CreatedAt: string;
}

export const CresMock: Cre[] = [
    {
        'ID': '312-897',
        'Name': 'Access Control',
        'Tags': [
            {
                'name': 'NIST 800-53 v5',
                'link': 'https://csrc.nist.gov/Projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=AC-3',
            },
        ],
        'Url': 'https://opencre.org/cre/312-897',
        'CreatedAt': '2025-01-30T17:00:01+00:00',
    },
    {
        'ID': '654-342',
        'Name': 'Authentication Mechanisms',
        'Tags': [
            {
                'name': 'OWASP Top 10 2021',
                'link': 'https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/',
            },
            {
                'name': 'ISO 27001',
                'link': 'https://www.iso.org/standard/27001',
            },
        ],
        'Url': 'https://opencre.org/cre/654-342',
        'CreatedAt': '2025-01-29T14:45:22+00:00',
    },
    {
        'ID': '875-124',
        'Name': 'Least Privilege',
        'Tags': [
            {
                'name': 'NIST 800-53 v5',
                'link': 'https://csrc.nist.gov/Projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=AC-6',
            },
            {
                'name': 'ISO 27001',
                'link': 'https://www.iso.org/standard/27001',
            },
        ],
        'Url': 'https://opencre.org/cre/875-124',
        'CreatedAt': '2025-01-28T13:10:45+00:00',
    },
    {
        'ID': '721-549',
        'Name': 'Threat Modeling',
        'Tags': [
            {
                'name': 'OWASP Top 10 2021',
                'link': 'https://owasp.org/www-project-threat-modeling/',
            },
        ],
        'Url': 'https://opencre.org/cre/721-549',
        'CreatedAt': '2025-01-27T12:30:17+00:00',
    },
    {
        'ID': '946-321',
        'Name': 'Security Logging and Monitoring',
        'Tags': [
            {
                'name': 'NIST 800-53 v5',
                'link': 'https://csrc.nist.gov/Projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=AU-6',
            },
            {
                'name': 'OWASP Top 10 2021',
                'link': 'https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/',
            },
        ],
        'Url': 'https://opencre.org/cre/946-321',
        'CreatedAt': '2025-01-26T10:50:30+00:00',
    },
    {
        'ID': '485-745',
        'Name': 'Secure API Design',
        'Tags': [
            {
                'name': 'OWASP API Security',
                'link': 'https://owasp.org/www-project-api-security/',
            },
            {
                'name': 'ISO 27001',
                'link': 'https://www.iso.org/standard/27001',
            },
        ],
        'Url': 'https://opencre.org/cre/485-745',
        'CreatedAt': '2025-01-25T09:40:55+00:00',
    },
    {
        'ID': '698-214',
        'Name': 'Encryption Best Practices',
        'Tags': [
            {
                'name': 'NIST 800-53 v5',
                'link': 'https://csrc.nist.gov/Projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=SC-12',
            },
            {
                'name': 'ISO 27001',
                'link': 'https://www.iso.org/standard/27001',
            },
        ],
        'Url': 'https://opencre.org/cre/698-214',
        'CreatedAt': '2025-01-24T08:20:40+00:00',
    },
    {
        'ID': '369-875',
        'Name': 'Patch Management',
        'Tags': [
            {
                'name': 'OWASP Top 10 2021',
                'link': 'https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/',
            },
        ],
        'Url': 'https://opencre.org/cre/369-875',
        'CreatedAt': '2025-01-23T07:30:28+00:00',
    },
    {
        'ID': '512-496',
        'Name': 'Secure SDLC',
        'Tags': [
            {
                'name': 'ISO 27001',
                'link': 'https://www.iso.org/standard/27001',
            },
        ],
        'Url': 'https://opencre.org/cre/512-496',
        'CreatedAt': '2025-01-22T06:15:12+00:00',
    },
    {
        'ID': '741-365',
        'Name': 'Supply Chain Security',
        'Tags': [
            {
                'name': 'NIST 800-53 v5',
                'link': 'https://csrc.nist.gov/Projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=SA-12',
            },
        ],
        'Url': 'https://opencre.org/cre/741-365',
        'CreatedAt': '2025-01-21T05:05:45+00:00',
    },
    {
        'ID': '651-752',
        'Name': 'Data Protection',
        'Tags': [
            {
                'name': 'ISO 27001',
                'link': 'https://www.iso.org/standard/27001',
            },
            {
                'name': 'NIST 800-53 v5',
                'link': 'https://csrc.nist.gov/Projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=SC-28',
            },
        ],
        'Url': 'https://opencre.org/cre/651-752',
        'CreatedAt': '2025-01-20T04:45:32+00:00',
    },
    {
        'ID': '487-365',
        'Name': 'Network Security',
        'Tags': [
            {
                'name': 'NIST 800-53 v5',
                'link': 'https://csrc.nist.gov/Projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=SC-7',
            },
            {
                'name': 'ISO 27001',
                'link': 'https://www.iso.org/standard/27001',
            },
        ],
        'Url': 'https://opencre.org/cre/487-365',
        'CreatedAt': '2025-01-19T03:30:18+00:00',
    },
    {
        'ID': '991-234',
        'Name': 'Zero Trust Architecture',
        'Tags': [
            {
                'name': 'NIST 800-53 v5',
                'link': 'https://csrc.nist.gov/Projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=AC-4',
            },
            {
                'name': 'ISO 27001',
                'link': 'https://www.iso.org/standard/27001',
            },
        ],
        'Url': 'https://opencre.org/cre/991-234',
        'CreatedAt': '2025-01-30T18:05:12+00:00',
    },
    {
        'ID': '245-678',
        'Name': 'Secure Code Review',
        'Tags': [
            {
                'name': 'OWASP Top 10 2021',
                'link': 'https://owasp.org/Top10/A03_2021-Injection/',
            },
        ],
        'Url': 'https://opencre.org/cre/245-678',
        'CreatedAt': '2025-01-30T18:06:45+00:00',
    },
    {
        'ID': '873-542',
        'Name': 'Endpoint Security',
        'Tags': [
            {
                'name': 'NIST 800-53 v5',
                'link': 'https://csrc.nist.gov/Projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=SI-7',
            },
            {
                'name': 'ISO 27001',
                'link': 'https://www.iso.org/standard/27001',
            },
        ],
        'Url': 'https://opencre.org/cre/873-542',
        'CreatedAt': '2025-01-30T18:07:30+00:00',
    },
    {
        'ID': '365-984',
        'Name': 'Security Awareness Training',
        'Tags': [
            {
                'name': 'ISO 27001',
                'link': 'https://www.iso.org/standard/27001',
            },
        ],
        'Url': 'https://opencre.org/cre/365-984',
        'CreatedAt': '2025-01-30T18:08:10+00:00',
    },
    {
        'ID': '784-213',
        'Name': 'Web Application Firewalls',
        'Tags': [
            {
                'name': 'OWASP Top 10 2021',
                'link': 'https://owasp.org/Top10/A05_2021-Security_Misconfiguration/',
            },
        ],
        'Url': 'https://opencre.org/cre/784-213',
        'CreatedAt': '2025-01-30T18:09:50+00:00',
    },
    {
        'ID': '562-847',
        'Name': 'Cloud Security Posture Management',
        'Tags': [
            {
                'name': 'NIST 800-53 v5',
                'link': 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final',
            },
            {
                'name': 'ISO 27017',
                'link': 'https://www.iso.org/standard/27017',
            },
        ],
        'Url': 'https://opencre.org/cre/562-847',
        'CreatedAt': '2025-01-30T18:11:20+00:00',
    },
    {
        'ID': '632-999',
        'Name': 'Threat Modeling',
        'Tags': [
            {
                'name': 'OWASP Top 10 2021',
                'link': 'https://owasp.org/www-project-threat-modeling/',
            },
        ],
        'Url': 'https://opencre.org/cre/632-999',
        'CreatedAt': '2025-01-30T18:12:45+00:00',
    },
    {
        'ID': '927-111',
        'Name': 'Incident Response Planning',
        'Tags': [
            {
                'name': 'ISO 27035',
                'link': 'https://www.iso.org/standard/27035',
            },
            {
                'name': 'NIST 800-61',
                'link': 'https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final',
            },
        ],
        'Url': 'https://opencre.org/cre/927-111',
        'CreatedAt': '2025-01-30T18:13:30+00:00',
    },
    {
        'ID': '112-345',
        'Name': 'API Security Best Practices',
        'Tags': [
            {
                'name': 'OWASP API Security Top 10',
                'link': 'https://owasp.org/www-project-api-security/',
            },
        ],
        'Url': 'https://opencre.org/cre/112-345',
        'CreatedAt': '2025-01-30T18:14:50+00:00',
    },
    {
        'ID': '990-556',
        'Name': 'Supply Chain Security',
        'Tags': [
            {
                'name': 'NIST 800-161',
                'link': 'https://csrc.nist.gov/publications/detail/sp/800-161/rev-1/final',
            },
            {
                'name': 'ISO 28000',
                'link': 'https://www.iso.org/standard/28000',
            },
        ],
        'Url': 'https://opencre.org/cre/990-556',
        'CreatedAt': '2025-01-30T18:16:10+00:00',
    },
    {
        'ID': '771-224',
        'Name': 'Network Segmentation',
        'Tags': [
            {
                'name': 'NIST 800-53 v5',
                'link': 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final',
            },
            {
                'name': 'ISO 27001',
                'link': 'https://www.iso.org/standard/27001',
            },
        ],
        'Url': 'https://opencre.org/cre/771-224',
        'CreatedAt': '2025-01-30T18:17:30+00:00',
    },
    {
        'ID': '332-876',
        'Name': 'Data Loss Prevention (DLP)',
        'Tags': [
            {
                'name': 'ISO 27001',
                'link': 'https://www.iso.org/standard/27001',
            },
            {
                'name': 'NIST 800-53 v5',
                'link': 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final',
            },
        ],
        'Url': 'https://opencre.org/cre/332-876',
        'CreatedAt': '2025-01-30T18:18:40+00:00',
    },
    {
        'ID': '448-902',
        'Name': 'Multi-Factor Authentication (MFA)',
        'Tags': [
            {
                'name': 'OWASP Top 10 2021',
                'link': 'https://owasp.org/www-project-authentication/',
            },
        ],
        'Url': 'https://opencre.org/cre/448-902',
        'CreatedAt': '2025-01-30T18:19:50+00:00',
    },
    {
        'ID': '509-675',
        'Name': 'Database Security',
        'Tags': [
            {
                'name': 'NIST 800-53 v5',
                'link': 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final',
            },
            {
                'name': 'ISO 27001',
                'link': 'https://www.iso.org/standard/27001',
            },
        ],
        'Url': 'https://opencre.org/cre/509-675',
        'CreatedAt': '2025-01-30T18:20:30+00:00',
    },
    {
        'ID': '619-348',
        'Name': 'Phishing Prevention Strategies',
        'Tags': [
            {
                'name': 'ISO 27035',
                'link': 'https://www.iso.org/standard/27035',
            },
        ],
        'Url': 'https://opencre.org/cre/619-348',
        'CreatedAt': '2025-01-30T18:21:40+00:00',
    },
    {
        'ID': '708-111',
        'Name': 'Privileged Access Management (PAM)',
        'Tags': [
            {
                'name': 'NIST 800-53 v5',
                'link': 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final',
            },
            {
                'name': 'ISO 27001',
                'link': 'https://www.iso.org/standard/27001',
            },
        ],
        'Url': 'https://opencre.org/cre/708-111',
        'CreatedAt': '2025-01-30T18:22:50+00:00',
    },
    {
        'ID': '817-432',
        'Name': 'Security Logging and Monitoring',
        'Tags': [
            {
                'name': 'NIST 800-92',
                'link': 'https://csrc.nist.gov/publications/detail/sp/800-92/final',
            },
        ],
        'Url': 'https://opencre.org/cre/817-432',
        'CreatedAt': '2025-01-30T18:23:50+00:00',
    },
    {
        'ID': '926-555',
        'Name': 'Container Security',
        'Tags': [
            {
                'name': 'OWASP Top 10 2021',
                'link': 'https://owasp.org/www-project-top-ten/',
            },
        ],
        'Url': 'https://opencre.org/cre/926-555',
        'CreatedAt': '2025-01-30T18:24:30+00:00',
    },
    {
        'ID': '103-765',
        'Name': 'Insider Threat Management',
        'Tags': [
            {
                'name': 'ISO 27002',
                'link': 'https://www.iso.org/standard/27002',
            },
        ],
        'Url': 'https://opencre.org/cre/103-765',
        'CreatedAt': '2025-01-30T18:25:50+00:00',
    },
    {
        'ID': '215-889',
        'Name': 'Cryptographic Key Management',
        'Tags': [
            {
                'name': 'NIST 800-57',
                'link': 'https://csrc.nist.gov/publications/detail/sp/800-57-part-1/rev-5/final',
            },
        ],
        'Url': 'https://opencre.org/cre/215-889',
        'CreatedAt': '2025-01-30T18:27:10+00:00',
    },
];
