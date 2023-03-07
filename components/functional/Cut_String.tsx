export default function Cut_String(props: { text: string }) {
  const text = props.text;
  const newText = text
    .split("\\n")
    .map((str, idx) => <p key={"text" + idx}>{str}</p>);

  return <>{newText}</>;
}
