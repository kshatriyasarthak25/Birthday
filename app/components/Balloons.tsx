export default function Balloons() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="balloon"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  )
}

