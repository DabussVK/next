import Image from "next/image";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="w-full bg-black fixed top-0 z-50 py-2 text-white text-center overflow-hidden">
        </div>
        <div className="flex justify-center">
          <p className="text-center" style={{ fontSize: '30px', color: 'floralwhite' }}>
            Imie i Nazwisko: Kamil Dąbek
            <br/>
            Numer Indeksu: 121669
            <br/>
            <br/>
              Tak, to mój samochód. Napewno padło by to pytanie :)
              <br>
              </br>
              <br>
              </br>

            <Image className="items-center"
                src="/astra.jpg"
                alt="Auto_Opel_Astra_H_GTC"
                width={600}
                height={400}
            />
          </p>
        </div>
      </main>
  );
}