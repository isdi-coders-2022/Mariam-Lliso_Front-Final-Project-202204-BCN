import LoaderStyle from "./LoaderStyle";

const Loader = (): JSX.Element => {
  return (
    <LoaderStyle>
      <div className="dot-pulse">
        <div className="dot-pulse__dot"></div>
      </div>
    </LoaderStyle>
  )
}

export default Loader;
