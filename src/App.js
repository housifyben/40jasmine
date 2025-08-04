import React from "react";

export default function PropertyPage() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <section className="relative h-[100vh] bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://drive.google.com/uc?export=view&id=1xe-YULBkwL2-LN3Ru5PABi6NkpAWpH0K')` }}></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="text-white text-4xl md:text-6xl font-bold z-10 text-center px-4">40 Jasmine Circle<br />Santa Rosa Beach, FL 32459</h1>
      </section>
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6">Experience coastal luxury at its finest</h2>
        <p className="text-lg leading-relaxed mb-4">
          Nestled high above the sand within one of the most private gated communities along the entire 30A corridor, this home boasts truly unparalleled views of the famous Emerald Coast.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Fully rebuilt from the studs and styled with the elegance of Alys Beach, this home combines hurricane-grade construction and durability (poured concrete, steel framing, Cat-5 windows) with a refined design palette.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Inside and out, light-filled luxury meets timeless design: rich applications of venetian plaster and pecky cypress, clean, modern lines, high-end fixtures, custom cabinetry, spa-like bathrooms, and an inviting open layout offer comfort and elegance at every turn.
        </p>
        <p className="text-lg leading-relaxed">
          On the main level, soaring 20-foot pecky cypress ceilings, white oak floors, and venetian plaster walls frame expansive views of the famous 30A coastline.
        </p>
      </section>
    </div>
  );
}
