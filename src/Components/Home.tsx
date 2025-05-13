import instagram from '../Components/img/sovito/instagram.png';
import whatsapp from '../Components/img/sovito/whatsapp.png';
import pin from '../Components/img/sovito/pin.png';
import cart from '../Components/img/sovito/cart.png';
import hero from '../Components/img/sovito/DSC07385 1.png';
//import dscImage from '../Components/img/sovito/DSC07364 1.png';
import cafe1 from '../Components/img/sovito/DSC07231 1.png';
import cafe2 from '../Components/img/sovito/DSC07244 1.png';
import cafe3 from '../Components/img/sovito/DSC07363 1.png';
import producao1 from '../Components/img/sovito/DSC07238 1.png';
//import producao2 from '../Components/img/sovito/DSC07235 1.png';
//import pacote from '../Components/img/sovito/DSC07392.png';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#071004] text-[#F1F4E1] font-inter">
      {/* Header */}
      <header className="w-full bg-[#071004] py-4 px-8 flex justify-between items-center border-b border-[#F1F4E1]/40">
        <nav className="flex gap-6 text-lg font-oswald">
          <a href="#" className="hover:text-yellow-100">home</a>
          <a href="#" className="hover:text-yellow-100">sobre nós</a>
          <a href="#" className="hover:text-yellow-100">cafés</a>
          <a href="#" className="hover:text-yellow-100">contato</a>
        </nav>
      </header>



      {/* Hero Section */}
      <section className="relative w-full h-[700px]">
        <img src={hero} alt="Hero background" className="w-full h-full object-cover brightness-[.4]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-serif text-center text-[#F1F4E1] shadow-lg">
            Bem-vindo ao café de verdade
          </h1>
        </div>
      </section>

           {/* Safra */}
      <section className="py-16 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-2">Safra 2024/2025</h2>
        <h3 className="text-4xl font-serif text-center mb-6">do pé para sua casa</h3>
        <p className="text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8">
          O blend perfeito das variedades catuaí amarelo e vermelho, este café possui notas de Chocolate amargo, caramelo e frutas negras, resultando em uma bebida irresistível e complexa. A classificação de 83 pontos SCA comprova sua qualidade como café de especialidade, enquanto sua torra média clara proporciona uma experiência suave e complexa.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <img src={cafe1} className="h-60 rounded-xl shadow-md" />
          <img src={cafe3} className="h-60 rounded-xl shadow-md" />
          <img src={cafe2} className="h-60 rounded-xl shadow-md" />
        </div>
      </section>


      {/* História */}
      <section className="py-16 px-8 max-w-5xl mx-auto">
        <h2 className="text-4xl font-serif mb-6 text-center">Conheça nossa história</h2>
        <hr className="w-1/2 mx-auto border-[#F1F4E1]/40 mb-6" />
        <p className="text-base md:text-lg leading-relaxed">
          Vitor Ferreira, o Sô Vito, dedicou a vida à sua plantação de café, no pequeno Sítio Ouvidor, em Minas Gerais. Viveu seus 80 anos no pequeno distrito de Guaipava, onde criou seus 6 filhos. O café era fonte de subsistência da família, e foi a partir dele que Sô Vito conseguiu oferecer oportunidades para uma vida melhor aos seus filhos. Ele sabia apenas assinar seu nome, mas seu espírito inquieto o fazia buscar soluções e inovar em sua pequena plantação. Sô Vito era extremamente batalhador e enfrentou bravamente os desafios da sua realidade. Seu sonho de produzir um café de qualidade passou entre as gerações, e hoje o Café Sovito é a realização desse sonho e uma homenagem a esse homem que ensinou tanto aos que conviveram com ele. Seu legado permanece vivo em cada xícara de café.
        </p>
      </section>

      {/* Produção */}
      <section className="py-16 px-8 max-w-5xl mx-auto">
        <h2 className="text-4xl font-serif mb-6 text-center">Nossa produção</h2>
        <hr className="w-1/3 mx-auto border-[#F1F4E1]/40 mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={producao1} alt="Produção 1" className="rounded-xl shadow-lg" />
          <p className="text-base md:text-lg leading-relaxed">
            No pequeno distrito de Guaipava, no sul de Minas, é onde o Sítio Ouvidor está localizado e guarda o segredo para uma produção de qualidade altíssima: a combinação única de altitude, qualidade da terra, angulação do terreno e posição em relação ao sol somados à plantas de extrema qualidade e cuidado com a terra. Mas tudo isso ainda não seria suficiente sem todo o cuidado no pré e pós colheita, garantido que o melhor dos café chegue até você.
          </p>
        </div>
      </section>

 
      {/* Produtos */}
      <section className="py-16 px-8 bg-[#304026]">
        <h2 className="text-4xl font-serif text-center mb-12">Nosso café</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Produto 1 */}
          <div className="relative bg-[#48603E] rounded-xl shadow-xl p-4 flex flex-col items-center">
            <img src={cafe3} alt="Só um cadin" className="w-56 h-72 object-cover rounded-md -mt-16 z-10" />
            <div className="bg-[#48603E] text-white text-xl font-oswald mt-6">só um cadin - 250g</div>
            <p className="text-sm text-center mt-3 max-w-xs">
              Só um cadin é a opção ideal para os amantes de cafés especiais que buscam uma experiência única de sabor,
              mas gostam de variar os cafés especiais, ou experimentar novos cafés no mês.
            </p>
            <div className="flex gap-2 mt-4">
              <button className="border border-[#F1F4E1] text-sm rounded-lg px-3 py-1">moído</button>
              <button className="border border-[#F1F4E1] text-sm rounded-lg px-3 py-1">grãos</button>
            </div>
            <a href="#" className="mt-4 bg-[#F1F4E1] text-[#071004] px-5 py-2 rounded-lg text-sm font-medium">
              comprar na Shopee
            </a>
          </div>

          {/* Produto 2 */}
          <div className="relative bg-[#48603E] rounded-xl shadow-xl p-4 flex flex-col items-center">
            <img src={cafe3} alt="Sem Miserê" className="w-56 h-72 object-cover rounded-md -mt-16 z-10" />
            <div className="bg-[#48603E] text-white text-xl font-oswald mt-6">sem miserê - 500g</div>
            <p className="text-sm text-center mt-3 max-w-xs">
              Sem Miserê é perfeito para quem ama café especial e quer saborear à vontade, tendo garantia do sabor
              que só o Sovito tem, com a segurança de nunca ficar sem.
            </p>
            <div className="flex gap-2 mt-4">
              <button className="border border-[#F1F4E1] text-sm rounded-lg px-3 py-1">moído</button>
              <button className="border border-[#F1F4E1] text-sm rounded-lg px-3 py-1">grãos</button>
            </div>
            <a href="#" className="mt-4 bg-[#F1F4E1] text-[#071004] px-5 py-2 rounded-lg text-sm font-medium">
              comprar na Shopee
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f07] text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif mb-8">Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={instagram} alt="Instagram" className="h-6" />
                <span>@cafesovito</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={whatsapp} alt="WhatsApp" className="h-6" />
                <span>(42) 99999999</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={cart} alt="Shopee" className="h-6" />
                <span>loja na shopee</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={pin} alt="Pontos de venda" className="h-6" />
                <span>pontos de venda</span>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
