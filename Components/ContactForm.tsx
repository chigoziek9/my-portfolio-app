

export default function ContactForm() {
  return (
    <div className="mt-5 w-full max-w-3xl mx-auto p-0 sm:p-">
      <form className="space-y-4 border border-[#e3e4e6] p-6 sm:p-8 bg-white rounded-lg">
        
        {/* First + Last Name (split in 2 columns on md+, stack on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">First Name</label>
            <input
              type="text"
              className="w-full p-2 border border-[#e3e4e6] rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter first name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Last Name</label>
            <input
              type="text"
              className="w-full p-2 border border-[#e3e4e6] rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter last name"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block mb-1 font-medium">Subject</label>
          <input
            type="text"
            className="w-full p-2 border border-[#e3e4e6] rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter subject"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            rows={5}
            className="w-full p-2 border border-[#e3e4e6] rounded-md focus:ring focus:ring-blue-300"
            placeholder="Type your message..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
