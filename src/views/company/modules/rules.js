import { fields } from './fields'
import { validateRequire, validateAllNumber, validateAllCn, validateEmail, validateMobile, validatePrice } from 'abbott-methods/import'
export const ruleDetail = {
  company: [{ validator: (rule, value, callback) => validateRequire(rule, value, callback, fields.company, '填写', 3, 30) }],
  credit: [{ validator: (rule, value, callback) => validateAllNumber(rule, value, callback, fields.credit, '填写', 18, 18) }],
  legal: [{ validator: (rule, value, callback) => validateAllCn(rule, value, callback, fields.legal, 2, 10) }],
  type: [{ validator: (rule, value, callback) => validateRequire(rule, value, callback, fields.type, '填写') }],
  industry: [{ validator: (rule, value, callback) => validateRequire(rule, value, callback, fields.industry, '选择') }],
  workerNumber: [{ validator: (rule, value, callback) => validateAllNumber(rule, value, callback, fields.workerNumber, '填写', 1, 11) }],
  researcherNumber: [{ validator: (rule, value, callback) => validateAllNumber(rule, value, callback, fields.researcherNumber, '填写', 1, 11) }],
  yearSaleVolume: [{ validator: (rule, value, callback) => validatePrice(rule, value, callback, fields.yearSaleVolume, '填写', 1, 15) }],
  email: [{ validator: (rule, value, callback) => validateEmail(rule, value, callback, 5, 30) }],
  mobile: [{ validator: (rule, value, callback) => validateMobile(rule, value, callback) }],
  contacts: [{ validator: (rule, value, callback) => validateAllCn(rule, value, callback, fields.contacts, 2, 10) }],
  address: [{ validator: (rule, value, callback) => validateRequire(rule, value, callback, fields.address, '填写', 3, 50) }]
}
