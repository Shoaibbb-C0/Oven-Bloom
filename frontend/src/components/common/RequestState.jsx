export function LoadingState({ label = 'Loading…' }) {
  return <div className="request-state" role="status"><span className="request-state__spinner" aria-hidden="true" />{label}</div>
}

export function ErrorState({ message, onRetry }) {
  return <div className="request-state request-state--error" role="alert"><p>{message}</p>{onRetry && <button className="button button--secondary" type="button" onClick={onRetry}>Try again</button>}</div>
}
