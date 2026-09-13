export function notFound(req, res) {
  res.status(404).json({ success: false, error: { code: 'ROUTE_NOT_FOUND', message: 'Route not found.' } })
}

export function errorHandler(error, req, res, next) {
  if (res.headersSent) return next(error)
  const status = Number.isInteger(error.status) ? error.status : 500
  res.status(status).json({ success: false, error: { code: status === 500 ? 'INTERNAL_ERROR' : 'REQUEST_ERROR', message: status === 500 ? 'Internal server error.' : error.message } })
}
