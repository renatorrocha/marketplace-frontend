import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='bg-orange-base'>Hello "/login"!</div>
}
