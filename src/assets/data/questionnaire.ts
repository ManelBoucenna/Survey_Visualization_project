export const questionnaire = [
    {
        id: 1,
        variable: 'IMD2001_2',
        question: 'Age',
        category: 'Multiple choices',
        Options: {
            1: 'YOUNGEST - 24 YEARS',
            2: '25 - 34 YEARS ',
            3: '35 - 44 YEARS',
            4: '45 - 54 YEARS',
            5: '55 - 64 YEARS',
            6: '65 YEARS - OLDER',
            9997: 'VOLUNTEERED: REFUSED',
            9998: 'VOLUNTEERED: DON\'T KNOW',
            9999: 'MISSING'
        },
        answers: ['YOUNGEST - 24 YEARS', '45 - 54 YEARS']
    },
    {
        id: 2,
        variable: 'IMD2002',
        question: 'Gender',
        category: 'Multiple choices',
        Options: {
            1: 'MALE',
            2: 'FEMALE ',
            7: 'VOLUNTEERED: REFUSED',
            8: 'VOLUNTEERED: DON\'T KNOW',
            9: 'MISSING'
        },
        answers: ['MALE', 'MISSING']
    },
    {
        id: 3,
        variable: 'IMD2003',
        question: 'Education',
        category: 'Multiple choices',
        Options: {
            0: 'NONE (NO EDUCATION)/ILLITERATE',
            1: 'PRIMARY EDUCATION/LOWER SECONDARY EDUCATION',
            2: 'HIGHER SECONDARY EDUCATION ',
            3: 'POST-SECONDARY (NON-UNIVERSITY) EDUCATION ',
            4: 'UNIVERSITY EDUCATION',
            6: 'OTHER',
            7: 'VOLUNTEERED: REFUSED',
            8: 'VOLUNTEERED: DON\'T KNOW',
            9: 'MISSING'
        },
        answers: ['MALE', 'MISSING']
    },
    {
        id: 4,
        variable: 'IMD2004',
        question: 'Marital status',
        category: 'Multiple choices',
        Options: {
            1: 'MARRIED OR LIVING TOGETHER AS MARRIED',
            2: 'WIDOWED',
            3: 'DIVORCED OR SEPARATED',
            4: 'SINGLE, NEVER MARRIED',
            5: 'OTHER',
            7: 'VOLUNTEERED: REFUSED',
            8: 'VOLUNTEERED: DON\'T KNOW',
            9: 'MISSING'
        },
        answers: ['WIDOWED', 'DIVORCED OR SEPARATED']
    }, {
        id: 47,
        variable: 'IMD2007',
        question: 'Rural or Urban residence',
        category: 'Multiple choices',
        Options: {
            1: 'Rural area or village',
            2: 'Small r middle-sized town',
            3: 'Suburbs of large town or city',
            4: 'Large town or city',
            7: 'Refused',
            8: 'Don\'t know',
            9: 'Missing'
        }
    },
    {
        id: 5,
        variable: 'IMD2005',
        question: 'Religion',
        category: 'Multiple choices',
        Options: {
            1: 'CATHOLIC',
            2: 'PROTESTANT',
            3: 'ORTHODOX/EASTERN CATHOLIC CHURCHES',
            4: 'OTHER CHRISTIAN',
            5: 'JEWISH',
            6: 'ISLAM - SUNNI',
            7: 'ISLAM - OTHER',
            8: 'BUDDHISM',
            9: 'HINDUISM',
            10: 'INDIGENOUS',
            11: 'ETHNORELIGIONS',
            12: 'NON-BELIEVERS',
            13: 'AGNOSTICS',
            96: 'OTHER: NOT SPECIFIED',
            97: 'VOLUNTEERED: REFUSED',
            98: 'VOLUNTEERED: DON\'T KNOW',
            99: 'MISSING'
        },
        answers: ['ISLAM - SUNNI', 'ISLAM - SUNNI']
    }
    ,
    {
        id: 6,
        variable: 'IMD2006',
        question: 'Household income',
        category: 'Multiple choices',
        Options: {
            1: 'LOWEST HOUSEHOLD INCOME QUINTILE',
            2: 'SECOND HOUSEHOLD INCOME QUINTILE',
            3: 'THIRD HOUSEHOLD INCOME QUINTILE',
            4: 'FOURTH HOUSEHOLD INCOME QUINTILE',
            5: 'HIGHEST HOUSEHOLD INCOME QUINTILE',
            6: 'OTHER',
            7: 'VOLUNTEERED: REFUSED',
            8: 'VOLUNTEERED: DON\'T KNOW',
            9: 'MISSING'
        }
    },
    //     //],
    //   //  "Survey": [
    {
        id: 7,
        variable: 'IMD3001',
        question: 'TURNOUT-MAIN ELECTION',
        category: 'Multiple choices',
        Options: {
            0: 'RESPONDENT DID NOT CAST A BALLOT',
            1: 'RESPONDENT CAST A BALLOT ',
            9999993: 'VOLUNTEERED: RESPONDENT NOT REGISTERED ON ELECTORAL LISTS',
            9999997: 'VOLUNTEERED: REFUSED',
            9999998: 'VOLUNTEERED: DON\'T KNOW',
            9999999: 'MISSING'
        }
    },
    {
        id: 8,
        variable: 'IMD3001_PR_1',
        question: 'TURNOUT-CURRENT PRESIDENTIAL ELECTION-ROUND 1',
        category: 'Multiple choices',
        Options: {
            0: 'RESPONDENT DID NOT CAST A BALLOT',
            1: 'RESPONDENT CAST A BALLOT ',
            9999993: 'VOLUNTEERED: RESPONDENT NOT REGISTERED ON ELECTORAL LISTS',
            9999995: 'NOT APPLICABLE: NO ROLE OF PRESIDENT',
            9999996: 'NOT APPLICABLE: NO PRESIDENTIAL ELECTIONS',
            9999997: 'VOLUNTEERED: REFUSED',
            9999998: 'VOLUNTEERED: DON\'T KNOW',
            9999999: 'MISSING'
        }
    },
    {
        id: 9,
        variable: 'IMD3001_PR_2',
        question: 'TURNOUT-CURRENT PRESIDENTIAL ELECTION-ROUND 2',
        category: 'Multiple choices',
        Options: {
            0: 'RESPONDENT DID NOT CAST A BALLOT',
            1: 'RESPONDENT CAST A BALLOT ',
            9999993: 'VOLUNTEERED: RESPONDENT NOT REGISTERED ON ELECTORAL LISTS',
            9999995: 'NOT APPLICABLE: NO ROLE OF PRESIDENT',
            9999996: 'NOT APPLICABLE: NO PRESIDENTIAL ELECTIONS',
            9999997: 'VOLUNTEERED: REFUSED',
            9999998: 'VOLUNTEERED: DON\'T KNOW',
            9999999: 'MISSING'
        }
    },
    {
        id: 10,
        variable: 'IMD3001_LH',
        question: 'TURNOUT-CURRENT LOWER HOUSE ELECTION',
        category: 'Multiple choices',
        Options: {
            0: 'RESPONDENT DID NOT CAST A BALLOT',
            1: 'RESPONDENT CAST A BALLOT ',
            9999993: 'VOLUNTEERED: RESPONDENT NOT REGISTERED ON ELECTORAL LISTS',
            9999995: 'NOT APPLICABLE: NO ROLE OF PRESIDENT',
            9999996: 'NOT APPLICABLE: NO PRESIDENTIAL ELECTIONS',
            9999997: 'VOLUNTEERED: REFUSED',
            9999998: 'VOLUNTEERED: DON\'T KNOW',
            9999999: 'MISSING'
        }
    },
    {
        id: 11,
        variable: 'IMD3001_UH',
        question: 'TURNOUT-CURRENT UPPER HOUSE ELECTION',
        category: 'Multiple choices',
        Options: {
            0: 'RESPONDENT DID NOT CAST A BALLOT',
            1: 'RESPONDENT CAST A BALLOT ',
            9999993: 'VOLUNTEERED: RESPONDENT NOT REGISTERED ON ELECTORAL LISTS',
            9999995: 'NOT APPLICABLE: NO ROLE OF PRESIDENT',
            9999996: 'NOT APPLICABLE: NO PRESIDENTIAL ELECTIONS',
            9999997: 'VOLUNTEERED: REFUSED',
            9999998: 'VOLUNTEERED: DON\'T KNOW',
            9999999: 'MISSING'
        }
    }, {
        id: 38,
        variable: 'IMD3005_1',
        question: 'PARTY IDENTIFICATION: ARE YOU CLOSE TO ANY POLITICAL PARTY',
        category: 'Multiple choices',
        Options: {
            1: 'YES',
            5: 'NO',
            7: 'REFUSED',
            8: 'DON\'T KNOW',
            9: 'MISSING'
        }
    },
    {
        id: 39,
        variable: 'IMD3005_2',
        question: 'PARTY IDENTIFICATION: DO YOU FEEL CLOSER TO ONE PARTY',
        category: 'Multiple choices',
        Options: {
            1: 'YES',
            5: 'NO',
            7: 'REFUSED',
            8: 'DON\'T KNOW',
            9: 'MISSING'
        }
    },
    {
        id: 46,
        variable: 'IMD3013_3',
        question: 'STATE OF ECONOMY-Worse',
        category: 'Multiple choices',
        Options: {
            2: 'Somewhat worse',
            1: 'Much worse',
            7: 'Refused',
            8: 'Don"t know',
            9: 'Missing'
        }
    },
    {
        id: 37,
        variable: 'IMD3005_4',
        question: 'PARTY IDENTIFICATION: HOW CLOSE',
        category: 'Rating scale',
        Options: {
            1: '3',
            2: '2',
            3: '1',
            7: 'VOLUNTEERED: REFUSED',
            8: 'VOLUNTEERED: DON\'T KNOW',
            9: 'Missing'
        }
    },
    {
        id: 40,
        variable: 'IMD3006',
        question: 'LEFT-RIGHT - SELF',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            95: 0,
            97: -1,
            98: -2,
            99: -3
        }
    },
    {
        id: 41,
        variable: 'IMD3007_A',
        question: 'LEFT-RIGHT-PARTY A',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            95: 0,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    }, {
        id: 41,
        variable: 'IMD3007_B',
        question: 'LEFT-RIGHT-PARTY B',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            95: 0,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    },
    {
        id: 41,
        variable: 'IMD3007_C',
        question: 'LEFT-RIGHT-PARTY C',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            95: 0,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    },
    {
        id: 41,
        variable: 'IMD3007_D',
        question: 'LEFT-RIGHT-PARTY D',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            95: 0,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    },
    {
        id: 41,
        variable: 'IMD3007_E',
        question: 'LEFT-RIGHT-PARTY E',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            95: 0,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    },
    {
        id: 41,
        variable: 'IMD3007_F',
        question: 'LEFT-RIGHT-PARTY F',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            95: 0,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    },
    {
        id: 41,
        variable: 'IMD3007_G',
        question: 'LEFT-RIGHT-PARTY G',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            95: 0,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    },
    {
        id: 41,
        variable: 'IMD3007_H',
        question: 'LEFT-RIGHT-PARTY H',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            95: 0,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    },
    {
        id: 41,
        variable: 'IMD3007_I',
        question: 'LEFT-RIGHT-PARTY I',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            95: 0,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    },
    {
        id: 42,
        variable: 'IMD3008_A',
        question: 'LIKE-DISLIKE-PARTY A',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    },
    {
        id: 42,
        variable: 'IMD3008_B',
        question: 'LIKE-DISLIKE-PARTY B',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    },
    {
        id: 42,
        variable: 'IMD3008_C',
        question: 'LIKE-DISLIKE-PARTY C',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    }, {
        id: 42,
        variable: 'IMD3008_D',
        question: 'LIKE-DISLIKE-PARTY D',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    }, {
        id: 42,
        variable: 'IMD3008_E',
        question: 'LIKE-DISLIKE-PARTY E',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    }, {
        id: 42,
        variable: 'IMD3008_F',
        question: 'LIKE-DISLIKE-PARTY F',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    }, {
        id: 42,
        variable: 'IMD3008_G',
        question: 'LIKE-DISLIKE-PARTY G',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    }, {
        id: 42,
        variable: 'IMD3008_H',
        question: 'LIKE-DISLIKE-PARTY H',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    }, {
        id: 42,
        variable: 'IMD3008_I',
        question: 'LIKE-DISLIKE-PARTY I',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    },
    {
        id: 43,
        variable: 'IMD3009_A',
        question: 'LIKE-DISLIKE-LEADER A',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    },
    {
        id: 43,
        variable: 'IMD3009_B',
        question: 'LIKE-DISLIKE-LEADER B',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    },
    {
        id: 43,
        variable: 'IMD3009_C',
        question: 'LIKE-DISLIKE-LEADER C',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    },
    {
        id: 43,
        variable: 'IMD3009_D',
        question: 'LIKE-DISLIKE-LEADER D',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    },
    {
        id: 43,
        variable: 'IMD3009_E',
        question: 'LIKE-DISLIKE-LEADER E',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    },
    {
        id: 43,
        variable: 'IMD3009_F',
        question: 'LIKE-DISLIKE-LEADER F',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    },
    {
        id: 43,
        variable: 'IMD3009_G',
        question: 'LIKE-DISLIKE-LEADER G',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    },
    {
        id: 43,
        variable: 'IMD3009_H',
        question: 'LIKE-DISLIKE-LEADER H',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    },
    {
        id: 43,
        variable: 'IMD3009_I',
        question: 'LIKE-DISLIKE-LEADER I',
        category: 'Rating scale',
        Options: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            96: -1,
            97: -2,
            98: -3,
            99: -4
        }
    },
    {
        id: 44,
        variable: 'IMD3010',
        question: 'SATISFACTION WITH DEMOCRACY',
        category: 'Rating scale',
        Options: {
            5: 1,
            4: 2,
            6: 3,
            2: 4,
            1: 5,
            7: -1,
            8: -2,
            9: -3
        }
    },
    {
        id: 45,
        variable: 'IMD3011',
        question: 'EFFICACY: WHO IS IN POWER CAN MAKE A DIFFERENCE',
        category: 'Rating scale',
        Options: {
            5: 1,
            4: 2,
            3: 3,
            2: 4,
            1: 5,
            7: -1,
            8: -2,
            9: -3
        }
    },
    {
        id: 46,
        variable: 'IMD3012',
        question: 'EFFICACY: WHO PEOPLE VOTE FOR MAKES A DIFFERENCE',
        category: 'Rating scale',
        Options: {
            5: 1,
            4: 2,
            3: 3,
            2: 4,
            1: 5,
            7: -1,
            8: -2,
            9: -3
        }
    },
    {
        id: 46,
        variable: 'IMD3013_1',
        question: 'STATE OF ECONOMY (OVER PAST 12 MONTHS)',
        category: 'Rating scale',
        Options: {
            5: 1,
            3: 2,
            1: 3,
            7: -1,
            8: -2,
            9: -3
        }
    },
    {
        id: 46,
        variable: 'IMD3014',
        question: 'GOVERNMENT PERFORMANCE: GENERAL',
        category: 'Rating scale',
        Options: {
            4: 1,
            3: 2,
            2: 3,
            1: 4,
            6: -1,
            7: -2,
            8: -3,
            9: -4
        }
    },
    {
        id: 46,
        variable: 'IMD3013_2',
        question: 'STATE OF ECONOMY - BETTER',
        category: 'Multiple choices',
        Options: {
            2: 'Somewhat better',
            1: 'Much better',
            7: 'Refused',
            8: 'Don"t know',
            9: 'Missing'
        }
    },
];
