function Chat() {
    return (
      <div className="Chat-Box">
        <input type="text" placeholder="Search " className="Chat-Box-Search" />
        <i>
          <i
            className="fa-solid fa-magnifying-glass magnify-glass"
            style={{ color: "gray" }}
          ></i>
        </i>
      </div>
    );
  }

  export default Chat