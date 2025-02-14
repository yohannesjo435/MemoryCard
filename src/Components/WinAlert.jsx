function WinAlert({handleRestart}) {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial', width: "400px", outline: "1px solid  #333", margin: "30px auto", padding: "20px"
       }}
    >
      <div style={{margin: "auto",}}>
        <div>
          <h1>YOU WON</h1>
        </div>

        <div>
          <p>Do you want to play again? </p>
        </div>

        <div>
          {/* <Button variant="secondary">No</Button> */}
          <button style={{padding: "2px 40px", fontSize: "20px"}} onClick={handleRestart}>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default WinAlert;