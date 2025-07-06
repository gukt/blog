export default function SearchBox() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="搜索任意文章..."
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
