import { useRouter } from "next/dist/client/router"

const Example = () => {
  const router = useRouter()
  return (
    <div>
      {router.query.id}
    </div>
  )
}


export default Example