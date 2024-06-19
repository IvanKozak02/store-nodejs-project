// const fieldsMap = new Map();
//
// fieldsMap.set('name', (value)=>{
//     return {$regex: value, $options: 'i'};
// })
//
// fieldsMap.set('featured', (value)=>{
//     return value;
// })
//
// fieldsMap.set('price', (value)=>{
//     return value;
// })

const getQueryObject = (model, reqQuery) => {
    const queryObject = {}
    const reqQueryKeys = Object.keys(reqQuery);
    const modelKeys = Object.keys(model.schema.paths);



    reqQueryKeys.forEach(key=>{
        if (modelKeys.includes(key)){
            if (key === 'name'){
                queryObject[key] = {$regex: reqQuery[key], $options: 'i'};
            }else {
                queryObject[key] = reqQuery[key];
            }
        }
    })
    return queryObject;
}

module.exports = getQueryObject;