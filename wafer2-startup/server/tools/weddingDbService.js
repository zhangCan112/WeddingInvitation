const moment = require('moment')
const mysql = require('../qcloud.js').mysql

/**
* 新增一条祝福信息
*/
function addBlessInfo(open_id, name, bless) {
  const create_time = moment().format('YYYY-MM-DD HH:mm:ss')
  const last_update_time = create_time
  return mysql('bless')
  .insert({create_time, last_update_time, open_id, name, bless})
  .then(() => ({open_id, name, bless}))
  .catch(e => {
    throw new Error(`ERR_WHEN_INSERT_TO_DB\n${e}`)
  })
}

/**
* 查询所有祝福信息
*/
function querryAllBlessInfo() {
  return mysql('bless')
  .select('*').orderBy('last_update_time', 'desc')
}

/**
* 保存一条宾客注册信息
*/
function saveGuestInfo(open_id, name, phone, guest_num) {
  const create_time = moment().format('YYYY-MM-DD HH:mm:ss')
  const last_update_time = create_time

  return mysql('guest_info').count('open_id as hasUserInfo').where({open_id}).then(res => {
    // 如果存在用户则更新
    if (res[0].hasUserInfo) {
      return mysql('guest_info').update({last_update_time, name, phone, guest_num}).where({open_id})
    } else {
      return  mysql('guest_info').insert({create_time, last_update_time, open_id, name, phone, guest_num})
    }
  }) .then(() => ({open_id, name, phone, guest_num})).catch(e => {
    throw new Error(`ERR_WHEN_INSERT_TO_DB\n${e}`)
  })
}

module.exports = {
  addBlessInfo,
  querryAllBlessInfo,
  saveGuestInfo,
};
