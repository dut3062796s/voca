import toString from '../utils/string/to_string'
import nilDefault from '../utils/undefined/nil_default';
import isAlpha from './is_alpha';

/**
 * Checks if `subject` has only upper case characters.
 *
 * @function isAllUpperCase
 * @static
 * @memberOf Query
 * @param {string} [subject=''] The string to verify.
 * @return {boolean} Returns `true` if `subject` is upper case or `false` otherwise.
 * @example
 * v.isUpperCase('ACDC');
 * // => true
 *
 * v.isUpperCase('Morning');
 * // => false
 */
export default function(subject) {
  var subjectString = toString(nilDefault(subject, ''));
  return isAlpha(subjectString) && subjectString.toUpperCase() === subjectString;
}