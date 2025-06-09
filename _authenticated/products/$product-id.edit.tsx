import { createFileRoute, useLoaderData } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authenticated/products/$product-id/edit',
)({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = params['product-id']
    return { product }
  },
})

function RouteComponent() {
  const { product } = useLoaderData({ from: Route.id })
  return <div>Hello "/_authenticated/products/{product}/edit"!</div>
}
