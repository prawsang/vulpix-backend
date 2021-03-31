const paginate = async ({ model, params, limit = 25, page = 1 }) => {
	const offset = limit * (page - 1)
	let errors = null
	const results = await model
		.findAll({
			...params,
			offset,
			limit,
		})
		.catch((err) => (errors = err))
	const count = await model
		.count({
			...params,
		})
		.catch((err) => (errors = err))
	return {
		data: results,
		count,
		totalPages: Math.ceil(count / limit),
		errors,
	}
}

module.exports = {
	paginate,
}
