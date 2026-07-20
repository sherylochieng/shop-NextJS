// export const metadata = {
//   title: "About",
// };

// export default function AboutPage() {
//   return (
//     <main style={{ maxWidth: 640, margin: "0 auto", padding: "2rem" }}>
//       <h1>About Mctaba Shop</h1>

//       <p style={{ marginTop: "1rem", lineHeight: 1.7, color: "#444" }}>
//         Mctaba Shop is a production-grade ecommerce platform built entirely
//         with Next.js, PostgreSQL, Express, and Paystack.
//       </p>

//       <p style={{ marginTop: "1rem", lineHeight: 1.7, color: "#444" }}>
//         This shop was built as part of the Mctaba Labs bootcamp — to teach
//         full-stack engineering through a real project that works like a
//         real business.
//       </p>

//       <h2 style={{ marginTop: "2rem" }}>What we sell</h2>
//       <ul style={{ marginTop: "0.75rem", lineHeight: 2, color: "#444" }}>
//         <li>Phones</li>
//         <li>Accessories</li>
//         <li>Power banks</li>
//       </ul>

//       <p style={{ marginTop: "2rem" }}>
//         <a href="/" style={{ textDecoration: "underline" }}>← Back to home</a>
//       </p>
//     </main>
//   );
// }

import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main style={{ maxWidth: 640, margin: "0 auto", padding: "5rem 2rem 3rem" }}>
      <p style={{
        color: "#ff7a00",
        fontWeight: 700,
        fontSize: "0.85rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: "0.75rem",
      }}>
        Our story
      </p>

      <h1 style={{
        fontSize: "2.5rem",
        fontWeight: 800,
        letterSpacing: "-0.03em",
        lineHeight: 1.15,
        margin: 0,
        color: "#111111",
      }}>
        About <span style={{ color: "#ff7a00" }}>Mctaba Shop</span>
      </h1>

      <p style={{ marginTop: "1.5rem", lineHeight: 1.7, color: "#555555", fontSize: "1.05rem" }}>
        Mctaba Shop is a <strong style={{ fontWeight: 700, color: "#111111" }}>production-grade ecommerce platform</strong> built
        entirely with <span style={{ fontWeight: 400 }}>Next.js, PostgreSQL, Express, and Paystack.</span>
      </p>

      <p style={{ marginTop: "1.25rem", lineHeight: 1.7, color: "#555555", fontSize: "1.05rem" }}>
        This shop was built as part of the <strong style={{ fontWeight: 700, color: "#111111" }}>Mctaba Labs bootcamp</strong> —
        to teach full-stack engineering through a real project that works like a real business.
      </p>

      <h2 style={{
        marginTop: "3rem",
        fontSize: "1.4rem",
        fontWeight: 800,
        letterSpacing: "-0.02em",
        color: "#111111",
      }}>
        What we sell
      </h2>

      <ul style={{
        marginTop: "1rem",
        lineHeight: 2,
        color: "#555555",
        fontSize: "1.05rem",
        listStyle: "none",
        padding: 0,
      }}>
        <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span style={{ color: "#ff7a00", fontWeight: 800 }}>—</span>
          <span style={{ fontWeight: 600, color: "#111111" }}>Phones</span>
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span style={{ color: "#ff7a00", fontWeight: 800 }}>—</span>
          <span style={{ fontWeight: 600, color: "#111111" }}>Accessories</span>
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span style={{ color: "#ff7a00", fontWeight: 800 }}>—</span>
          <span style={{ fontWeight: 600, color: "#111111" }}>Power banks</span>
        </li>
      </ul>

      <div style={{
        marginTop: "3rem",
        paddingTop: "1.5rem",
        borderTop: "1px solid #f0f0f0",
      }}>
        <Link href="/" style={{
          color: "#111111",
          fontWeight: 600,
          textDecoration: "none",
          fontSize: "2 rem",
        }}>
          ← Back to home
        </Link>
      </div>
    </main>
  );
}