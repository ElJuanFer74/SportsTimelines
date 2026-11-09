// nba.js
// Módulo ES: ejemplo de uso de sports_tl.js para la NBA.

import { createYearHeaderRow, createStageRows } from './sports_tl.js';

/**
 * Genera la fila de años de la NBA en el <thead> y <tfoot> de
 * la tabla con id "table_timeline".
 *
 * @returns {HTMLTableRowElement} La fila creada.
 */
export function initNbaTableYears() {
  return createYearHeaderRow([
    { startYear: 1949, endYear: 1949 },
    { startYear: 1950, endYear: 1979, columns: 2 },
  ]);
}

export function initNbaTableData() {
  return createStageRows([
    {
      className: 'fila1 top1',
      etapas: [
        {
          superior: [
            { claseName: 'nba_anderson', texto: 'Anderson Packers', cols: 2 },
          ]
        },
        {
          superior: [{ cols: 50 }]
        },
        {
          superior: [{ cols: 8 }]
        },
      ]
    },
    {
      className: 'fila2 top2',
      etapas: [
        {
          superior: [
            { claseName: 'nba_bullets', texto: 'Baltimore Bullets', cols: 9 },
          ]
        },
        {
          superior: [{ cols: 51 }]
        },
      ]
    },
    {
      className: 'nba_boston top1',
      classNameInf: 'nba_boston',
      etapas: [
        {
          superior: [
            { texto: 'Boston Celtics', rows: 2, cols: 6 }
          ]
        },
        {
          superior: [
            { texto: 'Boston Celtics', rows: 2, cols: 8 }
          ]
        },
        {
          superior: [
            { texto: '★', cols: 2 },
            { cols: 2 },
            { texto: '★', cols: 2 },
          ],
          inferior: [
            { texto: 'Boston Celtics', cols: 6}
          ]
        },
        {
          superior: [
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
          ],
          inferior: [
            { texto: 'Boston Celtics', cols: 6}
          ]
        },
        {
          superior: [
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
          ],
          inferior: [
            { texto: 'Boston Celtics', cols: 6}
          ]
        },
        {
          superior: [
            { texto: '★', cols: 2 },
            { cols: 2 },
            { texto: '★', cols: 2 },
          ],
          inferior: [
            { texto: 'Boston Celtics', cols: 6}
          ]
        },
        {
          superior: [
            { texto: '★', cols: 2 },
            { cols: 4 },
          ],
          inferior: [
            { texto: 'Boston Celtics', cols: 6}
          ]
        },
        {
          superior: [
            { cols: 4 },
            { texto: '★', cols: 2 },
          ],
          inferior: [
            { texto: 'Boston Celtics', cols: 6}
          ]
        },
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            {cols: 4}
          ],
          inferior: [
            { texto: 'Boston Celtics', cols: 8}
          ]
        },
        {
          superior: [ { className: 'nba_clippers', texto: 'San Diego Clippers', cols: 2, rows: 2}]
        }
      ]
    },
    {
      className: 'fila2 top2',
      etapas: [
        {
          superior: [
            { claseName: 'nba_stags', texto: 'Chicago Stags', cols: 2 },
          ]
        },
        {
          superior: [{ cols: 50 }]
        },
        {
          superior: [{ cols: 8 }]
        },
      ]
    },
    {
      className: 'fila1 top1',
      etapas: [
        {
          superior: [
            { claseName: 'nba_denver', texto: 'Denver Nuggets', cols: 2 },
          ]
        },
        {
          superior: [{ cols: 50 }]
        },
        {
          superior: [{ cols: 8 }]
        },
      ]
    },
    {
      className: 'nba_pistons top2',
      etapas: [
        {
          superior: [
            { texto: 'Fort Wayne Pistons', cols: 8 }
          ]
        },
        {
          superior: [
            { texto: 'Fort Wayne Pistons', cols: 8 }
          ]
        },
        {
          superior: [
            { className: 'nba_pistons_chgname', texto: 'Detroit Pistons', cols: 12 }
          ]
        },
        {
          superior: [
            { texto: 'Detroit Pistons', cols: 12 }
          ]
        },
        {
          superior: [
            { texto: 'Detroit Pistons', cols: 12 }
          ]
        },
        {
          superior: [
            { texto: 'Detroit Pistons', cols: 8 }
          ]
        },
      ]
    },
    {
      className: 'fila1 top1',
      etapas: [
        {
          superior: [
            { claseName: 'nba_olympians', texto: 'Indianapolis Olympians', cols: 8 },
          ]
        },
        {
          superior: [{ cols: 50 }]
        },
        {
          superior: [{ cols: 2 }]
        },
      ]
    },
    {
      className: 'nba_lakers top2',
      classNameInf: 'nba_lakers',
      etapas: [
        {
          superior: [
            { texto: '★', cols: 2 },
            { cols: 2 },
            { texto: '★', cols: 2 },
          ],
          inferior: [
            { texto: 'Minneapolis Lakers', cols: 6 }
          ]
        },
        {
          superior: [
            { texto: '★', cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 2 },
          ],
          inferior: [
            { texto: 'Minneapolis Lakers', cols: 6 }
          ]
        },
        {
          superior: [
            { texto: 'Minneapolis Lakers', cols: 10, rows: 2 }
          ]
        },
        {
          superior: [
            { className: 'nba_lakers_chgname', texto: 'Los Angeles Lakers', cols: 12, rows: 2 }
          ]
        },
        {
          superior: [
            { texto: 'Los Angeles Lakers', cols: 8, rows: 2 }
          ]
        },
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 4 },
          ],
          inferior: [
            { texto: 'Los Angeles Lakers', cols: 8 }
          ]
        },
        {
          superior: [
            { texto: 'Los Angeles Lakers', cols: 10, rows: 2 }
          ]
        },
      ]
    },
    {
      className: 'nba_knicks top1',
      classNameInf: 'nba_knicks',
      etapas: [
        {
          superior: [
            { texto: 'New York Knicks', cols: 12, rows: 2 },
          ]
        },
        {
          superior: [
            { texto: 'New York Knicks', cols: 12, rows: 2 },
          ]
        },
        {
          superior: [
            { texto: 'New York Knicks', cols: 12, rows: 2 },
          ]
        },
        {
          superior: [
            { cols: 4 },
            { texto: '★', cols: 2 },
            { cols: 2 },
          ],
          inferior: [ { texto: 'New York Knicks', cols: 8 }]
        },
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 2 },
          ],
          inferior: [ { texto: 'New York Knicks', cols: 6 }]
        },
        {
          superior: [
            { texto: 'New York Knicks', cols: 10, rows: 2 },
          ]
        },
      ]
    },
    {
      className: 'nba_warriors top2',
      classNameInf: 'nba_warriors',
      etapas: [
        {
          superior: [
            { texto: 'Philadelphia Warriors', cols: 10, rows: 2 },
          ]
        },
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 4 }
          ],
          inferior: [
            { texto: 'Philadelphia Warriors', cols: 8 }
          ]
        },
        {
          superior: [
            { texto: 'Philadelphia Warriors', cols: 8, rows: 2 },
          ]
        },
        {
          superior: [
            { className: 'nba_warriors_chgname', texto: 'San Francisco Warriors', cols: 10, rows: 2 },
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
            { texto: 'Golden State Warriors (Oakland)', cols: 4, rows: 2 }
          ]
        }
      ]
    },
    {
      className: 'nba_kings top1',
      classNameInf: 'nba_kings',
      etapas: [
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 4 }
          ],
          inferior: [
            { texto: 'Rochester Royals', cols: 8 }
          ]
        },
        {
          superior: [{ texto: 'Rochester Royals', cols: 8, rows: 2 }]
        },
        {
          superior: [{ className:'nba_kings_chgname', texto: 'Cincinnati Royals', cols: 12, rows: 2 }]
        },
        {
          superior: [{ texto: 'Cincinnati Royals', cols: 12, rows: 2 }]
        },
        {
          superior: [{ texto: 'Cincinnati Royals', cols: 6, rows: 2 }]
        },
        {
          superior: [{ className: 'nba_kings_chgname', texto: 'Kansas City-Omaha Kings', cols: 6, rows: 2 }]
        },
        {
          superior: [{ className: 'nba_kings_chgname', texto: 'Kansas City Kings', cols: 8, rows: 2 }]
        },
      ]
    },
    {
      className: 'fila2 top2',
      etapas: [
        {
          superior: [
            { claseName: 'nba_sheboygan', texto: 'Sheboygan Redskins', cols: 2 },
          ]
        },
        {
          superior: [{ cols: 50 }]
        },
        {
          superior: [{ cols: 8 }]
        },
      ]
    },
    {
      className: 'fila1 top1',
      etapas: [
        {
          superior: [
            { claseName: 'nba_bombers', texto: 'St. Louis Bombers', cols: 2 },
          ]
        },
        {
          superior: [{ cols: 50 }]
        },
        {
          superior: [{ cols: 8 }]
        },
      ]
    },
    {
      className: 'nba_76ers top2',
      classNameInf: 'nba_76ers',
      etapas: [
        {
          superior: [{ texto: 'Syracuse Nationals', cols: 8, rows: 2 }]
        },
        {
          superior: [
            { cols: 2 },
            { texto: '★', cols: 2 },
            { cols: 4 }
          ],
          inferior: [
            { texto: 'Syracuse Nationals', cols: 8 }
          ]
        },
        {
          superior: [{ texto: 'Syracuse Nationals', cols: 12, rows: 2 }]
        },
        {
          superior: [
            { cols: 6 },
            { texto: '★', cols: 2 },
            { cols: 2 }
          ],
          inferior: [
            { className:'nba_76ers_chgname', texto: 'Philadelphia 76ers', cols: 10 }
          ]
        },
        {
          superior: [{ texto: 'Philadelphia 76ers', cols: 12, rows: 2 }]
        },
        {
          superior: [{ texto: 'Philadelphia 76ers', cols: 10, rows: 2 }]
        },
      ]
    },
    {
      className: 'nba_hawks top1',
      classNameInf: 'nba_hawks',
      etapas: [
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
            { claseName:'nba_hawks_chgname', cols: 4 },
            { texto: '★', cols: 2 },
            { cols: 4 }
          ],
          inferior: [
            { claseName:'nba_hawks_chgname', texto: 'St. Louis Hawks', cols: 10 }
          ]
        },
        {
          superior: [ {
            texto: 'St. Louis Hawks', cols: 8, rows: 2
          }]
        },
        {
          superior: [ {
            texto: 'St. Louis Hawks', cols: 8, rows: 2
          }]
        },
        {
          superior: [ {
            className: 'nba_hawks_chgname', texto: 'Atlanta Hawks', cols: 10, rows: 2
          }]
        },
        {
          superior: [ {
            texto: 'Atlanta Hawks', cols: 12, rows: 2
          }]
        },
      ]
    },
    {
      className: 'fila2 top2',
      etapas: [
        {
          superior: [
            { claseName: 'nba_capitals', texto: 'Washington Capitals', cols: 3 },
          ]
        },
        {
          superior: [{ cols: 51 }]
        },
        {
          superior: [{ cols: 6 }]
        },
      ]
    },
    {
      className: 'fila1 top1',
      etapas: [
        {
          superior: [
            { claseName: 'nba_waterloo', texto: 'Waterloo Hawks', cols: 2 },
          ]
        },
        {
          superior: [{ cols: 50 }]
        },
        {
          superior: [{ cols: 8 }]
        },
      ]
    },
    {
      className: 'nba_bullets top2',
      className: 'nba_bullets',
      etapas: [
        {
          superior: [ {className:'fila2', cols: 24, rows: 2} ]
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
              cols: 2, rows: 2 },
          ]
        },
        {
          superior: [
            { texto: 'Baltimore Bullets', cols: 10, rows: 2 },
          ]
        },
        {
          superior: [
            { texto: 'Baltimore Bullets', cols: 10, rows: 2 },
          ]
        },
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
      ]
    },
    {
      className: 'nba_chicago top1',
      etapas: [
        {
          superior: [ {className:'fila1', cols: 34} ]
        },
        {
          superior: [
            { texto: 'Chicago Bulls', cols: 10 },
          ]
        },
        {
          superior: [
            { texto: 'Chicago Bulls', cols: 10 },
          ]
        },
        {
          superior: [
            { texto: 'Chicago Bulls', cols: 6 },
          ]
        },
      ]
    },
    {
      className: 'nba_seattle top2',
      classNameInf: 'nba_seattle',
      etapas: [
        {
          superior: [ {className:'fila2', cols: 36, rows: 2} ]
        },
        {
          superior: [
            { texto: 'Seattle Supersonics', cols: 16, rows: 2 },
          ]
        },
        {
          superior: [
            { cols: 6 },
            { texto: '★', cols: 2 },
          ],
          inferior : [
            { texto: 'Seattle Supersonics', cols: 8 },
          ]
        },
      ]
    },
    {
      className: 'nba_rockets top1',
      etapas: [
        {
          superior: [ {className:'fila1', cols: 36} ]
        },
        {
          superior: [
            { texto: 'San Diego Rockets', cols: 8 },
          ]
        },
        {
          superior: [
            { className:'nba_rockets_chgname', texto: 'Houston Rockets', cols: 10 },
          ]
        },
        {
          superior: [
            { texto: 'Houston Rockets', cols: 6 },
          ]
        },
      ]
    },
    {
      className: 'nba_milwaukee top2',
      classNameInf: 'nba_milwaukee',
      etapas: [
        {
          superior: [ {className:'fila2', cols: 38, rows: 2} ]
        },
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
        {
          superior: [ {texto: 'Milwaukee Bucks', cols: 10, rows: 2} ]
        },
      ]
    },
    {
      className: 'nba_phoenix top1',
      etapas: [
        {
          superior: [ {className:'fila1', cols: 38} ]
        },
        {
          superior: [
            { texto: 'Phoenix Suns', cols: 10 },
          ]
        },
        {
          superior: [
            { texto: 'Phoenix Suns', cols: 12 },
          ]
        },
      ]
    },
    {
      className: 'nba_buffalo top2',
      etapas: [
        {
          superior: [ {className:'fila2', cols: 42} ]
        },
        {
          superior: [
            { texto: 'Buffalo Braves', cols: 10 },
          ]
        },
        {
          superior: [
            { texto: 'Buffalo Braves', cols: 6 },
          ]
        },
        {
          superior: [
            { className: 'nba_boston', texto: 'Boston Celtics', cols: 2 },
          ]
        },
      ]
    },
    {
      className: 'nba_cleveland top1',
      etapas: [
        {
          superior: [ {className:'fila1', cols: 42} ]
        },
        {
          superior: [
            { texto: 'Cleveland Cavaliers', cols: 14 },
          ]
        },
        {
          superior: [
            { texto: 'Cleveland Cavaliers', cols: 4 },
          ]
        },
      ]
    },
    {
      className: 'nba_portland top2',
      classNameInf: 'nba_portland',
      etapas: [
        {
          superior: [ {className:'fila2', cols: 42, rows: 2} ]
        },
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
      ]
    },
    {
      className: 'nba_jazz top1',
      etapas: [
        {
          superior: [ {className:'fila1', cols: 50} ]
        },
        {
          superior: [
            { texto: 'New Orleans Jazz', cols: 10 },
          ]
        },
      ]
    },
    {
      className: 'nba_denver top2',
      etapas: [
        {
          superior: [ {className:'fila2', cols: 36} ]
        },
        {
          superior: [
            { className:'noLiga', texto: 'Denver Rockets', cols: 16 },
          ]
        },
        {
          superior: [
            { className:'noLiga noLiga_chgname', texto: '(ABA)', cols: 2 },
          ]
        },
        {
          superior: [
            { texto: 'Denver Nuggets', cols: 6 },
          ]
        },
      ]
    },
    {
      className: 'nba_indiana top1',
      etapas: [
        {
          superior: [ {className:'fila1', cols: 36} ]
        },
        {
          superior: [
            { className:'noLiga', texto: '(ABA)', cols: 18 },
          ]
        },
        {
          superior: [
            { texto: 'Indiana Pacers', cols: 6 },
          ]
        },
      ]
    },
    {
      className: 'nba_nets top2',
      etapas: [
        {
          superior: [ {className:'fila2', cols: 36} ]
        },
        {
          superior: [
            { className:'noLiga', texto: 'New Jersey Americans', cols: 2 },
          ]
        },
        {
          superior: [
            { className:'noLiga noLiga_chgname', texto: '(ABA)', cols: 16 },
          ]
        },
        {
          superior: [
            { texto: 'New York Nets', cols: 2 },
          ]
        },
        {
          superior: [
            { className: 'nba_nets_chgname', texto: 'New Jersey Nets', cols: 4 },
          ]
        },
      ]
    },
    {
      className: 'nba_spurs top2',
      etapas: [
        {
          superior: [ {className:'fila1', cols: 36} ]
        },
        {
          superior: [
            { className:'noLiga', texto: 'Dallas Chaparrals', cols: 6 },
          ]
        },
        {
          superior: [
            { className:'noLiga noLiga_chgname', texto: 'Texas Chaparrals', cols: 2 },
          ]
        },
        {
          superior: [
            { className:'noLiga noLiga_chgname', texto: 'Dallas Chaparrals', cols: 4 },
          ]
        },
        {
          superior: [
            { className:'noLiga noLiga_chgname', texto: '(ABA)', cols: 6 },
          ]
        },
        {
          superior: [
            { texto: 'San Antonio Spurs', cols: 6 },
          ]
        },
      ]
    },
  ])
}


export default initNbaTableYears;

