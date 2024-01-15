type ErrorPageProps = {
  message?: string
}

export default function Error(props: ErrorPageProps) {
  const { message } = props
  return (
    <div>
      <h1>{message ? message : 'Error Page!'}</h1>
    </div>
  )
}
