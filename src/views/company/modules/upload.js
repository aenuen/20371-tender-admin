import { defineAccept } from 'abbott-methods/import'
const ruleType = 'jpg,jpeg,gif,png,pdf'
export const rule = {
  type: ruleType,
  action: '/company/ruleUpload',
  accept: defineAccept(ruleType.split(','))
}
const licenseType = 'jpg,jpeg,gif,png,pdf,doc,docx'
export const license = {
  licenseType,
  action: '/company/licenseUpload',
  accept: defineAccept(licenseType.split(','))
}
