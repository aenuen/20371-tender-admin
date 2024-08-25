import { validateRequire, validateAllNumber } from 'abbott-methods/import'
import { fields } from './fields'

export const rules = {
  name: [{ validator: (rule, value, callback) => validateRequire(rule, value, callback, fields.name, '填写') }],
  sort: [{ validator: (rule, value, callback) => validateAllNumber(rule, value, callback, fields.sort, '填写') }]
}
