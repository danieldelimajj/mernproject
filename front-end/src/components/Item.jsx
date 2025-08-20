import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/313604004.jpg?k=1920263762475fc6a6d390580b3e428794de63cd7f1a2573330cb1d82ee56857&o=&hp=1"
        alt="Imagem da acomodação"
        className="aspect-square rounded-2xl object-cover"
      />

      <div>
        <h3 className="text-xl font-semibold">Cabo Frio, Rio de janeiro.</h3>
        <p className="truncate text-gray-600">Cobertura, duplex, em frente a praia das </p>
        <p>
          <span className="font-semibold">R$ 550,00</span> por noite
        </p>
      </div>
    </a>
  );
};

export default Item;
