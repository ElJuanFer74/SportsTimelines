// nba.js
// Módulo ES: ejemplo de uso de sports_tl.js para la NBA.

import { createYearHeaderRow, createStageRows } from '../sports_tl.js';

/**
 * Genera la fila de años de la NBA en el <thead> y <tfoot> de
 * la tabla con id "table_timeline".
 *
 * @returns {HTMLTableRowElement} La fila creada.
 */
export function initNbaTableYears() {
  return createYearHeaderRow([
    // { startYear: "Prev", endYear: "Prev", columns: 2 },
    { startYear: 1946, endYear: 1946 },
    { startYear: 1947, endYear: 2026, columns: 2 },
    { startYear: 2027, endYear: 2027 },
  ]);
}

export function initNbaTableData() {
  return createStageRows([
    {
      className: 'nba_boston top1',
      classNameInf: 'nba_boston',
      etapas: [
        // { superior: [{ className: 'noLiga', texto: 'BAA', rows: 2, cols: 2 }] },
        { superior: [{ texto: 'Boston Celtics', rows: 2, cols: 10 }] },
        { superior: [{ texto: 'Boston Celtics', rows: 2, cols: 10 }] },
        {
          superior: [
            { texto: '★', cols: 2 },
            { cols: 2 },
            { texto: '★', cols: 2 },
          ],
          inferior: [{ texto: 'Boston Celtics', cols: 6 }]
        },
        {
          veces: 2,
          superior: [
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
          ],
          inferior: [{ texto: 'Boston Celtics', cols: 6 }]
        },
        {
          superior: [
            { texto: '★', cols: 2 },
            { cols: 2 },
            { texto: '★', cols: 2 },
          ],
          inferior: [{ texto: 'Boston Celtics', cols: 6 }]
        },
        {
          superior: [
            { texto: '★', cols: 2 },
            { cols: 4 },
          ],
          inferior: [{ texto: 'Boston Celtics', cols: 6 }]
        },
        {
          superior: [
            { cols: 4 },
            { texto: '★', cols: 2 },
          ],
          inferior: [{ texto: 'Boston Celtics', cols: 6 }]
        },
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 4 }
          ],
          inferior: [{ texto: 'Boston Celtics', cols: 8 }]
        },
        {
          superior: [{
            className: 'nba_clippers',
            texto: 'San Diego Clippers',
            cols: 12, rows: 2
          }]
        },
        {
          superior: [{
            className: 'nba_clippers nba_clippers_chgname',
            texto: 'Los Angeles Clippers',
            cols: 16, rows: 2
          }]
        },
        {
          veces: 5,
          superior: [{
            className: 'nba_clippers',
            texto: 'Los Angeles Clippers',
            cols: 14, rows: 2
          }]
        },
      ]
    },
    {
      className: 'fila2 top2',
      etapas: [
        {
          superior: [
            { claseName: 'nba_stags', texto: 'Chicago Stags', cols: 8 },
          ]
        },
        { veces: 3, superior: [{ cols: 50 }] },
        { superior: [{ cols: 4 }] },
      ]
    },
    {
      className: 'fila1 top1',
      etapas: [
        {
          superior: [
            { claseName: 'nba_rebels', texto: 'Cleveland Rebels', cols: 2 },
          ]
        },
        { veces: 3, superior: [{ cols: 50 }] },
        { superior: [{ cols: 10 }] },
      ]
    },
    {
      className: 'fila2 top2',
      etapas: [
        {
          superior: [
            { claseName: 'nba_detroit', texto: 'Detroit Falcons', cols: 2 },
          ]
        },
        { veces: 3, superior: [{ cols: 50 }] },
        { superior: [{ cols: 10 }] },
      ]
    },
    {
      className: 'nba_knicks top1',
      classNameInf: 'nba_knicks',
      etapas: [
        // { superior: [{ className: 'noLiga', texto: 'BAA', cols: 2, rows: 2 }] },
        { veces: 3, superior: [{ texto: 'New York Knicks', cols: 14, rows: 2 }] },
        // { superior: [{ texto: 'New York Knicks', cols: 12, rows: 2 }] },
        {
          superior: [
            { cols: 4 },
            { texto: '★', cols: 2 },
            { cols: 2 },
          ],
          inferior: [{ texto: 'New York Knicks', cols: 8 }]
        },
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 2 },
          ],
          inferior: [{ texto: 'New York Knicks', cols: 6 }]
        },
        { veces: 3, superior: [{ texto: 'New York Knicks', cols: 14, rows: 2 }] },
        { veces: 5, superior: [{ texto: 'New York Knicks', cols: 12, rows: 2 }] },
        {
          superior: [
            { texto: '★◆', cols: 2 },
            { cols: 2 },
          ],
          inferior: [{ texto: 'New York Knicks', cols: 4 }]
        },
      ]
    },
    {
      className: 'nba_warriors top2',
      classNameInf: 'nba_warriors',
      etapas: [
        // { superior: [{ className: 'noLiga', texto: 'BAA', cols: 2, rows: 2 }] },
        {
          superior: [
            { texto: '★', cols: 2 },
            { cols: 6 }
          ],
          inferior: [{ texto: 'Philadelphia Warriors', cols: 8 }]
        },
        { superior: [{ texto: 'Philadelphia Warriors', cols: 10, rows: 2 }] },
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 10 }
          ],
          inferior: [{ texto: 'Philadelphia Warriors', cols: 14 }]
        },
        // {
        //   superior: [
        //     { texto: 'Philadelphia Warriors', cols: 8, rows: 2 },
        //   ]
        // },
        {
          superior: [
            {
              className: 'nba_warriors_chgname',
              texto: 'San Francisco Warriors', cols: 10, rows: 2
            },
          ]
        },
        {
          superior: [
            { texto: 'San Francisco Warriors', cols: 8, rows: 2 },
          ]
        },
        {
          superior: [
            { cols: 6 },
            { texto: '★', cols: 2 },
            { cols: 4 }
          ],
          inferior: [
            { className: 'nba_warriors_chgname', texto: 'Golden State Warriors (Oakland)', cols: 12 },
          ]
        },
        {
          superior: [
            { texto: 'Golden State Warriors (Oakland)', cols: 16, rows: 2 }
          ]
        },
        {
          veces: 4,
          superior: [
            { texto: 'Golden State Warriors (Oakland)', cols: 14, rows: 2 }
          ]
        },
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 2 },
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 2 },
          ],
          inferior: [
            { texto: 'Golden State Warriors (Oakland)', cols: 12 },
          ]
        },
        {
          superior: [
            { className: 'nba_warriors_chgname', cols: 4 },
            { texto: '★', cols: 2 },
            { cols: 10 }
          ],
          inferior: [
            {
              className: 'nba_warriors_chgname',
              texto: 'Golden State Warriors (San Francisco)',
              cols: 16
            },
          ]
        },
      ]
    },
    {
      className: 'fila1 top1',
      etapas: [
        {
          superior: [
            { claseName: 'nba_pitt', texto: 'Pittsburgh Ironmen', cols: 2 },
          ]
        },
        { veces: 3, superior: [{ cols: 50 }] },
        { superior: [{ cols: 10 }] },
      ]
    },
    {
      className: 'fila2 top2',
      etapas: [
        {
          superior: [
            { claseName: 'nba_steam', texto: 'Providence Steamrollers', cols: 6 },
          ]
        },
        { veces: 3, superior: [{ cols: 50 }] },
        { superior: [{ cols: 6 }] },
      ]
    },
    {
      className: 'fila1 top1',
      etapas: [
        {
          superior: [
            { claseName: 'nba_bombers', texto: 'St. Louis Bombers', cols: 8 },
          ]
        },
        { veces: 3, superior: [{ cols: 50 }] },
        { superior: [{ cols: 4 }] },
      ]
    },
    {
      className: 'fila2 top2',
      etapas: [
        {
          superior: [
            { claseName: 'nba_huskies', texto: 'Toronto Huskies', cols: 2 },
          ]
        },
        { veces: 3, superior: [{ cols: 50 }] },
        { superior: [{ cols: 10 }] },
      ]
    },
    {
      className: 'fila1 top1',
      etapas: [
        {
          superior: [
            { claseName: 'nba_capitals', texto: 'Washington Capitals', cols: 9 },
          ]
        },
        { superior: [{ cols: 51 }] },
        { veces: 2, superior: [{ cols: 50 }] },
        { superior: [{ cols: 2 }] },
      ]
    },
    {
      className: 'fila1 top1',
      classNameInf: 'nba_bullets',
      etapas: [
        { superior: [{ claseName: 'noLiga', texto: 'ABL', cols: 2, rows: 2 }] },
        {
          superior: [
            { className: 'nba_bullets', texto: '★', cols: 2 },
            { className: 'nba_bullets', cols: 11 }
          ],
          inferior: [
            { texto: 'Baltimore Bullets', cols: 13 },
          ]
        },
        { superior: [{ cols: 51, rows: 2 }] },
        { superior: [{ cols: 50, rows: 2 }] },
        { superior: [{ cols: 46, rows: 2 }] },
      ]
    },
    {
      className: 'nba_pistons top2',
      classNameInf: 'nba_pistons',
      etapas: [
        { superior: [{ className: 'noLiga', texto: 'NBL', cols: 4, rows: 2 }] },
        { superior: [{ texto: 'Fort Wayne Pistons', cols: 10, rows: 2 }] },
        { superior: [{ texto: 'Fort Wayne Pistons', cols: 8, rows: 2 }] },
        {
          superior: [
            {
              className: 'nba_pistons_chgname',
              texto: 'Detroit Pistons',
              cols: 12, rows: 2
            }
          ]
        },
        { veces: 4, superior: [{ texto: 'Detroit Pistons', cols: 12, rows: 2 }] },
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 2 }
          ],
          inferior: [{ texto: 'Detroit Pistons', cols: 8 }]
        },
        { superior: [{ texto: 'Detroit Pistons', cols: 12, rows: 2 }] },
        { superior: [{ texto: 'Detroit Pistons', cols: 10, rows: 2 }] },
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 6 }
          ],
          inferior: [{ texto: 'Detroit Pistons', cols: 10 }]
        },
        { veces: 2, superior: [{ texto: 'Detroit Pistons', cols: 14, rows: 2 }] },
        { superior: [{ texto: 'Detroit Pistons', cols: 12, rows: 2 }] },
      ]
    },
    {
      className: 'fila1 top1',
      etapas: [
        {
          superior: [
            { claseName: 'noLiga', texto: 'Indianapolis Kautskys (NBL)', cols: 4 },
          ]
        },
        {
          superior: [
            { claseName: 'nba_jets', texto: 'Indianapolis Jets', cols: 2 },
          ]
        },
        { veces: 3, superior: [{ cols: 50 }] },
        { superior: [{ cols: 6 }] },
      ]
    },
    {
      className: 'nba_lakers top2',
      classNameInf: 'nba_lakers',
      etapas: [
        {
          superior: [{ className: 'noLiga', texto: 'Detroit Gems', }],
          inferior: [{ className: 'noLiga', texto: 'NBL', cols: 4 }]
        },
        { superior: [{ className: 'noLiga noLiga_chgname', cols: 3 }] },
        // {
        //   superior: [{ className: 'noLiga', texto: 'NBL', cols: 4, rows: 2 }]
        // },
        {
          superior: [
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 2 },
            { texto: '★', cols: 2 },
          ],
          inferior: [{ texto: 'Minneapolis Lakers', cols: 8 }]
        },
        {
          superior: [
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 2 },
          ],
          inferior: [{ texto: 'Minneapolis Lakers', cols: 6 }]
        },
        {
          superior: [{ texto: 'Minneapolis Lakers', cols: 10, rows: 2 }]
        },
        {
          superior: [
            { className: 'nba_lakers_chgname', texto: 'Los Angeles Lakers', cols: 12, rows: 2 }
          ]
        },
        {
          superior: [{ texto: 'Los Angeles Lakers', cols: 8, rows: 2 }]
        },
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 4 },
          ],
          inferior: [{ texto: 'Los Angeles Lakers', cols: 8 }]
        },
        {
          superior: [{ texto: 'Los Angeles Lakers', cols: 10, rows: 2 }]
        },
        {
          superior: [
            { texto: '★', cols: 2 },
            { cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 4 },
          ],
          inferior: [{ texto: 'Los Angeles Lakers', cols: 10 }]
        },
        {
          superior: [
            { texto: '★', cols: 2 },
            { cols: 2 },
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
          ],
          inferior: [{ texto: 'Los Angeles Lakers', cols: 8 }]
        },
        {
          superior: [{ texto: 'Los Angeles Lakers', cols: 18, rows: 2 }]
        },
        {
          superior: [
            { cols: 4 },
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
          ],
          inferior: [{ texto: 'Los Angeles Lakers', cols: 12 }]
        },
        {
          superior: [{ texto: 'Los Angeles Lakers', cols: 8, rows: 2 }]
        },
        {
          superior: [
            { cols: 4 },
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 4 },
          ],
          inferior: [{ texto: 'Los Angeles Lakers', cols: 12 }]
        },
        {
          superior: [{ texto: 'Los Angeles Lakers', cols: 10, rows: 2 }]
        },
        {
          superior: [
            { cols: 4 },
            { texto: '★', cols: 2 },
            { cols: 4 },
          ],
          inferior: [{ texto: 'Los Angeles Lakers', cols: 10 }]
        },
        {
          superior: [
            { cols: 2 },
            { texto: '◆', cols: 2 },
            { cols: 6 },
          ],
          inferior: [{ texto: 'Los Angeles Lakers', cols: 10 }]
        },
      ]
    },
    {
      className: 'nba_kings top1',
      classNameInf: 'nba_kings',
      etapas: [
        { superior: [{ className: 'noLiga', texto: 'NBL', rows: 2, cols: 4 }] },
        {
          superior: [
            { cols: 4 },
            { texto: '★', cols: 2 },
            { cols: 4 }
          ],
          inferior: [
            { texto: 'Rochester Royals', cols: 10 }
          ]
        },
        { superior: [{ texto: 'Rochester Royals', cols: 8, rows: 2 }] },
        {
          superior: [{
            className: 'nba_kings_chgname',
            texto: 'Cincinnati Royals',
            cols: 12, rows: 2
          }]
        },
        { superior: [{ texto: 'Cincinnati Royals', cols: 10, rows: 2 }] },
        { superior: [{ texto: 'Cincinnati Royals', cols: 8, rows: 2 }] },
        {
          superior: [{
            className: 'nba_kings_chgname',
            texto: 'Kansas City-Omaha Kings',
            cols: 6, rows: 2
          }]
        },
        {
          superior: [{
            className: 'nba_kings_chgname',
            texto: 'Kansas City Kings',
            cols: 8, rows: 2
          }]
        },
        { superior: [{ texto: 'Kansas City Kings', cols: 12, rows: 2 }] },
        {
          superior: [{
            className: 'nba_kings_chgname',
            texto: 'Sacramento Kings',
            cols: 12, rows: 2
          }]
        },
        { veces: 6, superior: [{ texto: 'Sacramento Kings', cols: 12, rows: 2 }] },
      ]
    },

    {
      className: 'fila2 top2',
      etapas: [
        { superior: [{ claseName: 'noLiga', texto: 'NBL', cols: 6 }] },
        {
          superior: [
            { claseName: 'nba_anderson', texto: 'Anderson Packers', cols: 2 },
          ]
        },
        { superior: [{ claseName: 'noLiga', texto: 'NPBL', cols: 2 }] },
        { veces: 3, superior: [{ cols: 50 }] },
        { superior: [{ cols: 2 }] },
      ]
    },
    {
      className: 'fila1 top1',
      classNameInf: 'fila1',
      etapas: [
        {
          superior: [{ className: 'fila1', cols: 4, rows: 2 }]
        },
        { superior: [{ className: 'noLiga', texto: 'NBL', cols: 2, rows: 2 }] },
        {
          superior: [
            { claseName: 'nba_denver', texto: 'Denver Nuggets', cols: 2, rows: 2 },
          ]
        },
        {
          superior: [{ claseName: 'noLiga', texto: 'Denver Refiners' }],
          inferior: [{ claseName: 'noLiga', texto: 'NPBL', cols: 2 }]
        },
        {
          superior: [{ claseName: 'noLiga noLiga_chgname', texto: 'Evansville Agogans' }],
        },
        { veces: 3, superior: [{ cols: 50, rows: 2 }] },
        { superior: [{ cols: 3, rows: 2 }] },
      ]
    },
    {
      className: 'fila2 top2',
      etapas: [
        { superior: [{ cols: 6 }] },
        {
          superior: [
            { claseName: 'nba_olympians', texto: 'Indianapolis Olympians', cols: 8 },
          ]
        },
        { veces: 3, superior: [{ cols: 50 }] },
      ]
    },

    {
      className: 'fila1 top1',
      etapas: [
        { superior: [{ className: 'noLiga', texto: 'NBL', cols: 6 }] },
        {
          superior: [
            { claseName: 'nba_sheboygan', texto: 'Sheboygan Red Skins', cols: 2 },
          ]
        },
        { superior: [{ className: 'noLiga', texto: 'NPBL', cols: 2 }] },
        { superior: [{ className: 'noLiga noLiga_chgname', texto: 'Ind.', cols: 2 }] },
        { veces: 3, superior: [{ cols: 50 }] },
        { superior: [{ cols: 2 }] },
      ]
    },
    {
      className: 'nba_76ers top2',
      classNameInf: 'nba_76ers',
      etapas: [
        { superior: [{ className: 'noLiga', texto: 'NBL', cols: 6, rows: 2 }] },
        { superior: [{ texto: 'Syracuse Nationals', cols: 6, rows: 2 }] },
        {
          superior: [
            { cols: 4 },
            { texto: '★', cols: 2 },
            { cols: 4 }
          ],
          inferior: [{ texto: 'Syracuse Nationals', cols: 10 }]
        },
        { superior: [{ texto: 'Syracuse Nationals', cols: 12, rows: 2 }] },
        {
          superior: [
            { cols: 6 },
            { texto: '★', cols: 2 },
            { cols: 2 }
          ],
          inferior: [
            { className: 'nba_76ers_chgname', texto: 'Philadelphia 76ers', cols: 10 }
          ]
        },
        { superior: [{ texto: 'Philadelphia 76ers', cols: 14, rows: 2 }] },
        { superior: [{ texto: 'Philadelphia 76ers', cols: 12, rows: 2 }] },
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 4 },
          ],
          inferior: [{ texto: 'Philadelphia 76ers', cols: 8 }]
        },
        { veces: 6, superior: [{ texto: 'Philadelphia 76ers', cols: 14, rows: 2 }] },
      ]
    },
    {
      className: 'nba_hawks top1',
      classNameInf: 'nba_hawks',
      etapas: [
        {
          superior: [{ className: 'noLiga', texto: 'Buffalo Bisons', }],
          inferior: [{ className: 'noLiga', cols: 2 }]
        },
        { superior: [{ className: 'noLiga noLiga_chgname', }] },
        { superior: [{ className: 'noLiga', texto: 'NBL', cols: 4, rows: 2 }] },
        {
          superior: [
            { texto: 'Tri-Cities Blackhawks', cols: 4, rows: 2 },
          ]
        },
        {
          superior: [
            { claseName: 'nba_hawks_chgname', texto: 'Milwaukee Hawks', cols: 8, rows: 2 }
          ]
        },
        {
          superior: [
            { claseName: 'nba_hawks_chgname', cols: 4 },
            { texto: '★', cols: 2 },
            { cols: 4 }
          ],
          inferior: [
            { claseName: 'nba_hawks_chgname', texto: 'St. Louis Hawks', cols: 10 }
          ]
        },
        { veces: 2, superior: [{ texto: 'St. Louis Hawks', cols: 8, rows: 2 }] },
        {
          superior: [{
            className: 'nba_hawks_chgname', texto: 'Atlanta Hawks', cols: 10, rows: 2
          }]
        },
        { veces: 9, superior: [{ texto: 'Atlanta Hawks', cols: 12, rows: 2 }] },
      ]
    },
    {
      className: 'fila2 top2',
      etapas: [
        { superior: [{ className: 'noLiga', texto: 'NBL', cols: 6 }] },
        {
          superior: [
            { claseName: 'nba_waterloo', texto: 'Waterloo Hawks', cols: 2 },
          ]
        },
        { superior: [{ className: 'noLiga', texto: 'NPBL', cols: 2 }] },
        { veces: 3, superior: [{ cols: 50 }] },
        { superior: [{ cols: 2 }] },
      ]
    },
    {
      className: 'nba_bullets top2',
      className: 'nba_bullets',
      etapas: [
        {
          superior: [{ className: 'fila2', cols: 30, rows: 2 }]
        },
        {
          superior: [
            { claseName: 'nba_packers', texto: 'Chicago Packers', cols: 2, rows: 2 },
          ]
        },
        {
          superior: [
            {
              claseName: 'nba_packers nba_packers_chgname',
              texto: 'Chicago Zephyrs',
              cols: 2, rows: 2
            },
          ]
        },
        { veces: 2, superior: [{ texto: 'Baltimore Bullets', cols: 10, rows: 2 }] },
        {
          superior: [
            { className: 'nba_bullets_chgname', texto: 'Capital Bullets (Washington)', cols: 2, rows: 2 },
          ]
        },
        {
          superior: [
            { className: 'nba_bullets_chgname', cols: 6 },
            { texto: '★', cols: 2 },
            { cols: 2 },
          ],
          inferior: [
            { className: 'nba_bullets_chgname', texto: 'Washington Bullets', cols: 10 },
          ]
        },
        { veces: 3, superior: [{ texto: 'Washington Bullets', cols: 12, rows: 2 }] },
        {
          superior: [
            {
              className: 'nba_bullets_chgname',
              texto: 'Washington Wizards',
              cols: 14, rows: 2
            },
          ]
        },
        { veces: 2, superior: [{ texto: 'Washington Wizards', cols: 16, rows: 2 }] },
        { superior: [{ texto: 'Washington Wizards', cols: 14, rows: 2 }] },
      ]
    },
    {
      className: 'nba_chicago top1',
      classNameInf: 'nba_chicago',
      etapas: [
        { superior: [{ className: 'fila1', cols: 40, rows: 2 }] },
        { veces: 4, superior: [{ texto: 'Chicago Bulls', cols: 12, rows: 2 }] },
        {
          superior: [
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 2 }
          ],
          inferior: [{ texto: 'Chicago Bulls', cols: 8 }]
        },
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
          ],
          inferior: [{ texto: 'Chicago Bulls', cols: 8 }]
        },
        { veces: 4, superior: [{ texto: 'Chicago Bulls', cols: 12, rows: 2 }] },
        { superior: [{ texto: 'Chicago Bulls', cols: 10, rows: 2 }] },
      ]
    },
    {
      className: 'nba_seattle top2',
      classNameInf: 'nba_seattle',
      etapas: [
        { superior: [{ className: 'fila2', cols: 42, rows: 2 }] },
        {
          superior: [
            { texto: 'Seattle Supersonics', cols: 18, rows: 2 },
          ]
        },
        {
          superior: [
            { cols: 4 },
            { texto: '★', cols: 2 },
            { cols: 2 },
          ],
          inferior: [{ texto: 'Seattle Supersonics', cols: 8 }]
        },
        {
          veces: 4,
          superior: [
            { texto: 'Seattle Supersonics', cols: 14, rows: 2 },
          ]
        },
        {
          veces: 2,
          superior: [
            {
              className: 'nba_thunder',
              texto: 'Oklahoma City Thunder',
              cols: 10, rows: 2
            },
          ]
        },
        {
          superior: [
            {
              className: 'nba_thunder',
              texto: 'Oklahoma City Thunder',
              cols: 10, rows: 2
            },
          ]
        },
        {
          superior: [
            { className: 'nba_thunder', cols: 2 },
            { className: 'nba_thunder', texto: '★', cols: 2 },
            { className: 'nba_thunder', cols: 4 },
          ],
          inferior: [{
            className: 'nba_thunder',
            texto: 'Oklahoma City Thunder',
            cols: 8
          }]
        },
      ]
    },
    {
      className: 'nba_rockets top1',
      classNameInf: 'nba_rockets',
      etapas: [
        { superior: [{ className: 'fila1', cols: 42, rows: 2 }] },
        { superior: [{ texto: 'San Diego Rockets', cols: 8, rows: 2 }] },
        {
          superior: [
            {
              className: 'nba_rockets_chgname',
              texto: 'Houston Rockets',
              cols: 10, rows: 2
            },
          ]
        },
        { superior: [{ texto: 'Houston Rockets', cols: 12, rows: 2 }] },
        { veces: 2, superior: [{ texto: 'Houston Rockets', cols: 10, rows: 2 }] },
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 2 },
          ],
          inferior: [{ texto: 'Houston Rockets', cols: 8 }]
        },
        { veces: 4, superior: [{ texto: 'Houston Rockets', cols: 14, rows: 2 }] },
        { superior: [{ texto: 'Houston Rockets', cols: 8, rows: 2 }] },
      ]
    },
    {
      className: 'nba_milwaukee top2',
      classNameInf: 'nba_milwaukee',
      etapas: [
        { superior: [{ className: 'fila2', cols: 44, rows: 2 }] },
        {
          superior: [
            { cols: 4 },
            { texto: '★', cols: 2 },
            { cols: 6 }
          ],
          inferior: [
            { texto: 'Milwaukee Bucks', cols: 12 }
          ]
        },
        { veces: 2, superior: [{ texto: 'Milwaukee Bucks', cols: 16, rows: 2 }] },
        { veces: 4, superior: [{ texto: 'Milwaukee Bucks', cols: 14, rows: 2 }] },
        {
          superior: [
            { cols: 4 },
            { texto: '★', cols: 2 },
            { cols: 4 }
          ],
          inferior: [
            { texto: 'Milwaukee Bucks', cols: 10 }
          ]
        },
        {
          superior: [
            { cols: 2 },
            { texto: '◆', cols: 2 },
            { cols: 4 }
          ],
          inferior: [
            { texto: 'Milwaukee Bucks', cols: 8 }
          ]
        },
      ]
    },
    {
      className: 'nba_phoenix top1',
      etapas: [
        { superior: [{ className: 'fila1', cols: 44 }] },
        { veces: 11, superior: [{ texto: 'Phoenix Suns', cols: 10 }] },
        { superior: [{ texto: 'Phoenix Suns', cols: 8 }] },
      ]
    },
    {
      className: 'nba_buffalo top2',
      classNameInf: 'nba_boston',
      etapas: [
        { superior: [{ className: 'fila2', cols: 48, rows: 2 }] },
        { veces: 2, superior: [{ texto: 'Buffalo Braves', cols: 8, rows: 2 }] },
        {
          superior: [
            { className: 'nba_boston', cols: 4 },
            { className: 'nba_boston', texto: '★', cols: 2 },
            { className: 'nba_boston', cols: 2 }
          ],
          inferior: [{ texto: 'Boston Celtics', cols: 8 }]
        },
        {
          superior: [
            { className: 'nba_boston', cols: 2 },
            { className: 'nba_boston', texto: '★', cols: 2 },
            { className: 'nba_boston', cols: 2 },
            { className: 'nba_boston', texto: '★', cols: 2 },
            { className: 'nba_boston', cols: 2 },
          ],
          inferior: [{ texto: 'Boston Celtics', cols: 10 }]
        },
        {
          veces: 3,
          superior: [
            {
              className: 'nba_boston',
              texto: 'Boston Celtics',
              cols: 12, rows: 2
            }]
        },
        {
          superior: [
            { className: 'nba_boston', cols: 4 },
            { className: 'nba_boston', texto: '★', cols: 2 },
            { className: 'nba_boston', cols: 2 },
          ],
          inferior: [{ texto: 'Boston Celtics', cols: 8 }]
        },
        {
          superior: [
            {
              className: 'nba_boston',
              texto: 'Boston Celtics',
              cols: 10, rows: 2
            }]
        },
        {
          veces: 2,
          superior: [
            {
              className: 'nba_boston',
              texto: 'Boston Celtics',
              cols: 8, rows: 2
            }]
        },
        {
          superior: [
            { className: 'nba_boston', cols: 2 },
            { className: 'nba_boston', texto: '★', cols: 2 },
            { className: 'nba_boston', cols: 6 },
          ],
          inferior: [{ texto: 'Boston Celtics', cols: 10 }]
        },
      ]
    },
    {
      className: 'nba_cleveland top1',
      classNameInf: 'nba_cleveland',
      etapas: [
        { superior: [{ className: 'fila1', cols: 48, rows: 2 }] },
        { superior: [{ texto: 'Cleveland Cavaliers', cols: 16, rows: 2 }] },
        { veces: 5, superior: [{ texto: 'Cleveland Cavaliers', cols: 14, rows: 2 }] },
        {
          superior: [
            { cols: 6 },
            { texto: '★', cols: 2 },
            { cols: 2 },
          ],
          inferior: [{ texto: 'Cleveland Cavaliers', cols: 10 }]
        },
        { superior: [{ texto: 'Cleveland Cavaliers', cols: 10, rows: 2 }] },
        { superior: [{ texto: 'Cleveland Cavaliers', cols: 8, rows: 2 }] },
      ]
    },
    {
      className: 'nba_portland top2',
      classNameInf: 'nba_portland',
      etapas: [
        { superior: [{ className: 'fila2', cols: 48, rows: 2 }] },
        {
          superior: [
            { texto: 'Portland Trail Blazers', cols: 10, rows: 2 },
          ]
        },
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 4 },
          ],
          inferior: [
            { texto: 'Portland Trail Blazers', cols: 8 }
          ]
        },
        {
          veces: 6,
          superior: [
            { texto: 'Portland Trail Blazers', cols: 16, rows: 2 },
          ]
        }
      ]
    },
    {
      className: 'nba_jazz top1',
      etapas: [
        { superior: [{ className: 'fila1', cols: 50 }] },
        { superior: [{ className: 'fila1', cols: 6 }] },
        { superior: [{ texto: 'New Orleans Jazz', cols: 10 }] },
        {
          superior: [
            { className: 'nba_jazz_chgname', texto: 'Utah Jazz', cols: 8 },
          ]
        },
        { veces: 8, superior: [{ texto: 'Utah Jazz', cols: 10 }] },
        { superior: [{ texto: 'Utah Jazz', cols: 8 }] },
      ]
    },
    {
      className: 'nba_denver top2',
      classNameInf: 'nba_denver',
      etapas: [
        { superior: [{ className: 'fila2', cols: 42, rows: 2 }] },
        {
          superior: [
            { className: 'noLiga', texto: 'Denver Rockets', cols: 16, rows: 2 },
          ]
        },
        {
          superior: [
            { className: 'noLiga noLiga_chgname', texto: 'ABA', cols: 2, rows: 2 },
          ]
        },
        { veces: 2, superior: [{ texto: 'Denver Nuggets', cols: 14, rows: 2 }] },
        { veces: 5, superior: [{ texto: 'Denver Nuggets', cols: 12, rows: 2 }] },
        {
          superior: [
            { cols: 4 },
            { texto: '★', cols: 2 },
            { cols: 8 }
          ],
          inferior: [
            { texto: 'Denver Nuggets', cols: 14 }
          ]
        },
      ]
    },
    {
      className: 'nba_indiana top1',
      etapas: [
        { superior: [{ className: 'fila1', cols: 42 }] },
        {
          superior: [
            { className: 'noLiga', texto: 'ABA', cols: 18 },
          ]
        },
        { veces: 6, superior: [{ texto: 'Indiana Pacers', cols: 14 },] },
        { superior: [{ texto: 'Indiana Pacers', cols: 12 },] },
        { superior: [{ texto: 'Indiana Pacers', cols: 6 },] },
      ]
    },
    {
      className: 'nba_nets top2',
      etapas: [
        { superior: [{ className: 'fila2', cols: 42 }] },
        {
          superior: [
            { className: 'noLiga', texto: 'New Jersey Americans', cols: 2 },
          ]
        },
        {
          superior: [
            { className: 'noLiga noLiga_chgname', texto: 'ABA', cols: 16 },
          ]
        },
        { superior: [{ texto: 'New York Nets', cols: 2 }] },
        {
          superior: [
            { className: 'nba_nets_chgname', texto: 'New Jersey Nets', cols: 8 },
          ]
        },
        { superior: [{ texto: 'New Jersey Nets', cols: 14 }] },
        { veces: 4, superior: [{ texto: 'New Jersey Nets', cols: 12 }] },
        {
          superior: [{
            className: 'nba_nets_chgname',
            texto: 'Brooklyn Nets',
            cols: 12
          }]
        },
        { superior: [{ texto: 'Brooklyn Nets', cols: 10 }] },
        { superior: [{ texto: 'Brooklyn Nets', cols: 8 }] },
      ]
    },
    {
      className: 'nba_spurs top1',
      classNameInf: 'nba_spurs',
      etapas: [
        { superior: [{ className: 'fila1', cols: 42, rows: 2 }] },
        {
          superior: [
            { className: 'noLiga', texto: 'Dallas Chaparrals', cols: 6, rows: 2 },
          ]
        },
        {
          superior: [
            {
              className: 'noLiga noLiga_chgname',
              texto: 'Texas Chaparrals',
              cols: 2, rows: 2
            },
          ]
        },
        {
          superior: [
            {
              className: 'noLiga noLiga_chgname',
              texto: 'Dallas Chaparrals',
              cols: 4, rows: 2
            },
          ]
        },
        {
          superior: [
            { className: 'noLiga noLiga_chgname', texto: 'ABA', cols: 6, rows: 2 },
          ]
        },
        { superior: [{ texto: 'San Antonio Spurs', cols: 14, rows: 2 }] },
        { veces: 2, superior: [{ texto: 'San Antonio Spurs', cols: 12, rows: 2 }] },
        {
          superior: [
            { cols: 6 },
            { texto: '★', cols: 2 },
            { cols: 4 },
          ],
          inferior: [
            { texto: 'San Antonio Spurs', cols: 12 }
          ]
        },
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 2 },
          ],
          inferior: [
            { texto: 'San Antonio Spurs', cols: 6 }
          ]
        },
        {
          superior: [
            { texto: '★', cols: 2 },
            { cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 2 },
          ],
          inferior: [
            { texto: 'San Antonio Spurs', cols: 8 }
          ]
        },
        { superior: [{ texto: 'San Antonio Spurs', cols: 8, rows: 2 }] },
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 6 },
          ],
          inferior: [
            { texto: 'San Antonio Spurs', cols: 10 }
          ]
        },
        { veces: 2, superior: [{ texto: 'San Antonio Spurs', cols: 10, rows: 2 }] },
      ]
    },
    {
      className: 'nba_dallas top2',
      classNameInf: 'nba_dallas',
      etapas: [
        { superior: [{ className: 'fila2', cols: 50, rows: 2 }] },
        { superior: [{ className: 'fila2', cols: 18, rows: 2 }] },
        { veces: 4, superior: [{ texto: 'Dallas Mavericks', cols: 12, rows: 2 }] },
        { superior: [{ texto: 'Dallas Mavericks', cols: 10, rows: 2 }] },
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 2 },
          ],
          inferior: [
            { texto: 'Dallas Mavericks', cols: 6 }
          ]
        },
        { veces: 2, superior: [{ texto: 'Dallas Mavericks', cols: 12, rows: 2 }] },
        // { superior: [{ texto: 'Dallas Mavericks', cols: 10, rows: 2 }] },
        { superior: [{ texto: 'Dallas Mavericks', cols: 6, rows: 2 }] },
      ]
    },
    {
      className: 'nba_hornets top1',
      etapas: [
        { superior: [{ className: 'fila1', cols: 50 }] },
        { superior: [{ className: 'fila1', cols: 36 }] },
        { superior: [{ texto: 'Charlotte Hornets', cols: 14 }] },
        { superior: [{ texto: 'Charlotte Hornets', cols: 12 }] },
        {
          superior: [{
            className: 'nba_hornets_chgname',
            texto: 'New Orleans Hornets',
            cols: 6
          }]
        },
        {
          superior: [{
            className: 'nba_hornets_chgname',
            texto: 'New Orleans-Oklahoma City Hornets',
            cols: 4
          }]
        },
        {
          superior: [{
            className: 'nba_hornets_chgname',
            texto: 'New Orleans Hornets',
            cols: 12
          }]
        },
        {
          veces: 2,
          superior: [{
            className: 'nba_pelicans',
            texto: 'New Orleans Pelicans',
            cols: 10
          }]
        },
        {
          superior: [{
            className: 'nba_pelicans',
            texto: 'New Orleans Pelicans',
            cols: 8
          }]
        },
      ]
    },
    {
      className: 'nba_miami top2',
      classNameInf: 'nba_miami',
      etapas: [
        { superior: [{ className: 'fila2', cols: 50, rows: 2 }] },
        { superior: [{ className: 'fila2', cols: 36, rows: 2 }] },
        { veces: 2, superior: [{ texto: 'Miami Heat', cols: 10, rows: 2 }] },
        { superior: [{ texto: 'Miami Heat', cols: 8, rows: 2 }] },
        {
          superior: [
            { cols: 4 },
            { texto: '★', cols: 2 },
            { cols: 2 },
          ],
          inferior: [
            { texto: 'Miami Heat', cols: 8 }
          ]
        },
        { superior: [{ texto: 'Miami Heat', cols: 6, rows: 2 }] },
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 2 }
          ],
          inferior: [
            { texto: 'Miami Heat', cols: 8 }
          ]
        },
        { veces: 2, superior: [{ texto: 'Miami Heat', cols: 10, rows: 2 }] },
        { superior: [{ texto: 'Miami Heat', cols: 6, rows: 2 }] },
      ]
    },
    {
      className: 'nba_wolves top1',
      etapas: [
        { superior: [{ className: 'fila1', cols: 50 }] },
        { superior: [{ className: 'fila1', cols: 38 }] },
        { veces: 4, superior: [{ texto: 'Minnesota Timberwolves', cols: 16 }] },
        { superior: [{ texto: 'Minnesota Timberwolves', cols: 10 }] },
      ]
    },
    {
      className: 'nba_orlando top2',
      etapas: [
        { superior: [{ className: 'fila2', cols: 50 }] },
        { superior: [{ className: 'fila2', cols: 38 }] },
        { veces: 5, superior: [{ texto: 'Orlando Magic', cols: 12 }] },
        { superior: [{ texto: 'Orlando Magic', cols: 8 }] },
        { superior: [{ texto: 'Orlando Magic', cols: 6 }] },
      ]
    },
    {
      className: 'nba_toronto top1',
      classNameInf: 'nba_toronto',
      etapas: [
        { superior: [{ className: 'fila1', cols: 50, rows: 2 }] },
        { superior: [{ className: 'fila1', cols: 48, rows: 2 }] },
        { superior: [{ texto: 'Toronto Raptors', cols: 12, rows: 2 }] },
        { veces: 3, superior: [{ texto: 'Toronto Raptors', cols: 10, rows: 2 }] },
        {
          superior: [
            { cols: 4 },
            { texto: '★', cols: 2 },
            { cols: 6 }
          ],
          inferior: [
            { texto: 'Toronto Raptors', cols: 12 }
          ]
        },
        { superior: [{ texto: 'Toronto Raptors', cols: 10, rows: 2 }] },
      ]
    },
    {
      className: 'nba_grizzlies top2',
      etapas: [
        { superior: [{ className: 'fila2', cols: 50 }] },
        { superior: [{ className: 'fila2', cols: 48 }] },
        { superior: [{ texto: 'Vancouver Grizzlies', cols: 12 }] },
        {
          superior: [{
            className: 'nba_grizzlies_chgname',
            texto: 'Memphis Grizzlies',
            cols: 14
          }]
        },
        { veces: 2, superior: [{ texto: 'Memphis Grizzlies', cols: 14 }] },
        { superior: [{ texto: 'Memphis Grizzlies', cols: 10 }] },
      ]
    },
    {
      className: 'nba_bobcats top1',
      etapas: [
        { veces: 2, superior: [{ className: 'fila1', cols: 50 }] },
        { superior: [{ className: 'fila1', cols: 16 }] },
        { veces: 2, superior: [{ texto: 'Charlotte Bobcats', cols: 10 }] },
        {
          superior: [{
            className: 'nba_hornets',
            texto: 'Charlotte Hornets',
            cols: 14
          }]
        },
        {
          superior: [{
            className: 'nba_hornets',
            texto: 'Charlotte Hornets',
            cols: 12
          }]
        },
      ]
    },
  ])
}


export default initNbaTableYears;

