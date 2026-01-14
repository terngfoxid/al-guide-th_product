export default function CutString(props: { text: string }) {
  const text = props.text;
  const newText = text
    .split("\\n")
    .map((str, idx) => <p key={"text" + idx}>{str}</p>);

  return <div>{newText}</div>;
}