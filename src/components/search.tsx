import { Input } from './ui/input'
import { Button } from './ui/button'
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input className="rounded-md outline-none text-[#262626]" placeholder="Search..." type="search" />
      <Button className="rounded-md bg-white" type="submit">
        <IoSearch className="w-4 h-4 text-black" />
      </Button>
    </div>
  )
}

export default Search