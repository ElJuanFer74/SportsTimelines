// sports_tl.js
// Módulo ES: genera la fila de encabezado/pie con un <th> por año,
// a partir de una colección de rangos { startYear, endYear, columns }.

/**
 * Crea un elemento <tr> con un <th> por cada año incluido en los rangos
 * indicados e lo inserta en el <thead> y <tfoot> de la tabla con
 * id "table_timeline". Si no existen, los crea.
 *
 * @param {Array<{startYear:number|string, endYear:number|string, columns?:number}>} ranges
 *   Colección de objetos. Cada objeto define un rango de años [startYear,
 *   endYear] (inclusive) y una cantidad opcional de columnas (colspan) que
 *   se aplica a cada <th> de ese rango. Si `columns` no se especifica (o es
 *   1) no se añade el atributo colspan.
 *   Si `startYear` o `endYear` son strings, se trata como un único año/sección
 *   (equivalente a startYear === endYear), produciendo un solo <th>.
 * @returns {HTMLTableRowElement} La fila creada (la insertada en <thead>).
 */
export function createYearHeaderRow(ranges = []) {
  if (!Array.isArray(ranges)) {
    throw new TypeError("Se esperaba un array de rangos.");
  }

  const row = document.createElement("tr");

  for (const item of ranges) {
    if (item === null || typeof item !== "object") {
      throw new TypeError("Cada elemento de la colección debe ser un objeto.");
    }

    const startIsString = typeof item.startYear === "string";
    const endIsString = typeof item.endYear === "string";

    // Si alguno de los dos es string, se trata como una única sección de un
    // año (equivalente a startYear === endYear), sin intentar interpretar un
    // rango numérico.
    if (startIsString || endIsString) {
      const label =
        startIsString ? item.startYear : item.endYear;

      const columns = Number.isFinite(Number(item.columns))
        ? Math.trunc(Number(item.columns))
        : 1;
      const useColspan = columns > 1;

      const th = document.createElement("th");
      th.textContent = String(label);
      if (useColspan) {
        th.setAttribute("colspan", String(columns));
      }
      row.appendChild(th);
      continue;
    }

    const start = Number(item.startYear);
    const end = Number(item.endYear);

    if (!Number.isFinite(start) || !Number.isFinite(end)) {
      throw new TypeError("startYear y endYear deben ser números válidos.");
    }
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
      throw new TypeError("startYear y endYear deben ser enteros.");
    }
    if (start > end) {
      throw new RangeError("startYear no puede ser mayor que endYear.");
    }

    const columns = Number.isFinite(Number(item.columns))
      ? Math.trunc(Number(item.columns))
      : 1;
    const useColspan = columns > 1;

    for (let year = start; year <= end; year++) {
      const th = document.createElement("th");
      th.textContent = String(year);
      if (useColspan) {
        th.setAttribute("colspan", String(columns));
      }
      row.appendChild(th);
    }
  }

  const table = document.querySelector(".table_timeline");
  if (!table) {
    // table = document.getElementById("table_timeline");
    // if (!table) {
    throw new Error('No se encontró la tabla con id "table_timeline".');
    // }
  }

  const thead = table.tHead || table.createTHead();
  const tfoot = table.tFoot || table.createTFoot();

  // No se sobrescribe el thead: se agrega la fila al final.
  // tfoot.innerHTML = "";

  thead.appendChild(row);
  const rowClone = row.cloneNode(true);
  tfoot.insertBefore(rowClone, tfoot.firstChild);

  // Fila auxiliar de ajuste en el pie de tabla.
  let totalCols = 0;
  for (const th of row.children) {
    const span = Number(th.getAttribute("colspan")) || 1;
    totalCols += Number.isFinite(span) && span > 0 ? span : 1;
  }
  const ajustesRow = document.createElement("tr");
  ajustesRow.className = "ajustes invisible";
  for (let i = 0; i < totalCols; i++) {
    const td = document.createElement("td");
    td.innerHTML = "Paso";
    ajustesRow.appendChild(td);
  }
  tfoot.appendChild(ajustesRow);

  return row;
}

/*
 * Ejemplo de uso:
 *
 * import { createYearHeaderRow } from './sports_tl.js';
 *
 * createYearHeaderRow([
 *   { startYear: 1949, endYear: 1949 },
 *   { startYear: 1950, endYear: 1955, columns: 2 }
 * ]);
 *
 * Resultado: un <tr> con
 *   <th>1949</th>
 *   <th colspan="2">1950</th>
 *   <th colspan="2">1951</th>
 *   <th colspan="2">1952</th>
 *   <th colspan="2">1953</th>
 *   <th colspan="2">1954</th>
 *   <th colspan="2">1955</th>
 * insertado en el <thead> y <tfoot> de #table_timeline.
 */


