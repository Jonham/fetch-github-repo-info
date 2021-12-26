/**
 * parse given index as progress of the total list
 *
 * @author Jonham.Chen <me@jonham.cn>
 * @date 2021-12-26
 * @export
 * @param {string | number} index
 * @param {any[]} list
 * @returns
 */
export function parsePercent(index, list) {
  const current = parseInt(index) + 1
  const total = list.length
  return `${current}/${total} (${((current / total) * 100).toFixed(2)}%)`
}
