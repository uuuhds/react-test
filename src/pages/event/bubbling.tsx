function Bubbling() {
  const pClick = () => {
    console.log("pClick");
  };
  const sClick = () => {
    console.log("sClick");
  };

  return (
    <div onClick={pClick}>
      <h1>Bubbling</h1>
      <div onClick={sClick}>SonClick</div>
      <button>button without click method</button>
    </div>
  );
}

export default Bubbling;