/**
 * Crea una o dos filas (<tr>) a partir de un objeto con `className` y
 * `etapas`.
 *
 * Cada elemento de `etapas` es un objeto con dos atributos:
 *   - superior: array de celdas { claseName, cols, texto }
 *   - inferior: array de celdas { claseName, cols, texto } (o null/vacío)
 *
 * Cada celda se traduce a un <td>: `claseName` -> class, `cols` -> colspan
 * y `texto` -> contenido (si no tiene valor se usa "&nbsp;"). Si `inferior`
 * es null/vacío, las celdas de `superior` reciben rowspan="2".
 *
 * @param {{ className?: string, etapas: Array<{superior?:Array, inferior?:Array|null}> }} config
 * @returns {HTMLTableRowElement[]} Array con la fila superior (y la inferior si aplica).
 */
export function createStageRow(config = {}) {
  const { className, classNameInf, etapas } = config;

  const stages = Array.isArray(etapas) ? etapas : [];

  const superiorRow = document.createElement("tr");
  if (className) {
    superiorRow.className = String(className);
  }

  let hasInferior = false;
  for (const stage of stages) {
    const inferior = stage && stage.inferior;
    if (Array.isArray(inferior) && inferior.length > 0) {
      hasInferior = true;
      break;
    }
  }

  const inferiorRow = hasInferior ? document.createElement("tr") : null;
  if (inferiorRow) {
    const infClass = classNameInf != null && String(classNameInf).trim() !== ""
      ? classNameInf
      : className;
    if (infClass) {
      inferiorRow.className = String(infClass);
    }
  }

  const buildCell = (c) => {
    const td = document.createElement("td");
    const cls = c && (c.claseName != null ? c.claseName : c.className);
    if (cls != null && String(cls).trim() !== "") {
      td.setAttribute("class", String(cls));
    }
    const cols = c && c.cols;
    if (cols != null && String(cols).trim() !== "") {
      const n = Number(cols);
      if (Number.isFinite(n) && n > 0) {
        td.colSpan = n;
      }
      td.setAttribute("colspan", String(cols));
    }
    const rows = c && (c.rows != null ? c.rows : c.rowspan);
    if (rows != null && String(rows).trim() !== "") {
      td.setAttribute("rowspan", String(rows));
    }
    const texto = c && c.texto;
    if (texto == null || String(texto).trim() === "") {
      td.innerHTML = "&nbsp;";
    } else {
      td.textContent = String(texto);
    }
    return td;
  };

  for (const stage of stages) {
    const superiorCells = Array.isArray(stage && stage.superior)
      ? stage.superior
      : [];
    const inferiorCells =
      stage && Array.isArray(stage.inferior) ? stage.inferior : null;
    const hasInf = Array.isArray(inferiorCells) && inferiorCells.length > 0;

    // Atributo opcional "veces": si viene un número mayor a 1, se repite
    // esa iteración (la carga de las celdas de este stage) esa cantidad.
    const vecesRaw = stage && stage.veces;
    const vecesNum = Number(vecesRaw);
    const reps = Number.isFinite(vecesNum) && vecesNum > 1
      ? Math.trunc(vecesNum)
      : 1;

    for (let v = 0; v < reps; v++) {
      for (const c of superiorCells) {
        const td = buildCell(c);
        superiorRow.appendChild(td);
      }

      if (hasInf && inferiorRow) {
        for (const c of inferiorCells) {
          inferiorRow.appendChild(buildCell(c));
        }
      }
    }
  }

  const result = [superiorRow];
  if (inferiorRow) {
    result.push(inferiorRow);
  }
  return result;
}

/**
 * Recibe un array de objetos del mismo tipo que `createStageRow` y ejecuta
 * `createStageRow` por cada uno. Devuelve un array plano con todas las filas
 * (<tr>) generadas.
 *
 * @param {Array} configs
 * @returns {HTMLTableRowElement[]} Filas generadas (1 o 2 por elemento).
 */
export function createStageRows(configs = []) {
  if (!Array.isArray(configs)) {
    throw new TypeError("Se esperaba un array de configuraciones.");
  }
  const rows = [];
  for (const cfg of configs) {
    const result = createStageRow(cfg);
    if (Array.isArray(result)) {
      rows.push(...result);
    } else if (result) {
      rows.push(result);
    }
  }
  return rows;
}

export default createYearHeaderRow;

