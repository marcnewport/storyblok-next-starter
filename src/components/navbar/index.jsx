const items = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'About',
    href: '#',
  },
  {
    label: 'Projects',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
]

export function Navbar() {
  return (
    <nav className="flex bg-slate-100 p-4">
      <ul className="flex gap-4">
        {items.map((item, id) => (
          <li key={id}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
