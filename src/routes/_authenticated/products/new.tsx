import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/products/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/products/new"!</div>
}
