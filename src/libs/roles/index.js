export const rolesAry = [
  { code: 9, value: 'admin', name: '超级管理员' },
  { code: 8, value: 'manager', name: '管理员' },
  { code: 7, value: 'editor', name: '编辑人员' },
  { code: 1, value: 'lawyer', name: '律师' },
  { code: 0, value: 'user', name: '普通用户' }
]

/**
 * @description 根据value获取name
 * @param {string} value
 * @return {string}
 */
export const rolesValueName = (value) => {
  rolesAry.forEach((item) => {
    if (item.value === value) {
      return item.name
    }
  })
}

/**
 * @description 根据value获取name
 * @param {string} value
 * @return {string}
 */
export const rolesCodeName = (code) => {
  rolesAry.forEach((item) => {
    if (item.code === code) {
      return item.name
    }
  })
}
