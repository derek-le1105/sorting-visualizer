const Button = (props) => {
  return (
    <>
      <button onClick={props.task} style={{ margin: '15px' }}>
        {props.title}
      </button>
    </>
  );
};

export default Button;
