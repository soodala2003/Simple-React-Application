const songs = [
  { title: "Royals", singer: "Lorde" },
  { title: "Cruel Summer", singer: "Taylor Swift "},
];

export default function Content(props) {
  return (
    <div>
      <p style={{color: props.color}}>{props.text}</p>
      {songs.map((song) => (
        <ul>
          <li>
            <b>{song.title} </b>  by {song.singer}
          </li>
        </ul>
      ))}
    </div>
  );
}

