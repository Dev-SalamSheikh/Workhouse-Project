import React from "react";
import CopyrightFooter from "./CopyrightFooter";

const Footer = () => {
  // Catgories Link
  const categoriesLinks = [
    { id: "1", title: "Jobs" },
    { id: "2", title: "Freelancers" },
    { id: "3", title: "Gigs" },
    { id: "4", title: "Education" },
    { id: "5", title: "Local Services" },
    { id: "6", title: "Graphics & Design" },
    { id: "7", title: "Writing & Translation" },
    { id: "8", title: "Music & Audio" },
    { id: "9", title: "Programming & Tech" },
  ];

  // About Link
  const aboutLinks = [
    { id: "1", title: "Careers" },
    { id: "2", title: "Press and News" },
    { id: "3", title: "Privacy Policy" },
    { id: "4", title: "Terms of Service" },
    { id: "5", title: "Intellectual property claim" },
  ];

  // Support Link
  const supportLinks = [
    { id: "1", title: "Help and Support" },
    { id: "2", title: "Selling Support" },
    { id: "3", title: "Buyer Support" },
    { id: "4", title: "Trust & Safety" },
    { id: "5", title: "Contact Us" },
  ];

  // Coummunity Link
  const communityLinks = [
    { id: "1", title: "Blog" },
    { id: "2", title: "Forum" },
    { id: "3", title: "Podcase" },
    { id: "4", title: "Community Standards" },
    { id: "5", title: "Company Employers" },
  ];

  return (
    <>
      <div className="border border-t-slate-300 bg-Banner px-8 lg:px-20 pt-3 pb-8">
        <div className="footer_links flex justify-between gap-6 md:gap-0 flex-wrap lg:flex-nowrap">
          {/* Categories */}
          <div className="w-[45%] md:w-6/12 lg:w-full">
            <h1 className="text-xl font-semibold mb-2">Categories</h1>
            <div>
              {categoriesLinks.map((link) => (
                <li
                  key={link.id}
                  className="list-none font-medium cursor-pointer md:text-base text-sm"
                >
                  {link.title}
                </li>
              ))}
            </div>
          </div>
          {/* About */}
          <div className="w-[45%] md:w-6/12 lg:w-full">
            <h1 className="text-xl font-semibold mb-2">About</h1>
            <div>
              {aboutLinks.map((link) => (
                <li
                  key={link.id}
                  className="list-none font-medium cursor-pointer md:text-base text-sm"
                >
                  {link.title}
                </li>
              ))}
            </div>
          </div>
          {/* Support */}
          <div className="w-[45%] md:w-6/12 lg:w-full">
            <h1 className="text-xl font-semibold mb-2">Support</h1>
            <div>
              {supportLinks.map((link) => (
                <li
                  key={link.id}
                  className="list-none font-medium cursor-pointer md:text-base text-sm"
                >
                  {link.title}
                </li>
              ))}
            </div>
          </div>
          {/* Community */}
          <div className="w-[45%] md:w-6/12 lg:w-full">
            <h1 className="text-xl font-semibold mb-2">Community</h1>
            <div>
              {communityLinks.map((link) => (
                <li
                  key={link.id}
                  className="list-none font-medium cursor-pointer md:text-base text-sm"
                >
                  {link.title}
                </li>
              ))}
            </div>
          </div>
          {/* Explore */}
          <div>
            <h1 className="text-xl font-semibold mb-2">Explore</h1>
          </div>
        </div>
      </div>
      <CopyrightFooter />
    </>
  );
};

export default Footer;
