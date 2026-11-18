import { createYearHeaderRow, createStageRows } from '../sports_tl.js';

/**
 * Genera la fila de años de la NFL en el <thead> y <tfoot> de
 * la tabla con id "table_timeline".
 *
 * @returns {HTMLTableRowElement} La fila creada.
 */
export function initNflTableYears() {
    console.log('Por aqui');
    return createYearHeaderRow([
        // { startYear: "Prev", endYear: "Prev", columns: 2 },
        { startYear: "Prev", endYear: "Prev" },
        { startYear: 1933, endYear: 1933 },
        { startYear: 1934, endYear: 1934, columns: 2 },
        { startYear: 1935, endYear: 1960 },
    ]);
}

export function initNflTableData() {
    return createStageRows([
        {
            className: 'nfl_redskins top1',
            classNameInf: 'nfl_redskins',
            etapas: [
                { superior: [{ texto: 'Boston Redskins', cols: 6, rows: 2 }] },
                {
                    superior: [
                        {
                            className: 'nfl_redskins_chgname',
                            texto: '★'
                        },
                        { cols: 2 }
                    ],
                    inferior: [{
                        className: 'nfl_redskins_chgname',
                        texto: 'Washinton Redskins',
                        cols: 3
                    }]
                },
                {
                    superior: [
                        { cols: 2 },
                        { texto: '★' },
                        { cols: 2 }
                    ],
                    inferior: [{
                        texto: 'Washinton Redskins',
                        cols: 5
                    }]
                },
                { superior: [{ texto: 'Washington Redskins', cols: 5, rows: 2 }] },
                {
                    superior: [{
                        className: 'linea_div',
                        texto: 'Washington Redskins',
                        cols: 5, rows: 2
                    }]
                },
                { superior: [{ texto: 'Washington Redskins', cols: 6, rows: 2 }] },
            ]
        },
        {
            className: 'nfl_colts top2',
            classNameInf: 'nfl_colts',
            etapas: [
                {
                    veces: 2,
                    superior: [{ className: 'nfl_brooklyn', texto: 'Brooklyn Dodgers', cols: 6 }],
                    inferior: [{ className: 'fila1 top1', cols: 6 }]
                },
                {
                    superior: [{ className: 'nfl_brooklyn', cols: 2 }],
                    inferior: [
                        { className: 'fila1 top1' },
                        { className: 'nfl_yanks top1', texto: 'Boston Yanks', cols: 1 }
                    ]
                },
                {
                    superior: [{
                        className: 'nfl_yanks nfl_yanks_chgname center-vert',
                        texto: 'The Yanks',
                        rows: 2
                    }]
                },
                {
                    superior: [{
                        className: 'nfl_yanks nfl_yanks_chgname',
                        texto: 'Boston Yanks',
                        cols: 3, rows: 2
                    }]
                },
                {
                    superior: [{
                        className: 'nfl_bulldogs',
                        texto: 'New York Bulldogs',
                        cols: 1, rows: 2
                    }]
                },
                {
                    superior: [
                        {
                            className: 'nfl_bulldogs nfl_bulldogs_chgname',
                            texto: 'New York Yanks',
                            cols: 2, rows: 2
                        },
                    ]
                },
                {
                    superior: [{
                        className: 'nfl_texans',
                        texto: 'Dallas Texans',
                        cols: 1, rows: 2
                    }]
                },
                {
                    superior: [{ texto: 'Baltimore Colts', cols: 4, rows: 2 }]
                },
                {
                    superior: [
                        { cols: 1 },
                        { texto: '★' },
                        { texto: '★' },
                        { cols: 1 }
                    ],
                    inferior: [{ texto: 'Baltimore Colts', cols: 4 }]
                },
            ]
        },
        {
            className: 'nfl_bears top2',
            classNameInf: 'nfl_bears',
            etapas: [
                {
                    superior: [
                        { cols: 1 },
                        { texto: '★' },
                        { cols: 1 },
                    ],
                    inferior: [{ texto: 'Chicago Bears', cols: 4 }]
                },
                { superior: [{ texto: 'Chicago Bears', cols: 6, rows: 2 }] },
                {
                    superior: [
                        { texto: '★' },
                        { texto: '★' },
                        { cols: 1 },
                        { texto: '★' },
                        { cols: 1 }
                    ],
                    inferior: [{ texto: 'Chicago Bears', cols: 5 }]
                },
                {
                    superior: [
                        { cols: 1 },
                        { texto: '★' },
                        { cols: 3 }
                    ],
                    inferior: [{ texto: 'Chicago Bears', cols: 5 }]
                },
                {
                    superior: [
                        {
                            className: 'linea_div',
                            texto: 'Chicago Bears',
                            cols: 5, rows: 2
                        }
                    ]
                },
                { superior: [{ texto: 'Chicago Bears', cols: 5, rows: 2 }] },
                { superior: [{ texto: 'Chicago Bears', cols: 1, rows: 2 }] },
            ]
        },
        {
            className: 'nfl_packers top2',
            classNameInf: 'nfl_packers',
            etapas: [
                { superior: [{ texto: 'Green Bay Packers', cols: 5, rows: 2 }] },
                {
                    superior: [
                        { texto: '★' },
                        { cols: 2 },
                        { texto: '★' },
                    ],
                    inferior: [{ texto: 'Green Bay Packers', cols: 4, }]
                },
                {
                    superior: [
                        { cols: 4 },
                        { texto: '★' },
                        { cols: 1 }
                    ],
                    inferior: [{ texto: 'Green Bay Packers', cols: 6, }]
                },
                { superior: [{ texto: 'Green Bay Packers', cols: 4, rows: 2 }] },
                {
                    superior: [{
                        className: 'linea_div',
                        texto: 'Green Bay Packers',
                        cols: 6, rows: 2
                    }]
                },
                { superior: [{ texto: 'Green Bay Packers', cols: 5, rows: 2 }] },
            ]
        },
        {
            className: 'nfl_giants top1',
            classNameInf: 'nfl_giants',
            etapas: [
                {
                    superior: [
                        { cols: 2 },
                        { texto: '★' },
                        { cols: 2 }
                    ],
                    inferior: [{ texto: 'New York Giants', cols: 5 }]
                },
                {
                    superior: [
                        { cols: 2 },
                        { texto: '★' },
                        { cols: 1 },
                    ],
                    inferior: [{ texto: 'New York Giants', cols: 4 }]
                },
                { veces: 2, superior: [{ texto: 'New York Giants', cols: 5, rows: 2 }] },
                {
                    superior: [{
                        className: 'linea_div',
                        texto: 'New York Giants',
                        cols: 5, rows: 2
                    }]
                },
                {
                    superior: [
                        { cols: 1 },
                        { texto: '★' },
                        { cols: 3 }
                    ],
                    inferior: [{ texto: 'New York Giants', cols: 5 }]
                },
                { superior: [{ texto: 'New York Giants', cols: 1, rows: 2 }] },
            ]
        },
        {
            className: 'nfl_detroit top2',
            classNameInf: 'nfl_detroit',
            etapas: [
                { superior: [{ className: 'nfl_spartans', texto: 'Portsmoth Spartans', cols: 2, rows: 2 }] },
                {
                    superior: [
                        { cols: 2 },
                        { texto: '★' },
                        { cols: 1 },
                    ],
                    inferior: [{ texto: 'Detroit Lions', cols: 4 }]
                },
                { veces: 2, superior: [{ texto: 'Detroit Lions', cols: 5, rows: 2 }] },
                { superior: [{ texto: 'Detroit Lions', cols: 3, rows: 2 }] },
                {
                    superior: [
                        { className: 'linea_div', cols: 1 },
                        { cols: 1 },
                        { texto: '★' },
                        { texto: '★' },
                        { cols: 1 }
                    ],
                    inferior: [{
                        className: 'linea_div',
                        texto: 'Detroit Lions',
                        cols: 5
                    }]
                },
                {
                    superior: [
                        { cols: 2 },
                        { texto: '★' },
                        { cols: 2 }
                    ],
                    inferior: [{
                        texto: 'Detroit Lions', cols: 5
                    }]
                },
                { superior: [{ texto: 'Detroit Lions', cols: 1, rows: 2 }] },
            ]
        },

        {
            className: 'nfl_cards top2',
            classNameInf: 'nfl_cards',
            etapas: [
                { superior: [{ texto: 'Chicago Cardinals', cols: 7, rows: 2 }] },
                { superior: [{ texto: 'Chicago Cardinals', cols: 6, rows: 2 }] },
                { superior: [{ className: 'center-vert', texto: 'Chi-Pitt', rows: 3 }] },
                {
                    superior: [
                        { cols: 1 },
                        { texto: '★' },
                        { texto: '★' },
                        { cols: 2 },
                    ],
                    inferior: [{ texto: 'Chicago Cardinals', cols: 5 }]
                },
                {
                    superior: [{
                        className: 'linea_div',
                        texto: 'Chicago Cardinals',
                        cols: 10, rows: 2
                    }]
                },
                {
                    superior: [{
                        className: 'nfl_cards_chgname',
                        texto: 'St. Louis Cardinals',
                        cols: 1, rows: 2
                    }]
                },
            ]
        },
        {
            className: 'nfl_pitt top1',
            classNameInf: 'nfl_pitt',
            etapas: [
                { superior: [{ className: 'fila1' }] },
                { superior: [{ texto: 'Pittsburgh Pirates', cols: 8 }] },
                { superior: [{ className: 'nfl_pitt_chgname', texto: 'Pittsburgh Steelers', cols: 3 }] },
                { superior: [{ className: 'center-vert', texto: 'Phil-Pitt Steagles', rows: 3 }] },
                { veces: 2, superior: [{ texto: 'Pittsburgh Steelers', cols: 5 }] },
                { superior: [{ texto: 'Pittsburgh Steelers', cols: 6 }] },
            ]
        },
        {
            className: 'nfl_eagles top2',
            classNameInf: 'nfl_eagles',
            etapas: [
                { superior: [{ className: 'fila2', rows: 2 }] },
                { superior: [{ texto: 'Philadelphia Eagles', cols: 6, rows: 2 }] },
                { superior: [{ texto: 'Philadelphia Eagles', cols: 5, rows: 2 }] },
                {
                    superior: [
                        { cols: 4 },
                        { texto: '★' },
                        { texto: '★' },
                    ],
                    inferior: [{ texto: 'Philadelphia Eagles', cols: 6 }]
                },
                {
                    superior: [{
                        className: 'linea_div',
                        texto: 'Philadelphia Eagles',
                        cols: 7, rows: 2
                    }]
                },
                // { superior: [{ texto: 'Philadelphia Eagles', cols: 4, rows: 2 }] },
                {
                    superior: [
                        { cols: 3 },
                        { texto: '★' },
                    ],
                    inferior: [{ texto: 'Philadelphia Eagles', cols: 4 }]
                },
            ]
        },
        {
            className: 'fila1 top1',
            etapas: [
                { superior: [{ className: 'fila1' }] },
                { superior: [{ className: 'nfl_reds', texto: 'Cincinnati Reds', cols: 2 }] },
                { superior: [{ className: 'nfl_gunners', texto: 'St. Louis Gunners', cols: 1 }] },
                { superior: [{ cols: 15 }] },
                { superior: [{ className: 'linea_div', cols: 11 }] },
            ]
        },
        {
            className: 'nfl_rams top2',
            classNameInf: 'nfl_rams',
            etapas: [
                { superior: [{ className: 'fila2', cols: 5, rows: 2 }] },
                { superior: [{ className: 'noLiga', texto: 'AFL-2', rows: 2 }] },
                { superior: [{ texto: 'Cleveland Rams', cols: 6, rows: 2 }] },
                { superior: [{ className: 'fila2', cols: 1, rows: 2 }] },
                {
                    superior: [
                        { cols: 1 },
                        { texto: '★' },
                    ],
                    inferior: [{ texto: 'Cleveland Rams', cols: 2 }]
                },
                {
                    superior: [{
                        className: 'nfl_rams_chgname',
                        texto: 'Los Angeles Rams',
                        cols: 4, rows: 2
                    }]
                },
                {
                    superior: [
                        { className: 'linea_div', cols: 1 },
                        { texto: '★' },
                        { cols: 3 }
                    ],
                    inferior: [{
                        className: 'linea_div',
                        texto: 'Los Angeles Rams',
                        cols: 5
                    }]
                },
                { superior: [{ texto: 'Los Angeles Rams', cols: 6, rows: 2 }] },
            ]
        },
        {
            className: 'fila1',
            etapas: [
                { superior: [{ className: 'prev_liga text-right', texto: 'AAFC', cols: 15 }] },
                { superior: [{ className: 'aafc_miami', texto: 'Miami Seahawks', cols: 1 }] },
                { superior: [{ className: 'nfl_colts', texto: 'Baltimore Colts', cols: 3 }] },
                { superior: [{ className: 'nfl_colts linea_div', texto: 'Baltimore Colts', cols: 1 }] },
                { superior: [{ cols: 10 }] },
            ]
        },
        {
            className: 'nfl_cleveland top2',
            classNameInf: 'nfl_cleveland',
            etapas: [
                { superior: [{ className: 'fila2', cols: 15, rows: 2 }] },
                {
                    superior: [
                        { texto: '★' },
                        { texto: '★' },
                        { texto: '★' },
                        { texto: '★' },
                    ],
                    inferior: [
                        { texto: 'Cleveland Browns', cols: 4 }
                    ]
                },
                {
                    superior: [
                        { className: 'linea_div', texto: '★' },
                        { cols: 3 }
                    ],
                    inferior: [{ className: 'linea_div', texto: 'Cleveland Browns', cols: 4 }]
                },
                {
                    superior: [
                        { texto: '★' },
                        { texto: '★' },
                        { cols: 2 },
                    ],
                    inferior: [
                        { texto: 'Cleveland Browns', cols: 4 }
                    ]
                },
                { superior: [{ texto: 'Cleveland Browns', cols: 3, rows: 2 }] },
            ]
        },
        {
            className: 'nfl_49ers top1',
            etapas: [
                { superior: [{ className: 'fila1', cols: 15 }] },
                { superior: [{ texto: 'San Francisco 49ers', cols: 4 }] },
                {
                    superior: [{
                        className: 'linea_div',
                        texto: 'San Francisco 49ers',
                        cols: 6
                    }]
                },
                { superior: [{ texto: 'San Francisco 49ers', cols: 5 }] },
            ]
        },
        {
            className: 'nfl_dallas',
            etapas: [
                { superior: [{ className: 'fila2 prev_liga', cols: 15 }] },
                { superior: [{ className: 'fila2', cols: 4 }] },
                { superior: [{ className: 'fila2 linea_div', cols: 10 }] },
                { superior: [{ texto: 'Dallas Cowboys', cols: 1 }] },
            ]
        },
        {
            className: 'afl_patriots',
            etapas: [
                { superior: [{ className: 'fila1 prev_liga text-right', texto: 'AFL-3', cols: 29 }] },
                { superior: [{ texto: 'Boston Patriots', cols: 1 }] },
            ]
        },
        {
            className: 'afl_buffalo',
            etapas: [
                { superior: [{ className: 'fila2', cols: 29 }] },
                { superior: [{ texto: 'Buffalo Bills', cols: 1 }] },
            ]
        },
        {
            className: 'afl_chiefs',
            etapas: [
                { superior: [{ className: 'fila1', cols: 29 }] },
                { superior: [{ className: 'nfl_texans', texto: 'Dallas Texans', cols: 1 }] },
            ]
        },
        {
            className: 'afl_denver',
            etapas: [
                { superior: [{ className: 'fila2', cols: 29 }] },
                { superior: [{ texto: 'Denver Broncos', cols: 1 }] },
            ]
        },
        {
            className: 'afl_oilers',
            classNameInf: 'afl_oilers',
            etapas: [
                { superior: [{ className: 'fila1', cols: 29, rows: 2 }] },
                {
                    superior: [
                        { texto: '★' },
                    ],
                    inferior: [
                        { texto: 'Houston Oilers', cols: 1 }
                    ]
                },
            ]
        },
        {
            className: 'afl_chargers',
            etapas: [
                { superior: [{ className: 'fila2', cols: 29 }] },
                { superior: [{ texto: 'Los Angeles Chargers', cols: 1 }] },
            ]
        },
        {
            className: 'afl_raiders',
            etapas: [
                { superior: [{ className: 'fila1', cols: 29 }] },
                { superior: [{ texto: 'Oakland Raiders', cols: 1 }] },
            ]
        },
        {
            className: 'afl_jets',
            etapas: [
                { superior: [{ className: 'fila2', cols: 29 }] },
                { superior: [{ texto: 'Titans of New York', cols: 1 }] },
            ]
        },
    ])
}

export default initNflTableYears;
