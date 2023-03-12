export default function BreakString(props: { text: string }) {
  return props.text.split("\\n").map((str) => {
    const text = str.split("\\b").map((txt) => (
      <>
        {txt}
        <wbr />
      </>
    ));

    return (
      <>
        {text}
        <br />
      </>
    );
  });
}
