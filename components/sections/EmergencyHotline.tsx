const EmergencyHotline = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Emergency medical team"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Title */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center">
              <div className="h-px w-8 bg-white mr-4"></div>
              <span className="text-white text-sm font-medium tracking-widest uppercase">
                Emergency Support
              </span>
              <div className="h-px w-8 bg-white ml-4"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
            Emergency Hotline
          </h2>

          {/* Phone Numbers */}
          <div className="space-y-6 mb-10">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 hover:text-[#5DBA45] transition-colors duration-300">
                +41 77 503 90 88
              </div>
              <div className="text-white/80 text-sm">Switzerland</div>
            </div>

            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 hover:text-[#5DBA45] transition-colors duration-300">
                +34 65 236 14 49
              </div>
              <div className="text-white/80 text-sm">Spain</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyHotline;
