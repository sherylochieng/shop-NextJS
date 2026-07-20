

// export default function HomePage() {
//   return (
//     <main style={{ maxWidth: 640, margin: "0 auto", padding: "2rem" }}>
//       <h1>Welcome to Mctaba Shop</h1>
//       <p style={{ color: "#444", marginTop: "0.5rem", lineHeight: 1.6 }}>
//         We sell good things at fair prices. Phones, accessories, and more.
//       </p>
//       <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
//         <a
//           href="/products"
//           style={{
//             background: "#000",
//             color: "#fff",
//             padding: "0.75rem 1.5rem",
//             borderRadius: 4,
//             fontWeight: 500,
//           }}
//         >
//           Browse Products
//         </a>
//         <a
//           href="/about"
//           style={{
//             border: "1px solid #000",
//             padding: "0.75rem 1.5rem",
//             borderRadius: 4,
//             fontWeight: 500,
//           }}
//         >
//           About Us
//         </a>
//       </div>
    

    

//       <p style={{ marginTop: "3rem", fontSize: "0.8rem", color: "#999" }}>
//         Page rendered at: {new Date().toLocaleTimeString()}
//       </p>
//     </main>
//   );
// }

import Link from "next/link";

export default function HomePage() {
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
        Quality you can trust
      </p>

      <h1 style={{
        fontSize: "2.75rem",
        fontWeight: 800,
        letterSpacing: "-0.03em",
        lineHeight: 1.15,
        margin: 0,
        color: "#111111",
      }}>
        Welcome to <span style={{ color: "#ff7a00" }}>Mctaba Shop</span>
      </h1>

      <p style={{ color: "#555555", marginTop: "1.25rem", lineHeight: 1.7, fontSize: "1.05rem" }}>
        We sell <strong style={{ fontWeight: 700, color: "#111111" }}>good things at fair prices</strong>.
        Phones, accessories, and more — <span style={{ fontWeight: 400 }}>curated for people who want quality without the markup.</span>
      </p>

      <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Link
          href="/products"
          style={{
            background: "#ff7a00",
            color: "#fff",
            padding: "0.85rem 1.75rem",
            borderRadius: 8,
            fontWeight: 700,
            textDecoration: "none",
            fontSize: "0.95rem",
            boxShadow: "0 4px 14px rgba(255,122,0,0.35)",
          }}
        >
          Browse Products
        </Link>
        <Link
          href="/about"
          style={{
            border: "1.5px solid #111111",
            color: "#111111",
            padding: "0.85rem 1.75rem",
            borderRadius: 8,
            fontWeight: 600,
            textDecoration: "none",
            fontSize: "0.95rem",
          }}
        >
          About Us
        </Link>
      </div>

      <div style={{
        marginTop: "4rem",
        paddingTop: "1.5rem",
        borderTop: "1px solid #f0f0f0",
      }}>
        <p style={{ fontSize: "0.8rem", color: "#aaaaaa" }}>
          Page rendered at: <span style={{ fontWeight: 600, color: "#888888" }}>{new Date().toLocaleTimeString()}</span>
        </p>
      </div>
    </main>
  );
}