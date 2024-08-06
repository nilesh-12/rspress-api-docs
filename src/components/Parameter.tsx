import React from "react";
interface Props {
  name: string;
  type: string;
  required?: boolean;
}

export default function Parameter(props: Props) {
  return (
    <h4
      data-testid="element-title"
      className="⚙ rs10 as1k as112 as19l as19m as14l as18 as14k as19n as19o as19p ⚙ejy77s"
    >
      <button
        data-testid="element-link"
        className="⚙ rs10 rs13  as11y as166 as19q as19r as17s as19s as11x as19t as19u as14 as114 as19v as19w as115 as19x ⚙nvg27c"
      >
        <svg
          width={13}
          height={13}
          viewBox="0 0 13 13"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 16, height: 16 }}
        >
          <g fillRule="evenodd">
            <path d="M7.778 7.975a2.5 2.5 0 00.347-3.837L6.017 2.03a2.498 2.498 0 00-3.542-.007 2.5 2.5 0 00.006 3.543l1.153 1.15c.07-.29.154-.563.25-.773a2.46 2.46 0 01.14-.25L3.18 4.85a1.496 1.496 0 01.002-2.12 1.496 1.496 0 012.12 0l2.124 2.123a1.496 1.496 0 01-.333 2.37c.16.246.42.504.685.752z" />
            <path d="M5.657 4.557a2.5 2.5 0 00-.347 3.837l2.108 2.108a2.498 2.498 0 003.542.007 2.5 2.5 0 00-.006-3.543L9.802 5.815c-.07.29-.154.565-.25.774-.036.076-.084.16-.14.25l.842.84c.585.587.59 1.532 0 2.122a1.495 1.495 0 01-2.12 0L6.008 7.68a1.496 1.496 0 01.332-2.372c-.16-.245-.42-.503-.685-.75z" />
          </g>
        </svg>
      </button>
      <div className="⚙ rs10 rs12 as1k as112 as118 ⚙1mpw039">
        <div>
          <span
            className="⚙ rs10 as1k as17c as19l as19o ⚙unb8p9"
            style={{
              display: "flex",
              color: "rgb(53, 58, 68)",
              columnGap: 8,
              lineHeight: "20px",
            }}
          >
            <span
              className="⚙ rs12 as19y as177 as176 as150 as19z ⚙q4bebn"
              style={{ fontFamily: "monospace", fontSize: 14, fontWeight: "bold" }}
            >
              <span>{props.name}</span>
            </span>
            <span
              className="⚙ rs12 as164 as11f as11g ⚙1k1i9x6"
              style={{ fontSize: 12 }}
            >
              {props.type}
            </span>
            {props.required && (
              <span
                className="⚙ rs12 rs12 as18q as1bo as1dy as1dz ⚙1suqlbb"
                style={{ fontSize: 12, color: "rgb(177, 54, 0)", borderColor: "rgb(251, 217, 146)", fontWeight: 600 }}
              >
                Required
              </span>
            )}
          </span>
        </div>
      </div>
    </h4>
  );
}
