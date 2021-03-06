
const critical = '01'
const normal = '02'
const warning = '03'

const lostKeyParam = '9527'

/**
 * 参数检查器
 * @param {Array} needCheckKeys
 * @param {Object} params
 * @return {String | null}
 */
function paramChecker(needCheckKeys, params) {
  console.log(needCheckKeys)
  console.log(params)
  for (var index in needCheckKeys) {
    let key = needCheckKeys[index];
    let value = params[key];
    if (!value || value.length == 0) {
      return key;
    }
  }
  return null;
}

/**
 * querry参数检查生成器
 * @param {...keys} needCheckKeys
 * @return {function} middleware
 */
const queryParamCheckMaker = (...needCheckKeys) => (ctx, next) => {
  return new Promise(function(resolve, reject) {
    let lostKey = paramChecker(needCheckKeys, ctx.query);

    //参数检查
    if (lostKey) {
      if (ctx.state.moduleCode) {
        ctx.state.code = `${critical}${ctx.state.moduleCode}${lostKeyParam}`
        } else {
        ctx.state.code = -1
        };
      ctx.state.error = `缺少查询参数:${lostKey}`;
      reject(new Error(ctx.state.error))
      return
    }
    resolve(next())
  }).catch((e) => {
    if (ctx.state.moduleCode) {
      ctx.state.code = `${critical}${ctx.state.moduleCode}${lostKeyParam}`
      } else {
      ctx.state.code = -1
      };
    throw e
  });
}

/**
 * post参数检查生成器
 * @param {...keys} needCheckKeys
 * @return {function} middleware
 */
const postParamCheckMaker = (...needCheckKeys) => (ctx, next) => {
  return new Promise(function(resolve, reject) {
    let lostKey = paramChecker(needCheckKeys, ctx.request.body);
    //参数检查
    if (lostKey) {
      if (ctx.state.moduleCode) {
        ctx.state.code = `${critical}${ctx.state.moduleCode}${lostKeyParam}`
      } else {
        ctx.state.code = -1
      };
      ctx.state.error = `缺少post参数:${lostKey}`;
      reject(new Error(ctx.state.error))
      return
    }
    resolve(next())
  }).catch((e)=>{
    if (ctx.state.moduleCode) {
      ctx.state.code = `${critical}${ctx.state.moduleCode}${lostKeyParam}`
      } else {
      ctx.state.code = -1
      };
    throw e
  });
}

module.exports = {
  query: queryParamCheckMaker,
  post: postParamCheckMaker
}
