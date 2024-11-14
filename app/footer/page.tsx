export default function Footer() {
  return (
    <footer className="text-gray-400 body-font bg-[#191919]">
      <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col md:flex-row md:flex-nowrap">
        
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {["CATEGORIES", "RESOURCES", "COMPANY", "SUPPORT"].map((sectionTitle, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">{sectionTitle}</h2>
              <nav className="list-none mb-10">
                {["First Link", "Second Link", "Third Link", "Fourth Link"].map((linkText, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">{linkText}</a>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-purple-500 w-full">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm text-center sm:text-left">
            © 2024 Portfolio by AQSAWAQAR —
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-300 ml-1" target="_blank">232396</a>
          </p>
          <p className="text-gray-300 text-sm text-center sm:text-left">
            Built with ❤️ by AQSA WAQAR
          </p>
        </div>
      </div>
    </footer>
  );
}
