import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full text-center">
        <h2 className="d-block font-bold text-2xl text-gray-500 mb-1">
          Procure pelo Nome ou Nome de Usuário
        </h2>
        <h3 className="d-block text-base text-gray-500">
          Encontre os repositórios de algum usuário digitando no campo acima
        </h3>

        <Image
          className="mx-auto mt-10"
          src="/people_search_re.png"
          alt="People Search"
          width={230}
          height={257}
          priority
        />
      </div>
    </main>
  );
}
