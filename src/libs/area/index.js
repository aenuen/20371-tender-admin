import { regionData, codeToText } from 'element-china-area-data'

export const areaAry = regionData

/**
 * @description 根据区域编码获取区域名称
 * @param {string} code
 * @returns {string}
 */
export const areaName = (code) => {
  const ary = code.replace(/\//g, ',').split(',')
  if (ary.length === 3) {
    return `${codeToText(ary[0] || '')}/${codeToText(ary[1] || '')}/${codeToText(ary[2] || '')}`
  } else if (ary.length === 2) {
    return `${codeToText(ary[0] || '')}/${codeToText(ary[1] || '')}`
  } else if (ary.length === 1) {
    return codeToText(ary[0] || '')
  }
}
