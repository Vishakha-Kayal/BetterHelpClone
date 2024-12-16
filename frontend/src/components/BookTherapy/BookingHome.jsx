import BookingSession from "./BookingSession";
import { useParams } from "react-router-dom";

const Home = () => {
  const { id } = useParams()
  return (
    <main className=' bg-[#f9f7ef] min-h-screen '>

     
      <BookingSession id={Number(id)} />
    </main>
  )
}

export default Home