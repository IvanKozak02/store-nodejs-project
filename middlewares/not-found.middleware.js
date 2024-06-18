const notFound = (req, res) => {
    return res.status(404).send('Route was not found.')
}

module.exports = notFound;