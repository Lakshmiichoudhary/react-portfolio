import React from "react";

const SolarSystem = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
    >
     
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-primary/20 blur-3xl animate-pulse" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-primary/50 bg-primary/20 shadow-[0_0_40px_rgba(56,189,248,0.4)]" />

      {/* Orbit 1 (Inner) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] rounded-full border border-border/30 animate-[spin_35s_linear_infinite]">
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-primary shadow-[0_0_15px_rgba(56,189,248,0.8)]" />
      </div>

      {/* Orbit 2 (Middle) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] sm:h-[680px] sm:w-[680px] rounded-full border border-border/20 animate-[spin_50s_linear_infinite_reverse]">
        <span className="absolute top-1/2 -right-2 -translate-y-1/2 h-4 w-4 rounded-full bg-indigo-400 shadow-[0_0_20px_rgba(129,140,248,0.8)]" />
      </div>

     
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] sm:h-[1000px] sm:w-[1000px] rounded-full border border-border/15 animate-[spin_75s_linear_infinite]">
        <span className="absolute bottom-10 left-1/4 h-5 w-5 rounded-full border border-primary/50 bg-background shadow-[0_0_25px_rgba(56,189,248,0.5)]" />
      </div>

      <span className="absolute left-[10%] top-[18%] h-1 w-1 rounded-full bg-primary/60 animate-ping" />
      <span className="absolute left-[25%] top-[12%] h-1.5 w-1.5 rounded-full bg-text-secondary/40" />
      <span className="absolute left-[40%] top-[25%] h-1 w-1 rounded-full bg-primary/40" />
      <span className="absolute right-[12%] top-[15%] h-1.5 w-1.5 rounded-full bg-primary/50" />
      <span className="absolute right-[8%] top-[55%] h-1 w-1 rounded-full bg-indigo-400/60" />
      <span className="absolute left-[15%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-primary/40" />
      <span className="absolute left-[45%] bottom-[10%] h-1 w-1 rounded-full bg-text-secondary/30" />
      <span className="absolute right-[28%] bottom-[12%] h-1 w-1 rounded-full bg-primary/50 animate-pulse" />
    </div>
  );
};

export default SolarSystem;