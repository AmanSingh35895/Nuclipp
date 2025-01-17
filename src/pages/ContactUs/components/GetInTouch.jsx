import React, { useState } from "react";

const GetInTouch = () => {

    const [selectedCountryCode, setSelectedCountryCode] = useState("IND");
    const [phoneNumber, setPhoneNumber] = useState("");

    const countryCodes = {
        IND: "+91 ",
        USA: "+1 ",
        UK: "+44 ",
        AUS: "+61 ",
    };

    const handleCountryCodeChange = (event) => {
        setSelectedCountryCode(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };


    return (
        <div className="h-fit flex justify-evenly items-start p-6 pb-3 px-20 w-full font-inter">
            {/* Form Section */}
            <div className="w-[35%] lg:w-1/2 h-full p-2">
                <h2 className="text-[2rem] font-bold mb-2 text-[#101828]">Get in touch</h2>
                <p className="text-[#667085] mb-6 text-[1rem] font-normal">
                    Our friendly team would love to hear from you.
                </p>
                <form className="space-y-4">
                    {/* Name Inputs */}
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <label
                                htmlFor="first-name"
                                className="text-sm font-medium text-[#344054] mb-1"
                            >
                                First Name
                            </label>

                            <input
                                type="text"
                                placeholder="First name"
                                className="w-full border border-[#D0D5DD] p-3 rounded-lg focus:outline-none placeholder:text-[#667085]"
                                required
                            /></div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="last-name"
                                className="block text-sm font-medium text-[#344054] mb-1"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                placeholder="Last name"
                                className="w-full border border-[#D0D5DD] p-3 rounded-lg focus:outline-none placeholder:text-[#667085]"
                                required
                            /></div>


                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-[#344054] mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@gmail.com"
                            className="w-full border border-[#D0D5DD] p-3 rounded-lg focus:outline-none placeholder:text-[#667085]"
                            required
                        />
                    </div>


                    {/* Phone Number */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="Phone number"
                            className="block text-sm font-medium text-[#344054] mb-1"
                        >
                            Phone number
                        </label>
                        <div className="flex w-full items-center border border-[#D0D5DD] rounded-lg overflow-hidden">
                            <select
                                value={selectedCountryCode}
                                onChange={handleCountryCodeChange}
                                className="px-3 py-2 border-r-0 focus:outline-none font-normal appearance-none"
                            >
                                {Object.keys(countryCodes).map((code) => (
                                    <option key={code} value={code} className="hover:bg-red-500">
                                        {code}
                                    </option>
                                ))}
                            </select>
                            <span>{countryCodes[selectedCountryCode]}</span>
                            <input
                                type="number"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                placeholder="Enter phone number"
                                className="w-full flex-1 px-4 py-2 focus:outline-none placeholder:text-[#667085] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                            <img src="assets/images/help.png" alt="help" className="h-[1.25rem] mr-3"/>
                        </div>
                        <div className="text-[#667085] font-normal mt-1">This is a hint text to help user.</div>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-[#344054] mb-1"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="w-full border border-[#D0D5DD] p-3 rounded-lg focus:outline-none placeholder:text-[#667085]"
                            aria-label="Subject"
                        />
                    </div>


                    {/* Message */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-[#344054] mb-1"
                        >
                            Message
                        </label>
                        <textarea
                            placeholder="Your message"
                            className="w-full border border-[#D0D5DD] p-3 rounded-lg focus:outline-none placeholder:text-[#667085] resize-none"
                            rows="5"
                        ></textarea>
                    </div>


                    {/* Privacy Policy */}
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="privacy-policy"
                            className="mt-1 h-5 w-5 border border-[#D0D5DD] rounded appearance-none checked:before:content-['✔'] flex justify-center items-center"
                            required
                        />
                        <label htmlFor="privacy-policy" className="text-md font-normal  text-[#667085]">
                            You agree to our friendly
                            <a
                                href="/privacy-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#FF7171] underline pl-1"
                            >
                                privacy policy
                            </a>
                            .
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full border-[1.5px] border-[#FF7171] py-[14px] px-[20px] rounded-[5px] font-inter font-semibold bg-[#FF7171] text-[#F8FAFC] duration-500 mt-8"
                    >
                        Send message
                    </button>
                </form>
            </div>

            {/* Image Section */}
            <div className="w-[40%] h-[120vh] px-4 overflow-hidden">
                <img
                    src="assets/images/contactus.png"
                    alt="Phones on wall"
                    className="object-scale-down h-full w-full"
                />
            </div>
        </div>
    );
};

export default GetInTouch;
