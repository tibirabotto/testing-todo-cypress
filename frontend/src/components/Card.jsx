import { TiDelete } from "react-icons/ti";
function Card({ task, handleDelete, findOne }) {
  return (
    <div
      onClick={findOne}
      className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5 cursor-pointer"
    >
      <button className="absolute top-2 right-2 delete" onClick={handleDelete}>
        <TiDelete size={21} color="red" />
      </button>
      <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
        {task.title}
      </span>
    </div>
  );
}

export default Card;
