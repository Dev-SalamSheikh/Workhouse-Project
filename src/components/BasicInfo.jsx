import ImageUpload from "../images/addimage.png";

const BasicInfo = ({ setPage, page, formData, setFormData }) => {
  return (
    <div className="">
      {/* Full Name */}
      <div>
        <p className="text-base md:text-lg font-semibold">Full Name</p>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({
              ...formData,
              fullName: e.target.value,
            })
          }
          className="bg-transparent border border-slate-400 rounded-md p-1 w-full md:w-4/12 outline-none"
        />
      </div>

      {/* Address */}
      <div className="mt-4">
        <p className="text-base md:text-lg font-semibold">Address</p>
        <input
          type="text"
          value={formData.address}
          onChange={(e) =>
            setFormData({
              ...formData,
              address: e.target.value,
            })
          }
          className="bg-transparent border border-slate-400 rounded-md p-1 w-full md:w-6/12 outline-none"
        />
      </div>

      {/* Telephone */}
      <div className="mt-4">
        <p className="text-base md:text-lg font-semibold">Telephone number</p>
        <input
          type="text"
          value={formData.telephone}
          onChange={(e) =>
            setFormData({
              ...formData,
              telephone: e.target.value,
            })
          }
          className="bg-transparent border border-slate-400 rounded-md p-1 w-full md:w-4/12 outline-none"
        />
      </div>

      {/* Email */}
      <div className="mt-4">
        <p className="text-base md:text-lg font-semibold">Email Address</p>
        <input
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          className="bg-transparent border border-slate-400 rounded-md p-1 w-full md:w-5/12 outline-none"
        />
      </div>

      {/* Upload Image */}
      <div className="image w-full md:w-5/12 mt-4">
        <div className="bg-white w-max text-center">
          <p className="font-bold py-2">Add Image</p>
          <label htmlFor="file">
            <img src={ImageUpload} alt="image_upload" />
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            value={formData.imageUrl}
            onChange={(e) =>
              setFormData({
                ...formData,
                imageUrl: e.target.files[0],
              })
            }
          />
        </div>
      </div>

      {/* Country Select */}
      <div
        className="mt-4 p-2 w-full md:w-6/12 lg:w-3/12 rounded-sm"
        style={{ backgroundColor: "#999999" }}
      >
        <select
          className="bg-transparent w-full text-lg"
          value={formData.country}
          onChange={(e) =>
            setFormData({
              ...formData,
              country: e.target.value,
            })
          }
        >
          <option>Country</option>
          <option value="nigeria">Nigeria</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="india">India</option>
          <option value="bangladesh">Bangladesh</option>
        </select>
      </div>

      {/* Category Select */}
      <div
        className="mt-4 p-2 w-full md:w-6/12 lg:w-3/12 rounded-sm"
        style={{ backgroundColor: "#999999" }}
      >
        <select
          className="bg-transparent w-full text-lg"
          value={formData.business}
          onChange={(e) =>
            setFormData({
              ...formData,
              business: e.target.value,
            })
          }
        >
          <option>Business</option>
          <option value="business">Business 2</option>
          <option value="business">Business 3</option>
          <option value="business">Business 4</option>
          <option value="business">Business 5</option>
          <option value="business">Business 6</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="mt-8 lg:mt-16 text-end">
        <button
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
          style={{ backgroundColor: "#999999" }}
          className="text-white font-semibold text-lg p-2 rounded-lg"
        >
          {page === 0 ? "Let's create your CV" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default BasicInfo;
