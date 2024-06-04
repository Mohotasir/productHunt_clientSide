import TagCompnt from "./TagCompnt";

export default function AddProduct() {
  return (
    <div className="max-w-screen-lg mx-auto border border-r-gray-50 p-8 rounded-lg mt-6">
      <div></div>
      <form className="flex flex-col gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="">
            <label className="text-sm" htmlFor="name">
              Product name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
              type="text"
              name="name"
              id="name"
              placeholder="product name.."
            />
          </div>
          <div className="">
            <label className="text-sm" htmlFor="image">
              Product image
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
              type="text"
              name="image"
              id="image"
              placeholder="product img URL.."
            />
          </div>
        </div>
        <label className="text-sm" htmlFor="des">
          Description
        </label>
        <textarea
          className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
          name="des"
          id="des"
          rows="2"
          cols="50"
        ></textarea>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div>
            <label className="text-sm" htmlFor="username">
              My Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
              type="text"
              name="username"
              id=""
            />
          </div>
          <div>
            <label className="text-sm" htmlFor="userphoto">
              My Image
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
              type="text"
              name="userphoto"
              id=""
            />
          </div>
          <div>
            <label className="text-sm" htmlFor="useremail">
              My Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
              type="email"
              name="useremail"
              id=""
            />
          </div>
        </div>

        <TagCompnt></TagCompnt>
        <label className="text-sm" htmlFor="links">
          External link
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
          type="text"
          name="links"
          id=""
        />
      </form>
    </div>
  );
}
