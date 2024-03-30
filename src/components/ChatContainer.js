function ChatContainer(props) {
  return (
    <div className="Chat-Box-Container">
      <img src={props.img} alt="img1" className="Chat-Box-Container-Search" />
      <div className="Chat-Box-Container-Text">
        <div className="Chat-Box-Container-Text1">
          <p className="Chat-Box-Container-Text1-p">{props.person}</p>
          <p className="Chat-Box-Container-Text1-2p">{props.mass}</p>
        </div>
        <div className="Chat-Box-Container-Text2">
          <p className="Chat-Box-Container-Text2-1p">{props.tim}</p>
          <i>
            <i class="fa-solid fa-star" style={{ color: "#36D39F" }}></i>
          </i>
        </div>
      </div>
    </div>
  );
}

export default ChatContainer