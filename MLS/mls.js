import { createYearHeaderRow, createStageRows } from '../sports_tl.js';

/**
 * Genera la fila de años de la NBA en el <thead> y <tfoot> de
 * la tabla con id "table_timeline".
 *
 * @returns {HTMLTableRowElement} La fila creada.
 */
export function initMlsTableYears() {
    console.log('Por aqui');
    return createYearHeaderRow([
        // { startYear: "Prev", endYear: "Prev", columns: 2 },
        { startYear: "Prev", endYear: "Prev" },
        { startYear: 1996, endYear: 2026 },
    ]);
}

export function initMlsTableData() {
    return createStageRows([
        {
            className: 'mls_colorado top1',
            classNameInf: 'mls_colorado',
            etapas: [
                { superior: [{ className: 'fila1', rows: 2 }] },
                { superior: [{ texto: 'Colorado Rapids', cols: 9, rows: 2 }] },
                {
                    superior: [
                        { cols: 5 },
                        { texto: '★' },
                        { cols: 6 },
                    ],
                    inferior: [{ texto: 'Colorado Rapids', cols: 12 }],
                },
                { superior: [{ texto: 'Colorado Rapids', cols: 10, rows: 2 }] }
            ]
        },
        {
            className: 'mls_columbus top2',
            classNameInf: 'mls_columbus',
            etapas: [
                { superior: [{ className: 'fila2', cols: 1, rows: 2 }] },
                {
                    superior: [
                        { cols: 6 },
                        { texto: '◆' },
                        { cols: 1 },
                    ],
                    inferior: [{ texto: 'Columbus Crew', cols: 8 }],
                },


                // { superior: [{ texto: 'Columbus Crew', cols: 8, rows: 2 }] },
                {
                    superior: [
                        { cols: 4 },
                        { texto: '★' },
                        { cols: 3 },
                    ],
                    inferior: [{ texto: 'Columbus Crew', cols: 8 }],
                },
                { superior: [{ texto: 'Columbus Crew', cols: 7, rows: 2 }] },
                {
                    superior: [
                        { cols: 1 },
                        { texto: '★' },
                        { cols: 2 },
                        { texto: '★' },
                        { cols: 1 },
                    ],
                    inferior: [{ texto: 'Columbus Crew', cols: 6 }],
                },
                { superior: [{ texto: 'Columbus Crew', cols: 2, rows: 2 }] },
            ]
        },
        {
            className: 'mls_dc top1',
            classNameInf: 'mls_dc',
            etapas: [
                { superior: [{ className: 'fila1', cols: 1, rows: 2 }] },
                {
                    superior: [
                        { texto: '★◆' },
                        { texto: '★' },
                        { cols: 1 },
                        { texto: '★' },
                        { cols: 2 }
                    ],
                    inferior: [{ texto: 'D.C. United (Washington)', cols: 6 }],
                },
                {
                    superior: [
                        { cols: 2 },
                        { texto: '★' },
                        { cols: 3 }
                    ],
                    inferior: [{ texto: 'D.C. United (Washington)', cols: 6 }],
                },
                {
                    superior: [
                        { cols: 5 },
                        { texto: '◆' },
                        { cols: 1 }
                    ],
                    inferior: [{ texto: 'D.C. United (Washington)', cols: 7 }],
                },
                { superior: [{ texto: 'D.C. United (Washington)', cols: 7, rows: 2 }] },
                { superior: [{ texto: 'D.C. United (Washington)', cols: 5, rows: 2 }] }
            ]
        },
        {
            className: 'mls_dallas top2',
            classNameInf: 'mls_dallas',
            etapas: [
                { superior: [{ className: 'fila2', cols: 1, rows: 2 }] },
                {
                    superior: [
                        { cols: 1 },
                        { texto: '◆' },
                        { cols: 3 }
                    ],
                    inferior: [{ texto: 'Dallas Burn', cols: 5 }]
                },
                { superior: [{ texto: 'Dallas Burn', cols: 4, rows: 2 }] },
                { superior: [{ className: 'mls_dallas_chgname', texto: 'FC Dallas', cols: 6, rows: 2 }] },
                {
                    superior: [
                        { cols: 5 },
                        { texto: '◆' },
                    ],
                    inferior: [{ texto: 'Dallas Burn', cols: 6 }]
                },
                { superior: [{ texto: 'FC Dallas', cols: 6, rows: 2 }] },
                { superior: [{ texto: 'FC Dallas', cols: 4, rows: 2 }] },
            ]
        },
        {
            className: 'mls_kansas top1',
            classNameInf: 'mls_kansas',
            etapas: [
                { superior: [{ className: 'fila1', cols: 1, rows: 2 }] },
                { superior: [{ texto: 'Kansas City Wiz', cols: 1, rows: 2 }] },
                {
                    superior: [
                        { cols: 3 },
                        { texto: '★' },
                        { cols: 3 }
                    ],
                    inferior: [{
                        className: 'mls_kansas_chgname',
                        texto: 'Kansas City Wizards',
                        cols: 7
                    }]
                },
                {
                    superior: [
                        { texto: '◆' },
                        { cols: 6 }
                    ],
                    inferior: [{
                        texto: 'Kansas City Wizards',
                        cols: 7
                    }]
                },
                {
                    superior: [
                        { cols: 1 },
                        { texto: '◆' },
                        { texto: '★' },
                        { cols: 1 },
                        { texto: '◆' },
                        { cols: 1 },
                        { texto: '◆' },
                        { cols: 1 },
                    ],
                    inferior: [{
                        className: 'mls_kansas_chgname',
                        texto: 'Sporting Kansas City',
                        cols: 8
                    }]
                },
                { superior: [{ texto: 'Sporting Kansas City', cols: 8, rows: 2 }] },
            ]
        },
        {
            className: 'mls_galaxy top2',
            classNameInf: 'mls_galaxy',
            etapas: [
                { superior: [{ className: 'fila2', cols: 1, rows: 2 }] },
                { superior: [{ texto: 'Los Angeles Galaxy', cols: 5, rows: 2 }] },
                {
                    superior: [
                        { texto: '◆' },
                        { texto: '★' },
                        { cols: 2 },
                        { texto: '★◆' },
                    ],
                    inferior: [{ texto: 'Los Angeles Galaxy', cols: 5 }]
                },
                { superior: [{ texto: 'Los Angeles Galaxy', cols: 5, rows: 2 }] },
                {
                    superior: [
                        { texto: '★' },
                        { texto: '★' },
                        { cols: 1 },
                        { texto: '★' },
                        { cols: 1 },
                    ],
                    inferior: [{ texto: 'Los Angeles Galaxy', cols: 5 }]
                },
                { superior: [{ texto: 'Los Angeles Galaxy', cols: 6, rows: 2 }] },
                {
                    superior: [
                        { cols: 2 },
                        { texto: '★' },
                        { cols: 3 },
                    ],
                    inferior: [{ texto: 'Los Angeles Galaxy', cols: 5 }]
                },
            ]
        },
        {
            className: 'mls_revolution top1',
            classNameInf: 'mls_revolution',
            etapas: [
                { superior: [{ className: 'fila1', cols: 1, rows: 2 }] },
                { superior: [{ texto: 'New England Revolution (Boston)', cols: 9, rows: 2 }] },
                {
                    superior: [
                        { cols: 2 },
                        { texto: '◆' },
                        { cols: 6 },
                    ],
                    inferior: [{ texto: 'New England Revolution (Boston)', cols: 9 }]
                },
                { superior: [{ texto: 'New England Revolution (Boston)', cols: 9, rows: 2 }] },
                { superior: [{ texto: 'New England Revolution (Boston)', cols: 5, rows: 2 }] },
            ]
        },
        {
            className: 'mls_metros top2',
            etapas: [
                { superior: [{ className: 'fila2', cols: 1 }] },
                { superior: [{ texto: 'New York / New Jersey Metrostars', cols: 2 }] },
                { superior: [{ className: 'mls_metros_chgname', texto: 'MetroStars (New York)', cols: 8 }] },
                { superior: [{ className: 'mls_metros_chgname', texto: 'New York Red Bulls', cols: 7 }] },
                { veces: 2, superior: [{ texto: 'New York Red Bulls', cols: 7 }] },
            ]
        },
        {
            className: 'mls_sanjose top1',
            classNameInf: 'mls_sanjose',
            etapas: [
                { superior: [{ className: 'fila1', cols: 1, rows: 2 }] },
                { superior: [{ texto: 'San Jose Clash', cols: 4, rows: 2 }] },
                {
                    superior: [
                        { className: 'mls_sanjose_chgname', cols: 1 },
                        { texto: '★' },
                        { cols: 1 },
                        { texto: '★' },
                        { cols: 2 },
                    ],
                    inferior: [{ className: 'mls_sanjose_chgname', texto: 'San Jose Earthquakes', cols: 6 }]
                },
                {
                    superior: [
                        { className: 'mls_houston', texto: '★' },
                        { className: 'mls_houston', texto: '★' },
                        { className: 'mls_houston', cols: 3 },
                    ],
                    inferior: [{ className: 'mls_houston', texto: 'Houston Dynamo', cols: 5 }]
                },
                { superior: [{ className: 'mls_houston', texto: 'Houston Dynamo', cols: 6, rows: 2 }] },
                {
                    superior: [
                        { className: 'mls_houston', cols: 1 },
                        { className: 'mls_houston', texto: '◆' },
                        { className: 'mls_houston', cols: 3 },
                    ],
                    inferior: [{ className: 'mls_houston', texto: 'Houston Dynamo', cols: 5 }]
                },
                {
                    superior: [
                        { className: 'mls_houston', cols: 1 },
                        { className: 'mls_houston', texto: '◆' },
                        { className: 'mls_houston', cols: 3 },
                    ],
                    inferior: [{ className: 'mls_houston', texto: 'Houston Dynamo', cols: 5 }]
                },
            ]
        },
        {
            className: 'mls_mutiny top2',
            etapas: [
                { superior: [{ className: 'fila2', cols: 1 }] },
                { superior: [{ texto: 'Tampa Bay Mutiny', cols: 6 }] },
                { superior: [{ className: 'fila2', cols: 25 }] },
            ]
        },
        {
            className: 'mls_chicago top1',
            classNameInf: 'mls_chicago',
            etapas: [
                { superior: [{ className: 'fila1', cols: 3, rows: 2 }] },
                {
                    superior: [
                        { texto: '★◆' },
                        { cols: 1 },
                        { texto: '◆' },
                        { cols: 2 },
                    ],
                    inferior: [{ texto: 'Chicago Fire', cols: 5 }]
                },
                {
                    superior: [
                        { texto: '◆' },
                        { cols: 2 },
                        { texto: '◆' },
                        { cols: 2 },
                    ],
                    inferior: [{ texto: 'Chicago Fire', cols: 6 }]
                },
                { veces: 3, superior: [{ texto: 'Chicago Fire', cols: 6, rows: 2 }] },
            ]
        },
        {
            className: 'mls_fusion top2',
            etapas: [
                { superior: [{ className: 'fila2', cols: 3 }] },
                { superior: [{ texto: 'Miami Fusion', cols: 4 }] },
                { superior: [{ className: 'fila2', cols: 25 }] },
            ]
        },
        {
            className: 'mls_chivas top1',
            etapas: [
                { superior: [{ className: 'fila1', cols: 10 }] },
                { superior: [{ texto: 'Chivas USA (Los Angeles)', cols: 10 }] },
                { superior: [{ className: 'fila1', cols: 12 }] },
            ]
        },
        {
            className: 'mls_rsl top2',
            classNameInf: 'mls_rsl',
            etapas: [
                { superior: [{ className: 'fila2', cols: 10, rows: 2 }] },
                {
                    superior: [
                        { cols: 4 },
                        { texto: '★' },
                    ],
                    inferior: [{ texto: 'Real Salt Lake', cols: 5 }]
                },
                { veces: 2, superior: [{ texto: 'Real Salt Lake', cols: 6, rows: 2 }] },
                { superior: [{ texto: 'Real Salt Lake', cols: 5, rows: 2 }] },
            ]
        },
        {
            className: 'mls_toronto top1',
            classNameInf: 'mls_toronto',
            etapas: [
                { superior: [{ className: 'fila1', cols: 12, rows: 2 }] },
                { superior: [{ texto: 'Toronto FC', cols: 7, rows: 2 }] },
                {
                    superior: [
                        { cols: 3 },
                        { texto: '★' },
                        { cols: 3 },
                    ],
                    inferior: [{ texto: 'Toronto FC', cols: 7 }]
                },
                { superior: [{ texto: 'Toronto FC', cols: 6, rows: 2 }] },
            ]
        },
        {
            className: 'mls_sanjose top2',
            etapas: [
                { superior: [{ className: 'fila2', cols: 13 }] },
                { veces: 2, superior: [{ texto: 'San Jose Earthquakes', cols: 7 }] },
                { superior: [{ texto: 'San Jose Earthquakes', cols: 5 }] },
            ]
        },
        {
            className: 'mls_seattle top1',
            classNameInf: 'mls_seattle',
            etapas: [
                {
                    superior: [{
                        className: 'noLiga',
                        texto: 'A-League',
                        cols: 10, rows: 2
                    }]
                },
                {
                    superior: [{
                        className: 'noLiga noLiga_chgname',
                        texto: 'USL 1st Division',
                        cols: 4, rows: 2
                    }]
                },
                {
                    superior: [
                        { texto: '◆' },
                        { texto: '◆' },
                        { texto: '◆' },
                        { cols: 2 },
                        { texto: '◆' },
                    ],
                    inferior: [{ texto: 'Seattle Sounders', cols: 6 }]
                },
                {
                    superior: [
                        { cols: 1 },
                        { texto: '★' },
                        { cols: 2 },
                        { texto: '★' },
                        { cols: 1 }
                    ],
                    inferior: [{ texto: 'Seattle Sounders', cols: 6 }]
                },
                { superior: [{ texto: 'Seattle Sounders', cols: 6, rows: 2 }] },
            ]
        },
        {
            className: 'mls_philly top2',
            etapas: [
                { superior: [{ className: 'fila2', cols: 15 }] },
                { veces: 2, superior: [{ texto: 'Philadelphia Union', cols: 6 }] },
                { superior: [{ texto: 'Philadelphia Union', cols: 5 }] },
            ]
        },
        {
            className: 'mls_portland top1',
            classNameInf: 'mls_portland',
            etapas: [
                { superior: [{ className: 'fila1', cols: 6, rows: 2 }] },
                { superior: [{ className: 'noLiga', texto: 'A-League', cols: 4, rows: 2 }] },
                {
                    superior: [{
                        className: 'noLiga noLiga_chgname',
                        texto: 'USL 1st Division',
                        cols: 5, rows: 2
                    }]
                },
                {
                    superior: [{
                        className: 'noLiga noLiga_chgname',
                        texto: 'USSF D2 Pro',
                        cols: 1, rows: 2
                    }]
                },
                {
                    superior: [
                        { cols: 4 },
                        { texto: '★' },
                        { cols: 1 }
                    ],
                    inferior: [{ texto: 'Portland Timbers', cols: 6 }]
                },
                { veces: 2, superior: [{ texto: 'Portland Timbers', cols: 5, rows: 2 }] },
            ]
        },
        {
            className: 'mls_vancouver top2',
            classNameInf: 'mls_vancouver',
            etapas: [
                {
                    superior: [{
                        className: 'noLiga',
                        texto: 'Vancouver 86ers',
                        cols: 6
                    },
                    {
                        className: 'noLiga noLiga_chgname', cols: 4
                    }],
                    inferior: [{
                        className: 'noLiga',
                        texto: 'A-League',
                        cols: 10
                    }]
                },
                {
                    superior: [{ className: 'noLiga', cols: 5 }],
                    inferior: [{
                        className: 'noLiga noLiga_chgname',
                        texto: 'USL 1st Division',
                        cols: 5
                    }]
                },
                {
                    superior: [{ className: 'noLiga', cols: 1 }],
                    inferior: [{
                        className: 'noLiga noLiga_chgname',
                        texto: 'USSF D2 Pro',
                        cols: 1
                    }]
                },
                { superior: [{ texto: 'Vancouver Whitecaps', cols: 7, rows: 2 }] },
                { superior: [{ texto: 'Vancouver Whitecaps', cols: 6, rows: 2 }] },
                { superior: [{ texto: 'Vancouver Whitecaps', cols: 3, rows: 2 }] },
            ]
        },
        {
            className: 'mls_montreal top1',
            etapas: [
                { superior: [{ className: 'noLiga', texto: 'A-League', cols: 4 }] },
                { superior: [{ className: 'fila1', cols: 1 }] },
                { superior: [{ className: 'noLiga', texto: 'A-League', cols: 5 }] },
                {
                    superior: [{
                        className: 'noLiga noLiga_chgname',
                        texto: 'USL 1st Division',
                        cols: 5
                    }]
                },
                {
                    superior: [{
                        className: 'noLiga noLiga_chgname',
                        texto: 'USSF D2 Pro',
                        cols: 1
                    }]
                },
                {
                    superior: [{
                        className: 'noLiga noLiga_chgname',
                        texto: 'NASL',
                        cols: 1
                    }]
                },
                { superior: [{ texto: 'Montreal Impact', cols: 9 }] },
                { superior: [{ className: 'mls_montreal_chgname', texto: 'CF Montréal', cols: 6 }] },
            ]
        },
        {
            className: 'mls_nyfc top2',
            classNameInf: 'mls_nyfc',
            etapas: [
                { superior: [{ className: 'fila2', cols: 20, rows: 2 }] },
                { superior: [{ texto: 'New York FC', cols: 4, rows: 2 }] },
                {
                    superior: [
                        { cols: 2 },
                        { texto: '★' },
                        { cols: 2 }
                    ],
                    inferior: [{ texto: 'New York FC', cols: 5 }]
                },
                { superior: [{ texto: 'New York FC', cols: 3, rows: 2 }] },
            ]
        },
        {
            className: 'mls_orlando top1',
            classNameInf: 'mls_orlando',
            etapas: [
                { superior: [{ className: 'fila1', cols: 14, rows: 2 }] },
                {
                    superior: [
                        { className: 'noLiga', texto: 'Austin Aztex FC', cols: 2 }
                    ],
                    inferior: [
                        {
                            className: 'noLiga',
                            texto: 'USL 1st Division',
                            cols: 1
                        },
                        {
                            className: 'noLiga noLiga_chgname',
                            texto: 'USSF D2 Pro',
                            cols: 1
                        },
                    ]
                },
                {
                    superior: [
                        {
                            className: 'noLiga noLiga_chgname',
                            texto: 'USL Pro',
                            cols: 4, rows: 2
                        }
                    ]
                },
                { superior: [{ texto: 'Orlando City SC', cols: 6, rows: 2 }] },
                {
                    superior: [
                        { cols: 1 },
                        { texto: '◆' },
                        { cols: 4 }
                    ],
                    inferior: [
                        { texto: 'Orlando City SC', cols: 6 }
                    ]
                },
            ]
        },
        {
            className: 'mls_atlanta top2',
            classNameInf: 'mls_atlanta',
            etapas: [
                { superior: [{ className: 'fila2', cols: 22, rows: 2 }] },
                {
                    superior: [
                        { cols: 1 },
                        { texto: '★' },
                        { texto: '◆' },
                        { cols: 2 }
                    ],
                    inferior: [{ texto: 'Atlanta United', cols: 5 }]
                },
                { superior: [{ texto: 'Atlanta United', cols: 5, rows: 2 }] },
            ]
        },
        {
            className: 'mls_minnesota top1',
            etapas: [
                { superior: [{ className: 'fila1', cols: 15 }] },
                { superior: [{ className: 'noLiga', texto: 'USSF D2 Pro', cols: 1 }] },
                { superior: [{ className: 'noLiga noLiga_chgname', texto: 'NASL', cols: 6 }] },
                { superior: [{ texto: 'Minnesota United FC', cols: 10 }] },
            ]
        },
        {
            className: 'mls_lafc top2',
            classNameInf: 'mls_lafc',
            etapas: [
                { superior: [{ className: 'fila2', cols: 23, rows: 2 }] },
                {
                    superior: [
                        { cols: 4 },
                        { texto: '★' },
                    ],
                    inferior: [{ texto: 'Los Angeles FC', cols: 5 }]
                },
                {
                    superior: [
                        { cols: 1 },
                        { texto: '◆' },
                        { cols: 2 },
                    ],
                    inferior: [{ texto: 'Los Angeles FC', cols: 4 }]
                }
            ]
        },
        {
            className: 'mls_cincinnati top1',
            etapas: [
                { superior: [{ className: 'fila1', cols: 21 }] },
                { superior: [{ className: 'noLiga', texto: 'USL', cols: 3 }] },
                { superior: [{ texto: 'FC Cincinnati', cols: 8 }] },
            ]
        },
        {
            className: 'mls_miami top2',
            classNameInf: 'mls_miami',
            etapas: [
                { superior: [{ className: 'fila2', cols: 25, rows: 2 }] },
                {
                    superior: [
                        { cols: 5 },
                        { texto: '★' },
                        { cols: 1 },
                    ],
                    inferior: [{ texto: 'Inter Miami CF', cols: 7 }]
                },
            ]
        },
        {
            className: 'mls_nashville top1',
            classNameInf: 'mls_nashville',
            etapas: [
                { superior: [{ className: 'fila1', cols: 23, rows: 2 }] },
                { superior: [{ className: 'noLiga', texto: 'USL', cols: 1, rows: 2 }] },
                {
                    superior: [{
                        className: 'noLiga noLiga_chgname',
                        texto: 'USL-C',
                        cols: 1, rows: 2
                    }]
                },
                {
                    superior: [
                        { cols: 5 },
                        { texto: '◆' },
                        { cols: 1 },
                    ],
                    inferior: [{ texto: 'Nashville SC', cols: 7 }]
                },
            ]
        },
        {
            className: 'mls_austin top2',
            etapas: [
                { superior: [{ className: 'fila2', cols: 20 }] },
                { superior: [{ className: 'fila2', cols: 6 }] },
                { superior: [{ texto: 'Austin FC', cols: 6 }] },
            ]
        },
        {
            className: 'mls_charlotte top1',
            etapas: [
                { superior: [{ className: 'fila1', cols: 20 }] },
                { superior: [{ className: 'fila1', cols: 7 }] },
                { superior: [{ texto: 'Charlotte FC', cols: 5 }] },
            ]
        },
        {
            className: 'mls_stlouis top2',
            classNameInf: 'mls_stlouis',
            etapas: [
                { superior: [{ className: 'fila2', cols: 20, rows: 2 }] },
                { superior: [{ className: 'fila2', cols: 8, rows: 2 }] },
                {
                    superior: [
                        { cols: 3 },
                        { texto: '◆' },
                    ],
                    inferior: [{ texto: 'St. Louis City FC', cols: 4 }]
                },
            ]
        },
        {
            className: 'mls_sandiego top1',
            etapas: [
                { superior: [{ className: 'fila1', cols: 20 }] },
                { superior: [{ className: 'fila1', cols: 10 }] },
                { superior: [{ texto: 'San Diego FC', cols: 2 }] },
            ]
        },
    ])
}

export default initMlsTableYears;
