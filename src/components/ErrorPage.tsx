
interface IErrorMessage {
  message:string
}

const ErrorPage = ( { message }: IErrorMessage ) => {
  return (
    <div className="flex flex-col m-8 border border-orange-400 p-8 prose">
      <h1>Something went wrong...</h1>
      <hr />
      <p>{message}</p>
    </div>
  )
}

export default ErrorPage;