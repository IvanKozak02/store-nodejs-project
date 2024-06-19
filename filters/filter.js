class Filters {
    constructor(query, reqQuery) {
        this.query = query;
        this.reqQuery = reqQuery;
    }

    filter() {
        const {sort: sortBy, select: fields, page, limit, numericFilters} = this.reqQuery;
        if (sortBy) {
            this.sort(sortBy);
        }
        if (fields) {
            this.select(fields);
        }
        if (numericFilters){
            this.numericValueFilter(numericFilters);
        }

        this.paginate(page, limit);
        return this.query;
    }

    sort(sortBy) {
        const sortList = sortBy.split(',').join(' ');
        this.query = this.query.sort(sortList);
    }

    select(selectBy) {
        const selectList = selectBy.split(',').join(' ');
        this.query = this.query.select(selectList);
    }

    paginate(pageNumber, limitItems) {
        const page = +pageNumber || 1;
        const limit = +limitItems || 10;
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit);
    }

    numericValueFilter(numericFilters){
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        }
        const regEx = /\b(>|>=|=|<|<=)\b/d;
        let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`);
        const options = ['price', 'rating'];
        filters.split(',').forEach(item=>{
            const [field, operator, value] = item.split('-');
            if (options.includes(field)){
                this.query = this.query.find({[field]: {[operator]: +value}});
            }
        })
    }
}

module.exports = Filters;