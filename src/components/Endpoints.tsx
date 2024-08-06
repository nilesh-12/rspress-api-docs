interface Props {
  items: { id: string; method: "POST" | "GET"; url: string }[];
}
export default function Endpoints(props: Props) {
  return (
    <div className="language-http">
      <div className="rspress-code-title">ENDPOINTS</div>
      <div className="rspress-code-content rspress-scrollbar">
        <div>
          <pre className="code" style={{ backgroundColor: "inherit" }}>
            <code className="language-http" style={{ whiteSpace: "pre" }}>
              <span style={{ display: "block", padding: "0 1.25rem" }}>
                {props.items.map((item) => (
                  <a href={`#${item.id}`} style={{ display: "block" }}>
                    <span
                      // className={`method-${item.method.toLocaleLowerCase()}`}
                    >
                      {item.method}
                    </span>{" "}
                    {item.url}
                  </a>
                ))}
              </span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
