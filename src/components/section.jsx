export function Section({ children, nowrap }) {
  return (
    <ConditionalWrap
      condition={!nowrap}
      wrap={(children) => (
        <section className="p-6">
          <div className="m-auto max-w-4xl">{children}</div>
        </section>
      )}
    >
      {children}
    </ConditionalWrap>
  )
}

function ConditionalWrap({ condition, wrap, children }) {
  return condition ? wrap(children) : children
}
